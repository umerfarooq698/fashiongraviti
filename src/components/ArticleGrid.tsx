import React, { useState, useEffect } from 'react';
import type { FashionArticle, ViewLayoutMode } from '../types/fashion';
import { ArticleCard } from './ArticleCard';
import { Sparkles, RefreshCcw, ChevronDown } from 'lucide-react';

interface ArticleGridProps {
  articles: FashionArticle[];
  layoutMode: ViewLayoutMode;
  onReadArticle: (article: FashionArticle) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (articleId: string) => void;
  onToggleLike: (articleId: string) => void;
  onResetFilters: () => void;
  onSelectCategory?: (categoryId: string) => void;
  onSelectTag?: (tag: string) => void;
  onSelectAuthor?: (authorName: string) => void;
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles,
  layoutMode,
  onReadArticle,
  bookmarkedIds,
  onToggleBookmark,
  onToggleLike,
  onResetFilters,
  onSelectCategory,
  onSelectTag,
  onSelectAuthor,
}) => {
  const [visibleCount, setVisibleCount] = useState(10);

  // Reset to initial 10 articles whenever articles prop changes (category, mood, or search filter)
  useEffect(() => {
    setVisibleCount(10);
  }, [articles]);

  if (articles.length === 0) {
    return (
      <div className="w-full py-20 px-4 text-center border-b border-white/10 bg-noir-card">
        <Sparkles className="w-8 h-8 text-gold mx-auto mb-4 animate-pulse-slow" />
        <h3 className="text-2xl font-serif font-bold text-alabaster mb-2">
          No Curations Found in This Vault
        </h3>
        <p className="text-zinc-400 font-sans text-sm max-w-md mx-auto mb-6 font-light">
          "Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening."
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center space-x-2 px-4 py-2 border border-white/20 hover:border-gold text-alabaster font-mono text-xs uppercase tracking-widest transition-colors"
        >
          <RefreshCcw className="w-3.5 h-3.5 mr-1 text-gold" />
          <span>Reset All Department and Aesthetic Filters</span>
        </button>
      </div>
    );
  }

  const displayedArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  /* ---------------------------------------------------- */
  /* Render according to layout mode                      */
  /* ---------------------------------------------------- */
  return (
    <section className="w-full px-4 lg:px-12 py-10 bg-noir">
      {layoutMode === 'compact' ? (
        <div className="border-t border-white/10">
          {displayedArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              layoutMode="compact"
              onReadArticle={onReadArticle}
              isBookmarked={bookmarkedIds.includes(article.id)}
              onToggleBookmark={onToggleBookmark}
              onToggleLike={onToggleLike}
              onSelectCategory={onSelectCategory}
              onSelectTag={onSelectTag}
              onSelectAuthor={onSelectAuthor}
            />
          ))}
        </div>
      ) : layoutMode === 'magazine' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              layoutMode="magazine"
              onReadArticle={onReadArticle}
              isBookmarked={bookmarkedIds.includes(article.id)}
              onToggleBookmark={onToggleBookmark}
              onToggleLike={onToggleLike}
              onSelectCategory={onSelectCategory}
              onSelectTag={onSelectTag}
              onSelectAuthor={onSelectAuthor}
            />
          ))}
        </div>
      ) : (
        /* Asymmetric Editorial Spread Layout */
        <div className="space-y-8">
          {displayedArticles.map((article, idx) => (
            <React.Fragment key={article.id}>
              <ArticleCard
                article={article}
                layoutMode="editorial"
                onReadArticle={onReadArticle}
                isBookmarked={bookmarkedIds.includes(article.id)}
                onToggleBookmark={onToggleBookmark}
                onToggleLike={onToggleLike}
                onSelectCategory={onSelectCategory}
                onSelectTag={onSelectTag}
                onSelectAuthor={onSelectAuthor}
              />

              {/* Intermittent Editorial Quotation Break (after 3rd article) */}
              {idx === 2 && (
                <div className="my-10 p-8 md:p-12 border-y border-white/10 bg-noir-card text-center relative overflow-hidden">
                  <span className="text-[10px] font-mono tracking-mega-wide uppercase text-gold block mb-3">
                    CURATOR'S SARTORIAL MANIFESTO // VOL. 08
                  </span>
                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-editorial italic text-alabaster max-w-3xl mx-auto leading-relaxed">
                    "Style is a language spoken before the voice is ever heard. To craft a silhouette is to sculpt human presence in three-dimensional time."
                  </blockquote>
                  <cite className="block mt-4 text-xs font-mono uppercase tracking-widest text-zinc-400 not-italic">
                    By{' '}
                    <a
                      href="/author/aurelia-vance-sterling"
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectAuthor?.('Aurelia Vance-Sterling');
                      }}
                      className="text-gold hover:underline cursor-pointer"
                      title="View Aurelia Vance-Sterling's author profile"
                    >
                      Aurelia Vance-Sterling
                    </a>
                    , Editor-in-Chief
                  </cite>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Editorial Load More Action */}
      {hasMore && (
        <div className="mt-14 pt-8 pb-4 text-center border-t border-white/10 flex flex-col items-center">
          <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mb-4">
            Viewing {displayedArticles.length} of {articles.length} Editorial Stories
          </p>
          <button
            onClick={handleLoadMore}
            className="group relative inline-flex items-center space-x-3 px-8 py-3.5 bg-black border border-white/20 hover:border-gold text-white font-mono text-xs uppercase tracking-[0.25em] transition-all duration-300 hover:shadow-[0_0_25px_rgba(197,157,84,0.2)] active:scale-95"
          >
            <span className="relative z-10 group-hover:text-gold transition-colors font-medium">
              Load More Stories
            </span>
            <ChevronDown className="w-4 h-4 text-gold group-hover:translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      )}

      {!hasMore && articles.length > 10 && (
        <div className="mt-14 pt-8 pb-4 text-center border-t border-white/10">
          <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
            All {articles.length} Editorial Stories Displayed
          </p>
        </div>
      )}
    </section>
  );
};
