import React from 'react';
import { SKILLS } from '../constants';
import { Video, Cpu, Activity, LayoutGrid } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes('Post')) return <Video className="text-brand-primary" size={24} />;
    if (title.includes('AI')) return <Cpu className="text-brand-accent" size={24} />;
    return <Activity className="text-brand-secondary" size={24} />;
  };

  return (
    <section id="domain" className="py-40 bg-brand-dark px-6 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-xl">
             <div className="flex items-center gap-2 mb-4">
              <LayoutGrid size={16} className="text-brand-accent" />
              <span className="text-brand-accent font-mono text-[10px] tracking-widest uppercase">Toolchain & Domain</span>
            </div>
            <h2 className="text-h2 md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">Stack Mastery.</h2>
            <div className="h-1 w-24 bg-brand-accent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category) => (
            <div key={category.title} className="glass-card p-12 rounded-[2.5rem] group hover:border-brand-primary/30 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all duration-500">
                {getIcon(category.title)}
              </div>
              <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-brand-dark border border-white/5 text-[11px] font-bold text-zinc-400 uppercase tracking-widest rounded-xl hover:text-white hover:border-white/20 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;