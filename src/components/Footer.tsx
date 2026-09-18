import React, { useState } from 'react';
import type { FashionCategory } from '../types/fashion';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  categories: FashionCategory[];
  onSelectCategory: (id: string) => void;
  onOpenCreateModal: () => void;
  onOpenLookbook: () => void;
  onSelectTag?: (tag: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  categories,
  onSelectCategory,
  onOpenCreateModal,
  onOpenLookbook,
  onSelectTag,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const handleDepartmentClick = (catId: string) => {
    onSelectCategory(catId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTagClick = (tag: string) => {
    onSelectTag?.(tag);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-noir-pure text-alabaster border-t border-white/10 pt-16 pb-12 transition-colors">
      {/* Newsletter Dispatch Marquee Box */}
      <div className="max-w-6xl mx-auto px-4 lg:px-12 mb-16">
        <div className="p-8 sm:p-12 bg-noir-card border border-white/10 relative overflow-hidden">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase text-gold tracking-widest mb-3">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>THE GRAVITI DISPATCH // PRINT & DIGITAL</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-alabaster leading-tight">
              Receive the Avant-Garde Sartorial Intelligence
            </h3>
            <p className="mt-3 text-sm text-zinc-400 font-sans font-light leading-relaxed">
              Every Sunday at 08:00 CET: In-depth runway critique, undisclosed archive auctions, biomaterial developments, and atelier monographs directly from Paris and Tokyo.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your confidential email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-noir border border-white/20 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold font-mono flex-grow"
              />
              <button
                type="submit"
                className="bg-alabaster hover:bg-white text-noir font-mono text-xs uppercase tracking-widest font-bold px-6 py-3 transition-colors flex items-center justify-center space-x-2 flex-shrink-0 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4 text-green-700" />
                    <span>ENROLLED</span>
                  </>
                ) : (
                  <>
                    <span>ENROLL DISPATCH</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Colophon Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10 pb-16">
        {/* Brand & Mission Statement (5 cols) */}
        <div className="lg:col-span-5">
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleDepartmentClick('all');
            }}
            className="text-3xl font-serif font-black tracking-tight uppercase text-alabaster hover:text-gold transition-colors cursor-pointer no-underline block"
          >
            FASHION GRAVITI
          </a>
          <p className="mt-2 text-xs font-mono text-gold tracking-widest uppercase font-bold">
            FASHION NEWS • FASHION TRENDS • CELEBRITY FASHION
          </p>
          <p className="mt-4 text-xs font-sans text-zinc-300 font-medium leading-relaxed max-w-md">
            Fashion Graviti is an independent digital fashion publication documenting runway showcases, celebrity style, luxury brands, and contemporary fashion trends.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-mono uppercase text-zinc-400">
            <a 
              href="?search=Paris"
              onClick={(e) => {
                e.preventDefault();
                handleTagClick('Paris');
              }}
              className="border border-white/15 hover:border-gold hover:text-white px-2.5 py-1 transition-colors cursor-pointer no-underline"
            >
              PARIS // IVE ARR.
            </a>
            <a 
              href="?search=Milan"
              onClick={(e) => {
                e.preventDefault();
                handleTagClick('Milan');
              }}
              className="border border-white/15 hover:border-gold hover:text-white px-2.5 py-1 transition-colors cursor-pointer no-underline"
            >
              MILAN // BRERA
            </a>
            <a 
              href="?search=Tokyo"
              onClick={(e) => {
                e.preventDefault();
                handleTagClick('Tokyo');
              }}
              className="border border-white/15 hover:border-gold hover:text-white px-2.5 py-1 transition-colors cursor-pointer no-underline"
            >
              TOKYO // SHIBUYA
            </a>
            <a 
              href="?search=Antwerp"
              onClick={(e) => {
                e.preventDefault();
                handleTagClick('Antwerp');
              }}
              className="border border-white/15 hover:border-gold hover:text-white px-2.5 py-1 transition-colors cursor-pointer no-underline"
            >
              ANTWERP // HET ZUID
            </a>
          </div>
        </div>

        {/* Departments Sitemap (3 cols) */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold mb-4">
            DEPARTMENTS
          </h4>
          <ul className="space-y-2.5 text-xs font-mono">
            {categories.map((cat) => (
              <li key={cat.id}>
                <a
                  href={cat.id === 'all' ? '/' : `/${cat.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleDepartmentClick(cat.id);
                  }}
                  className="text-zinc-400 hover:text-gold transition-colors uppercase font-bold cursor-pointer no-underline block"
                >
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive Features & Studio (2 cols) */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold mb-4">
            ARCHIVE HUBS
          </h4>
          <ul className="space-y-2.5 text-xs font-mono">
            <li>
              <button
                onClick={onOpenLookbook}
                className="text-zinc-400 hover:text-gold transition-colors uppercase cursor-pointer"
              >
                Seasonal Lookbook
              </button>
            </li>
            <li>
              <button
                onClick={onOpenCreateModal}
                className="text-crimson-light hover:text-white transition-colors uppercase font-bold cursor-pointer"
              >
                Submit Editorial
              </button>
            </li>
            <li>
              <a 
                href="?search=Runway"
                onClick={(e) => {
                  e.preventDefault();
                  handleTagClick('Runway');
                }}
                className="text-zinc-400 hover:text-white transition-colors uppercase cursor-pointer text-left no-underline block"
              >
                Runway Calendar '26
              </a>
            </li>
            <li>
              <a 
                href="?search=Haute%20Couture"
                onClick={(e) => {
                  e.preventDefault();
                  handleTagClick('Haute Couture');
                }}
                className="text-zinc-400 hover:text-white transition-colors uppercase cursor-pointer text-left no-underline block"
              >
                Textile Monograph
              </a>
            </li>
            <li>
              <a 
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleDepartmentClick('all');
                }}
                className="text-zinc-400 hover:text-white transition-colors uppercase cursor-pointer text-left no-underline block"
              >
                Colophon & Heritage
              </a>
            </li>
          </ul>
        </div>

        {/* Colophon & Print Edition (2 cols) */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold mb-4">
            EDITION
          </h4>
          <p className="text-xs font-mono text-zinc-400 leading-relaxed">
            VOLUME VIII<br />
            PRINT ISSN: 2819-4821<br />
            FREQUENCY: BIANNUAL<br />
            TYPESET: PLAYFAIR & CORMORANT
          </p>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12 mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-400 gap-4">
        <div>
          © 2026 FASHIONGRAVITI PUBLISHING GROUP. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center space-x-6 text-[10px]">
          <button 
            onClick={() => handleDepartmentClick('all')}
            className="hover:text-white cursor-pointer transition-colors uppercase"
          >
            TERMS OF CRITIQUE
          </button>
          <button 
            onClick={() => handleDepartmentClick('all')}
            className="hover:text-white cursor-pointer transition-colors uppercase"
          >
            ARCHIVE RIGHTS
          </button>
          <button 
            onClick={() => handleDepartmentClick('all')}
            className="hover:text-white cursor-pointer transition-colors uppercase"
          >
            EDITORIAL INDEPENDENCE
          </button>
        </div>
      </div>
    </footer>
  );
};
