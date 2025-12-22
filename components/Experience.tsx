import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="history" className="py-32 bg-brand-dark px-6 lg:px-24">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="text-h2 font-bold text-white mb-2">History</h2>
          <div className="w-12 h-1 bg-brand-primary"></div>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 border-l border-zinc-800 group"
            >
              <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-brand-primary transition-colors"></div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">{exp.period}</span>
              <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
              <p className="text-brand-primary text-small font-medium mb-4">{exp.company}</p>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-zinc-400 text-small font-light flex gap-3">
                    <span className="text-brand-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;