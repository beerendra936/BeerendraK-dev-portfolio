import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Heart, Globe, Zap, Scissors } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layers className="text-brand-primary" />,
      title: "OTT & Localization",
      desc: "Subtitling and mastering for 80+ global titles. Ensuring cultural resonance and precision timing.",
      size: "col-span-1 lg:col-span-8"
    },
    {
      icon: <Cpu className="text-brand-accent" />,
      title: "AI-Powered Post",
      desc: "4K upscaling, neural audio cleaning, and automated transcription workflows.",
      size: "col-span-1 lg:col-span-4"
    },
    {
      icon: <Zap className="text-brand-secondary" />,
      title: "Viral Retention",
      desc: "Repurposing long-form archives into high-impact Reels and Shorts that drive millions of views.",
      size: "col-span-1 lg:col-span-4"
    },
    {
      icon: <Globe className="text-white" />,
      title: "Political Campaigns",
      desc: "End-to-end visual strategy for state-wide campaigns reaching 20M+ voters with viral content.",
      size: "col-span-1 lg:col-span-8"
    }
  ];

  return (
    <section id="services" className="py-40 bg-brand-dark px-6 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="font-mono text-brand-primary text-[10px] tracking-[1em] uppercase block mb-6">Capabilities Archive</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              PRODUCTION<br/><span className="text-zinc-800">PIPELINES.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-sans text-lg leading-relaxed max-w-sm border-l border-brand-primary/30 pl-8 font-light italic">
            "We don't just cut frames; we architect the emotional frequency of your audience."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${service.size} bento-card glass-morphism p-10 md:p-14 rounded-[3rem] group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                <Scissors size={120} />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-12 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">{service.title}</h3>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">{service.desc}</p>
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