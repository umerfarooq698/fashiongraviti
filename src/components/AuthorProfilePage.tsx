import React, { useEffect } from 'react';
import type { AuthorProfile } from '../data/authors';
import type { FashionArticle, ViewLayoutMode } from '../types/fashion';
import { ArticleCard } from './ArticleCard';
import { Sparkles, ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';

interface AuthorProfilePageProps {
  author: AuthorProfile;
  authorArticles: FashionArticle[];
  layoutMode: ViewLayoutMode;
  onReadArticle: (article: FashionArticle) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (articleId: string) => void;
  onToggleLike: (articleId: string) => void;
  onSelectCategory: (categoryId: string) => void;
  onNavigateHome: () => void;
  onSelectTag?: (tag: string) => void;
  onSelectAuthor?: (authorName: string) => void;
}

export const AuthorProfilePage: React.FC<AuthorProfilePageProps> = ({
  author,
  authorArticles,
  layoutMode,
  onReadArticle,
  bookmarkedIds,
  onToggleBookmark,
  onToggleLike,
  onSelectCategory,
  onNavigateHome,
  onSelectTag,
  onSelectAuthor,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [author.slug]);

  return (
    <div className="w-full bg-noir text-white animate-fadeIn pb-16">
      {/* Top Header / Breadcrumbs Bar */}
      <div className="border-b border-white/15 bg-noir-card px-4 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 uppercase">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            className="hover:text-gold transition-colors no-underline text-zinc-400"
          >
            HOME
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-gold font-bold">AUTHOR PROFILE</span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 hidden sm:inline" />
          <span className="text-zinc-500 truncate max-w-xs hidden sm:inline">{author.name}</span>
        </div>

        <button
          onClick={onNavigateHome}
          className="flex items-center space-x-1.5 text-xs font-mono font-extrabold text-white hover:text-gold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-gold" />
          <span>BACK TO STORIES</span>
        </button>
      </div>

      {/* Author Hero Profile Header */}
      <section className="relative border-b-2 border-white/20 bg-noir-pure py-12 md:py-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-gold shadow-2xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-crimson p-1.5 rounded-full border-2 border-black text-white" title="Verified Fashion Graviti Author">
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
          </div>

          {/* Profile Bio Details */}
          <div className="flex-grow">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-white/20 text-gold text-xs font-mono uppercase font-black mb-3">
              <span>{author.role}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white uppercase leading-tight">
              {author.name}
            </h1>

            {/* Short Description / Bio */}
            <p className="mt-3 text-base sm:text-lg font-sans text-zinc-200 font-medium leading-relaxed max-w-2xl">
              {author.bio}
            </p>

            {/* Social & Counts Row */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-center md:justify-start gap-5 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-gold font-bold bg-black px-3 py-1.5 border border-gold/30">
                <BookOpen className="w-4 h-4 text-gold" />
                <span>{authorArticles.length} {authorArticles.length === 1 ? 'PUBLISHED ESSAY' : 'PUBLISHED ESSAYS'}</span>
              </div>

              {author.instagram && (
                <a
                  href={`https://instagram.com/${author.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white hover:text-gold font-bold transition-colors no-underline bg-white/5 hover:bg-white/10 px-3 py-1.5 border border-white/20"
                >
                  <svg className="w-4 h-4 text-gold fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>{author.instagram}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Author Articles Feed Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="flex items-center justify-between mb-8 border-b border-white/15 pb-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <h2 className="text-sm font-mono uppercase tracking-widest text-white font-extrabold">
              CURATIONS AND ESSAYS BY {author.name.toUpperCase()}
            </h2>
          </div>

          <span className="text-xs font-mono font-bold text-gold uppercase bg-black px-3 py-1 border border-gold/40">
            {authorArticles.length} {authorArticles.length === 1 ? 'STORY' : 'STORIES'}
          </span>
        </div>

        {authorArticles.length === 0 ? (
          <div className="text-center py-16 text-zinc-400 font-mono text-sm">
            <p className="font-serif text-xl text-white mb-2">No articles found by this author.</p>
            <button
              onClick={onNavigateHome}
              className="mt-4 px-6 py-2.5 bg-white text-black font-mono text-xs uppercase font-black hover:bg-gold transition-colors cursor-pointer"
            >
              Explore Feed
            </button>
          </div>
        ) : (
          <div className={
            layoutMode === 'compact'
              ? 'flex flex-col space-y-3'
              : layoutMode === 'magazine'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'grid grid-cols-1 md:grid-cols-2 gap-8'
          }>
            {authorArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                layoutMode={layoutMode}
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
        )}
      </section>
    </div>
  );
};
