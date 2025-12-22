import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import Impact from './components/Impact';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-obsidian-950 text-zinc-400 min-h-screen selection:bg-emerald-500 selection:text-white font-sans relative">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <LogoMarquee />
        <Impact />
        <Portfolio />
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