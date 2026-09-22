import React, { useState, useEffect } from 'react';
import { Search, X, Menu, Bookmark, Compass, Sparkles, ChevronRight, Info, Mail } from 'lucide-react';
import type { FashionCategory } from '../types/fashion';
import { FashionGravitiLogo, FashionGravitiEmblem } from './FashionGravitiLogo';

interface HeaderProps {
  categories: FashionCategory[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigateAbout?: () => void;
  onNavigateContact?: () => void;
  onOpenLookbook?: () => void;
  onOpenBookmarks?: () => void;
  bookmarkedCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onNavigateAbout,
  onNavigateContact,
  onOpenLookbook,
  onOpenBookmarks,
  bookmarkedCount = 0,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Keyboard shortcut '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        if (isSearchOpen) setIsSearchOpen(false);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleCategorySelect = (catId: string) => {
    onSelectCategory(catId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-noir-pure text-white border-b-2 border-white/20 relative z-40">
      {/* 1. Top Edition Bar (Responsive across all screens) */}
      <div className="border-b border-white/10 px-3 sm:px-6 lg:px-12 py-1.5 sm:py-2 flex items-center justify-between text-[10px] sm:text-xs font-mono tracking-wider text-zinc-300">
        <div className="flex items-center space-x-2 sm:space-x-3 font-semibold truncate">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('all');
            }}
            className="flex items-center space-x-2 text-crimson-light font-bold hover:text-white transition-colors no-underline cursor-pointer flex-shrink-0"
          >
            <FashionGravitiEmblem size={20} className="flex-shrink-0" />
            <span>FASHION GRAVITI</span>
          </a>
          <span className="text-zinc-600">•</span>
          <span className="text-white font-medium truncate">
            <span className="hidden xs:inline">DAILY </span>EDITORIAL EDITION
          </span>
          <span className="hidden md:inline text-zinc-600">•</span>
          <span className="hidden md:inline text-gold font-semibold">VOLUME 2026</span>
        </div>

        <div className="flex items-center space-x-3 flex-shrink-0">
          <div className="text-[10px] sm:text-[11px] font-mono font-bold text-zinc-400 hidden sm:block uppercase">
            GLOBAL RUNWAY ARCHIVE
          </div>

          {onOpenBookmarks && (
            <button
              onClick={onOpenBookmarks}
              className="flex items-center space-x-1 text-[10px] sm:text-xs font-mono text-zinc-300 hover:text-gold transition-colors"
              title="View saved stories in Vault"
            >
              <Bookmark className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold fill-current" />
              <span className="hidden xs:inline">VAULT</span>
              {bookmarkedCount > 0 && (
                <span className="bg-crimson text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {bookmarkedCount}
                </span>
              )}
            </button>
          )}
        </div>
      </div>

