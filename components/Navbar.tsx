import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Studio' },
    { id: 'portfolio', label: 'Archive' },
    { id: 'experience', label: 'History' },
    { id: 'skills', label: 'Domain' },
    { id: 'contact', label: 'Inquiry' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] py-8 px-10 pointer-events-none flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pointer-events-auto"
      >
        <span className="font-display font-bold text-[11px] tracking-[0.3em] text-white">K. BEERENDRA</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:flex items-center gap-10 pointer-events-auto"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group relative font-display font-bold text-[9px] tracking-[0.2em] text-zinc-600 hover:text-white transition-all uppercase"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-500 group-hover:w-full transition-all"></span>
          </button>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pointer-events-auto hidden lg:flex items-center gap-2"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
        <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">Active Studio</span>
      </motion.div>
    </nav>
  );
};

export default Navbar;