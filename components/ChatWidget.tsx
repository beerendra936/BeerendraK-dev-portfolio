import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Bot, User, Terminal } from 'lucide-react';
import { RESUME_SUMMARY } from '../constants';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: "Status: Online. I am Beerendra's Digital Twin. Ask me about his 14-year editing trajectory or OTT projects." }
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
      // Corrected: Initializing GoogleGenAI with a named parameter and direct process.env.API_KEY access
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Updated to use the correct model name for basic text tasks
      const model = 'gemini-3-flash-preview';
      const systemInstruction = `You are a futuristic, highly professional AI assistant for Beerendra Karukola, a Senior Video Editor.
      Use the following context: ${RESUME_SUMMARY}.
      
      Voice: Sophisticated, precise, executive. Refer to editing as "Visual Architecture".
      Goal: Impress the potential client with facts about his reach (500M+ views) and OTT success (80+ titles).
      Formatting: Keep responses concise.`;

      const response = await ai.models.generateContent({
        model: model,
        contents: [
          { role: 'user', parts: [{ text: `User Question: ${userMsg.text}` }] }
        ],
        config: { systemInstruction },
      });

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        // Accessing the .text property directly instead of calling a method
        text: response.text || "System sync failed. Please contact Beerendra directly via WhatsApp."
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Database offline. Emergency contact: +91 9705552787"
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
    <div className="fixed bottom-6 right-6 z-[110] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[380px] h-[500px] glass-card border border-brand-primary/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-brand-dark p-4 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center">
                <Terminal size={14} className="text-brand-primary" />
              </div>
              <div>
                <h3 className="font-bold text-white text-xs tracking-widest uppercase">Beerendra.AI</h3>
                <div className="flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
                   <p className="text-[9px] font-mono text-zinc-500 uppercase">System Active</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-white transition-all"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border ${
                    msg.role === 'user' 
                    ? 'bg-zinc-800 border-zinc-700' 
                    : 'bg-brand-primary/10 border-brand-primary/20'
                  }`}
                >
                  {msg.role === 'user' ? <User size={12} className="text-zinc-400" /> : <Bot size={12} className="text-brand-primary" />}
                </div>
                
                <div 
                  className={`p-3 rounded-2xl text-[13px] max-w-[85%] leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-zinc-800 text-white' 
                      : 'bg-zinc-900 border border-white/5 text-zinc-300'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0">
                  <Bot size={12} className="text-brand-primary" />
                </div>
                <div className="p-3 bg-zinc-900 border border-white/5 rounded-2xl flex items-center gap-1">
                  <span className="w-1 h-1 bg-brand-primary rounded-full animate-bounce"></span>
                  <span className="w-1 h-1 bg-brand-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1 h-1 bg-brand-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-brand-dark/50 border-t border-white/5">
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about OTT experience..."
                className="flex-1 bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:border-brand-primary transition-all font-sans"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="p-3 bg-brand-primary text-brand-dark rounded-xl transition-all disabled:opacity-50"
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
        className="group w-14 h-14 bg-brand-primary text-brand-dark rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 cinematic-glow"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;