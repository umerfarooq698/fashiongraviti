import React from 'react';
import type { FashionArticle } from '../types/fashion';
import { X, Bookmark, Trash2, Clock } from 'lucide-react';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedArticles: FashionArticle[];
  onReadArticle: (article: FashionArticle) => void;
  onRemoveBookmark: (articleId: string) => void;
  onClearAll: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedArticles,
  onReadArticle,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end">
      <div className="w-full max-w-md bg-noir border-l border-white/10 text-alabaster h-full overflow-y-auto flex flex-col shadow-2xl animate-slideInRight">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-noir-card sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <Bookmark className="w-5 h-5 text-gold" />
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest font-bold text-alabaster">
                SAVED SARTORIAL VAULT
              </h2>
              <p className="text-[11px] text-zinc-400 font-mono">
                {bookmarkedArticles.length} {bookmarkedArticles.length === 1 ? 'ESSAY' : 'ESSAYS'} ARCHIVED
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

        {/* Content list */}
        <div className="p-6 flex-grow space-y-4">
          {bookmarkedArticles.length === 0 ? (
            <div className="text-center py-20 text-zinc-500">
              <Bookmark className="w-8 h-8 mx-auto mb-3 opacity-30" />
              <p className="font-serif text-lg text-zinc-400">Your Vault is Empty</p>
              <p className="font-sans text-xs mt-1 max-w-xs mx-auto">
                Click the bookmark icon on any article or cover story to save it for offline contemplation.
              </p>
            </div>
          ) : (
            bookmarkedArticles.map((article) => (
              <div
                key={article.id}
                className="group relative bg-noir-card border border-white/10 hover:border-white/30 p-3.5 flex gap-3 transition-all cursor-pointer"
                onClick={() => {
                  onReadArticle(article);
                  onClose();
                }}
              >
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-20 h-20 object-cover flex-shrink-0 border border-white/10"
                />

                <div className="flex flex-col justify-between flex-grow min-w-0">
                  <div>
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 uppercase">
                      <span className="text-gold">{article.categoryLabel}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h4 className="text-xs font-serif font-bold text-alabaster group-hover:text-gold transition-colors line-clamp-2 mt-1">
                      {article.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase truncate">
                      {article.author.name}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveBookmark(article.id);
                      }}
                      className="text-zinc-500 hover:text-crimson-light p-1 transition-colors"
                      title="Remove from vault"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {bookmarkedArticles.length > 0 && (
          <div className="p-4 border-t border-white/10 bg-noir-card flex items-center justify-between">
            <button
              onClick={onClearAll}
              className="text-xs font-mono text-zinc-500 hover:text-crimson transition-colors uppercase"
            >
              Clear Entire Vault
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-alabaster text-noir font-mono text-xs uppercase font-bold"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
