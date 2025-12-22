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
    <nav className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-700 ${scrolled ? 'py-4' : 'py-10'}`}>
      <div className="container mx-auto px-6 lg:px-24 flex justify-center">
        <div className={`glass-studio border border-white/5 flex justify-between items-center transition-all duration-700 ${scrolled ? 'px-8 py-3 w-full max-w-4xl bg-brand-dark/95' : 'px-12 py-5 w-full max-w-7xl'}`}>
          <div className="cursor-pointer group flex flex-col" onClick={() => scrollTo('home')}>
            <span className="font-black text-xl tracking-tighter text-white uppercase leading-none">BEERENDRA.K</span>
            <span className="font-mono text-[8px] text-brand-primary tracking-[0.5em] uppercase mt-1">CREATIVE_CATALYST</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-12">
            {['Archives', 'Method', 'Domain', 'Connect'].map((item) => (
              <button
                key={item}
                onClick={() => {
                   const map: Record<string, string> = {
                      'Archives': 'portfolio',
                      'Method': 'process',
                      'Domain': 'domain',
                      'Connect': 'contact'
                   };
                   scrollTo(map[item]);
                }}
                className="text-[10px] font-bold text-zinc-500 hover:text-white transition-all uppercase tracking-[0.5em] relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-primary group-hover:w-full transition-all"></span>
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-primary transition-all"
          >
            START_PROJECT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;