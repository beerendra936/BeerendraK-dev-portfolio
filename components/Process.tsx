import React from 'react';
import { FileVideo, Scissors, Wand2, UploadCloud } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <FileVideo size={24} />,
      title: 'Ingest & Sync',
      desc: 'Organizing raw footage, proxy generation for speed, and audio synchronization.'
    },
    {
      icon: <Scissors size={24} />,
      title: 'Offline Edit',
      desc: 'Structuring the narrative, pacing the cuts, and building the emotional arc.'
    },
    {
      icon: <Wand2 size={24} />,
      title: 'Online & VFX',
      desc: 'Color grading, sound design, motion graphics, and AI-enhanced cleanup.'
    },
    {
      icon: <UploadCloud size={24} />,
      title: 'Delivery',
      desc: 'Exporting in multi-format (4K, Reel, web) optimized for specific platforms.'
    }
  ];

  return (
    <section className="py-20 border-t border-slate-900 bg-[#030712]">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
           <div className="h-px bg-slate-800 flex-1"></div>
           <span className="font-mono text-slate-500 text-xs tracking-widest uppercase">My Workflow</span>
           <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="mb-6 relative">
                 <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-indigo-500 group-hover:text-white group-hover:bg-indigo-600 transition-all duration-300 relative z-10">
                   {step.icon}
                 </div>
                 {/* Connector Line */}
                 {idx !== steps.length - 1 && (
                   <div className="hidden md:block absolute top-6 left-12 w-full h-px bg-slate-800 group-hover:bg-indigo-900/50 transition-colors"></div>
                 )}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;