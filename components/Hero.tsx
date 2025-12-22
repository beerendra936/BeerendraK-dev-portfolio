import React, { useState, useRef, useEffect } from 'react';
import { Play, ArrowRight, MonitorPlay, Zap, Globe, Cpu } from 'lucide-react';
import VideoModal from './VideoModal';
import { PROFILE_IMAGE } from '../constants';

const Hero: React.FC = () => {
  const [showReel, setShowReel] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Decoding Text Effect Logic - Refined for "Expensive" tone
  const roles = ["STRATEGIC CONTENT PARTNER", "RETENTION ENGINEER", "GLOBAL SCALE SPECIALIST"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting 
            ? currentRole.substring(0, displayText.length - 1) 
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="home" 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#030712] selection:bg-indigo-500/30 pt-20 lg:pt-0"
    >
      <VideoModal isOpen={showReel} onClose={() => setShowReel(false)} videoUrl="https://youtu.be/eWGMXR2WTKA" />

      {/* Dynamic Spotlight Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.08), transparent 40%)`
        }}
      ></div>

      {/* Animated Grid / Tech Background */}
      <div className="absolute inset-0 z-0 opacity-[0.2]" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
           }}>
      </div>
      
      {/* Floating Tech Badges */}
      <div className="absolute top-1/4 left-10 hidden xl:flex flex-col gap-4 animate-float-slow opacity-40">
         <div className="p-3 bg-slate-900/50 border border-slate-700/50 backdrop-blur-md rounded-lg flex items-center gap-3">
            <Cpu size={20} className="text-indigo-400" />
            <span className="font-mono text-xs text-slate-300">PRECISION_STORYTELLING</span>
         </div>
      </div>
      <div className="absolute bottom-1/4 right-10 hidden xl:flex flex-col gap-4 animate-float-delayed opacity-40">
         <div className="p-3 bg-slate-900/50 border border-slate-700/50 backdrop-blur-md rounded-lg flex items-center gap-3">
            <Globe size={20} className="text-green-400" />
            <span className="font-mono text-xs text-slate-300">AUTHORITY_CONVERSION_ENGINE</span>
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto text-center">
          
          {/* Status Bar - Refined FOMO */}
          <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-1000 flex justify-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-indigo-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(79,70,229,0.15)] hover:border-indigo-400 transition-colors cursor-crosshair">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono font-bold text-slate-200 tracking-widest uppercase">
                CAPACITY LIMITED // Q2 2024
              </span>
              <div className="h-4 w-px bg-slate-700 mx-1"></div>
              <span className="text-[10px] font-mono text-indigo-400 flex items-center gap-1">
                <Zap size={10} className="fill-indigo-400" />
                ELITE_ACCESS
              </span>
            </div>
          </div>

          {/* Main Typography - The Authority Hook */}
          <div className="relative mb-6 group">
            <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter text-white relative z-10 leading-[0.85] uppercase">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-400 drop-shadow-2xl">CONVERTING</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-gradient-x bg-300%">
                ATTENTION
              </span>
              <span className="block text-slate-100 text-4xl md:text-6xl lg:text-7xl mt-2 tracking-normal font-sans font-light italic opacity-90">into Authority.</span>
            </h1>
            <div className="h-8 md:h-12 mt-6">
              <span className="font-mono text-lg md:text-xl text-indigo-400/80 tracking-widest uppercase border-r-4 border-indigo-500 pr-2 animate-pulse">
                {displayText}
              </span>
            </div>
          </div>

          <p className="font-light text-slate-400 text-lg md:text-xl lg:text-2xl max-w-3xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 mx-auto">
            Strategic post-production for organizations that demand <span className="text-slate-200 font-medium border-b border-indigo-500/50">precision</span>, 
            <span className="text-slate-200 font-medium border-b border-indigo-500/50"> scale</span>, and 
            <span className="text-slate-200 font-medium border-b border-indigo-500/50"> cultural dominance</span>. 
            Deployed by OTT giants and high-stakes campaigns globally.
          </p>

          {/* Buttons - The Action */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 mb-20">
            <button 
              onClick={() => setShowReel(true)}
              className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-lg tracking-wide overflow-hidden transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>
              <span className="relative z-10 flex items-center gap-3 uppercase">
                <Play size={20} className="fill-black" />
                Executive Showreel
              </span>
            </button>
            
            <a 
              href="#contact"
              className="group flex items-center gap-3 px-10 py-5 bg-slate-900/60 border border-slate-700/50 text-white rounded-full font-medium hover:bg-slate-800 hover:border-indigo-500 transition-all backdrop-blur-sm uppercase tracking-wide"
            >
              Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-indigo-400" />
            </a>
          </div>

          {/* Stats - Refined */}
          <div className="flex flex-wrap gap-8 md:gap-16 border-y border-white/5 py-10 animate-in fade-in duration-1000 delay-500 justify-center w-full bg-black/20 backdrop-blur-sm">
              <div className="text-center group">
                 <p className="text-4xl md:text-5xl font-display font-bold text-white group-hover:text-indigo-400 transition-colors">14+</p>
                 <p className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-widest mt-1 flex items-center justify-center gap-1">
                   Years of Mastery <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                 </p>
              </div>
              <div className="text-center group">
                 <p className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-600">₹24 Cr</p>
                 <p className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-widest mt-1 flex items-center justify-center gap-1">
                   Conversion Value <TrendingUpIcon />
                 </p>
              </div>
              <div className="text-center group">
                 <p className="text-4xl md:text-5xl font-display font-bold text-white group-hover:text-purple-400 transition-colors">500M+</p>
                 <p className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-widest mt-1 flex items-center justify-center gap-1">
                   Global Impressions <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                 </p>
              </div>
          </div>

        </div>
      </div>
      
    </section>
  );
};

const TrendingUpIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
)

export default Hero;