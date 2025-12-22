import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Bot, User, Terminal } from 'lucide-react';
import { RESUME_SUMMARY } from '../constants';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: "Signal synchronized. I am BEERENDRA.K's Narrative Twin. How can I assist with your content strategy today?" }
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
      const systemInstruction = `You are a sophisticated digital twin for BEERENDRA.K, a Senior Video Strategist.
      Context: ${RESUME_SUMMARY}.
      Voice: Professional, strategic, data-driven.
      Key Facts: 14+ years exp, 500M+ views, ₹24Cr donation impact, 80+ OTT titles.
      Format: Short, impact-heavy responses. Use "we" to refer to the production team.`;

      const response = await ai.models.generateContent({
        model: model,
        contents: [{ role: 'user', parts: [{ text: userMsg.text }] }],
        config: { systemInstruction },
      });

      const aiMsg: ChatMessage = {
        id: Date.now().toString(),
        role: 'model',
        text: response.text || "Connection lost. Please contact the team directly at +91 9705552787."
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "System overload. Contact: beerendrakarukola9@gmail.com"
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[120] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[400px] h-[550px] bg-zinc-950 border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10">
          
          <div className="bg-zinc-900 p-5 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-3">
              <Terminal size={14} className="text-brand-primary" />
              <div>
                <h3 className="font-bold text-white text-[10px] tracking-widest uppercase">STRATEGY_TWIN // V2.0</h3>
                <div className="flex items-center gap-1.5">
                   <span className="w-1 h-1 rounded-full bg-brand-accent animate-pulse"></span>
                   <p className="text-[8px] font-mono text-zinc-600 uppercase">Secure Link Active</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-600 hover:text-white transition-all">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-none border flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' ? 'bg-zinc-800 border-zinc-700' : 'bg-brand-primary/10 border-brand-primary/20'
                  }`}
                >
                  {msg.role === 'user' ? <User size={12} className="text-zinc-500" /> : <Bot size={12} className="text-brand-primary" />}
                </div>
                <div className={`p-4 text-[13px] leading-relaxed max-w-[85%] ${
                    msg.role === 'user' ? 'bg-zinc-800 text-white' : 'bg-zinc-900 text-zinc-400 border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-zinc-900 border-t border-white/5">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about OTT or ROI..."
                className="flex-1 bg-zinc-950 border border-white/5 text-white px-4 py-3 text-[12px] focus:outline-none focus:border-brand-primary transition-all font-sans"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isTyping || !inputValue.trim()}
                className="p-3 bg-brand-primary text-white transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-primary text-white flex items-center justify-center hover:scale-105 transition-all shadow-2xl"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;