import { useState, useEffect, useMemo } from 'react';
import type { FashionArticle, FashionCategory, FashionMood, ViewLayoutMode } from './types/fashion';
import { FASHION_CATEGORIES, INITIAL_ARTICLES } from './data/initialArticles';
import { getAuthorProfile, getAuthorSlug } from './data/authors';
import { Header } from './components/Header';
import { Ticker } from './components/Ticker';
import { CoverStory } from './components/CoverStory';
import { CategoryFilter } from './components/CategoryFilter';
import { ArticleGrid } from './components/ArticleGrid';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { AuthorProfilePage } from './components/AuthorProfilePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { CreateArticleModal } from './components/CreateArticleModal';
import { LookbookDrawer } from './components/LookbookDrawer';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { Footer } from './components/Footer';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsAndConditionsPage } from './components/TermsAndConditionsPage';
import { updateDocumentSEO } from './utils/seo';

const STORAGE_KEY_ARTICLES = 'fashiongraviti_articles_v25';
const STORAGE_KEY_BOOKMARKS = 'fashiongraviti_bookmarks_v5';

export function App() {
  // Articles state with localStorage hydration
  const [articles, setArticles] = useState<FashionArticle[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_ARTICLES);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.error('Failed to parse saved articles:', e);
      }
    }
    return INITIAL_ARTICLES;
  });

  // Bookmarks state
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse bookmarks:', e);
      }
    }
    return ['article-period-swimwear'];
  });

  // Filter & Search states
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeMood, setActiveMood] = useState<FashionMood>('All Moods');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [layoutMode, setLayoutMode] = useState<ViewLayoutMode>('editorial');

  // Modals & Static Pages states
  const [selectedArticleForReader, setSelectedArticleForReader] = useState<FashionArticle | null>(null);
  const [selectedAuthorSlug, setSelectedAuthorSlug] = useState<string | null>(null);
  const [activeStaticPage, setActiveStaticPage] = useState<'about' | 'contact' | 'privacy' | 'terms' | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  // Sync articles to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_ARTICLES, JSON.stringify(articles));
  }, [articles]);

  // Sync bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  // Ensure dark class is applied and purge old database cache versions
  useEffect(() => {
    document.documentElement.classList.add('dark');
    for (let i = 1; i <= 24; i++) {
      try {
        localStorage.removeItem(`fashiongraviti_articles_v${i}`);
        localStorage.removeItem(`fashiongraviti_bookmarks_v${i}`);
      } catch {
        // ignore
      }
    }
  }, []);

  // Listen to URL path (/category, /author/:slug, /title-slug, /about-us, /contact-us) and search params on mount & popstate
  useEffect(() => {
    const syncStateFromURL = () => {
      const rawPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
      const segments = rawPath.split('/').filter(Boolean);
      const params = new URLSearchParams(window.location.search);

      const queryStory = params.get('story') || params.get('article');
      const queryCat = params.get('category');
      const search = params.get('search') || params.get('tag');

      // Check author profile page first
      if (segments.length >= 2 && segments[0].toLowerCase() === 'author') {
        setSelectedAuthorSlug(segments[1].toLowerCase());
        setActiveStaticPage(null);
        setSelectedArticleForReader(null);
        setActiveCategory('all');
        return;
      }

      setSelectedAuthorSlug(null);

      // Check static pages
      if (segments.length === 1) {
        const seg = segments[0].toLowerCase();
        if (seg === 'about-us' || seg === 'about') {
          setActiveStaticPage('about');
          setSelectedArticleForReader(null);
          setActiveCategory('all');
          return;
        }
        if (seg === 'contact-us' || seg === 'contact') {
          setActiveStaticPage('contact');
          setSelectedArticleForReader(null);
          setActiveCategory('all');
          return;
        }
        if (seg === 'privacy-policy' || seg === 'privacy') {
          setActiveStaticPage('privacy');
          setSelectedArticleForReader(null);
          setActiveCategory('all');
          return;
        }
        if (seg === 'terms-and-conditions' || seg === 'terms') {
          setActiveStaticPage('terms');
          setSelectedArticleForReader(null);
          setActiveCategory('all');
          return;
        }
      }

      setActiveStaticPage(null);

      const categoryMap: Record<string, string> = {
        'fashion-news': 'fashion-news',
        'fashion-trends': 'fashion-trends',
        'celebrity': 'celebrity',
        'designers-brands': 'designers-brands',
        'designers-and-brands': 'designers-brands',
        'beauty': 'beauty',
        'how-to-style': 'how-to-style',
        'home': 'all',
        'all': 'all',
      };

      let matchedArticle: FashionArticle | null = null;
      let matchedCategory = 'all';

      // 1. Direct query param fallback
      if (queryStory) {
        matchedArticle = articles.find((a) => a.id === queryStory || a.slug === queryStory) || null;
      }

      // 2. Direct path slug matching (/category or /title-slug or /category/title-slug)
      if (!matchedArticle && segments.length > 0) {
        if (segments.length === 1) {
          const seg = segments[0].toLowerCase();
          if (categoryMap[seg]) {
            matchedCategory = categoryMap[seg];
          } else {
            matchedArticle = articles.find((a) => a.slug === seg || a.id === seg) || null;
            if (matchedArticle) {
              matchedCategory = matchedArticle.category;
            }
          }
        } else if (segments.length >= 2) {
          const lastSeg = segments[segments.length - 1].toLowerCase();
          matchedArticle = articles.find((a) => a.slug === lastSeg || a.id === lastSeg) || null;
          if (matchedArticle) {
            matchedCategory = matchedArticle.category;
          } else if (categoryMap[segments[0].toLowerCase()]) {
            matchedCategory = categoryMap[segments[0].toLowerCase()];
          }
        }
      }

      // 3. Category query param fallback
      if (queryCat && categoryMap[queryCat.toLowerCase()]) {
        matchedCategory = categoryMap[queryCat.toLowerCase()];
      }

      if (matchedArticle) {
        setSelectedArticleForReader(matchedArticle);
        setActiveCategory(matchedArticle.category);
      } else {
        setSelectedArticleForReader(null);
        setActiveCategory(matchedCategory);
      }

      if (search) {
        setSearchQuery(search);
      }
    };

    syncStateFromURL();
    window.addEventListener('popstate', syncStateFromURL);
    return () => window.removeEventListener('popstate', syncStateFromURL);
  }, [articles]);

  // Dynamic SEO for Pages, Categories, Authors, and Home (when Reader modal is closed)
  useEffect(() => {
    if (selectedArticleForReader) {
      // Reader modal handles article-specific SEO
      return;
    }

    if (selectedAuthorSlug) {
      const author = getAuthorProfile(selectedAuthorSlug);
      updateDocumentSEO({
        title: `${author.name} — Author Profile | FASHION GRAVITI`,
        description: `Editorial profile and archive of fashion reviews and articles by ${author.name}, ${author.role} at Fashion Graviti.`,
        canonicalPath: `/author/${selectedAuthorSlug}`,
        image: author.avatar,
        type: 'profile',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Authors', path: '/' },
          { name: author.name, path: `/author/${selectedAuthorSlug}` },
        ],
      });
      return;
    }

    if (activeStaticPage === 'about') {
      updateDocumentSEO({
        title: 'About Us — FASHION GRAVITI Editorial Archive',
        description: 'The editorial standards, vision, and critics behind Fashion Graviti, premier archive for haute couture and runway critique.',
        canonicalPath: '/about-us',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about-us' },
        ],
      });
      return;
    }

    if (activeStaticPage === 'contact') {
      updateDocumentSEO({
        title: 'Contact Us — Editorial Inquiries | FASHION GRAVITI',
        description: 'Get in touch with the Fashion Graviti editorial desk, press team, and contributors in Paris, Milan, and New York.',
        canonicalPath: '/contact-us',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact-us' },
        ],
      });
      return;
    }

    if (activeStaticPage === 'privacy') {
      updateDocumentSEO({
        title: 'Privacy Policy — FASHION GRAVITI',
        description: 'How Fashion Graviti collects, handles, and protects personal data in compliance with international privacy standards.',
        canonicalPath: '/privacy-policy',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ],
      });
      return;
    }

    if (activeStaticPage === 'terms') {
      updateDocumentSEO({
        title: 'Terms & Conditions — FASHION GRAVITI',
        description: 'Review the terms of service, editorial copyright conditions, and usage policies for Fashion Graviti.',
        canonicalPath: '/terms-and-conditions',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Terms and Conditions', path: '/terms-and-conditions' },
        ],
      });
      return;
    }

    if (activeCategory !== 'all') {
      const cat = FASHION_CATEGORIES.find((c) => c.id === activeCategory);
      const catName = cat ? cat.name : activeCategory.replace(/-/g, ' ').toUpperCase();
      updateDocumentSEO({
        title: `${catName} — FASHION GRAVITI Editorial Archive`,
        description: `Explore the latest ${catName.toLowerCase()} dispatches, trend analysis, and editorial critiques on Fashion Graviti.`,
        canonicalPath: `/${activeCategory}`,
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: catName, path: `/${activeCategory}` },
        ],
      });
      return;
    }

    // Default Home SEO
    updateDocumentSEO({
      title: 'FASHION GRAVITI — Fashion News, Fashion Trends and Celebrity Runway',
      description: 'Curated runway dispatches, haute couture analysis, and luxury style reviews presented by the editors and critics of Fashion Graviti archive.',
      canonicalPath: '/',
      breadcrumbs: [{ name: 'Home', path: '/' }],
    });
  }, [selectedArticleForReader, selectedAuthorSlug, activeStaticPage, activeCategory]);

  // Dynamic Categories with updated article counts
  const dynamicCategories: FashionCategory[] = useMemo(() => {
    return FASHION_CATEGORIES.map((cat) => {
      if (cat.id === 'all') {
        return { ...cat, count: articles.length };
      }
      const count = articles.filter((a) => a.category === cat.id).length;
      return { ...cat, count };
    });
  }, [articles]);

  // Featured Cover Story article: The latest/newest article is always the top hero story
  const coverStoryArticle = useMemo(() => {
    return articles[0];
  }, [articles]);

  // Filtered articles list
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      // 1. Category filter
      if (activeCategory !== 'all' && article.category !== activeCategory) {
        return false;
      }
      // 2. Mood filter
      if (activeMood !== 'All Moods' && article.mood !== activeMood) {
        return false;
      }
      // 3. Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(query);
        const matchesSubtitle = article.subtitle.toLowerCase().includes(query);
        const matchesAuthor = article.author.name.toLowerCase().includes(query);
        const matchesTags = article.tags.some((t) => t.toLowerCase().includes(query));
        const matchesCategory = article.categoryLabel.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSubtitle && !matchesAuthor && !matchesTags && !matchesCategory) {
          return false;
        }
      }
      return true;
    });
  }, [articles, activeCategory, activeMood, searchQuery]);

  // Bookmarked articles list
  const bookmarkedArticles = useMemo(() => {
    return articles.filter((a) => bookmarkedIds.includes(a.id));
  }, [articles, bookmarkedIds]);

  // Actions
  const handleOpenArticle = (article: FashionArticle) => {
    setActiveStaticPage(null);
    setSelectedAuthorSlug(null);
    setSelectedArticleForReader(article);
    window.history.pushState({ storyId: article.id, slug: article.slug }, '', `/${article.slug}`);
  };

  const handleCloseArticle = () => {
    setSelectedArticleForReader(null);
    setSelectedAuthorSlug(null);
    setActiveStaticPage(null);
    const targetPath = activeCategory === 'all' ? '/' : `/${activeCategory}`;
    window.history.pushState({}, '', targetPath);
  };

  const handleSelectCategory = (catId: string) => {
    setActiveStaticPage(null);
    setSelectedAuthorSlug(null);
    setActiveCategory(catId);
    setSearchQuery('');
    setSelectedArticleForReader(null);
    const targetPath = catId === 'all' ? '/' : `/${catId}`;
    window.history.pushState({}, '', targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAuthor = (authorNameOrSlug: string) => {
    const slug = getAuthorSlug(authorNameOrSlug);
    setSelectedAuthorSlug(slug);
    setSelectedArticleForReader(null);
    setActiveStaticPage(null);
    setSearchQuery('');
    window.history.pushState({ authorSlug: slug }, '', `/author/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateAbout = () => {
    setActiveStaticPage('about');
    setSelectedAuthorSlug(null);
    setSelectedArticleForReader(null);
    setSearchQuery('');
    window.history.pushState({}, '', '/about-us');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateContact = () => {
    setActiveStaticPage('contact');
    setSelectedAuthorSlug(null);
    setSelectedArticleForReader(null);
    setSearchQuery('');
    window.history.pushState({}, '', '/contact-us');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigatePrivacy = () => {
    setActiveStaticPage('privacy');
    setSelectedAuthorSlug(null);
    setSelectedArticleForReader(null);
    setSearchQuery('');
    window.history.pushState({}, '', '/privacy-policy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateTerms = () => {
    setActiveStaticPage('terms');
    setSelectedAuthorSlug(null);
    setSelectedArticleForReader(null);
    setSearchQuery('');
    window.history.pushState({}, '', '/terms-and-conditions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleBookmark = (articleId: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(articleId) ? prev.filter((id) => id !== articleId) : [...prev, articleId]
    );
  };

  const handleToggleLike = (articleId: string) => {
    setArticles((prev) =>
      prev.map((art) => {
        if (art.id === articleId) {
          return { ...art, likes: art.likes + 1 };
        }
        return art;
      })
    );
  };

  const handleCreateArticle = (newArticle: FashionArticle) => {
    setArticles((prev) => [newArticle, ...prev]);
    handleSelectCategory(newArticle.category);
    setActiveMood('All Moods');
    setSearchQuery('');
    handleOpenArticle(newArticle);
  };

  const handleClearAllBookmarks = () => {
    setBookmarkedIds([]);
  };

  const handleResetFilters = () => {
    setActiveStaticPage(null);
    setSelectedAuthorSlug(null);
    setActiveCategory('all');
    setActiveMood('All Moods');
    setSearchQuery('');
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTag = (tag: string) => {
    setActiveStaticPage(null);
    setSelectedAuthorSlug(null);
    setActiveCategory('all');
    setActiveMood('All Moods');
    setSearchQuery(tag);
    window.history.pushState({}, '', `/?search=${encodeURIComponent(tag)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTickerItem = (tickerText: string) => {
    const cleanQuery = tickerText.replace(/^[•\s]+/, '').split('//')[0].trim();
    const matched = articles.find(
      (a) =>
        a.title.toLowerCase().includes(cleanQuery.toLowerCase()) ||
        a.subtitle.toLowerCase().includes(cleanQuery.toLowerCase()) ||
        a.tags.some((t) => cleanQuery.toLowerCase().includes(t.toLowerCase()))
    );

    if (matched) {
      handleOpenArticle(matched);
    } else {
      handleSelectTag(cleanQuery);
    }
  };

  return (
    <div className="min-h-screen bg-noir text-alabaster selection:bg-crimson selection:text-white transition-colors duration-300 font-sans">
      {/* 1. Header Masthead & Navigation */}
      <Header
        categories={dynamicCategories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateAbout={handleNavigateAbout}
        onNavigateContact={handleNavigateContact}
        onOpenLookbook={() => setIsLookbookOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        bookmarkedCount={bookmarkedArticles.length}
      />

      {/* 2. Runway Ticker Tape */}
      <Ticker onSelectTickerItem={handleSelectTickerItem} />

      <main>
        {activeStaticPage === 'about' ? (
          /* About Us Page */
          <AboutPage
            onNavigateHome={handleResetFilters}
            onNavigateContact={handleNavigateContact}
            onNavigateCategory={handleSelectCategory}
            onSelectAuthor={handleSelectAuthor}
          />
        ) : activeStaticPage === 'contact' ? (
          /* Contact Us Page */
          <ContactPage
            onNavigateHome={handleResetFilters}
            onNavigateCategory={handleSelectCategory}
          />
        ) : activeStaticPage === 'privacy' ? (
          /* Privacy Policy Page */
          <PrivacyPolicyPage onNavigateHome={handleResetFilters} />
        ) : activeStaticPage === 'terms' ? (
          /* Terms and Conditions Page */
          <TermsAndConditionsPage onNavigateHome={handleResetFilters} />
        ) : selectedAuthorSlug ? (
          /* Author Profile Page */
          <AuthorProfilePage
            author={getAuthorProfile(selectedAuthorSlug)}
            authorArticles={articles.filter(
              (a) => getAuthorSlug(a.author.name) === selectedAuthorSlug
            )}
            layoutMode={layoutMode}
            onReadArticle={handleOpenArticle}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onToggleLike={handleToggleLike}
            onSelectCategory={handleSelectCategory}
            onNavigateHome={handleResetFilters}
            onSelectTag={handleSelectTag}
            onSelectAuthor={handleSelectAuthor}
          />
        ) : selectedArticleForReader ? (
          /* Dedicated Article View with persistent site Header and Footer */
          <ArticleReaderModal
            article={selectedArticleForReader}
            onClose={handleCloseArticle}
            isBookmarked={bookmarkedIds.includes(selectedArticleForReader.id)}
            onToggleBookmark={handleToggleBookmark}
            onToggleLike={handleToggleLike}
            allArticles={articles}
            onSelectNextArticle={handleOpenArticle}
            onSelectCategory={handleSelectCategory}
            onSelectTag={handleSelectTag}
            onSelectAuthor={handleSelectAuthor}
          />
        ) : (
          <>
            {/* 3. Cover Story (only shown on 'all' view with no active search query for pure magazine feel) */}
            {activeCategory === 'all' && activeMood === 'All Moods' && !searchQuery.trim() && coverStoryArticle && (
              <CoverStory
                article={coverStoryArticle}
                onReadArticle={handleOpenArticle}
                isBookmarked={bookmarkedIds.includes(coverStoryArticle.id)}
                onToggleBookmark={handleToggleBookmark}
                onToggleLike={handleToggleLike}
                onSelectTag={handleSelectTag}
                onSelectCategory={handleSelectCategory}
                onSelectAuthor={handleSelectAuthor}
              />
            )}

            {/* 4. Category Showcase & Filter Bar */}
            <CategoryFilter
              categories={dynamicCategories}
              activeCategory={activeCategory}
              onSelectCategory={handleSelectCategory}
              activeMood={activeMood}
              onSelectMood={setActiveMood}
              layoutMode={layoutMode}
              onChangeLayout={setLayoutMode}
              totalArticlesCount={filteredArticles.length}
            />

            {/* 5. Article Grid with selected layout */}
            <ArticleGrid
              articles={filteredArticles}
              layoutMode={layoutMode}
              onReadArticle={handleOpenArticle}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
              onToggleLike={handleToggleLike}
              onResetFilters={handleResetFilters}
              onSelectCategory={handleSelectCategory}
              onSelectTag={handleSelectTag}
              onSelectAuthor={handleSelectAuthor}
            />
          </>
        )}
      </main>

      {/* 6. High-Fashion Colophon Footer */}
      <Footer
        categories={dynamicCategories}
        onSelectCategory={handleSelectCategory}
        onNavigateAbout={handleNavigateAbout}
        onNavigateContact={handleNavigateContact}
        onNavigatePrivacy={handleNavigatePrivacy}
        onNavigateTerms={handleNavigateTerms}
        onOpenCreateModal={() => setIsCreateModalOpen(true)}
        onOpenLookbook={() => setIsLookbookOpen(true)}
        onSelectTag={handleSelectTag}
      />

      {/* 8. Curator Studio Modal (Submit Post) */}
      <CreateArticleModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        categories={dynamicCategories}
        onCreateArticle={handleCreateArticle}
      />

      {/* 9. Lookbook Drawer */}
      <LookbookDrawer
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
        onSelectTag={handleSelectTag}
      />

      {/* 10. Bookmarks / Vault Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedArticles={bookmarkedArticles}
        onReadArticle={handleOpenArticle}
        onRemoveBookmark={handleToggleBookmark}
        onClearAll={handleClearAllBookmarks}
      />

    </div>
  );
}

export default App;
