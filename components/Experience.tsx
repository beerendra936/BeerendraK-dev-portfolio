import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Clock, Scissors } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="history" className="py-24 md:py-40 bg-brand-dark px-6 lg:px-24 border-t border-white/5 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 md:mb-32">
          <div className="max-w-2xl">
            <span className="font-mono text-brand-primary text-[10px] tracking-[1.2em] uppercase block mb-8">Service Trajectory Log</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[1]">
              STRATEGIC<br/><span className="text-zinc-800">HISTORY.</span>
            </h2>
          </div>
          <div className="flex items-center gap-6 md:gap-8 studio-glass px-6 md:px-10 py-4 md:py-6">
             <Clock className="text-brand-accent" size={24} />
             <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest">
                <span className="text-zinc-600 block mb-1">Total Command</span>
                <span className="text-white font-bold">14+ Years Active</span>
             </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-6 md:gap-8 items-stretch"
            >
              <div className="md:w-56 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 py-6 md:py-10">
                <span className="font-mono text-[11px] md:text-[12px] text-zinc-600 group-hover:text-brand-primary transition-colors tracking-widest">{exp.period}</span>
              </div>

              <div className="flex-1 studio-glass p-8 md:p-20 border-white/5 group-hover:border-brand-primary/30 transition-all flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <Scissors size={18} className="text-brand-primary" />
                    <span className="text-brand-primary font-mono text-[10px] md:text-[11px] uppercase tracking-[0.6em] font-bold">{exp.company}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-10 uppercase tracking-tight leading-tight">{exp.role}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {exp.description.map((item, i) => (
                      <p key={i} className="text-zinc-500 text-base md:text-lg font-light leading-relaxed flex gap-4">
                        <span className="text-brand-primary/40">•</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-end justify-end opacity-20 lg:opacity-100">
                  <span className="text-7xl md:text-[10rem] font-black text-white/[0.015] leading-none select-none group-hover:text-white/[0.04] transition-colors italic">0{idx + 1}</span>
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