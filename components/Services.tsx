import React from 'react';
import { Layers, Cpu, Heart, Zap, PlayCircle, BarChart3, FastForward } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-[#02040a] relative border-t border-slate-900">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="font-mono text-indigo-500 text-xs tracking-widest uppercase mb-2 block">Proprietary Architecture</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">NEURAL WORKFLOW</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A battle-tested ecosystem combining human creativity with AI acceleration. Designed for clients who need speed without sacrificing soul.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-6 h-auto lg:h-[800px]">
          
          {/* Item 1: Mass Scale (Large) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 overflow-hidden transition-all duration-300">
            <div className="absolute top-0 right-0 p-32 bg-indigo-600/10 blur-[80px] rounded-full group-hover:bg-indigo-600/20 transition-all"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
               <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400 mb-6">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-3">Hyper-Scale Engine</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Architecting campaigns that saturate the feed. My workflow handles 100+ reel outputs in compressed timelines, achieving viral ubiquity (20M+ Reach).
                  </p>
               </div>
               <div className="mt-8 flex gap-3">
                 <span className="px-3 py-1 rounded-full border border-slate-700 text-xs font-mono text-slate-300">100+ Reels/Month</span>
                 <span className="px-3 py-1 rounded-full border border-slate-700 text-xs font-mono text-slate-300">Sync Audio</span>
               </div>
            </div>
          </div>

          {/* Item 2: AI Tech (Tall) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-2 group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 overflow-hidden transition-all duration-300">
             <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-purple-400 mb-6">
                <Cpu size={24} />
             </div>
             <h3 className="text-2xl font-display font-bold text-white mb-3">AI Acceleration</h3>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
               Future-proof post-production using Runway, Topaz, and MidJourney. 40% faster turnaround with 4K upscaling.
             </p>
             <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Zap size={12} className="text-yellow-500" /> Auto-Captions
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <FastForward size={12} className="text-green-500" /> Generative Fill
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <BarChart3 size={12} className="text-blue-500" /> Trend Analysis
                </div>
             </div>
          </div>

          {/* Item 3: Emotional Impact (Square) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 group relative p-8 rounded-3xl bg-[#0f172a] border border-slate-800 hover:bg-[#1e293b] transition-colors">
             <div className="flex items-center justify-between mb-4">
                <Heart size={24} className="text-red-400" />
                <span className="text-xs font-bold text-green-400 font-mono">+24Cr RAISED</span>
             </div>
             <h3 className="text-xl font-display font-bold text-white mb-2">Conversion Core</h3>
             <p className="text-slate-400 text-xs">
               Data-backed narrative design. Editing for retention and wallet-opening emotion.
             </p>
          </div>

          {/* Item 4: Fast Turnaround (Square) */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 group relative p-8 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-slate-800 hover:border-indigo-500/30">
             <div className="flex items-center justify-between mb-4">
                <PlayCircle size={24} className="text-indigo-400" />
                <span className="text-xs font-bold text-indigo-300 font-mono">24H TAT</span>
             </div>
             <h3 className="text-xl font-display font-bold text-white mb-2">Rapid Deployment</h3>
             <p className="text-slate-400 text-xs">
               Broadcast-ready files delivered while the news is still trending.
             </p>
          </div>

          {/* Item 5: Wide - Global (Wide) */}
          <div className="md:col-span-3 lg:col-span-4 row-span-1 group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="text-left">
                <h3 className="text-2xl font-display font-bold text-white mb-1">Global Localization Engine</h3>
                <p className="text-slate-400 text-sm">Subtitling & Dubbing integration for 80+ OTT shows across varied languages.</p>
             </div>
             <div className="flex gap-4">
               <div className="px-4 py-2 bg-black rounded-lg border border-slate-800 text-slate-300 text-sm font-mono">Telugu</div>
               <div className="px-4 py-2 bg-black rounded-lg border border-slate-800 text-slate-300 text-sm font-mono">Hindi</div>
               <div className="px-4 py-2 bg-black rounded-lg border border-slate-800 text-slate-300 text-sm font-mono">English</div>
               <div className="px-4 py-2 bg-black rounded-lg border border-slate-800 text-slate-300 text-sm font-mono">Tamil</div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;