import React, { useState, useEffect } from 'react';
import { Menu, X, Film, Activity, User, Mail, FolderOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'portfolio', 'experience', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: <User size={18} />, label: 'Authority' },
    { id: 'portfolio', icon: <FolderOpen size={18} />, label: 'Case Studies' },
    { id: 'experience', icon: <Film size={18} />, label: 'Timeline' },
    { id: 'skills', icon: <Activity size={18} />, label: 'Systems' },
    { id: 'contact', icon: <Mail size={18} />, label: 'Inquiry' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Brand Logo - Top Left */}
      <div className="fixed top-6 left-6 z-50 hidden md:flex items-center gap-4">
        <div className="flex flex-col mix-blend-difference">
          <span className="font-display font-bold text-xl tracking-tighter text-white">BEERENDRA.K</span>
          <span className="text-[10px] font-mono text-indigo-400 tracking-widest font-bold">POST-PRODUCTION PARTNER</span>
        </div>
      </div>

      {/* REC Indicator - Top Right */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2 mix-blend-difference">
        <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse-fast shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
        <span className="font-mono text-xs text-white font-bold tracking-widest uppercase">Live Signal</span>
        <span className="font-mono text-xs text-slate-400 ml-2 hidden sm:inline opacity-50">00:11:42:05</span>
      </div>

      {/* Floating Dock Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-auto">
        <nav className="glass-pill px-2 py-2 rounded-full flex items-center gap-1 sm:gap-2 border border-white/10 shadow-2xl shadow-indigo-500/10 transition-all duration-300 transform hover:scale-105">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-4 py-3 rounded-full flex items-center gap-2 transition-all duration-300 group ${
                activeSection === item.id 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.icon}
              <span className={`text-sm font-medium ${activeSection === item.id ? 'block' : 'hidden md:block'} `}>
                {item.label}
              </span>
              
              {/* Tooltip for icon-only state */}
              {activeSection !== item.id && (
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap md:hidden pointer-events-none">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;