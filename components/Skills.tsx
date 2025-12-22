import React from 'react';
import { SKILLS } from '../constants';
import { Cpu, Film, TrendingUp, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#030712] relative">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Panel: Statement */}
          <div className="lg:col-span-4 space-y-8">
            <div className="inline-block p-3 rounded-2xl bg-slate-900 border border-slate-800">
              <Zap size={32} className="text-yellow-400 fill-yellow-400/20" />
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              HYBRID <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">WORKFLOW</span>
            </h2>
            
            <p className="text-slate-400 leading-relaxed border-l-2 border-slate-800 pl-6">
              I don't just edit; I engineer content. By fusing traditional non-linear editing (NLE) with Generative AI, I deliver broadcast-quality results at digital speeds.
            </p>

            <div className="p-6 bg-indigo-950/20 rounded-xl border border-indigo-500/20 backdrop-blur-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-20">
                 <Cpu size={64} />
               </div>
               <h4 className="text-white font-bold mb-2 font-mono text-sm">AI ACCELERATION</h4>
               <p className="text-xs text-indigo-300 leading-relaxed">
                 Using Runway & Topaz to upscaling, noise reduction, and generative fill, reducing post-production time by 40%.
               </p>
            </div>
          </div>

          {/* Right Panel: Skill Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((category, idx) => (
              <div 
                key={category.title} 
                className="group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:bg-slate-800/60 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl font-bold text-slate-200 group-hover:text-white transition-colors">{category.title}</h3>
                  <div className="text-slate-600 group-hover:text-indigo-400 transition-colors">
                     {idx === 0 ? <Film size={20}/> : idx === 1 ? <Cpu size={20}/> : <TrendingUp size={20}/>}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 text-xs font-mono font-medium text-slate-400 bg-slate-950 border border-slate-800 rounded hover:border-indigo-500 hover:text-indigo-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative Progress Bar */}
                <div className="mt-6 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 w-[85%] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;