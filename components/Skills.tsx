import React from 'react';
import { SKILLS } from '../constants';
import { Video, Cpu, Activity } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes('Post')) return <Video className="text-brand-primary" size={24} />;
    if (title.includes('AI')) return <Cpu className="text-brand-accent" size={24} />;
    return <Activity className="text-brand-secondary" size={24} />;
  };

  return (
    <section id="domain" className="py-32 bg-brand-dark px-6 lg:px-24 border-t border-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-h2 font-bold text-white mb-2">The Domain</h2>
          <div className="w-12 h-1 bg-brand-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category) => (
            <div key={category.title} className="p-10 rounded-3xl bg-brand-card border border-zinc-800 hover:border-zinc-700 transition-all group">
              <div className="mb-8">
                {getIcon(category.title)}
              </div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 font-bold uppercase tracking-wide">
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