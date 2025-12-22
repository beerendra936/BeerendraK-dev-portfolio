import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ChevronDown, Film, Video, Layers } from 'lucide-react';

const Hero: React.FC = () => {
  const title1 = "PRECISE.";
  const title2 = "CINEMATIC.";
  const { scrollY } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse parallax 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  // Scroll-driven transforms
  const badgeGlow = useTransform(scrollY, [0, 300], ["rgba(0, 212, 255, 0.1)", "rgba(0, 212, 255, 0.6)"]);
  const badgeScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const zDepth = useTransform(scrollY, [0, 600], [0, 300]);

  return (
    <section 
      id="home" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden preserve-3d"
    >
      {/* 3D Cinematic Stack - Visual Highlight */}
      <motion.div 
        style={{ rotateX, rotateY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none preserve-3d"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-96 h-56 preserve-3d">
           {/* Layer 1: Master */}
           <motion.div 
             animate={{ 
               translateZ: isHovered ? 120 : 0,
               rotateY: isHovered ? -5 : 0,
               x: isHovered ? 40 : 0
             }}
             className="absolute inset-0 bg-brand-cyan/10 border border-brand-cyan/40 backdrop-blur-sm rounded-lg overflow-hidden"
           >
              <div className="absolute top-2 left-2 font-mono text-[6px] text-brand-cyan">MASTER_OUTPUT_V01</div>
              <div className="w-full h-full bg-gradient-to-br from-brand-cyan/5 to-transparent"></div>
           </motion.div>

           {/* Layer 2: Grade */}
           <motion.div 
             animate={{ 
               translateZ: isHovered ? 60 : 0,
               rotateY: isHovered ? -2 : 0,
               x: isHovered ? 20 : 0
             }}
             className="absolute inset-0 bg-zinc-900/40 border border-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
           >
              <div className="absolute top-2 left-2 font-mono text-[6px] text-zinc-500">COLOR_GRADE_PROX</div>
           </motion.div>

           {/* Layer 3: Raw */}
           <motion.div 
             className="absolute inset-0 bg-zinc-950/80 border border-white/5 rounded-lg overflow-hidden"
           >
              <div className="absolute top-2 left-2 font-mono text-[6px] text-zinc-700">RAW_INGEST_LOG</div>
           </motion.div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <motion.div 
        style={{ rotateX, rotateY, translateZ: zDepth }}
        className="relative z-10 max-w-5xl mx-auto preserve-3d"
      >
        <motion.div 
          style={{ 
            scale: badgeScale, 
            backgroundColor: badgeGlow,
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "mechanical" }}
          className="font-mono text-[11px] text-brand-cyan uppercase tracking-[0.8em] mb-12 flex items-center justify-center gap-4 px-10 py-3.5 border border-brand-cyan/30 rounded-full backdrop-blur-md"
        >
          <div className="w-2 h-2 bg-brand-cyan rounded-full animate-ping"></div>
          14+_YEARS_OF_POST_PRODUCTION_MASTERY
          <div className="w-2 h-2 bg-brand-cyan rounded-full animate-ping"></div>
        </motion.div>

        <h1 className="text-6xl md:text-[92px] font-extrabold tracking-tighter uppercase leading-[0.85] mb-8 select-none">
          <div className="char-reveal mb-2">
            {title1.split('').map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>{char}</span>
            ))}
          </div>
          <div className="char-reveal text-brand-cyan cyan-pulse">
            {title2.split('').map((char, i) => (
              <span key={i} style={{ animationDelay: `${(title1.length + i) * 0.05}s` }}>{char}</span>
            ))}
          </div>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4"
        >
          <span>Senior lead editor shaping narratives for the world's most influential campaigns and OTT platforms.</span>
          <span className="h-px w-24 bg-white/10"></span>
        </motion.p>
      </motion.div>

      {/* Floating 3D Elements in HUD */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-32 opacity-20 preserve-3d">
         <div className="font-mono text-[9px] uppercase tracking-widest -rotate-90 origin-left flex items-center gap-4">
            <Film size={14} className="animate-spin [animation-duration:12s]" />
            EXPERIENCE_VETERAN // CORE_STABLE
         </div>
         <div className="font-mono text-[9px] uppercase tracking-widest -rotate-90 origin-left flex items-center gap-4">
            <Video size={14} className="animate-pulse" />
            Z_DEPTH_ACTIVE // PERSPECTIVE_LOCKED
         </div>
      </div>
    </section>
  );
};

export default Hero;