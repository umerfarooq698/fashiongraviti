const fs = require('fs');
const path = require('path');

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1US2Atwu-6NYcTYXQpIHnRSIRersrUvIK7spO5b9A2M0/export?format=csv&gid=0';
const PROJECT_ROOT = process.cwd();
const PUBLISHED_KEYWORDS_FILE = path.join(PROJECT_ROOT, 'scripts/published-keywords.json');
const INITIAL_ARTICLES_FILE = path.join(PROJECT_ROOT, 'src/data/initialArticles.ts');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY is required!');
  process.exit(1);
}

// 4 In-House Fashion Graviti Author Personas
const AUTHORS = [
  {
    name: 'Aurelia Vance-Sterling',
    slug: 'aurelia-vance-sterling',
    role: 'Editor-in-Chief and Haute Couture Critic',
    location: 'Paris and New York',
    avatar: '/authors/aurelia-vance-sterling.jpg',
    instagram: '@aurelia_vance'
  },
  {
    name: 'Julian Thorne-Dumont',
    slug: 'julian-thorne-dumont',
    role: 'Senior Sartorial and Tailoring Critic',
    location: 'Milan and London',
    avatar: '/authors/julian-thorne-dumont.jpg',
    instagram: '@julian_sartorial'
  },
  {
    name: 'Renata Moreau-Kroll',
    slug: 'renata-moreau-kroll',
    role: 'Celebrity Style and Red Carpet Columnist',
    location: 'New York and Cannes',
    avatar: '/authors/renata-moreau-kroll.jpg',
    instagram: '@renata_moreau'
  },
  {
    name: 'Soren Lindqvist-Kovac',
    slug: 'soren-lindqvist-kovac',
    role: 'Avant-Garde and Heritage Brand Scholar',
    location: 'Stockholm and Copenhagen',
    avatar: '/authors/soren-lindqvist-kovac.jpg',
    instagram: '@soren_fashionarch'
  }
];