      {/* 2. Main Magazine Masthead with VIP Logo */}
      <div className="px-3 sm:px-6 lg:px-12 py-6 sm:py-8 md:py-10 text-center border-b-2 border-white/15 flex flex-col items-center justify-center bg-noir relative">
        {/* Mobile Hamburger Toggle on Left */}
        <div className="lg:hidden absolute left-3 sm:left-6 top-6 sm:top-8">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 sm:p-2.5 border border-white/20 hover:border-gold bg-black/60 text-white hover:text-gold transition-colors flex items-center justify-center active:scale-95"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-gold" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* VIP Masthead Logo Lockup */}
        <a 
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onSelectCategory('all');
          }}
          className="cursor-pointer no-underline block"
        >
          <FashionGravitiLogo variant="masthead" />
        </a>

        {/* Clickable Department Links */}
        <div className="mt-4 sm:mt-5 text-[11px] sm:text-xs md:text-sm font-sans font-bold tracking-wider sm:tracking-widest text-zinc-200 uppercase flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <a
            href="/fashion-news"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('fashion-news');
            }}
            className="text-zinc-200 hover:text-gold transition-colors no-underline cursor-pointer"
          >
            Fashion News
          </a>
          <span className="text-crimson font-black">•</span>
          <a
            href="/fashion-trends"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('fashion-trends');
            }}
            className="text-zinc-200 hover:text-gold transition-colors no-underline cursor-pointer"
          >
            Fashion Trends
          </a>
          <span className="text-crimson font-black">•</span>
          <a
            href="/celebrity"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('celebrity');
            }}
            className="text-zinc-200 hover:text-gold transition-colors no-underline cursor-pointer"
          >
            Celebrity Fashion
          </a>
        </div>
      </div>

      {/* 3. Magazine Category Navigation Bar (Desktop & Horizontal Touch Scroll) */}
      <div className="px-3 sm:px-6 lg:px-12 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-4 bg-noir-elevated border-b border-white/10 relative">
        {/* News Magazine Category Tabs */}
        <nav className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar py-1 flex-grow scroll-smooth" style={{ WebkitOverflowScrolling: 'touch' }}>
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            const href = cat.id === 'all' ? '/' : `/${cat.id}`;
            return (
              <a
                key={cat.id}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCategory(cat.id);
                }}
                className={`whitespace-nowrap px-2.5 sm:px-3.5 py-1.5 sm:py-2 font-mono text-[11px] sm:text-xs uppercase tracking-wider font-extrabold transition-all border no-underline flex-shrink-0 ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-md'
                    : 'bg-transparent text-zinc-200 hover:text-white border-transparent hover:border-white/30 hover:bg-white/5'
                }`}
              >
                {cat.name}
              </a>
            );
          })}
        </nav>

        {/* Search Input / Button on Right */}
        <div className="flex items-center flex-shrink-0">
          {isSearchOpen ? (
            <div className="flex items-center bg-black border-2 border-gold px-2.5 sm:px-3 py-1.5 rounded-none text-xs shadow-lg">
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold mr-1.5 sm:mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search stories, designers, topics..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                autoFocus
                className="bg-transparent text-white placeholder-zinc-400 font-bold focus:outline-none w-36 xs:w-48 sm:w-64 text-[11px] sm:text-xs font-sans"
              />
              <button 
                onClick={() => {
                  onSearchChange('');
                  setIsSearchOpen(false);
                }}
                className="text-white hover:text-gold ml-1 sm:ml-2 p-0.5"
                title="Close Search"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 border border-white/20 hover:border-gold text-white font-bold transition-colors text-[11px] sm:text-xs font-mono bg-black/50"
              title="Search Articles"
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
              <span className="font-bold">SEARCH</span>
              <kbd className="hidden md:inline bg-white/20 text-white px-1.5 py-0.5 text-[10px] rounded font-mono font-bold">/</kbd>
            </button>
          )}
        </div>
      </div>

      {/* 4. Mobile & Tablet Slide-Down Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[120px] sm:top-[140px] bottom-0 z-50 bg-black/95 backdrop-blur-xl border-b border-white/20 overflow-y-auto animate-fadeIn flex flex-col justify-between">
          <div className="p-4 sm:p-6 space-y-6">
            {/* VIP Logo Lockup in Mobile Drawer */}
            <div className="pb-3 border-b border-white/10 flex items-center justify-between">
              <FashionGravitiLogo
                variant="compact"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onSelectCategory('all');
                }}
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-zinc-400 hover:text-white"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Search on Mobile Drawer */}
            <div className="bg-noir-card border-2 border-white/20 p-2 flex items-center gap-2">
              <Search className="w-4 h-4 text-gold ml-1 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search across all editorial vaults..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-transparent text-white font-medium text-sm focus:outline-none placeholder-zinc-500"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="p-1 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Department Categories List */}
            <div>
              <div className="flex items-center space-x-2 mb-3 pb-1 border-b border-white/10 text-xs font-mono text-gold font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>EDITORIAL DEPARTMENTS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {categories.map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`w-full text-left px-3.5 py-3 font-mono text-xs uppercase tracking-wider font-extrabold flex items-center justify-between border transition-all ${
                        isSelected
                          ? 'bg-gold text-black border-gold'
                          : 'bg-noir-card text-zinc-200 border-white/10 hover:border-white hover:text-white'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Curations & Vault Shortcuts */}
            <div className="pt-2 border-t border-white/10">
              <div className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest mb-3">
                CURATED ARCHIVES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {onOpenLookbook && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenLookbook();
                    }}
                    className="p-3 bg-noir-card border border-white/15 flex items-center space-x-3 text-left hover:border-gold transition-colors group"
                  >
                    <Compass className="w-4 h-4 text-gold flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono font-bold text-white group-hover:text-gold uppercase">
                        Lookbook Archive
                      </div>
                      <div className="text-[10px] text-zinc-400 font-sans">
                        Atelier silhouette blueprints
                      </div>
                    </div>
                  </button>
                )}

                {onOpenBookmarks && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenBookmarks();
                    }}
                    className="p-3 bg-noir-card border border-white/15 flex items-center space-x-3 text-left hover:border-gold transition-colors group"
                  >
                    <Bookmark className="w-4 h-4 text-gold flex-shrink-0 fill-current" />
                    <div>
                      <div className="text-xs font-mono font-bold text-white group-hover:text-gold uppercase flex items-center gap-1.5">
                        <span>Saved Vault</span>
                        {bookmarkedCount > 0 && (
                          <span className="bg-crimson text-white text-[9px] px-1.5 py-0.2 rounded-full">
                            {bookmarkedCount}
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-zinc-400 font-sans">
                        Saved articles for offline reading
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Institutional & Legal Pages */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono">
              {onNavigateAbout && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateAbout();
                  }}
                  className="flex items-center space-x-1.5 text-zinc-300 hover:text-gold transition-colors uppercase font-bold"
                >
                  <Info className="w-3.5 h-3.5 text-gold" />
                  <span>About Us</span>
                </button>
              )}

              {onNavigateContact && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateContact();
                  }}
                  className="flex items-center space-x-1.5 text-zinc-300 hover:text-gold transition-colors uppercase font-bold"
                >
                  <Mail className="w-3.5 h-3.5 text-gold" />
                  <span>Contact Newsroom</span>
                </button>
              )}
            </div>
          </div>

          {/* Bottom Drawer Bar */}
          <div className="p-4 bg-noir-pure border-t border-white/15 text-center text-[10px] font-mono text-zinc-500 uppercase">
            © 2026 FASHION GRAVITI • INDEPENDENT EDITORIAL ARCHIVE
          </div>
        </div>
      )}
    </header>
  );
};
