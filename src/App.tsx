import { useState, useEffect, useMemo } from 'react';
import type { FashionArticle, FashionCategory, FashionMood, ViewLayoutMode } from './types/fashion';
import { FASHION_CATEGORIES, INITIAL_ARTICLES } from './data/initialArticles';
import { Header } from './components/Header';
import { Ticker } from './components/Ticker';
import { CoverStory } from './components/CoverStory';
import { CategoryFilter } from './components/CategoryFilter';
import { ArticleGrid } from './components/ArticleGrid';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { CreateArticleModal } from './components/CreateArticleModal';
import { LookbookDrawer } from './components/LookbookDrawer';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { Footer } from './components/Footer';

const STORAGE_KEY_ARTICLES = 'fashiongraviti_articles_v2';
const STORAGE_KEY_BOOKMARKS = 'fashiongraviti_bookmarks_v2';

export function App() {
  // Articles state with localStorage hydration
  const [articles, setArticles] = useState<FashionArticle[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_ARTICLES);
    if (saved) {
      try {
        return JSON.parse(saved);
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
    return ['article-01', 'article-03'];
  });

  // Filter & Search states
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeMood, setActiveMood] = useState<FashionMood>('All Moods');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [layoutMode, setLayoutMode] = useState<ViewLayoutMode>('editorial');

  // Modals & Drawers states
  const [selectedArticleForReader, setSelectedArticleForReader] = useState<FashionArticle | null>(null);
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

  // Ensure dark class is applied
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

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

  // Featured Cover Story article
  const coverStoryArticle = useMemo(() => {
    return articles.find((a) => a.coverStory) || articles[0];
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
        const matchesLocation = article.locationTag.toLowerCase().includes(query);
        const matchesCategory = article.categoryLabel.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSubtitle && !matchesAuthor && !matchesTags && !matchesLocation && !matchesCategory) {
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
    // Automatically select the new article's category so user sees it right away
    setActiveCategory(newArticle.category);
    setActiveMood('All Moods');
    setSearchQuery('');
  };

  const handleClearAllBookmarks = () => {
    setBookmarkedIds([]);
  };

  const handleResetFilters = () => {
    setActiveCategory('all');
    setActiveMood('All Moods');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-noir text-alabaster selection:bg-crimson selection:text-white transition-colors duration-300 font-sans">
      {/* 1. Header Masthead & Navigation */}
      <Header
        categories={dynamicCategories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Runway Ticker Tape */}
      <Ticker />

      <main>
        {/* 3. Cover Story (only shown on 'all' view with no active search query for pure magazine feel) */}
        {activeCategory === 'all' && activeMood === 'All Moods' && !searchQuery.trim() && coverStoryArticle && (
          <CoverStory
            article={coverStoryArticle}
            onReadArticle={setSelectedArticleForReader}
            isBookmarked={bookmarkedIds.includes(coverStoryArticle.id)}
            onToggleBookmark={handleToggleBookmark}
            onToggleLike={handleToggleLike}
          />
        )}

        {/* 4. Category Showcase & Filter Bar */}
        <CategoryFilter
          categories={dynamicCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
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
          onReadArticle={setSelectedArticleForReader}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
          onToggleLike={handleToggleLike}
          onResetFilters={handleResetFilters}
        />
      </main>

      {/* 6. High-Fashion Colophon Footer */}
      <Footer
        categories={dynamicCategories}
        onSelectCategory={setActiveCategory}
        onOpenCreateModal={() => setIsCreateModalOpen(true)}
        onOpenLookbook={() => setIsLookbookOpen(true)}
      />

      {/* 7. Fullscreen Article Reader Modal */}
      {selectedArticleForReader && (
        <ArticleReaderModal
          article={selectedArticleForReader}
          onClose={() => setSelectedArticleForReader(null)}
          isBookmarked={bookmarkedIds.includes(selectedArticleForReader.id)}
          onToggleBookmark={handleToggleBookmark}
          onToggleLike={handleToggleLike}
          allArticles={articles}
          onSelectNextArticle={setSelectedArticleForReader}
        />
      )}

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
      />

      {/* 10. Bookmarks / Vault Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedArticles={bookmarkedArticles}
        onReadArticle={setSelectedArticleForReader}
        onRemoveBookmark={handleToggleBookmark}
        onClearAll={handleClearAllBookmarks}
      />
    </div>
  );
}

export default App;
