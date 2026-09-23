import type { FashionArticle } from '../types/fashion';
import { getAuthorProfile } from '../data/authors';
import { getRandomUnsplashFashionPhoto, searchUnsplashPhotos } from './unsplash';

const GEMINI_API_KEY = (import.meta.env.VITE_GEMINI_API_KEY as string) || '';

const getApiUrl = () =>
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

const AUTHORS_LIST = [
  'Aurelia Vance-Sterling',
  'Julian Thorne-Dumont',
  'Renata Moreau-Kroll',
  'Soren Lindqvist-Kovac',
];

export interface GeminiGeneratedArticle {
  title: string;
  subtitle: string;
  metaSlug?: string;
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

/**
 * Strips hyphens, en-dashes, and em-dashes from editorial text to avoid artificial or AI-sounding prose.
 * Converts compound words (e.g. "quick-dry" -> "quick dry", "high-fashion" -> "high fashion")
 * and converts em-dashes / spaced dashes into natural flow.
 */
export function stripHyphensAndDashes(text: string): string {
  if (!text) return '';
  let cleaned = text
    .replace(/[—–]/g, ' ')
    .replace(/\s+-\s+/g, ' ')
    .replace(/(\b\w+)-(\w+\b)/g, '$1 $2')
    .replace(/(\b\w+)-(\w+\b)/g, '$1 $2');
  return cleaned.replace(/  +/g, ' ').trim();
}

export function enforceTitle55to60(rawTitle: string): string {
  let title = stripHyphensAndDashes(rawTitle || '')
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
 * Generates an SEO meta URL slug from a title or topic.
 * Keeps it descriptive (3 to 6 words), includes primary keywords, and removes unnecessary stop words.
 * Never outputs just a raw single keyword.
 */
export function generateMetaSlug(titleOrTopic: string): string {
  const stopWords = new Set([
    'a', 'an', 'the', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 
    'have', 'has', 'had', 'been', 'to', 'in', 'on', 'at', 'by', 'for', 
    'with', 'about', 'from', 'into', 'this', 'that', 'these', 'those'
  ]);
  const words = titleOrTopic
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 0 && !stopWords.has(w));
  
  const selected = words.slice(0, 5);
  return selected.join('-') || `editorial-story-${Date.now()}`;
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
You are a senior fashion editor, stylist, and professional SEO content writer for a modern fashion magazine ("Fashion Graviti").

Write a complete, original, reader-first fashion article based on the keyword or topic provided.

CONTENT LENGTH:
* Write 1000–1200 words unless another length is requested.
* Every paragraph must provide useful information.
* Do not add filler just to reach the word count.

ORIGINALITY:
* Every article must be written completely from scratch.
* Never use one fixed article template.
* Every new article must have a fresh editorial angle, structure, introduction, headings, examples, advice, flow, and conclusion.
* Never simply rewrite, paraphrase, spin, or reorganize a previous article.
* The same keyword may appear more than once. If it does, treat it as a completely new assignment.
* For repeated keywords, internally choose a different useful fashion angle before writing.
* Possible angles may include styling, fit, proportions, fabrics, seasons, occasions, colours, footwear, accessories, buying advice, garment care, wardrobe use, layering, silhouettes, mistakes, or another relevant perspective.
* Do not mechanically follow the same sequence of angles.
* Never mention which angle was selected.

HEADINGS:
* Create one original H1 ("title").
* Use multiple H2 headings ("## Heading") in bodyParagraphs.
* Use H3 subheadings ("### Subheading") where they genuinely improve the article.
* Every article must use a different heading structure.
* Never repeatedly use the same H2 or H3 pattern.
* Do not slightly rename old headings while keeping the same structure.
* Change both the wording and purpose of headings.
* Vary the number of H2 and H3 sections naturally.
* Do not make every heading a question.
* Do not use numbered headings unless the topic genuinely requires a list or step-by-step format.
* Every H2 should normally include a short introductory paragraph before any H3 appears.

FASHION EXPERTISE:
Write specifically for a fashion audience.
Where relevant, use practical knowledge of:
* fit and proportions
* silhouettes
* fabrics and material behaviour
* texture and drape
* colour coordination
* layering
* garment construction
* footwear
* accessories
* seasonal dressing
* occasion suitability
* comfort
* garment care
* wardrobe versatility
* buying considerations
Only include concepts that genuinely help the specific article.

E-E-A-T:
* Write with strong subject knowledge and practical fashion expertise.
* Give realistic and useful advice.
* Explain why recommendations make sense.
* Do not invent personal experience, qualifications, interviews, quotes, research, statistics, prices, designer statements, product testing, or trend claims.
* Do not pretend to have personally worn, purchased, tested, or reviewed anything.
* Do not make unsupported factual claims.

WRITING STYLE:
* Use a natural, polished fashion-magazine editorial voice.
* Write for human readers first.
* Keep language clear, smooth, and easy to understand.
* Use short and medium-length paragraphs.
* Keep most paragraphs between 2 and 5 sentences.
* Mix short and medium sentences with occasional longer sentences.
* Avoid excessively long sentences.
* Avoid repetitive wording and sentence structures.
* Avoid filler, vague statements, mechanical phrasing, and generic writing.
* Use bullet points only when they genuinely improve readability.

Avoid repetitive phrases such as:
"Whether you're..."
"When it comes to..."
"In today's world..."
"It is important to..."
"In the ever-evolving world of fashion..."
"From X to Y..."
"The key is..."
"At the end of the day..."
"There is no denying..."
Do not replace these with another repeatedly used set of clichés.

INTRODUCTION:
* Start with something useful, practical, interesting, or directly relevant to the topic in dropCapText and opening body paragraph.
* Change the introduction style for every article.
* Do not repeatedly start with definitions, questions, or generic fashion statements.

ARTICLE STRUCTURE:
* Build the article around the specific keyword instead of a reusable template.
* Use H2 and H3 sections naturally.
* Add styling ideas, examples, comparisons, buying advice, mistakes, or care tips only when relevant.
* Change the information order from article to article.
* Do not force the same sections into every article.

CONCLUSION:
* End with a useful conclusion, final perspective, summary, or practical takeaway.
* Change the conclusion style for every article.
* Do not repeatedly use the same closing wording or format.

FAQS:
* Add 3 useful FAQs after the conclusion.
* Questions must directly relate to the article.
* Do not repeat questions already fully answered in the main article.
* If the same keyword appears again, create different FAQs.

SEO:
* Understand the likely search intent before writing.
* Use the primary keyword naturally in the H1, introduction, body, and at least one relevant heading where appropriate.
* Use related fashion terminology naturally.
* Never keyword-stuff.
* Avoid unnecessary repetition of the exact keyword.
* Prioritize usefulness, originality, accuracy, readability, and depth over keyword frequency.

REPEATED KEYWORD RULE:
If the same or a very similar keyword appears again:
* Create a different title concept.
* Choose a different editorial angle.
* Use a different introduction style.
* Use different H2 headings.
* Use different H3 headings.
* Change the section order.
* Use different examples and fashion situations.
* Use different styling recommendations.
* Use a different conclusion.
* Use different FAQs.
* Do not reproduce the same article pattern.
* Make the new article useful for a different aspect of the same subject.

PROHIBITED CONTENT:
Do not mention:
* artificial intelligence
* AI
* robots
* robotics
* machine learning
* language models
* prompts
* automation
* content generation
* internal writing instructions
* how the article was created

MANDATORY TECHNICAL CONSTRAINTS:
1. HEADLINE ("title"):
   - LENGTH: MUST BE STRICTLY 55 TO 60 CHARACTERS LONG (including letters and spaces).
   - NO COLONS (ABSOLUTE RULE): NEVER use a colon (':') in the headline.
   - Natural keyword placement.
2. META DESCRIPTION ("subtitle"):
   - LENGTH: MUST BE EXACTLY 140 CHARACTERS LONG (letters + spaces).
   - ABSOLUTE BAN ON FORBIDDEN WORDS: NEVER use 'discover', 'learn', 'read', 'comprehensive', 'in depth', 'in-depth', 'explore', 'unlock', 'delve', 'dive'.
3. ZERO HYPHENS OR DASHES (ABSOLUTE RULE):
   - NEVER use hyphens ('-'), en-dashes, or em-dashes ('—') anywhere in titles, subtitles, headings, body text, bullet points, image captions, designer credits, conclusions, or FAQs.
   - Spell words unhyphenated or with spaces (e.g. 'quick dry', 'high fashion', 'high waisted', 'ring spun', 'cross body').
   - Never use the ampersand symbol ('&'). Always spell out 'and'.
4. META URL SLUG ("metaSlug"):
   - Clean, descriptive 3 to 6 word meta URL slug (e.g. "camo-jorts-biggest-street-trend-this-season"). NEVER just the raw keyword.
   - STRICT RULE: NEVER make the URL slug just the single raw keyword (e.g. do NOT output "camo-jorts" or "jorts"). The meta slug must always include contextual editorial words describing the article angle.

JSON Schema:
{
  "title": "Strictly 55-60 chars luxury headline with keyword and NO colon",
  "subtitle": "Direct authoritative summary (EXACTLY 140 chars, NO forbidden words)",
  "metaSlug": "descriptive-3-to-6-word-meta-url-slug",
  "category": "fashion-news | fashion-trends | celebrity | designers-brands | beauty | how-to-style",
  "categoryLabel": "Fashion News | Fashion Trends | Celebrity | Designers And Brands | Beauty | How to Style",
  "authorName": "Aurelia Vance-Sterling | Julian Thorne-Dumont | Renata Moreau-Kroll | Soren Lindqvist-Kovac",
  "dropCapText": "First sentence of the article, powerful and poetic (1-2 sentences)",
  "bodyParagraphs": [
    "## First Major Heading",
    "Detailed analytical paragraph (2-4 sentences) exploring cultural and runway context.",
    "Second focused paragraph with technical textile or fit insight.",
    "## Second Major Heading",
    "Practical narrative paragraph explaining silhouette geometry and outfit pairings.",
    "Subsequent paragraph detailing fabric weight or tailoring nuances in fluent prose.",
    "## Third Major Heading",
    "Nuanced street style critique connecting garment construction to daily wearability.",
    "Closing analytical paragraph on wardrobe integration and longevity."
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
    const GEMINI_MODELS_HIERARCHY = [
      'gemini-flash-latest',       // 1. Tested 200 OK (Latest ultra-fast model)
      'gemini-3.5-flash',          // 2. Tested 200 OK (Stable high-speed model)
      'gemini-3.6-flash',          // 3. Next-gen model
      'gemini-3.5-flash-lite',     // 4. Ultra-reliable lightweight model
      'gemini-flash-lite-latest',  // 5. Flash-lite fallback
      'gemini-3-flash-preview',    // 6. Preview fallback
      'gemini-pro-latest',         // 7. Flagship fallback
    ];

  let rawContent = '';

  for (const model of GEMINI_MODELS_HIERARCHY) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
      const response = await fetch(url, {
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
        console.warn(`Gemini model ${model} failed with HTTP status ${response.status}. Falling back to next model...`);
        continue;
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text) {
        rawContent = text;
        console.log(`Successfully generated article with Gemini model: ${model}`);
        break;
      }
    } catch (err) {
      console.warn(`Error generating with Gemini model ${model}:`, err);
    }
  }

  if (!rawContent) {
    throw new Error('All models in Gemini fallback hierarchy failed to generate content.');
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
    const rawSlug = parsed.metaSlug 
      ? parsed.metaSlug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      : '';
    const slug = (rawSlug && rawSlug.length >= 6) ? rawSlug : generateMetaSlug(finalTitle);

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
      subtitle: stripHyphensAndDashes(parsed.subtitle),
      slug: slug || articleId,
      category: parsed.category || 'fashion-news',
      categoryLabel: parsed.categoryLabel || 'Fashion News',
      season: 'AUTUMN / WINTER 2026',
      issueNumber: 'ISSUE NO. 08',
      locationTag: '',
      author: {
        name: stripHyphensAndDashes(authorProfile.name),
        role: stripHyphensAndDashes(authorProfile.role),
        avatar: authorProfile.avatar,
        bio: stripHyphensAndDashes(authorProfile.bio),
        instagram: authorProfile.instagram,
      },
      publishedAt: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).toUpperCase(),
      readTime: '7 MIN READ',
      coverImage: formatUnsplash16x9(coverPhoto.url),
      coverImageCaption: coverPhoto.altDescription ? stripHyphensAndDashes(`Editorial Runway Presentation: ${coverPhoto.altDescription}`) : undefined,
      coverImageAlt: stripHyphensAndDashes(coverPhoto.altDescription || `Curated high fashion editorial styling for ${finalTitle}`),
      content: {
        dropCapText: stripHyphensAndDashes(parsed.dropCapText),
        bodyParagraphs: (parsed.bodyParagraphs || []).map((p: string) => {
          const trimmed = p.trim();
          const normalized = trimmed.startsWith('- ') ? `* ${trimmed.slice(2)}` : trimmed;
          if (normalized.startsWith('## ')) {
            return `## ${stripHyphensAndDashes(normalized.slice(3))}`;
          }
          if (normalized.startsWith('### ')) {
            return `### ${stripHyphensAndDashes(normalized.slice(4))}`;
          }
          if (normalized.startsWith('* ')) {
            return `* ${stripHyphensAndDashes(normalized.slice(2))}`;
          }
          return stripHyphensAndDashes(normalized);
        }),
        pullQuote: {
          text: stripHyphensAndDashes(parsed.pullQuoteText),
          attribution: stripHyphensAndDashes(parsed.pullQuoteAttribution),
        },
        secondaryImage: {
          url: formatUnsplash16x9(secondaryPhoto.url),
          caption: secondaryPhoto.altDescription ? stripHyphensAndDashes(`Atelier Detail: ${secondaryPhoto.altDescription}`) : undefined,
          alt: stripHyphensAndDashes(secondaryPhoto.altDescription || `Atelier construction and craftsmanship detail for ${finalTitle}`),
        },
        closingParagraphs: (parsed.closingParagraphs || []).map((p: string) => stripHyphensAndDashes(p)),
        conclusion: parsed.conclusion ? stripHyphensAndDashes(parsed.conclusion) : undefined,
        faqs: (parsed.faqs || []).map((faq: any) => ({
          question: stripHyphensAndDashes(faq.question),
          answer: stripHyphensAndDashes(faq.answer),
        })),
        designerCredits: (parsed.designerCredits || []).map((credit: any) => ({
          house: stripHyphensAndDashes(credit.house),
          garment: stripHyphensAndDashes(credit.garment),
          materials: stripHyphensAndDashes(credit.materials),
        })),
      },
      tags: (parsed.tags || ['Fashion', 'Runway', 'Haute Couture']).map((t: string) => stripHyphensAndDashes(t)),
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
      title: enforceTitle55to60(promptOrTopic ? `${promptOrTopic} Editorial Runway Analysis` : 'Autumn Runway Bulletin Modern Proportions and Atelier Art'),
      subtitle: 'Inside the newest couture collections exploring sculptural tailoring, rare natural fibers, and contemporary luxury.',
      slug: `editorial-analysis-${Date.now()}`,
      category: (targetCategory as any) || 'fashion-news',
      categoryLabel: 'Fashion News',
      season: 'AUTUMN / WINTER 2026',
      issueNumber: 'ISSUE NO. 08',
      locationTag: '',
      author: {
        name: stripHyphensAndDashes(fallbackAuthor.name),
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
