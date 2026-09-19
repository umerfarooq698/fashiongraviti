import React, { useState, useEffect } from 'react';
import type { FashionArticle, FashionCategory, FashionMood } from '../types/fashion';
import { X, Sparkles, Send, RefreshCw, Wand2, Search, Camera } from 'lucide-react';
import { generateFashionArticleWithGemini } from '../services/gemini';
import { searchUnsplashPhotos, type UnsplashPhoto } from '../services/unsplash';

interface CreateArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: FashionCategory[];
  onCreateArticle: (newArticle: FashionArticle) => void;
}

const QUICK_UNSPLASH_TERMS = [
  'Haute Couture',
  'Runway Model',
  'Atelier Craft',
  'Dark Fashion',
  'Quiet Luxury',
  'Streetwear Avant-Garde',
  'Editorial Beauty',
];

export const CreateArticleModal: React.FC<CreateArticleModalProps> = ({
  isOpen,
  onClose,
  categories,
  onCreateArticle,
}) => {
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('fashion-news');
  const [mood, setMood] = useState<FashionMood>('Dark Romanticism');
  const [season, setSeason] = useState('AUTUMN / WINTER 2026');
  const [readTime, setReadTime] = useState('6 MIN READ');
  
  const [authorName, setAuthorName] = useState('Eleanora Vane');
  const [authorRole, setAuthorRole] = useState('Chief Fashion Editor');
  const authorAvatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';

  // Unsplash Image state
  const [unsplashQuery, setUnsplashQuery] = useState('haute couture runway');
  const [unsplashPhotos, setUnsplashPhotos] = useState<UnsplashPhoto[]>([]);
  const [isSearchingUnsplash, setIsSearchingUnsplash] = useState(false);

  const [coverImage, setCoverImage] = useState('https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85');
  const [coverImageCaption, setCoverImageCaption] = useState('Photo by Laura Chouette on Unsplash');
  
  const [dropCapText, setDropCapText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [pullQuoteText, setPullQuoteText] = useState('');
  const [pullQuoteAttribution, setPullQuoteAttribution] = useState('');

  const [tagsInput, setTagsInput] = useState('Haute Couture, Runway, Editorial, Atelier');

  // Load initial Unsplash photos when modal opens
  useEffect(() => {
    if (isOpen && unsplashPhotos.length === 0) {
      handleSearchUnsplash('haute couture runway');
    }
  }, [isOpen]);

  const handleSearchUnsplash = async (queryToSearch?: string) => {
    const q = queryToSearch || unsplashQuery;
    if (!q.trim()) return;
    setIsSearchingUnsplash(true);
    try {
      const results = await searchUnsplashPhotos(q, 8);
      setUnsplashPhotos(results);
    } catch (err) {
      console.error('Error searching Unsplash:', err);
    } finally {
      setIsSearchingUnsplash(false);
    }
  };

  const handleSelectUnsplashPhoto = (photo: UnsplashPhoto) => {
    setCoverImage(photo.url);
    setCoverImageCaption(photo.caption);
  };

  if (!isOpen) return null;

  const handleGenerateWithGemini = async (directPublish = false) => {
    setIsGeneratingAI(true);
    try {
      const generated = await generateFashionArticleWithGemini(aiPrompt, category);
      
      if (directPublish) {
        onCreateArticle(generated);
        onClose();
        return;
      }

      // Auto-fill all fields
      setTitle(generated.title);
      setSubtitle(generated.subtitle);
      setCategory(generated.category);
      setMood(generated.mood);
      setAuthorName(generated.author.name);
      setAuthorRole(generated.author.role);
      setCoverImage(generated.coverImage);
      setCoverImageCaption(generated.coverImageCaption || '');
      setDropCapText(generated.content.dropCapText);
      setBodyText(generated.content.bodyParagraphs.join('\n\n'));
      if (generated.content.pullQuote) {
        setPullQuoteText(generated.content.pullQuote.text);
        setPullQuoteAttribution(generated.content.pullQuote.attribution || '');
      }
      setTagsInput(generated.tags.join(', '));
    } catch (err) {
      console.error('Error in Gemini generation:', err);
    } finally {
      setIsGeneratingAI(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !dropCapText.trim()) {
      alert('Please provide at least an Article Title and Opening Paragraph.');
      return;
    }

    const selectedCategoryObj = categories.find((c) => c.id === category) || categories[1];

    const bodyParagraphs = bodyText
      .split('\n\n')
      .map((p) => p.trim())
      .filter(Boolean);

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const newArticle: FashionArticle = {
      id: `article-${Date.now()}`,
      title,
      subtitle: subtitle || 'An exclusive sartorial critique from the Fashiongraviti collective.',
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category: selectedCategoryObj.id,
      categoryLabel: selectedCategoryObj.name,
      season,
      issueNumber: 'ISSUE NO. 08',
      locationTag: '',
      author: {
        name: authorName,
        role: authorRole,
        location: '',
        avatar: authorAvatar,
      },
      publishedAt: 'JUST NOW',
      readTime,
      coverImage,
      coverImageCaption: coverImageCaption || undefined,
      content: {
        dropCapText,
        bodyParagraphs: bodyParagraphs.length > 0 ? bodyParagraphs : [
          'In this compelling exploration of contemporary silhouette and material philosophy, the collection demonstrates why garment construction remains our most visceral aesthetic expression.'
        ],
        pullQuote: pullQuoteText ? {
          text: pullQuoteText,
          attribution: pullQuoteAttribution || authorName,
        } : undefined,
      },
      tags: tags.length > 0 ? tags : ['Couture', 'Editorial'],
      mood,
      likes: 1,
      bookmarksCount: 0,
    };

    onCreateArticle(newArticle);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex justify-center items-center p-4 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-3xl bg-noir border border-white/20 text-alabaster shadow-2xl relative my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-noir-card">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <h2 className="text-lg font-mono uppercase tracking-widest font-bold text-alabaster">
              CURATOR STUDIO // PUBLISH EDITORIAL
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-grow">
          {/* Gemini AI Auto-Writer Box */}
          <div className="p-5 bg-noir-card border-2 border-gold/40 relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-gold animate-pulse" />
                <span className="text-xs font-mono font-black uppercase text-gold tracking-wider">
                  GEMINI AI EDITORIAL AUTO-GENERATOR
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 font-bold bg-black px-2 py-0.5 border border-white/20">
                GEMINI 3.6 FLASH
              </span>
            </div>

            <p className="text-xs text-zinc-300 font-sans mb-3 font-medium">
              Enter any fashion theme, runway review topic, or designer trend, and Gemini AI will draft the entire editorial with drop-caps, pull quotes, atelier credits, and live Unsplash editorial photography.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="text"
                placeholder="e.g., Paris Haute Couture Dark Romanticism, Quiet Luxury Cashmere, Met Gala..."
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                disabled={isGeneratingAI}
                className="flex-grow bg-black border border-white/20 p-2.5 text-xs text-white placeholder-zinc-500 font-sans focus:outline-none focus:border-gold"
              />
              <button
                type="button"
                onClick={() => handleGenerateWithGemini(false)}
                disabled={isGeneratingAI}
                className="px-4 py-2.5 bg-gold hover:bg-gold-light text-black font-mono text-xs uppercase font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 flex-shrink-0"
              >
                {isGeneratingAI ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-black" />
                    <span>Drafting with Gemini...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-3.5 h-3.5 text-black" />
                    <span>Generate Editorial</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => handleGenerateWithGemini(true)}
                disabled={isGeneratingAI}
                className="px-3.5 py-2.5 bg-crimson hover:bg-crimson-light text-white font-mono text-xs uppercase font-black transition-all flex items-center justify-center gap-1 cursor-pointer disabled:opacity-50 flex-shrink-0"
                title="Generate with Gemini and publish immediately to feed"
              >
                <span>⚡ Instant Publish</span>
              </button>
            </div>
          </div>

          {/* Section 1: Core Article Headline */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
              Article Headline *
            </label>
            <input
              type="text"
              required
              placeholder="e.g., The Architecture of Darkness: Sculptural Silhouettes"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-noir-card border border-white/20 p-3 text-white placeholder-zinc-600 focus:outline-none focus:border-gold font-serif text-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
              Subtitle / Lead Critique
            </label>
            <textarea
              rows={2}
              placeholder="A brief summary of the collection, runway show, or material investigation..."
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full bg-noir-card border border-white/20 p-3 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-gold text-sm font-sans"
            />
          </div>

          {/* Section 2: Department & Aesthetics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                Department
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-noir-card border border-white/20 p-2.5 text-white focus:outline-none focus:border-gold text-xs font-mono uppercase"
              >
                {categories.filter(c => c.id !== 'all').map((cat) => (
                  <option key={cat.id} value={cat.id} className="bg-noir text-white">
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                Aesthetic Mood
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value as FashionMood)}
                className="w-full bg-noir-card border border-white/20 p-2.5 text-white focus:outline-none focus:border-gold text-xs font-mono uppercase"
              >
                <option value="Avant-Garde">Avant-Garde</option>
                <option value="Dark Romanticism">Dark Romanticism</option>
                <option value="Quiet Luxury">Quiet Luxury</option>
                <option value="Cyber-Street">Cyber-Street</option>
                <option value="Opulent Minimalism">Opulent Minimalism</option>
                <option value="Neo-Vintage">Neo-Vintage</option>
                <option value="Sustainable Tech">Sustainable Tech</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                Season
              </label>
              <input
                type="text"
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                className="w-full bg-noir-card border border-white/20 p-2.5 text-white focus:outline-none focus:border-gold text-xs font-mono uppercase"
              />
            </div>
          </div>

          {/* Read Time */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
              Estimated Read Time
            </label>
            <input
              type="text"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              className="w-full bg-noir-card border border-white/20 p-2.5 text-white focus:outline-none focus:border-gold text-xs font-mono uppercase"
            />
          </div>

          {/* Section 3: Live Unsplash Image Curation */}
          <div className="p-4 bg-noir-card border border-white/20 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Camera className="w-4 h-4 text-gold" />
                <label className="text-xs font-mono uppercase tracking-wider text-alabaster font-bold">
                  UNSPLASH LIVE EDITORIAL PHOTO CURATOR
                </label>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 border border-white/10">
                POWERED BY UNSPLASH API
              </span>
            </div>

            {/* Search Input & Button */}
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Unsplash (e.g., Haute Couture, Silk Draping, Paris Fashion Week)..."
                  value={unsplashQuery}
                  onChange={(e) => setUnsplashQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSearchUnsplash();
                    }
                  }}
                  className="w-full bg-black border border-white/20 pl-8 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold font-sans"
                />
              </div>
              <button
                type="button"
                onClick={() => handleSearchUnsplash()}
                disabled={isSearchingUnsplash}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase font-bold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isSearchingUnsplash ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Search className="w-3.5 h-3.5" />
                )}
                <span>Search</span>
              </button>
            </div>

            {/* Quick Keyword Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {QUICK_UNSPLASH_TERMS.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => {
                    setUnsplashQuery(term);
                    handleSearchUnsplash(term);
                  }}
                  className="px-2 py-1 bg-black border border-white/10 hover:border-gold/60 text-[10px] font-mono text-zinc-300 hover:text-gold transition-colors"
                >
                  + {term}
                </button>
              ))}
            </div>

            {/* Photo Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {unsplashPhotos.map((photo) => {
                const isSelected = coverImage === photo.url;
                return (
                  <div
                    key={photo.id}
                    onClick={() => handleSelectUnsplashPhoto(photo)}
                    className={`relative cursor-pointer h-24 border overflow-hidden transition-all group ${
                      isSelected ? 'border-gold ring-2 ring-gold/80' : 'border-white/10 hover:border-white/40'
                    }`}
                  >
                    <img
                      src={photo.thumbUrl}
                      alt={photo.altDescription}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5">
                      <span className="text-[9px] font-mono text-zinc-300 truncate w-full">
                        {photo.photographerName}
                      </span>
                    </div>
                    {isSelected && (
                      <div className="absolute top-1 right-1 bg-gold text-black text-[9px] font-mono font-bold px-1 rounded-none">
                        SELECTED
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Custom Image URL & Caption */}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  Selected Image URL
                </label>
                <input
                  type="url"
                  placeholder="Selected image URL or custom https://..."
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  className="w-full bg-black border border-white/20 p-2 text-zinc-300 focus:outline-none focus:border-gold text-xs font-mono"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  Photo Caption & Attribution
                </label>
                <input
                  type="text"
                  placeholder="Photo caption (e.g. Photo by Photographer on Unsplash)..."
                  value={coverImageCaption}
                  onChange={(e) => setCoverImageCaption(e.target.value)}
                  className="w-full bg-black border border-white/20 p-2 text-zinc-300 focus:outline-none focus:border-gold text-xs font-sans"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Author Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                Author Name
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full bg-noir-card border border-white/20 p-2 text-white text-xs font-mono"
              />
            </div>
            {/* Author Role */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                Author Role
              </label>
              <input
                type="text"
                value={authorRole}
                onChange={(e) => setAuthorRole(e.target.value)}
                className="w-full bg-noir-card border border-white/20 p-2 text-white text-xs font-mono"
              />
            </div>
          </div>

          {/* Section 5: Article Body Text */}
          <div className="pt-4 border-t border-white/10">
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
              Opening Paragraph (Will receive Haute Couture Drop-Cap) *
            </label>
            <textarea
              rows={3}
              required
              placeholder="Write the dramatic opening paragraph of the editorial essay..."
              value={dropCapText}
              onChange={(e) => setDropCapText(e.target.value)}
              className="w-full bg-noir-card border border-white/20 p-3 text-white placeholder-zinc-600 focus:outline-none focus:border-gold text-sm font-sans"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
              Extended Body Paragraphs (Separate paragraphs with double enter)
            </label>
            <textarea
              rows={5}
              placeholder="Deep analysis on fabrics, silhouettes, cultural context, designer influences..."
              value={bodyText}
              onChange={(e) => setBodyText(e.target.value)}
              className="w-full bg-noir-card border border-white/20 p-3 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-gold text-sm font-sans"
            />
          </div>

          {/* Pull Quote */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                Editorial Pull Quote
              </label>
              <input
                type="text"
                placeholder="A striking statement from the designer or critique..."
                value={pullQuoteText}
                onChange={(e) => setPullQuoteText(e.target.value)}
                className="w-full bg-noir-card border border-white/20 p-2.5 text-white text-xs font-sans italic"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                Quote Attribution
              </label>
              <input
                type="text"
                placeholder="e.g., Yohji Yamamoto, Tokyo 1994"
                value={pullQuoteAttribution}
                onChange={(e) => setPullQuoteAttribution(e.target.value)}
                className="w-full bg-noir-card border border-white/20 p-2.5 text-white text-xs font-mono"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
              Curator Tags (comma-separated)
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full bg-noir-card border border-white/20 p-2.5 text-white text-xs font-mono"
            />
          </div>

          {/* Form Actions */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-white/20 text-zinc-400 hover:text-white font-mono text-xs uppercase"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center space-x-2 bg-crimson hover:bg-crimson-light text-white px-6 py-2.5 font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-md active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Publish to Archive</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
