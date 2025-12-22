import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Play, ArrowUpRight } from 'lucide-react';
import VideoModal from './VideoModal';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-32 section-fade px-6 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div>
            <span className="font-mono text-brand-primary text-[10px] tracking-[0.8em] uppercase block mb-4">Case Library</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
              SELECTED <span className="text-zinc-800">WORKS.</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm font-light leading-relaxed border-l border-brand-primary/20 pl-8">
            Each cut is a strategic decision. View my narrative work across political, social, and entertainment sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div 
                className="relative aspect-video bg-brand-card rounded-2xl overflow-hidden cursor-pointer border border-white/5"
                onClick={() => setSelectedVideo(project.link)}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-brand-primary text-brand-dark flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono text-white/40 border border-white/10 px-2 py-1 rounded bg-black/40 backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors uppercase tracking-tight">{project.title}</h3>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-md">{project.description}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-zinc-600 group-hover:text-white group-hover:border-white/20 transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        videoUrl={selectedVideo || ''} 
      />
    </section>
  );
};

export default Portfolio;