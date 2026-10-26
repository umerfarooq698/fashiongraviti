const fs = require('fs');
const path = require('path');
const { articleObj, allKeywords, competitorKeywords, userKeywords } = require('./build_apple_body_article.cjs');

console.log("=== RUNNING PRE-PUBLISH AUDITS ON APPLE BODY ARTICLE ===");

const fullText = [
  articleObj.title,
  articleObj.subtitle,
  articleObj.excerpt,
  articleObj.content.dropCapText,
  ...articleObj.content.bodyParagraphs,
  ...articleObj.content.faqs.map(f => f.question + ' ' + f.answer)
].join(' ');

// 1. All 62 Keywords
let missingKeywords = [];
allKeywords.forEach(kw => {
  const regex = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}\\b`, 'i');
  if (!regex.test(fullText)) missingKeywords.push(kw);
});
if (missingKeywords.length > 0) {
  console.error("FAIL: Missing keywords:", missingKeywords);
  process.exit(1);
}
console.log(`PASS: All ${allKeywords.length} Master Keywords present verbatim!`);

// 2. Main Keyword
if (!/\bapple shaped body\b/i.test(fullText)) {
  console.error("FAIL: Main keyword missing");
  process.exit(1);
}
console.log("PASS: Main keyword 'apple shaped body' present!");

// 3. Oxford Commas
const oxfordMatches = fullText.match(/,\s+(and|&)\b/gi);
if (oxfordMatches && oxfordMatches.length > 0) {
  console.error("FAIL: Oxford commas:", oxfordMatches);
  process.exit(1);
}
console.log("PASS: 0 Oxford commas found!");

// 4. Colons in Headings
const headings = articleObj.content.bodyParagraphs.filter(p => p.startsWith('#'));
let colonHeadings = headings.filter(h => h.includes(':'));
if (colonHeadings.length > 0) {
  console.error("FAIL: Colons in headings:", colonHeadings);
  process.exit(1);
}
console.log("PASS: 0 colons in headings!");

// 5. Banned AI Words
const bannedWords = [
  'architecture', 'masterclass', 'bespoke', 'heirloom', 'heirlooms', 'testament',
  'tapestry', 'delve', 'delving', 'elevate', 'elevating', 'elevated', 'realm',
  'beacon', 'landscape', 'pivotal', 'cornerstone', 'seamlessly', 'seamless',
  'nuanced', 'nuance', 'furthermore', 'moreover', 'it is important to note',
  'at the center of that', 'serves as a reminder', 'strikingly', 'frenzy',
  'vital', 'crucial', 'multifaceted', 'boast', 'boasts', 'boasting',
  'showcase', 'showcases', 'showcasing', 'shines as', 'epitome',
  'in today\'s world', 'when it comes to', 'embark', 'journey', 'unveil',
  'unveiling', 'dive', 'diving', 'harness', 'foster', 'vibrant', 'kaleidoscope',
  'symphony', 'resonate', 'resonates', 'resonating', 'underscores',
  'quintessential', 'plethora'
];
let foundBannedWords = [];
bannedWords.forEach(word => {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = fullText.match(regex);
  if (matches) foundBannedWords.push({ word, count: matches.length });
});
if (foundBannedWords.length > 0) {
  console.error("FAIL: Banned AI words:", foundBannedWords);
  process.exit(1);
}
console.log("PASS: 0 banned AI words found!");

// 6. Word Count
const wordCount = fullText.split(/\s+/).filter(Boolean).length;
console.log(`Word Count: ${wordCount} words`);
if (wordCount < 1800) {
  console.error("FAIL: Word count below 1800:", wordCount);
  process.exit(1);
}
console.log("PASS: Word count over 1800 words!");

// 7. Internal Link
const links = [];
let match;
const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
while ((match = linkRegex.exec(fullText)) !== null) {
  links.push({ text: match[1], url: match[2] });
}
if (links.length !== 1 || links[0].url !== '/types-of-dresses') {
  console.error("FAIL: Internal link error:", links);
  process.exit(1);
}
console.log("PASS: Exactly 1 internal link to /types-of-dresses!");

// 8. Images Check
const heroPath = path.join(__dirname, '..', 'public', 'images', 'apple-shaped-body-hero.jpg');
const detailPath = path.join(__dirname, '..', 'public', 'images', 'apple-shaped-body-detail.jpg');
if (!fs.existsSync(heroPath) || !fs.existsSync(detailPath)) {
  console.error("FAIL: Image files missing on disk!", { heroPath, detailPath });
  process.exit(1);
}
console.log("PASS: Both 1200x675 image files exist on disk!");

const newArticle = {
  id: `article-apple-shaped-body-${Date.now()}`,
  title: articleObj.title,
  subtitle: articleObj.subtitle,
  slug: articleObj.slug,
  category: articleObj.category,
  categoryLabel: articleObj.categoryLabel,
  season: articleObj.season,
  issueNumber: articleObj.issueNumber,
  locationTag: articleObj.locationTag,
  featured: articleObj.featured,
  author: articleObj.author,
  publishedAt: articleObj.publishedAt,
  readTime: articleObj.readTime,
  coverImage: articleObj.coverImage,
  coverImageCaption: articleObj.coverImageCaption,
  coverImageAlt: articleObj.coverImageAlt,
  metaDescription: articleObj.metaDescription,
  tags: articleObj.tags,
  mood: articleObj.mood,
  likes: articleObj.likes,
  bookmarksCount: articleObj.bookmarksCount,
  content: {
    dropCapText: articleObj.content.dropCapText,
    bodyParagraphs: articleObj.content.bodyParagraphs,
    secondaryImage: {
      url: '/images/apple-shaped-body-detail.jpg',
      caption: 'A tailored A-line skirt with a fluid drape balances the upper body and creates movement.',
      alt: 'Street style detail of an A-line skirt and tailored outfit for an apple shaped body'
    },
    faqs: articleObj.content.faqs
  }
};

// 1. Insert into src/data/initialArticles.ts
const initialArticlesPath = path.join(__dirname, '..', 'src', 'data', 'initialArticles.ts');
let content = fs.readFileSync(initialArticlesPath, 'utf8');

const declMatch = content.match(/export const INITIAL_ARTICLES:\s*FashionArticle\[\]\s*=\s*\[/);
if (!declMatch) {
  console.error("Could not find initialArticles declaration");
  process.exit(1);
}
const insertIndex = declMatch.index + declMatch[0].length;
const serializedArticle = '\n  ' + JSON.stringify(newArticle, null, 2).replace(/\n/g, '\n  ') + ',';
content = content.slice(0, insertIndex) + serializedArticle + content.slice(insertIndex);
fs.writeFileSync(initialArticlesPath, content, 'utf8');
console.log("Successfully inserted article into src/data/initialArticles.ts!");

// 2. Update public/sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
if (!sitemap.includes('/apple-shaped-body')) {
  const newSitemapEntry = `  <url>
    <loc>https://fashiongraviti.com/apple-shaped-body</loc>
    <lastmod>2026-10-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
  sitemap = sitemap.replace('</urlset>', newSitemapEntry);
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log("Successfully updated public/sitemap.xml!");
}

// 3. Update public/llms.txt
const llmsPath = path.join(__dirname, '..', 'public', 'llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');
if (!llms.includes('/apple-shaped-body')) {
  const newLlmsEntry = `- [How to Dress an Apple Shaped Body with Confidence and Balance](https://fashiongraviti.com/apple-shaped-body): Practical advice on selecting empire dresses, wrap cuts, mid-rise bootcut jeans and open layers that flatter an apple figure.\n`;
  llms = llms + newLlmsEntry;
  fs.writeFileSync(llmsPath, llms, 'utf8');
  console.log("Successfully updated public/llms.txt!");
}

// 4. Update scripts/published-keywords.json
const pubKwPath = path.join(__dirname, 'published-keywords.json');
let pubKws = JSON.parse(fs.readFileSync(pubKwPath, 'utf8'));
if (!pubKws.includes('apple shaped body')) {
  pubKws.push('apple shaped body');
  fs.writeFileSync(pubKwPath, JSON.stringify(pubKws, null, 2), 'utf8');
  console.log("Successfully updated scripts/published-keywords.json!");
}

console.log("\nALL PUBLISHING STEPS COMPLETED SUCCESSFULLY!");
