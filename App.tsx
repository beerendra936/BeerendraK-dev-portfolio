import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import Impact from './components/Impact';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import BeforeAfter from './components/BeforeAfter';
import Process from './components/Process';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen selection:bg-indigo-500 selection:text-white font-sans relative">
      <div className="bg-grain"></div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <LogoMarquee />
        <Impact />
        <Services />
        <Portfolio />
        <Testimonials />
        <BeforeAfter />
        <Process />
        <Experience />
        <Skills />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;