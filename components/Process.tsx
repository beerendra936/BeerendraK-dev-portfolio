import React from 'react';
import { motion } from 'framer-motion';
import { Target, Box, Code2, Database, Workflow, PenTool } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      id: '01',
      tag: 'IDEATION',
      title: 'Narrative Framing',
      desc: 'Decoding client objectives to build an emotional blueprint that resonates with the target demographic.',
      icon: <PenTool size={16} />
    },
    {
      id: '02',
      tag: 'CURATION',
      title: 'Asset Ingestion',
      desc: 'Filtering raw data streams to find the "golden threads" that form a compelling storyline.',
      icon: <Database size={16} />
    },
    {
      id: '03',
      tag: 'POLISH',
      title: 'Aesthetic Mastering',
      desc: 'Cinema-grade color grading and AI-enhanced neural audio stabilization for high-end delivery.',
      icon: <Code2 size={16} />
    },
    {
      id: '04',
      tag: 'DEPLOY',
      title: 'Global Delivery',
      desc: 'Mastering for global OTT standards and localizing content for cross-platform impact.',
      icon: <Box size={16} />
    }
  ];

  return (
    <section id="process" className="py-40 bg-brand-dark px-6 lg:px-24 relative border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit">
            <div className="flex items-center gap-4 mb-8">
              <Workflow size={18} className="text-brand-primary" />
              <span className="font-mono text-brand-primary text-[10px] tracking-[1em] uppercase block">Creative Protocol</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-12">
              CREATIVE<br/><span className="text-zinc-800">EVOLUTION.</span>
            </h2>
            <div className="p-10 border-l border-brand-primary/40 bg-zinc-950/80">
               <p className="text-zinc-400 font-light text-2xl leading-relaxed italic">
                 "Creativity is the alchemy that turns raw footage into cultural resonance."
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
                className="group relative p-14 bg-zinc-900/20 border border-white/5 hover:border-brand-primary/40 transition-all flex flex-col sm:flex-row gap-12"
              >
                <div className="flex-shrink-0">
                  <span className="text-7xl font-black text-zinc-900 group-hover:text-brand-primary/10 transition-colors block leading-none italic">
                    {step.id}
                  </span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-4 border border-white/10 text-zinc-700 group-hover:text-brand-primary group-hover:border-brand-primary transition-all">
                      {step.icon}
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600 tracking-[0.5em] uppercase">{step.tag}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-zinc-500 text-xl font-light leading-relaxed group-hover:text-zinc-400 transition-colors">
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