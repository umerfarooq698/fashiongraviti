const fs = require('fs');
const path = require('path');
const { articleObj } = require('./build_wedding_dress_article.cjs');

// 1. Update src/data/initialArticles.ts
const filePath = path.join(__dirname, '..', 'src', 'data', 'initialArticles.ts');
let code = fs.readFileSync(filePath, 'utf8');

// Replace the article with id 'article-wedding-dress-trends-1792840000000'
const regex = /\{\s*"id":\s*"article-wedding-dress-trends-1792840000000"[\s\S]*?\n  \},/;
if (!regex.test(code)) {
  console.error("Could not find wedding-dress article to replace");
  process.exit(1);
}

const serialized = JSON.stringify(articleObj, null, 2).replace(/\n/g, '\n  ') + ',';
code = code.replace(regex, serialized);
fs.writeFileSync(filePath, code, 'utf8');
console.log("Updated article in src/data/initialArticles.ts");

// 2. Update public/llms.txt
const llmsPath = path.join(__dirname, '..', 'public', 'llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');
llms = llms.replace(
  /- \[Modern Wedding Dress Silhouettes Necklines Fabrics and Styling Trends\]\(https:\/\/fashiongraviti\.com\/wedding-dress\):.*/,
  `- [What Modern Brides Are Actually Wearing Down the Aisle Today](https://fashiongraviti.com/wedding-dress): Explore drop waist revivals, square necklines, liquid satin fabrics, convertible skirts, blush colorways and destination styling for contemporary brides.`
);
fs.writeFileSync(llmsPath, llms, 'utf8');
console.log("Updated public/llms.txt");

console.log("ALL DATA REPLACEMENTS COMPLETE!");
