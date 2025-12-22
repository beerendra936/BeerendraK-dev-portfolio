import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Track Lines */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-10 pointer-events-none space-y-32">
        <div className="w-full h-px bg-slate-700"></div>
        <div className="w-full h-px bg-slate-700"></div>
        <div className="w-full h-px bg-slate-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <span className="font-mono text-indigo-500 text-xs tracking-widest uppercase mb-2 block">Career Timeline</span>
          <h2 className="font-display text-5xl font-bold text-white">EDITING <span className="text-indigo-500">TRACKS</span></h2>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={exp.id} 
              className="group relative"
            >
              {/* Track Header */}
              <div className="flex items-center gap-4 mb-3">
                <div className="font-mono text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  V{EXPERIENCES.length - index}
                </div>
                <div className="w-full h-px bg-slate-800 group-hover:bg-indigo-900/50 transition-colors"></div>
                <div className="font-mono text-xs text-slate-500 whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              {/* Clip / Card */}
              <div className="ml-10 md:ml-16 bg-slate-900/80 border border-slate-700/50 rounded-lg p-6 hover:border-indigo-500 hover:bg-slate-800/80 transition-all duration-300 hover:translate-x-2 relative overflow-hidden">
                {/* Selection Border - Left */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-indigo-400 font-medium mb-4 text-sm tracking-wide">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start gap-3">
                           <span className="mt-1.5 w-1 h-1 bg-slate-500 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                           <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;