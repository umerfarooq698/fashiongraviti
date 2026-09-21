import type { FashionArticle } from '../types/fashion';
import { getAuthorProfile } from '../data/authors';
import { getRandomUnsplashFashionPhoto, searchUnsplashPhotos } from './unsplash';

const GEMINI_API_KEY = (import.meta.env.VITE_GEMINI_API_KEY as string) || '';

const getApiUrl = () =>
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${GEMINI_API_KEY}`;

const AUTHORS_LIST = [
  'Aurelia Vance-Sterling',
  'Julian Thorne-Dumont',
  'Renata Moreau-Kroll',
  'Soren Lindqvist-Kovac',
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
  conclusion?: string;
  faqs?: Array<{ question: string; answer: string }>;
  closingParagraphs: string[];
  designerCredits: Array<{ house: string; garment: string; materials: string }>;
  visualSearchPhrase?: string;
  tags: string[];
  mood: 'Dark Romanticism' | 'Quiet Luxury' | 'Opulent Minimalism' | 'Avant-Garde' | 'Sustainable Tech';
}

export function enforceTitle55to60(rawTitle: string): string {
  let title = (rawTitle || '')
    .replace(/:/g, '')
    .replace(/\s+/g, ' ')
    .replace(/&/g, 'and')
    .trim();

  if (title.length >= 55 && title.length <= 60 && !title.includes(':')) {
    return title;
  }
  if (title.length > 60) {
    let truncated = title.slice(0, 60);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace >= 45) {
      truncated = truncated.slice(0, lastSpace);
    }
    if (truncated.length < 55) {
      const candidates = [' Style', ' Notes', ' Trends', ' Report', ' Mode', ' Looks'];
      for (const c of candidates) {
        if ((truncated + c).length >= 55 && (truncated + c).length <= 60) {
          return (truncated + c).replace(/:/g, '');
        }
      }
      return title.slice(0, 60).replace(/:/g, '');
    }
    return truncated.replace(/:/g, '');
  }
  if (title.length < 55) {
    const candidates = [
      ' in Modern Luxury Style',
      ' for Timeless Sartorial Poise',
      ' in Contemporary Fashion',
      ' for Understated Luxury',
      ' in Modern Haute Couture',
      ' and Modern Styling Notes',
      ' for Refined Wardrobes',
    ];
    for (const c of candidates) {
      const combo = `${title} ${c.trim()}`.replace(/\s+/g, ' ');
      if (combo.length >= 55 && combo.length <= 60) {
        return combo.replace(/:/g, '');
      }
    }
  }
  return title.replace(/:/g, '');
}

/**
 * Ensures Unsplash URLs are strictly cropped to 16:9 widescreen format (1600x900)
 */
export function formatUnsplash16x9(url: string): string {
  if (!url) return url;
  if (!url.includes('images.unsplash.com')) return url;
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?auto=format&fit=crop&crop=top&w=1600&h=900&q=85`;
}

/**
 * Generates a full high-fashion editorial article using Gemini 3.6 Flash and Live Unsplash Imagery
 */
