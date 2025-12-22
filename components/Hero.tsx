import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const title1 = "PRECISE.";
  const title2 = "CINEMATIC.";
  const { scrollY } = useScroll();

  // Scroll-driven transforms for the experience badge
  const badgeGlow = useTransform(scrollY, [0, 300], ["rgba(0, 212, 255, 0.1)", "rgba(0, 212, 255, 0.6)"]);
  const badgeScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const badgeY = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* HUD Focus Brackets in Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="relative w-[80vw] h-[60vh] border border-white/5">
          <Target className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-cyan w-12 h-12" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-white/5"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-white/5"></div>
        </div>
      </div>

      {/* Parallax Background Decor */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-gradient-to-br from-brand-cyan/20 to-transparent blur-[180px] pointer-events-none"
      ></motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Highlighted Experience Badge - Linked to Scroll */}
        <motion.div 
          style={{ 
            scale: badgeScale, 
            backgroundColor: badgeGlow,
            y: badgeY,
            boxShadow: useTransform(scrollY, [0, 300], ["0 0 0px rgba(0,212,255,0)", "0 0 40px rgba(0,212,255,0.3)"])
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-[11px] text-brand-cyan uppercase tracking-[0.8em] mb-12 flex items-center justify-center gap-4 px-8 py-3 border border-brand-cyan/30 rounded-full transition-colors duration-300"
        >
          <div className="w-2 h-2 bg-brand-cyan rounded-full animate-ping"></div>
          14+_YEARS_OF_POST_PRODUCTION_MASTERY
          <div className="w-2 h-2 bg-brand-cyan rounded-full animate-ping"></div>
        </motion.div>

        <h1 className="text-6xl md:text-[92px] font-extrabold tracking-tighter uppercase leading-[0.85] mb-8">
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
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 bounce-scroll cursor-pointer group"
        onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-4 group-hover:text-brand-cyan transition-colors">SCRUB_TIMELINE</div>
        <ChevronDown size={24} className="text-white mx-auto group-hover:text-brand-cyan transition-colors" />
      </motion.div>

      {/* Side HUD text elements */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-24 opacity-20">
         <div className="font-mono text-[9px] uppercase tracking-widest -rotate-90 origin-left">
            EXPERIENCE_VETERAN // CORE_STABLE
         </div>
      </div>
    </section>
  );
};

export default Hero;