import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Linkedin, Youtube, ArrowUpRight, Copy, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-[#02040a] border-t border-slate-900 pt-24 pb-12 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 border border-green-500/30 text-green-400 text-xs font-mono mb-6">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span>ACCEPTING NEW CLIENTS FOR Q2</span>
            </div>
            <h2 className="font-display text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
              READY TO <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-slate-500">BREAK THE ALGORITHM?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-lg">
              I don't just edit videos. I engineer assets that convert views into voters, donors, and subscribers.
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full lg:w-[400px]">
             {/* Main Email Card */}
             <div className="group relative p-6 bg-slate-900/80 border border-slate-800 hover:border-indigo-500 rounded-2xl transition-all duration-300">
               <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-indigo-600 rounded-lg text-white shadow-lg shadow-indigo-600/20">
                   <Mail size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase tracking-wider font-mono">Priority Inbox</p>
                   <p className="text-white font-medium text-lg">{CONTACT_INFO.email}</p>
                 </div>
               </div>
               
               <div className="flex gap-2">
                 <a 
                   href={`mailto:${CONTACT_INFO.email}`}
                   className="flex-1 py-3 bg-white text-black font-bold text-center rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                 >
                   Send Brief <ArrowUpRight size={16} />
                 </a>
                 <button 
                   onClick={handleCopyEmail}
                   className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 text-white transition-colors"
                   title="Copy Email"
                 >
                   {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                 </button>
               </div>
             </div>

             {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4">
               <a 
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer" 
                className="p-4 bg-slate-900 border border-slate-800 hover:border-[#0077b5] rounded-xl flex items-center justify-center gap-2 text-slate-400 hover:text-white hover:bg-[#0077b5]/10 transition-all font-mono text-sm"
               >
                 <Linkedin size={18} /> LinkedIn
               </a>
               <a 
                href={CONTACT_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer" 
                className="p-4 bg-slate-900 border border-slate-800 hover:border-[#ff0000] rounded-xl flex items-center justify-center gap-2 text-slate-400 hover:text-white hover:bg-[#ff0000]/10 transition-all font-mono text-sm"
               >
                 <Youtube size={18} /> YouTube
               </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-[10px] font-mono uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} BEERENDRA KARUKOLA // VISUAL ALCHEMIST</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Hyderabad, India
            </span>
            <span>Local Time: {new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit', timeZone: 'Asia/Kolkata'})}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;