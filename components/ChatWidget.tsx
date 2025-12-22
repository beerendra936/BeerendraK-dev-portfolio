import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { RESUME_SUMMARY } from '../constants';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: "Signal established. I am BEERENDRA.K's Creative Twin. How can I help catalyze your vision today?" }
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
      const model = 'gemini-3-flash-preview';
      const systemInstruction = `You are the digital creative partner for BEERENDRA.K, a Senior Creative Lead & Video Editor.
      Identity: Creative Catalyst.
      Voice: Artistic, confident, technically grounded.
      Key Facts: 14+ years exp, 500M+ views, 80+ OTT titles, specialized in political narrative and social impact.
      Task: Help users understand how Beerendra can elevate their content projects.`;

      const response = await ai.models.generateContent({
        model: model,
        contents: [{ role: 'user', parts: [{ text: userMsg.text }] }],
        config: { systemInstruction },
      });

      const aiMsg: ChatMessage = {
        id: Date.now().toString(),
        role: 'model',
        text: response.text || "Connection weak. Reach the studio directly: +91 9705552787."
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Studio overload. Reach: beerendrakarukola9@gmail.com"
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[120] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[420px] h-[600px] glass-studio shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10">
          
          <div className="bg-zinc-950/80 p-6 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-brand-primary" />
              <div>
                <h3 className="font-bold text-white text-[10px] tracking-widest uppercase">CREATIVE_TWIN // V2.0</h3>
                <p className="text-[8px] font-mono text-zinc-600 uppercase">Secure Link Active</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-600 hover:text-white transition-all">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-10 h-10 border flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' ? 'bg-zinc-800 border-zinc-700' : 'bg-brand-primary/5 border-brand-primary/20'
                  }`}
                >
                  {msg.role === 'user' ? <User size={14} className="text-zinc-500" /> : <Bot size={14} className="text-brand-primary" />}
                </div>
                <div className={`p-5 text-[14px] leading-relaxed max-w-[85%] ${
                    msg.role === 'user' ? 'bg-zinc-800 text-white' : 'bg-zinc-950 text-zinc-400 border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 bg-zinc-950/50 border-t border-white/5">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Discuss your vision..."
                className="flex-1 bg-zinc-900 border border-white/5 text-white px-5 py-4 text-[13px] focus:outline-none focus:border-brand-primary transition-all"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isTyping || !inputValue.trim()}
                className="px-5 bg-brand-primary text-black transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-primary text-black flex items-center justify-center hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,212,255,0.3)]"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;