import type { FashionArticle } from '../types/fashion';
import { getAuthorProfile } from '../data/authors';
import { getRandomUnsplashFashionPhoto, searchUnsplashPhotos } from './unsplash';

const GEMINI_API_KEY = (import.meta.env.VITE_GEMINI_API_KEY as string) || '';

const getApiUrl = () =>
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${GEMINI_API_KEY}`;

const AUTHORS_LIST = [
  'Eleanora Vane',
  'Massimo Dellacorte',
  'Kenji Takahashi',
  'Felix Van Der Bilt',
];

export interface GeminiGeneratedArticle {
  title: string;
  subtitle: string;
  category: 'fashion-news' | 'fashion-trends' | 'celebrity' | 'designers-brands' | 'beauty' | 'how-to-style';
  categoryLabel: string;
  authorName: string;
  dropCapText: string;
  bodyParagraphs: string[];
  pullQuoteText: string;
  pullQuoteAttribution: string;
  secondaryImageCaption: string;
  closingParagraphs: string[];
  designerCredits: Array<{ house: string; garment: string; materials: string }>;
  tags: string[];
  mood: 'Dark Romanticism' | 'Quiet Luxury' | 'Opulent Minimalism' | 'Avant-Garde' | 'Sustainable Tech';
}

/**
 * Generates a full high-fashion editorial article using Gemini 3.6 Flash & Live Unsplash Imagery
 */
export async function generateFashionArticleWithGemini(
  promptOrTopic?: string,
  targetCategory?: string
): Promise<FashionArticle> {
  const categoryConstraint = targetCategory ? `For the category: "${targetCategory}".` : '';
  const topicPrompt = promptOrTopic
    ? `Write a detailed, high-fashion runway editorial article about: "${promptOrTopic}". ${categoryConstraint}`
    : `Write a breaking, cutting-edge high-fashion editorial article on a runway trend, haute couture showcase, or designer innovation. ${categoryConstraint}`;

  const systemInstruction = `
