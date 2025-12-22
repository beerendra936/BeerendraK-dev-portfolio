import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="history" className="py-32 section-fade bg-brand-dark px-6 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-4">
            <span className="font-mono text-brand-secondary text-[10px] tracking-[1em] uppercase block mb-6">History Log</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none mb-10">
              CAREER<br/><span className="text-zinc-800">PATH.</span>
            </h2>
            <div className="p-10 bg-brand-card border border-white/5 rounded-2xl hidden lg:block">
              <p className="text-zinc-500 font-light text-sm italic leading-relaxed">
                "Evolution is measured in frames. From 24/7 news to state-wide strategic narratives."
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={exp.id} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border-b border-white/5 pb-12 last:border-0"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-3xl font-bold text-white group-hover:text-brand-secondary transition-colors">{exp.role}</h3>
                    <p className="text-brand-secondary font-mono text-[11px] font-bold uppercase tracking-[0.2em]">{exp.company}</p>
                  </div>
                  
                  <ul className="md:w-3/5 space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-zinc-500 text-sm font-light flex gap-3 leading-relaxed group-hover:text-zinc-400 transition-colors">
                        <span className="text-brand-secondary/40">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;