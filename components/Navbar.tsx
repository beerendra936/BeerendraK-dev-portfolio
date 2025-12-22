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
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-10'}`}>
      <div className="container mx-auto px-6 lg:px-24">
        <div className="max-w-5xl mx-auto glass-morphism rounded-full px-8 py-4 flex justify-between items-center border border-white/5 shadow-2xl">
          <div className="cursor-pointer group flex items-center gap-2" onClick={() => scrollTo('home')}>
            <span className="w-2 h-2 rounded-full bg-brand-primary group-hover:scale-150 transition-transform"></span>
            <span className="font-bold text-sm tracking-tighter text-white uppercase">B.KARUKOLA</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Works', 'History', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase() === 'works' ? 'portfolio' : item.toLowerCase())}
                className="text-[10px] font-bold text-zinc-500 hover:text-white transition-all uppercase tracking-[0.3em]"
              >
                {item}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollTo('contact')}
            className="px-6 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-black transition-all"
          >
            Partner Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;