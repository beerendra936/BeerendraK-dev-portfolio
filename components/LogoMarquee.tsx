import React from 'react';
import { CLIENTS } from '../constants';

const LogoMarquee: React.FC = () => {
  // Triple the list for a perfectly smooth infinite loop on any screen width
  const marqueeItems = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <div className="py-12 bg-brand-black border-b border-white/5 overflow-hidden relative z-20">
      {/* Dark Fade Edge Masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex animate-infinite-scroll whitespace-nowrap items-center hover:[animation-play-state:paused] cursor-default">
        {marqueeItems.map((client, index) => (
          <div 
            key={index} 
            className="flex items-center gap-12 px-16 opacity-20 hover:opacity-100 transition-all duration-500 group"
          >
            {/* HUD Marker */}
            <div className="w-[1px] h-8 bg-zinc-800 group-hover:bg-brand-cyan group-hover:h-12 transition-all duration-500"></div>
            
            <span className="font-sans text-4xl md:text-5xl font-black tracking-tighter text-white uppercase transition-all duration-500 group-hover:text-brand-cyan group-hover:scale-110">
              {client}
            </span>

            {/* Sub-label for premium feel */}
            <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest leading-none">VERIFIED</span>
              <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest leading-none">CLIENT</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll Indicator Metadata */}
      <div className="mt-12 flex justify-center items-center gap-8 opacity-20">
        <div className="h-px w-24 bg-white/10"></div>
        <div className="font-mono text-[9px] text-white uppercase tracking-[0.8em]">Collaboration_Timeline</div>
        <div className="h-px w-24 bg-white/10"></div>
      </div>
    </div>
  );
};

export default LogoMarquee;