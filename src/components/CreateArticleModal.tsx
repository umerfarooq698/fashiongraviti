import React, { useState } from 'react';
import type { FashionArticle, FashionCategory, FashionMood } from '../types/fashion';
import { X, Sparkles, Send } from 'lucide-react';

interface CreateArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: FashionCategory[];
  onCreateArticle: (newArticle: FashionArticle) => void;
}

const PRESET_IMAGES = [
  { label: 'Obsidian Haute Draping', url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Alabaster Minimalist Coat', url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Harajuku Subculture Vault', url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Bio-Loom Experimental', url: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Brutalist Titanium Mules', url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Neo-Baroque Silk Cape', url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80' },
];

export const CreateArticleModal: React.FC<CreateArticleModalProps> = ({
  isOpen,
  onClose,
  categories,
  onCreateArticle,
}) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('fashion-news');
  const [mood, setMood] = useState<FashionMood>('Dark Romanticism');
  const [season, setSeason] = useState('AUTUMN / WINTER 2026');
  const [readTime, setReadTime] = useState('6 MIN READ');
  
  const [authorName, setAuthorName] = useState('Guest Curator');
  const [authorRole, setAuthorRole] = useState('Independent Fashion Critic');
  const authorAvatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';

  const [coverImage, setCoverImage] = useState(PRESET_IMAGES[0].url);
  const [coverImageCaption, setCoverImageCaption] = useState('');
  
  const [dropCapText, setDropCapText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [pullQuoteText, setPullQuoteText] = useState('');
  const [pullQuoteAttribution, setPullQuoteAttribution] = useState('');

  const [tagsInput, setTagsInput] = useState('Haute Couture, Runway, Editorial, Atelier');

  if (!isOpen) return null;

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

          {/* Section 3: Cover Image Presets / Custom URL */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Select Editorial Imagery Preset or Enter Custom Image URL
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
              {PRESET_IMAGES.map((preset, idx) => (
                <div
                  key={idx}
                  onClick={() => setCoverImage(preset.url)}
                  className={`relative cursor-pointer h-16 border overflow-hidden ${
                    coverImage === preset.url ? 'border-gold ring-1 ring-gold' : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={preset.url} alt={preset.label} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-noir/80 text-[9px] font-mono px-1 py-0.5 truncate text-zinc-300">
                    {preset.label}
                  </span>
                </div>
              ))}
            </div>
            <input
              type="url"
              placeholder="Or paste custom image URL (https://...)"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              className="w-full bg-noir-card border border-white/20 p-2.5 text-zinc-300 focus:outline-none focus:border-gold text-xs font-mono"
            />
            <input
              type="text"
              placeholder="Optional photo caption..."
              value={coverImageCaption}
              onChange={(e) => setCoverImageCaption(e.target.value)}
              className="w-full bg-noir-card border border-white/20 p-2 text-zinc-300 focus:outline-none focus:border-gold text-xs font-sans mt-2"
            />
          </div>

          {/* Section 4: Author Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
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
