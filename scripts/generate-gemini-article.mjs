import fs from 'fs';
import path from 'path';
import { enforceTitle55to60, enforceSubtitle140, fixMarkdownUrls, stripHyphensAndDashes } from './editorial-formatters.mjs';

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
const requestedArchetype = process.argv[4] || null;

console.log(`Generating unique dynamic editorial for: "${topic}"...`);

// 5 DISTINCT EDITORIAL ARCHETYPES TO PREVENT REPETITIVE PATTERNS
const EDITORIAL_ARCHETYPES = [
  {
    id: 'cultural-critique',
    name: 'THE RUNWAY TO STREET CULTURAL CRITIQUE',
    tone: 'Edgy, observant, cultural critique bridging underground movements to elite ateliers.',
    headingThemes: [
      'The Underground Origins And Subcultural Identity',
      'Challenging Conventional Proportions On The Pavement',
      'The High Low Tension In Luxury Styling Today',
      'Real World Wearability Beyond Runway Fantasy',
      'The Shift From Fleeting Hype To Permanent Rotation',
      'Curating Supporting Garments And Neutral Textures',
      'The Future Silhouette Trajectory For Modern Wardrobes'
    ],
    titleStyles: [
      'Bold cultural statement on how this garment shattered conventional fashion rules',
      'Direct critique contrasting traditional tailoring against rebellious streetwear',
      'Material and silhouette manifesto defining the season'
    ]
  },
  {
    id: 'sartorial-formula',
    name: 'THE SARTORIAL OUTFIT FORMULA MATRIX',
    tone: 'Chic, highly practical, architectural, razor-sharp styling guidance for real humans.',
    headingThemes: [
      'The Foundational Geometry Of The Silhouette',
      'Formula One: The Minimalist Everyday Rotation',
      'Formula Two: Elevated Evening Tailoring Contrasts',
      'Formula Three: The Transitional Outerwear Layer',
      'Footwear Hierarchy And Proportional Grounding',
      'Sizing Calibration And Inseam Measurements That Matter',
      'Textile Preservation And Everyday Maintenance Secrets'
    ],
    titleStyles: [
      'Actionable fashion guidance focusing on specific silhouette equations',
      'Masterclass perspective on proportion balancing and wardrobe integration'
    ]
  },
  {
    id: 'atelier-craft',
    name: 'THE ATELIER AND TEXTILE ANATOMY',
    tone: 'Craftsmanship-obsessed, luxurious, tactile, focusing on weave provenance, dye, and weight.',
    headingThemes: [
      'Textile Provenance And Shuttle Loom Heritage',
      'Gram Weight Architecture And Canvas Rigidity',
      'Hardware Craftsmanship And Pocket Construction',
      'Color Chemistry And Vintage Patina Development',
      'Precision Alterations And Custom Hemline Calibration',
      'Seasonal Longevity And Sustainable Wardrobe Value',
      'The Sartorial Verdict For Discerning Collectors'
    ],
    titleStyles: [
      'Material-focused headline celebrating textile density and artisan craft',
      'Quiet luxury perspective on timeless utility construction'
    ]
  },
  {
    id: 'style-revolution',
    name: 'THE WARDROBE DEBATE AND REVOLUTION',
    tone: 'Provocative, confident, opinionated, breaking aesthetic rules.',
    headingThemes: [
      'Dismantling Decades Of Restrictive Menswear Rules',
      'Why Skeptics Misunderstood The Voluminous Silhouette',
      'The New Rules Of Proportion In Metropolitan Dressing',
      'Adapting The Cut Across Personal Style Aesthetics',
      'Curating Timeless Neutral Counterpoints In High Fashion',
      'Footwear Dynamics That Anchor Unconventional Hemlines',
      'Future Proofing Your Wardrobe Against Seasonal Burnout'
    ],
    titleStyles: [
      'Provocative declaration declaring the end of outdated narrow silhouettes',
      'Confident assessment of modern volume and street influence'
    ]
  },
  {
    id: 'insider-field-guide',
    name: 'THE CURATOR FIELD GUIDE AND BUYING BLUEPRINT',
    tone: 'Sharp insider shopping critique, distinguishing fast-fashion junk from true luxury gems.',
    headingThemes: [
      'What Separates Fast Fashion Impostors From True Quality',
      'The Essential Measurements Before You Invest A Cent',
      'Comparing Washes: Vintage Stonewash Versus Raw Rigidity',
      'Building Multiple Distinct Looks Around One Core Item',
      'The Footwear Matrix For Flawless Lower Body Balance',
      'Essential Layering Formulas For Variable Temperatures',
      'Long Term Fabric Preservation And Washing Protocols'
    ],
    titleStyles: [
      'Curator shopping blueprint detailing fit, fabric weight, and silhouette',
      'Authoritative guide for discerning sartorial investments'
    ]
  }
];

