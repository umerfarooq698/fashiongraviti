import React, { useState, useEffect, useRef } from 'react';
import type { FashionArticle } from '../types/fashion';
import { 
  X, 
  Bookmark, 
  Heart, 
  Share2, 
  Clock, 
  MapPin, 
  Volume2, 
  VolumeX, 
  ArrowLeft, 
  ArrowRight,
  Check,
  Scissors
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ArticleReaderModalProps {
  article: FashionArticle | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  onToggleLike: (articleId: string) => void;
  allArticles: FashionArticle[];
  onSelectNextArticle: (article: FashionArticle) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onToggleLike,
  allArticles,
  onSelectNextArticle,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, [article]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleLike = (e: React.MouseEvent) => {
    onToggleLike(article.id);
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { x, y },
      colors: ['#8f121d', '#c59d54', '#ffffff'],
      ticks: 120,
    });
  };

  // Find next article
  const currentIndex = allArticles.findIndex((a) => a.id === article.id);
  const nextArticle = allArticles[(currentIndex + 1) % allArticles.length];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-center items-center overflow-hidden animate-fadeIn">
      {/* Top Reading Progress Line */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-crimson z-50 transition-all duration-150 shadow-md"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Reader Window */}
      <div 
        ref={scrollContainerRef}
        className="w-full h-full max-w-5xl bg-noir text-white overflow-y-auto border-x-2 border-white/20 relative shadow-2xl"
      >
        {/* Sticky Top Header inside Reader */}
        <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b-2 border-white/20 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="flex items-center space-x-1.5 text-xs font-mono font-extrabold text-white hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1 text-gold" />
              <span>EXIT ARTICLE</span>
            </button>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-xs font-mono text-gold font-bold uppercase hidden sm:inline">
              {article.categoryLabel}
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Audio Narrative Mock */}
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono font-bold border-2 transition-colors ${
                isPlayingAudio 
                  ? 'border-gold text-gold bg-gold/15' 
                  : 'border-white/20 text-white hover:border-white'
              }`}
              title="Simulate Audio Editorial Narration"
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4 animate-pulse text-gold" /> : <VolumeX className="w-4 h-4" />}
              <span className="text-xs hidden md:inline">{isPlayingAudio ? 'NARRATING...' : 'LISTEN'}</span>
            </button>

            {/* Like */}
            <button
              onClick={handleLike}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono font-black border-2 border-white/20 hover:border-crimson text-white hover:text-crimson-light transition-colors"
            >
              <Heart className="w-4 h-4 text-crimson fill-crimson" />
              <span>{article.likes}</span>
            </button>

            {/* Bookmark */}
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-2 border-2 transition-all ${
                isBookmarked 
                  ? 'bg-gold text-black border-gold' 
                  : 'border-white/20 text-white hover:border-white'
              }`}
              title="Save to Vault"
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-2 border-2 border-white/20 text-white hover:border-white transition-colors"
              title="Copy Story Link"
            >
              {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 bg-white text-black hover:bg-gold transition-colors font-black"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Body Layout */}
        <article className="px-6 sm:px-12 md:px-16 py-12 max-w-4xl mx-auto">
          {/* Metadata Header */}
          <div className="border-b-2 border-white/20 pb-8 mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase mb-4">
              <span className="bg-crimson px-3 py-1 text-white font-black shadow-md">
                {article.categoryLabel}
              </span>
              <span className="text-white font-bold">{article.season}</span>
              <span className="text-zinc-500">•</span>
              <span className="text-gold font-bold">{article.issueNumber}</span>
              <span className="text-zinc-500">•</span>
              <span className="flex items-center gap-1 text-gold font-black">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>

            <div className="flex items-center text-xs font-mono text-gold mb-4 font-extrabold">
              <MapPin className="w-4 h-4 mr-1.5 text-gold flex-shrink-0" />
              <span>{article.locationTag}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.12] tracking-tight">
              {article.title}
            </h1>

            <p className="mt-5 text-xl sm:text-2xl font-editorial italic text-zinc-100 leading-relaxed font-semibold">
              {article.subtitle}
            </p>

            {/* Author Byline */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                />
                <div>
                  <h4 className="text-base font-mono text-white font-black uppercase tracking-wider">
                    {article.author.name}
                  </h4>
                  <p className="text-xs text-zinc-300 font-medium">
                    {article.author.role} • {article.author.location}
                  </p>
                  {article.author.instagram && (
                    <span className="text-xs font-mono text-gold font-bold">
                      {article.author.instagram}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right text-xs font-mono text-zinc-300">
                <span className="text-gold font-bold">PUBLISHED DATE</span>
                <p className="text-white font-extrabold text-sm">{article.publishedAt}</p>
              </div>
            </div>
          </div>

          {/* Full Bleed Hero Cover Image */}
          <div className="my-8 overflow-hidden bg-black border-2 border-white/20">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full max-h-[600px] object-cover object-center"
            />
            {article.coverImageCaption && (
              <div className="p-4 bg-noir-card border-t border-white/15 text-sm font-sans text-zinc-200 font-semibold italic">
                {article.coverImageCaption}
              </div>
            )}
          </div>

          {/* Editorial Content Paragraphs */}
          <div className="space-y-6 text-lg sm:text-xl font-sans text-zinc-100 leading-relaxed font-medium">
            {/* First paragraph with Drop-Cap */}
            <p className="drop-cap text-xl sm:text-2xl leading-relaxed text-white font-semibold">
              {article.content.dropCapText}
            </p>

            {article.content.bodyParagraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Pull Quote */}
            {article.content.pullQuote && (
              <div className="my-10 p-8 sm:p-10 border-l-8 border-gold bg-noir-card text-white shadow-xl">
                <blockquote className="text-2xl sm:text-3xl font-editorial italic leading-relaxed text-white font-bold">
                  "{article.content.pullQuote.text}"
                </blockquote>
                {article.content.pullQuote.attribution && (
                  <cite className="block mt-4 text-sm font-mono uppercase tracking-widest text-gold not-italic font-black">
                    — {article.content.pullQuote.attribution}
                    {article.content.pullQuote.role && (
                      <span className="text-zinc-300 ml-2 font-medium">
                        ({article.content.pullQuote.role})
                      </span>
                    )}
                  </cite>
                )}
              </div>
            )}

            {/* Secondary Backstage / Studio Image */}
            {article.content.secondaryImage && (
              <div className="my-10 border-2 border-white/20 overflow-hidden bg-black">
                <img
                  src={article.content.secondaryImage.url}
                  alt="Editorial Detail"
                  className="w-full max-h-[500px] object-cover"
                />
                <p className="p-4 bg-noir-card text-xs sm:text-sm font-sans text-zinc-200 font-semibold italic border-t border-white/15">
                  {article.content.secondaryImage.caption}
                </p>
              </div>
            )}

            {/* Closing Paragraphs */}
            {article.content.closingParagraphs?.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Designer Credits & Fabrication Breakdown */}
          {article.content.designerCredits && article.content.designerCredits.length > 0 && (
            <div className="mt-12 p-6 bg-noir-card border-2 border-white/20">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gold font-black mb-4">
                <Scissors className="w-4 h-4 text-gold" />
                <span>ATELIER CREDITS & MATERIAL PROVENANCE</span>
              </div>
              <div className="divide-y divide-white/15">
                {article.content.designerCredits.map((credit, idx) => (
                  <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-mono gap-1">
                    <span className="text-white font-black uppercase">{credit.house}</span>
                    <span className="text-zinc-200 font-sans font-medium">{credit.garment}</span>
                    {credit.materials && (
                      <span className="text-gold font-bold italic">{credit.materials}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags Section */}
          <div className="mt-10 pt-6 border-t-2 border-white/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase text-white font-bold mr-1">ARTICLE TAGS:</span>
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono uppercase font-bold px-3 py-1 bg-black text-white border border-white/30"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-white font-bold">
              <span>AESTHETIC:</span>
              <span className="text-gold font-black uppercase">{article.mood}</span>
            </div>
          </div>

          {/* Next Article Recommendation Bar */}
          <div className="mt-14 pt-8 border-t-2 border-white/20">
            <span className="text-xs font-mono uppercase text-gold tracking-widest font-black block mb-3">
              NEXT STORY IN THIS ISSUE
            </span>
            <div 
              onClick={() => onSelectNextArticle(nextArticle)}
              className="group p-6 bg-noir-card border-2 border-white/20 hover:border-gold cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all shadow-xl"
            >
              <div>
                <span className="text-xs font-mono text-gold uppercase font-black">{nextArticle.categoryLabel}</span>
                <h4 className="text-2xl font-serif font-black text-white group-hover:text-gold transition-colors mt-1">
                  {nextArticle.title}
                </h4>
                <p className="text-sm text-zinc-200 font-medium mt-1">{nextArticle.subtitle}</p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-black bg-white group-hover:bg-gold px-4 py-2 font-black uppercase flex-shrink-0 transition-colors shadow-md">
                <span>Read Story</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
