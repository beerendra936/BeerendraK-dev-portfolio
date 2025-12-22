import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Play, ArrowUpRight, ExternalLink } from 'lucide-react';
import VideoModal from './VideoModal';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Helper to determine if a link is a specific video or a channel/page
  const isVideoLink = (url: string) => {
    return url.includes('watch?v=') || url.includes('youtu.be/');
  };

  return (
    <section id="portfolio" className="py-32 relative bg-[#050a18]">
      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        videoUrl={selectedVideo || ''} 
      />

      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-slate-800 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-indigo-500"></span>
              <span className="font-mono text-indigo-400 text-sm tracking-widest uppercase">Select Sequence</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight">
              FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">PROJECTS</span>
            </h2>
          </div>
          <a href="https://youtube.com/@user-ee1et6gc9l?feature=shared" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors mt-4 md:mt-0 font-mono text-sm">
            [VIEW_FULL_ARCHIVE] 
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all duration-500 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="absolute top-6 right-6">
                    {isVideoLink(project.link) ? (
                      <button 
                        onClick={() => setSelectedVideo(project.link)}
                        className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300 hover:scale-110"
                        title="Watch Video"
                      >
                        <Play size={24} className="fill-white text-white ml-1" />
                      </button>
                    ) : (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300 hover:scale-110"
                        title="Visit Channel"
                      >
                        <ExternalLink size={24} className="text-white" />
                      </a>
                    )}
                </div>

                <div className="space-y-3">
                  <div className="flex gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                     {project.tags.map(tag => (
                       <span key={tag} className="px-2 py-1 bg-black/50 backdrop-blur-sm border border-white/10 rounded text-[10px] font-mono text-indigo-300 uppercase tracking-wide">
                         {tag}
                       </span>
                     ))}
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold text-white leading-tight">{project.title}</h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 h-0 group-hover:h-auto overflow-hidden">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Hover Grain Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
            </div>
          ))}
          
          {/* Decorative Filler Block */}
          <div className="hidden md:flex flex-col items-center justify-center p-8 rounded-3xl border border-slate-800 bg-slate-900/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-center relative z-10">
               <h4 className="font-display text-4xl font-bold text-slate-700 group-hover:text-indigo-500/50 transition-colors">YOUR<br/>PROJECT<br/>HERE</h4>
               <a href="#contact" className="mt-4 inline-block px-6 py-2 rounded-full border border-slate-700 text-slate-400 text-sm hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">
                 Start Collaborating
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;