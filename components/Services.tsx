import React from 'react';
import { Layers, Cpu, Heart, PlayCircle, Globe, Zap } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-40 bg-brand-dark relative border-t border-white/5 px-6 lg:px-24">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="font-mono text-brand-primary text-[10px] tracking-[0.8em] uppercase block mb-6">Expertise Stack</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none uppercase">
              Production<br/><span className="text-zinc-800 transition-colors hover:text-zinc-700">Capabilities.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-sans text-sm leading-relaxed max-w-xs border-l border-brand-primary/20 pl-8 font-light italic">
            "We don't just cut frames; we architect the emotional frequency of your audience."
          </p>
        </div>

        {/* Cinematic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-6">
          
          {/* Main Service: Scale */}
          <div className="md:col-span-8 md:row-span-1 glass-surface p-12 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[100%] bg-brand-primary/5 blur-[60px] rounded-full group-hover:bg-brand-primary/10 transition-all"></div>
            <Layers className="text-brand-primary group-hover:scale-110 transition-transform" size={28} />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">Mass Scaling Engine</h3>
              <p className="text-zinc-500 text-sm max-w-md font-light leading-relaxed">
                Architecting high-frequency content campaigns. Handling 100+ reels monthly with automated ingestion and multi-cam synchronization.
              </p>
            </div>
          </div>

          {/* Secondary: AI */}
          <div className="md:col-span-4 md:row-span-1 glass-surface p-12 flex flex-col justify-between group">
            <Cpu className="text-brand-accent group-hover:rotate-12 transition-transform" size={28} />
            <div>
               <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Neural Post</h3>
               <p className="text-zinc-500 text-sm font-light leading-relaxed">
                 Leveraging AI tools for 4K upscaling, automated subtitling, and generative object removal.
               </p>
            </div>
          </div>

          {/* Third: Impact */}
          <div className="md:col-span-4 md:row-span-1 glass-surface p-12 flex flex-col justify-between group border-brand-secondary/20">
            <Heart className="text-brand-secondary" size={28} />
            <div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Conversion Core</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Fundraising and political storytelling designed for action. Drove ₹24Cr in verified impact donations.
              </p>
            </div>
          </div>

          {/* Fourth: Localization */}
          <div className="md:col-span-8 md:row-span-1 glass-surface p-12 flex flex-col md:flex-row items-center justify-between group gap-12">
            <div className="space-y-4">
              <Globe className="text-white/20 group-hover:text-brand-primary transition-colors" size={28} />
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Global Localization</h3>
              <p className="text-zinc-500 text-sm max-w-sm font-light leading-relaxed">
                Seamless subtitling and mastering for 80+ OTT shows across multi-language production houses.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end opacity-40 group-hover:opacity-100 transition-opacity">
               {['TELUGU', 'HINDI', 'ENGLISH', 'TAMIL'].map(lang => (
                 <span key={lang} className="px-4 py-2 border border-white/5 rounded-sm font-mono text-[9px] text-white bg-white/5">{lang}</span>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;