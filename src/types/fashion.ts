export type FashionMood = 
  | 'All Moods'
  | 'Avant-Garde'
  | 'Dark Romanticism'
  | 'Quiet Luxury'
  | 'Cyber-Street'
  | 'Opulent Minimalism'
  | 'Neo-Vintage'
  | 'Sustainable Tech';

export interface Author {
  name: string;
  role: string;
  location?: string;
  avatar: string;
  instagram?: string;
  bio?: string;
  slug?: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  designer: string;
  season: string;
  image: string;
  details: string;
  tags: string[];
  fabrication: string;
}

export interface FashionCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
  count: number;
}

export interface FashionArticle {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  categoryLabel: string;
  season: string;
  issueNumber: string;
  locationTag: string; // e.g., 'PARIS // RUE SAINT-HONORÉ'
  author: Author;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  coverImageCaption?: string;
  gallery?: string[];
  content: {
    dropCapText: string;
    bodyParagraphs: string[];
    pullQuote?: {
      text: string;
      attribution?: string;
      role?: string;
    };
    secondaryImage?: {
      url: string;
      caption: string;
    };
    closingParagraphs?: string[];
    designerCredits?: {
      house: string;
      garment: string;
      materials?: string;
    }[];
  };
  tags: string[];
  mood: FashionMood;
  featured?: boolean;
  coverStory?: boolean;
  likes: number;
  bookmarksCount: number;
}

export type ViewLayoutMode = 'editorial' | 'magazine' | 'compact';
