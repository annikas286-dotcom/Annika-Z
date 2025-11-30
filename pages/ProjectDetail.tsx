import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, Clock, User, Briefcase, CheckCircle, 
  Target, Search, Workflow, Map, Monitor, Layers, Handshake, 
  AlertCircle, Layout, Sparkles, X, ZoomIn, ChevronLeft, ChevronRight
} from 'lucide-react';
import { projects } from '../data';
import BackToTopButton from '../components/BackToTopButton';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  // Helper to determine icon based on main section title
  const getIconForSectionTitle = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('研究') || lower.includes('research')) return <Search size={28} />;
    if (lower.includes('資訊架構') || lower.includes('ia') || lower.includes('flow')) return <Workflow size={28} />;
    if (lower.includes('介面') || lower.includes('ui') || lower.includes('prototyp')) return <Layout size={28} />;
    if (lower.includes('協作') || lower.includes('collaboration') || lower.includes('team')) return <Handshake size={28} />;
    return <Target size={28} />;
  };

  // Helper to determine icon based on subtitle keywords
  const getIconForSubtitle = (subtitle: string) => {
    const lower = subtitle.toLowerCase();
    if (lower.includes('問題') || lower.includes('problem') || lower.includes('challenge')) return <Target size={24} />;
    if (lower.includes('研究') || lower.includes('research') || lower.includes('insights')) return <Search size={24} />;
    if (lower.includes('資訊架構') || lower.includes('architecture')) return <Workflow size={24} />;
    if (lower.includes('旅程') || lower.includes('journey') || lower.includes('wireframe')) return <Map size={24} />;
    if (lower.includes('介面') || lower.includes('ui') || lower.includes('mockup')) return <Monitor size={24} />;
    if (lower.includes('設計系統') || lower.includes('system')) return <Layers size={24} />;
    if (lower.includes('協作') || lower.includes('collaboration') || lower.includes('team')) return <Handshake size={24} />;
    return <CheckCircle size={24} />;
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage || !project.gallery) return;
    const currentIndex = project.gallery.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % project.gallery.length;
    setSelectedImage(project.gallery[nextIndex]);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage || !project.gallery) return;
    const currentIndex = project.gallery.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + project.gallery.length) % project.gallery.length;
    setSelectedImage(project.gallery[prevIndex]);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen relative">
       {/* Hero Image */}
       <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full z-20 p-4 sm:p-8 md:p-12 max-w-7xl mx-auto">
                <Link to="/portfolio" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Portfolio
                </Link>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">{project.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-300">
                    <span className="flex items-center"><Briefcase size={16} className="mr-2 text-accent" /> {project.client}</span>
                    <span className="flex items-center"><User size={16} className="mr-2 text-accent" /> {project.role}</span>
                    <span className="flex items-center"><Clock size={16} className="mr-2 text-accent" /> {project.year}</span>
                </div>
            </div>
       </div>

       {/* Part 1: Overview & Process (Standard Width) */}
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            {/* Overview */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-accent pl-4">Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{project.overview}</p>
            </section>

            {/* Content: Either Detailed Case Study or Standard Process */}
            {project.detailedCaseStudy ? (
              <section className="mb-20">
                 <h2 className="text-3xl font-bold text-white mb-12 text-center">設計流程與決策依據</h2>
                 <p className="text-center text-gray-500 mb-16 -mt-8">The Process and Rationale</p>

                 <div className="space-y-16">
                   {project.detailedCaseStudy.map((section, idx) => (
                     <div key={idx} className="relative">
                       {/* Section Header */}
                       <div className="flex items-center mb-8">
                           <div className="mr-4 text-accent p-2 bg-accent/10 rounded-lg">
                                {getIconForSectionTitle(section.title)}
                           </div>
                           <h3 className="text-2xl font-bold text-accent border-b border-white/10 pb-2">
                             {section.title}
                           </h3>
                       </div>
                       
                       <div className="space-y-12 pl-0 md:pl-4 border-l-0 md:border-l border-white/10">
                         {section.items.map((item, itemIdx) => (
                           <div key={itemIdx} className="relative pl-0 md:pl-8">
                             
                             <div className="flex items-start mb-4">
                                <div className="p-2 bg-white/5 rounded-lg text-accent mr-4 mt-0.5 border border-white/10">
                                    {getIconForSubtitle(item.subtitle)}
                                </div>
                                <h4 className="text-xl font-bold text-white mt-1">{item.subtitle}</h4>
                             </div>
                             
                             <p className="text-gray-300 leading-relaxed whitespace-pre-line bg-card p-6 rounded-lg border border-white/5 shadow-inner ml-0 md:ml-14">
                               {item.description}
                             </p>
                           </div>
                         ))}
                       </div>
                     </div>
                   ))}
                 </div>
              </section>
            ) : (
              <section className="mb-20">
                  <h2 className="text-3xl font-bold text-white mb-10 text-center">Design Process</h2>
                  
                  <div className="space-y-16">
                      {/* Standard Process View */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                          <div className="md:col-span-4 flex items-center">
                              <div className="p-3 bg-white/5 rounded-full text-accent mr-4 border border-white/10">
                                  <AlertCircle size={24} />
                              </div>
                              <h3 className="text-xl font-bold text-white">01. The Problem</h3>
                          </div>
                          <div className="md:col-span-8 bg-card p-6 rounded-lg border border-white/5 relative">
                              <p className="text-gray-300">{project.process.problem}</p>
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                          <div className="md:col-span-4 flex items-center">
                              <div className="p-3 bg-white/5 rounded-full text-accent mr-4 border border-white/10">
                                  <Search size={24} />
                              </div>
                              <h3 className="text-xl font-bold text-white">02. Research & Discovery</h3>
                          </div>
                          <div className="md:col-span-8 bg-card p-6 rounded-lg border border-white/5 relative">
                              <p className="text-gray-300">{project.process.research}</p>
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                          <div className="md:col-span-4 flex items-center">
                              <div className="p-3 bg-white/5 rounded-full text-accent mr-4 border border-white/10">
                                  <Layout size={24} />
                              </div>
                              <h3 className="text-xl font-bold text-white">03. Wireframing</h3>
                          </div>
                          <div className="md:col-span-8 bg-card p-6 rounded-lg border border-white/5 relative">
                              <p className="text-gray-300">{project.process.wireframing}</p>
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                          <div className="md:col-span-4 flex items-center">
                              <div className="p-3 bg-white/5 rounded-full text-accent mr-4 border border-white/10">
                                  <Sparkles size={24} />
                              </div>
                              <h3 className="text-xl font-bold text-white">04. Visual Design</h3>
                          </div>
                          <div className="md:col-span-8 bg-card p-6 rounded-lg border border-white/5 relative">
                              <p className="text-gray-300">{project.process.final}</p>
                          </div>
                      </div>
                  </div>
              </section>
            )}
       </div>

       {/* Part 2: Gallery (Wide Width - 80%) */}
       {project.gallery.length > 0 && (
          <section className="mb-20 w-[90%] md:w-[80%] mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-accent pl-4">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.gallery.map((img, idx) => (
                      <div 
                        key={idx} 
                        className="rounded-xl overflow-hidden shadow-2xl border border-white/10 group aspect-video relative cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                      >
                          {/* Overlay for hover effect */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 z-10 flex items-center justify-center">
                              <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                                  <ZoomIn className="text-white" size={32} />
                              </div>
                          </div>
                          <img src={img} alt={`Final result ${idx + 1}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    ))}
              </div>
          </section>
        )}

       {/* Part 3: Outcomes & CTA (Standard Width) */}
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Outcomes Section */}
            {project.outcomes && (
              <section className="mb-20 bg-gradient-to-br from-accent/10 to-transparent p-8 rounded-2xl border border-accent/20">
                <h2 className="text-2xl font-bold text-white mb-6">成果與影響 (The Outcome)</h2>
                <ul className="space-y-4">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-accent mt-1 mr-4 flex-shrink-0" size={20} />
                      <span className="text-gray-200 text-lg leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            
            <div className="text-center pt-10 border-t border-white/10">
                <p className="text-gray-400 mb-6">Like what you see?</p>
                <Link to="/contact" className="inline-block px-8 py-4 bg-white text-black font-bold rounded hover:bg-accent transition-colors duration-300">
                    Start a Project
                </Link>
            </div>
       </div>
       
       <BackToTopButton />

       {/* Image Modal */}
       {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
            {/* Close Button */}
            <button 
                className="absolute top-6 right-6 text-white/70 hover:text-accent transition-colors bg-black/50 p-2 rounded-full z-[110]"
                onClick={() => setSelectedImage(null)}
            >
                <X size={32} />
            </button>

            {/* Left Arrow */}
            <button 
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-accent transition-colors bg-black/50 hover:bg-black/70 p-3 rounded-full z-[110]"
                onClick={handlePrevImage}
            >
                <ChevronLeft size={32} />
            </button>

            {/* Image */}
            <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-md shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
            />

            {/* Right Arrow */}
            <button 
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-accent transition-colors bg-black/50 hover:bg-black/70 p-3 rounded-full z-[110]"
                onClick={handleNextImage}
            >
                <ChevronRight size={32} />
            </button>
        </div>
       )}
    </div>
  );
};

export default ProjectDetail;