// Dynamic high-res fashion imagery search
async function resolveTopicImages(keyword, queries = []) {
  console.log(`Searching dynamic topic-relevant images for: "${keyword}"...`);
  const searchTerms = [...(queries || []), keyword, keyword.replace(/color palette|types of|guide|what is|can you wear/gi, '').trim()].filter(Boolean);
  
  for (const term of searchTerms) {
    try {
      const res = await fetch(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(term)}&per_page=6`);
      if (res.ok) {
        const data = await res.json();
        if (data.results && data.results.length >= 2) {
          console.log(`Found matching high-res Unsplash photos using: "${term}"`);
          return {
            cover: data.results[0].urls.regular,
            secondary: data.results[1].urls.regular,
            alt: data.results[0].alt_description || keyword
          };
        } else if (data.results && data.results.length === 1) {
          return {
            cover: data.results[0].urls.regular,
            secondary: data.results[0].urls.regular,
            alt: data.results[0].alt_description || keyword
          };
        }
      }
    } catch (e) {
      console.warn('Unsplash fetch error:', e.message);
    }
  }

  // Wikipedia fallback for celebrity or specific fashion designer / brand
  try {
    const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&pithumbsize=1200&generator=search&gsrsearch=${encodeURIComponent(keyword)}&gsrlimit=3`;
    const res = await fetch(wikiUrl);
    if (res.ok) {
      const data = await res.json();
      if (data.query && data.query.pages) {
        const pages = Object.values(data.query.pages).filter(p => p.thumbnail);
        if (pages.length > 0) {
          console.log(`Found matching Wikipedia photos for: "${keyword}"`);
          return {
            cover: pages[0].thumbnail.source,
            secondary: pages[1] ? pages[1].thumbnail.source : pages[0].thumbnail.source,
            alt: pages[0].title
          };
        }
      }
    }
  } catch (e) {}

  // Last safety fallback
  return {
    cover: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
    secondary: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
    alt: keyword
  };
}

async function fetchKeywordsFromSheet() {
  console.log('Fetching keywords from Google Sheet...');
  const res = await fetch(SHEET_CSV_URL);
  if (!res.ok) throw new Error('Failed to fetch Google Sheet CSV: ' + res.status);
  const text = await res.text();
  const rawLines = text.split('\n').map(l => l.trim().replace(/^[\",]+|[\",]+$/g, '')).filter(Boolean);
  return rawLines;
}

function loadPublishedKeywords() {
  if (fs.existsSync(PUBLISHED_KEYWORDS_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(PUBLISHED_KEYWORDS_FILE, 'utf8'));
    } catch {
      return [];
    }
  }
  return [];
}

function savePublishedKeywords(list) {
  fs.writeFileSync(PUBLISHED_KEYWORDS_FILE, JSON.stringify(list, null, 2));
}

function formatArticleDate() {
  const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  const d = new Date();
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

async function callGemini(keyword) {
  // Ordered active models with fallback
  const models = ['gemini-flash-latest', 'gemini-3.5-flash-lite', 'gemini-3.5-flash', 'gemini-3.8-flash'];
  const prompt = `You are an elite haute-couture fashion features editor and senior style analyst at Fashion Graviti.
Write an authentic, highly sophisticated editorial article on the exact keyword: '${keyword}'.

CRITICAL EDITORIAL RULES:
1. Title: Exactly between 55 and 60 characters long (count characters carefully, no colons : and no hyphens/dashes -).
2. Subtitle: EXACTLY 140 characters long (count characters precisely including spaces). Do NOT use any of these words: discover, learn, read, explore, in-depth, comprehensive.
3. Paragraph & Sentence Brevity (VERY IMPORTANT):
   - Every paragraph in bodyParagraphs MUST be short and punchy: exactly 1 to 2 sentences per paragraph (maximum 20 to 30 words per item).
   - NEVER write big chunks or long paragraphs. Keep it light, airy, and easy to read.
   - Sentences must be crisp and direct: 10 to 14 words per sentence.
4. Structure:
   - Introduce the topic with quiet luxury authority.
   - Use natural human editorial H2 (##) and H3 (###) subheadings with zero AI gerund cliches (never start headings with Mastering, Navigating, Decoding, Understanding, Embracing).
   - Include a section: ## Key Style Takeaways (with 4-5 bullet points).
   - Do NOT put FAQs inside bodyParagraphs! Put all FAQs exclusively in the separate 'faqs' array below.
   - Conclude with an editorial summary.
5. Content Word Count: Between 900 and 1,100 words.
6. Punctuation: ZERO hyphens, en-dashes, or em-dashes (-, —, –) anywhere in visible editorial prose or headings. (Write 'cool toned', 'sixty thirty ten', 'mid tone').
7. Category: Choose the single best category id from: ['fashion-news', 'fashion-trends', 'celebrity', 'designers-brands', 'beauty', 'how-to-style'].
8. CategoryLabel: Matching display name e.g. 'Fashion Trends', 'How to Style', 'Designers And Brands', 'Celebrity', 'Beauty', or 'Fashion News'.

Output strictly valid JSON:
{
  "title": "string (55 to 60 characters)",
  "subtitle": "string (exactly 140 characters)",
  "category": "category-id",
  "categoryLabel": "Category Label",
  "readTime": "8 MIN READ",
  "dropCapText": "string (one powerful opening sentence, max 20 words)",
  "bodyParagraphs": ["array", "of", "short", "bite sized", "paragraphs (1-2 sentences each)", "with", "## H2", "and", "### H3", "and", "bullet points"],
  "pullQuoteText": "string (inspirational quote from author)",
  "faqs": [
    { "question": "Question string?", "answer": "Concise answer string." }
  ],
  "conclusion": "string (2-3 concluding summary sentences)",
  "tags": ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
  "imageSearchQueries": ["visual photography search phrase for main cover image", "visual search phrase for secondary fashion detail image"]
}
Output only raw JSON, nothing else.`;

  for (const m of models) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        console.log(`Querying ${m} (attempt ${attempt}) for keyword "${keyword}"...`);
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: 'application/json' }
          })
        });

        if (res.ok) {
          const data = await res.json();
          const jsonText = data.candidates[0].content.parts[0].text;
          const parsed = JSON.parse(jsonText);
          console.log(`Generated successfully with ${m}`);
          return parsed;
        } else {
          console.warn(`Model ${m} failed status:`, res.status);
          await new Promise(r => setTimeout(r, 2000));
        }
      } catch (e) {
        console.warn(`Error on ${m}:`, e.message);
        await new Promise(r => setTimeout(r, 2000));
      }
    }
  }

  throw new Error('All Gemini models failed to generate content.');
}

