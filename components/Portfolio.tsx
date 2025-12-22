import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Play, ArrowUpRight, ExternalLink } from 'lucide-react';
import VideoModal from './VideoModal';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-32 px-6 lg:px-24 bg-brand-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20">
          <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">Selected Works</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Recent Projects</h2>
          <div className="w-20 h-1 bg-brand-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col gap-6"
            >
              {/* Thumbnail Container */}
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden bg-brand-card border border-zinc-800 cursor-pointer"
                onClick={() => setSelectedVideo(project.link)}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/10 transition-colors"></div>
                
                {/* Overlay Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <Play size={24} fill="white" />
                  </div>
                </div>

                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-brand-dark/80 backdrop-blur-md text-[9px] text-white rounded font-mono uppercase tracking-wider border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info Container */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-sm text-zinc-500 line-clamp-2 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-20 text-center">
          <button className="group px-10 py-4 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-brand-primary transition-all flex items-center gap-3 mx-auto">
            View All Productions <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
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