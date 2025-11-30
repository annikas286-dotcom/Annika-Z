import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Sparkles, TrendingUp, Search, LayoutTemplate, MonitorPlay } from 'lucide-react';
import { projects } from '../data';

const Home: React.FC = () => {
  const featuredProjects = projects.filter(project => project.isFeatured);

  return (
    <div className="w-full">
      <style>{`
        .feather-mask {
            mask-image: radial-gradient(ellipse at center, black 40%, transparent 100%);
            -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 100%);
        }
        
        /* Entrance Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-enter {
          opacity: 0; /* Initially hidden */
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1100 { animation-delay: 1.1s; }
        .delay-1300 { animation-delay: 1.3s; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        
        {/* Background Image with Slow Pan */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
            <img 
                src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop" 
                alt="Abstract Background" 
                className="w-full h-full object-cover opacity-60 animate-slow-pan"
            />
            {/* Gradient Overlay for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]"></div>
            
            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        </div>

        <div className="w-[80%] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Column: Text Content */}
                <div className="flex flex-col items-start justify-center">
                    
                    {/* Staggered Main Headline */}
                    <div className="w-full mb-10 relative">
                        
                        {/* Line 1: Left aligned */}
                        <div className="flex flex-row items-baseline justify-start animate-enter delay-100">
                            <span className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-gray-400 font-medium mr-2 md:mr-4 shrink-0">將</span>
                            <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none">
                                使用者洞察，
                            </h1>
                        </div>

                        {/* Line 2 (Connector): Indented */}
                        <div className="flex items-center justify-start pl-8 sm:pl-16 my-4 animate-enter delay-300">
                            <span className="hidden sm:block h-px w-8 md:w-16 bg-gray-600 mr-4"></span>
                            <span className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-400 italic font-serif tracking-wide">
                                轉化為
                            </span>
                        </div>

                        {/* Line 3 & 4 (Impact & Product): Right aligned within the column (creates a step effect) */}
                        <div className="flex flex-col items-end animate-enter delay-500 pr-4 lg:pr-12">
                            <div className="flex flex-row items-baseline flex-wrap justify-end">
                                <span className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-white font-bold mr-2 md:mr-4 mb-2">有</span>
                                <span className="text-6xl sm:text-8xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-purple-400 leading-none drop-shadow-[0_0_25px_rgba(209,105,255,0.4)] transform hover:scale-105 transition-transform duration-500 cursor-default">
                                    影響力
                                </span>
                                <span className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-white font-bold ml-2 md:ml-4">的</span>
                            </div>
                            <div className="mt-2 relative z-10 animate-enter delay-700">
                                <span className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter">
                                    數位產品<span className="text-accent">。</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <p className="max-w-xl text-gray-200 text-lg md:text-xl mb-10 leading-relaxed text-justify animate-enter delay-900 drop-shadow-md">
                    我是 Zeng，一位以策略思維驅動的 UI/UX 設計師。我深諳從 A 到 Z 的設計流程，擅長將複雜的使用者需求梳理成直覺且高效的介面，確保設計不僅美觀，更能為您的業務帶來實質增長。
                    </p>
                    
                    <div className="animate-enter delay-1100">
                        <Link 
                            to="/portfolio" 
                            className="inline-block px-8 py-4 bg-accent text-black font-bold text-lg hover:bg-white transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(209,105,255,0.3)] hover:shadow-[0_0_30px_rgba(209,105,255,0.5)]"
                        >
                            立即探索作品
                        </Link>
                    </div>
                </div>

                {/* Right Column: Visual Placeholder */}
                <div className="w-full flex items-center justify-center animate-enter delay-1300">
                    <div className="relative w-full aspect-video bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-2xl group feather-mask">
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform cursor-pointer border border-white/20">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                            </div>
                        </div>
                        {/* Mock UI Elements */}
                        <div className="absolute top-4 left-4 right-4 h-6 flex space-x-2 z-20">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <img src="https://picsum.photos/id/201/1600/900" alt="Showcase" className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* Challenges Section - Core Values */}
      <section className="py-24 bg-card relative overflow-hidden">
        {/* Subtle decorative blobs for this section */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">我的設計，為您解決<span className="text-accent">三大挑戰</span></h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full opacity-50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Inner Glow on Hover */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:border-accent/40 group-hover:scale-110 transition-all duration-500">
                        <Lightbulb className="text-gray-400 group-hover:text-accent transition-colors duration-300" size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">體驗優化</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 group-hover:text-gray-400">UX Optimization</p>
                    
                    <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                        透過嚴謹的使用者研究，精準找出流程痛點，打造零摩擦的體驗。
                    </p>
                </div>
            </div>
            
            {/* Card 2 */}
            <div className="group relative bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:border-accent/40 group-hover:scale-110 transition-all duration-500">
                        <Sparkles className="text-gray-400 group-hover:text-accent transition-colors duration-300" size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">視覺傳達</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 group-hover:text-gray-400">Visual Clarity</p>
                    
                    <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                        運用極簡美學與清晰層次，設計出符合品牌調性且易於理解的介面。
                    </p>
                </div>
            </div>
            
            {/* Card 3 */}
            <div className="group relative bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:border-accent/40 group-hover:scale-110 transition-all duration-500">
                        <TrendingUp className="text-gray-400 group-hover:text-accent transition-colors duration-300" size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">商業賦能</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 group-hover:text-gray-400">Business Impact</p>
                    
                    <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                        將設計決策與業務目標緊密結合，確保每個像素都為最終成果服務。
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 md:text-center">
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">我的設計方法論</h2>
                 <p className="text-gray-500 text-lg">從洞察到實現 — A 到 Z 的完整設計思維</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 z-0"></div>

                {/* Step 1 */}
                <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto bg-black border-2 border-accent rounded-full flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(209,105,255,0.2)]">
                        <Search className="text-accent" size={32} />
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">I. 探索與研究</h3>
                        <p className="text-gray-400 mb-6 min-h-[48px]">鎖定真實痛點，定義正確的設計目標。</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {['使用者訪談', '競品分析', '數據解讀'].map(s => (
                                <span key={s} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/10">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto bg-black border-2 border-accent rounded-full flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(209,105,255,0.2)]">
                        <LayoutTemplate className="text-accent" size={32} />
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">II. 架構與原型</h3>
                        <p className="text-gray-400 mb-6 min-h-[48px]">建立穩固的骨架，確保資訊流程清晰流暢。</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {['線框圖', '使用者流程', '資訊架構 (IA)'].map(s => (
                                <span key={s} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/10">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>

                 {/* Step 3 */}
                 <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto bg-black border-2 border-accent rounded-full flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(209,105,255,0.2)]">
                        <MonitorPlay className="text-accent" size={32} />
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">III. 介面與互動</h3>
                        <p className="text-gray-400 mb-6 min-h-[48px]">賦予產品極簡美學，並注入靈動的互動動畫。</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {['視覺設計', 'Figma原型', '動畫效果'].map(s => (
                                <span key={s} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/10">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">專案成果</h2>
              <p className="text-gray-500 text-lg">從概念到上線的完整流程展示。</p>
              <p className="text-accent/80 text-sm mt-2">（點擊作品不只能看到介面，還能看到我的思考過程。）</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center text-accent hover:text-white transition-colors mt-6 md:mt-0">
              View All <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="group block">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-6 border border-white/5">
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover Overlay with "View Case Study" */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <span className="px-6 py-3 bg-black/80 backdrop-blur text-white font-bold rounded-full border border-accent">View Case Study</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-500">{project.category}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/portfolio" className="inline-flex items-center text-accent hover:text-white transition-colors">
              View All Projects <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;