import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Bookmark, 
  PlusCircle, 
  Compass,
  X
} from 'lucide-react';
import type { FashionCategory } from '../types/fashion';

interface HeaderProps {
  categories: FashionCategory[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  bookmarkedCount: number;
  onOpenBookmarks: () => void;
  onOpenCreateModal: () => void;
  onOpenLookbook: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  bookmarkedCount,
  onOpenBookmarks,
  onOpenCreateModal,
  onOpenLookbook,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  return (
    <header className="w-full bg-noir-pure text-white border-b-2 border-white/20 relative">
      {/* Top Edition & Date Bar */}
      <div className="border-b border-white/10 px-4 lg:px-12 py-2 flex items-center justify-between text-xs font-mono tracking-wider text-zinc-300">
        <div className="flex items-center space-x-3 font-semibold">
          <span className="text-crimson-light font-bold">FASHION GRAVITI</span>
          <span className="text-zinc-600">•</span>
          <span className="text-white font-medium">DAILY EDITORIAL EDITION</span>
          <span className="hidden md:inline text-zinc-600">•</span>
          <span className="hidden md:inline text-gold font-semibold">VOLUME 2026</span>
        </div>

        <div className="text-[11px] font-mono font-bold text-zinc-400 hidden sm:block uppercase">
          GLOBAL FASHION & RUNWAY EDITORIAL
        </div>
      </div>

      {/* Main Bold Magazine Masthead */}
      <div className="px-4 lg:px-12 py-6 md:py-8 text-center border-b-2 border-white/15 flex flex-col items-center justify-center bg-noir">
        <div className="text-[11px] font-mono tracking-mega-wide uppercase text-gold font-bold mb-2">
          THE DEFINITIVE FASHION & RUNWAY ARCHIVE
        </div>

        <h1 
          onClick={() => onSelectCategory('all')}
          className="cursor-pointer text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight uppercase hover:text-gold transition-colors duration-200 text-white select-none drop-shadow-md"
        >
          FASHION GRAVITI
        </h1>

        <div className="mt-2 text-xs md:text-sm font-sans font-bold tracking-widest text-zinc-200 uppercase flex items-center justify-center gap-2">
          <span>Fashion News</span>
          <span className="text-crimson font-black">•</span>
          <span>Fashion Trends</span>
          <span className="text-crimson font-black">•</span>
          <span>Celebrity Fashion</span>
        </div>
      </div>

      {/* Magazine Category Navigation Bar */}
      <div className="px-4 lg:px-12 py-3.5 flex items-center justify-between gap-4 bg-noir-elevated border-b border-white/10">
        {/* News Magazine Category Tabs */}
        <nav className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-2 font-mono text-xs uppercase tracking-wider font-extrabold transition-all border ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-md'
                    : 'bg-transparent text-zinc-200 hover:text-white border-transparent hover:border-white/30 hover:bg-white/5'
                }`}
              >
                {cat.name}
                <span className={`ml-1.5 text-[10px] font-bold ${isSelected ? 'text-black' : 'text-gold'}`}>
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons: Search, Bookmarks, Lookbook, Submit */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          {/* Quick Search */}
          <div className="relative">
            {isSearchOpen ? (
              <div className="flex items-center bg-black border-2 border-gold px-3 py-1.5 rounded-none text-xs">
                <Search className="w-4 h-4 text-gold mr-2" />
                <input
                  type="text"
                  placeholder="Search articles, designers, topics..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  autoFocus
                  className="bg-transparent text-white placeholder-zinc-400 font-bold focus:outline-none w-36 sm:w-60 text-xs font-sans"
                />
                <button 
                  onClick={() => {
                    onSearchChange('');
                    setIsSearchOpen(false);
                  }}
                  className="text-white hover:text-gold ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-2 px-3 py-2 border border-white/20 hover:border-gold text-white font-bold transition-colors text-xs font-mono"
              >
                <Search className="w-4 h-4 text-gold" />
                <span className="hidden md:inline font-bold">SEARCH</span>
                <kbd className="hidden lg:inline bg-white/20 text-white px-1.5 py-0.5 text-[10px] rounded font-mono font-bold">/</kbd>
              </button>
            )}
          </div>

          {/* Lookbook */}
          <button
            onClick={onOpenLookbook}
            className="flex items-center space-x-1.5 px-3 py-2 border border-white/20 hover:border-gold text-white hover:text-gold transition-colors text-xs font-mono font-bold uppercase"
            title="Open Seasonal Lookbook"
          >
            <Compass className="w-4 h-4 text-gold" />
            <span className="hidden sm:inline">Lookbook</span>
          </button>

          {/* Saved Vault */}
          <button
            onClick={onOpenBookmarks}
            className="flex items-center space-x-1.5 px-3 py-2 border border-white/20 hover:border-white text-white transition-colors text-xs font-mono font-bold uppercase relative"
            title="View Saved Vault"
          >
            <Bookmark className="w-4 h-4 fill-current text-gold" />
            <span className="hidden sm:inline">Saved</span>
            {bookmarkedCount > 0 && (
              <span className="inline-flex items-center justify-center bg-crimson text-white text-[11px] w-4 h-4 rounded-full font-black ml-1">
                {bookmarkedCount}
              </span>
            )}
          </button>

          {/* Submit Editorial Article */}
          <button
            onClick={onOpenCreateModal}
            className="flex items-center space-x-1.5 px-4 py-2 bg-crimson hover:bg-crimson-light text-white font-mono text-xs uppercase tracking-wider font-extrabold transition-all shadow-md active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Post Article</span>
            <span className="sm:hidden">Post</span>
          </button>
        </div>
      </div>
    </header>
  );
};
