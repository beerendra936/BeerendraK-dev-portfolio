import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Globe, Zap, Scissors, Workflow } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layers className="text-brand-primary" />,
      title: "OTT & Localization",
      desc: "Subtitling and mastering for 80+ global titles. Precision timing and cultural resonance.",
      size: "lg:col-span-8"
    },
    {
      icon: <Cpu className="text-brand-accent" />,
      title: "AI Workflows",
      desc: "Neural audio cleaning and 4K upscaling pipelines.",
      size: "lg:col-span-4"
    },
    {
      icon: <Zap className="text-brand-secondary" />,
      title: "Viral Strategy",
      desc: "Long-form repurposing for high-retention social impact.",
      size: "lg:col-span-4"
    },
    {
      icon: <Globe className="text-white" />,
      title: "Political Narrative",
      desc: "Visual strategy for campaigns reaching 20M+ voters.",
      size: "lg:col-span-8"
    }
  ];

  return (
    <section id="services" className="section-gap bg-brand-dark px-6 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Workflow size={16} className="text-brand-accent" />
              <span className="font-mono text-brand-accent text-[10px] tracking-[1em] uppercase block">Operations Matrix</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] uppercase">
              PRODUCTION<br/><span className="text-zinc-800">CAPABILITIES.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`${service.size} interactive glass-studio p-12 md:p-16 rounded-[4rem] group relative overflow-hidden`}
            >
              <div className="absolute -top-20 -right-20 p-8 opacity-[0.02] group-hover:opacity-10 transition-all duration-700">
                <Scissors size={300} />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-16 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest">{service.title}</h3>
                  <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-md group-hover:text-zinc-300 transition-colors">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;