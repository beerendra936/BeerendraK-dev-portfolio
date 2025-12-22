import React from 'react';
import { CONTACT_INFO } from '../constants';
import { ArrowUpRight, Github, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-40 bg-obsidian-950 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-32">
          
          <div className="max-w-3xl">
            <h2 className="font-display text-6xl md:text-[8rem] font-bold text-white leading-[0.85] tracking-tighter uppercase mb-12">
              Scale Your<br/>
              <span className="text-zinc-800">Vision.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-8">
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-display font-bold text-white hover:text-zinc-400 transition-colors uppercase border-b-2 border-white/10 pb-2"
              >
                Inquiry@Beerendra <ArrowUpRight size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="space-y-12 w-full lg:w-auto">
            <div className="space-y-4">
              <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">Direct Linkage</p>
              <div className="flex flex-col gap-3">
                <a href={CONTACT_INFO.linkedin} className="text-lg text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                <a href={CONTACT_INFO.youtube} className="text-lg text-zinc-400 hover:text-white transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 font-mono text-[9px] text-zinc-600 uppercase tracking-[0.4em]">
          <p>© 2024 K. BEERENDRA — NARRATIVE ARCHITECT</p>
          <div className="flex gap-12">
            <span>9705552787</span>
            <span>HYD / IND</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;