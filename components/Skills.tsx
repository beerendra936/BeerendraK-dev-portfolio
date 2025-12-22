import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Cpu, Zap, Radio } from 'lucide-react';

const SkillCard: React.FC<{ category: any, idx: number }> = ({ category, idx }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.8 }}
      whileHover={{ 
        translateZ: 30,
        rotateY: idx % 2 === 0 ? 5 : -5,
        scale: 1.02
      }}
      className="glass-card p-12 border border-white/5 group hover:border-brand-cyan/30 transition-all overflow-hidden bg-zinc-950/40 backdrop-blur-sm preserve-3d"
      style={{ perspective: '1000px' }}
    >
      <div className="flex justify-between items-start mb-12">
        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan">
          {idx === 0 ? <Zap size={20} /> : idx === 1 ? <Radio size={20} /> : <Cpu size={20} />}
        </div>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse"></span>
          <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></span>
        </div>
      </div>
      <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">{category.title}</h3>
      <div className="space-y-4 preserve-3d">
        {category.skills.map(skill => (
          <div key={skill} className="flex justify-between items-center group/skill">
            <span className="font-mono text-[11px] text-zinc-500 group-hover/skill:text-white transition-colors uppercase tracking-widest">{skill}</span>
            <div className="h-px flex-1 mx-4 bg-white/5 group-hover/skill:bg-brand-cyan/20 transition-all"></div>
            <span className="font-mono text-[9px] text-brand-cyan opacity-40">ACTIVE</span>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 -right-4 w-8 h-32 bg-brand-cyan/5 border-l border-brand-cyan/10 flex flex-col items-center justify-center gap-4 -translate-y-1/2">
        {[...Array(4)].map((_, i) => (<div key={i} className="w-1 h-1 rounded-full bg-zinc-800"></div>))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="domain" className="py-16 bg-brand-black px-6 lg:px-24 border-t border-white/5 relative preserve-3d">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-xl">
            <span className="font-mono text-brand-cyan text-[10px] tracking-[1em] uppercase block mb-6">Processing Core</span>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              TECH<br/><span className="text-zinc-800">STACK.</span>
            </h2>
          </div>
          <div className="font-mono text-[9px] text-zinc-500 text-right uppercase tracking-widest hidden lg:block">
            ENGINES: OPTIMIZED<br/>VERSION: 2025.1.0_STABLE
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (<SkillCard key={category.title} category={category} idx={idx} />))}
        </div>
      </div>
    </section>
  );
};

export default Skills;