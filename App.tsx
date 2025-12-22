import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Showreel from './components/Showreel';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import BeforeAfter from './components/BeforeAfter';
import LogoMarquee from './components/LogoMarquee';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen selection:bg-brand-cyan selection:text-black font-sans relative">
      {/* Global Technical HUD Overlay */}
      <div className="fixed inset-0 z-[105] pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-20 h-px bg-white/20"></div>
        <div className="absolute top-10 left-10 w-px h-20 bg-white/20"></div>
        
        <div className="absolute top-10 right-10 w-20 h-px bg-white/20"></div>
        <div className="absolute top-10 right-10 w-px h-20 bg-white/20"></div>

        <div className="absolute bottom-10 left-10 w-20 h-px bg-white/20"></div>
        <div className="absolute bottom-10 left-10 w-px h-20 bg-white/20"></div>

        <div className="absolute bottom-10 right-10 w-20 h-px bg-white/20"></div>
        <div className="absolute bottom-10 right-10 w-px h-20 bg-white/20"></div>

        {/* Small Data Blocks */}
        <div className="absolute top-24 left-10 font-mono text-[8px] text-white/40 uppercase tracking-widest vertical-rl">
          REC: [4K_DCI_60P]
        </div>
        <div className="absolute top-24 right-10 font-mono text-[10px] text-brand-cyan uppercase tracking-widest vertical-rl font-bold flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse mr-2"></span>
          XP: [14+_YEARS_ACTIVE]
          <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse ml-2"></span>
        </div>
        <div className="absolute bottom-24 right-10 font-mono text-[8px] text-brand-cyan/40 uppercase tracking-widest vertical-rl rotate-180">
          SIGNAL: LOCKED_V14.2
        </div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Showreel />
        <LogoMarquee />
        <Portfolio />
        <BeforeAfter />
        <Process />
        <Skills />
        <Testimonials />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;