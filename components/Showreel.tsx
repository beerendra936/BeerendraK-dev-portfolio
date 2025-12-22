import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Maximize2, Volume2, ShieldCheck, Activity, Info } from 'lucide-react';
import VideoModal from './VideoModal';

const Showreel: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Using the high-performing YouTube link from constants for the reel
  const REEL_URL = "https://youtu.be/eWGMXR2WTKA"; 

  return (
    <section id="showreel" className="relative py-16 bg-brand-black overflow-hidden px-6 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Activity size={16} className="text-brand-cyan animate-pulse" />
              <span className="font-mono text-brand-cyan text-[10px] tracking-[0.8em] uppercase">Primary_Asset_Deployment</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
              THE <span className="text-zinc-800">SHOWREEL.</span>
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end font-mono text-[9px] text-zinc-600 uppercase tracking-widest gap-2">
            <div className="flex items-center gap-2">
               <ShieldCheck size={12} className="text-brand-mint" /> 
               COLOR_GRADED_DCI_P3
            </div>
            <div>VER: 14.2_MASTER_REC</div>
          </div>
        </div>

        <motion.div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setShowModal(true)}
          className="relative aspect-video w-full bg-zinc-900 rounded-sm overflow-hidden cursor-pointer group border border-white/5"
        >
          {/* Video Preview Image (Using a cinematic shot) */}
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2671&auto=format&fit=crop" 
            alt="Beerendra Showreel" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:blur-[2px] opacity-60"
          />

          {/* Technical HUD Overlays */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Corner Brackets */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-brand-cyan/40"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-brand-cyan/40"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-brand-cyan/40"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-brand-cyan/40"></div>
            
            {/* Center Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
              <div className="absolute top-1/2 left-0 w-full h-px bg-brand-cyan/20"></div>
              <div className="absolute left-1/2 top-0 w-px h-full bg-brand-cyan/20"></div>
            </div>

            {/* Scrolling Data Lines */}
            <div className="absolute top-12 left-24 font-mono text-[8px] text-brand-cyan/40 space-y-1">
              <div>BITRATE: 450Mbps</div>
              <div>ENCODER: HVEC_NVENC</div>
              <div>SPACE: REC.709_STABLE</div>
            </div>
          </div>

          {/* Play Interface Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-brand-cyan/10 transition-colors flex items-center justify-center">
            <motion.div 
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              className="relative"
            >
              {/* Spinning Ring */}
              <div className="absolute inset-0 border-2 border-dashed border-brand-cyan/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              
              <div className="w-24 h-24 bg-brand-cyan text-black rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,212,255,0.4)] transition-all">
                <Play size={32} fill="currentColor" />
              </div>
            </motion.div>
          </div>

          {/* Progress Bar Emulation */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/5">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-brand-cyan shadow-[0_0_15px_rgba(0,212,255,1)]"
            ></motion.div>
          </div>

          {/* Bottom Bar Info */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
             <div className="flex gap-6">
                <div className="flex items-center gap-2 text-white font-mono text-[10px] uppercase">
                  <Volume2 size={14} className="text-brand-cyan" /> AUDIO_MASTERED
                </div>
                <div className="flex items-center gap-2 text-white font-mono text-[10px] uppercase">
                  <Maximize2 size={14} className="text-brand-cyan" /> 4K_UHD_DCI
                </div>
             </div>
             <div className="text-brand-cyan font-mono text-[10px] uppercase font-bold tracking-widest">
                START_PLAYBACK
             </div>
          </div>
        </motion.div>

        {/* Footer info box */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-card/50 p-6 border border-white/5 rounded-sm flex gap-6 items-start">
            <div className="w-10 h-10 rounded-sm bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
              <Info size={18} />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Editor's Note</h4>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">
                This reel represents a synthesis of 14 years in post-production. Every frame is analyzed for audience retention, narrative arc, and color fidelity.
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-end gap-12 border-t border-white/5 md:border-t-0 pt-8 md:pt-0">
             <div className="text-right">
                <div className="text-brand-cyan text-2xl font-black italic tracking-tighter">500M+</div>
                <div className="text-zinc-600 font-mono text-[8px] uppercase tracking-widest">Visual Impact</div>
             </div>
             <div className="text-right">
                <div className="text-white text-2xl font-black italic tracking-tighter">14,500+</div>
                <div className="text-zinc-600 font-mono text-[8px] uppercase tracking-widest">Delivered Edits</div>
             </div>
          </div>
        </div>
      </div>

      <VideoModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        videoUrl={REEL_URL} 
      />
    </section>
  );
};

export default Showreel;