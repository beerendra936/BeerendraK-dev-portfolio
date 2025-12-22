import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden px-6 lg:px-24">
      {/* Decorative Gloom Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-24 text-center">
           <span className="font-mono text-brand-primary text-[10px] tracking-[1em] uppercase mb-4 block">Feedback Archive</span>
           <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
             Industry <span className="text-zinc-800">Verification.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-surface p-12 rounded-sm relative group hover:bg-brand-card transition-all duration-500 border-white/5">
              <div className="absolute top-[-15px] left-8 bg-brand-primary text-brand-dark p-3 rounded-sm group-hover:translate-y-[-5px] transition-transform shadow-xl">
                <Quote size={20} fill="currentColor" />
              </div>
              
              <p className="text-zinc-400 leading-relaxed mb-10 text-lg font-light italic">"{t.quote}"</p>
              
              <div className="border-t border-white/5 pt-8 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-widest">{t.company}</h4>
                  <p className="text-[10px] text-brand-primary font-mono uppercase tracking-[0.2em] mt-1">{t.author}</p>
                </div>
                <div className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_rgba(0,255,136,0.5)]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;