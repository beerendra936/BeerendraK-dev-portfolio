import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-40 px-6 lg:px-24 bg-obsidian-950">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="font-mono text-zinc-700 text-[10px] tracking-[0.8em] uppercase block mb-6">Archive 2010 — 2024</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.85]">
              Strategic<br/><span className="text-zinc-900 transition-colors hover:text-zinc-800">Narratives.</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-zinc-600 font-sans text-lg leading-relaxed font-light italic border-l border-white/10 pl-6">
              "We don't just cut clips; we build cinematic architectures that demand attention."
            </p>
          </div>
        </div>

        {/* Fractional Grid Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[400px] gap-8">
          
          {/* Main Case Study (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 md:row-span-2 group relative overflow-hidden rounded-sm bg-obsidian-900 border border-white/5"
          >
            <img src={PROJECTS[0].imageUrl} className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4] group-hover:scale-105 group-hover:brightness-75 transition-all duration-1000 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
              <div className="space-y-4">
                <span className="font-mono text-[9px] text-emerald-500 uppercase tracking-widest px-3 py-1 bg-emerald-500/5 border border-emerald-500/20">OTT Masterpiece</span>
                <h3 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter">{PROJECTS[0].title}</h3>
              </div>
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white backdrop-blur-3xl hover:bg-white hover:text-black transition-all">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </motion.div>

          {/* Impact Stats Card (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 md:row-span-1 p-12 glass-card flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest block mb-4">Capital Generation</span>
              <h3 className="text-3xl font-display font-bold text-white uppercase leading-tight tracking-tighter">{PROJECTS[1].title}</h3>
            </div>
            <div className="space-y-2">
              <p className="text-6xl font-display font-bold text-emerald-500 tracking-tighter">₹24Cr</p>
              <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">Donations Driven</p>
            </div>
          </motion.div>

          {/* Viral Scaling Card (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 md:row-span-1 group relative overflow-hidden rounded-sm bg-obsidian-900 border border-white/5"
          >
            <img src={PROJECTS[2].imageUrl} className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:scale-105 group-hover:brightness-50 transition-all duration-1000 ease-out" />
            <div className="absolute bottom-10 left-10">
              <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-2 block">Career Milestone</span>
              <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tighter">500M+ Aggregate Views</h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;