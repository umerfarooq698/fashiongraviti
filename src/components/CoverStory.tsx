import React from 'react';
import type { FashionArticle } from '../types/fashion';
import { ArrowUpRight, Bookmark, Clock, Heart, Sparkles } from 'lucide-react';
import { getAuthorSlug } from '../data/authors';

interface CoverStoryProps {
  article: FashionArticle;
  onReadArticle: (article: FashionArticle) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  onToggleLike: (articleId: string) => void;
  onSelectTag?: (tag: string) => void;
  onSelectCategory?: (categoryId: string) => void;
  onSelectAuthor?: (authorName: string) => void;
}

export const CoverStory: React.FC<CoverStoryProps> = ({
  article,
  onReadArticle,
  isBookmarked,
  onToggleBookmark,
  onToggleLike,
  onSelectTag,
  onSelectCategory,
  onSelectAuthor,
}) => {
  return (
    <section className="relative w-full border-b-2 border-white/20 overflow-hidden bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px]">
        {/* Left Column: Bold Headline & Excerpt (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r-2 border-white/20 z-10 bg-noir-card">
          <div>
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-widest uppercase mb-4">
              <a 
                href={`/${article.category}`}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onSelectCategory?.(article.category);
                }}
                className="bg-crimson hover:bg-crimson-light px-3 py-1 text-white font-black flex items-center gap-1.5 shadow-md cursor-pointer transition-colors no-underline"
                title={`Filter by ${article.categoryLabel}`}
              >
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                {article.categoryLabel}
              </a>
            </div>

            {/* Title */}
            <a 
              href={`/${article.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onReadArticle(article);
              }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white leading-[1.12] tracking-tight hover:text-gold transition-colors cursor-pointer drop-shadow-sm block no-underline"
            >
              {article.title}
            </a>

            {/* Subtitle / Excerpt */}
            <p className="mt-4 text-base sm:text-lg font-sans text-zinc-100 leading-relaxed font-medium">
              {article.subtitle}
            </p>

            {/* Tags (Clickable Badges) */}
            <div className="mt-6 flex flex-wrap gap-2">
              {article.tags.map((tag, idx) => (
                <button 
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onSelectTag?.(tag);
                  }}
                  className="text-xs font-mono font-bold uppercase px-3 py-1 bg-black text-zinc-300 hover:text-gold hover:border-gold border border-white/20 transition-colors inline-block cursor-pointer"
                  title={`Explore #${tag}`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Bar: Author info & Read button */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
            <a 
              href={`/author/${getAuthorSlug(article.author.name)}`}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onSelectAuthor ? onSelectAuthor(article.author.name) : onSelectTag?.(article.author.name);
              }}
              className="flex items-center space-x-3.5 cursor-pointer group no-underline"
              title={`View ${article.author.name}'s profile and curations`}
            >
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-gold group-hover:scale-105 transition-transform"
              />
              <div>
                <p className="text-sm font-mono font-bold text-white group-hover:text-gold transition-colors tracking-wider uppercase">
                  {article.author.name}
                </p>
                <p className="text-xs text-zinc-300 font-medium">
                  {article.author.role} • {article.publishedAt}
                </p>
              </div>
            </a>

            <div className="flex items-center space-x-3">
              {/* Bookmark */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(article.id);
                }}
                className={`p-2.5 border-2 transition-all cursor-pointer ${
                  isBookmarked
                    ? 'bg-gold text-black border-gold'
                    : 'border-white/30 text-white hover:border-white hover:bg-white/10'
                }`}
                title={isBookmarked ? 'Remove from Saved' : 'Save Cover Story'}
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>

              {/* Like */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleLike(article.id);
                }}
                className="flex items-center space-x-1.5 px-3 py-2 border-2 border-white/30 hover:border-crimson text-white hover:text-crimson-light transition-all text-xs font-mono font-extrabold cursor-pointer hover:bg-crimson/10"
              >
                <Heart className="w-4 h-4 text-crimson fill-crimson" />
                <span>{article.likes}</span>
              </button>

              {/* Read Story CTA */}
              <a
                href={`/${article.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onReadArticle(article);
                }}
                className="flex items-center space-x-2 bg-white text-black hover:bg-gold hover:text-black px-6 py-2.5 font-mono text-xs uppercase tracking-widest font-black transition-all shadow-lg active:scale-95 cursor-pointer no-underline"
              >
                <span>Read Feature</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Full-Bleed Editorial Imagery (7 cols) */}
        <a 
          href={`/${article.slug}`}
          onClick={(e) => {
            e.preventDefault();
            onReadArticle(article);
          }}
          className="lg:col-span-7 relative group cursor-pointer overflow-hidden aspect-[16/9] lg:aspect-auto min-h-0 lg:min-h-[540px] bg-black block"
        >
          <img
            src={article.coverImage}
            alt={article.coverImageAlt || article.title}
            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-1000 ease-out brightness-95 group-hover:brightness-100"
          />
          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/80 lg:via-transparent lg:to-transparent pointer-events-none" />

          {/* Editorial Excerpt & Read Time Overlay */}
          <div className="absolute bottom-4 right-4 left-4 lg:left-auto lg:max-w-md bg-black/95 border-2 border-white/20 p-4 text-xs text-white shadow-2xl">
            <div className="flex items-center justify-between font-mono text-xs text-gold uppercase font-bold mb-1.5">
              <span>{article.categoryLabel}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold" />
                {article.readTime}
              </span>
            </div>
            <p className="font-sans text-xs text-zinc-200 font-medium line-clamp-3">
              {article.subtitle}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};
