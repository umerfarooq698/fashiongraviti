import React, { useState, useEffect, useMemo } from 'react';
import type { FashionArticle } from '../types/fashion';
import { 
  Bookmark, 
  Heart, 
  Share2, 
  Clock, 
  Volume2, 
  VolumeX, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Scissors, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getAuthorSlug } from '../data/authors';
import { updateDocumentSEO } from '../utils/seo';

interface ArticleReaderModalProps {
  article: FashionArticle | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  onToggleLike: (articleId: string) => void;
  allArticles: FashionArticle[];
  onSelectNextArticle: (article: FashionArticle) => void;
  onSelectCategory?: (categoryId: string) => void;
  onSelectTag?: (tag: string) => void;
  onSelectAuthor?: (authorName: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onToggleLike,
  allArticles,
  onSelectNextArticle,
  onSelectCategory,
  onSelectTag,
  onSelectAuthor,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Stop speech when article changes or unmounts
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [article?.id]);

  // Scroll to top whenever article changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article?.id]);

  // Dynamic SEO & Structured Data for Article
  useEffect(() => {
    if (!article) return;
    const authorSlug = getAuthorSlug(article.author.name);
    const pubDate = article.publishedAt ? new Date(article.publishedAt).toISOString() : new Date().toISOString();
    updateDocumentSEO({
      title: `${article.title} — FASHION GRAVITI`,
      description: article.subtitle || article.content.dropCapText.slice(0, 160),
      canonicalPath: `/${article.slug}`,
      image: article.coverImage,
      type: 'article',
      articleData: {
        authorName: article.author.name,
        authorUrl: `/author/${authorSlug}`,
        publishedTime: pubDate,
        section: article.category,
        tags: article.tags,
        faqs: article.content?.faqs?.map((f) => ({ question: f.question, answer: f.answer })),
      },
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: article.category.replace(/-/g, ' ').toUpperCase(), path: `/${article.category}` },
        { name: article.title, path: `/${article.slug}` },
      ],
    });
  }, [article]);

  // Global window scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to go back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Automatically calculate the center point of the article for secondary image placement
  const secondaryImageIndex = useMemo(() => {
    if (!article?.content?.secondaryImage || !article?.content?.bodyParagraphs?.length) return -1;
    const total = article.content.bodyParagraphs.length;
    const mid = Math.floor(total / 2);
    // Prefer placing right before a major section heading (## ) near the middle (within ±3 items)
    for (let offset = 0; offset <= 3; offset++) {
      const idx = mid + offset;
      if (idx < total && article.content.bodyParagraphs[idx]?.trim().startsWith('## ')) {
        return idx;
      }
      const negIdx = mid - offset;
      if (negIdx > 0 && article.content.bodyParagraphs[negIdx]?.trim().startsWith('## ')) {
        return negIdx;
      }
    }
    return mid;
  }, [article]);

  if (!article) return null;

  const handleToggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const cleanForSpeech = (str: string) => str.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
      const textToRead = cleanForSpeech(`${article.title}. ${article.subtitle}. By ${article.author.name}. ${article.content.dropCapText} ${article.content.bodyParagraphs.slice(0, 3).join(' ')}`);
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const handleShare = async () => {
    const url = `https://fashiongraviti.com/${article.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: `${article.title} — Fashion Graviti`,
          url: url,
        });
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    navigator.clipboard.writeText(url);
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

  // Related articles in same category
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  // Helper to parse and render markdown links naturally in editorial text
  const renderTextWithLinks = (text: string) => {
    if (!text) return null;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    if (!linkRegex.test(text)) {
      return text;
    }
    linkRegex.lastIndex = 0;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        elements.push(text.substring(lastIndex, match.index));
      }
      const anchorText = match[1];
      const url = match[2];
      const isInternal = url.startsWith('/');

      elements.push(
        <a
          key={`inline-link-${match.index}-${url}`}
          href={url}
          onClick={(e) => {
            if (isInternal) {
              e.preventDefault();
              const cleanSlug = url.replace(/^\//, '');
              const target = allArticles.find((a) => a.slug === cleanSlug || (a.legacySlugs && a.legacySlugs.includes(cleanSlug)));
              if (target) {
                if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                onSelectNextArticle(target);
                window.history.pushState(null, '', url);
              } else {
                window.location.href = url;
              }
            }
          }}
          className="text-gold hover:text-white underline decoration-gold/50 hover:decoration-white font-medium transition-colors cursor-pointer"
        >
          {anchorText}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      elements.push(text.substring(lastIndex));
    }

    return elements;
  };

  return (
    <section className="w-full bg-noir text-white relative animate-fadeIn pb-16">
      {/* Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-crimson z-50 transition-all duration-150 shadow-md"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Editorial Action Bar directly below site header */}
      <div className="sticky top-0 z-30 bg-black/95 backdrop-blur-md border-b-2 border-white/20 px-2.5 sm:px-8 lg:px-12 py-2 sm:py-3 flex items-center justify-between shadow-xl gap-1 sm:gap-4">
        <div className="flex items-center space-x-1.5 sm:space-x-3 text-xs font-mono min-w-0">
          <button
            onClick={() => {
              if ('speechSynthesis' in window) window.speechSynthesis.cancel();
              onClose();
            }}
            className="flex items-center space-x-1 sm:space-x-1.5 text-xs font-mono font-extrabold text-white hover:text-gold transition-colors cursor-pointer flex-shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
            <span className="hidden sm:inline">BACK TO STORIES</span>
            <span className="sm:hidden">BACK</span>
          </button>
          
          <span className="text-zinc-600 flex-shrink-0">/</span>
          
          <a
            href={`/${article.category}`}
            onClick={(e) => {
              e.preventDefault();
              if ('speechSynthesis' in window) window.speechSynthesis.cancel();
              onSelectCategory?.(article.category);
            }}
            className="text-xs font-mono text-gold hover:text-white font-bold uppercase transition-colors cursor-pointer no-underline truncate max-w-[100px] xs:max-w-[140px] sm:max-w-none"
          >
            <span>{article.categoryLabel}</span>
          </a>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-1.5 sm:space-x-2.5 flex-shrink-0">
          {/* Web Speech Audio */}
          <button
            onClick={handleToggleAudio}
            className={`flex items-center space-x-1 sm:space-x-1.5 p-1.5 sm:px-3 sm:py-1.5 text-xs font-mono font-bold border-2 transition-colors cursor-pointer ${
              isPlayingAudio 
                ? 'border-gold text-gold bg-gold/20' 
                : 'border-white/20 text-white hover:border-white hover:bg-white/10'
            }`}
            title="Narrate Article using Web Speech"
          >
            {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse text-gold" /> : <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            <span className="text-xs hidden md:inline">{isPlayingAudio ? 'STOP NARRATING' : 'LISTEN TO STORY'}</span>
          </button>

          {/* Like */}
          <button
            onClick={handleLike}
            className="flex items-center space-x-1 px-2 sm:px-2.5 py-1.5 text-xs font-mono font-black border-2 border-white/20 hover:border-crimson text-white hover:text-crimson-light transition-colors cursor-pointer hover:bg-crimson/10"
          >
            <Heart className="w-3.5 h-3.5 text-crimson fill-crimson" />
            <span>{article.likes}</span>
          </button>

          {/* Bookmark */}
          <button
            onClick={() => onToggleBookmark(article.id)}
            className={`p-1.5 sm:p-2 border-2 transition-all cursor-pointer ${
              isBookmarked 
                ? 'bg-gold text-black border-gold' 
                : 'border-white/20 text-white hover:border-white hover:bg-white/10'
            }`}
            title="Save to Vault"
          >
            <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="p-1.5 sm:p-2 border-2 border-white/20 text-white hover:border-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Copy Story Link"
          >
            {isCopied ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" /> : <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>
        </div>
      </div>

      {/* Main Editorial Article Body */}
      <article className="px-3.5 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-10 max-w-4xl mx-auto">
        {/* Breadcrumbs Navigation */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs font-mono text-zinc-400 uppercase mb-4 sm:mb-6 overflow-hidden">
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="hover:text-gold transition-colors no-underline text-zinc-400 flex-shrink-0"
          >
            HOME
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0" />
          <a 
            href={`/${article.category}`}
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory?.(article.category);
            }}
            className="hover:text-gold transition-colors no-underline text-gold font-bold truncate"
          >
            {article.categoryLabel}
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 hidden sm:inline flex-shrink-0" />
          <span className="text-zinc-500 truncate max-w-xs hidden sm:inline">{article.title}</span>
        </div>

        {/* Metadata Header */}
        <div className="border-b-2 border-white/20 pb-6 sm:pb-8 mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono uppercase mb-3 sm:mb-4">
            <a
              href={`/${article.category}`}
              onClick={(e) => {
                e.preventDefault();
                if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                onSelectCategory?.(article.category);
              }}
              className="bg-crimson hover:bg-crimson-light px-2.5 sm:px-3 py-1 text-white font-black shadow-md transition-colors cursor-pointer no-underline inline-flex items-center gap-1.5 text-[11px] sm:text-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              {article.categoryLabel}
            </a>
            <span className="flex items-center gap-1 text-gold font-black text-[11px] sm:text-xs">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.14] sm:leading-[1.12] tracking-tight">
            {article.title}
          </h1>

          <p className="mt-3 sm:mt-5 text-base sm:text-xl md:text-2xl font-editorial italic text-zinc-100 leading-relaxed font-semibold">
            {article.subtitle}
          </p>

          {/* Author Byline */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
            <a 
              href={`/author/${getAuthorSlug(article.author.name)}`}
              onClick={(e) => {
                e.preventDefault();
                if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                onSelectAuthor ? onSelectAuthor(article.author.name) : onSelectTag?.(article.author.name);
              }}
              className="flex items-center space-x-4 cursor-pointer group no-underline"
              title={`View ${article.author.name}'s profile and curations`}
            >
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gold group-hover:border-white transition-colors"
              />
              <div>
                <h4 className="text-base font-mono text-white group-hover:text-gold font-black uppercase tracking-wider transition-colors">
                  {article.author.name}
                </h4>
                <p className="text-xs text-zinc-300 font-medium">
                  {article.author.role}
                </p>
                {article.author.instagram && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      const igHandle = article.author.instagram ? article.author.instagram.replace('@', '') : '';
                      if (igHandle) {
                        window.open(`https://instagram.com/${igHandle}`, '_blank');
                      }
                    }}
                    className="text-xs font-mono text-gold hover:text-white underline decoration-gold/40 hover:decoration-white font-bold transition-colors block mt-0.5"
                  >
                    {article.author.instagram}
                  </span>
                )}
              </div>
            </a>

            <div className="text-right text-xs font-mono text-zinc-300">
              <span className="text-gold font-bold">PUBLISHED DATE</span>
              <p className="text-white font-extrabold text-sm">{article.publishedAt}</p>
            </div>
          </div>
        </div>

        {/* Full Bleed Hero Cover Image (Unified 16:9 Ratio) */}
        <div className="my-8 overflow-hidden bg-black border-2 border-white/20 shadow-2xl flex flex-col">
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-950">
            <img
              src={article.coverImage}
              alt={article.coverImageAlt || article.title}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
          {article.coverImageCaption && 
           !article.coverImageCaption.toLowerCase().includes('unsplash') && 
           !article.coverImageCaption.toLowerCase().includes('photo by') && (
            <div className="w-full px-3.5 py-1.5 bg-black/95 border-t border-white/10 text-[11px] font-mono text-zinc-400">
              {article.coverImageCaption}
            </div>
          )}
        </div>

        {/* Editorial Content Paragraphs & Structured Headings */}
        <div className="space-y-6 text-base sm:text-lg font-sans text-zinc-200 leading-relaxed font-normal">
          {/* First paragraph with Drop-Cap */}
          <p className="drop-cap text-base sm:text-lg leading-relaxed text-zinc-100 font-normal">
            {renderTextWithLinks(article.content.dropCapText)}
          </p>

          {article.content.bodyParagraphs.map((paragraph, index) => {
            const trimmed = paragraph.trim();
            const isSecondaryImageTarget = index === secondaryImageIndex && article.content.secondaryImage;

            return (
              <React.Fragment key={index}>
                {/* Secondary Editorial / Atelier Image (Centered dynamically in the reading flow) */}
                {isSecondaryImageTarget && (
                  <div className="my-10 border border-white/20 overflow-hidden bg-black shadow-xl flex flex-col">
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-950">
                      <img
                        src={article.content.secondaryImage!.url}
                        alt={article.content.secondaryImage!.alt || "Editorial Atelier Detail"}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    {article.content.secondaryImage!.caption && 
                     !article.content.secondaryImage!.caption.toLowerCase().includes('unsplash') && 
                     !article.content.secondaryImage!.caption.toLowerCase().includes('photo by') && (
                      <p className="w-full px-3.5 py-1.5 bg-black/95 text-[11px] font-mono text-zinc-400 border-t border-white/10">
                        {article.content.secondaryImage!.caption}
                      </p>
                    )}
                  </div>
                )}

                {trimmed.startsWith('### ') ? (
                  <h3 className="text-lg sm:text-xl font-serif font-semibold text-gold mt-6 mb-2 tracking-wide">
                    {renderTextWithLinks(trimmed.replace(/^###\s+/, ''))}
                  </h3>
                ) : trimmed.startsWith('## ') ? (
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-8 mb-3 pt-4 border-t border-white/10 tracking-tight">
                    {renderTextWithLinks(trimmed.replace(/^##\s+/, ''))}
                  </h2>
                ) : trimmed.startsWith('* ') || trimmed.startsWith('- ') ? (
                  <li className="list-disc list-inside text-zinc-300 ml-2 font-normal leading-relaxed">
                    {renderTextWithLinks(trimmed.replace(/^[*•-]\s+/, ''))}
                  </li>
                ) : (
                  <p className="leading-relaxed">
                    {renderTextWithLinks(paragraph)}
                  </p>
                )}
              </React.Fragment>
            );
          })}

          {/* Pull Quote */}
          {article.content.pullQuote && (
            <div className="my-8 p-6 sm:p-8 border-l-4 border-gold bg-noir-card text-white shadow-xl">
              <blockquote className="text-xl sm:text-2xl font-editorial italic leading-relaxed text-white font-semibold">
                "{article.content.pullQuote.text}"
              </blockquote>
              {article.content.pullQuote.attribution && (
                <cite className="block mt-3 text-xs font-mono uppercase tracking-widest text-gold not-italic font-bold">
                  {article.content.pullQuote.attribution}
                  {article.content.pullQuote.role && (
                    <span className="text-zinc-400 ml-2 font-normal">
                      ({article.content.pullQuote.role})
                    </span>
                  )}
                </cite>
              )}
            </div>
          )}

          {/* Fallback Secondary Image if article had no bodyParagraphs */}
          {secondaryImageIndex === -1 && article.content.secondaryImage && (
            <div className="my-8 border border-white/20 overflow-hidden bg-black shadow-xl flex flex-col">
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-950">
                <img
                  src={article.content.secondaryImage.url}
                  alt={article.content.secondaryImage.alt || "Editorial Atelier Detail"}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              {article.content.secondaryImage.caption && 
               !article.content.secondaryImage.caption.toLowerCase().includes('unsplash') && 
               !article.content.secondaryImage.caption.toLowerCase().includes('photo by') && (
                <p className="w-full px-3.5 py-1.5 bg-black/95 text-[11px] font-mono text-zinc-400 border-t border-white/10">
                  {article.content.secondaryImage.caption}
                </p>
              )}
            </div>
          )}

          {/* Closing Paragraphs / Summary */}
          {article.content.closingParagraphs?.map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={index} className="text-xl sm:text-2xl font-serif font-bold text-white mt-8 mb-3 pt-4 border-t border-white/10">
                  {renderTextWithLinks(trimmed.replace(/^##\s+/, ''))}
                </h2>
              );
            }
            return (
              <p key={index} className="leading-relaxed">
                {renderTextWithLinks(paragraph)}
              </p>
            );
          })}

          {/* Conclusion */}
          {article.content.conclusion && (
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-8 mb-3 pt-4 border-t border-white/10 tracking-tight">
                Conclusion
              </h2>
              <p className="leading-relaxed">
                {renderTextWithLinks(article.content.conclusion)}
              </p>
            </div>
          )}

          {/* Dedicated FAQs Section */}
          {article.content.faqs && article.content.faqs.length > 0 && (
            <div className="my-10 pt-6 border-t border-white/20 space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <h3 className="text-base sm:text-lg font-mono uppercase tracking-widest text-white font-bold">
                  FREQUENTLY ASKED QUESTIONS
                </h3>
              </div>
              <div className="space-y-3">
                {article.content.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 bg-noir-card border border-white/10 hover:border-gold/40 transition-colors">
                    <h4 className="text-sm sm:text-base font-serif font-bold text-alabaster mb-1.5 flex items-start gap-2">
                      <span className="text-gold font-mono text-xs font-black">Q{idx + 1}.</span>
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-xs sm:text-sm font-sans text-zinc-300 leading-relaxed pl-5">
                      {renderTextWithLinks(faq.answer)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Designer Credits & Fabrication Breakdown */}
        {article.content.designerCredits && article.content.designerCredits.length > 0 && (
          <div className="mt-12 p-6 bg-noir-card border-2 border-white/20">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gold font-black mb-4">
              <Scissors className="w-4 h-4 text-gold" />
              <span>ATELIER CREDITS AND MATERIAL PROVENANCE</span>
            </div>
            <div className="divide-y divide-white/15">
              {article.content.designerCredits.map((credit, idx) => (
                <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-mono gap-1">
                  <a
                    href={`?search=${encodeURIComponent(credit.house)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                      onSelectTag?.(credit.house);
                    }}
                    className="text-white hover:text-gold font-black uppercase text-left transition-colors cursor-pointer no-underline"
                  >
                    {credit.house}
                  </a>
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
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                  onSelectTag?.(tag);
                }}
                className="text-xs font-mono uppercase font-bold px-3 py-1 bg-black text-zinc-300 hover:text-gold hover:border-gold border border-white/30 transition-colors inline-block cursor-pointer"
                title={`Filter articles by #${tag}`}
              >
                #{tag}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-white font-bold">
            <span>AESTHETIC:</span>
            <a
              href={`?search=${encodeURIComponent(article.mood)}`}
              onClick={(e) => {
                e.preventDefault();
                if ('speechSynthesis' in window) window.speechSynthesis.cancel();
                onSelectTag?.(article.mood);
              }}
              className="text-gold hover:text-white font-black uppercase transition-colors cursor-pointer no-underline"
            >
              {article.mood}
            </a>
          </div>
        </div>

        {/* Next Article Recommendation Bar */}
        <div className="mt-14 pt-8 border-t-2 border-white/20">
          <span className="text-xs font-mono uppercase text-gold tracking-widest font-black block mb-3">
            NEXT STORY IN THIS ISSUE
          </span>
          <a 
            href={`/${nextArticle.slug}`}
            onClick={(e) => {
              e.preventDefault();
              if ('speechSynthesis' in window) window.speechSynthesis.cancel();
              onSelectNextArticle(nextArticle);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group p-6 bg-noir-card border-2 border-white/20 hover:border-gold cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all shadow-xl block no-underline"
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
          </a>
        </div>

        {/* Related Articles in Same Category */}
        {relatedArticles.length > 0 && (
          <div className="mt-14 pt-8 border-t-2 border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-mono uppercase tracking-widest text-gold font-extrabold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                MORE FROM {article.categoryLabel.toUpperCase()}
              </h3>
              <a
                href={`/${article.category}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCategory?.(article.category);
                }}
                className="text-xs font-mono text-zinc-400 hover:text-white uppercase font-bold transition-colors no-underline"
              >
                View All →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <a
                  key={rel.id}
                  href={`/${rel.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectNextArticle(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group block bg-noir-card border-2 border-white/15 hover:border-gold transition-all overflow-hidden no-underline"
                >
                  <div className="h-44 overflow-hidden bg-black">
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase mb-2">
                      <span className="text-gold font-bold">{rel.categoryLabel}</span>
                      <span>{rel.readTime}</span>
                    </div>
                    <h4 className="text-sm font-serif font-black text-white group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </article>
    </section>
  );
};
