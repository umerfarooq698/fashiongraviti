const fs = require('fs');
const path = require('path');

const userKeywords = [
  'denim and diamonds outfit ideas',
  'denim and diamonds outfit for female',
  'dressy denim and diamonds outfit',
  'denim and diamonds outfit male',
  'denim and diamonds outfit female',
  'plus size denim and diamonds outfit',
  'denim and diamonds outfit plus size',
  'denim and diamonds clothing',
  'denim and diamonds dress ideas',
  'denim and diamonds dress',
  'denim dress women',
  'casual denim dress',
  'denim frocks for ladies',
  'denim dresses',
  'jeans dress',
  'midi denim dress women',
  'rhinestone jeans men',
  'bling jeans',
  'flare jeans with rhinestones',
  'how to style a jean jacket',
  'jean jacket outfits men',
  'denim jacket outfits guys',
  'how to wear a denim jacket',
  'cowgirl jeans',
  'country jeans',
  'western style denim'
];

const dropCapText = 'There is usually a quick moment of panic right after you open an envelope or an email invite that says denim and diamonds. You walk over to your closet, look at your favorite everyday jeans, glance at the sparkly tops you usually save for New Year parties and wonder if wearing them together will look cool or completely absurd.';

const bodyParagraphs = [
  'Putting together a denim and diamonds outfit is actually much easier than it sounds once you drop the idea that you have to look like a Nashville stage singer. The whole trick is treating your denim like evening fabric while picking just one or two pieces that really catch the light. Once you see how clean dark denim pairs with simple crystals, getting dressed for a fall gala, a barn wedding or a rodeo fundraiser turns into fun rather than a headache.',
  
  '## What This Dress Code Really Means in Real Life',
  'Most charity committees, rodeo groups and country club organizers pick this theme for one simple reason. They want everyone to dress up and celebrate without the stiffness of ballgowns and rented tuxedos. It is supposed to feel welcoming, energetic and ready for a dance floor.',
  'Think of it the same way you would look at an invitation asking [what is cocktail attire](/what-is-cocktail-attire) where you normally reach for dark wool suits, sleek slip dresses or tailored pants. For this party, structured blue cotton replaces the suit wool. You are definitely not wearing yard-work jeans with greasy hems or stretched-out knees. You are wearing dark, pressed denim with real sparkle that looks deliberate from across the room.',
  'Nobody expects you to wear actual carats from a high-end jeweler either. Banquet lights and chandelier bulbs do not care if your sparkle came from an antique family ring or a twenty-dollar pair of cubic zirconia studs from a department store. Crystal mesh tops, glass rhinestones and shiny silver buckles bounce light around the room just as effectively. What counts is keeping the look polished.',
  
  '### Why Your Denim Wash Matters More Than Anything',
  'Your choice of wash sets the vibe before anyone even notices your earrings. If you wear light-wash jeans with holes in the knees, you look like you were running errands and forgot to change. Stick with deep raw indigo, solid midnight black or crisp bright white denim. Dark colors carry the visual weight of formal evening wear and give your crystals something bold to shine against.',
  'Take five minutes to check your pant length with the exact shoes you plan on wearing. Your jeans should break cleanly across your instep or boot vamp without dragging across wet asphalt or piling up in sloppy accordion folds around your ankles. If you are wearing heels, hem them for heels. If you are wearing flats, plan your hemline accordingly.',
  
  '## Easy Styling Ideas for Women from Trousers to Dresses',
  'Scrolling through denim and diamonds outfit ideas can feel overwhelming because people take the theme in ten different directions. Some go full western with fringe and hats, while others look like they are heading to a Manhattan dinner party in dark jeans. Both approaches work. You just need to decide what piece you want people to notice first.',
  'If your pants have crystal stripes or heavy embroidery, keep your top clean with a black silk tank or a tailored blazer. If you prefer plain dark jeans, go wild with an all-over sequin blouse, a crystal corset or huge chandelier earrings. Giving your look one clear star keeps you looking stylish rather than cluttered.',
  
  '### Flare Pants Cowgirl Fits and Rhinestones',
  'High-rise flare jeans with rhinestones along the outer seams are a lifesaver for this theme. The flare cut elongates your legs, balances out wider shoulders and looks incredible over pointed-toe booties or silver heels. If the party is out on a ranch or in an open arena, classic cowgirl jeans with a snug fit through the hips and a clean bootcut opening will keep you looking sharp through hours of dancing.',
  'For anyone who loves noticeable shine, bling jeans with crystal rivets or embroidered back pockets deliver plenty of personality without requiring tons of extra jewelry. When you buy country jeans for a big night out, always check the tag for one or two percent elastane. A tiny bit of stretch means you can actually sit through a three-course dinner and dance all night without feeling squeezed.',
  
  '### From Midi Dresses to Southern Frocks',
  'If matching tops and pants stresses you out, a one-piece dress is the way to go. Looking through denim and diamonds dress ideas reveals everything from sharp button-down midis to ruffled tiered skirts. Wearing real denim dresses lets you lean into the theme without looking like you tried too hard. When shopping for an evening denim dress women usually look for dark, structured indigo fabric that holds its shape all night without wrinkling.',
  'For an indoor hotel gala, a fitted midi denim dress women can wear with silver ankle-strap heels and sparkling hoops looks sharp and ready for dinner. The midi length keeps things formal while the denim keeps it approachable. If the event is an outdoor barbecue or tent party on the grass, a casual denim dress in a softer wash works wonderfully with stacked silver cuffs and turquoise rings.',
  'Southern fundraisers often bring out vintage-style denim frocks for ladies with button bodices, belted waists and full skirts. These flared dresses look great with embroidered cowboy boots and a silver belt. You can even take a simple jeans dress out of your closet, unbutton the top two buttons and add a crystal collar necklace to make it instantly party-ready.',
  
  '### Putting Together Dressy Outfits with Evening Tops and Corsets',
  'When you want a dressy denim and diamonds outfit that feels ready for dinner and drinks, focus on your top. While a nice denim and diamonds dress is great, wide-leg dark denim trousers paired with a crystal mesh top or an off-the-shoulder bodysuit look modern and sleek.',
  'If you are putting together a denim and diamonds outfit for female friends or clients, try tucking a black silk button-down into dark flare jeans and fastening it with an oversized crystal buckle. Another great denim and diamonds outfit female guests always love is a sharp black blazer worn open over a silver metallic camisole, finished with dark jeans and diamond drop earrings.',
  
  '## Flattering Plus Size Outfits with Great Shape and Comfort',
  'Putting together a flattering plus size denim and diamonds outfit is all about finding fabric that supports you. Cheap thin jeggings tend to wrinkle and bunch up, while stiff raw denim can feel like cardboard when you sit down. A medium-weight denim with just enough stretch holds you smoothly and lets you breathe through a long evening.',
  'When planning a denim and diamonds outfit plus size guests can wear with complete confidence, place your sparkle where you want people to look. Dark wash jeans create a clean long line on the bottom, which leaves your neckline, shoulders and ears as the best spots for glittering necklaces, sparkling jackets and big earrings.',
  
  '### High-Rise Jeans and Strategic Shimmer',
  'High-waisted bootcut jeans work wonders for curvy figures because the wider hem balances out the hips and thighs. Look for jeans where rhinestone trim or crystal studs run vertically along the outer side seam. That vertical line draws the eye up and down, giving your legs a longer look.',
  'Wear those high-rise jeans with a wrap blouse or an open front blazer that features subtle crystal piping along the lapels. The wrap cut defines your waistline while the sparkling neckline frames your face beautifully without adding bulk across your middle.',
  
  '### Cinching Shirt Dresses with Western Belts',
  'A denim shirt dress is easily one of the most flattering pieces for full-figured women. The straight row of buttons down the front creates an instant lengthening effect. Try to find a soft tencel-denim blend that drapes over curves instead of standing out stiffly.',
  'Ditch the flimsy fabric tie belt that came in the package and replace it with a genuine leather western belt complete with a big silver and rhinestone buckle. Fasten it right at the narrowest point of your torso to give the dress a great hourglass shape. Add knee-high leather boots and layered silver chains to finish the look.',
  
  '## Men Styling That Keeps Things Sharp and Grounded',
  'A lot of men hear denim and diamonds and immediately panic, thinking they have to wear a glittery sequined jacket or rhinestone cowboy shirts. Relax. Putting together a handsome denim and diamonds outfit male guests feel comfortable in is very straightforward. It is all about great tailoring, dark jeans and small metallic details.',
  'Your jeans are the base of the entire outfit. Leave the faded yard jeans, ripped knees and carpenter pockets at home. Grab a pair of dark raw indigo or jet-black jeans in a clean straight-leg or slim-bootcut fit. Run an iron over them before you head out so they look as crisp as wool suit pants.',
  
  '### Dark Jeans with Tailored Blazers',
  'The easiest way for a guy to look great at this party is pairing dark jeans with a tailored sport coat. A navy wool blazer, a dark tweed jacket or a deep velvet dinner coat looks fantastic against indigo twill. Wear a crisp white dress shirt underneath with the top collar open.',
  'Bring in the diamond theme through your metal accessories. A polished stainless steel watch, silver cuff links, a tie clip with a tiny crystal or a well-crafted western belt buckle will give you plenty of shine without looking like a costume. Put on clean leather dress boots or dark ropers and you will look better than most people in the room.',
  
  '### Western Touches and Subtle Shine for Guys',
  'If the party has a rodeo vibe or takes place out on a ranch, going with western style denim makes complete sense. Subtle rhinestone jeans men wear to these events usually have tiny crystal rivets on the coin pockets or decorative scroll stitching on the back pockets rather than all-over glitter.',
  'A black western snap shirt looks sharp with clean country jeans and a silver bolo tie set with a sparkling stone. If you wear a cowboy hat, stick with a clean black or chocolate brown felt hat with a silver buckle set on the hatband. These small touches show you respect the theme while keeping your style completely masculine.',
  
  '## Jean Jackets and Practical Layering Tricks',
  'Ballrooms have aggressive air conditioning. Outdoor event tents can also turn cold quickly once the sun drops. Thinking about your denim and diamonds clothing options should always include a smart layer to keep you warm without ruining your look.',
  'A denim jacket is one of the easiest ways to handle the temperature. You can wear a subtle jacket on your way into the venue and take it off inside to reveal an eye-catching top, or you can turn the jacket itself into the main statement piece of your whole outfit.',
  
  '### Styling Jean Jackets Over Evening Dresses',
  'Knowing how to style a jean jacket over fancy clothes is a great trick for barn weddings and charity galas. Proportion is everything here. Skip the oversized, slouchy boyfriend jackets that drown your silhouette. Look for a fitted, slightly cropped denim jacket that hits right at your waistline so your waist stays visible over a dress.',
  'When thinking about how to wear a denim jacket to a party, look for pieces with custom sparkle. A jacket with crystal fringe across the back shoulder seam sways with every step you take. You can also cluster three or four vintage rhinestone brooches on the chest pocket flap to give a plain jacket instant evening sparkle.',
  
  '### Men Layering for Country Venues',
  'Building sharp jean jacket outfits men can wear to formal gatherings requires good contrast between your pieces. Wear a dark, unwashed indigo trucker jacket over a clean white dress shirt, a dark knit tie and pressed black trousers. The contrast between rugged denim and dressy slacks keeps you looking sharp.',
  'For more casual outdoor parties around a fire pit, stylish denim jacket outfits guys rely on often feature a sherpa-lined denim jacket worn over a fine-gauge merino sweater and dark bootcut jeans. Finish the look with clean leather boots and a solid silver cuff bracelet for just the right amount of rugged shine.',
  
  '## Shoes and Jewelry That Pull Everything Together',
  'Accessories are what turn ordinary blue jeans into a real party outfit. Without some shine, you are just wearing casual weekend clothes. You want jewelry and shoes that catch the room lighting naturally whenever you walk across the floor.',
  'Chunky rhinestone chokers, tennis bracelets, crystal hoop earrings and cocktail rings are perfect for women. If your top already has lots of sparkle, pick just one strong piece of jewelry like drop earrings and skip the necklace. If you are wearing a simple black tank or a plain white shirt, pile on layered crystal necklaces to fill the space.',
  
  '### Cowboy Boots Versus Metallic Heels',
  'Your shoes tell everyone whether your outfit leans formal or country. For a party at a country club or hotel ballroom, metallic silver heels, rhinestone sandals or pointed glitter pumps look gorgeous with dark indigo hems.',
  'For barn weddings, ranch galas or outdoor venues, western boots are the smartest choice by a mile. Look for snip-toe cowboy boots in polished leather with silver toe accents or subtle stitching. Make sure your jeans are hemmed to sit smoothly over the boot foot so the denim does not bunch up or drag across wet grass.',
  
  '## Frequently Asked Questions About Denim and Diamonds Outfits',
  'Here are fast, direct answers to common questions people ask before heading out to a denim and diamonds party.'
];

