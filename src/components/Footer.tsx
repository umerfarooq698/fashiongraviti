import React from 'react';
import type { FashionCategory } from '../types/fashion';

interface FooterProps {
  categories: FashionCategory[];
  onSelectCategory: (id: string) => void;
  onOpenCreateModal?: () => void;
  onOpenLookbook?: () => void;
  onSelectTag?: (tag: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  categories,
  onSelectCategory,
}) => {
  const handleDepartmentClick = (catId: string) => {
    onSelectCategory(catId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-noir-pure text-alabaster border-t border-white/10 pt-12 pb-12 transition-colors">
      {/* Main Footer Links Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-12">
        {/* Brand & Mission Statement (7 cols) */}
        <div className="md:col-span-7 lg:col-span-8">
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
          <p className="mt-4 text-xs font-sans text-zinc-300 font-medium leading-relaxed max-w-lg">
            Fashion Graviti is an independent digital fashion publication documenting runway showcases, celebrity style, luxury brands, and contemporary fashion trends.
          </p>
        </div>

        {/* Departments Sitemap (5 cols) */}
        <div className="md:col-span-5 lg:col-span-4">
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
