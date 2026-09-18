import React, { useState } from 'react';
import { LOOKBOOK_ITEMS } from '../data/initialArticles';
import type { LookbookItem } from '../types/fashion';
import { X, Compass, Eye } from 'lucide-react';

interface LookbookDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LookbookDrawer: React.FC<LookbookDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedLook, setSelectedLook] = useState<LookbookItem | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end">
      {/* Slide-over panel */}
      <div className="w-full max-w-2xl bg-noir border-l border-white/10 text-alabaster h-full overflow-y-auto flex flex-col shadow-2xl animate-slideInRight">
        {/* Drawer Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-noir-card sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <Compass className="w-5 h-5 text-gold" />
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest font-bold text-alabaster">
                FASHIONGRAVITI LOOKBOOK ARCHIVE
              </h2>
              <p className="text-[11px] text-zinc-400 font-mono">
                SEASONAL SILHOUETTES & RUNWAY ATELIER SPECIFICATIONS
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Look Spotlight Modal if open */}
        {selectedLook && (
          <div className="p-6 bg-noir-card border-b border-white/10 animate-fadeIn">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-mono text-gold uppercase tracking-widest">
                INSPECTION // {selectedLook.season}
              </span>
              <button 
                onClick={() => setSelectedLook(null)}
                className="text-xs font-mono text-zinc-400 hover:text-white"
              >
                Close Spotlight
              </button>
            </div>
            
            <div className="aspect-[16/10] overflow-hidden border border-white/10 mb-4 bg-black">
              <img
                src={selectedLook.image}
                alt={selectedLook.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-serif font-bold text-alabaster">
              {selectedLook.title}
            </h3>
            <p className="text-xs font-mono text-crimson-light uppercase mt-1">
              {selectedLook.designer}
            </p>

            <p className="text-sm font-sans text-zinc-300 font-light mt-3 leading-relaxed">
              {selectedLook.details}
            </p>

            <div className="mt-4 p-3 bg-noir border border-white/10 text-xs font-mono">
              <span className="text-zinc-500 block mb-1">MATERIAL FABRICATION:</span>
              <span className="text-zinc-200">{selectedLook.fabrication}</span>
            </div>
          </div>
        )}

        {/* Lookbook Items Grid */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
          {LOOKBOOK_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedLook(item)}
              className="group cursor-pointer bg-noir-card border border-white/10 hover:border-gold/50 transition-all p-3"
            >
              <div className="aspect-[3/4] overflow-hidden bg-noir border border-white/5 relative mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute top-2 right-2 p-1 bg-noir/80 text-white rounded-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>

              <span className="text-[9px] font-mono text-gold uppercase tracking-wider block">
                {item.season}
              </span>
              <h4 className="text-sm font-serif font-bold text-alabaster group-hover:text-gold transition-colors mt-0.5 line-clamp-1">
                {item.title}
              </h4>
              <p className="text-[11px] font-mono text-zinc-400 uppercase truncate mt-0.5">
                {item.designer}
              </p>

              <div className="mt-2 pt-2 border-t border-white/5 flex flex-wrap gap-1">
                {item.tags.map((t, idx) => (
                  <span key={idx} className="text-[9px] font-mono uppercase text-zinc-400 bg-white/5 px-1.5 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lookbook Footer */}
        <div className="p-6 border-t border-white/10 bg-noir-card text-center text-xs font-mono text-zinc-400">
          Curated by Fashiongraviti Archives © 2026. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
