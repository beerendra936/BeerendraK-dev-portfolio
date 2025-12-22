import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Zap } from 'lucide-react';
import { PROFILE_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-bold">
                Deploying Masterpieces since 2010
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="h1-clamp font-extrabold text-white tracking-tighter mb-10"
            >
              NARRATIVE<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-white to-zinc-700">
                ARCHITECT.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-500 max-w-xl mb-12 font-light leading-relaxed text-balance"
            >
              Specializing in high-retention visual storytelling for <span className="text-white">OTT Platforms</span>, 
              <span className="text-white"> Political Strategy</span>, and <span className="text-brand-accent">Global Brands</span>. 
              14 years of precision editing with 500M+ global reach.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-brand-secondary text-white rounded-sm font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-brand-secondary/90 transition-all flex items-center gap-3">
                Watch Showreel <Play size={14} fill="white" />
              </button>
              <button className="px-10 py-5 bg-brand-card border border-white/5 text-white rounded-sm font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-white/5 transition-all">
                Project Inquiry
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] bg-brand-card border border-white/10 rounded-2xl overflow-hidden p-3"
            >
              <img 
                src={PROFILE_IMAGE} 
                alt="Beerendra" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 rounded-xl"
              />
              <div className="absolute bottom-8 right-8 bg-brand-primary/10 backdrop-blur-md border border-brand-primary/20 px-4 py-2 rounded-full">
                <span className="font-mono text-[9px] text-brand-primary uppercase tracking-widest">Live Status: Active</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;