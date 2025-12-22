import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Youtube, Linkedin, Mail, MessageSquare, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-16 bg-brand-card px-6 lg:px-24 border-t border-white/5 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">Ready to create?</h2>
          <div className="flex flex-wrap gap-4">
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="px-8 py-4 bg-brand-coral text-white font-bold uppercase text-[12px] tracking-[0.2em] rounded-[4px] flex items-center gap-3 hover:bg-white hover:text-black transition-all"
            >
              <Mail size={16} /> SEND_EMAIL
            </a>
            <a 
              href="https://wa.me/919705552787"
              className="px-8 py-4 border border-white/10 text-white font-bold uppercase text-[12px] tracking-[0.2em] rounded-[4px] flex items-center gap-3 hover:bg-brand-cyan hover:text-black hover:border-brand-cyan transition-all"
            >
              <MessageSquare size={16} /> WHATSAPP_DIRECT
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16 border-t border-white/5">
          {/* Column 1 */}
          <div>
            <div className="font-sans font-semibold text-[18px] tracking-[0.5px] text-white mb-6">BEERENDRA.K</div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Delivering high-performance video assets with broadcast-safe standards and cinematic storytelling.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-mono text-brand-cyan uppercase tracking-[0.5em] mb-2">QUICK_LINKS</h4>
            {['Archives', 'Method', 'Domain'].map(link => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-zinc-400 hover:text-white transition-all text-sm w-fit relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-cyan group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-[10px] font-mono text-brand-cyan uppercase tracking-[0.5em] mb-4">SOCIAL_ARRAY</h4>
            <div className="flex gap-4">
              <a href={CONTACT_INFO.linkedin} className="text-zinc-500 hover:text-brand-cyan hover:scale-125 transition-all">
                <Linkedin size={24} />
              </a>
              <a href={CONTACT_INFO.youtube} className="text-zinc-500 hover:text-brand-coral hover:scale-125 transition-all">
                <Youtube size={24} />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-2 text-zinc-700 font-mono text-[9px] uppercase tracking-widest">
              <MapPin size={12} /> Hyderabad, IN // Professional Industry Veteran
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;