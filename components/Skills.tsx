import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Cpu, Zap, Radio, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="domain" className="py-32 bg-brand-dark px-6 lg:px-24 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-xl">
            <span className="font-mono text-brand-accent text-[10px] tracking-[1em] uppercase block mb-6">Processing Core</span>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              TECH<br/><span className="text-zinc-800">STACK.</span>
            </h2>
          </div>
          <div className="font-mono text-[9px] text-zinc-500 text-right uppercase tracking-widest hidden lg:block">
            ENGINES: OPTIMIZED<br/>
            VERSION: 2025.1.0_STABLE
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-12 border border-white/5 group hover:border-brand-primary/30 transition-all overflow-hidden"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary">
                  {idx === 0 ? <Zap size={20} /> : idx === 1 ? <Radio size={20} /> : <Cpu size={20} />}
                </div>
                <div className="flex gap-1">
                  <span className="w-1 h-1 bg-brand-primary rounded-full animate-pulse"></span>
                  <span className="w-1 h-1 bg-brand-accent rounded-full animate-pulse [animation-delay:0.2s]"></span>
                  <span className="w-1 h-1 bg-brand-secondary rounded-full animate-pulse [animation-delay:0.4s]"></span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map(skill => (
                  <div key={skill} className="flex justify-between items-center group/skill">
                    <span className="font-mono text-[11px] text-zinc-500 group-hover/skill:text-white transition-colors uppercase tracking-widest">{skill}</span>
                    <div className="h-px flex-1 mx-4 bg-white/5 group-hover/skill:bg-brand-primary/20 transition-all"></div>
                    <span className="font-mono text-[9px] text-brand-primary opacity-40">ACTIVE</span>
                  </div>
                ))}
              </div>

              {/* Rack mount ear decor */}
              <div className="absolute top-1/2 -right-4 w-8 h-12 bg-brand-primary/10 border-l border-brand-primary/20 flex items-center justify-center -translate-y-1/2">
                <div className="w-1 h-1 rounded-full bg-zinc-800"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;