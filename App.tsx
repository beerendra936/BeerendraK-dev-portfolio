import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Showreel from './components/Showreel';
import Portfolio from './components/Portfolio';
import MasteryLab from './components/MasteryLab';
import Process from './components/Process';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import BeforeAfter from './components/BeforeAfter';
import LogoMarquee from './components/LogoMarquee';
import { motion, useScroll, useTransform } from 'framer-motion';

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
    animate={{ opacity: 0.25 }}
    transition={{ delay, duration: 3 }}
  >
    <motion.div 
      className="film-reel-3d"
      animate={{ 
        rotateX: [15, 30, -10, 15],
        rotateZ: [0, 360],
        y: [0, -40, 0]
      }}
      transition={{ 
        rotateZ: { duration: 40, repeat: Infinity, ease: "linear" },
        rotateX: { duration: 20, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 12, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <div className="reel-plate plate-front" style={{ borderColor: `${color}11` }}></div>
      <div className="reel-hub"></div>
      <div className="reel-plate plate-back" style={{ borderColor: `${color}11` }}></div>
      {/* High-end volumetric light */}
      <div className="absolute inset-0 blur-[120px] opacity-20 rounded-full" style={{ background: color }}></div>
    </motion.div>
  </motion.div>
);

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div className="bg-brand-black min-h-screen selection:bg-brand-cyan selection:text-black font-sans relative overflow-x-hidden preserve-3d">
      
      {/* Minimalist stunning environment */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden preserve-3d">
        
        {/* Subtle Ambient Depth */}
        <motion.div style={{ y: yParallaxSlow, translateZ: -400 }} className="absolute inset-0 opacity-5">
           <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[100px]"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-cyan/[0.02] rounded-full blur-[100px]"></div>
        </motion.div>

        {/* High-Fidelity 3D Objects */}
        <motion.div style={{ y: yParallaxFast }} className="absolute inset-0">
          
          {/* Main Hero Reel - Top Right */}
          <PhysicalFilmReel top="10%" left="80%" size={2} color="#00d4ff" delay={1} z={-150} />
          
          {/* Secondary Reel - Deep Mid Section */}
          <PhysicalFilmReel top="140%" left="-5%" size={1.8} color="#ff4757" delay={2} z={-50} />

        </motion.div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Impact />
        <Showreel />
        <LogoMarquee />
        <Portfolio />
        <MasteryLab />
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