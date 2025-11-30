import React from 'react';
import { Download, PenTool, Layout, Monitor, Layers, Briefcase, Search, Users, Settings } from 'lucide-react';

const About: React.FC = () => {
  const coreSkills = [
    {
      title: '使用者研究 (User Research)',
      icon: <Search size={20} className="text-accent" />,
      items: ['訪談', '問卷', '使用者旅程地圖 (User Journey Map)']
    },
    {
      title: '使用者體驗設計 (UX Design)',
      icon: <Layout size={20} className="text-accent" />,
      items: ['資訊架構', '使用者流程', '線框圖 (Wireframing)']
    },
    {
      title: '使用者介面設計 (UI Design)',
      icon: <PenTool size={20} className="text-accent" />,
      items: ['介面視覺設計', '互動原型 (Interactive Prototyping)', '動態效果']
    },
    {
      title: '設計系統 (Design Systems)',
      icon: <Layers size={20} className="text-accent" />,
      items: ['組件庫 (Component Library)', '樣式指南 (Style Guide)']
    },
    {
      title: '專案管理 (Project Management)',
      icon: <Briefcase size={20} className="text-accent" />,
      items: ['敏捷開發 (Agile Methodologies)', '跨部門協作']
    }
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Col: Bio */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-snug">
            不僅是設計師，<br />
            <span className="text-accent">更是問題解決者。</span>
          </h1>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify">
            <p>
              我是 <strong>曾昱淇</strong>，擁有10年的UI/UX設計經驗，專精於App介面設計、網站流程優化、網站設計。我熱愛從使用者研究中挖掘真實需求，並將這些洞察轉化為清晰、高效且美觀的設計方案。
            </p>
            <p>
              我擅長與跨職能團隊（包括工程師、產品經理、市場行銷）緊密合作，確保設計從概念發想到最終實現的每一個環節都能順利進行。
            </p>
            
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-white mb-3">設計哲學</h3>
              <p className="border-l-4 border-accent pl-4 italic text-gray-400">
                「我的設計旅程始於對『人』的理解。我致力於創造那些能讓使用者感到自然、愉悅、甚至被賦予力量的數位產品。我相信最好的設計是無形的，它讓使用者專注於任務本身，而非複雜的介面。」
              </p>
            </div>
          </div>
          
          <div className="mt-10">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 rounded-lg font-semibold shadow-[0_0_15px_rgba(209,105,255,0.15)] hover:shadow-[0_0_25px_rgba(209,105,255,0.4)]"
            >
              <Download className="mr-2" size={20} />
              下載完整履歷 (PDF)
            </a>
          </div>
        </div>

        {/* Right Col: Skills */}
        <div className="bg-card p-8 rounded-2xl border border-white/5 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">專業技能區塊</h2>
          
          <div className="space-y-10">
            {/* Tools Section */}
            <div>
              <div className="flex items-center mb-4">
                <Monitor className="text-accent mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">設計工具</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Illustrator'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm border border-white/10 hover:border-accent/50 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Skills Section */}
            <div>
              <div className="flex items-center mb-6">
                <Settings className="text-accent mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">核心技能</h3>
              </div>
              
              <div className="space-y-6">
                {coreSkills.map((skillGroup, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center mb-2">
                      <div className="mr-2 opacity-80 group-hover:opacity-100 transition-opacity">
                        {skillGroup.icon}
                      </div>
                      <h4 className="text-white font-medium group-hover:text-accent transition-colors">{skillGroup.title}</h4>
                    </div>
                    <div className="pl-7">
                       <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((item, i) => (
                          <span key={i} className="text-sm text-gray-500 bg-black/40 px-2 py-1 rounded border border-white/5">
                            {item}
                          </span>
                        ))}
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Break */}
      <div className="mt-24 h-64 w-full bg-white/5 rounded-xl overflow-hidden relative group">
        <img 
          src="https://picsum.photos/id/180/1200/400" 
          alt="Workspace" 
          className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-700"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-3xl font-bold text-white tracking-widest uppercase drop-shadow-lg">My Workspace</h3>
        </div>
      </div>
    </div>
  );
};

export default About;