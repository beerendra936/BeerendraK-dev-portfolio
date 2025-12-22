import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 py-32 overflow-hidden bg-brand-dark">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute top-[15%] right-[-5%] w-[50vw] h-[50vh] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vh] bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-px w-12 bg-brand-primary/30"></div>
          <span className="font-mono text-[10px] tracking-[0.6em] text-brand-primary uppercase">
            ESTABLISHED 2010
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight-subtle leading-[0.95] mb-12"
        >
          Architecture of<br/>
          <span className="text-zinc-800 transition-colors hover:text-zinc-700">Moving Pictures.</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="font-sans text-zinc-500 text-lg md:text-2xl leading-relaxed font-light text-balance max-w-2xl">
              Specializing in high-retention narratives for <span className="text-white">OTT Pipelines</span>, 
              <span className="text-white"> Political Campaigns</span>, and <span className="text-brand-accent">Social Impact</span>. 
              14 years. 500M+ Views. ₹24Cr Raised.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex flex-wrap gap-4 lg:justify-end"
          >
            <button className="px-10 py-5 bg-brand-primary text-brand-dark rounded-sm font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-brand-accent transition-all duration-700 flex items-center gap-3 cinematic-glow">
              Initiate Project <ArrowRight size={14} />
            </button>
            <button className="px-10 py-5 border border-white/10 text-white rounded-sm font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-white/5 transition-all flex items-center gap-2">
              <Play size={14} fill="white" /> Showreel
            </button>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic Vertical Accent */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: '100px' }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute bottom-0 right-12 md:right-24 w-px bg-gradient-to-b from-transparent via-brand-primary/50 to-brand-primary"
      ></motion.div>
    </section>
  );
};

export default Hero;