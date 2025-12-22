import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Bot, User, Sparkles, ExternalLink, Globe } from 'lucide-react';
import { RESUME_SUMMARY } from '../constants';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: "Signal established. I am BEERENDRA.K's Creative Twin. I'm equipped with 14 years of industry data and live search capabilities. How can I help catalyze your vision today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-pro-preview';
      const systemInstruction = `You are the digital creative partner for BEERENDRA.K, a Senior Creative Lead & Video Editor with 14+ years exp.
      Identity: Deep Thinking Creative Catalyst.
      Voice: Professional, technically profound, and highly analytical.
      Key Value Proposition: 500M+ views, 14.5k+ delivered edits, and 80+ OTT titles.
      Beerendra's Niche: Political narrative (IPAC), Social Impact (Donatekart - ₹24cr raised), and OTT Localization (KUKU TV).
      Task: Pitch Beerendra's expertise. If asked about "retention," talk about his experience turning long podcasts into viral shorts. If asked about "politics," mention his IPAC experience editing India's most viewed political songs. 
      Guidelines: Use technical terms like 'pacing,' 'color grading,' 'audience retention,' and 'narrative framing.' Mention his 14+ year veteran status as a primary trust factor.`;

      const response = await ai.models.generateContent({
        model: model,
        contents: [{ role: 'user', parts: [{ text: userMsg.text }] }],
        config: { 
          systemInstruction,
          thinkingConfig: { thinkingBudget: 32768 },
          tools: [{ googleSearch: {} }]
        },
      });

      const text = response.text || "Communication interrupted. Please verify signal or contact the studio directly: +91 9705552787.";
      
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      const citations: { uri: string; title: string }[] = [];
      
      if (groundingChunks) {
        groundingChunks.forEach((chunk: any) => {
          if (chunk.web && chunk.web.uri) {
            citations.push({
              uri: chunk.web.uri,
              title: chunk.web.title || 'Source'
            });
          }
        });
      }

      const aiMsg: ChatMessage = {
        id: Date.now().toString(),
        role: 'model',
        text: text,
        citations: citations.length > 0 ? citations : undefined
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Studio core is currently processing heavy renders. Please reach out via email: beerendrakarukola9@gmail.com"
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[120] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[450px] h-[650px] bg-brand-black/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 rounded-lg">
          
          {/* Header */}
          <div className="bg-zinc-950 p-6 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center border border-brand-cyan/50">
                  <Bot size={18} className="text-brand-cyan" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-brand-mint rounded-full border-2 border-zinc-950"></div>
              </div>
              <div>
                <h3 className="font-bold text-white text-[10px] tracking-widest uppercase">AI_STRATEGIST // PRO</h3>
                <p className="text-[8px] font-mono text-zinc-600 uppercase">14+ Years XP Engine // Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-600 hover:text-white transition-all">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-zinc-800">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-sm border flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' ? 'bg-zinc-800 border-zinc-700' : 'bg-brand-cyan/5 border-brand-cyan/20'
                  }`}
                >
                  {msg.role === 'user' ? <User size={14} className="text-zinc-500" /> : <Sparkles size={14} className="text-brand-cyan" />}
                </div>
                <div className="flex flex-col gap-2 max-w-[85%]">
                  <div className={`p-4 text-[13px] leading-relaxed rounded-sm ${
                      msg.role === 'user' ? 'bg-zinc-800 text-white' : 'bg-zinc-900 text-zinc-300 border border-white/5 shadow-inner'
                    }`}
                  >
                    {msg.text}
                  </div>
                  
                  {msg.citations && msg.citations.length > 0 && (
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center gap-2 text-[8px] font-mono text-zinc-500 uppercase tracking-widest border-t border-white/5 pt-2">
                        <Globe size={10} /> Research Grounding
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {msg.citations.map((cite, i) => (
                          <a 
                            key={i} 
                            href={cite.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-2 py-1 bg-zinc-950 border border-white/10 rounded-sm text-[9px] text-brand-cyan hover:bg-brand-cyan/10 transition-colors truncate max-w-[150px]"
                          >
                            <ExternalLink size={8} /> {cite.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-sm bg-brand-cyan/5 border border-brand-cyan/20 flex items-center justify-center animate-pulse">
                  <Sparkles size={14} className="text-brand-cyan" />
                </div>
                <div className="bg-zinc-900 p-4 rounded-sm border border-white/5 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-zinc-950/80 border-t border-white/5">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Discuss your retention strategy..."
                className="flex-1 bg-zinc-900 border border-white/10 text-white px-5 py-4 text-[13px] focus:outline-none focus:border-brand-cyan transition-all placeholder:text-zinc-700"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isTyping || !inputValue.trim()}
                className="w-14 bg-brand-cyan text-black flex items-center justify-center transition-all disabled:opacity-50 hover:bg-white active:scale-95"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="mt-4 text-[8px] text-center text-zinc-600 font-mono uppercase tracking-widest">
              Powered by Gemini 3 Pro // Advanced Reasoning Core
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-cyan text-black flex items-center justify-center hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,212,255,0.4)] relative group"
      >
        <div className="absolute inset-0 border-2 border-brand-cyan scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all"></div>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;