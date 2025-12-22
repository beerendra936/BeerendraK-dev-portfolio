import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight, Zap } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;
    if ('touches' in event) { clientX = event.touches[0].clientX; } else { clientX = (event as React.MouseEvent).clientX; }
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('mousemove', handleMove as any);
      window.addEventListener('touchmove', handleMove as any);
    } else {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('mousemove', handleMove as any);
      window.removeEventListener('touchmove', handleMove as any);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('mousemove', handleMove as any);
      window.removeEventListener('touchmove', handleMove as any);
    };
  }, [isDragging]);

  return (
    <section className="py-16 bg-brand-dark relative overflow-hidden px-6 lg:px-24 preserve-3d">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-mono tracking-widest uppercase mb-6">
             <Zap size={12} fill="currentColor" />
             <span>The Craft of Enhancement</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Color <span className="text-zinc-800">Mastery.</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto font-light text-lg">
            Drag to see the translation from raw log footage to broadcast-ready narratives.
          </p>
        </div>

        <div className="max-w-6xl mx-auto preserve-3d">
          <div 
            ref={containerRef}
            className="relative w-full aspect-video rounded-sm overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,1)] select-none cursor-ew-resize group preserve-3d"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            style={{ transform: 'rotateX(2deg) rotateY(-2deg)' }}
          >
            <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop" alt="Final Grade" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            <div className="absolute top-6 right-6 bg-brand-black/80 backdrop-blur-md px-4 py-1.5 rounded-sm text-[10px] font-bold text-brand-cyan border border-brand-cyan/20 pointer-events-none uppercase tracking-widest">Final Grade</div>
            <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}>
              <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop" alt="Raw Footage" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-[0.8] brightness-[0.9] pointer-events-none" />
              <div className="absolute top-6 left-6 bg-brand-black/80 backdrop-blur-md px-4 py-1.5 rounded-sm text-[10px] font-bold text-zinc-500 border border-white/10 pointer-events-none uppercase tracking-widest">Raw / Log</div>
            </div>
            <div className="absolute top-0 bottom-0 w-[2px] bg-brand-cyan cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,212,255,0.8)]" style={{ left: `${sliderPosition}%` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-cyan rounded-full flex items-center justify-center shadow-2xl text-black hover:scale-110 transition-transform"><ChevronsLeftRight size={24} /></div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 border border-white/5">
            {[ { label: 'Color Correction', sub: 'Balanced Exposure' }, { label: 'Look Dev', sub: 'Cinematic Atmosphere' }, { label: 'Cleanup', sub: 'Noise Reduction' } ].map(item => (
              <div key={item.label} className="bg-brand-black p-8 text-center group">
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2 group-hover:text-brand-cyan transition-colors">{item.label}</h4>
                <p className="text-[10px] text-zinc-600 font-mono uppercase">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;