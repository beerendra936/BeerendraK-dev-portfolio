import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Video } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 py-20 overflow-hidden bg-brand-dark">
      {/* Background Ambience */}
      <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vh] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="h-px w-8 bg-brand-primary"></div>
          <span className="text-brand-primary font-mono text-small tracking-widest uppercase">
            Available for worldwide projects
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-h1 font-bold text-white mb-6"
        >
          Beerendra K. <br/>
          <span className="text-zinc-500">Senior Video Editor.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-body text-zinc-400 max-w-xl mb-10 font-light"
        >
          14+ years of precision. Narrative-driven editing for <span className="text-white">OTT</span>, 
          <span className="text-white"> Political Campaigns</span>, and <span className="text-brand-accent">Telugu/English Content</span>. 
          Converted 500M+ views into impact.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <button className="group px-8 py-4 bg-brand-secondary text-white rounded-full font-bold text-small flex items-center gap-3 hover:scale-105 transition-all cinematic-shadow">
            View Showreel <Play size={18} fill="white" />
          </button>
          <button className="px-8 py-4 border border-zinc-800 text-white rounded-full font-medium text-small hover:bg-zinc-900 transition-all flex items-center gap-2">
            Hire Me <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Floating Quick Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-zinc-900 pt-12"
        >
          <div>
            <p className="text-2xl font-bold text-white">14+</p>
            <p className="text-small text-zinc-500 uppercase tracking-tighter">Years Exp</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-brand-primary">500M+</p>
            <p className="text-small text-zinc-500 uppercase tracking-tighter">Views</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-brand-accent">₹24Cr</p>
            <p className="text-small text-zinc-500 uppercase tracking-tighter">Raised</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">80+</p>
            <p className="text-small text-zinc-500 uppercase tracking-tighter">OTT Titles</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;