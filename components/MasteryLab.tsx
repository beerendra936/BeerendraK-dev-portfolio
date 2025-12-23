import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Palette, Trophy, Activity, Target, Layers, BarChart3, Radio, Sparkles, CheckCircle2, AlertTriangle, Play, Info, Cpu, Scissors, Flame, ZapOff, Music, Eye, Timer } from 'lucide-react';

// --- GAME 1: RETENTION_STRIKE (Reflex Training) ---
const RetentionStrike = () => {
  const [gameState, setGameState] = useState<'idle' | 'playing'>('idle');
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
    setSpeed(1.2);
    setFeedback(null);
  };

  const spawnTarget = useCallback(() => {
    const isViral = Math.random() > 0.92;
    const newTarget = { id: nextTargetId.current++, x: 110, type: isViral ? 'viral' as const : 'hook' as const };
    setTargets(prev => [...prev, newTarget]);
  }, []);

  const update = useCallback((time: number) => {
    if (time - lastSpawnRef.current > (1200 / (speed * 0.9))) {
      spawnTarget();
      lastSpawnRef.current = time;
    }
    setTargets(prev => {
      const updated = prev.map(t => ({ ...t, x: t.x - speed }));
      if (updated.length > 0 && updated[0].x < 5) {
        setMultiplier(1);
        setCombo(0);
        setFeedback({ text: "STREAK_LOST", color: "text-brand-coral", id: Date.now() });
        return updated.slice(1);
      }
      return updated;
    });
    setSpeed(prev => Math.min(prev + 0.0002, 3.5));
    requestRef.current = requestAnimationFrame(update);
  }, [speed, spawnTarget]);

  useEffect(() => {
    if (gameState === 'playing') requestRef.current = requestAnimationFrame(update);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [gameState, update]);

  const handleStrike = () => {
    if (gameState !== 'playing') return;
    const syncLineX = 20;
    const activeTargetIdx = targets.findIndex(t => t.x > syncLineX - 8 && t.x < syncLineX + 8);
    if (activeTargetIdx !== -1) {
      const target = targets[activeTargetIdx];
      const accuracy = Math.abs(target.x - syncLineX);
      let points = accuracy < 2 ? 1000 : accuracy < 5 ? 500 : 200;
      let msg = accuracy < 2 ? "FRAME_PERFECT" : accuracy < 5 ? "CLEAN_CUT" : "JUMP_CUT";
      let color = accuracy < 2 ? "text-brand-mint" : accuracy < 5 ? "text-brand-cyan" : "text-zinc-500";
      if (accuracy < 2) { setIsGlitching(true); setTimeout(() => setIsGlitching(false), 80); }
      setScore(s => s + Math.floor(points * multiplier));
      setCombo(c => c + 1);
      setMultiplier(m => Math.min(m + 0.1, 10));
      setFeedback({ text: msg, color, id: Date.now() });
      setTargets(prev => prev.filter(t => t.id !== target.id));
    } else {
      setMultiplier(1);
      setCombo(0);
      setFeedback({ text: "GHOST_CUT", color: "text-zinc-800", id: Date.now() });
    }
  };

  return (
    <div onClick={handleStrike} className={`flex-1 bg-zinc-950/90 border border-white/5 rounded-sm p-6 flex flex-col h-[500px] relative overflow-hidden transition-all ${isGlitching ? 'brightness-150' : ''}`}>
      <div className="flex justify-between items-start z-20">
        <div>
          <div className="flex items-center gap-2 text-brand-cyan mb-1">
            <Zap size={12} className="animate-pulse" />
            <span className="font-mono text-[8px] uppercase tracking-[0.3em]">Module_01 // Sync</span>
          </div>
          <h4 className="text-xl font-black text-white italic uppercase tracking-tighter">RETENTION_STRIKE</h4>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black italic text-white tracking-tighter">{score.toLocaleString()}</div>
          <div className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">Multiplier: {multiplier.toFixed(1)}x</div>
        </div>
      </div>
      <div className="flex-1 mt-6 relative border border-white/5 bg-black/40 overflow-hidden cursor-crosshair">
        <div className="absolute left-[20%] top-0 bottom-0 w-[1px] bg-brand-cyan/20 z-10" />
        <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 border border-brand-cyan/40 rounded-full animate-ping" />
        {targets.map(t => (
          <div key={t.id} className="absolute top-1/2 -translate-y-1/2 w-10 h-1 bg-white shadow-[0_0_15px_white]" style={{ left: `${t.x}%`, backgroundColor: t.type === 'viral' ? '#00ff88' : 'white' }} />
        ))}
        <AnimatePresence>
          {feedback && (
            <motion.div key={feedback.id} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.5 }} className={`absolute inset-0 flex items-center justify-center pointer-events-none z-30 font-black italic text-2xl ${feedback.color}`}>
              {feedback.text}
            </motion.div>
          )}
        </AnimatePresence>
        {gameState === 'idle' && (
          <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-8 text-center z-50">
            <Cpu size={40} className="text-brand-cyan mb-4 animate-pulse" />
            <button onClick={(e) => { e.stopPropagation(); startGame(); }} className="px-8 py-3 bg-white text-black font-black uppercase text-[10px] tracking-widest">INITIALIZE_SYNC</button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- GAME 2: THE_BEAT_HACKER (Rhythm Sync) ---
const BeatHacker = () => {
  const [gameState, setGameState] = useState<'idle' | 'playing'>('idle');
  const [score, setScore] = useState(0);
  const [beat, setBeat] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [feedback, setFeedback] = useState<{ text: string; color: string; id: number } | null>(null);
  const lastTimeRef = useRef(0);
  const speedRef = useRef(0.05);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setMultiplier(1);
    speedRef.current = 0.05;
  };

  const update = useCallback((time: number) => {
    setBeat(b => (b + speedRef.current) % Math.PI);
    speedRef.current += 0.00001;
    requestAnimationFrame(update);
  }, []);

  useEffect(() => {
    if (gameState === 'playing') requestAnimationFrame(update);
  }, [gameState, update]);

  const handleAction = () => {
    if (gameState !== 'playing') return;
    const currentPos = Math.sin(beat);
    const accuracy = 1 - Math.abs(currentPos - 1); 
    if (accuracy > 0.95) {
      setScore(s => s + Math.floor(1000 * multiplier));
      setMultiplier(m => Math.min(m + 0.5, 10));
      setFeedback({ text: "SYNCED", color: "text-brand-mint", id: Date.now() });
    } else {
      setMultiplier(1);
      setFeedback({ text: "DELAY", color: "text-brand-coral", id: Date.now() });
    }
  };

  return (
    <div onClick={handleAction} className="flex-1 bg-zinc-950/90 border border-white/5 rounded-sm p-6 flex flex-col h-[500px] relative overflow-hidden group">
      <div className="flex justify-between items-start z-20">
        <div>
          <div className="flex items-center gap-2 text-brand-mint mb-1">
            <Music size={12} className="animate-pulse" />
            <span className="font-mono text-[8px] uppercase tracking-[0.3em]">Module_02 // Rhythm</span>
          </div>
          <h4 className="text-xl font-black text-white italic uppercase tracking-tighter">BEAT_HACKER</h4>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black italic text-white tracking-tighter">{score.toLocaleString()}</div>
          <div className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">{multiplier.toFixed(1)}x BOOST</div>
        </div>
      </div>
      <div className="flex-1 mt-6 border border-white/5 bg-black/40 flex items-center justify-center relative overflow-hidden cursor-pointer">
        <svg className="w-full h-full opacity-20">
           <path d="M 0 150 Q 150 50 300 150 T 600 150" fill="none" stroke="#00ff88" strokeWidth="1" />
        </svg>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.2, repeat: Infinity }}
          className="absolute w-24 h-24 border-2 border-brand-mint/20 rounded-full"
        />
        <div 
          className="absolute w-4 h-4 bg-brand-mint shadow-[0_0_20px_#00ff88] rounded-full"
          style={{ transform: `scale(${1 + Math.sin(beat) * 2})` }}
        />
        <AnimatePresence>
          {feedback && (
            <motion.div key={feedback.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={`absolute top-1/4 font-mono text-[10px] font-bold uppercase tracking-widest ${feedback.color}`}>
              {feedback.text}
            </motion.div>
          )}
        </AnimatePresence>
        {gameState === 'idle' && (
          <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-8 text-center z-50">
            <Timer size={40} className="text-brand-mint mb-4 animate-pulse" />
            <button onClick={(e) => { e.stopPropagation(); startGame(); }} className="px-8 py-3 bg-brand-mint text-black font-black uppercase text-[10px] tracking-widest">ENGAGE_BEAT</button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- GAME 3: GRADE_SENSORY (Color Perception) ---
const GradeSensory = () => {
  const [gameState, setGameState] = useState<'idle' | 'playing'>('idle');
  const [grid, setGrid] = useState<{ color: string; isTarget: boolean }[]>([]);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  const generateGrid = useCallback(() => {
    const baseHue = Math.floor(Math.random() * 360);
    const baseSat = 60;
    const baseLum = 50;
    const diff = Math.max(2, 15 - level);
    const targetIdx = Math.floor(Math.random() * 16);
    const newGrid = Array(16).fill(null).map((_, i) => ({
      color: `hsla(${baseHue}, ${baseSat}%, ${i === targetIdx ? baseLum + diff : baseLum}%, 1)`,
      isTarget: i === targetIdx
    }));
    setGrid(newGrid);
  }, [level]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setLevel(1);
    setTimeLeft(10);
    generateGrid();
  };

  useEffect(() => {
    let timer: any;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setGameState('idle');
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const handlePick = (isTarget: boolean) => {
    if (!isTarget) { setTimeLeft(t => Math.max(0, t - 2)); return; }
    setScore(s => s + 500);
    setLevel(l => l + 1);
    setTimeLeft(t => Math.min(10, t + 1));
    generateGrid();
  };

  return (
    <div className="flex-1 bg-zinc-950/90 border border-white/5 rounded-sm p-6 flex flex-col h-[500px] relative overflow-hidden">
      <div className="flex justify-between items-start z-20">
        <div>
          <div className="flex items-center gap-2 text-brand-coral mb-1">
            <Eye size={12} className="animate-pulse" />
            <span className="font-mono text-[8px] uppercase tracking-[0.3em]">Module_03 // Luma</span>
          </div>
          <h4 className="text-xl font-black text-white italic uppercase tracking-tighter">GRADE_SENSORY</h4>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black italic text-white tracking-tighter">{score.toLocaleString()}</div>
          <div className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">Time: {timeLeft}s // Lvl: {level}</div>
        </div>
      </div>
      <div className="flex-1 mt-6 grid grid-cols-4 gap-2 border border-white/5 p-2 bg-black/40">
        {grid.map((cell, i) => (
          <div 
            key={i} 
            onClick={() => handlePick(cell.isTarget)}
            className="w-full h-full rounded-sm cursor-pointer hover:scale-95 transition-transform"
            style={{ backgroundColor: cell.color }}
          />
        ))}
        {gameState === 'idle' && (
          <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-8 text-center z-50">
            <Palette size={40} className="text-brand-coral mb-4 animate-pulse" />
            <p className="text-zinc-500 font-mono text-[8px] uppercase tracking-widest mb-6 leading-relaxed">Isolate the outlier clip. Mismatched Luma detected in the grid.</p>
            <button onClick={startGame} className="px-8 py-3 bg-brand-coral text-white font-black uppercase text-[10px] tracking-widest">SCAN_GAMUT</button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- MAIN SECTION ---
const MasteryLab: React.FC = () => {
  return (
    <section id="mastery-lab" className="py-24 md:py-48 bg-brand-black border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 md:gap-16 mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <Activity size={24} className="text-brand-cyan animate-pulse" />
              <div className="h-px w-12 bg-brand-cyan/20" />
              <span className="font-mono text-brand-cyan text-[12px] tracking-[1.5em] uppercase block">Neural_Mastery_Lab</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-10">
              THE <span className="text-brand-cyan italic">NEURAL</span> SUITE.
            </h2>
            <p className="text-zinc-500 font-light text-lg md:text-2xl max-w-xl leading-relaxed">
              Don't just watch the reel. Calibrate your sensory output. Experience the millisecond precision required for world-class cinematic engagement.
            </p>
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="flex items-center gap-6 px-10 py-6 bg-zinc-950 border border-white/10 rounded-sm shadow-2xl">
                <Trophy size={20} className="text-brand-mint" />
                <div>
                   <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-1">Session_Rank</div>
                   <div className="font-mono text-[14px] text-white font-bold uppercase tracking-[0.2em]">Tier_1 // Lead</div>
                </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <RetentionStrike />
          <BeatHacker />
          <GradeSensory />
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
            <div className="flex items-center gap-6 group">
                <BarChart3 size={36} className="text-brand-cyan opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <div className="font-mono">
                    <div className="text-[11px] text-white uppercase tracking-widest mb-2">Neural_Reflex</div>
                    <p className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] leading-relaxed">Testing the millisecond gap between visual stimulus and action.</p>
                </div>
            </div>
            <div className="flex items-center gap-6 group">
                <Zap size={36} className="text-brand-mint opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <div className="font-mono">
                    <div className="text-[11px] text-white uppercase tracking-widest mb-2">Sync_Logic</div>
                    <p className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] leading-relaxed">Maintaining narrative flow under increasing playback tempo.</p>
                </div>
            </div>
            <div className="flex items-center gap-6 group">
                <Layers size={36} className="text-brand-coral opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <div className="font-mono">
                    <div className="text-[11px] text-white uppercase tracking-widest mb-2">Retention_Surge</div>
                    <p className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] leading-relaxed">Building visual momentum through frame-perfect synchronization.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MasteryLab;