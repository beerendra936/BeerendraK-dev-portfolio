import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
           <span className="font-mono text-indigo-500 text-xs tracking-widest uppercase mb-2 block">Client Feedback</span>
           <h2 className="font-display text-4xl md:text-5xl font-bold text-white">TRUSTED BY <span className="text-slate-500">INDUSTRY LEADERS</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-900/30 border border-slate-800 p-8 rounded-2xl relative group hover:bg-slate-900/50 hover:border-indigo-500/30 transition-all duration-300">
              <div className="absolute -top-4 -left-4 bg-indigo-600 rounded-full p-2 group-hover:rotate-12 transition-transform">
                <Quote size={20} className="text-white fill-white" />
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-8 italic">"{t.quote}"</p>
              
              <div className="border-t border-slate-800 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white font-display text-lg">{t.company}</h4>
                  <p className="text-xs text-indigo-400 font-mono uppercase tracking-wider">{t.author}</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;