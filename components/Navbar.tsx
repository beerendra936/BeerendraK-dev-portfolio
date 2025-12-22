import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 ${scrolled ? 'py-4 glass-nav' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="cursor-pointer font-sans font-semibold text-[18px] tracking-[0.5px] text-white"
          onClick={() => scrollTo('home')}
        >
          BEERENDRA.K
        </div>
        
        {/* Nav Items */}
        <div className="hidden lg:flex items-center gap-12 font-mono text-[12px] uppercase tracking-widest text-zinc-500">
          <button onClick={() => scrollTo('portfolio')} className="hover:text-brand-cyan transition-colors">ARCHIVES</button>
          <button onClick={() => scrollTo('process')} className="hover:text-brand-cyan transition-colors">METHOD</button>
          <button onClick={() => scrollTo('domain')} className="hover:text-brand-cyan transition-colors">DOMAIN</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-brand-cyan transition-colors">CONNECT</button>
        </div>

        {/* CTA */}
        <button 
          onClick={() => scrollTo('contact')}
          className="px-6 py-2.5 bg-brand-coral text-white text-[12px] font-bold uppercase tracking-widest rounded-[4px] hover:bg-white hover:text-black transition-all duration-300"
        >
          START_PROJECT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;