import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Works' },
    { id: 'experience', label: 'History' },
    { id: 'skills', label: 'Domain' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-4 bg-brand-dark/80 backdrop-blur-xl border-b border-zinc-900' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 lg:px-24 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          <span className="font-bold text-lg tracking-tight text-white">B<span className="text-brand-primary">.</span>KARUKOLA</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative text-[11px] font-bold text-zinc-500 hover:text-white transition-all uppercase tracking-widest group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-primary group-hover:w-full transition-all"></span>
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollTo('contact')}
          className="hidden sm:flex px-6 py-2.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-brand-dark transition-all"
        >
          Partner Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;