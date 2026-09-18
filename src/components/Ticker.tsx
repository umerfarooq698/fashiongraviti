import React from 'react';
import { RUNWAY_TICKER_ITEMS } from '../data/initialArticles';
import { Sparkles } from 'lucide-react';

export const Ticker: React.FC = () => {
  return (
    <div className="w-full bg-noir-pure dark:bg-black text-alabaster border-y border-white/10 dark:border-white/10 overflow-hidden py-2.5 text-xs font-mono tracking-widest uppercase select-none">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {/* Double list for infinite loop */}
        {[...RUNWAY_TICKER_ITEMS, ...RUNWAY_TICKER_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="inline-block w-2 h-2 rounded-full bg-crimson mr-3 animate-pulse-slow"></span>
            <span className="text-zinc-300 dark:text-zinc-300 font-light hover:text-white transition-colors">
              {item}
            </span>
            <Sparkles className="w-3 h-3 ml-6 text-gold/60 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
};
