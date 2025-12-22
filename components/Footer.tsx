import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Youtube, Linkedin, MessageSquare, ArrowRight, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 md:py-40 bg-brand-dark px-6 lg:px-24 border-t border-zinc-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          <div className="lg:col-span-7">
            <span className="font-mono text-brand-primary text-[10px] tracking-[1.5em] uppercase block mb-10">Communications Array</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-14 uppercase tracking-tighter leading-[1.1]">
              LET'S START A<br/><span className="text-brand-primary text-glow">CONVERSATION.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
              <a href={`mailto:${CONTACT_INFO.email}`} className="group block">
                <p className="font-mono text-[10px] text-zinc-700 uppercase tracking-[0.5em] mb-4 md:mb-6">Secure Email</p>
                <div className="flex items-center gap-4 md:gap-6 text-white group-hover:text-brand-primary transition-all">
                  <Mail size={20} />
                  <span className="text-xl md:text-3xl font-bold tracking-tight break-all">{CONTACT_INFO.email}</span>
                </div>
              </a>
              
              <a href="https://wa.me/919705552787" target="_blank" rel="noopener noreferrer" className="group block">
                <p className="font-mono text-[10px] text-zinc-700 uppercase tracking-[0.5em] mb-4 md:mb-6">Direct Signal (WA)</p>
                <div className="flex items-center gap-4 md:gap-6 text-white group-hover:text-brand-accent transition-all">
                  <MessageSquare size={20} />
                  <span className="text-xl md:text-3xl font-bold tracking-tight">+91 9705552787</span>
                </div>
              </a>
            </div>

            <div className="flex gap-6 md:gap-8">
              <a href={CONTACT_INFO.linkedin} className="w-14 h-14 md:w-16 md:h-16 rounded-none studio-glass flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
              <a href={CONTACT_INFO.youtube} className="w-14 h-14 md:w-16 md:h-16 rounded-none studio-glass flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="studio-glass p-8 md:p-12 lg:p-20 border border-white/5">
              <h3 className="text-xl md:text-2xl font-black text-white mb-8 md:mb-12 uppercase tracking-[0.4em]">Inquiry Protocol</h3>
              <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest ml-1">ID / Organization</label>
                  <input 
                    type="text" 
                    placeholder="NAME / BRAND" 
                    className="w-full bg-zinc-950 border border-white/5 px-6 md:px-8 py-4 md:py-6 text-white text-sm focus:border-brand-primary outline-none transition-all placeholder:text-zinc-800"
                  />
                </div>
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest ml-1">Transmission Channel</label>
                  <input 
                    type="email" 
                    placeholder="EMAIL_ADRESS" 
                    className="w-full bg-zinc-950 border border-white/5 px-6 md:px-8 py-4 md:py-6 text-white text-sm focus:border-brand-primary outline-none transition-all placeholder:text-zinc-800"
                  />
                </div>
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest ml-1">Briefing</label>
                  <textarea 
                    rows={4} 
                    placeholder="OBJECTIVES..." 
                    className="w-full bg-zinc-950 border border-white/5 px-6 md:px-8 py-4 md:py-6 text-white text-sm focus:border-brand-primary outline-none transition-all resize-none placeholder:text-zinc-800"
                  ></textarea>
                </div>
                <button className="w-full py-6 md:py-8 bg-brand-primary text-black font-black text-[11px] md:text-[12px] tracking-[0.4em] uppercase flex items-center justify-center gap-4 hover:bg-white transition-all">
                  TRANSMIT_REQUEST <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-40 pt-12 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <div className="flex items-center gap-4 md:gap-6">
             <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
             <p className="text-[10px] md:text-[11px] font-mono text-zinc-600 uppercase tracking-[0.4em] md:tracking-[0.6em] text-center md:text-left">© 2024 BEERENDRA.K // VISUAL STRATEGIST</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-700">
            <span className="flex items-center gap-2"><MapPin size={12} /> Hyderabad, IN</span>
            <span>Est. 2010</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;