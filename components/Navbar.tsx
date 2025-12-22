import React, { useState, useEffect } from 'react';

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-4 bg-brand-dark/90 backdrop-blur-md border-b border-zinc-900' : 'py-8'}`}>
      <div className="container mx-auto px-6 lg:px-24 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => scrollTo('home')}>
          <span className="font-bold text-lg tracking-tight text-white">B<span className="text-brand-secondary">.</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['Works', 'History', 'Domain', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase() === 'works' ? 'portfolio' : item.toLowerCase())}
              className="text-[11px] font-bold text-zinc-500 hover:text-white transition-all uppercase tracking-widest"
            >
              {item}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollTo('contact')}
          className="px-6 py-2 rounded-full border border-brand-primary text-brand-primary text-[11px] font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-brand-dark transition-all"
        >
          Work With Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;