export async function generateFashionArticleWithGemini(
  promptOrTopic?: string,
  targetCategory?: string
): Promise<FashionArticle> {
  const categoryConstraint = targetCategory ? `For the category: "${targetCategory}".` : '';
  const topicPrompt = promptOrTopic
    ? `Write a detailed, completely unique 1000–1200 word high-fashion editorial article based on the keyword: "${promptOrTopic}". ${categoryConstraint}`
    : `Write a detailed, completely unique 1000–1200 word breaking high-fashion runway editorial article. ${categoryConstraint}`;

  const systemInstruction = `
You are the Chief Fashion Editor and Senior Luxury Columnist of "Fashion Graviti", an elite high-fashion publication (like Vogue, Harper's Bazaar, or The Gentlewoman).
Generate a completely unique, thorough 1000–1200 word fashion article based strictly on the provided keyword in strict JSON format.

MANDATORY EDITORIAL AND SEO GUIDELINES:
1. HEADLINE ("title"):
   - LENGTH: MUST BE STRICTLY 55 TO 60 CHARACTERS LONG (including letters and spaces). Count characters precisely!
   - NO COLONS (ABSOLUTE RULE): NEVER use a colon (':') in the headline. Write a seamless, fluid headline without any colons.
   - BAN REPETITIVE FORMULAS (NEVER START WITH "Why..." OR "How..."): Avoid formulaic, repetitive titles! Do NOT start every article with "Why [Keyword]..." or "How [Keyword]...". Every headline must have a completely unique, fresh structure, distinct starting word, and varied rhythm (e.g. bold statements, active verbs, material focus, cultural perspectives, or atelier insights).
   - NATURAL KEYWORD PLACEMENT: Seamlessly place the keyword anywhere in the title (beginning, middle, or end). Do NOT force it to start with the keyword.
   - ZERO AI CLICHÉS: Never use words like 'AI', 'Artificial Intelligence', 'algorithm', 'revolutionize', 'unlocking', 'delving', 'tapestry', 'next-gen', 'game-changing', 'navigating', 'testament'.
2. META DESCRIPTION ("subtitle"):
   - LENGTH: MUST BE EXACTLY 140 CHARACTERS LONG (letters + spaces). Count precisely.
   - ABSOLUTE BAN ON FORBIDDEN WORDS: NEVER use words like 'discover', 'learn', 'read', 'comprehensive', 'in depth', 'in-depth', 'explore', 'unlock', 'delve', 'dive'.
   - Write a direct, authoritative fashion statement summarizing the article.
3. WRITE FOR REAL READERS FIRST (MAXIMUM READABILITY AND INFORMATIONAL VALUE):
   - Every article MUST be deeply informational, highly readable, and immensely practical for real readers.
   - Provide concrete, tangible fashion insights: specific material grades, textile weaves, leather tanning methods, tailoring measurements, outfit pairing formulas, and purchasing criteria.
   - Completely avoid generic fluff, robotic filler, or vague generalities. Every sentence must offer sharp sartorial perspective and genuine reader value.
4. CLEAR FOCUS AND NATURAL FLOW:
   - Keep every section focused on one clear idea. Do not mix unrelated points in the same paragraph or section.
   - Maintain a smooth, natural flow from one section to the next.
5. SENTENCE AND PARAGRAPH STRUCTURE:
   - Use short and medium-length sentences. Avoid long, complicated run-on sentences.
   - Keep paragraphs short (usually 2–4 sentences per paragraph) for effortless mobile reading.
6. FRESH AND DISTINCT STRUCTURE EVERY TIME (1000–1200 WORDS):
   - Always produce completely different structures, distinct angles, unique subheadings, and fresh prose. Never repeat phrasing or boilerplate paragraphs from previous articles.
   - Use natural markdown H2 ("## Section Title") and H3 ("### Subsection Title") in "bodyParagraphs" to structure the article.
   - Use mostly paragraphs and occasional clean bullet points ("* Bullet point") when listing styling tips or materials.
   - Total article length must be in the 1000–1200 word range.
7. FORBIDDEN PHRASES, WORDS AND SYMBOLS:
   - Never use the ampersand symbol ('&'). Always spell out the word 'and' in all titles, subtitles, headings, body text, image captions, designer credits, and FAQs.
   - Never use a colon (':') in article titles.
   - Never mention AI, SEO, algorithms, prompts, or content generation.
   - Never use meta phrases like "in this article", "this guide will", "as we have seen", "in conclusion", "it is worth noting that".
   - Never use the forbidden words: 'discover', 'learn', 'read', 'comprehensive', 'in depth', 'in-depth'.
8. CONCLUSION AND 3–4 FAQS (SHORT AND CONCISE):
   - Include a concise, impactful "conclusion" summary (2-3 sentences).
   - Provide 3–4 practical, highly relevant "faqs". Keep BOTH questions and answers very short, punchy, and direct (question: 5–9 words; answer: strictly 1–2 short sentences / under 25 words).
9. VISUAL SEARCH PHRASE:
   - Provide a short, precise 3-5 word "visualSearchPhrase" describing the ideal runway/editorial photo to fetch via Unsplash API.

JSON Schema:
{
  "title": "Strictly 55-60 chars luxury headline with keyword and NO colon",
  "subtitle": "Direct authoritative summary (EXACTLY 140 chars, NO forbidden words)",
  "category": "fashion-news | fashion-trends | celebrity | designers-brands | beauty | how-to-style",
  "categoryLabel": "Fashion News | Fashion Trends | Celebrity | Designers And Brands | Beauty | How to Style",
  "authorName": "Aurelia Vance-Sterling | Julian Thorne-Dumont | Renata Moreau-Kroll | Soren Lindqvist-Kovac",
  "dropCapText": "First sentence of the article, powerful and poetic (1-2 sentences)",
  "bodyParagraphs": [
    "## First Major Heading",
    "Detailed analytical paragraph (2-4 sentences).",
    "Second focused paragraph with styling insight.",
    "## Second Major Heading",
    "Practical fashion advice paragraph.",
    "* Styling rule or outfit combination",
    "* Fabric or accessory detail",
    "### Nuanced Subheading",
    "Atelier construction and trend analysis paragraph.",
    "## Third Major Heading",
    "Buying guidance and modern wardrobe integration paragraph."
  ],
  "pullQuoteText": "Inspiring, quotable statement from the review",
  "pullQuoteAttribution": "Designer, Critic, or Atelier Council",
  "secondaryImageCaption": "Backstage / Atelier description caption",
  "conclusion": "A short, sharp takeaway on the aesthetic and future styling trajectory.",
  "faqs": [
    { "question": "Short direct question (under 10 words)?", "answer": "Crisp direct answer (1-2 short sentences)." },
    { "question": "Second short question?", "answer": "Brief actionable fashion tip." },
    { "question": "Third short question?", "answer": "Short fabric or styling advice." }
  ],
  "closingParagraphs": [
    "Closing reflection on modern elegance and timeless design."
  ],
  "designerCredits": [
    { "house": "Luxury Atelier Name", "garment": "Garment Description", "materials": "Silk, Cashmere, Obsidian Hardware, etc." }
  ],
  "visualSearchPhrase": "runway couture silk tailoring",
  "tags": ["SEO_Tag1", "SEO_Tag2", "SEO_Tag3", "SEO_Tag4"],
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
    const finalTitle = enforceTitle55to60(parsed.title);
    const slug = finalTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Fetch live Unsplash imagery tailored to the topic, visualSearchPhrase, and category
    const searchKeywords = parsed.visualSearchPhrase
      ? parsed.visualSearchPhrase
      : promptOrTopic
      ? `${parsed.category} ${promptOrTopic}`
      : `${parsed.category} ${parsed.tags?.[0] || 'runway'}`;
    
    let photos = await searchUnsplashPhotos(searchKeywords, 6);
    if (!photos || photos.length === 0) {
      photos = await searchUnsplashPhotos(parsed.category, 6);
    }

    const coverPhoto = photos[0] || (await getRandomUnsplashFashionPhoto(parsed.category));
    const secondaryPhoto = photos[1] || photos[0] || (await getRandomUnsplashFashionPhoto('designers-brands'));

    const article: FashionArticle = {
      id: articleId,
      title: finalTitle,
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
      readTime: '7 MIN READ',
      coverImage: formatUnsplash16x9(coverPhoto.url),
      coverImageCaption: coverPhoto.altDescription ? `Editorial Runway Presentation: ${coverPhoto.altDescription}` : undefined,
      coverImageAlt: coverPhoto.altDescription || `Curated high-fashion editorial styling for ${finalTitle}`,
      content: {
        dropCapText: parsed.dropCapText,
        bodyParagraphs: parsed.bodyParagraphs || [],
        pullQuote: {
          text: parsed.pullQuoteText,
          attribution: parsed.pullQuoteAttribution,
        },
        secondaryImage: {
          url: formatUnsplash16x9(secondaryPhoto.url),
          caption: secondaryPhoto.altDescription ? `Atelier Detail: ${secondaryPhoto.altDescription}` : undefined,
          alt: secondaryPhoto.altDescription || `Atelier construction and craftsmanship detail for ${finalTitle}`,
        },
        closingParagraphs: parsed.closingParagraphs || [],
        conclusion: parsed.conclusion,
        faqs: parsed.faqs || [],
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
      title: enforceTitle55to60(promptOrTopic ? `${promptOrTopic}: Editorial Runway Analysis` : 'Autumn Runway Bulletin: Modern Proportions and Atelier Art'),
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
      coverImage: formatUnsplash16x9(fallbackPhoto.url),
      coverImageCaption: undefined,
      coverImageAlt: fallbackPhoto.altDescription || 'Haute couture sculptural wool coat runway silhouette',
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
          url: formatUnsplash16x9(fallbackSecondary.url),
          caption: undefined,
          alt: fallbackSecondary.altDescription || 'Atelier structural tailoring and fine textile craftsmanship',
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
