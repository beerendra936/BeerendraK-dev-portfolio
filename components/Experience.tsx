import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-40 bg-obsidian-950 px-6 lg:px-24 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24">
          <span className="font-mono text-zinc-700 text-[10px] tracking-[1em] uppercase block mb-6">Career Ledger</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none">
            Chronological<br/><span className="text-zinc-900">Succession.</span>
          </h2>
        </div>

        <div className="space-y-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group grid grid-cols-1 md:grid-cols-12 items-start p-12 md:p-16 bg-obsidian-950 hover:bg-obsidian-900 transition-all duration-500"
            >
              <div className="md:col-span-2 mb-8 md:mb-0">
                <span className="font-mono text-[10px] text-zinc-700 group-hover:text-emerald-500 transition-colors">
                  0{EXPERIENCES.length - index} — {exp.period.split(' ')[0]}
                </span>
              </div>

              <div className="md:col-span-4 mb-8 md:mb-0">
                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tighter mb-1">{exp.company}</h3>
                <p className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">{exp.role}</p>
              </div>

              <div className="md:col-span-6">
                <div className="space-y-6">
                  {exp.description.map((item, i) => (
                    <p key={i} className="text-zinc-500 group-hover:text-zinc-300 transition-colors text-lg font-light leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;