import React from 'react';
import { motion } from 'framer-motion';

const Impact: React.FC = () => {
  const stats = [
    { val: '500M+', label: 'GLOBAL VIEWS', sub: 'Aggregated lifetime reach' },
    { val: '₹24Cr', label: 'CAPITAL RAISED', sub: 'Impact-driven donations' },
    { val: '14Y+', label: 'INDUSTRY ERA', sub: 'Senior level expertise' },
    { val: '80+', label: 'OTT TITLES', sub: 'Localization & Subtitling' },
  ];

  return (
    <section className="py-24 bg-brand-dark section-fade px-6 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-dark p-10 group"
            >
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 group-hover:text-brand-primary transition-colors">{stat.label}</p>
              <p className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">{stat.val}</p>
              <p className="text-[10px] font-mono text-zinc-600 uppercase">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;