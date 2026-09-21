import React from 'react';
import type { FashionArticle, ViewLayoutMode } from '../types/fashion';
import { ArrowUpRight, Bookmark, Clock, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getAuthorSlug } from '../data/authors';

interface ArticleCardProps {
  article: FashionArticle;
  layoutMode: ViewLayoutMode;
  onReadArticle: (article: FashionArticle) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  onToggleLike: (articleId: string) => void;
  onSelectCategory?: (categoryId: string) => void;
  onSelectTag?: (tag: string) => void;
  onSelectAuthor?: (authorName: string) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  layoutMode,
  onReadArticle,
  isBookmarked,
  onToggleBookmark,
  onToggleLike,
  onSelectCategory,
  onSelectTag,
  onSelectAuthor,
}) => {
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleLike(article.id);
    
    // Trigger subtle stylish confetti from button position
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { x, y },
      colors: ['#8f121d', '#c59d54', '#ffffff'],
      disableForReducedMotion: true,
      ticks: 100,
    });
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleBookmark(article.id);
  };

  /* ---------------------------------------------------- */
  /* 1. COMPACT / ARCHIVE LEDGER VIEW                     */
  /* ---------------------------------------------------- */
  if (layoutMode === 'compact') {
    return (
      <div 
        onClick={() => onReadArticle(article)}
        className="group flex flex-col sm:flex-row sm:items-center justify-between p-3.5 sm:p-5 border-b-2 border-white/15 hover:bg-white/[0.06] transition-all cursor-pointer bg-noir-card active:bg-white/10 gap-3 sm:gap-4"
      >
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
          <a
            href={`/${article.slug}`}
            onClick={(e) => {
              e.preventDefault();
              onReadArticle(article);
            }}
            className="flex-shrink-0"
          >
            <img
              src={article.coverImage}
              alt={article.coverImageAlt || article.title}
              className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 object-cover object-top border-2 border-white/20 group-hover:border-gold transition-colors"
            />
          </a>
          <div className="min-w-0 flex-grow">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono uppercase text-gold font-bold mb-1">
              <a 
                href={`/${article.category}`}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onSelectCategory?.(article.category);
                }}
                className="bg-crimson hover:bg-crimson-light text-white px-2 py-0.5 font-black transition-colors no-underline text-[10px]"
              >
                {article.categoryLabel}
              </a>
              <span>•</span>
              <span className="flex items-center gap-1 text-gold font-bold">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {article.readTime}
              </span>
            </div>
            <a
              href={`/${article.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onReadArticle(article);
              }}
              className="text-base sm:text-lg md:text-xl font-serif font-black text-white group-hover:text-gold transition-colors leading-snug line-clamp-2 no-underline block"
            >
              {article.title}
            </a>
            <p className="text-xs sm:text-sm font-sans text-zinc-300 font-medium line-clamp-1 mt-0.5">
              {article.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 border-t sm:border-t-0 border-white/10 pt-2 sm:pt-0 flex-shrink-0">
          <a
            href={`/author/${getAuthorSlug(article.author.name)}`}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onSelectAuthor ? onSelectAuthor(article.author.name) : onSelectTag?.(article.author.name);
            }}
            className="text-xs font-mono text-zinc-300 hover:text-gold transition-colors no-underline truncate max-w-[140px] sm:max-w-[160px]"
          >
            By <span className="font-bold text-white">{article.author.name}</span>
          </a>

          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <button
              onClick={handleBookmark}
              className={`p-2 border-2 transition-all cursor-pointer ${
                isBookmarked 
                  ? 'bg-gold text-black border-gold' 
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
              title="Save to Vault"
            >
              <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            </button>

            <button
              onClick={handleLike}
              className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 sm:py-2 border-2 border-white/30 hover:border-crimson text-white hover:text-crimson-light text-xs font-mono font-black cursor-pointer hover:bg-crimson/10"
            >
              <Heart className="w-3.5 h-3.5 text-crimson fill-crimson" />
              <span>{article.likes}</span>
            </button>

            <a
              href={`/${article.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onReadArticle(article);
              }}
              className="p-1.5 sm:p-2 bg-white text-black font-black group-hover:bg-gold transition-colors block"
              title="Open Story"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------- */
  /* 2. MAGAZINE MULTI-COLUMN VIEW                        */
  /* ---------------------------------------------------- */
  if (layoutMode === 'magazine') {
    return (
      <article
        onClick={() => onReadArticle(article)}
        className="group relative flex flex-col justify-between bg-noir-card border-2 border-white/15 hover:border-gold transition-all duration-300 cursor-pointer overflow-hidden shadow-lg"
      >
        {/* Image Container with Luxury Overlay */}
        <a
          href={`/${article.slug}`}
          onClick={(e) => {
            e.preventDefault();
            onReadArticle(article);
          }}
          className="relative aspect-[16/9] overflow-hidden bg-black block"
        >
          <img
            src={article.coverImage}
            alt={article.coverImageAlt || article.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-card via-transparent to-transparent" />
          
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
            <span
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onSelectCategory?.(article.category);
              }}
              className="text-[10px] sm:text-xs font-mono tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 bg-black/95 text-gold font-extrabold border border-gold/40 hover:bg-gold hover:text-black transition-all inline-block"
            >
              {article.categoryLabel}
            </span>
          </div>

          <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 flex items-center space-x-1.5">
            <button
              onClick={handleBookmark}
              className={`p-1.5 sm:p-2 backdrop-blur-md transition-all cursor-pointer ${
                isBookmarked 
                  ? 'bg-gold text-black font-bold' 
                  : 'bg-black/90 text-white border border-white/30 hover:border-white'
              }`}
              title="Save to Vault"
            >
              <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            </button>
          </div>
        </a>

        {/* Content Body */}
        <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase text-zinc-300 font-bold mb-2">
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onSelectCategory?.(article.category);
                }}
                className="text-gold hover:text-white font-extrabold uppercase transition-colors"
              >
                {article.categoryLabel}
              </span>
              <span className="flex items-center gap-1 text-gold font-bold">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {article.readTime}
              </span>
            </div>

            <a
              href={`/${article.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onReadArticle(article);
              }}
              className="text-lg sm:text-xl md:text-2xl font-serif font-black text-white group-hover:text-gold transition-colors leading-tight mb-2 sm:mb-2.5 block no-underline"
            >
              {article.title}
            </a>

            <p className="text-xs sm:text-sm font-sans text-zinc-200 font-medium line-clamp-3 leading-relaxed">
              {article.subtitle}
            </p>
          </div>

          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <a
              href={`/author/${getAuthorSlug(article.author.name)}`}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onSelectAuthor ? onSelectAuthor(article.author.name) : onSelectTag?.(article.author.name);
              }}
              className="flex items-center space-x-2 text-zinc-300 hover:text-gold transition-colors no-underline group/author"
            >
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border border-gold flex-shrink-0"
              />
              <span className="truncate max-w-[120px] sm:max-w-[150px] font-bold text-[11px] sm:text-xs text-white group-hover/author:text-gold">
                {article.author.name}
              </span>
            </a>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleLike}
                className="flex items-center space-x-1 text-white hover:text-crimson-light font-bold text-xs p-1"
                title="Like Article"
              >
                <Heart className="w-3.5 h-3.5 text-crimson fill-crimson" />
                <span>{article.likes}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  /* ---------------------------------------------------- */
  /* 3. ASYMMETRIC EDITORIAL SPREAD VIEW (Default)        */
  /* ---------------------------------------------------- */
  return (
    <article
      onClick={() => onReadArticle(article)}
      className="group relative grid grid-cols-1 md:grid-cols-12 bg-noir-card border-2 border-white/15 hover:border-gold transition-all duration-300 cursor-pointer overflow-hidden shadow-xl"
    >
      {/* Image (5 cols on desktop, full width on mobile) */}
      <a
        href={`/${article.slug}`}
        onClick={(e) => {
          e.preventDefault();
          onReadArticle(article);
        }}
        className="md:col-span-5 relative aspect-[16/9] md:aspect-auto md:min-h-[280px] overflow-hidden bg-black block"
      >
        <img
          src={article.coverImage}
          alt={article.coverImageAlt || article.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-noir-card/80 via-transparent to-transparent" />
      </a>

      {/* Content Spread (7 cols on desktop) */}
      <div className="md:col-span-7 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
        <div>
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase mb-2.5 sm:mb-3">
            <span
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onSelectCategory?.(article.category);
              }}
              className="text-[10px] sm:text-xs font-mono tracking-wider uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 bg-crimson text-white font-black hover:bg-crimson-light transition-all shadow-md inline-block cursor-pointer"
            >
              {article.categoryLabel}
            </span>
            <span className="flex items-center gap-1 text-gold font-extrabold text-[11px] sm:text-xs">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          {/* Headline */}
          <a
            href={`/${article.slug}`}
            onClick={(e) => {
              e.preventDefault();
              onReadArticle(article);
            }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-black text-white group-hover:text-gold transition-colors leading-tight block no-underline"
          >
            {article.title}
          </a>

          {/* Excerpt */}
          <div className="mt-2.5 sm:mt-3.5 text-xs sm:text-sm md:text-base font-sans text-zinc-200 leading-relaxed font-semibold line-clamp-2 sm:line-clamp-3">
            {article.content.dropCapText || article.subtitle}
          </div>

          {/* Tags (Clickable Badges) */}
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {article.tags.map((tag, idx) => (
              <button 
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onSelectTag?.(tag);
                }}
                className="text-[10px] sm:text-xs font-mono font-bold uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 bg-black text-zinc-300 hover:text-gold hover:border-gold border border-white/20 transition-colors inline-block cursor-pointer"
                title={`Explore #${tag}`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Details Bar */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <a
            href={`/author/${getAuthorSlug(article.author.name)}`}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onSelectAuthor ? onSelectAuthor(article.author.name) : onSelectTag?.(article.author.name);
            }}
            className="flex items-center space-x-2.5 sm:space-x-3.5 no-underline group/author"
            title={`View ${article.author.name}'s profile`}
          >
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gold group-hover/author:border-white transition-colors flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="text-xs font-mono text-white group-hover/author:text-gold font-extrabold uppercase tracking-wider transition-colors truncate">
                {article.author.name}
              </p>
              <p className="text-[10px] sm:text-xs text-zinc-300 font-medium truncate">
                {article.author.role}
              </p>
            </div>
          </a>

          <div className="flex items-center justify-between sm:justify-end space-x-2 sm:space-x-2.5 flex-shrink-0">
            <div className="flex items-center space-x-1.5">
              <button
                onClick={handleBookmark}
                className={`p-2 sm:p-2.5 border-2 transition-all cursor-pointer ${
                  isBookmarked 
                    ? 'bg-gold text-black border-gold' 
                    : 'border-white/30 text-white hover:border-white hover:bg-white/10'
                }`}
                title="Save to Vault"
              >
                <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              </button>

              <button
                onClick={handleLike}
                className="flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 border-2 border-white/30 hover:border-crimson text-white hover:text-crimson-light text-xs font-mono font-black transition-colors cursor-pointer hover:bg-crimson/10"
              >
                <Heart className="w-3.5 h-3.5 text-crimson fill-crimson" />
                <span>{article.likes}</span>
              </button>
            </div>

            <a
              href={`/${article.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onReadArticle(article);
              }}
              className="flex items-center space-x-1.5 bg-white group-hover:bg-gold text-black px-3.5 sm:px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors font-black shadow-md no-underline"
            >
              <span>Read Article</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
