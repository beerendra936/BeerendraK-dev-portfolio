import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Palette, Trophy, Activity, Target, Layers, BarChart3, Radio, Sparkles, CheckCircle2, AlertTriangle, Play, Info, Cpu, Scissors, Flame, ZapOff } from 'lucide-react';

// --- NEW ADDICTIVE GAME: RETENTION_STRIKE (Reflex Training v4.0) ---
const RetentionStrike = () => {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'result'>('idle');
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [combo, setCombo] = useState(0);
  const [targets, setTargets] = useState<{ id: number; x: number; type: 'hook' | 'viral' }[]>([]);
  const [feedback, setFeedback] = useState<{ text: string; color: string; id: number } | null>(null);
  const [speed, setSpeed] = useState(0.8);
  const [isGlitching, setIsGlitching] = useState(false);
  
  const requestRef = useRef<number>(null);
  const nextTargetId = useRef(0);
  const lastSpawnRef = useRef<number>(0);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setMultiplier(1);
    setCombo(0);
    setTargets([]);
    setSpeed(0.8);
    setFeedback(null);
  };

  const spawnTarget = useCallback(() => {
    const isViral = Math.random() > 0.9;
    const newTarget = { 
      id: nextTargetId.current++, 
      x: 110, // Start off-screen right
      type: isViral ? 'viral' as const : 'hook' as const 
    };
    setTargets(prev => [...prev, newTarget]);
  }, []);

  const update = useCallback((time: number) => {
    // Spawn logic
    if (time - lastSpawnRef.current > (1500 / (speed * 0.8))) {
      spawnTarget();
      lastSpawnRef.current = time;
    }

    setTargets(prev => {
      const updated = prev.map(t => ({ ...t, x: t.x - speed }));
      
      // Check for misses (target goes past 15% mark)
      if (updated.length > 0 && updated[0].x < 10) {
        setMultiplier(1);
        setCombo(0);
        setFeedback({ text: "STREAK_LOST", color: "text-brand-coral", id: Date.now() });
        return updated.slice(1);
      }
      return updated;
    });

    // Speed scaling
    setSpeed(prev => Math.min(prev + 0.0001, 2.5));

    requestRef.current = requestAnimationFrame(update);
  }, [speed, spawnTarget]);

  useEffect(() => {
    if (gameState === 'playing') {
      requestRef.current = requestAnimationFrame(update);
    }
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [gameState, update]);

  const handleStrike = () => {
    if (gameState !== 'playing') return;

    // The "Sweet Spot" is at 20% from the left
    const syncLineX = 20;
    const activeTargetIdx = targets.findIndex(t => t.x > syncLineX - 8 && t.x < syncLineX + 8);

    if (activeTargetIdx !== -1) {
      const target = targets[activeTargetIdx];
      const accuracy = Math.abs(target.x - syncLineX);
      
      let points = 0;
      let msg = "";
      let color = "";

      if (accuracy < 2) {
        points = 1000; msg = "FRAME_PERFECT"; color = "text-brand-mint";
        setMultiplier(m => Math.min(m + 0.5, 10));
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 100);
      } else if (accuracy < 5) {
        points = 500; msg = "CLEAN_CUT"; color = "text-brand-cyan";
        setMultiplier(m => Math.min(m + 0.2, 5));
      } else {
        points = 200; msg = "JUMP_CUT"; color = "text-zinc-500";
        setMultiplier(1);
      }

      setScore(s => s + Math.floor(points * multiplier));
      setCombo(c => c + 1);
      setFeedback({ text: msg, color, id: Date.now() });
      setTargets(prev => prev.filter(t => t.id !== target.id));
    } else {
      setMultiplier(1);
      setCombo(0);
      setFeedback({ text: "GHOST_CUT", color: "text-zinc-800", id: Date.now() });
    }
  };

  return (
    <div className={`flex-1 bg-zinc-950/90 border border-white/5 rounded-[4px] p-6 md:p-8 flex flex-col h-[550px] md:h-[650px] relative group overflow-hidden transition-all duration-300 ${isGlitching ? 'brightness-150 scale-[1.01]' : ''}`}>
      
      {/* Background Data Stream */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] flex items-center justify-center overflow-hidden">
         <div className="text-[180px] font-black italic select-none rotate-12">{multiplier.toFixed(0)}X</div>
      </div>

      <div className="flex justify-between items-start mb-6 md:mb-10 z-20">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-brand-cyan">
            <Zap size={14} className="animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em]">Retention_Strike // v4.0.1</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter">THE_NEURAL_SYNC</h3>
        </div>
        <div className="text-right">
          <div className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest mb-1">Viral_Coefficient</div>
          <div className={`text-3xl md:text-4xl font-black italic tracking-tighter transition-all ${multiplier > 5 ? 'text-brand-mint scale-110' : 'text-white'}`}>
             {score.toLocaleString()}
          </div>
        </div>
      </div>

      <div 
        onClick={handleStrike}
        className="flex-1 bg-black/40 border border-white/5 relative cursor-crosshair overflow-hidden group/game"
      >
        {/* Timeline HUD Decor */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
        
        {/* The Viral Sync Line (Razor Line) */}
        <div className="absolute left-[20%] top-0 bottom-0 w-[2px] bg-brand-cyan/30 z-10">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-brand-cyan rounded-full animate-ping" />
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-brand-cyan" />
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-brand-cyan" />
           <div className="absolute top-4 left-4 font-mono text-[6px] text-brand-cyan uppercase tracking-widest vertical-rl">SYNC_AXIS</div>
        </div>

        {/* Dynamic Waveform Background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end px-2 gap-[2px] opacity-10">
           {[...Array(60)].map((_, i) => (
             <motion.div 
                key={i}
                animate={{ height: [`${20 + Math.random() * 60}%`, `${10 + Math.random() * 40}%`] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="flex-1 bg-brand-cyan rounded-t-sm"
             />
           ))}
        </div>

        {/* Scrolling Targets */}
        {targets.map(target => (
          <div 
            key={target.id}
            className={`absolute top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center transition-opacity duration-300 ${target.x < 15 ? 'opacity-0' : 'opacity-100'}`}
            style={{ left: `${target.x}%` }}
          >
            <div className={`relative w-12 h-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] ${target.type === 'viral' ? 'bg-brand-mint shadow-brand-mint' : ''}`}>
               <div className="absolute -top-4 left-0 right-0 h-px bg-white/20" />
               <div className="absolute -bottom-4 left-0 right-0 h-px bg-white/20" />
               {target.type === 'viral' && <Flame size={12} className="absolute -top-8 left-1/2 -translate-x-1/2 text-brand-mint animate-bounce" />}
            </div>
          </div>
        ))}

        {/* Impact Visualizer */}
        <AnimatePresence mode="wait">
          {feedback && (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0, scale: 0.5, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 2 }}
              className={`absolute top-1/4 left-1/2 -translate-x-1/2 text-center pointer-events-none z-30`}
            >
               <div className={`font-black text-4xl italic tracking-tighter ${feedback.color}`}>
                  {feedback.text}
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Start Overlay */}
        {gameState === 'idle' && (
          <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center z-50 p-12 text-center">
            <div className="mb-10 text-brand-cyan animate-pulse">
               <Cpu size={80} strokeWidth={1} />
            </div>
            <h4 className="text-white font-black text-xl mb-4 uppercase tracking-[0.3em]">Neural Reflex Strike</h4>
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-10 leading-relaxed max-w-xs">
              Align the narrative hooks with the Viral Sync Line. Accelerate your reflexes to maintain high audience retention.
            </p>
            <button 
              onClick={(e) => { e.stopPropagation(); startGame(); }}
              className="group relative px-12 py-5 bg-white text-black font-black uppercase text-[11px] tracking-[0.6em] transition-all hover:bg-brand-cyan hover:shadow-[0_0_40px_rgba(0,212,255,0.4)]"
            >
              <div className="absolute inset-0 border border-white translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
              START_SESSION
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-between items-end z-20">
        <div className="flex flex-col">
          <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest mb-2">Combo_Streak</span>
          <div className="flex items-center gap-3">
             <div className="font-mono text-4xl text-white font-black tracking-tighter">{combo}</div>
             {combo > 10 && <Flame size={20} className="text-brand-coral animate-pulse" />}
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-3">
           <div className="flex gap-1.5">
             {[...Array(10)].map((_, i) => (
               <motion.div 
                 key={i}
                 animate={{ 
                    height: i < multiplier ? 16 : 4,
                    backgroundColor: i < multiplier ? (multiplier > 7 ? '#00ff88' : '#00d4ff') : '#18181b'
                 }}
                 className="w-2 rounded-full" 
               />
             ))}
           </div>
           <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-[0.2em]">Neural_Boost: {multiplier.toFixed(1)}x</span>
        </div>
      </div>
    </div>
  );
};

// --- GAME 2: THE_SWEET_SPOT (COLOR MASTERY) ---
const TheSweetSpot = () => {
  const [dialValue, setDialValue] = useState(0);
  const [targetValue, setTargetValue] = useState(74); 
  const [isLocked, setIsLocked] = useState(false);
  const [accuracy, setAccuracy] = useState(0);

  useEffect(() => {
    setTargetValue(Math.floor(Math.random() * 80) + 30);
  }, []);

  const handleDialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setDialValue(val);
    const diff = Math.abs(val - targetValue);
    const acc = Math.max(0, 100 - diff * 2.5);
    setAccuracy(acc);
    if (acc > 97) setIsLocked(true);
    else setIsLocked(false);
  };

  return (
    <div className={`flex-1 bg-zinc-950/90 border border-white/5 rounded-[4px] p-6 md:p-8 flex flex-col h-[550px] md:h-[650px] relative group overflow-hidden transition-all duration-300 ${isLocked ? 'border-brand-mint/20' : ''}`}>
      <div className="flex justify-between items-start mb-6 md:mb-10 z-20">
        <div>
          <div className="flex items-center gap-2 text-brand-coral mb-2">
            <Palette size={14} />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em]">Color_Grade_Mastery // v1.2</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter">THE_SWEET_SPOT</h3>
        </div>
        <div className="text-right">
          <div className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest mb-1">Exposure_Delta</div>
          <div className={`text-3xl md:text-4xl font-black italic tracking-tighter transition-all ${isLocked ? 'text-brand-mint scale-110' : 'text-brand-coral'}`}>
            {Math.floor(accuracy)}%
          </div>
        </div>
      </div>

      <div className="flex-1 relative border border-white/5 overflow-hidden flex flex-col rounded-sm bg-black">
        <div className="flex-1 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-300"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2671&auto=format&fit=crop")',
              filter: `brightness(${0.4 + (dialValue / 150)}) contrast(${0.6 + (dialValue / 100)}) saturate(${dialValue / 60})`,
              transform: isLocked ? 'scale(1.03)' : 'scale(1)'
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-40" />
          
          <AnimatePresence>
            {isLocked && (
              <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 border-[10px] border-brand-mint/10 flex flex-col items-center justify-center backdrop-blur-[2px]"
              >
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="px-8 md:px-10 py-4 md:py-5 bg-brand-mint text-black font-black uppercase tracking-[0.4em] md:tracking-[0.8em] text-[10px] md:text-[12px] shadow-[0_0_60px_rgba(0,255,136,0.3)]"
                  >
                      MATCH_IDENTIFIED
                  </motion.div>
                  <div className="mt-4 font-mono text-[7px] md:text-[8px] text-brand-mint uppercase tracking-[0.5em] md:tracking-[1em] opacity-60">Rec.709 Standard Achieved</div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute top-4 left-4 flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-coral animate-ping" />
             <span className="font-mono text-[8px] text-white/60 uppercase tracking-widest">Master_Output_Probe</span>
          </div>
        </div>

        <div className="h-48 md:h-56 bg-zinc-950 p-6 md:p-10 flex flex-col items-center justify-center gap-6 md:gap-8 border-t border-white/5">
            <div className="w-full flex justify-between font-mono text-[7px] md:text-[8px] text-zinc-700 uppercase tracking-[0.2em] md:tracking-[0.4em] px-2">
                <span>Shadows_Low</span>
                <span className="text-zinc-500 hidden sm:block">Perfect_Luma</span>
                <span>Highlights_Peak</span>
            </div>
            
            <div className="relative w-full group py-4">
                <input 
                    type="range" min="0" max="150" value={dialValue} 
                    onChange={handleDialChange}
                    className="w-full h-[2px] bg-zinc-900 appearance-none rounded-full cursor-pointer accent-brand-coral group-hover:bg-zinc-800 transition-all"
                />
                <div className="absolute top-1/2 left-0 right-0 flex justify-around pointer-events-none -translate-y-1/2 opacity-20">
                   {[...Array(10)].map((_, i) => <div key={i} className="w-px h-3 bg-white/20" />)}
                </div>
            </div>
            
            <div className="flex items-center gap-10 md:gap-16">
                <div className="text-center group">
                    <div className="text-[8px] md:text-[9px] font-mono text-zinc-700 uppercase mb-2 group-hover:text-zinc-500 transition-colors">Sensor</div>
                    <div className="text-2xl md:text-3xl font-black text-white italic tracking-tighter">{dialValue}</div>
                </div>
                <div className="w-[1px] h-10 md:h-12 bg-white/5" />
                <div className="text-center group">
                    <div className="text-[8px] md:text-[9px] font-mono text-zinc-700 uppercase mb-2 group-hover:text-zinc-500 transition-colors">Delta</div>
                    <div className={`text-2xl md:text-3xl font-black italic tracking-tighter ${isLocked ? 'text-brand-mint' : 'text-zinc-600'}`}>
                      {Math.abs(dialValue - targetValue)}
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="absolute -bottom-16 -right-16 p-32 opacity-[0.02] pointer-events-none text-brand-coral">
        <Target size={350} />
      </div>
    </div>
  );
};

// --- MAIN MASTER LAB SECTION ---
const MasteryLab: React.FC = () => {
  return (
    <section id="mastery-lab" className="py-24 md:py-48 bg-brand-black border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <Activity size={20} md:size={24} className="text-brand-cyan animate-pulse" />
              <div className="h-px w-8 md:w-12 bg-brand-cyan/20" />
              <span className="font-mono text-brand-cyan text-[10px] md:text-[12px] tracking-[1em] md:tracking-[1.5em] uppercase block">Interactive_Mastery_Lab</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 md:mb-10">
              THE <span className="text-brand-cyan italic">NEURAL</span> SUITE.
            </h2>
            <p className="text-zinc-500 font-light text-lg md:text-2xl max-w-xl leading-relaxed">
              Experience the pressure of high-performance editing. Calibrate your reflexes against the retention algorithm and find the cinematic "sweet spot."
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-4 md:gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 md:gap-6 px-8 md:px-10 py-4 md:py-6 bg-zinc-950 border border-white/10 rounded-sm shadow-2xl"
            >
                <Trophy size={18} md:size={20} className="text-brand-mint" />
                <div>
                   <div className="font-mono text-[9px] md:text-[10px] text-zinc-600 uppercase tracking-widest mb-1">Session_Rank</div>
                   <div className="font-mono text-[12px] md:text-[14px] text-white font-bold uppercase tracking-[0.2em]">Tier_1 // Lead</div>
                </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <RetentionStrike />
          <TheSweetSpot />
        </div>

        <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-t border-white/5 pt-16 md:pt-20">
            <div className="flex items-center gap-4 md:gap-6 group">
                <BarChart3 size={32} md:size={36} className="text-brand-cyan opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <div className="font-mono">
                    <div className="text-[10px] md:text-[11px] text-white uppercase tracking-widest mb-2">Neural_Reflex</div>
                    <p className="text-[8px] md:text-[9px] text-zinc-600 uppercase tracking-[0.2em] md:tracking-[0.3em] leading-relaxed">Testing the millisecond gap between visual stimulus and action.</p>
                </div>
            </div>
            <div className="flex items-center gap-4 md:gap-6 group">
                <Zap size={32} md:size={36} className="text-brand-mint opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <div className="font-mono">
                    <div className="text-[10px] md:text-[11px] text-white uppercase tracking-widest mb-2">Sync_Logic</div>
                    <p className="text-[8px] md:text-[9px] text-zinc-600 uppercase tracking-[0.2em] md:tracking-[0.3em] leading-relaxed">Maintaining narrative flow under increasing playback tempo.</p>
                </div>
            </div>
            <div className="flex items-center gap-4 md:gap-6 group">
                <Layers size={32} md:size={36} className="text-brand-coral opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <div className="font-mono">
                    <div className="text-[10px] md:text-[11px] text-white uppercase tracking-widest mb-2">Retention_Surge</div>
                    <p className="text-[8px] md:text-[9px] text-zinc-600 uppercase tracking-[0.2em] md:tracking-[0.3em] leading-relaxed">Building visual momentum through frame-perfect synchronization.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MasteryLab;