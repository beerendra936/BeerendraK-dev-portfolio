import React from 'react';
import { motion } from 'framer-motion';

const Impact: React.FC = () => {
  return (
    <section className="py-40 bg-brand-dark px-6 lg:px-24 border-t border-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px border border-zinc-900 bg-zinc-900 rounded-2xl overflow-hidden cinematic-glow">
          
          <div className="md:col-span-8 p-12 md:p-20 bg-brand-dark flex flex-col justify-between group h-full">
            <span className="text-brand-accent font-mono text-[10px] tracking-widest uppercase mb-12 block">Growth & Scale</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-12">
              Massive Visibility. <br/>
              <span className="text-zinc-800 group-hover:text-zinc-200 transition-colors duration-1000">Measured Result.</span>
            </h2>
            <div className="max-w-md">
              <p className="text-zinc-500 text-lg leading-relaxed font-light">
                Engineering high-stakes growth through cinematic mastery. 
                Localization for millions, capital generation for impact.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-1 gap-px bg-zinc-900">
            <div className="bg-brand-dark p-12 flex flex-col justify-center items-center text-center">
              <p className="text-5xl font-bold text-white tracking-tighter mb-4">500M+</p>
              <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.3em]">Aggregate Reach</p>
            </div>
            <div className="bg-brand-dark p-12 flex flex-col justify-center items-center text-center">
              <p className="text-5xl font-bold text-brand-accent tracking-tighter mb-4">₹24Cr</p>
              <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.3em]">Capital Raised</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Impact;