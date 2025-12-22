import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DigitReel: React.FC<{ digit: string; delay: number }> = ({ digit, delay }) => {
  const isNumber = !isNaN(parseInt(digit)) && digit !== " ";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsMoving(true);
      const timer = setTimeout(() => setIsMoving(false), 2500 + (delay * 100));
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  if (!isNumber) {
    return (
      <span className="inline-block px-1 text-zinc-500 opacity-30 self-center">
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
          ease: [0.16, 1, 0.3, 1],
          delay: delay * 0.1
        }}
        className={`reel-strip ${isMoving ? 'motion-blur' : ''} transition-[filter,transform] duration-700`}
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
    <div className="text-center p-8 md:p-14 relative group border-white/5">
      {/* Precision Scanning Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-brand-cyan/20 group-hover:w-full group-hover:bg-brand-cyan/40 transition-all duration-1000"></div>
      
      <div className="text-6xl md:text-8xl font-black text-brand-cyan mb-8 tracking-tighter flex justify-center items-center select-none h-[1.2em] overflow-hidden">
        {prefix && (
          <span className="text-2xl mr-2 text-zinc-800 font-mono translate-y-2">
            {prefix}
          </span>
        )}
        <div className="flex items-center">
          {value.split('').map((char, i) => (
            <DigitReel key={i} digit={char} delay={i} />
          ))}
        </div>
        {suffix && (
          <span className="text-3xl ml-3 text-white/80 font-sans translate-y-2">
            {suffix}
          </span>
        )}
      </div>
      
      <div className="flex flex-col items-center">
        <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[1em] mb-4 group-hover:text-white transition-colors duration-500">
          {label}
        </div>
        <div className="flex gap-1.5">
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
    <section id="stats" className="py-20 bg-brand-black border-y border-white/5 relative z-10 overflow-hidden">
      {/* Environment Data Tags */}
      <div className="absolute top-8 left-12 font-mono text-[8px] text-zinc-800 uppercase tracking-widest hidden lg:block select-none">
        METRIC_VERIFICATION_MODULE // 2025_REF
      </div>
      
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5">
          <RollingNumber value="500" label="Global Views" suffix="M+" />
          <RollingNumber value="14.5" label="Master Edits" prefix="~" suffix="K" />
          <RollingNumber value="080" label="OTT Titles" suffix="+" />
        </div>
      </div>

      <div className="absolute bottom-8 right-12 font-mono text-[8px] text-zinc-800 uppercase tracking-widest hidden lg:block select-none">
        MASTERING_TOTALS_STABLE
      </div>
    </section>
  );
};

export default Impact;