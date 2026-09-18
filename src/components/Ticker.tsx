import React from 'react';
import { RUNWAY_TICKER_ITEMS } from '../data/initialArticles';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface TickerProps {
  onSelectTickerItem?: (text: string) => void;
}

export const Ticker: React.FC<TickerProps> = ({ onSelectTickerItem }) => {
  return (
    <div className="w-full bg-noir-pure dark:bg-black text-alabaster border-y border-white/10 dark:border-white/10 overflow-hidden py-2.5 text-xs font-mono tracking-widest uppercase select-none">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {/* Double list for infinite loop */}
        {[...RUNWAY_TICKER_ITEMS, ...RUNWAY_TICKER_ITEMS].map((item, idx) => (
          <div 
            key={idx} 
            onClick={() => onSelectTickerItem?.(item)}
            className="flex items-center mx-6 cursor-pointer group"
            title="Click to explore this headline"
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-crimson mr-3 animate-pulse-slow group-hover:scale-125 transition-transform"></span>
            <span className="text-zinc-200 font-bold group-hover:text-gold transition-colors flex items-center gap-1.5">
              {item}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
            </span>
            <Sparkles className="w-3.5 h-3.5 ml-6 text-gold/60 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
};
