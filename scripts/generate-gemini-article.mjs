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

console.log(`Generating article for: "${topic}" using Google Gemini API...`);

// Available editorial personas for varied voice
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

const userSystemInstruction = `
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
* ZERO-PATTERN & STRUCTURAL ASYMMETRY MANDATE:
  - An article must NEVER feel like a clone or formulaic twin of any other article in structure, rhythm, or formatting.
  - Break predictable rhythms across articles:
    * In Article A: Section 1 has 3 short paragraphs, Section 2 has 1 deep historical analysis, Section 4 has a 3-step bullet list.
    * In Article B: Section 1 has 1 punchy statement + 1 narrative paragraph, Section 2 has a comparative H3 breakdown, zero bullets anywhere, but a styling tip box near the conclusion.
    * In Article C: Pure long-form prose with varied cadence, zero callouts, and 2-point care checklist at the very end.
  - Headings, paragraph counts, bullet locations, and formatting must NEVER follow the same architecture across assignments. Let the topic shape its own unique layout.

HEADINGS:
* Create one original H1 ("title").
* Use multiple H2 headings ("## Heading") in bodyParagraphs.
* Use H3 subheadings ("### Subheading") where they genuinely improve the article.
* Every article must use a completely different heading style and structure.
* ABSOLUTE BAN ON AI ROBOTIC HEADINGS AND CLICHE GERUNDS:
  - NEVER start headings with robotic gerunds or predictable AI formulas:
    "Decoding...", "Mastering...", "Navigating...", "Understanding...", "Curating...", "Harmonizing...", "Exploring...", "Demystifying...", "Unveiling...", "The Art of...", "The Rise of..."
  - Headings must sound like an elite luxury magazine feature editor: punchy, stylish, confident, and conversational (e.g. "Solid Mass Versus Hollow Wire", "The 18 Karat Dilemma", "Real Gold Against Heavy Wool", "Why Stiff Links Ruin The Line", "Over The Cuff, Not Under").
* Never repeatedly use the same H2 or H3 pattern.
* Do not slightly rename old headings while keeping the same structure.
* Vary the number of H2 and H3 sections naturally.
* Do not make every heading a question.
* Do not use numbered headings unless the topic genuinely requires a list or step-by-step format.
* ANTI-MONOTONY RULE FOR BULLETS AND TIPS:
  - NEVER place bullet points or tips in the same section or position across articles!
  - If one article has bullets in the middle, the next must place them near the end, or have NO bullets at all.
  - Never repeat structural layouts.

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

MANDATORY EDITORIAL AND SEO TECHNICAL CONSTRAINTS:
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
    "## Organic Heading One",
    "Detailed paragraph one...",
    "Detailed paragraph two...",
    "## Organic Heading Two",
    "Detailed paragraph one...",
    "### Subheading If Relevant",
    "Detailed paragraph..."
  ],
  "pullQuoteText": "Inspiring statement from the article",
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
  "visualSearchPhrase": "streetwear fashion styling outfit photography",
  "tags": ["Streetwear", "Luxury Fashion", "Contemporary Style"],
  "mood": "Quiet Luxury"
}

Output ONLY valid JSON without markdown wrapping or backticks.
`;

