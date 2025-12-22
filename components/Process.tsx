import React from 'react';
import { Layers, Scissors, Wand2, Box } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Layers size={18} />,
      title: 'Architectural Sync',
      desc: 'High-speed ingestion, metadata tagging, and multi-cam synchronization.'
    },
    {
      icon: <Scissors size={18} />,
      title: 'Narrative Sculpting',
      desc: 'Defining the emotional beats and structural foundation of the cut.'
    },
    {
      icon: <Wand2 size={18} />,
      title: 'Post-Dynamics',
      desc: 'Color grading, high-fidelity sound design, and AI-driven cleanup.'
    },
    {
      icon: <Box size={18} />,
      title: 'Final Mastery',
      desc: 'Global localization and multi-platform optimization.'
    }
  ];

  return (
    <section className="py-40 bg-obsidian-950 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <span className="font-mono text-zinc-700 text-[10px] tracking-[0.8em] uppercase block mb-6">Proprietary Workflow</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
            The <span className="text-emerald-500">Neural</span> Protocol.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-obsidian-950 p-12 hover:bg-obsidian-900 transition-all group">
              <div className="text-zinc-700 group-hover:text-emerald-500 transition-colors mb-8">
                {step.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-white uppercase mb-4 tracking-tight">{step.title}</h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;