import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import Impact from './components/Impact';
import Portfolio from './components/Portfolio';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-zinc-500 min-h-screen selection:bg-brand-primary selection:text-black font-sans relative">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <LogoMarquee />
        <Impact />
        <Portfolio />
        <BeforeAfter />
        <Services />
        <Experience />
        <Skills />
        <Testimonials />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;