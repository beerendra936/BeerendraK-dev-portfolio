import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Scissors, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-24 pt-20 overflow-hidden bg-brand-dark">
      {/* Background Atmosphere - Indigo/Cyan wash */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-brand-primary/[0.04] blur-[200px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-10 bg-brand-primary/20"></div>
          <span className="font-mono text-[10px] tracking-[1em] text-brand-primary uppercase font-black">
            NARRATIVE_CRAFT_V14
          </span>
          <div className="h-px w-10 bg-brand-primary/20"></div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-[9rem] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12 select-none"
        >
          CREATIVE<br/>
          <span className="text-glow text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-900">CATALYST.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed px-4">
            Forging <span className="text-white font-bold">High-Impact Visual Stories</span> that define modern culture. From OTT originals to viral political narratives.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8 border-y border-white/5">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/10 transition-all">
                <Sparkles size={20} />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-mono text-zinc-600 uppercase">Impact Focus</p>
                <p className="text-sm font-bold text-white uppercase tracking-widest">500M+ Global Views</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent/10 transition-all">
                <Scissors size={20} />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-mono text-zinc-600 uppercase">Production</p>
                <p className="text-sm font-bold text-white uppercase tracking-widest">14.5K Master Edits</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-all">
                <Globe size={20} />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-mono text-zinc-600 uppercase">Distribution</p>
                <p className="text-sm font-bold text-white uppercase tracking-widest">80+ OTT Titles</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <button className="group relative px-12 py-6 bg-brand-primary text-black font-black text-[11px] tracking-[0.4em] uppercase transition-all hover:bg-white hover:shadow-[0_0_60px_rgba(0,212,255,0.4)]">
              <span className="flex items-center gap-4">VIEW_SHOWREEL <Play size={14} fill="currentColor" /></span>
            </button>
            
            <button className="px-12 py-6 border border-white/10 text-zinc-500 font-bold text-[11px] tracking-[0.4em] uppercase hover:bg-white/5 hover:text-white transition-all">
              CURATED_ARCHIVES
            </button>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Metadata */}
      <div className="absolute bottom-12 left-6 right-6 lg:left-24 lg:right-24 flex justify-between items-end opacity-30 border-t border-white/5 pt-8">
        <div className="font-mono text-[9px] uppercase tracking-[0.4em] space-y-2 text-left">
          <p>Creative Dir: B. Karukola</p>
          <p>Format: 4K_RAW_60FPS</p>
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[0.8em]">
          Studio_Status: Post_Active
        </div>
      </div>
    </section>
  );
};

export default Hero;