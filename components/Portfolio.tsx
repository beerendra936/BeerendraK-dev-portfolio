import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Play, Youtube, Monitor, Clock, ShieldCheck } from 'lucide-react';
import VideoModal from './VideoModal';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-40 bg-brand-black px-6 lg:px-24 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 flex items-end justify-between border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-brand-cyan text-[10px] tracking-[1em] uppercase block mb-6">Master Output Bin</span>
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
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="group relative"
            >
              {/* Card Container */}
              <div 
                className="relative aspect-video bg-brand-card rounded-[4px] overflow-hidden cursor-pointer transition-all duration-500 ease-bouncy 
                           group-hover:-translate-y-3 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_20px_rgba(0,212,255,0.2)] 
                           group-hover:border-2 group-hover:border-brand-cyan"
                onClick={() => setSelectedVideo(project.link)}
              >
                {/* Image */}
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:blur-[2px] group-hover:scale-105"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-brand-black/30 pointer-events-none"></div>

                {/* Metadata Badges (Top Left) */}
                <div className="absolute top-4 left-4 flex gap-2 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span className="flex items-center gap-2 px-3 py-1.5 bg-brand-black/90 backdrop-blur-md rounded-[2px] border border-white/5 font-mono text-[9px] text-white uppercase tracking-widest">
                    <Youtube size={12} className="text-brand-coral" /> YT
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1.5 bg-brand-black/90 backdrop-blur-md rounded-[2px] border border-white/5 font-mono text-[9px] text-white uppercase tracking-widest">
                    <Monitor size={12} className="text-brand-cyan" /> 4K_RAW
                  </span>
                </div>

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white text-brand-black flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-[360deg] transition-all duration-700">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>

                {/* Bottom Content Container */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">{project.title}</h3>
                  
                  {/* Animated Tags - Fade in on card hover, scale up on individual tag hover */}
                  <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tag} 
                        className="px-2 py-0.5 border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-[8px] font-mono uppercase tracking-widest hover:scale-110 hover:bg-brand-cyan hover:text-black hover:border-brand-cyan transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Verification Status */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-zinc-500 font-mono text-[9px] uppercase tracking-widest">
                       <Clock size={12} className="text-brand-mint" /> 
                       <span>PROJECT_VERIFIED</span>
                    </div>
                    <div className="text-[8px] font-mono text-zinc-700 uppercase">
                       UID: {idx.toString().padStart(3, '0')}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {selectedVideo && (
        <VideoModal 
          isOpen={true} 
          onClose={() => setSelectedVideo(null)} 
          videoUrl={selectedVideo} 
        />
      )}
    </section>
  );
};

export default Portfolio;