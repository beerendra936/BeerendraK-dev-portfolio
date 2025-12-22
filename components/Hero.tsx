import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Cpu, Activity, Zap, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Mouse tracking for subtle parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  const rotateX = useTransform(smoothY, [-500, 500], [7, -7]);
  const rotateY = useTransform(smoothX, [-500, 500], [-7, 7]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  // Timecode logic for the edge HUD
  const [timecode, setTimecode] = useState("00:00:00:00");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      const s = now.getSeconds().toString().padStart(2, '0');
      const f = Math.floor(Math.random() * 24).toString().padStart(2, '0');
      setTimecode(`${h}:${m}:${s}:${f}`);
    }, 41);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-brand-black preserve-3d"
    >
      {/* 1. Subtle Background Elements (Atmosphere, not Clutter) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      {/* 2. Razor-Thin Perimeter HUD */}
      <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-between pointer-events-none z-50">
        <div className="flex justify-between items-start border-t border-white/5 pt-4">
          <div className="flex gap-8 md:gap-12">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">System_ID</span>
              <span className="font-mono text-[9px] text-white/40 uppercase">BK_CORE_V2</span>
            </div>
            <div className="flex flex-col gap-1 hidden sm:flex">
              <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">Mastering</span>
              <span className="font-mono text-[9px] text-brand-mint/60 uppercase">DCI_PRO</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
             <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">Global_Timecode</span>
             <span className="font-mono text-[10px] text-brand-cyan font-bold tracking-widest">{timecode}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-end border-b border-white/5 pb-4">
          <div className="flex items-center gap-3 md:gap-4">
             <Activity size={12} className="text-brand-cyan animate-pulse" />
             <span className="font-mono text-[8px] text-zinc-700 uppercase tracking-[0.3em] md:tracking-[0.5em]">Neural_Signal_Stable</span>
          </div>
          <div className="font-mono text-[7px] md:text-[8px] text-zinc-700 uppercase tracking-widest hidden xs:block">
            LAT: 17.3850° N // LON: 78.4867° E
          </div>
        </div>
      </div>

      {/* 3. Main Stage Content */}
      <motion.div 
        style={{ rotateX, rotateY, scale, opacity }}
        className="relative z-20 max-w-5xl mx-auto flex flex-col items-center w-full"
      >
        {/* Verification Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12 px-4 md:px-5 py-2 border border-white/5 bg-white/[0.02] rounded-sm backdrop-blur-md"
        >
          <Cpu size={14} className="text-brand-cyan" />
          <span className="font-mono text-[8px] md:text-[9px] text-zinc-400 uppercase tracking-[0.5em] md:tracking-[0.8em]">14_Year_Industry_Standard</span>
          <div className="w-1.5 h-1.5 bg-brand-mint rounded-full shadow-[0_0_8px_#00ff88]" />
        </motion.div>

        {/* Clean, High-Impact Typography */}
        <div className="relative mb-12 md:mb-16 select-none w-full">
          <h1 className="text-5xl sm:text-8xl md:text-[140px] font-black tracking-tighter uppercase leading-[0.85] text-white flex flex-col items-center">
            <motion.span 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "mechanical" }}
              className="inline-block"
            >
              PRECISE.
            </motion.span>
            <motion.span 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "mechanical", delay: 0.2 }}
              className="inline-block stroke-text hover:text-white transition-colors duration-700"
            >
              CINEMATIC.
            </motion.span>
          </h1>
          
          {/* Decorative vertical lines */}
          <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-cyan/20 to-transparent" />
          <div className="absolute -right-4 md:-right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-coral/20 to-transparent" />
        </div>

        {/* Strategic Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center px-4"
        >
          <p className="text-lg md:text-2xl text-zinc-500 font-light max-w-2xl text-center mb-12 md:mb-16 leading-relaxed tracking-tight">
            Visual narratives engineered for the world's most <br className="hidden md:block"/> 
            impactful <span className="text-white font-medium">campaigns</span> and <span className="text-white font-medium">OTT platforms</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative w-full sm:w-auto px-12 md:px-16 py-5 md:py-6 bg-white text-black font-black uppercase text-[10px] tracking-[0.5em] md:tracking-[0.6em] rounded-sm group overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute inset-0 bg-brand-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10">ENTER_STUDIO</span>
            </motion.button>
            
            <div className="flex items-center justify-center gap-4 text-[9px] md:text-[10px] font-mono text-zinc-600 uppercase tracking-widest py-5 md:py-6 px-6 md:px-8 border border-white/5 rounded-sm w-full sm:w-auto">
              <MousePointer2 size={12} className="text-brand-coral" />
              Interactive_Ready
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 4. Minimalist Scroll Progress */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 md:bottom-12 flex flex-col items-center gap-4 md:gap-6"
      >
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-white/40"
          />
        </div>
        <span className="font-mono text-[7px] text-zinc-700 uppercase tracking-[1em]">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;