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

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

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
    <section className="py-24 bg-[#02040a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-4">
             <Zap size={12} />
             <span>VISUAL ENHANCEMENT</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">GRADE</span> DIFFERENCE
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Drag the slider to see how I transform raw, flat LOG footage into broadcast-ready visuals through advanced color grading and cleanup.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div 
            ref={containerRef}
            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-900/20 select-none cursor-ew-resize group"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* Image 2 (After) - The Base */}
            <img 
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop" 
              alt="After Color Grade" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-indigo-400 border border-indigo-500/30 pointer-events-none">
              FINAL CUT
            </div>

            {/* Image 1 (Before) - The Overlay */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop" 
                alt="Before Raw Footage" 
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-[0.8] brightness-[0.9] pointer-events-none" 
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-slate-400 border border-white/10 pointer-events-none">
                RAW / LOG
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl text-indigo-900 hover:scale-110 transition-transform">
                <ChevronsLeftRight size={20} />
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
              <h4 className="text-white font-bold text-sm mb-1">Color Correction</h4>
              <p className="text-xs text-slate-500">Balancing exposure & white balance</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
               <h4 className="text-white font-bold text-sm mb-1">Look Development</h4>
               <p className="text-xs text-slate-500">Creating mood & atmosphere</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
               <h4 className="text-white font-bold text-sm mb-1">Noise Reduction</h4>
               <p className="text-xs text-slate-500">Cleaning up low-light artifacts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;