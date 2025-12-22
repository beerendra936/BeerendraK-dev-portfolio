import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Box, Code2, Database, Workflow, PenTool, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Process: React.FC = () => {
  const [analysisInput, setAnalysisInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const steps = [
    {
      id: '01',
      tag: 'IDEATION',
      title: 'Narrative Framing',
      desc: 'Decoding client objectives to build an emotional blueprint that resonates with the target demographic.',
      icon: <PenTool size={16} />
    },
    {
      id: '02',
      tag: 'CURATION',
      title: 'Asset Ingestion',
      desc: 'Filtering raw data streams to find the "golden threads" that form a compelling storyline.',
      icon: <Database size={16} />
    },
    {
      id: '03',
      tag: 'POLISH',
      title: 'Aesthetic Mastering',
      desc: 'Cinema-grade color grading and AI-enhanced neural audio stabilization for high-end delivery.',
      icon: <Code2 size={16} />
    },
    {
      id: '04',
      tag: 'DEPLOY',
      title: 'Global Delivery',
      desc: 'Mastering for global OTT standards and localizing content for cross-platform impact.',
      icon: <Box size={16} />
    }
  ];

  const handleAnalyze = async () => {
    if (!analysisInput.trim()) return;
    setIsAnalyzing(true);
    setAnalysisResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview'; // Flash for speed in UI interactions
      const response = await ai.models.generateContent({
        model: model,
        contents: [{ 
          role: 'user', 
          parts: [{ text: `Analyze this video concept for retention and emotional impact based on Beerendra's 14 years of experience. Provide a concise 2-sentence strategy: ${analysisInput}` }] 
        }],
        config: { 
          systemInstruction: "You are Beerendra's AI strategy consultant. Give snappy, high-impact advice on video retention."
        }
      });
      setAnalysisResult(response.text || "Strategy engine offline.");
    } catch (e) {
      setAnalysisResult("AI module cooling down. Please contact directly for strategy.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section id="process" className="py-40 bg-brand-dark px-6 lg:px-24 relative border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit">
            <div className="flex items-center gap-4 mb-8">
              <Workflow size={18} className="text-brand-cyan" />
              <span className="font-mono text-brand-cyan text-[10px] tracking-[1em] uppercase block">Creative Protocol</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-12">
              CREATIVE<br/><span className="text-zinc-800">EVOLUTION.</span>
            </h2>
            
            {/* AI Analyzer Tool */}
            <div className="mt-16 p-8 border border-brand-cyan/20 bg-zinc-950/80 rounded-sm relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <Sparkles size={60} className="text-brand-cyan" />
               </div>
               <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                     <Sparkles size={16} className="text-brand-cyan" />
                     <span className="font-mono text-[9px] text-white uppercase tracking-widest">AI_STRATEGY_ENGINE [BETA]</span>
                  </div>
                  <p className="text-zinc-500 text-sm mb-6 font-light">
                    Paste your project concept below for an instant retention analysis.
                  </p>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={analysisInput}
                      onChange={(e) => setAnalysisInput(e.target.value)}
                      placeholder="Enter project hook..." 
                      className="flex-1 bg-zinc-900 border border-white/5 px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan transition-all"
                    />
                    <button 
                      onClick={handleAnalyze}
                      disabled={isAnalyzing || !analysisInput.trim()}
                      className="p-3 bg-brand-cyan text-black hover:bg-white transition-all disabled:opacity-50"
                    >
                      {isAnalyzing ? <div className="w-4 h-4 border-2 border-black border-t-transparent animate-spin rounded-full"></div> : <Send size={16} />}
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {analysisResult && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 pt-6 border-t border-white/5"
                      >
                        <div className="flex gap-3">
                           <CheckCircle2 size={14} className="text-brand-mint shrink-0 mt-1" />
                           <p className="text-zinc-300 text-xs leading-relaxed italic">
                             {analysisResult}
                           </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-14 bg-zinc-900/20 border border-white/5 hover:border-brand-cyan/40 transition-all flex flex-col sm:flex-row gap-12"
              >
                <div className="flex-shrink-0">
                  <span className="text-7xl font-black text-zinc-900 group-hover:text-brand-cyan/10 transition-colors block leading-none italic">
                    {step.id}
                  </span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-4 border border-white/10 text-zinc-700 group-hover:text-brand-cyan group-hover:border-brand-cyan transition-all">
                      {step.icon}
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600 tracking-[0.5em] uppercase">{step.tag}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-zinc-500 text-xl font-light leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;