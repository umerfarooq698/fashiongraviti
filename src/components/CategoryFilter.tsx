import React from 'react';
import type { FashionCategory, FashionMood, ViewLayoutMode } from '../types/fashion';
import { LayoutGrid, Columns3, List, Sparkles, SlidersHorizontal } from 'lucide-react';

interface CategoryFilterProps {
  categories: FashionCategory[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  activeMood: FashionMood;
  onSelectMood: (mood: FashionMood) => void;
  layoutMode: ViewLayoutMode;
  onChangeLayout: (mode: ViewLayoutMode) => void;
  totalArticlesCount: number;
}

const TOPICS: FashionMood[] = [
  'All Moods',
  'Avant-Garde',
  'Dark Romanticism',
  'Quiet Luxury',
  'Cyber-Street',
  'Opulent Minimalism',
  'Neo-Vintage',
  'Sustainable Tech',
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  activeMood,
  onSelectMood,
  layoutMode,
  onChangeLayout,
  totalArticlesCount,
}) => {
  return (
    <section className="w-full bg-noir-card border-b-2 border-white/20 px-4 lg:px-12 py-8">
      {/* Magazine Desks Banner */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <h3 className="text-sm font-mono uppercase tracking-widest text-white font-extrabold">
              MAGAZINE DESKS & EDITORIAL CATEGORIES
            </h3>
          </div>
          <span className="text-xs font-mono font-bold text-gold uppercase bg-black px-3 py-1 border border-gold/40">
            {totalArticlesCount} PUBLISHED ARTICLES
          </span>
        </div>

        {/* Magazine Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3.5">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative group cursor-pointer overflow-hidden border-2 transition-all duration-300 ${
                  isSelected
                    ? 'border-gold shadow-xl scale-[1.02] bg-noir'
                    : 'border-white/20 hover:border-white bg-noir-pure'
                }`}
              >
                {/* Visual Image */}
                <div className="h-28 sm:h-32 relative overflow-hidden bg-black">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-85 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-3 flex flex-col justify-end">

                  <div>
                    <h4 className={`text-xs sm:text-sm font-serif font-black uppercase tracking-tight leading-snug ${
                      isSelected ? 'text-gold' : 'text-white'
                    }`}>
                      {cat.name}
                    </h4>
                    <p className="text-[10px] font-mono text-zinc-300 font-bold uppercase tracking-wider line-clamp-1 mt-0.5">
                      {cat.tagline}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Secondary Bar: Topic Filter & Layout Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-white/15">
        {/* Topic Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center text-xs font-mono text-white font-extrabold mr-2 flex-shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 mr-1 text-gold" />
            <span className="uppercase text-xs tracking-wider">AESTHETIC:</span>
          </div>

          {TOPICS.map((mood) => (
            <button
              key={mood}
              onClick={() => onSelectMood(mood)}
              className={`text-xs font-mono uppercase px-3 py-1.5 transition-all whitespace-nowrap font-bold border ${
                activeMood === mood
                  ? 'bg-crimson text-white border-crimson shadow-md'
                  : 'bg-black/80 text-zinc-200 border-white/20 hover:border-white hover:text-white'
              }`}
            >
              {mood}
            </button>
          ))}
        </div>

        {/* View Layout Mode Buttons */}
        <div className="flex items-center space-x-2 flex-shrink-0 self-end md:self-auto">
          <span className="text-xs font-mono uppercase text-white font-bold mr-1 hidden sm:inline">VIEW:</span>
          
          <button
            onClick={() => onChangeLayout('editorial')}
            className={`px-2.5 py-1.5 border flex items-center gap-1.5 text-xs font-mono font-bold transition-all ${
              layoutMode === 'editorial'
                ? 'bg-white text-black border-white'
                : 'border-white/20 text-zinc-300 hover:text-white hover:border-white'
            }`}
            title="Magazine Spread Layout"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Spread</span>
          </button>

          <button
            onClick={() => onChangeLayout('magazine')}
            className={`px-2.5 py-1.5 border flex items-center gap-1.5 text-xs font-mono font-bold transition-all ${
              layoutMode === 'magazine'
                ? 'bg-white text-black border-white'
                : 'border-white/20 text-zinc-300 hover:text-white hover:border-white'
            }`}
            title="3-Column Grid"
          >
            <Columns3 className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Grid</span>
          </button>

          <button
            onClick={() => onChangeLayout('compact')}
            className={`px-2.5 py-1.5 border flex items-center gap-1.5 text-xs font-mono font-bold transition-all ${
              layoutMode === 'compact'
                ? 'bg-white text-black border-white'
                : 'border-white/20 text-zinc-300 hover:text-white hover:border-white'
            }`}
            title="Archive List"
          >
            <List className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Ledger</span>
          </button>
        </div>
      </div>
    </section>
  );
};
