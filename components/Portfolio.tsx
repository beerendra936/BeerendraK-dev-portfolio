import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Play, ExternalLink } from 'lucide-react';
import VideoModal from './VideoModal';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-32 px-6 lg:px-24 bg-brand-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-h2 font-bold text-white mb-2">Selected Works</h2>
          <div className="w-12 h-1 bg-brand-secondary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-brand-card rounded-2xl overflow-hidden border border-zinc-800 hover:border-brand-primary/50 transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => setSelectedVideo(project.link)}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-brand-secondary/90 flex items-center justify-center text-white shadow-xl scale-90 group-hover:scale-100 transition-transform">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-body font-bold text-white group-hover:text-brand-primary transition-colors">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-small text-zinc-500 mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-zinc-900 text-zinc-400 rounded">
                      {tag}
                    </span>
                  ))}
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