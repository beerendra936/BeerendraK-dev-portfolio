import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Youtube, Linkedin, MessageSquare, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-32 bg-brand-dark px-6 lg:px-24 border-t border-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-h2 font-bold text-white mb-6 uppercase">Let's build a <br/><span className="text-brand-primary">Narrative.</span></h2>
            <p className="text-body text-zinc-400 mb-10 max-w-md font-light">
              Available for freelance collaborations, OTT post-production, and viral content strategy.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 text-white hover:text-brand-primary transition-colors group">
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-brand-primary transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-body font-medium">{CONTACT_INFO.email}</span>
              </a>
              <a href="https://wa.me/919705552787" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-brand-accent transition-colors group">
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-brand-accent transition-colors">
                  <MessageSquare size={20} />
                </div>
                <span className="text-body font-medium">+91 9705552787 (WhatsApp)</span>
              </a>
            </div>

            <div className="flex gap-4 mt-12">
              <a href={CONTACT_INFO.linkedin} className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={CONTACT_INFO.youtube} className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-brand-secondary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="bg-brand-card p-10 rounded-3xl border border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-8">Send a Quick Inquiry</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white text-small focus:border-brand-primary outline-none transition-all"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white text-small focus:border-brand-primary outline-none transition-all"
                />
              </div>
              <div>
                <textarea 
                  rows={4} 
                  placeholder="Project Details" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white text-small focus:border-brand-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-brand-secondary text-white rounded-xl font-bold text-small flex items-center justify-center gap-2 hover:bg-brand-secondary/90 transition-all">
                Send Proposal <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <p className="text-small font-mono tracking-tighter">© 2024 Beerendra K — Narrative Architect</p>
          <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest">
            <span>Hyderabad, India</span>
            <span>Est. 2010</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;