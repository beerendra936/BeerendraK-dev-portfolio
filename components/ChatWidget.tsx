import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles, Terminal } from 'lucide-react';
import { RESUME_SUMMARY } from '../constants';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: "System Initialized. I am Beerendra's Digital Twin. Query my database regarding his editing skills or experience." }
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
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const model = 'gemini-2.5-flash';
      const systemInstruction = `You are a futuristic, professional AI assistant for Beerendra Karukola, a Senior Video Editor.
      Use the following resume data: ${RESUME_SUMMARY}.
      
      Style: Efficient, slightly tech-focused but polite. Use terms like "Rendering answer...", "Analyzing request...".
      Goal: Convince the user of Beerendra's high-end editing capabilities.
      If info is missing, state it clearly and suggest contacting him directly.`;

      const response = await ai.models.generateContent({
        model: model,
        contents: [
          { role: 'user', parts: [{ text: `Context: ${RESUME_SUMMARY} \n\n Question: ${userMsg.text}` }] }
        ],
        config: { systemInstruction },
      });

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response.text || "Connection interrupted. Manual contact recommended."
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Error accessing core database. Please try again later."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[380px] h-[500px] bg-[#0b0f1a]/95 backdrop-blur-xl border border-indigo-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 ring-1 ring-white/10">
          
          {/* Header - Sci-fi Style */}
          <div className="bg-slate-900/50 p-4 border-b border-indigo-500/20 flex justify-between items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-500/5 scanline opacity-10"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-8 h-8 rounded bg-indigo-600/20 border border-indigo-500/50 flex items-center justify-center">
                <Terminal size={16} className="text-indigo-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-100 text-sm tracking-wide">AI_ASSISTANT_V2</h3>
                <div className="flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                   <p className="text-[10px] font-mono text-indigo-300">ONLINE</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white hover:rotate-90 transition-all duration-300"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent scrollbar-thin scrollbar-thumb-slate-700">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 border ${
                    msg.role === 'user' 
                    ? 'bg-slate-800 border-slate-600' 
                    : 'bg-indigo-950/50 border-indigo-500/30'
                  }`}
                >
                  {msg.role === 'user' ? <User size={14} className="text-slate-300" /> : <Bot size={14} className="text-indigo-400" />}
                </div>
                
                <div 
                  className={`p-3 rounded text-sm max-w-[85%] leading-relaxed shadow-lg ${
                    msg.role === 'user' 
                      ? 'bg-slate-800 text-slate-100 border border-slate-700' 
                      : 'bg-[#1e293b]/80 border border-indigo-500/20 text-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 animate-pulse">
                <div className="w-8 h-8 rounded bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                  <Bot size={14} className="text-indigo-400" />
                </div>
                <div className="px-4 py-2 bg-[#1e293b]/80 border border-indigo-500/20 rounded flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-slate-900/50 border-t border-indigo-500/20 backdrop-blur-sm">
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ex: What software does he use?"
                className="flex-1 bg-slate-950/50 border border-slate-700 text-slate-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all font-mono placeholder:text-slate-600"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/20"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-white hover:bg-indigo-50 text-indigo-900 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-105"
      >
        <div className="absolute inset-0 rounded-full border-2 border-indigo-600/10 animate-ping opacity-20"></div>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">1</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;