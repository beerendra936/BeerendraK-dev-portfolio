import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Heart } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section className="py-32 bg-obsidian-950 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <div className="md:col-span-12 mb-16">
            <span className="font-mono text-zinc-600 text-[10px] tracking-[0.6em] uppercase mb-4 block">Performance Analytics</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter">
              BEYOND THE <span className="text-zinc-800">FRAME.</span>
            </h2>
          </div>

          {/* Key Metrics Row */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-6 p-12 rounded-3xl obsidian-card flex flex-col justify-between group"
          >
            <TrendingUp size={32} className="text-zinc-600 mb-20 group-hover:text-emerald-500 transition-colors" />
            <div>
              <p className="text-7xl font-display font-bold text-white tracking-tighter mb-4">14,500+</p>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Finalized Production Outputs</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-6 p-12 rounded-3xl obsidian-card flex flex-col justify-between group"
          >
            <Heart size={32} className="text-zinc-600 mb-20 group-hover:text-red-500 transition-colors" />
            <div>
              <p className="text-7xl font-display font-bold text-white tracking-tighter mb-4">₹24Cr</p>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Social Impact Capital Raised</p>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-12 p-16 rounded-3xl obsidian-card border-white/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          >
            <div>
              <h3 className="text-3xl font-display font-bold text-white uppercase mb-4 tracking-tight">KUKU TV Scaling Mastery</h3>
              <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-2xl">
                Localized and subtitle-mastered 80+ shows/movies for high-stakes Indian OTT production pipelines. Reaching millions with narrative precision.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-full border border-white/10">
              <p className="text-4xl font-display font-bold text-emerald-500">80+</p>
              <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Productions</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Impact;