async function run() {
  const allKeywords = await fetchKeywordsFromSheet();
  const publishedKeywords = loadPublishedKeywords();

  console.log(`Sheet has ${allKeywords.length} keywords. Already published: ${publishedKeywords.length}`);

  // Find the next unpublished keyword
  const nextKeyword = allKeywords.find(k => !publishedKeywords.includes(k.toLowerCase()));

  if (!nextKeyword) {
    console.log('All keywords from the sheet have already been published!');
    process.exit(0);
  }

  console.log(`Next target keyword: "${nextKeyword}"`);

  const generated = await callGemini(nextKeyword);

  // Author assignment
  const author = AUTHORS[publishedKeywords.length % AUTHORS.length];
  
  // Dynamic topic-relevant image search
  const topicImages = await resolveTopicImages(nextKeyword, generated.imageSearchQueries || []);
  const coverImage = topicImages.cover;
  const secondaryImage = topicImages.secondary;

  const slug = nextKeyword
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  // Helper to ensure paragraphs are never bulky and have zero hyphens
  const cleanBodyParagraphs = (paragraphs) => {
    const result = [];
    for (const item of (paragraphs || [])) {
      if (typeof item !== 'string') continue;
      // Sanitize hyphens and dashes
      const sanitized = item.replace(/[—–]/g, ' ').replace(/\s+-\s+/g, ' ').trim();
      if (!sanitized) continue;
      
      // Keep headings and bullet points intact
      if (sanitized.startsWith('#') || sanitized.startsWith('*') || sanitized.startsWith('-')) {
        result.push(sanitized);
        continue;
      }
      
      // Match individual sentences
      const sentences = sanitized.match(/[^.!?]+[.!?]+(\s+|$)|[^.!?]+$/g);
      if (!sentences || sentences.length <= 2) {
        result.push(sanitized);
      } else {
        // Chunk into max 2 sentences per paragraph
        for (let i = 0; i < sentences.length; i += 2) {
          const chunk = sentences.slice(i, i + 2).join(' ').trim();
          if (chunk) result.push(chunk);
        }
      }
    }
    return result;
  };

  const newArticle = {
    id: `article-${slug}-${Date.now()}`,
    title: (generated.title || '').replace(/[—–-]/g, ' ').trim(),
    subtitle: (generated.subtitle || '').replace(/[—–-]/g, ' ').trim(),
    slug: slug,
    category: generated.category || 'how-to-style',
    categoryLabel: generated.categoryLabel || 'How to Style',
    season: 'AUTUMN / WINTER 2026',
    issueNumber: `ISSUE NO. ${18 + publishedKeywords.length}`,
    locationTag: 'PARIS // EDITORIAL DESK',
    featured: publishedKeywords.length === 0,
    author: {
      name: author.name,
      role: author.role,
      location: author.location,
      avatar: author.avatar,
      instagram: author.instagram
    },
    publishedAt: formatArticleDate(),
    readTime: generated.readTime || '8 MIN READ',
    coverImage: coverImage,
    coverImageAlt: `${generated.title} editorial showcase in Parisian haute couture style`,
    content: {
      dropCapText: (generated.dropCapText || 'Quiet luxury and refined sartorial elegance define the essential modern wardrobe.').replace(/[—–]/g, ' '),
      bodyParagraphs: cleanBodyParagraphs(generated.bodyParagraphs),
      pullQuote: {
        text: (generated.pullQuoteText || 'True style is never about excess, but the quiet confidence of proportion and restraint.').replace(/[—–]/g, ' '),
        attribution: author.name
      },
      secondaryImage: {
        url: secondaryImage,
        caption: `Editorial curation for ${nextKeyword}`,
        alt: `High fashion editorial aesthetic for ${nextKeyword}`
      },
      closingParagraphs: [
        'Curating a timeless fashion presence requires patience, textile literacy, and an unwavering commitment to personal elegance.',
        'As the modern wardrobe evolves, true sophistication remains rooted in harmonious proportions and deliberate curation.'
      ],
      conclusion: generated.conclusion || 'Understated luxury speaks through authentic craftsmanship and effortless daily poise.',
      faqs: generated.faqs || []
    },
    tags: generated.tags || [nextKeyword, 'Luxury Style', 'Fashion Trends', 'Couture'],
    mood: 'Quiet Luxury',
    likes: Math.floor(Math.random() * 200) + 150,
    bookmarksCount: Math.floor(Math.random() * 80) + 50
  };

  // Insert article into src/data/initialArticles.ts
  let code = fs.readFileSync(INITIAL_ARTICLES_FILE, 'utf8');
  const target = 'export const INITIAL_ARTICLES: FashionArticle[] = [';

  if (!code.includes(target)) {
    throw new Error('Target string not found in initialArticles.ts');
  }

  const jsonSnippet = '\n  ' + JSON.stringify(newArticle, null, 2).replace(/\n/g, '\n  ') + ',';
  code = code.replace(target, target + jsonSnippet);

  // Update category counts
  code = code.replace(
    new RegExp(`(id:\\s*'${newArticle.category}'[\\s\\S]*?count:\\s*)(\\d+)`),
    (m, p1, p2) => p1 + (parseInt(p2, 10) + 1)
  );
  code = code.replace(
    /(id:\s*'all'[\s\S]*?count:\s*)(\d+)/,
    (m, p1, p2) => p1 + (parseInt(p2, 10) + 1)
  );

  fs.writeFileSync(INITIAL_ARTICLES_FILE, code);
  console.log(`Article for "${nextKeyword}" successfully inserted into initialArticles.ts!`);

  // Record published keyword
  publishedKeywords.push(nextKeyword.toLowerCase());
  savePublishedKeywords(publishedKeywords);
  console.log(`Published list updated. Total published: ${publishedKeywords.length}`);
}

run().catch(err => {
  console.error('Execution failed:', err);
  process.exit(1);
});
