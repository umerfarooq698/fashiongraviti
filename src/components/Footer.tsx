import React from 'react';
import type { FashionCategory } from '../types/fashion';

interface FooterProps {
  categories: FashionCategory[];
  onSelectCategory: (id: string) => void;
  onNavigateAbout?: () => void;
  onNavigateContact?: () => void;
  onOpenCreateModal?: () => void;
  onOpenLookbook?: () => void;
  onSelectTag?: (tag: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  categories,
  onSelectCategory,
  onNavigateAbout,
  onNavigateContact,
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

  return (
    <footer className="w-full bg-noir-pure text-alabaster border-t border-white/10 pt-12 pb-12 transition-colors">
      {/* Main Footer Links Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10 pb-12">
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
          <div className="mt-4">
            <a
              href="mailto:info.fashiongraviti@gmail.com"
              className="text-xs font-mono text-gold hover:text-white transition-colors underline"
            >
              info.fashiongraviti@gmail.com
            </a>
          </div>
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
                className="text-zinc-300 hover:text-gold transition-colors uppercase font-bold cursor-pointer no-underline block"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                onClick={handleContactClick}
                className="text-zinc-300 hover:text-gold transition-colors uppercase font-bold cursor-pointer no-underline block"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                onClick={handleContactClick}
                className="text-zinc-400 hover:text-white transition-colors uppercase cursor-pointer no-underline block"
              >
                Editorial Inquiries
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                onClick={handleContactClick}
                className="text-zinc-400 hover:text-white transition-colors uppercase cursor-pointer no-underline block"
              >
                Press and Media
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                onClick={handleContactClick}
                className="text-zinc-400 hover:text-white transition-colors uppercase cursor-pointer no-underline block"
              >
                Luxury Partnerships
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12 mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-400 gap-4">
        <div>
          © 2026 FASHIONGRAVITI PUBLISHING GROUP. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center space-x-6 text-[10px]">
          <a
            href="/about-us"
            onClick={handleAboutClick}
            className="hover:text-white cursor-pointer transition-colors uppercase no-underline text-zinc-400"
          >
            EDITORIAL INDEPENDENCE
          </a>
          <a
            href="/contact-us"
            onClick={handleContactClick}
            className="hover:text-white cursor-pointer transition-colors uppercase no-underline text-zinc-400"
          >
            CONTACT DESK
          </a>
          <button 
            onClick={() => handleDepartmentClick('all')}
            className="hover:text-white cursor-pointer transition-colors uppercase"
          >
            TERMS OF CRITIQUE
          </button>
        </div>
      </div>
    </footer>
  );
};
