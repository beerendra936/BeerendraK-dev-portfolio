import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Award, Target, Zap, Scissors } from 'lucide-react';

const PrecisionGame: React.FC = () => {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'result'>('idle');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [timelinePos, setTimelinePos] = useState(0);
  const [targetPos, setTargetPos] = useState(70); // Percent
  const requestRef = useRef<number>(null);
  const lastTimeRef = useRef<number>(0);

  const maxAttempts = 5;

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setAttempts(0);
    setFeedback(null);
    setTargetPos(Math.random() * 60 + 20);
    startAnimation();
  };

  const animate = useCallback((time: number) => {
    if (lastTimeRef.current !== undefined) {
      setTimelinePos((prev) => (prev + 1.2) % 100);
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  const startAnimation = () => {
    requestRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
  };

  const handleAction = () => {
    if (gameState !== 'playing') return;

    const diff = Math.abs(timelinePos - targetPos);
    let points = 0;
    let msg = "";

    if (diff < 1.5) {
      points = 1000;
      msg = "FRAME PERFECT";
    } else if (diff < 4) {
      points = 500;
      msg = "CLEAN CUT";
    } else if (diff < 8) {
      points = 100;
      msg = "SLIGHT JUMP";
    } else {
      points = 0;
      msg = "MISSED BEAT";
    }

    setScore((s) => s + points);
    setFeedback(msg);
    setAttempts((a) => a + 1);

    // Flash the screen
    const gameContainer = document.getElementById('game-viewport');
    if (gameContainer) {
      gameContainer.classList.add('brightness-150');
      setTimeout(() => gameContainer.classList.remove('brightness-150'), 100);
    }

    if (attempts + 1 >= maxAttempts) {
      stopAnimation();
      setGameState('result');
    } else {
      setTargetPos(Math.random() * 60 + 20);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (gameState === 'idle') startGame();
        else handleAction();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      stopAnimation();
    };
  }, [gameState, attempts, timelinePos, targetPos]);

  const getRank = () => {
    const avg = score / maxAttempts;
    if (avg >= 800) return "MASTER EDITOR";
    if (avg >= 500) return "SENIOR CUTTER";
    if (avg >= 200) return "ASSISTANT";
    return "APPRENTICE";
  };

  return (
    <section className="py-24 bg-brand-black border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-mono tracking-widest uppercase mb-4">
            <Zap size={12} fill="currentColor" />
            <span>Neuro-Reflex Test</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            THE <span className="text-brand-cyan italic">PERFECT</span> CUT.
          </h2>
          <p className="text-zinc-500 mt-4 font-mono text-xs uppercase tracking-widest">
            Hit [SPACE] or CLICK at the exact frame to achieve narrative flow.
          </p>
        </div>

        <div 
          id="game-viewport"
          onClick={handleAction}
          className="relative h-64 md:h-80 bg-zinc-950 border border-white/10 rounded-sm overflow-hidden flex flex-col transition-all duration-75 cursor-crosshair"
        >
          {/* HUD Grids */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {gameState === 'idle' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-50"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => { e.stopPropagation(); startGame(); }}
                  className="px-10 py-4 bg-brand-cyan text-black font-black uppercase text-[12px] tracking-[0.4em] flex items-center gap-3"
                >
                  <Play size={16} fill="currentColor" />
                  INITIATE_CHALLENGE
                </motion.button>
              </motion.div>
            )}

            {gameState === 'result' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-brand-black/90 backdrop-blur-xl z-50 p-8 text-center"
              >
                <Award size={48} className="text-brand-cyan mb-4" />
                <h3 className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-2">Final Evaluation</h3>
                <div className="text-5xl md:text-6xl font-black text-white mb-2 uppercase tracking-tighter italic">{getRank()}</div>
                <div className="text-brand-cyan font-mono text-xl mb-8 tracking-widest">SCORE: {score}</div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); startGame(); }}
                  className="flex items-center gap-3 text-white font-mono text-[10px] uppercase tracking-[0.3em] border border-white/10 px-8 py-3 hover:bg-white hover:text-black transition-all"
                >
                  <RotateCcw size={14} /> RECALIBRATE_SYSTEM
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Game UI */}
          <div className="flex-1 relative flex items-center justify-center">
            {/* Target Zone */}
            <div 
              className="absolute h-32 w-2 bg-brand-cyan/20 blur-[2px] transition-all duration-300"
              style={{ left: `${targetPos}%` }}
            >
              <div className="absolute inset-0 border-x border-brand-cyan shadow-[0_0_15px_rgba(0,212,255,0.5)]" />
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2">
                <Target size={14} className="text-brand-cyan opacity-50" />
              </div>
            </div>

            {/* Moving Playhead */}
            <div 
              className="absolute h-full w-[2px] bg-white z-20 shadow-[0_0_20px_white]"
              style={{ left: `${timelinePos}%` }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 -translate-y-1/2" />
            </div>

            {/* Feedback Text */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <AnimatePresence mode="wait">
                {feedback && (
                  <motion.div
                    key={feedback}
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    className={`font-black text-2xl md:text-3xl italic tracking-tighter ${
                      feedback === 'FRAME PERFECT' ? 'text-brand-mint' : 
                      feedback === 'CLEAN CUT' ? 'text-brand-cyan' : 
                      'text-brand-coral'
                    }`}
                  >
                    {feedback}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Stats Overlay */}
            <div className="absolute top-4 left-6 flex gap-8">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[8px] text-zinc-600 uppercase">Sync_Accuracy</span>
                <span className="font-mono text-[10px] text-brand-cyan">{score} PTS</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[8px] text-zinc-600 uppercase">Buffer_Attempts</span>
                <span className="font-mono text-[10px] text-white">{attempts} / {maxAttempts}</span>
              </div>
            </div>
          </div>

          {/* Timeline Waveform Decoration */}
          <div className="h-16 bg-black/40 border-t border-white/5 relative flex items-center px-2 gap-[1px]">
            {[...Array(100)].map((_, i) => {
              const h = Math.random() * 80 + 10;
              const isTarget = Math.abs(i - targetPos) < 2;
              return (
                <div 
                  key={i} 
                  className={`flex-1 transition-all duration-500 ${isTarget ? 'bg-brand-cyan/60 h-[80%]' : 'bg-zinc-800 h-[30%]'}`} 
                  style={{ height: `${isTarget ? 80 : h}%` }}
                />
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8">
          <div className="flex gap-8">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-mint rounded-full" />
                <span className="font-mono text-[9px] text-zinc-500 uppercase">±1 Frame: 1000pts</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-cyan rounded-full" />
                <span className="font-mono text-[9px] text-zinc-500 uppercase">±3 Frames: 500pts</span>
             </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 rounded-sm">
             <Scissors size={12} className="text-zinc-600" />
             <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">Simulating Live Broadcast Latency</span>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none">
        <Target size={400} />
      </div>
    </section>
  );
};

export default PrecisionGame;