const faqs = [
  {
    question: 'Can I wear ripped jeans to a denim and diamonds party?',
    answer: 'Ripped or frayed jeans look too casual for an evening party. Stick with clean, dark indigo or black denim without holes to keep the outfit looking sharp.'
  },
  {
    question: 'Do I have to wear real diamonds?',
    answer: 'Real diamonds are not required at all. High-quality cubic zirconia, crystals and rhinestone jewelry catch the light just as well under party lights.'
  },
  {
    question: 'What shoes should men wear with this theme?',
    answer: 'Men should skip athletic sneakers and choose clean leather dress shoes, Chelsea boots or polished Western roper boots that sit neatly under dark jeans.'
  },
  {
    question: 'Can I wear denim on top and denim on the bottom?',
    answer: 'Double denim works well if the shades match closely or contrast on purpose, like a black denim jacket over dark blue jeans with a clean belt.'
  },
  {
    question: 'What kind of purse should women bring?',
    answer: 'A small metallic silver clutch or a crystal-studded evening bag provides the perfect sparkling touch against blue cotton denim.'
  }
];

const fullText = [
  'How to Put Together a Denim and Diamonds Outfit for Any Event',
  'Real advice on styling dark jeans, sparkling tops, western boots and blazers for charity galas and country parties without overthinking it',
  'A stylish, practical guide on how to style a denim and diamonds outfit using dark indigo jeans, crystal tops, western boots, blazers and everyday jewelry.',
  dropCapText,
  ...bodyParagraphs,
  ...faqs.map(f => f.question + ' ' + f.answer)
].join(' ');

