import React from 'react';
import { CLIENTS } from '../constants';

const LogoMarquee: React.FC = () => {
  return (
    <div className="py-24 bg-brand-dark border-y border-white/5 overflow-hidden relative z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark z-10 pointer-events-none"></div>
      <div className="flex gap-24 animate-infinite-scroll whitespace-nowrap items-center">
        {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => (
          <div key={index} className="flex items-center gap-6 opacity-20 hover:opacity-100 transition-opacity duration-700 group cursor-default">
            <span className="font-mono text-3xl font-black tracking-[0.4em] text-white italic group-hover:text-brand-primary transition-colors">{client}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-brand-primary transition-colors"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;