import React from 'react';
import { CLIENTS } from '../constants';

const LogoMarquee: React.FC = () => {
  return (
    <div className="py-20 bg-brand-dark border-y border-white/5 overflow-hidden relative z-20">
      <div className="flex gap-24 animate-infinite-scroll whitespace-nowrap items-center">
        {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => (
          <div key={index} className="flex items-center gap-4 opacity-30 hover:opacity-100 transition-opacity duration-300">
            <span className="font-mono text-2xl font-black tracking-[0.5em] text-white italic">{client}</span>
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;