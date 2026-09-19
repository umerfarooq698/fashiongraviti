import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, RefreshCw } from 'lucide-react';
import { askGeminiFashionStylist } from '../services/gemini';

interface AIFashionStylistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTag?: (tag: string) => void;
}

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

const PRESET_QUESTIONS = [
  'What are the key Quiet Luxury silhouettes for 2026?',
  'How do I style an oversized cashmere overcoat?',
  'Explain the current Paris Haute Couture trend direction.',
  'What are the best minimalist footwear pairing formulas?',
];

export const AIFashionStylistDrawer: React.FC<AIFashionStylistDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: 'Welcome to the Fashion Graviti Sartorial Concierge powered by Gemini AI. Ask me anything about runway critiques, luxury styling formulas, designer archives, or seasonal trends.',
      time: 'Just now',
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsLoading(true);

    try {
      const aiResponse = await askGeminiFashionStylist(query);
      const aiMsg: ChatMessage = {
        sender: 'ai',
        text: aiResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: 'Our atelier stylists recommend pairing structured monochromatic tailoring with un-dyed baby alpaca fibers for effortless sophistication.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-lg bg-noir-card border-l-2 border-white/20 h-full flex flex-col text-white shadow-2xl">
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/15 flex items-center justify-between bg-noir">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 bg-black border border-gold/40 text-gold">
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest font-black text-white">
                GEMINI FASHION STYLIST
              </h3>
              <p className="text-[10px] font-mono text-gold font-bold">
                LIVE AI RUNWAY CONCIERGE
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-3 bg-black border-b border-white/10 overflow-x-auto no-scrollbar flex items-center gap-2">
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              disabled={isLoading}
              className="text-[11px] font-mono whitespace-nowrap bg-white/5 hover:bg-gold hover:text-black border border-white/20 text-zinc-300 px-3 py-1.5 transition-all cursor-pointer font-medium"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Messages Body */}
        <div className="flex-grow p-4 sm:p-6 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                msg.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[85%] p-4 text-sm font-sans leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-crimson text-white border border-crimson-light font-medium'
                    : 'bg-black border border-white/20 text-zinc-200'
                }`}
              >
                {msg.sender === 'ai' && (
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-gold font-bold mb-2 uppercase">
                    <Bot className="w-3.5 h-3.5 text-gold" />
                    <span>Gemini Stylist</span>
                  </div>
                )}
                <div className="whitespace-pre-line">{msg.text}</div>
                <div
                  className={`text-[9px] font-mono mt-2 ${
                    msg.sender === 'user' ? 'text-zinc-300' : 'text-zinc-500'
                  }`}
                >
                  {msg.time}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center space-x-2 text-xs font-mono text-gold p-3 bg-black border border-gold/30 w-fit">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-gold" />
              <span>Gemini is curating styling critique...</span>
            </div>
          )}
        </div>

        {/* Bottom Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-4 border-t border-white/15 bg-noir flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Ask styling advice, runway trends, fashion critique..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            disabled={isLoading}
            className="flex-grow bg-black border border-white/20 p-3 text-xs text-white placeholder-zinc-500 font-sans focus:outline-none focus:border-gold"
          />
          <button
            type="submit"
            disabled={isLoading || !inputQuery.trim()}
            className="px-4 py-3 bg-white text-black hover:bg-gold transition-colors font-mono text-xs font-black uppercase disabled:opacity-50 flex items-center gap-1 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
