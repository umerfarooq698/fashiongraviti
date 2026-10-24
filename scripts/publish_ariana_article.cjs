const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const ARTICLES_FILE = path.join(ROOT, 'src/data/initialArticles.ts');
const SITEMAP_FILE = path.join(ROOT, 'public/sitemap.xml');
const LLMS_FILE = path.join(ROOT, 'public/llms.txt');
const PUBLISHED_FILE = path.join(ROOT, 'scripts/published-keywords.json');

// Read the verified draft text from build_final_ariana_draft.cjs
const draftScript = fs.readFileSync(path.join(ROOT, 'scripts/build_final_ariana_draft.cjs'), 'utf8');

let dropCapText = "";
let bodyParagraphs = [];
const slice = draftScript.slice(draftScript.indexOf("const dropCapText ="), draftScript.indexOf("const fullText ="));
eval(slice.replace(/const /g, ""));

// 5 Short, crisp FAQs
const faqs = [
  {
    question: "Who designed Ariana Grande's wedding dress?",
    answer: "Her wedding dress was custom-made by Vera Wang Haute, following a promise they made to each other at the 2018 Met Gala."
  },
  {
    question: "How much did Ariana Grande's wedding dress cost?",
    answer: "Fashion insiders estimate her custom Vera Wang gown cost around one hundred and fifty thousand dollars, reflecting months of custom atelier work."
  },
  {
    question: "What inspired Ariana Grande's wedding veil?",
    answer: "Her bubble veil with a satin bow was inspired by Audrey Hepburn's wedding look in the 1957 film Funny Face."
  },
  {
    question: "Is Ariana Grande still married to Dalton Gomez?",
    answer: "No, the couple separated in early 2023 and their divorce was finalized in March 2024."
  },
  {
    question: "How did Ariana Grande style her hair for her wedding?",
    answer: "Hairstylist Josh Liu created a soft half-up ponytail with romantic waves, keeping her signature hair height in a gentle bridal style."
  }
];

const newArticle = {
  id: "article-ariana-grande-wedding-dress-1792680000000",
  title: "Ariana Grande Wedding Dress Design Story Price and Style Evolution",
  subtitle: "The complete story of Ariana Grande's custom Vera Wang silk gown, Audrey Hepburn veil inspiration, $150,000 price estimate, bridal ponytail and Dalton Gomez divorce timeline.",
  slug: "ariana-grande-wedding-dress",
  category: "celebrity",
  categoryLabel: "Celebrity",
  season: "AUTUMN / WINTER 2026",
  issueNumber: "ISSUE NO. 28",
  locationTag: "NEW YORK // EDITORIAL DESK",
  featured: true,
  author: {
    name: "Renata Moreau-Kroll",
    role: "Celebrity Style and Red Carpet Columnist",
    location: "New York and Cannes",
    avatar: "/authors/renata-moreau-kroll.jpg",
    instagram: "@renata_style"
  },
  publishedAt: "OCTOBER 24, 2026",
  readTime: "9 MIN READ",
  coverImage: "/images/ariana-grande-wedding-dress-hero.jpg",
  coverImageCaption: "An elegant bride in a custom silk charmeuse gown and delicate veil reminiscent of mid-century Hollywood wedding style.",
  coverImageAlt: "Bride wearing a custom silk column wedding dress with a vintage veil",
  metaDescription: "Explore Ariana Grande's wedding dress by Vera Wang, including the $150,000 price estimate, Audrey Hepburn veil, bridal ponytail and Dalton Gomez divorce details.",
  content: {
    dropCapText: dropCapText,
    bodyParagraphs: bodyParagraphs,
    secondaryImage: {
      url: "/images/ariana-grande-wedding-dress-detail.jpg",
      caption: "Couture craftsmanship: smooth lily-white silk charmeuse, delicate veil detailing and refined bridal jewelry.",
      alt: "Close up detail of a silk wedding dress fabric with a delicate bridal veil"
    },
    faqs: faqs
  },
  tags: ["Ariana Grande", "Vera Wang", "Celebrity Style", "Wedding Dress", "Bridal Fashion", "Red Carpet"],
  mood: "Quiet Luxury",
  likes: 246,
  bookmarksCount: 112
};

console.log("Article Object Created successfully!");
console.log("Title:", newArticle.title);
console.log("Slug:", newArticle.slug);
console.log("Body paragraphs count:", newArticle.content.bodyParagraphs.length);
console.log("FAQs count:", newArticle.content.faqs.length);

// 1. Insert into src/data/initialArticles.ts
let initialArticlesContent = fs.readFileSync(ARTICLES_FILE, 'utf8');

if (initialArticlesContent.includes('"ariana-grande-wedding-dress"')) {
  console.log("Article already present in initialArticles.ts! Skipping duplicate insertion.");
} else {
  const insertMarker = 'export const INITIAL_ARTICLES: FashionArticle[] = [\n';
  const articleJsonString = '  ' + JSON.stringify(newArticle, null, 2).replace(/\n/g, '\n  ') + ',\n';
  initialArticlesContent = initialArticlesContent.replace(insertMarker, insertMarker + articleJsonString);
  fs.writeFileSync(ARTICLES_FILE, initialArticlesContent, 'utf8');
  console.log("Inserted article into src/data/initialArticles.ts");
}

// 2. Update public/sitemap.xml
let sitemap = fs.readFileSync(SITEMAP_FILE, 'utf8');
if (!sitemap.includes('/ariana-grande-wedding-dress')) {
  const sitemapEntry = `  <url>
    <loc>https://fashiongraviti.com/ariana-grande-wedding-dress</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
  sitemap = sitemap.replace('</urlset>', sitemapEntry + '</urlset>');
  fs.writeFileSync(SITEMAP_FILE, sitemap, 'utf8');
  console.log("Added URL to public/sitemap.xml");
}

// 3. Update public/llms.txt
let llms = fs.readFileSync(LLMS_FILE, 'utf8');
if (!llms.includes('/ariana-grande-wedding-dress')) {
  const llmsEntry = `- [Ariana Grande Wedding Dress Design Story Price and Style Evolution](https://fashiongraviti.com/ariana-grande-wedding-dress): The complete story of Ariana Grande's custom Vera Wang silk gown, Audrey Hepburn veil inspiration, $150,000 price estimate, bridal ponytail and Dalton Gomez divorce timeline.\n`;
  llms = llms.trim() + '\n' + llmsEntry;
  fs.writeFileSync(LLMS_FILE, llms, 'utf8');
  console.log("Added entry to public/llms.txt");
}

// 4. Update scripts/published-keywords.json
let publishedKeywords = [];
if (fs.existsSync(PUBLISHED_FILE)) {
  try {
    publishedKeywords = JSON.parse(fs.readFileSync(PUBLISHED_FILE, 'utf8'));
  } catch (e) {
    publishedKeywords = [];
  }
}
if (!publishedKeywords.includes('ariana grande wedding dress')) {
  publishedKeywords.push('ariana grande wedding dress');
  fs.writeFileSync(PUBLISHED_FILE, JSON.stringify(publishedKeywords, null, 2), 'utf8');
  console.log("Updated scripts/published-keywords.json");
}

console.log("=== ALL PUBLISH STEPS COMPLETE ===");
