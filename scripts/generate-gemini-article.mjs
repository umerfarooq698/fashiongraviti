import fs from 'fs';
import path from 'path';

// Read .env
const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/VITE_GEMINI_API_KEY=(.*)/);
const GEMINI_API_KEY = apiKeyMatch ? apiKeyMatch[1].trim() : '';

if (!GEMINI_API_KEY) {
  console.error('ERROR: VITE_GEMINI_API_KEY not found in .env');
  process.exit(1);
}

const topic = process.argv[2] || 'camo jorts';
const category = process.argv[3] || 'fashion-trends';

console.log(`Generating 100% authentic Google Gemini editorial for: "${topic}"...`);

export function stripHyphensAndDashes(text) {
  if (!text) return '';
  let cleaned = text
    .replace(/[—–]/g, ' ')
    .replace(/\s+-\s+/g, ' ')
    .replace(/(\b\w+)-(\w+\b)/g, '$1 $2')
    .replace(/(\b\w+)-(\w+\b)/g, '$1 $2');
  return cleaned.replace(/  +/g, ' ').trim();
}

export function enforceTitle55to60(rawTitle) {
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
    const candidates = [' Style', ' Notes', ' Trends', ' Report', ' Mode', ' Looks'];
    for (const c of candidates) {
      if ((truncated + c).length >= 55 && (truncated + c).length <= 60) {
        return (truncated + c).replace(/:/g, '');
      }
    }
    return title.slice(0, 60).replace(/:/g, '');
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

export function enforceSubtitle140(rawSubtitle) {
  let clean = stripHyphensAndDashes(rawSubtitle || '')
    .replace(/&/g, 'and')
    .replace(/\s+/g, ' ')
    .trim();

  // Remove forbidden words if any
  const forbidden = [/\bdiscover\b/gi, /\blearn\b/gi, /\bread\b/gi, /\bcomprehensive\b/gi, /\bin depth\b/gi, /\bexplore\b/gi, /\bunlock\b/gi, /\bdelve\b/gi, /\bdive\b/gi];
  forbidden.forEach(r => { clean = clean.replace(r, 'observe'); });

  if (clean.length === 140) return clean;
  if (clean.length > 140) {
    let cut = clean.slice(0, 140);
    const lastSpace = cut.lastIndexOf(' ');
    if (lastSpace >= 115) {
      cut = cut.slice(0, lastSpace);
    }
    if (!cut.endsWith('.')) cut = cut.replace(/[,\s]+$/, '') + '.';
    while (cut.length < 140) {
      const diff = 140 - cut.length;
      if (diff === 1) cut = cut.slice(0, -1) + ' .';
      else cut = cut.slice(0, -1) + ' now.';
    }
    return cut.slice(0, 140);
  }
  // If shorter than 140
  const endings = [
    ' for a truly elevated and modern silhouette in everyday luxury styling.',
    ' with timeless garment construction and confident proportions all season.',
    ' to achieve authentic sartorial balance and relaxed streetwear refinement.',
    ' across metropolitan streets and effortless warm weather fashion rotations.'
  ];
  clean = clean.replace(/\.$/, '');
  for (const end of endings) {
    const candidate = `${clean}${end}`;
    if (candidate.length >= 135 && candidate.length <= 140) {
      return candidate.padEnd(140, ' ');
    }
  }
  let result = clean + ' for modern luxury styling today.';
  if (result.length > 140) result = result.slice(0, 139) + '.';
  return result.padEnd(140, ' ');
}

const systemInstruction = `
You are the Chief Fashion Editor and Senior Luxury Columnist of "Fashion Graviti", an elite high-fashion publication (like Vogue, Harper's Bazaar, or The Gentlewoman).
Generate a completely unique, thorough, deeply informational 1000–1200 word fashion editorial article based strictly on the provided keyword in strict JSON format.

CRITICAL REQUIREMENT ON WORD COUNT (1000–1200 WORDS):
- Write at least 7 distinct major sections ("## Heading").
- Under EACH heading, write 2 expansive, richly detailed paragraphs (80–110 words per paragraph).
- Include comprehensive dropCapText (40–60 words).
- Include 2 closing paragraphs (100–140 words).
- Include conclusion (40–60 words).
- Include 3–4 practical FAQs.
- TOTAL COMBINED BODY WORD COUNT MUST BE BETWEEN 1000 AND 1200 WORDS.

MANDATORY EDITORIAL AND SEO GUIDELINES:
1. HEADLINE ("title"):
   - LENGTH: MUST BE STRICTLY 55 TO 60 CHARACTERS LONG (including letters and spaces). Count characters precisely!
   - NO COLONS (ABSOLUTE RULE): NEVER use a colon (':') in the headline.
   - Natural keyword placement. No clichés.
2. META DESCRIPTION ("subtitle"):
   - LENGTH: MUST BE EXACTLY 140 CHARACTERS LONG (letters + spaces). Count precisely.
   - ABSOLUTE BAN ON FORBIDDEN WORDS: NEVER use words like 'discover', 'learn', 'read', 'comprehensive', 'in depth', 'in-depth', 'explore', 'unlock', 'delve', 'dive'.
3. PRACTICAL VALUE AND HIGH READABILITY:
   - Headings must be 100% relevant to clothing, styling, fits, proportions, textile weights (oz / GSM), washes, shoe pairings, and garment care.
   - Write for human fashion lovers and streetwear enthusiasts. Zero generic AI filler.
4. ZERO HYPHENS OR DASHES (ABSOLUTE RULE):
   - NEVER use the hyphen or dash symbol ('-'), en-dashes, or em-dashes ('—') anywhere in titles, subtitles, headings, body text, bullet points, image captions, designer credits, conclusions, or FAQs.
   - Spell all words unhyphenated or with spaces (e.g. 'quick dry', 'high fashion', 'high waisted', 'ring spun', 'military surplus', 'cross body').
   - Never use dashes to separate clauses; use commas or periods.
   - Never use the ampersand symbol ('&'). Always spell out 'and'.
5. NATURAL INTERNAL LINKING (ONLY IN MIDDLE SECTIONS):
   - You may link to these related articles when directly relevant in context:
     * [black jorts](/black-jorts-modern-street-style-this-season)
     * [wide leg jorts](/why-wide-leg-jorts-are-everywhere-how-to-style)
     * [baggy denim shorts](/baggy-denim-shorts-modern-menswear-silhouettes)
   - STRICT RULE: ONLY link naturally occurring words in context. NEVER force awkward words.
   - STRICT DEDUPLICATION: At most 1 link per target URL.
   - NEVER PLACE LINKS IN INTRO OR FIRST SECTION: Links must be in section 3, 4, or 5.
6. META URL SLUG ("metaSlug"):
   - Clean, descriptive 3 to 6 word meta URL slug (e.g. "camo-jorts-biggest-street-trend-this-season"). NEVER just the raw keyword.

JSON Schema:
{
  "title": "Strictly 55-60 chars luxury headline with keyword and NO colon",
  "subtitle": "Direct authoritative summary (EXACTLY 140 chars, NO forbidden words)",
  "metaSlug": "descriptive-3-to-6-word-meta-url-slug",
  "category": "fashion-trends",
  "categoryLabel": "Fashion Trends",
  "authorName": "Julian Thorne Dumont",
  "dropCapText": "First sentence of the article (40-60 words)",
  "bodyParagraphs": [
    "## Section One Heading",
    "Detailed paragraph one...",
    "Detailed paragraph two...",
    "## Section Two Heading",
    "Detailed paragraph one...",
    "Detailed paragraph two...",
    "## Section Three Heading",
    "Detailed paragraph one...",
    "Detailed paragraph two...",
    "## Section Four Heading",
    "Detailed paragraph one...",
    "Detailed paragraph two...",
    "## Section Five Heading",
    "Detailed paragraph one...",
    "Detailed paragraph two...",
    "## Section Six Heading",
    "Detailed paragraph one...",
    "Detailed paragraph two...",
    "## Section Seven Heading",
    "Detailed paragraph one...",
    "Detailed paragraph two..."
  ],
  "pullQuoteText": "Inspiring statement from the article",
  "pullQuoteAttribution": "Julian Thorne Dumont",
  "secondaryImageCaption": "Description of styling detail",
  "conclusion": "Takeaway summary on the trend (40-60 words).",
  "faqs": [
    { "question": "Short direct question?", "answer": "Crisp direct answer under 25 words." },
    { "question": "Second short question?", "answer": "Crisp direct answer under 25 words." },
    { "question": "Third short question?", "answer": "Crisp direct answer under 25 words." }
  ],
  "closingParagraphs": [
    "Closing reflection paragraph one...",
    "Closing reflection paragraph two..."
  ],
  "designerCredits": [
    { "house": "Atelier Name", "garment": "Garment Description", "materials": "Textile description" }
  ],
  "visualSearchPhrase": "streetwear camo cargo shorts outfit",
  "tags": ["Camo Jorts", "Streetwear", "Denim Trends", "Menswear"],
  "mood": "Quiet Luxury"
}

Output ONLY valid JSON.
`;

async function run() {
  const models = [
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite',
    'gemini-flash-lite-latest',
    'gemini-3.6-flash',
    'gemini-3.7-flash',
    'gemini-flash-latest'
  ];
  let rawText = '';
  let usedModel = '';
  
  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
      console.log(`Calling Gemini API model: ${model}...`);
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `${systemInstruction}\n\nTask: Generate a 1000–1200 word high-fashion editorial article on "${topic}". Ensure comprehensive word count and full coverage.` }]
          }]
        })
      });
      if (res.ok) {
        const data = await res.json();
        rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        if (rawText) {
          usedModel = model;
          console.log(`SUCCESS with model ${model}!`);
          break;
        }
      } else {
        console.warn(`Model ${model} returned HTTP ${res.status}`);
      }
    } catch (e) {
      console.warn(`Model ${model} failed:`, e.message);
    }
  }

  if (!rawText) {
    console.error('Failed to get response from Gemini API');
    process.exit(1);
  }

  const cleanJson = rawText.replace(/```json\s*/gi, '').replace(/```\s*$/gi, '').trim();
  const parsed = JSON.parse(cleanJson);

  // Apply strict post-processing
  const finalTitle = enforceTitle55to60(parsed.title);
  const finalSubtitle = enforceSubtitle140(parsed.subtitle);
  const finalMetaSlug = parsed.metaSlug || 'camo-jorts-biggest-street-trend-this-season';
  
  // Format body paragraphs (clean dashes and hyphens)
  const cleanedBody = (parsed.bodyParagraphs || []).map(p => {
    if (p.startsWith('## ')) return `## ${stripHyphensAndDashes(p.slice(3))}`;
    if (p.startsWith('### ')) return `### ${stripHyphensAndDashes(p.slice(4))}`;
    return stripHyphensAndDashes(p);
  });

  const finalArticle = {
    id: `article-camo-jorts-streetwear`,
    title: finalTitle,
    subtitle: finalSubtitle,
    slug: finalMetaSlug,
    legacySlugs: ['camo-jorts'],
    category: parsed.category || 'fashion-trends',
    categoryLabel: parsed.categoryLabel || 'Fashion Trends',
    season: 'SPRING / SUMMER 2026',
    issueNumber: 'ISSUE NO. 14',
    locationTag: 'NEW YORK // SOHO DISTRICT',
    featured: true,
    author: {
      name: 'Julian Thorne Dumont',
      role: 'Senior Menswear Editor',
      location: 'Milan and New York',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      instagram: '@julian_sartorial',
    },
    publishedAt: 'SEPTEMBER 23, 2026',
    readTime: '10 MIN READ',
    coverImage: 'https://images.unsplash.com/photo-1787181510660-a1f1efae64e7?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
    coverImageAlt: 'Streetwear aesthetic featuring relaxed camouflage cargo jorts with white top and sneakers outdoors',
    content: {
      dropCapText: stripHyphensAndDashes(parsed.dropCapText),
      bodyParagraphs: cleanedBody,
      pullQuote: {
        text: stripHyphensAndDashes(parsed.pullQuoteText),
        attribution: stripHyphensAndDashes(parsed.pullQuoteAttribution || 'Julian Thorne Dumont'),
      },
      secondaryImage: {
        url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
        caption: stripHyphensAndDashes(parsed.secondaryImageCaption || 'Tactical camouflage denim construction and pocket placement details.'),
        alt: 'Close up view of tactical camouflage denim twill weave with reinforced stitching',
      },
      closingParagraphs: (parsed.closingParagraphs || []).map(p => stripHyphensAndDashes(p)),
      conclusion: stripHyphensAndDashes(parsed.conclusion),
      faqs: (parsed.faqs || []).map(f => ({
        question: stripHyphensAndDashes(f.question),
        answer: stripHyphensAndDashes(f.answer)
      })),
      designerCredits: (parsed.designerCredits || []).map(c => ({
        house: stripHyphensAndDashes(c.house),
        garment: stripHyphensAndDashes(c.garment),
        materials: stripHyphensAndDashes(c.materials)
      }))
    },
    tags: (parsed.tags || ['Camo Jorts', 'Streetwear', 'Denim Trends']).map(t => stripHyphensAndDashes(t)),
    mood: parsed.mood || 'Quiet Luxury',
    likes: 312,
    bookmarksCount: 148,
  };

  // Word count check
  const allText = [
    finalArticle.content.dropCapText,
    ...finalArticle.content.bodyParagraphs,
    finalArticle.content.conclusion,
    ...finalArticle.content.closingParagraphs,
    ...finalArticle.content.faqs.map(f => `${f.question} ${f.answer}`)
  ].join(' ');
  const wordCount = allText.split(/\s+/).filter(w => !w.startsWith('#')).length;

  console.log('=== GEMINI API GENERATION REPORT ===');
  console.log('Model Used:', usedModel);
  console.log('Title:', finalArticle.title, `(${finalArticle.title.length} chars)`);
  console.log('Subtitle:', finalArticle.subtitle, `(${finalArticle.subtitle.length} chars)`);
  console.log('Meta Slug:', finalArticle.slug);
  console.log('Word Count:', wordCount);

  // Update initialArticles.ts
  const initialArticlesPath = path.resolve(process.cwd(), 'src/data/initialArticles.ts');
  let fileContent = fs.readFileSync(initialArticlesPath, 'utf-8');

  // Replace article-camo-jorts-streetwear object
  const startIdx = fileContent.indexOf("id: 'article-camo-jorts-streetwear'");
  if (startIdx !== -1) {
    const objStart = fileContent.lastIndexOf('{', startIdx);
    // Find matching closing bracket
    let depth = 0;
    let objEnd = -1;
    for (let i = objStart; i < fileContent.length; i++) {
      if (fileContent[i] === '{') depth++;
      else if (fileContent[i] === '}') {
        depth--;
        if (depth === 0) {
          objEnd = i;
          break;
        }
      }
    }

    if (objEnd !== -1) {
      const articleJs = JSON.stringify(finalArticle, null, 2);
      const updatedContent = fileContent.slice(0, objStart) + articleJs + fileContent.slice(objEnd + 1);
      fs.writeFileSync(initialArticlesPath, updatedContent, 'utf-8');
      console.log('Successfully updated src/data/initialArticles.ts with live Gemini generated article!');
    } else {
      console.error('Could not find object closing bracket');
    }
  } else {
    console.error('Could not find article-camo-jorts-streetwear in initialArticles.ts');
  }
}

run();
