import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MessageSquare, Mail, Youtube, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-32 bg-brand-dark px-6 lg:px-24 border-t border-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
              Let's create something <span className="text-brand-primary">Addictive.</span>
            </h2>
            <p className="text-zinc-500 text-lg font-light mb-12 max-w-md">
              Available for freelance collaborations, long-term content strategies, and high-stakes post-production pipelines.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 text-white hover:text-brand-primary transition-colors group">
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-brand-primary transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono">Email Me</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.email}</p>
                </div>
              </a>
              <a href="https://wa.me/919705552787" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-brand-accent transition-colors group">
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-brand-accent transition-colors">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono">WhatsApp</p>
                  <p className="text-lg font-medium">+91 9705552787</p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end lg:items-end">
            <div className="flex gap-4 mb-12">
              <a href={CONTACT_INFO.linkedin} className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all">
                <Linkedin size={24} />
              </a>
              <a href={CONTACT_INFO.youtube} className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-dark transition-all">
                <Youtube size={24} />
              </a>
            </div>
            
            <div className="glass-card p-10 rounded-3xl w-full max-w-sm">
              <p className="text-zinc-400 italic text-sm mb-6 leading-relaxed">
                "Beerendra's storytelling drove ₹24 Crores in donations. He doesn't just edit video; he edits for emotion and action."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 bg-brand-primary rounded-full"></div>
                <div>
                  <p className="text-white font-bold text-sm">Campaign Lead</p>
                  <p className="text-zinc-600 text-xs font-mono uppercase">Donatekart</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-zinc-700 font-mono tracking-widest uppercase">
            © 2024 K. Beerendra — Hyderabad, India
          </p>
          <div className="flex gap-8 text-[10px] text-zinc-700 font-mono tracking-widest uppercase">
            <span className="hover:text-brand-primary cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-brand-primary cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-brand-primary cursor-pointer transition-colors">Legal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;