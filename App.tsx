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
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Scissors, Film } from 'lucide-react';

const PhysicalFilmReel: React.FC<{ 
  top: string; 
  left: string; 
  size?: number; 
  delay?: number;
  color?: string;
  z?: number;
}> = ({ top, left, size = 1, delay = 0, color = "#00d4ff", z = 0 }) => (
  <motion.div 
    className="absolute preserve-3d pointer-events-none"
    style={{ top, left, transform: `translateZ(${z}px) scale(${size})` }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.3 }}
    transition={{ delay, duration: 3 }}
  >
    <motion.div 
      className="film-reel-3d"
      animate={{ 
        rotateX: [10, 25, -15, 10],
        rotateZ: [0, 360],
        y: [0, -30, 0]
      }}
      transition={{ 
        rotateZ: { duration: 30, repeat: Infinity, ease: "linear" },
        rotateX: { duration: 15, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <div className="reel-plate plate-front" style={{ borderColor: `${color}11` }}></div>
      <div className="reel-hub"></div>
      <div className="reel-plate plate-back" style={{ borderColor: `${color}11` }}></div>
      {/* Soft Internal Glow */}
      <div className="absolute inset-0 blur-[100px] opacity-10 rounded-full" style={{ background: color }}></div>
    </motion.div>
  </motion.div>
);

const Floating3DIcon: React.FC<{ 
  Icon: any; 
  top: string; 
  left: string; 
  size?: number; 
  color?: string; 
  delay?: number;
  z?: number;
}> = ({ Icon, top, left, size = 1, color = "#00d4ff", delay = 0, z = 100 }) => (
  <motion.div 
    className="absolute preserve-3d pointer-events-none"
    style={{ top, left, transform: `translateZ(${z}px) scale(${size})` }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.6, scale: size }}
    transition={{ delay, duration: 1.5 }}
  >
    <motion.div 
      animate={{ 
        rotateY: [0, 20, -20, 0],
        rotateX: [0, 15, -15, 0],
        y: [0, -40, 0]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
      className="relative w-32 h-32 flex items-center justify-center preserve-3d"
    >
      <div className="absolute inset-0 blur-3xl opacity-10 rounded-full" style={{ backgroundColor: color }}></div>
      <div className="absolute inset-0 bg-white/[0.01] border border-white/5 rounded-3xl backdrop-blur-xl transform translate-z-[-20px]"></div>
      <div className="relative z-10 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transform translate-z-[30px]">
        <Icon size={56} strokeWidth={1} style={{ color }} />
      </div>
    </motion.div>
  </motion.div>
);

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="bg-brand-black min-h-screen selection:bg-brand-cyan selection:text-black font-sans relative overflow-x-hidden preserve-3d">
      
      {/* Minimalist 3D Environment Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden preserve-3d">
        
        {/* Deep Ambient Atmosphere */}
        <motion.div style={{ y: yParallaxSlow, translateZ: -300 }} className="absolute inset-0 opacity-10">
          <div className="absolute top-[15%] left-[10%] w-[600px] h-[600px] border border-brand-cyan/5 rounded-full blur-[2px] animate-[spin_80s_linear_infinite]"></div>
          <div className="absolute top-[65%] right-[5%] w-[500px] h-[500px] border border-white/5 rounded-full blur-[2px] animate-[spin_60s_linear_infinite_reverse]"></div>
        </motion.div>

        {/* Focused Hero 3D Objects */}
        <motion.div style={{ y: yParallaxFast }} className="absolute inset-0">
          
          {/* HIGH IMPACT FILM REELS - Only two for maximum elegance */}
          <PhysicalFilmReel top="15%" left="75%" size={1.8} color="#00d4ff" delay={0.5} z={-100} />
          <PhysicalFilmReel top="160%" left="5%" size={1.5} color="#ff4757" delay={1.5} z={0} />

          {/* ICON ELEMENTS - Purposefully placed in gutters */}
          <Floating3DIcon Icon={Camera} top="45%" left="5%" size={1.2} color="#00d4ff" delay={1.2} z={150} />
          <Floating3DIcon Icon={Scissors} top="250%" left="80%" size={1.1} color="#00ff88" delay={0.8} z={100} />

        </motion.div>
      </div>

      <Navbar />
      <main className="relative z-10">
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