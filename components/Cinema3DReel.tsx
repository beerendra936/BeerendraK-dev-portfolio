import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Film } from 'lucide-react';

const Cinema3DReel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Rotate the entire film strip as the user scrolls
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <section ref={containerRef} className="py-40 bg-brand-black overflow-hidden relative preserve-3d">
      <div className="container mx-auto px-6 text-center mb-24 relative z-10">
        <div className="inline-flex items-center gap-4 px-4 py-2 border border-brand-cyan/20 bg-brand-cyan/5 rounded-full mb-8">
           <Film size={16} className="text-brand-cyan animate-pulse" />
           <span className="font-mono text-[10px] text-brand-cyan tracking-widest uppercase">3D_NARRATIVE_STRIP</span>
        </div>
        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
          CINEMATIC<br/><span className="text-zinc-900">3D_REEL.</span>
        </h2>
      </div>

      <div className="reel-3d-container">
        <motion.div 
          style={{ rotateY }}
          className="film-strip"
        >
          {PROJECTS.map((project, index) => {
            const angle = (index / PROJECTS.length) * 360;
            const radius = 600; // Distance from center

            return (
              <div 
                key={project.id}
                className="film-frame group cursor-pointer"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`
                }}
              >
                <div className="relative w-full h-full overflow-hidden bg-black">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">{project.title}</h4>
                    <p className="text-[8px] text-zinc-500 font-mono uppercase truncate">{project.tags.join(' / ')}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Volumetric Center Light */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Cinema3DReel;