import React, { useState, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Play, Youtube, Monitor, Clock, ShieldCheck } from 'lucide-react';
import VideoModal from './VideoModal';

const PortfolioCard: React.FC<{ project: any, idx: number, onClick: () => void }> = ({ project, idx, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = (x / rect.width) - 0.5;
    const yPct = (y / rect.height) - 0.5;
    rotateX.set(yPct * -15);
    rotateY.set(xPct * 15);
    setMouseX(x);
    setMouseY(y);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: idx * 0.15, duration: 0.8 }}
      className="group relative preserve-3d h-full cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={onClick}
    >
      <motion.div 
        style={{ rotateX, rotateY, translateZ: 20 }}
        className="relative aspect-video bg-brand-card rounded-[4px] overflow-hidden transition-all duration-300 group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.9),0_0_30px_rgba(0,212,255,0.1)] border border-white/5 group-hover:border-brand-cyan/40 preserve-3d"
      >
        <div className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 glare-effect" style={{ '--x': `${mouseX}px`, '--y': `${mouseY}px` } as any}></div>
        <div className="absolute inset-0 z-0">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:blur-[1px] group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10"></div>
        <div className="absolute inset-0 bg-brand-black/30 pointer-events-none z-10"></div>
        <motion.div style={{ translateZ: 40 }} className="absolute top-5 left-5 flex gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 z-20">
          <span className="flex items-center gap-2 px-3 py-1.5 bg-brand-black/90 backdrop-blur-md rounded-[2px] border border-white/10 font-mono text-[9px] text-white uppercase tracking-widest"><Youtube size={12} className="text-brand-coral" /> YT</span>
          <span className="flex items-center gap-2 px-3 py-1.5 bg-brand-black/90 backdrop-blur-md rounded-[2px] border border-white/10 font-mono text-[9px] text-white uppercase tracking-widest"><Monitor size={12} className="text-brand-cyan" /> 4K_RAW</span>
        </motion.div>
        <motion.div style={{ translateZ: 60 }} className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
          <div className="w-16 h-16 rounded-full bg-white text-brand-black flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-[360deg] transition-all duration-700 shadow-[0_0_40px_rgba(255,255,255,0.4)]"><Play size={24} fill="currentColor" /></div>
        </motion.div>
        <motion.div style={{ translateZ: 30 }} className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 z-20">
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            {project.tags.map((tag: string) => (<span key={tag} className="px-2 py-0.5 border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-[8px] font-mono uppercase tracking-widest hover:bg-brand-cyan hover:text-black transition-all cursor-default">{tag}</span>))}
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-[9px] uppercase tracking-widest"><Clock size={12} className="text-brand-mint" /> <span>PROJECT_VERIFIED</span></div>
            <div className="text-[8px] font-mono text-zinc-700 uppercase">UID: {idx.toString().padStart(3, '0')}</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-16 bg-brand-black px-6 lg:px-24 relative overflow-hidden preserve-3d">
      {/* Localized Section 3D Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 border-t border-r border-brand-cyan/40 pointer-events-none -translate-x-12 translate-y-12"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-24 flex items-end justify-between border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-brand-cyan text-[10px] tracking-[1.2em] uppercase block mb-6">Master Output Bin</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              SELECTED<br/><span className="text-zinc-800">ARCHIVES.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-4 font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
            <ShieldCheck size={14} className="text-brand-mint" />
            BROADCAST_READY_STANDARDS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <PortfolioCard key={project.id} project={project} idx={idx} onClick={() => setSelectedVideo(project.link)} />
          ))}
        </div>
      </div>
      
      {selectedVideo && (
        <VideoModal isOpen={true} onClose={() => setSelectedVideo(null)} videoUrl={selectedVideo} />
      )}
    </section>
  );
};

export default Portfolio;