import React from 'react';
import type { FashionCategory } from '../types/fashion';

interface FooterProps {
  categories: FashionCategory[];
  onSelectCategory: (id: string) => void;
  onNavigateAbout?: () => void;
  onNavigateContact?: () => void;
  onNavigatePrivacy?: () => void;
  onNavigateTerms?: () => void;
  onOpenCreateModal?: () => void;
  onOpenLookbook?: () => void;
  onSelectTag?: (tag: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  categories,
  onSelectCategory,
  onNavigateAbout,
  onNavigateContact,
  onNavigatePrivacy,
  onNavigateTerms,
  onOpenLookbook,
}) => {
  const handleDepartmentClick = (catId: string) => {
    onSelectCategory(catId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateAbout) {
      onNavigateAbout();
    } else {
      window.history.pushState({}, '', '/about-us');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      window.history.pushState({}, '', '/contact-us');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigatePrivacy) {
      onNavigatePrivacy();
    } else {
      window.history.pushState({}, '', '/privacy-policy');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateTerms) {
      onNavigateTerms();
    } else {
      window.history.pushState({}, '', '/terms-and-conditions');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-noir-pure text-alabaster border-t border-white/10 pt-12 pb-12 transition-colors">
      {/* Main Footer Links Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10 pb-12">
        {/* Brand and Mission Statement (5 cols) */}
        <div className="lg:col-span-5">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleDepartmentClick('all');
            }}
            className="text-3xl font-mono font-black tracking-tight uppercase text-alabaster hover:text-gold transition-colors cursor-pointer no-underline block"
          >
            FASHION GRAVITI
          </a>
          <p className="mt-2 text-xs font-mono text-gold tracking-widest uppercase font-bold flex flex-wrap items-center gap-1.5">
            <a
              href="/fashion-news"
              onClick={(e) => {
                e.preventDefault();
                handleDepartmentClick('fashion-news');
              }}
              className="hover:text-white transition-colors no-underline cursor-pointer"
            >
              FASHION NEWS
            </a>
            <span>•</span>
            <a
              href="/fashion-trends"
              onClick={(e) => {
                e.preventDefault();
                handleDepartmentClick('fashion-trends');
              }}
              className="hover:text-white transition-colors no-underline cursor-pointer"
            >
              FASHION TRENDS
            </a>
            <span>•</span>
            <a
              href="/celebrity"
              onClick={(e) => {
                e.preventDefault();
                handleDepartmentClick('celebrity');
              }}
              className="hover:text-white transition-colors no-underline cursor-pointer"
            >
              CELEBRITY FASHION
            </a>
          </p>
          <p className="mt-4 text-xs font-mono text-zinc-400 leading-relaxed max-w-md uppercase">
            Fashion Graviti is an independent digital fashion publication documenting runway showcases, celebrity style, luxury brands, and contemporary fashion trends.
          </p>
        </div>

        {/* Departments Sitemap (4 cols) */}
        <div className="lg:col-span-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold mb-4">
            DEPARTMENTS
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-mono">
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

        {/* Company / Pages (3 cols) */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold mb-4">
            COMPANY AND EDITORIAL
          </h4>
          <ul className="space-y-2.5 text-xs font-mono">
            <li>
              <a
                href="/about-us"
                onClick={handleAboutClick}
                className="text-zinc-400 hover:text-gold transition-colors uppercase font-bold cursor-pointer no-underline block"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                onClick={handleContactClick}
                className="text-zinc-400 hover:text-gold transition-colors uppercase font-bold cursor-pointer no-underline block"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                onClick={handlePrivacyClick}
                className="text-zinc-400 hover:text-gold transition-colors uppercase font-bold cursor-pointer no-underline block"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-and-conditions"
                onClick={handleTermsClick}
                className="text-zinc-400 hover:text-gold transition-colors uppercase font-bold cursor-pointer no-underline block"
              >
                Terms and Conditions
              </a>
            </li>
            {onOpenLookbook && (
              <li>
                <button
                  onClick={onOpenLookbook}
                  className="text-zinc-400 hover:text-gold transition-colors uppercase font-bold cursor-pointer text-left font-mono text-xs block"
                >
                  Lookbook Archive
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Bottom Legal and Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12 mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-400 gap-4">
        <div>
          © 2026 FASHIONGRAVITI PUBLISHING GROUP. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};
