import React, { useState } from 'react';
import type { FashionCategory } from '../types/fashion';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  categories: FashionCategory[];
  onSelectCategory: (id: string) => void;
  onOpenCreateModal: () => void;
  onOpenLookbook: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  categories,
  onSelectCategory,
  onOpenCreateModal,
  onOpenLookbook,
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
                className="bg-alabaster hover:bg-white text-noir font-mono text-xs uppercase tracking-widest font-bold px-6 py-3 transition-colors flex items-center justify-center space-x-2 flex-shrink-0"
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
          <h2 className="text-3xl font-serif font-black tracking-tight uppercase text-alabaster">
            FASHION GRAVITI
          </h2>
          <p className="mt-2 text-xs font-mono text-gold tracking-widest uppercase font-bold">
            FASHION NEWS • FASHION TRENDS • CELEBRITY FASHION
          </p>
          <p className="mt-4 text-xs font-sans text-zinc-300 font-medium leading-relaxed max-w-md">
            Fashion Graviti is an independent digital fashion publication documenting runway showcases, celebrity style, luxury brands, and contemporary fashion trends.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-mono uppercase text-zinc-400">
            <span className="border border-white/10 px-2 py-1">PARIS // IVE ARR.</span>
            <span className="border border-white/10 px-2 py-1">MILAN // BRERA</span>
            <span className="border border-white/10 px-2 py-1">TOKYO // SHIBUYA</span>
            <span className="border border-white/10 px-2 py-1">ANTWERP // HET ZUID</span>
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
                <button
                  onClick={() => onSelectCategory(cat.id)}
                  className="text-zinc-400 hover:text-white transition-colors uppercase flex items-center justify-between w-full"
                >
                  <span>{cat.name}</span>
                  <span className="text-zinc-600 text-[10px]">({cat.count})</span>
                </button>
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
                className="text-zinc-400 hover:text-gold transition-colors uppercase"
              >
                Seasonal Lookbook
              </button>
            </li>
            <li>
              <button
                onClick={onOpenCreateModal}
                className="text-crimson-light hover:text-white transition-colors uppercase font-bold"
              >
                Submit Editorial
              </button>
            </li>
            <li>
              <span className="text-zinc-400 hover:text-white transition-colors uppercase cursor-pointer">
                Runway Calendar '26
              </span>
            </li>
            <li>
              <span className="text-zinc-400 hover:text-white transition-colors uppercase cursor-pointer">
                Textile Monograph
              </span>
            </li>
            <li>
              <span className="text-zinc-400 hover:text-white transition-colors uppercase cursor-pointer">
                Colophon & Ethics
              </span>
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
          <span className="hover:text-white cursor-pointer transition-colors">TERMS OF CRITIQUE</span>
          <span className="hover:text-white cursor-pointer transition-colors">ARCHIVE RIGHTS</span>
          <span className="hover:text-white cursor-pointer transition-colors">EDITORIAL INDEPENDENCE</span>
        </div>
      </div>
    </footer>
  );
};
