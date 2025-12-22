import React from 'react';
import { SKILLS } from '../constants';
import { Code, Video, BrainCircuit } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes('Post')) return <Video className="text-brand-primary" size={20} />;
    if (title.includes('Strategy')) return <BrainCircuit className="text-brand-secondary" size={20} />;
    return <Code className="text-brand-accent" size={20} />;
  };

  return (
    <section id="skills" className="py-32 bg-brand-dark px-6 lg:px-24 border-t border-zinc-950">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-40">
            <span className="text-brand-primary font-mono text-[10px] tracking-widest uppercase mb-4 block">Tech Stack</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">The Mastery of Tools.</h2>
            <p className="text-zinc-500 text-lg font-light leading-relaxed">
              Combining world-class post-production software with AI acceleration to deliver cinematic quality at speed.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILLS.map((category) => (
              <div key={category.title} className="p-8 rounded-2xl bg-brand-card border border-zinc-800 hover:border-zinc-700 transition-all group">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:scale-110 transition-transform">
                    {getIcon(category.title)}
                   </div>
                   <h3 className="font-bold text-white text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 font-medium tracking-wide">
                      {skill}
                    </span>
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