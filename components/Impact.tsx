import React from 'react';
import { TrendingUp, Users, Wallet, Clapperboard, Activity, ArrowUpRight } from 'lucide-react';

const Impact: React.FC = () => {
  const stats = [
    {
      label: 'Volume Delivered',
      value: '14,500+',
      sub: 'Finalized Edits',
      icon: <Clapperboard className="text-indigo-400" size={24} />,
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
      trend: '+12% this month'
    },
    {
      label: 'Capital Raised',
      value: '₹24 Cr',
      sub: 'Social Impact',
      icon: <Wallet className="text-green-400" size={24} />,
      bg: 'bg-green-500/10',
      border: 'border-green-500/20',
      trend: 'Verified Data'
    },
    {
      label: 'Audience Scale',
      value: '500 M+',
      sub: 'Lifetime Views',
      icon: <Users className="text-blue-400" size={24} />,
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      trend: 'Viral Velocity'
    },
    {
      label: 'Market Presence',
      value: '14 Yrs',
      sub: 'Senior Authority',
      icon: <Activity className="text-purple-400" size={24} />,
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      trend: 'Top 1% Talent'
    }
  ];

  return (
    <section className="py-24 bg-[#030712] border-t border-slate-900 relative overflow-hidden">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px' 
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-12">
            <div>
                <h2 className="font-display text-3xl font-bold text-white">PERFORMANCE <span className="text-slate-500">METRICS</span></h2>
                <p className="font-mono text-xs text-indigo-400 mt-2">LIVE DATA // CAREER AGGREGATE</p>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-slate-400">SYSTEM NORMAL</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className={`relative group p-6 rounded-2xl bg-slate-900/40 border ${stat.border} hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1`}>
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 pointer-events-none"></div>

              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  {stat.icon}
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-black/20 px-2 py-1 rounded">
                   {stat.trend}
                   <ArrowUpRight size={10} />
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-4xl font-display font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                  {stat.value}
                </h3>
                <p className="font-medium text-slate-300 text-sm">{stat.label}</p>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider opacity-60">{stat.sub}</p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-20">
                  <svg viewBox="0 0 24 24" className="text-white fill-current"><path d="M22 22H2V20H20V2H22V22Z" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;