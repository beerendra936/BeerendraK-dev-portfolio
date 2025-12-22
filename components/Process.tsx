import React from 'react';
import { Layers, Scissors, Wand2, Box } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Layers size={14} />,
      title: 'Architectural Sync',
      desc: 'Ingestion, metadata tagging, and high-speed multi-cam synchronization.'
    },
    {
      icon: <Scissors size={14} />,
      title: 'Narrative Sculpting',
      desc: 'Structural foundation through rigorous footage mining and story beats.'
    },
    {
      icon: <Wand2 size={14} />,
      title: 'Post Dynamics',
      desc: 'Look development, high-fidelity sound, and advanced digital cleanup.'
    },
    {
      icon: <Box size={14} />,
      title: 'Global Delivery',
      desc: 'Multi-platform optimization and international localization mastering.'
    }
  ];

  return (
    <section className="py-40 bg-obsidian-950 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <span className="font-mono text-zinc-700 text-[9px] tracking-[1em] uppercase block mb-6">The Neural Protocol</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
            Operational <span className="text-zinc-800">Precision.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border border-white/5 bg-white/5 gap-px">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-obsidian-950 p-12 hover:bg-obsidian-900 transition-all group flex flex-col justify-between h-full">
              <div className="text-zinc-700 group-hover:text-emerald-500 transition-colors mb-12">
                {step.icon}
              </div>
              <div>
                <h3 className="text-sm font-display font-bold text-white uppercase mb-4 tracking-widest">{step.title}</h3>
                <p className="text-[13px] text-zinc-500 font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;