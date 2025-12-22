import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DigitReel: React.FC<{ digit: string; delay: number }> = ({ digit, delay }) => {
  const isNumber = !isNaN(parseInt(digit)) && digit !== " ";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasFinishedRolling, setHasFinishedRolling] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setHasFinishedRolling(true), 2500 + (delay * 100));
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  if (!isNumber) {
    return (
      <span className="inline-block px-0.5 text-zinc-500 opacity-50 align-bottom h-[1em] leading-[1em]">
        {digit}
      </span>
    );
  }

  const finalDigit = parseInt(digit);

  return (
    <span className="reel-viewport" ref={ref}>
      <motion.span 
        initial={{ y: 0 }}
        animate={isInView ? { y: `-${finalDigit * 10}%` } : { y: 0 }}
        transition={{ 
          duration: 2.5, 
          ease: [0.16, 1, 0.3, 1], // Custom cinematic cubic bezier
          delay: delay * 0.1
        }}
        className={`reel-strip ${!hasFinishedRolling && isInView ? 'motion-blur' : ''}`}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span key={num} className="reel-digit">
            {num}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

const RollingNumber = ({ value, label, prefix = "", suffix = "" }: { value: string, label: string, prefix?: string, suffix?: string }) => {
  return (
    <div className="text-center p-8 md:p-12 relative group border-white/5">
      {/* Top HUD Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-brand-cyan/40 group-hover:w-1/2 group-hover:bg-brand-cyan transition-all duration-700"></div>
      
      <div className="text-6xl md:text-8xl font-black text-brand-cyan mb-6 tracking-tighter flex justify-center items-end select-none h-[1.1em] overflow-hidden">
        {prefix && (
          <span className="text-2xl mr-2 text-zinc-800 font-mono mb-2">
            {prefix}
          </span>
        )}
        <div className="flex leading-none">
          {value.split('').map((char, i) => (
            <DigitReel key={i} digit={char} delay={i} />
          ))}
        </div>
        {suffix && (
          <span className="text-3xl ml-2 text-white/90 font-sans mb-2">
            {suffix}
          </span>
        )}
      </div>
      
      <div className="flex flex-col items-center">
        <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.8em] mb-4 group-hover:text-white transition-colors">
          {label}
        </div>
        <div className="flex gap-2">
          <div className="w-1 h-1 bg-brand-cyan rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-zinc-900 rounded-full"></div>
          <div className="w-1 h-1 bg-zinc-900 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const Impact: React.FC = () => {
  return (
    <section id="stats" className="py-12 bg-brand-black border-y border-white/5 relative z-10 overflow-hidden">
      {/* Data Labels */}
      <div className="absolute top-6 left-10 font-mono text-[8px] text-zinc-800 uppercase tracking-widest hidden lg:block">
        LOG_TYPE: AUDIENCE_METRICS // STATUS: NOMINAL
      </div>
      
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5">
          <RollingNumber value="500" label="Global Views" suffix="M+" />
          <RollingNumber value="14.5" label="Master Edits" prefix="~" suffix="K" />
          <RollingNumber value="080" label="OTT Titles" suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default Impact;