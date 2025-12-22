import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVars = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.23, 1, 0.32, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 py-32 overflow-hidden">
      {/* Subtle Ambient Light */}
      <div className="absolute top-[20%] right-[-5%] w-[50vw] h-[50vh] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="container mx-auto max-w-7xl relative z-10"
      >
        <motion.div variants={itemVars} className="mb-8 flex items-center gap-3">
          <span className="font-mono text-[9px] tracking-[0.5em] text-emerald-500 uppercase px-3 py-1 border border-emerald-500/20 rounded-full">
            Available for Q3 '24 Partnerships
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVars}
          className="font-display font-bold text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tighter-extra text-white uppercase mb-12"
        >
          Architecting<br/>
          <span className="text-zinc-800">Human Attention.</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
          <motion.div variants={itemVars} className="lg:col-span-7">
            <p className="font-sans text-zinc-500 text-lg md:text-2xl leading-relaxed font-light text-balance">
              Senior Post-Production Specialist with 14 years of mastery. 
              Engineering narrative-driven content for <span className="text-white">OTT Pipelines</span>, 
              <span className="text-white"> Political Entities</span>, and <span className="text-white">Social Leaders</span>.
            </p>
          </motion.div>

          <motion.div variants={itemVars} className="lg:col-span-5 flex flex-col md:flex-row gap-4 lg:justify-end">
            <button className="px-10 py-5 bg-white text-black rounded-sm font-display font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-emerald-500 transition-all duration-500">
              Initiate Inquiry
            </button>
            <button className="px-10 py-5 border border-white/10 text-white rounded-sm font-display font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white/5 transition-all flex items-center gap-2">
              <Play size={12} className="fill-white" /> View Showreel
            </button>
          </motion.div>
        </div>

        {/* Modular Statistics Strip */}
        <motion.div 
          variants={itemVars}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5"
        >
          {[
            { label: 'Verified Edits', val: '14,500+' },
            { label: 'Global Views', val: '500M+' },
            { label: 'Impact Capital', val: '₹24Cr' },
            { label: 'OTT Titles', val: '80+' }
          ].map((stat, i) => (
            <div key={i} className="bg-obsidian-950 p-10 hover:bg-obsidian-900 transition-colors">
              <p className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest mb-3">{stat.label}</p>
              <p className="text-3xl md:text-4xl font-display font-bold text-white tracking-tighter">{stat.val}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative Minimal Scroll Line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: '100px' }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-0 right-24 w-px bg-gradient-to-b from-transparent via-emerald-500/50 to-emerald-500"
      ></motion.div>
    </section>
  );
};

export default Hero;