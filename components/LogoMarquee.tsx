import React from 'react';
import { CLIENTS } from '../constants';
import { Hexagon } from 'lucide-react';

const LogoMarquee: React.FC = () => {
  return (
    <div className="py-8 bg-[#02040a] border-y border-slate-900 overflow-hidden relative z-20">
      <div className="flex gap-12 animate-infinite-scroll whitespace-nowrap">
        {/* Double the list to create seamless loop */}
        {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => (
          <div key={index} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300">
            <Hexagon size={16} className="text-indigo-500 fill-indigo-500/20" />
            <span className="font-display font-bold text-xl tracking-widest text-slate-300">{client}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;