/**
 * Comprehensive SEO & Structured Data Utility for Fashion Graviti
 * Canonical domain: https://fashiongraviti.com
 */

export const SITE_DOMAIN = 'https://fashiongraviti.com';
export const SITE_NAME = 'Fashion Graviti';
export const DEFAULT_TITLE = 'FASHION GRAVITI — Fashion News, Fashion Trends and Celebrity Runway';
export const DEFAULT_DESCRIPTION = 'Curated runway dispatches, haute couture analysis, and luxury style reviews presented by the editors and critics of Fashion Graviti archive.';
export const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  articleData?: {
    publishedTime?: string;
    authorName?: string;
    authorUrl?: string;
    section?: string;
    tags?: string[];
    faqs?: Array<{ question: string; answer: string }>;
  };
  breadcrumbs?: Array<{ name: string; path: string }>;
}

/**
 * Dynamically updates document title, canonical URL, meta tags, and JSON-LD schema
 */
export function updateDocumentSEO(props: SEOProps): void {
  const fullTitle = props.title 
    ? (props.title.includes('FASHION GRAVITI') ? props.title : `${props.title} — FASHION GRAVITI`)
    : DEFAULT_TITLE;
  const description = props.description || DEFAULT_DESCRIPTION;
  const canonicalUrl = props.canonicalPath 
    ? `${SITE_DOMAIN}${props.canonicalPath.startsWith('/') ? '' : '/'}${props.canonicalPath}`
    : SITE_DOMAIN;
  const image = props.image || DEFAULT_IMAGE;
  const type = props.type || 'website';

  // 1. Title
  document.title = fullTitle;

  // 2. Helper to set or create meta tag
  const setMeta = (attributeName: 'name' | 'property', attributeValue: string, content: string) => {
    let tag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attributeName, attributeValue);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  // 3. Primary Meta Tags
  setMeta('name', 'description', description);
  setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

  // 4. Canonical Tag
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute('href', canonicalUrl);

  // 5. Open Graph
  setMeta('property', 'og:site_name', SITE_NAME);
  setMeta('property', 'og:type', type);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:title', fullTitle);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:image', image);
  setMeta('property', 'og:locale', 'en_US');

  // 6. Twitter Card
  setMeta('property', 'twitter:card', 'summary_large_image');
  setMeta('property', 'twitter:url', canonicalUrl);
  setMeta('property', 'twitter:title', fullTitle);
  setMeta('property', 'twitter:description', description);
  setMeta('property', 'twitter:image', image);

  // 7. Dynamic JSON-LD Structured Data
  let script = document.getElementById('dynamic-seo-schema') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'dynamic-seo-schema';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  const schemaGraph: any[] = [];

  // Breadcrumbs Schema
  if (props.breadcrumbs && props.breadcrumbs.length > 0) {
    schemaGraph.push({
      '@type': 'BreadcrumbList',
      'itemListElement': props.breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': b.name,
        'item': b.path.startsWith('http') ? b.path : `${SITE_DOMAIN}${b.path.startsWith('/') ? '' : '/'}${b.path}`,
      })),
    });
  }

  // Article Schema
  if (type === 'article' && props.articleData) {
    const authorUrl = props.articleData.authorUrl
      ? (props.articleData.authorUrl.startsWith('http')
          ? props.articleData.authorUrl
          : `${SITE_DOMAIN}${props.articleData.authorUrl.startsWith('/') ? '' : '/'}${props.articleData.authorUrl}`)
      : undefined;

    schemaGraph.push({
      '@type': 'NewsArticle',
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      'headline': props.title || fullTitle,
      'description': description,
      'image': [image],
      'datePublished': props.articleData.publishedTime || '2026-09-21T00:00:00+00:00',
      'dateModified': props.articleData.publishedTime || '2026-09-21T00:00:00+00:00',
      'author': {
        '@type': 'Person',
        'name': props.articleData.authorName || 'Fashion Graviti Editors',
        ...(authorUrl ? { 'url': authorUrl } : {}),
      },
      'publisher': {
        '@type': 'NewsMediaOrganization',
        'name': SITE_NAME,
        'url': SITE_DOMAIN,
        'logo': {
          '@type': 'ImageObject',
          'url': DEFAULT_IMAGE,
        },
      },
      'keywords': props.articleData.tags || [],
    });

    // FAQPage Schema if FAQs exist
    if (props.articleData.faqs && props.articleData.faqs.length > 0) {
      schemaGraph.push({
        '@type': 'FAQPage',
        'mainEntity': props.articleData.faqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer,
          },
        })),
      });
    }
  }

  if (schemaGraph.length > 0) {
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schemaGraph,
    });
  } else {
    script.textContent = '';
  }
}
