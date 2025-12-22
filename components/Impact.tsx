import React from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, Users, Target, Globe, ArrowUpRight } from 'lucide-react';

const Impact: React.FC = () => {
  const analytics = [
    { icon: <Users size={16} />, val: '500M+', label: 'AUDIENCE_REACH', trend: '+18%', color: 'text-brand-primary' },
    { icon: <TrendingUp size={16} />, val: '₹24Cr', label: 'CAMPAIGN_YIELD', trend: 'STABLE', color: 'text-brand-accent' },
    { icon: <Globe size={16} />, val: '80+', label: 'GLOBAL_RELEASES', trend: 'ACTIVE', color: 'text-white' },
    { icon: <Activity size={16} />, val: '14.5K', label: 'MASTER_EXPORTS', trend: 'PEAK', color: 'text-zinc-500' },
  ];

  return (
    <section className="py-40 bg-brand-dark px-6 lg:px-24 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-12">
          <div className="max-w-xl">
            <span className="font-mono text-zinc-600 text-[10px] tracking-[1em] uppercase block mb-6">Creative Analytics Hub</span>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">THE IMPACT <span className="text-zinc-800">DATA.</span></h2>
          </div>
          <div className="font-mono text-[9px] text-zinc-800 uppercase tracking-widest hidden md:block text-right">
            CONTINUOUS_RECOVERY_MODE<br/>
            SENSORS: OPTIMIZED
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {analytics.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-16 bg-brand-dark group hover:bg-zinc-900/40 transition-all relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-16">
                <div className={`p-5 bg-zinc-950 border border-white/5 ${item.color} group-hover:border-brand-primary transition-all`}>
                  {item.icon}
                </div>
                <span className="font-mono text-[9px] text-zinc-600 group-hover:text-brand-primary transition-colors flex items-center gap-1">
                  {item.trend} <ArrowUpRight size={10} />
                </span>
              </div>
              
              <div className="space-y-4">
                <p className="text-7xl font-black text-white tracking-tighter group-hover:scale-[1.05] transition-transform origin-left">{item.val}</p>
                <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.5em]">{item.label}</p>
              </div>

              {/* Data Visualization Decor */}
              <div className="absolute bottom-0 left-0 w-full h-1 flex gap-1 opacity-10">
                 {Array.from({length: 12}).map((_, idx) => (
                    <div key={idx} className={`flex-1 h-full bg-zinc-800 transition-all duration-700 group-hover:bg-brand-primary`} 
                         style={{ transitionDelay: `${idx * 40}ms` }}></div>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;