import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Play, ArrowUpRight, Monitor, Database, Settings } from 'lucide-react';
import VideoModal from './VideoModal';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-40 bg-brand-dark px-6 lg:px-24 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="font-mono text-zinc-500 text-[10px] tracking-[1em] uppercase block mb-6">Output Archive v4.0</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[1] lg:leading-[0.9]">
              SELECTED<br/><span className="text-zinc-800">WORKS.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
             <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 border border-white/10 font-mono text-[9px] text-zinc-500 uppercase">Total_Archives: 14,500</span>
                <span className="px-4 py-2 border border-brand-primary/20 font-mono text-[9px] text-brand-primary uppercase">Status: Live_Reel</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              <div 
                className="interactive relative aspect-video bg-zinc-900 overflow-hidden cursor-pointer border border-white/5"
                onClick={() => setSelectedVideo(project.link)}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                />
                
                {/* HUD Overlay */}
                <div className="absolute inset-0 border-[10px] md:border-[20px] border-transparent group-hover:border-black/20 transition-all pointer-events-none"></div>
                <div className="absolute top-4 left-4 md:top-6 md:left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-black/60 backdrop-blur-md border border-white/10 p-2 md:p-3 flex gap-4">
                      <div className="flex flex-col">
                         <span className="font-mono text-[7px] text-zinc-500">FORMAT</span>
                         <span className="font-mono text-[9px] text-white">4K_ULTRA_HD</span>
                      </div>
                      <div className="w-[1px] h-full bg-white/10"></div>
                      <div className="flex flex-col">
                         <span className="font-mono text-[7px] text-zinc-500">FPS</span>
                         <span className="font-mono text-[9px] text-white">23.976</span>
                      </div>
                   </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 opacity-40">
                   <Settings size={14} className="animate-spin-slow" />
                </div>
              </div>

              <div className="mt-8 md:mt-12 flex justify-between items-start">
                <div className="max-w-md">
                  <div className="flex gap-2 mb-4 md:mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono text-zinc-500 border border-white/5 px-2 md:px-3 py-1 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter group-hover:text-brand-primary transition-colors">{project.title}</h3>
                  <p className="text-zinc-500 text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8">{project.description}</p>
                  
                  <button className="flex items-center gap-3 text-brand-primary font-mono text-[10px] tracking-[0.3em] uppercase font-black group-hover:gap-6 transition-all">
                    DECRYPT_FILE <ArrowUpRight size={14} />
                  </button>
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