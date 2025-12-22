import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
// Added ArrowRight to imports to fix compilation error
import { Play, ArrowUpRight, ArrowRight } from 'lucide-react';

const HorizontalGallery: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section id="portfolio" ref={targetRef} className="relative h-[300vh] bg-brand-dark">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-24 left-24 z-20">
          <span className="font-mono text-brand-primary text-[10px] tracking-[1em] uppercase block mb-4">The Work Print</span>
          <h2 className="text-6xl md:text-8xl font-black text-white/5 uppercase tracking-tighter absolute top-0 left-0 -z-10 select-none">
            GALLERY
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-tighter">
            Selected Works.
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-24">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative h-[60vh] w-[80vw] md:w-[45vw] flex-shrink-0"
            >
              <div 
                data-cursor-label="PLAY"
                className="relative h-full w-full rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-brand-primary/30"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>
                
                {/* Overlay Metadata */}
                <div className="absolute top-8 left-8 flex flex-col gap-2">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    ID: 00{i + 1}_SRC
                  </span>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono text-brand-primary border border-brand-primary/20 px-3 py-1 rounded bg-brand-primary/5 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4 tracking-tighter group-hover:text-brand-primary transition-colors">{project.title}</h3>
                  <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-zinc-400 font-light text-sm max-w-xs">{project.description}</p>
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* End CTA */}
          <div className="h-[60vh] w-[30vw] flex-shrink-0 flex items-center justify-center">
             <div className="text-center group cursor-pointer">
                <div className="w-24 h-24 rounded-full border border-brand-primary/20 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500">
                   <ArrowRight className="text-brand-primary group-hover:text-black" size={32} />
                </div>
                <span className="font-bold text-white uppercase tracking-[0.3em] text-[10px]">Explore All Archives</span>
             </div>
          </div>
        </motion.div>

        {/* Playhead Timeline Bar */}
        <div className="absolute bottom-12 left-24 right-24 h-[1px] bg-white/5">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="h-full bg-brand-primary origin-left shadow-[0_0_15px_#00d4ff]"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;