async function run() {
  const models = [
    'gemini-3.7-flash',
    'gemini-3.6-flash',
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite'
  ];
  let rawText = '';
  let usedModel = '';

  const initialArticlesPath = path.resolve(process.cwd(), 'src/data/initialArticles.ts');
  const fileContentBefore = fs.readFileSync(initialArticlesPath, 'utf-8');
  const existingTitles = [...fileContentBefore.matchAll(/"title":\s*"([^"]+)"/g)].map(m => m[1]);
  
  const dynamicPrompt = `${userSystemInstruction}

EXISTING ARTICLES IN MAGAZINE ARCHIVE (DO NOT DUPLICATE THESE ANGLES OR REPEAT SIMILAR HEADINGS):
${existingTitles.slice(0, 10).map(t => `- "${t}"`).join('\n')}

ASSIGNMENT TASK:
Write a complete, original, reader-first 1000–1200 word high-fashion editorial article on "${topic}".

REPEATED KEYWORD & ORIGINALITY RULE:
If a similar subject exists in the archive, you MUST choose a completely distinct editorial angle, heading structure, and fashion scenarios so there is zero overlap or repetition.

CRITICAL WORD COUNT AND DYNAMIC FORMATTING RULE:
* Total article word count MUST be strictly between 1000 and 1200 words.
* PARAGRAPH RHYTHM & OPTIMAL READABILITY:
  - Mix paragraph lengths naturally: combine punchy 2-sentence takeaways (approx 35-45 words) with medium 3-4 sentence detailed explanations (approx 60-80 words).
  - Never output monolithic blocks of identical paragraph count or uniform length under each heading.
* DYNAMIC FORMATTING ELEMENTS (NO FIXED PATTERNS):
  - Do NOT follow a mechanical template or repeating sequence across sections or articles.
  - Naturally incorporate formatting variety ONLY where it genuinely aids reader comprehension:
    * Curated bullet lists ('* ') when breaking down technical specifications, materials, or styling options.
    * Standalone editorial tips or practical takeaways ('**Atelier Tip:** ...' or '**Styling Tip:** ...') when actionable advice benefits the reader.
    * Distinct single-paragraph focus sections or comparative H3 subsections where appropriate.
  - Never force all formatting elements into one place, and never place them in the same sequence across different articles. Let the subject matter dictate the natural layout.
* READER-FIRST DEPTH:
  - Every paragraph must be informative, authoritative, and helpful to the reader. Provide actionable fashion intelligence, garment construction details, fit formulas, and material behaviors.`;

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
      console.log(`Calling Gemini API model: ${model}...`);
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: dynamicPrompt }]
          }],
          generationConfig: {
            maxOutputTokens: 8192,
            temperature: 0.7
          }
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

  const isGoldBracelet = topic.toLowerCase().includes('gold') && (topic.toLowerCase().includes('bracelet') || topic.toLowerCase().includes('bangle') || topic.toLowerCase().includes('cuff'));
  const isJewelry = isGoldBracelet || topic.toLowerCase().includes('bracelet') || topic.toLowerCase().includes('jewelry') || topic.toLowerCase().includes('ring') || topic.toLowerCase().includes('necklace') || topic.toLowerCase().includes('diamond');
  
  const defaultCover = isGoldBracelet
    ? 'https://images.unsplash.com/photo-1741071520904-37ef3c0fea09?auto=format&fit=crop&crop=top&w=1600&h=900&q=85'
    : isJewelry
    ? 'https://images.unsplash.com/photo-1705575518997-82a71bcc75a2?auto=format&fit=crop&crop=top&w=1600&h=900&q=85'
    : 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&crop=top&w=1600&h=900&q=85';

  const defaultSecondary = isGoldBracelet
    ? 'https://images.unsplash.com/photo-1679156272446-30738eb5c4e7?auto=format&fit=crop&crop=top&w=1600&h=900&q=85'
    : isJewelry
    ? 'https://images.unsplash.com/photo-1763029513623-37d488cb97b1?auto=format&fit=crop&crop=top&w=1600&h=900&q=85'
    : 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&crop=top&w=1600&h=900&q=85';

  const validCategories = ['fashion-news', 'fashion-trends', 'celebrity', 'designers-brands', 'beauty', 'how-to-style'];
  let articleCategory = parsed.category || category;
  if (!validCategories.includes(articleCategory)) {
    articleCategory = 'how-to-style';
  }

  const categoryLabels = {
    'fashion-news': 'Fashion News',
    'fashion-trends': 'Fashion Trends',
    'celebrity': 'Celebrity',
    'designers-brands': 'Designers And Brands',
    'beauty': 'Beauty',
    'how-to-style': 'How to Style',
  };

  const finalArticle = {
    id: `article-${finalMetaSlug.slice(0, 30)}-${Date.now()}`,
    title: finalTitle,
    subtitle: finalSubtitle,
    slug: finalMetaSlug,
    category: articleCategory,
    categoryLabel: categoryLabels[articleCategory] || 'How to Style',
    season: 'AUTUMN / WINTER 2026',
    issueNumber: 'ISSUE NO. 15',
    locationTag: `${author.location.split(' and ')[0].toUpperCase()} // EDITORIAL DESK`,
    featured: true,
    author: {
      name: author.name,
      role: author.role,
      location: author.location,
      avatar: author.avatar,
      instagram: author.instagram,
    },
    publishedAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase(),
      readTime: '10 MIN READ',
      coverImage: defaultCover,
      coverImageAlt: `High fashion editorial styling for ${finalTitle}`,
      content: {
        dropCapText: stripHyphensAndDashes(parsed.dropCapText),
        bodyParagraphs: cleanedBody,
        pullQuote: {
          text: stripHyphensAndDashes(parsed.pullQuoteText),
          attribution: stripHyphensAndDashes(parsed.pullQuoteAttribution || author.name),
        },
        secondaryImage: {
          url: defaultSecondary,
          caption: stripHyphensAndDashes(parsed.secondaryImageCaption || 'Artisan jewelry craftsmanship and diamond setting detail.'),
          alt: 'Close up view of fine jewelry craftsmanship and diamond setting',
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
    tags: (parsed.tags || ['Streetwear', 'Fashion', 'Trends']).map(t => stripHyphensAndDashes(t)),
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

  console.log('=== GEMINI API GENERATION REPORT ===');
  console.log('Model Used:', usedModel);
  console.log('Author:', author.name);
  console.log('Title:', finalArticle.title, `(${finalArticle.title.length} chars)`);
  console.log('Subtitle:', finalArticle.subtitle, `(${finalArticle.subtitle.length} chars)`);
  console.log('Meta Slug:', finalArticle.slug);
  console.log('Word Count:', wordCount);

  fs.writeFileSync(path.resolve(process.cwd(), 'scripts/last-gemini-article.json'), JSON.stringify(finalArticle, null, 2));
  console.log('Saved generated article to scripts/last-gemini-article.json');

  // Insert into src/data/initialArticles.ts at the beginning of INITIAL_ARTICLES
  let fileContent = fs.readFileSync(initialArticlesPath, 'utf-8');

  // Check if article with this id already exists
  if (fileContent.includes(finalArticle.id)) {
    console.log('Article already exists in initialArticles.ts, skipping prepend.');
  } else {
    const marker = 'export const INITIAL_ARTICLES: FashionArticle[] = [';
    const markerIdx = fileContent.indexOf(marker);
    if (markerIdx !== -1) {
      const insertPos = markerIdx + marker.length;
      const articleSnippet = `\n  ${JSON.stringify(finalArticle, null, 2)},\n`;
      fileContent = fileContent.slice(0, insertPos) + articleSnippet + fileContent.slice(insertPos);
      fs.writeFileSync(initialArticlesPath, fileContent, 'utf-8');
      console.log('Successfully prepended new Gemini article to src/data/initialArticles.ts!');
    }
  }

  return finalArticle;
}

run();
