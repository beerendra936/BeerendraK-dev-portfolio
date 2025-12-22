import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-24 pt-20 overflow-hidden bg-brand-dark">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-brand-primary/[0.03] blur-[180px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <div className="h-px w-8 bg-brand-primary/30"></div>
          <span className="font-mono text-[10px] tracking-[0.8em] text-brand-primary uppercase font-black">
            NARRATIVE_STRATEGY_PROTOCOL // V.14
          </span>
          <div className="h-px w-8 bg-brand-primary/30"></div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl lg:text-[10rem] font-black text-white leading-[1] lg:leading-[0.9] tracking-tighter uppercase mb-16 select-none"
        >
          BEERENDRA.<br/>
          <span className="text-glow text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-800">STRATEGIST.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto space-y-10"
        >
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed px-4">
            Architecting <span className="text-white font-bold">High-Yield Visual Content</span> for OTT Platforms, Political Movements, and Global Impact Engines.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 pt-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary">
                <ShieldCheck size={18} />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-mono text-zinc-600 uppercase">Track Record</p>
                <p className="text-xs font-bold text-white uppercase tracking-widest">500M+ Views</p>
              </div>
            </div>

            <div className="h-10 w-px bg-white/5 hidden md:block"></div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent">
                <Activity size={18} />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-mono text-zinc-600 uppercase">Production</p>
                <p className="text-xs font-bold text-white uppercase tracking-widest">80+ OTT Titles</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-12">
            <button className="group relative px-8 md:px-12 py-5 md:py-7 bg-brand-primary text-black font-black text-[10px] md:text-[11px] tracking-[0.4em] uppercase transition-all hover:bg-white hover:shadow-[0_0_60px_rgba(0,212,255,0.4)]">
              <span className="flex items-center gap-3">INITIATE_SHOWREEL <Play size={14} fill="currentColor" /></span>
            </button>
            
            <button className="px-8 md:px-12 py-5 md:py-7 border border-white/10 text-zinc-400 font-bold text-[10px] md:text-[11px] tracking-[0.4em] uppercase hover:bg-white/5 hover:text-white transition-all flex items-center gap-3">
              VIEW_ARCHIVES <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Footnotes */}
      <div className="absolute bottom-12 left-6 right-6 lg:left-24 lg:right-24 flex justify-between items-end border-t border-white/5 pt-8 opacity-40">
        <div className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest space-y-1">
          <p>Location: Hyderabad // India</p>
          <p>Time: 00:00:00:00</p>
        </div>
        <div className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.5em] flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-brand-accent animate-pulse rounded-full"></span>
          System Status: Optimal
        </div>
      </div>
    </section>
  );
};

export default Hero;