// Pick archetype
const chosenArchetype = requestedArchetype
  ? EDITORIAL_ARCHETYPES.find(a => a.id === requestedArchetype) || EDITORIAL_ARCHETYPES[0]
  : EDITORIAL_ARCHETYPES[Math.floor(Math.random() * EDITORIAL_ARCHETYPES.length)];

console.log(`Selected Archetype: ${chosenArchetype.name}`);

// Available authors for varied voices
const AUTHORS = [
  {
    name: 'Julian Thorne Dumont',
    role: 'Senior Menswear Editor',
    location: 'Milan and New York',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    instagram: '@julian_sartorial'
  },
  {
    name: 'Aurelia Vance Sterling',
    role: 'Editor in Chief',
    location: 'Paris and London',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    instagram: '@aurelia_couture'
  },
  {
    name: 'Renata Moreau Kroll',
    role: 'Senior Runway Critic',
    location: 'Milan and Florence',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    instagram: '@renata_critique'
  },
  {
    name: 'Soren Lindqvist Kovac',
    role: 'Textile and Silhouette Architect',
    location: 'Copenhagen and Tokyo',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    instagram: '@soren_atelier'
  }
];

const author = AUTHORS[Math.floor(Math.random() * AUTHORS.length)];

const systemInstruction = `
You are ${author.name}, ${author.role} of "Fashion Graviti", an elite global high-fashion publication.
Generate a completely original, thorough 1000–1200 word fashion editorial article based strictly on the keyword: "${topic}".

STRICT EDITORIAL ARCHETYPE TO ADOPT:
Archetype Name: ${chosenArchetype.name}
Tone and Perspective: ${chosenArchetype.tone}
Suggested Heading Themes:
${chosenArchetype.headingThemes.map((h, i) => `${i + 1}. ${h}`).join('\n')}

ABSOLUTE BAN ON MONOTONOUS PATTERNS:
1. HEADLINE ("title"):
   - LENGTH: MUST BE STRICTLY 55 TO 60 CHARACTERS LONG (including letters and spaces).
   - NO COLONS (ABSOLUTE RULE): NEVER use a colon (':') in the headline.
   - BAN FORMULAS: NEVER start every article with "The Rise Of..." or "Why..." or "How To...". Every headline must have a unique, inventive phrasing!
2. META DESCRIPTION ("subtitle"):
   - LENGTH: MUST BE EXACTLY 140 CHARACTERS LONG (letters + spaces). Count characters precisely!
   - ABSOLUTE BAN ON FORBIDDEN WORDS: NEVER use 'discover', 'learn', 'read', 'comprehensive', 'in depth', 'in-depth', 'explore', 'unlock', 'delve', 'dive'.
   - Avoid monotonous "X merges with Y..." openings. Write fresh, original prose.
3. STRUCTURE AND FLOW (1000–1200 WORDS TOTAL):
   - Write 6 to 8 major sections with markdown "## Heading".
   - Headings MUST BE 100% SPECIFIC TO THE TOPIC "${topic}" and align with ${chosenArchetype.name}.
   - Under each heading, write 2 rich, analytical paragraphs (80–110 words each) giving concrete numbers, fabric weights, silhouette proportions, and real outfit advice.
   - Include dropCapText (40–60 words).
   - Include closingParagraphs (2 paragraphs, 100–140 words).
   - Include concise conclusion (40–60 words).
   - Include 3–4 practical FAQs.
4. ZERO HYPHENS OR DASHES (ABSOLUTE RULE):
   - NEVER use hyphens ('-'), en-dashes, or em-dashes ('—') anywhere in titles, subtitles, headings, body text, bullet points, image captions, or FAQs.
   - Spell words unhyphenated or with spaces (e.g. 'quick dry', 'high fashion', 'high waisted', 'ring spun', 'cross body').
   - Never use the ampersand symbol ('&'). Always spell out 'and'.
5. NATURAL INTERNAL LINKING (ONLY IN MIDDLE SECTIONS):
   - You may link to these related articles naturally in context:
     * [black jorts](/black-jorts-modern-street-style-this-season)
     * [wide leg jorts](/why-wide-leg-jorts-are-everywhere-how-to-style)
     * [baggy denim shorts](/baggy-denim-shorts-modern-menswear-silhouettes)
     * [camo jorts](/camo-jorts-biggest-street-trend-this-season)
     * [period swimwear](/waterproof-period-swimwear-high-fashion-guide)
   - ONLY link words that naturally fit the flow. Max 1 link per target article. ZERO links in opening paragraphs or first section.
6. META URL SLUG ("metaSlug"):
   - Clean, descriptive 3 to 6 word meta URL slug (e.g. "camo-jorts-biggest-street-trend-this-season"). NEVER just the raw keyword.

JSON Schema:
{
  "title": "Strictly 55-60 chars luxury headline with keyword and NO colon",
  "subtitle": "Direct authoritative summary (EXACTLY 140 chars, NO forbidden words)",
  "metaSlug": "descriptive-3-to-6-word-meta-url-slug",
  "category": "${category}",
  "categoryLabel": "Fashion Trends",
  "authorName": "${author.name}",
  "dropCapText": "First opening sentence (40-60 words)",
  "bodyParagraphs": [
    "## Unique Heading One",
    "Detailed paragraph one...",
    "Detailed paragraph two...",
    "## Unique Heading Two",
    "Detailed paragraph one...",
    "Detailed paragraph two..."
  ],
  "pullQuoteText": "Inspiring statement from the review",
  "pullQuoteAttribution": "${author.name}",
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
  "visualSearchPhrase": "high fashion street style runway aesthetic",
  "tags": ["Streetwear", "Luxury Fashion", "Contemporary Style"],
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
            parts: [{ text: `${systemInstruction}\n\nTask: Generate a 1000–1200 word high-fashion editorial article on "${topic}". Ensure deep value and original structure.` }]
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
  const finalMetaSlug = parsed.metaSlug ? parsed.metaSlug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : 'editorial-fashion-guide';
  
  // Format body paragraphs (clean dashes, fix markdown URLs)
  const cleanedBody = fixMarkdownUrls((parsed.bodyParagraphs || []).map(p => {
    if (p.startsWith('## ')) return `## ${stripHyphensAndDashes(p.slice(3))}`;
    if (p.startsWith('### ')) return `### ${stripHyphensAndDashes(p.slice(4))}`;
    return stripHyphensAndDashes(p);
  }));

  const finalArticle = {
    id: `article-${finalMetaSlug.slice(0, 30)}-${Date.now()}`,
    title: finalTitle,
    subtitle: finalSubtitle,
    slug: finalMetaSlug,
    category: parsed.category || category,
    categoryLabel: parsed.categoryLabel || 'Fashion Trends',
    season: 'AUTUMN / WINTER 2026',
    issueNumber: 'ISSUE NO. 15',
    locationTag: `${author.location.split(' and ')[0].toUpperCase()} // EDITORIAL DESK`,
    featured: false,
    author: {
      name: author.name,
      role: author.role,
      location: author.location,
      avatar: author.avatar,
      instagram: author.instagram,
    },
    publishedAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase(),
    readTime: '10 MIN READ',
    coverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
    coverImageAlt: `High fashion editorial runway styling for ${finalTitle}`,
    content: {
      dropCapText: stripHyphensAndDashes(parsed.dropCapText),
      bodyParagraphs: cleanedBody,
      pullQuote: {
        text: stripHyphensAndDashes(parsed.pullQuoteText),
        attribution: stripHyphensAndDashes(parsed.pullQuoteAttribution || author.name),
      },
      secondaryImage: {
        url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&crop=top&w=1600&h=900&q=85',
        caption: stripHyphensAndDashes(parsed.secondaryImageCaption || 'Atelier tailoring and textile craftsmanship detail.'),
        alt: 'Close up view of editorial tailoring craftsmanship and fabric weave',
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
    tags: (parsed.tags || ['Runway', 'Trends', 'Streetwear']).map(t => stripHyphensAndDashes(t)),
    mood: parsed.mood || 'Quiet Luxury',
    likes: Math.floor(Math.random() * 200) + 150,
    bookmarksCount: Math.floor(Math.random() * 80) + 50,
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

  console.log('=== DYNAMIC GEMINI GENERATION REPORT ===');
  console.log('Archetype:', chosenArchetype.name);
  console.log('Author:', author.name);
  console.log('Model Used:', usedModel);
  console.log('Title:', finalArticle.title, `(${finalArticle.title.length} chars)`);
  console.log('Subtitle:', finalArticle.subtitle, `(${finalArticle.subtitle.length} chars)`);
  console.log('Meta Slug:', finalArticle.slug);
  console.log('Word Count:', wordCount);

  // Save article preview
  fs.writeFileSync(path.resolve(process.cwd(), 'scripts/last-gemini-article.json'), JSON.stringify(finalArticle, null, 2));
  console.log('Saved generated article to scripts/last-gemini-article.json');

  return finalArticle;
}

run();
