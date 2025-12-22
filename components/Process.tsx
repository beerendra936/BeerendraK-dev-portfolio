import React from 'react';
import { motion } from 'framer-motion';
import { Target, Box, Code2, Database, Workflow } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      id: '01',
      tag: 'RESEARCH',
      title: 'Audience Logic',
      desc: 'Analyzing viewer sentiment to identify retention hooks and emotional anchors for the narrative.',
      icon: <Target size={16} />
    },
    {
      id: '02',
      tag: 'ASSETS',
      title: 'Structural Sync',
      desc: 'Ingesting massive raw data pools into optimized high-speed editing arrays for zero-friction cycles.',
      icon: <Database size={16} />
    },
    {
      id: '03',
      tag: 'POLISH',
      title: 'Neural Mastering',
      desc: 'Leveraging AI-enhanced color science and acoustic refinement to deliver cinema-grade clarity.',
      icon: <Code2 size={16} />
    },
    {
      id: '04',
      tag: 'DEPLOY',
      title: 'Global Export',
      desc: 'Multilingual localization and OTT-spec delivery for cross-platform distribution at scale.',
      icon: <Box size={16} />
    }
  ];

  return (
    <section id="process" className="py-24 md:py-40 bg-brand-dark px-6 lg:px-24 relative border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit">
            <div className="flex items-center gap-4 mb-8">
              <Workflow size={18} className="text-brand-primary" />
              <span className="font-mono text-brand-primary text-[10px] tracking-[1em] uppercase block">Operational Protocol</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[1] mb-12">
              WORKFLOW<br/><span className="text-zinc-800">MATRIX.</span>
            </h2>
            <div className="p-8 md:p-10 border-l border-brand-primary/40 bg-zinc-950/80">
               <p className="text-zinc-500 font-light text-xl md:text-2xl leading-relaxed italic">
                 "Narratives are not just edited; they are engineered through calculated storytelling logic."
               </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 md:p-14 bg-zinc-900/20 border border-white/5 hover:border-brand-primary/50 transition-all flex flex-col sm:flex-row gap-8 md:gap-12"
              >
                <div className="flex-shrink-0">
                  <span className="text-5xl md:text-7xl font-black text-zinc-900 group-hover:text-brand-primary/20 transition-colors block leading-none italic">
                    {step.id}
                  </span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-5 mb-4 md:mb-6">
                    <div className="p-3 md:p-4 border border-white/10 text-zinc-700 group-hover:text-brand-primary group-hover:border-brand-primary transition-all">
                      {step.icon}
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600 tracking-[0.5em] uppercase">{step.tag}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;