import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';
import { Category, SkillTag } from '../types';
import BackToTopButton from '../components/BackToTopButton';

const Portfolio: React.FC = () => {
  const [filterType, setFilterType] = useState<'全部' | Category>('全部');
  const [activeSkill, setActiveSkill] = useState<SkillTag | null>(null);

  // Exact filter list requested by user
  const categories: Category[] = ['App UI/UX', '網站設計', '網頁設計', '平面設計'];
  
  // Collect all unique skills for the secondary filter
  const allSkills: SkillTag[] = Array.from(new Set(projects.flatMap(p => p.tags)));

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesType = filterType === '全部' || project.category === filterType;
      const matchesSkill = activeSkill === null || project.tags.includes(activeSkill);
      return matchesType && matchesSkill;
    });
  }, [filterType, activeSkill]);

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen relative">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">精選作品。</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
            這裡匯集了我歷年來的設計精華，涵蓋 App 體驗設計、網站架構規劃與品牌視覺塑造。
        </p>
      </div>

      {/* Filters */}
      <div className="mb-12 space-y-6">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setFilterType('全部')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filterType === '全部' 
                ? 'bg-accent text-black' 
                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            全部
          </button>
          {categories.map(cat => (
             <button
             key={cat}
             onClick={() => setFilterType(cat)}
             className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
               filterType === cat 
                 ? 'bg-accent text-black' 
                 : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
             }`}
           >
             {cat}
           </button>
          ))}
        </div>

        {/* Skill Filter (Sub-filter) - Optional but good for UX given the detailed skills */}
        <div className="flex flex-wrap justify-center gap-2 items-center px-4">
            <span className="text-gray-500 text-xs uppercase tracking-wider mr-2 whitespace-nowrap">依技能篩選:</span>
            <div className="flex flex-wrap gap-2 justify-center">
            {allSkills.map(skill => (
                 <button
                 key={skill}
                 onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
                 className={`px-3 py-1 rounded text-xs border transition-all duration-300 ${
                   activeSkill === skill
                     ? 'border-accent text-accent' 
                     : 'border-white/10 text-gray-500 hover:border-gray-400'
                 }`}
               >
                 {skill}
               </button>
            ))}
            </div>
             {activeSkill && (
                <button 
                    onClick={() => setActiveSkill(null)}
                    className="text-xs text-red-400 hover:text-red-300 ml-2 whitespace-nowrap"
                >
                    清除篩選
                </button>
            )}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
            <Link 
              to={`/project/${project.id}`} 
              key={project.id} 
              className="group block bg-card rounded-lg overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 ease-out flex flex-col h-full hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.02]"
            >
                <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-accent text-xs font-bold uppercase tracking-wider border border-accent/20 px-2 py-0.5 rounded">{project.category}</span>
                        <span className="text-gray-600 text-xs font-mono">{project.year}</span>
                    </div>
                    {/* Removes content within parentheses including Chinese full-width parentheses */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {project.title.replace(/[\(（].*?[\)）]/g, '').trim()}
                    </h3>
                    
                    {/* 3-Line Description */}
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Skills List */}
                    <div className="mt-auto border-t border-white/5 pt-3">
                        <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">技能:</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
            ))
        ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
                <p>No projects found matching the selected criteria.</p>
                <button onClick={() => {setFilterType('全部'); setActiveSkill(null)}} className="mt-4 text-accent hover:underline">Reset Filters</button>
            </div>
        )}
      </div>

      <BackToTopButton />
    </div>
  );
};

export default Portfolio;