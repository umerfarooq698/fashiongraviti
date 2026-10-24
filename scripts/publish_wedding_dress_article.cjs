const fs = require('fs');
const path = require('path');
const { articleObj } = require('./build_wedding_dress_article.cjs');

// 1. Insert into src/data/initialArticles.ts
const initialArticlesPath = path.join(__dirname, '..', 'src', 'data', 'initialArticles.ts');
let content = fs.readFileSync(initialArticlesPath, 'utf8');

const match = content.match(/export const INITIAL_ARTICLES:\s*FashionArticle\[\]\s*=\s*\[/);
if (!match) {
  console.error("Could not find initialArticles array declaration");
  process.exit(1);
}

const insertIndex = match.index + match[0].length;
const serializedArticle = '\n  ' + JSON.stringify(articleObj, null, 2).replace(/\n/g, '\n  ') + ',';

content = content.slice(0, insertIndex) + serializedArticle + content.slice(insertIndex);
fs.writeFileSync(initialArticlesPath, content, 'utf8');
console.log("Successfully inserted article into src/data/initialArticles.ts");

// 2. Update public/sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
const newSitemapEntry = `  <url>
    <loc>https://fashiongraviti.com/wedding-dress</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
sitemap = sitemap.replace('</urlset>', newSitemapEntry);
fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log("Successfully updated public/sitemap.xml");

// 3. Update public/llms.txt
const llmsPath = path.join(__dirname, '..', 'public', 'llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');
const newLlmsEntry = `- [Modern Wedding Dress Silhouettes Necklines Fabrics and Styling Trends](https://fashiongraviti.com/wedding-dress): Explore drop waist revivals, square necklines, liquid satin fabrics, convertible skirts, blush colorways and destination styling for contemporary brides.\n`;
llms = llms + newLlmsEntry;
fs.writeFileSync(llmsPath, llms, 'utf8');
console.log("Successfully updated public/llms.txt");

// 4. Update scripts/published-keywords.json
const pubKwPath = path.join(__dirname, 'published-keywords.json');
let pubKws = JSON.parse(fs.readFileSync(pubKwPath, 'utf8'));
if (!pubKws.includes('wedding dress')) {
  pubKws.push('wedding dress');
  fs.writeFileSync(pubKwPath, JSON.stringify(pubKws, null, 2), 'utf8');
  console.log("Successfully updated scripts/published-keywords.json");
}

console.log("ALL PUBLISHING DATA UPDATES COMPLETE!");
