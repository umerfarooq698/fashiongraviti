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

// Curated pool of high-res Unsplash editorial fashion imagery
const EDITORIAL_IMAGES = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1676291055501-286c48bb186f?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1741071520904-37ef3c0fea09?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1679156272446-30738eb5c4e7?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1705575518997-82a71bcc75a2?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1763029513623-37d488cb97b1?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1639065643006-e217c4fee12e?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1638617501607-5dfb8b079ebf?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1787181510660-a1f1efae64e7?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1779040623350-dfae823cc734?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1770795945712-ebe92e4ed235?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1538012924144-874bbdad28f5?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1640336437301-8368b53861ab?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1570258028946-b9a55411d117?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
  'https://images.unsplash.com/photo-1603122630570-7fd434d470d0?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1733322992706-1210ca79f4df?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1717944105945-669b3dd77bfd?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1742123316636-299eb108d83c?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1673201229733-69d19c5c4a87?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1604073788733-f01b27fe34cd?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1575225395866-965c8c77727f?auto=format&fit=crop&w=1200&q=85'
];

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
3. Sentence Length: Keep sentences short, crisp, punchy, and readable (10 to 16 words per sentence). No long winding sentences.
4. Structure:
   - Introduce the topic with quiet luxury authority.
   - Use natural human editorial H2 (##) and H3 (###) subheadings with zero AI gerund cliches (never start headings with Mastering, Navigating, Decoding, Understanding, Embracing).
   - Include a section: ## Key Style Takeaways (with 4-5 bullet points).
   - Include a section: ## Frequently Asked Questions (with 4 direct H3 questions & answers).
   - Conclude with an editorial summary.
5. Content Word Count: STRICTLY between 1,000 and 1,200 words.
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
  "dropCapText": "string (one powerful opening sentence, max 25 words)",
  "bodyParagraphs": ["array", "of", "markdown", "paragraphs", "with", "## H2", "and", "### H3", "and", "bullet points"],
  "pullQuoteText": "string (inspirational quote from author)",
  "faqs": [
    { "question": "Question string?", "answer": "Concise answer string." }
  ],
  "conclusion": "string (2-3 concluding summary sentences)",
  "tags": ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"]
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
  
  // Image selection
  const coverImage = EDITORIAL_IMAGES[(publishedKeywords.length * 2) % EDITORIAL_IMAGES.length];
  const secondaryImage = EDITORIAL_IMAGES[(publishedKeywords.length * 2 + 1) % EDITORIAL_IMAGES.length];

  const slug = nextKeyword
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const newArticle = {
    id: `article-${slug}-${Date.now()}`,
    title: generated.title,
    subtitle: generated.subtitle,
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
      dropCapText: generated.dropCapText || 'Quiet luxury and refined sartorial elegance define the essential modern wardrobe.',
      bodyParagraphs: generated.bodyParagraphs || [],
      pullQuote: {
        text: generated.pullQuoteText || 'True style is never about excess, but the quiet confidence of proportion and restraint.',
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