You are the Chief Fashion Editor of "Fashion Graviti", an ultra-luxury digital fashion magazine (like Vogue, Harper's Bazaar, or The Gentlewoman).
Generate a sophisticated, highly articulate fashion article in strict JSON format.

CRITICAL HEADLINE RULES:
1. "title": MUST BE EXACTLY 55 TO 60 CHARACTERS LONG (including spaces and punctuation). Count characters precisely.
2. ZERO AI BUZZWORDS: Never use words like 'AI', 'Artificial Intelligence', 'algorithm', 'revolutionize', 'unlocking', 'delving', 'tapestry', 'next-gen', 'game-changing'.
3. NATURAL KEYWORD PLACEMENT: Seamlessly position the target keyword in a natural editorial flow (start, center, or right/end) so it reads like authentic luxury journalism.

JSON Schema:
{
  "title": "Strictly 55-60 characters luxury headline with keyword naturally placed",
  "subtitle": "Poetic and informative excerpt / subtitle (120-180 chars)",
  "category": "fashion-news | fashion-trends | celebrity | designers-brands | beauty | how-to-style",
  "categoryLabel": "Fashion News | Fashion Trends | Celebrity | Designers And Brands | Beauty | How to Style",
  "authorName": "Eleanora Vane | Massimo Dellacorte | Kenji Takahashi | Felix Van Der Bilt",
  "dropCapText": "First sentence of the article, powerful and poetic (1-2 sentences)",
  "bodyParagraphs": [
    "Detailed analytical paragraph detailing fabrics, silhouette architecture, and runway setting",
    "Second paragraph discussing cultural impact, craftsmanship, and fashion week reception"
  ],
  "pullQuoteText": "Inspiring, quotable statement from the review",
  "pullQuoteAttribution": "Designer, Critic, or Atelier Council",
  "secondaryImageCaption": "Backstage / Atelier description caption",
  "closingParagraphs": [
    "Closing takeaway on where modern luxury is headed next"
  ],
  "designerCredits": [
    { "house": "Luxury Atelier Name", "garment": "Garment Description", "materials": "Silk, Cashmere, Obsidian Hardware, etc." }
  ],
  "tags": ["Tag1", "Tag2", "Tag3", "Tag4"],
  "mood": "Dark Romanticism | Quiet Luxury | Opulent Minimalism | Avant-Garde | Sustainable Tech"
}

Output ONLY valid JSON without markdown wrapping or backticks.
`;

  try {
    const response = await fetch(getApiUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${systemInstruction}\n\nTask: ${topicPrompt}`,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Gemini API error response:', errText);
      throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const rawContent = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawContent) {
      throw new Error('No content returned from Gemini API');
    }

    // Clean JSON response
    const cleanJson = rawContent
      .replace(/```json\s*/gi, '')
      .replace(/```\s*$/gi, '')
      .trim();

    const parsed: GeminiGeneratedArticle = JSON.parse(cleanJson);
    const chosenAuthorName = parsed.authorName || AUTHORS_LIST[Math.floor(Math.random() * AUTHORS_LIST.length)];
    const authorProfile = getAuthorProfile(chosenAuthorName);

    const articleId = `gemini-story-${Date.now()}`;
    const slug = parsed.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Fetch live Unsplash imagery tailored to the topic and category
    const searchKeywords = promptOrTopic
      ? `${parsed.category} ${promptOrTopic}`
      : `${parsed.category} ${parsed.tags?.[0] || 'runway'}`;
    
    let photos = await searchUnsplashPhotos(searchKeywords, 4);
    if (!photos || photos.length === 0) {
      photos = await searchUnsplashPhotos(parsed.category, 4);
    }

    const coverPhoto = photos[0] || (await getRandomUnsplashFashionPhoto(parsed.category));
    const secondaryPhoto = photos[1] || photos[0] || (await getRandomUnsplashFashionPhoto('designers-brands'));

    const article: FashionArticle = {
      id: articleId,
      title: parsed.title,
      subtitle: parsed.subtitle,
      slug: slug || articleId,
      category: parsed.category || 'fashion-news',
      categoryLabel: parsed.categoryLabel || 'Fashion News',
      season: 'AUTUMN / WINTER 2026',
      issueNumber: 'ISSUE NO. 08',
      locationTag: '',
      author: {
        name: authorProfile.name,
        role: authorProfile.role,
        avatar: authorProfile.avatar,
        bio: authorProfile.bio,
        instagram: authorProfile.instagram,
      },
      publishedAt: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).toUpperCase(),
      readTime: '5 MIN READ',
      coverImage: coverPhoto.url,
      coverImageCaption: coverPhoto.caption || parsed.secondaryImageCaption || `Editorial showcase for ${parsed.title}`,
      content: {
        dropCapText: parsed.dropCapText,
        bodyParagraphs: parsed.bodyParagraphs || [],
        pullQuote: {
          text: parsed.pullQuoteText,
          attribution: parsed.pullQuoteAttribution,
        },
        secondaryImage: {
          url: secondaryPhoto.url,
          caption: secondaryPhoto.caption || parsed.secondaryImageCaption || 'Atelier fabrication and finish details.',
        },
        closingParagraphs: parsed.closingParagraphs || [],
        designerCredits: parsed.designerCredits || [],
      },
      tags: parsed.tags || ['Fashion', 'Runway', 'Haute Couture'],
      mood: parsed.mood || 'Quiet Luxury',
      likes: Math.floor(Math.random() * 200) + 120,
      bookmarksCount: Math.floor(Math.random() * 80) + 40,
    };

    return article;
  } catch (err) {
    console.error('Failed to generate with Gemini API, generating fallback editorial:', err);
    
    // Live Unsplash photo for fallback
    const fallbackPhoto = await getRandomUnsplashFashionPhoto(targetCategory || 'fashion-news');
    const fallbackSecondary = await getRandomUnsplashFashionPhoto('designers-brands');

    const fallbackAuthor = getAuthorProfile(AUTHORS_LIST[0]);
    const articleId = `gemini-story-${Date.now()}`;
    return {
      id: articleId,
      title: promptOrTopic ? `${promptOrTopic}: Editorial Runway Analysis` : 'Autumn Runway Bulletin: Modern Proportions & Atelier Craftsmanship',
      subtitle: 'Inside the newest couture collections exploring sculptural tailoring, rare natural fibers, and contemporary luxury.',
      slug: `editorial-analysis-${Date.now()}`,
      category: (targetCategory as any) || 'fashion-news',
      categoryLabel: 'Fashion News',
      season: 'AUTUMN / WINTER 2026',
      issueNumber: 'ISSUE NO. 08',
      locationTag: '',
      author: {
        name: fallbackAuthor.name,
        role: fallbackAuthor.role,
        avatar: fallbackAuthor.avatar,
        bio: fallbackAuthor.bio,
        instagram: fallbackAuthor.instagram,
      },
      publishedAt: 'SEPTEMBER 19, 2026',
      readTime: '5 MIN READ',
      coverImage: fallbackPhoto.url,
      coverImageCaption: fallbackPhoto.caption || 'Runway showcase spotlighting architectural double-breasted tailoring.',
      content: {
        dropCapText: 'The contemporary runway season has unveiled a bold re-evaluation of classic tailoring traditions and modern silhouettes.',
        bodyParagraphs: [
          'Designers across the European fashion circuit presented collections defined by meticulous precision, prioritizing un-dyed wools and hand-finished draping.',
          'Each look demonstrated an uncompromising dedication to textile provenance and structural integrity, setting the tone for the upcoming sartorial year.'
        ],
        pullQuote: {
          text: 'Fashion is a continuous dialogue between historic craftsmanship and futuristic form.',
          attribution: 'Editorial Review Board',
        },
        secondaryImage: {
          url: fallbackSecondary.url,
          caption: fallbackSecondary.caption || 'Backstage atelier preparation and garment detailing.',
        },
        closingParagraphs: [
          'These collections reinforce that genuine elegance lies in restraint and immaculate construction.'
        ],
        designerCredits: [
          { house: 'Maison Graviti Atelier', garment: 'Sculpted Wool Coat', materials: '100% Fine Italian Wool' }
        ],
      },
      tags: ['Fashion News', 'Runway', 'Haute Couture', 'Tailoring'],
      mood: 'Quiet Luxury',
      likes: 184,
      bookmarksCount: 65,
    };
  }
}

/**
 * Ask Gemini Fashion Stylist / Sartorial Concierge
 */
export async function askGeminiFashionStylist(question: string): Promise<string> {
  const systemPrompt = `
You are the AI Chief Sartorial Stylist at "Fashion Graviti", an elite high-fashion publication.
Answer the user's styling question with authoritative, elegant, and practical luxury fashion advice.
Keep responses concise, chic, and insightful (2-3 concise paragraphs or bullet points).
`;

  try {
    const response = await fetch(getApiUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: `${systemPrompt}\n\nUser Question: ${question}` }],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini Stylist error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Fashion is the art of self-expression through exquisite proportion and confidence.';
  } catch (err) {
    console.error('Stylist query error:', err);
    return 'For timeless elegance, pair structured neutral tailoring with textured knitwear and minimal architectural footwear.';
  }
}
