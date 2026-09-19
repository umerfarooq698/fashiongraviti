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
        className="group flex flex-col md:flex-row md:items-center justify-between p-4 sm:p-5 border-b-2 border-white/15 hover:bg-white/[0.06] transition-all cursor-pointer bg-noir-card active:bg-white/10"
      >
        <div className="flex items-start sm:items-center gap-4">
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
              alt={article.title}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover border-2 border-white/20 group-hover:border-gold transition-colors"
            />
          </a>
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase text-gold font-bold mb-1">
              <a 
                href={`/${article.category}`}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onSelectCategory?.(article.category);
                }}
                className="bg-crimson hover:bg-crimson-light text-white px-2 py-0.5 font-black transition-colors no-underline"
              >
                {article.categoryLabel}
              </a>
              <span>•</span>
              <span className="flex items-center gap-1 text-gold font-bold">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
            <a
              href={`/${article.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onReadArticle(article);
              }}
              className="text-lg sm:text-xl font-serif font-black text-white group-hover:text-gold transition-colors line-clamp-1 no-underline block"
            >
              {article.title}
            </a>
            <p className="text-sm text-zinc-200 line-clamp-1 font-medium mt-1">
              {article.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-4 mt-3 md:mt-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
          <div className="text-right hidden sm:block">
            <a
              href={`/author/${getAuthorSlug(article.author.name)}`}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onSelectAuthor ? onSelectAuthor(article.author.name) : onSelectTag?.(article.author.name);
              }}
              className="text-xs font-mono text-white hover:text-gold font-bold uppercase transition-colors no-underline block"
              title={`View ${article.author.name}'s profile`}
            >
              {article.author.name}
            </a>
            <p className="text-xs text-zinc-300 font-medium">{article.publishedAt}</p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleBookmark}
              className={`p-2 border-2 transition-all cursor-pointer ${
                isBookmarked 
                  ? 'bg-gold text-black border-gold' 
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
              title="Save to Vault"
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>

            <button
              onClick={handleLike}
              className="flex items-center space-x-1.5 px-3 py-2 border-2 border-white/30 hover:border-crimson text-white hover:text-crimson-light text-xs font-mono font-black cursor-pointer hover:bg-crimson/10"
            >
              <Heart className="w-4 h-4 text-crimson fill-crimson" />
              <span>{article.likes}</span>
            </button>

            <a
              href={`/${article.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onReadArticle(article);
              }}
              className="p-2 bg-white text-black font-black group-hover:bg-gold transition-colors block"
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
  /* 2. MAGAZINE 3-COLUMN VIEW                            */
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
          className="relative aspect-[4/3] overflow-hidden bg-black block"
        >
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-card via-transparent to-transparent" />
          
          <div className="absolute top-3 left-3">
            <span
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onSelectCategory?.(article.category);
              }}
              className="text-xs font-mono tracking-wider uppercase px-2.5 py-1 bg-black/95 text-gold font-extrabold border border-gold/40 hover:bg-gold hover:text-black transition-all inline-block"
            >
              {article.categoryLabel}
            </span>
          </div>

          <div className="absolute top-3 right-3 flex items-center space-x-1.5">
            <button
              onClick={handleBookmark}
              className={`p-2 backdrop-blur-md transition-all cursor-pointer ${
                isBookmarked 
                  ? 'bg-gold text-black font-bold' 
                  : 'bg-black/90 text-white border border-white/30 hover:border-white'
              }`}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>
          </div>
        </a>

        {/* Content Body */}
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <div className="flex items-center justify-end text-xs font-mono uppercase text-zinc-300 font-bold mb-2">
              <span className="flex items-center gap-1 text-gold font-bold">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <a
              href={`/${article.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onReadArticle(article);
              }}
              className="text-xl sm:text-2xl font-serif font-black text-white group-hover:text-gold transition-colors leading-tight mb-2.5 block no-underline"
            >
              {article.title}
            </a>

            <p className="text-sm font-sans text-zinc-200 font-medium line-clamp-3 leading-relaxed">
              {article.subtitle}
            </p>
          </div>

          {/* Bottom Card Footer */}
          <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between">
            <a
              href={`/author/${getAuthorSlug(article.author.name)}`}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onSelectAuthor ? onSelectAuthor(article.author.name) : onSelectTag?.(article.author.name);
              }}
              className="flex items-center space-x-3 no-underline group/author"
              title={`View ${article.author.name}'s profile`}
            >
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-gold group-hover/author:border-white transition-colors"
              />
              <span className="text-xs font-mono text-white group-hover/author:text-gold font-bold uppercase tracking-wider transition-colors">
                {article.author.name}
              </span>
            </a>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleLike}
                className="flex items-center space-x-1 text-xs font-mono text-white font-bold hover:text-crimson transition-colors p-1"
              >
                <Heart className="w-4 h-4 text-crimson fill-crimson" />
                <span>{article.likes}</span>
              </button>
              <a
                href={`/${article.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onReadArticle(article);
                }}
                className="text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform inline-block"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
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
      {/* Image (5 cols) */}
      <a
        href={`/${article.slug}`}
        onClick={(e) => {
          e.preventDefault();
          onReadArticle(article);
        }}
        className="md:col-span-5 relative min-h-[280px] md:min-h-[360px] overflow-hidden bg-black block"
      >
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-noir-card/80 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onSelectCategory?.(article.category);
            }}
            className="text-xs font-mono tracking-wider uppercase px-3 py-1 bg-black/95 text-gold font-black border border-gold/40 hover:bg-gold hover:text-black transition-all shadow-md inline-block"
          >
            {article.categoryLabel}
          </span>
        </div>
      </a>

      {/* Content Spread (7 cols) */}
      <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          {/* Metadata Row */}
          <div className="flex items-center justify-end gap-2 text-xs font-mono uppercase mb-3">
            <span className="flex items-center gap-1 text-gold font-extrabold">
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
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-white group-hover:text-gold transition-colors leading-tight block no-underline"
          >
            {article.title}
          </a>

          {/* First Sentence Excerpt */}
          <div className="mt-3.5 text-sm sm:text-base font-sans text-zinc-200 leading-relaxed font-semibold line-clamp-3">
            {article.content.dropCapText || article.subtitle}
          </div>

          {/* Tags (Clickable) */}
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag, idx) => (
              <a 
                key={idx}
                href={`?search=${encodeURIComponent(tag)}`}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onSelectTag?.(tag);
                }}
                className="text-xs font-mono font-bold uppercase px-2.5 py-1 bg-black text-white hover:bg-gold hover:text-black border border-white/20 transition-all cursor-pointer no-underline inline-block"
                title={`Filter articles by #${tag}`}
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Details Bar */}
        <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
          <a
            href={`/author/${getAuthorSlug(article.author.name)}`}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onSelectAuthor ? onSelectAuthor(article.author.name) : onSelectTag?.(article.author.name);
            }}
            className="flex items-center space-x-3.5 no-underline group/author"
            title={`View ${article.author.name}'s profile`}
          >
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-gold group-hover/author:border-white transition-colors"
            />
            <div>
              <p className="text-xs font-mono text-white group-hover/author:text-gold font-extrabold uppercase tracking-wider transition-colors">
                {article.author.name}
              </p>
              <p className="text-xs text-zinc-300 font-medium">
                {article.author.role}
              </p>
            </div>
          </a>

          <div className="flex items-center space-x-2.5">
            <button
              onClick={handleBookmark}
              className={`p-2.5 border-2 transition-all cursor-pointer ${
                isBookmarked 
                  ? 'bg-gold text-black border-gold' 
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
              title="Save to Vault"
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>

            <button
              onClick={handleLike}
              className="flex items-center space-x-1.5 px-3 py-2 border-2 border-white/30 hover:border-crimson text-white hover:text-crimson-light text-xs font-mono font-black transition-colors cursor-pointer hover:bg-crimson/10"
            >
              <Heart className="w-4 h-4 text-crimson fill-crimson" />
              <span>{article.likes}</span>
            </button>

            <a
              href={`/${article.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onReadArticle(article);
              }}
              className="flex items-center space-x-1.5 bg-white group-hover:bg-gold text-black px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors font-black shadow-md no-underline"
            >
              <span>Read Article</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
