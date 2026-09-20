export interface UnsplashPhoto {
  id: string;
  url: string;
  fullUrl: string;
  thumbUrl: string;
  altDescription: string;
  photographerName: string;
  photographerUsername: string;
  photographerUrl: string;
  caption: string;
}

const UNSPLASH_ACCESS_KEY = (import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string) || '';

const CATEGORY_SEARCH_QUERIES: Record<string, string> = {
  'fashion-news': 'haute couture runway model fashion week',
  'fashion-trends': 'avant garde fashion editorial styling',
  'celebrity': 'celebrity high fashion red carpet elegance',
  'designers-brands': 'fashion designer atelier luxury craftsmanship',
  'beauty': 'high fashion editorial beauty makeup portrait',
  'how-to-style': 'minimalist fashion aesthetic tailoring outfit',
};

// Fallback high-res editorial archive
const FALLBACK_EDITORIAL_PHOTOS: UnsplashPhoto[] = [
  {
    id: 'fb-1',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85',
    fullUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2400&q=90',
    thumbUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80',
    altDescription: 'Dark Romantic Haute Couture Silhouette',
    photographerName: 'Laura Chouette',
    photographerUsername: 'laurachouette',
    photographerUrl: 'https://unsplash.com/@laurachouette',
    caption: 'Photo by Laura Chouette on Unsplash',
  },
  {
    id: 'fb-2',
    url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85',
    fullUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2400&q=90',
    thumbUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400&q=80',
    altDescription: 'Sculptural Minimalist Tailoring',
    photographerName: 'Alena Ozerova',
    photographerUsername: 'o_alena',
    photographerUrl: 'https://unsplash.com/@o_alena',
    caption: 'Photo by Alena Ozerova on Unsplash',
  },
  {
    id: 'fb-3',
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85',
    fullUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2400&q=90',
    thumbUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80',
    altDescription: 'Avant-Garde Architectural Silhouette',
    photographerName: 'Tamara Bellis',
    photographerUsername: 'tamarabellis',
    photographerUrl: 'https://unsplash.com/@tamarabellis',
    caption: 'Photo by Tamara Bellis on Unsplash',
  },
  {
    id: 'fb-4',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85',
    fullUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2400&q=90',
    thumbUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    altDescription: 'Editorial Portrait and Haute Couture Glaze',
    photographerName: 'Aiony Haust',
    photographerUsername: 'aiony',
    photographerUrl: 'https://unsplash.com/@aiony',
    caption: 'Photo by Aiony Haust on Unsplash',
  },
  {
    id: 'fb-5',
    url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1600&q=85',
    fullUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=2400&q=90',
    thumbUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80',
    altDescription: 'Atelier Leather and Titanium Accessory Focus',
    photographerName: 'Apostolos Vamvouras',
    photographerUsername: 'avamvouras',
    photographerUrl: 'https://unsplash.com/@avamvouras',
    caption: 'Photo by Apostolos Vamvouras on Unsplash',
  },
  {
    id: 'fb-6',
    url: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1600&q=85',
    fullUrl: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=2400&q=90',
    thumbUrl: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=400&q=80',
    altDescription: 'High-Fashion Radiant Luminescence',
    photographerName: 'Clem Onojeghuo',
    photographerUsername: 'clemono2',
    photographerUrl: 'https://unsplash.com/@clemono2',
    caption: 'Photo by Clem Onojeghuo on Unsplash',
  },
];

/**
 * Searches Unsplash for high-fashion photography matching a search query
 */
export async function searchUnsplashPhotos(
  query: string,
  count: number = 12,
  orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape'
): Promise<UnsplashPhoto[]> {
  const cleanQuery = query.trim() || 'fashion haute couture';
  
  if (!UNSPLASH_ACCESS_KEY) {
    console.warn('Unsplash access key not configured, returning fallback photos');
    return FALLBACK_EDITORIAL_PHOTOS.slice(0, count);
  }

  try {
    const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      cleanQuery
    )}&orientation=${orientation}&per_page=${count}&client_id=${UNSPLASH_ACCESS_KEY}`;

    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Unsplash API HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      return FALLBACK_EDITORIAL_PHOTOS.slice(0, count);
    }

    return data.results.map((item: any): UnsplashPhoto => {
      const photographer = item.user?.name || 'Unsplash Curator';
      const username = item.user?.username || 'unsplash';
      const alt = item.alt_description || item.description || cleanQuery;

      return {
        id: item.id,
        url: item.urls?.regular || item.urls?.full,
        fullUrl: item.urls?.full || item.urls?.regular,
        thumbUrl: item.urls?.small || item.urls?.thumb || item.urls?.regular,
        altDescription: alt,
        photographerName: photographer,
        photographerUsername: username,
        photographerUrl: item.user?.links?.html || `https://unsplash.com/@${username}`,
        caption: `Photo by ${photographer} on Unsplash`,
      };
    });
  } catch (error) {
    console.error('Error fetching from Unsplash API:', error);
    return FALLBACK_EDITORIAL_PHOTOS.slice(0, count);
  }
}

/**
 * Retrieves editorial photography specifically mapped to a fashion category
 */
export async function getFashionPhotosByCategory(
  category: string,
  count: number = 10
): Promise<UnsplashPhoto[]> {
  const query = CATEGORY_SEARCH_QUERIES[category] || 'high fashion couture editorial runway';
  return searchUnsplashPhotos(query, count);
}

/**
 * Fetches a random high-fashion photo matching a query or category with fallback
 */
export async function getRandomUnsplashFashionPhoto(
  queryOrCategory?: string
): Promise<{ url: string; caption: string; photographer: string; altDescription: string }> {
  const query = queryOrCategory
    ? (CATEGORY_SEARCH_QUERIES[queryOrCategory] || queryOrCategory)
    : 'haute couture fashion runway editorial';

  const photos = await searchUnsplashPhotos(query, 8);
  if (photos.length > 0) {
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    return {
      url: randomPhoto.url,
      caption: randomPhoto.caption,
      photographer: randomPhoto.photographerName,
      altDescription: randomPhoto.altDescription || 'Editorial high fashion runway model look',
    };
  }

  const fallback = FALLBACK_EDITORIAL_PHOTOS[Math.floor(Math.random() * FALLBACK_EDITORIAL_PHOTOS.length)];
  return {
    url: fallback.url,
    caption: fallback.caption,
    photographer: fallback.photographerName,
    altDescription: fallback.altDescription || 'Editorial high fashion runway model look',
  };
}