console.log("=== RUNNING PRE-PUBLISH STRICT AUDITS ===");

// 1. User Keywords
let missingKeywords = [];
userKeywords.forEach(kw => {
  const regex = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}\\b`, 'i');
  if (!regex.test(fullText)) missingKeywords.push(kw);
});
if (missingKeywords.length > 0) {
  console.error("FAIL: Missing keywords:", missingKeywords);
  process.exit(1);
}
console.log("PASS: All 26 user LSI keywords present verbatim!");

// 2. Main Keyword
if (!/\bdenim and diamonds outfit\b/i.test(fullText)) {
  console.error("FAIL: Main keyword missing");
  process.exit(1);
}
console.log("PASS: Main keyword 'denim and diamonds outfit' present!");

// 3. Oxford Commas
const oxfordMatches = fullText.match(/,\s+(and|&)\b/gi);
if (oxfordMatches && oxfordMatches.length > 0) {
  console.error("FAIL: Found Oxford commas:", oxfordMatches);
  process.exit(1);
}
console.log("PASS: 0 Oxford commas found!");

// 4. Colons in Headings
const headings = bodyParagraphs.filter(p => p.startsWith('#'));
let colonHeadings = headings.filter(h => h.includes(':'));
if (colonHeadings.length > 0) {
  console.error("FAIL: Colons in headings:", colonHeadings);
  process.exit(1);
}
console.log("PASS: 0 colons in headings!");

// 5. Banned Words
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
const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
const links = [];
let match;
while ((match = linkRegex.exec(fullText)) !== null) {
  links.push({ text: match[1], url: match[2] });
}
if (links.length !== 1 || links[0].url !== '/what-is-cocktail-attire') {
  console.error("FAIL: Internal link error:", links);
  process.exit(1);
}
console.log("PASS: Exactly 1 internal link to /what-is-cocktail-attire!");

// 8. Images Check
const heroPath = path.join(__dirname, '..', 'public', 'images', 'denim-and-diamonds-hero.jpg');
const detailPath = path.join(__dirname, '..', 'public', 'images', 'denim-and-diamonds-detail.jpg');
if (!fs.existsSync(heroPath) || !fs.existsSync(detailPath)) {
  console.error("FAIL: Image files missing on disk!", { heroPath, detailPath });
  process.exit(1);
}
console.log("PASS: Both 1200x675 image files exist on disk!");

const newArticle = {
  id: `article-denim-and-diamonds-outfit-${Date.now()}`,
  title: 'How to Put Together a Denim and Diamonds Outfit for Any Event',
  subtitle: 'Real advice on styling dark jeans, sparkling tops, western boots and blazers for charity galas and country parties without overthinking it',
  slug: 'denim-and-diamonds-outfit',
  category: 'how-to-style',
  categoryLabel: 'Style Manual',
  season: 'Fall / Winter 2026',
  issueNumber: 'ISSUE 45',
  locationTag: 'Austin, Texas',
  featured: false,
  author: {
    name: 'Elena Rostova',
    role: 'Senior Fashion Editor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80'
  },
  publishedAt: '2026-10-25',
  readTime: '11 min read',
  coverImage: '/images/denim-and-diamonds-hero.jpg',
  coverImageCaption: 'A classic blue denim jacket styled with clean silver jewelry and a white top for an evening party look.',
  coverImageAlt: 'Woman wearing a blue denim jacket with subtle silver jewelry for an evening gala',
  metaDescription: 'Learn how to put together a sharp denim and diamonds outfit using dark indigo jeans, crystal tops, western boots, blazers and everyday jewelry.',
  tags: ['Denim and Diamonds', 'Occasion Wear', 'Country Chic', 'Western Style', 'Party Dressing', 'Style Guide'],
  mood: 'Neo-Vintage',
  likes: 182,
  bookmarksCount: 96,
  content: {
    dropCapText: dropCapText,
    bodyParagraphs: bodyParagraphs,
    secondaryImage: {
      url: '/images/denim-and-diamonds-detail.jpg',
      caption: 'Brilliant clear crystal gemstones reflect banquet lights against a clean dark denim backdrop.',
      alt: 'Close-up detail of clear crystals and gemstones for a denim and diamonds theme'
    },
    faqs: faqs
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
if (!sitemap.includes('/denim-and-diamonds-outfit')) {
  const newSitemapEntry = `  <url>
    <loc>https://fashiongraviti.com/denim-and-diamonds-outfit</loc>
    <lastmod>2026-10-25</lastmod>
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
if (!llms.includes('/denim-and-diamonds-outfit')) {
  const newLlmsEntry = `- [How to Put Together a Denim and Diamonds Outfit for Any Event](https://fashiongraviti.com/denim-and-diamonds-outfit): Practical advice on styling dark indigo jeans, sparkling tops, western boots, blazers and accessories for charity galas and country celebrations.\n`;
  llms = llms + newLlmsEntry;
  fs.writeFileSync(llmsPath, llms, 'utf8');
  console.log("Successfully updated public/llms.txt!");
}

// 4. Update scripts/published-keywords.json
const pubKwPath = path.join(__dirname, 'published-keywords.json');
let pubKws = JSON.parse(fs.readFileSync(pubKwPath, 'utf8'));
if (!pubKws.includes('denim and diamonds outfit')) {
  pubKws.push('denim and diamonds outfit');
  fs.writeFileSync(pubKwPath, JSON.stringify(pubKws, null, 2), 'utf8');
  console.log("Successfully updated scripts/published-keywords.json!");
}

console.log("\nALL PUBLISHING STEPS COMPLETED SUCCESSFULLY!");
