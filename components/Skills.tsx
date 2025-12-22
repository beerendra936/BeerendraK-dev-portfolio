import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-40 bg-obsidian-950 px-6 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-5">
            <span className="font-mono text-zinc-700 text-[10px] tracking-[1em] uppercase block mb-8">Capability Deck</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-12">
              TECHNICAL<br/><span className="text-zinc-900 transition-colors hover:text-zinc-800">DOMAIN.</span>
            </h2>
            <p className="text-zinc-500 text-xl leading-relaxed font-light italic border-l border-emerald-500/30 pl-8">
              "Mastery of the tool is baseline. Mastery of the story is the objective."
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
            {SKILLS.map((category) => (
              <div key={category.title} className="space-y-10">
                <div className="flex items-center gap-4">
                   <div className="h-px flex-1 bg-white/10"></div>
                   <h3 className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.4em]">{category.title}</h3>
                </div>
                <div className="flex flex-col gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill} className="group flex justify-between items-center py-4 border-b border-white/5">
                      <span className="font-display font-bold text-lg text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{skill}</span>
                      <span className="font-mono text-[8px] text-zinc-700 group-hover:text-zinc-500 transition-colors uppercase">Proficiency 95%+</span>
                    </div>
                  ))}
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