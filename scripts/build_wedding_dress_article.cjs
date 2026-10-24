const fs = require('fs');
const path = require('path');

const userKeywords = [
  'drop waist wedding dress',
  'drop waist wedding gown',
  'satin drop waist wedding dress',
  'drop waist wedding dress with sleeves',
  'very expensive wedding dresses',
  'most expensive bridal gown',
  'luxury wedding dress designers',
  'wedding gown square neck',
  'square neck wedding dress with sleeves',
  'square neckline wedding dress',
  'square neck bridal gown',
  'straight neckline wedding dress',
  'square neck a line wedding dress',
  'square neck long sleeve wedding dress',
  'scoop neck wedding gown',
  'scoop neckline wedding dress',
  'scoop neck wedding dress',
  'a line wedding dresses',
  'satin wedding gowns',
  'satin wedding dresses',
  'satin dress bridal',
  'veil lengths',
  'pink dress bride',
  'bridal dresses pink',
  'floral bridal gown',
  'wedding dress and flowers',
  'pink wedding dress',
  'pink colour wedding gown',
  'blush wedding gown',
  'wedding dress with slit',
  'convertible wedding dress',
  'detachable train wedding dress',
  'wedding dress with detachable skirt',
  'bridal dress with jacket',
  'leather wedding dress',
  'romantic wedding dresses',
  'ethereal wedding dress',
  'grey wedding dress',
  'gray wedding dress',
  'destination wedding dresses',
  'lightweight beach wedding dresses',
  'beach gowns for wedding',
  'simple beach wedding dresses',
  'beach style wedding dresses',
  'beach bridal gowns'
];

const mainKeyword = 'wedding dress';

const dropCapText = "Shopping for a wedding dress has changed dramatically over the last few years. Brides are no longer walking into salons looking for stiff, heavily beaded dresses that weigh twenty pounds and prevent them from sitting down comfortably during their reception dinner. The mood today centers on effortless personal expression, clean lines that move naturally and silhouettes that feel modern rather than dated.";

const bodyParagraphs = [
  "Instead of feeling pressured to follow rigid bridal rules from decades ago, modern women are choosing dresses that suit their venue, their personal comfort and their authentic everyday style. Whether you are getting married on a breezy coastline, inside a historic chapel, or at a casual city hall ceremony, there is a refreshing freedom in how brides approach their wedding wardrobe today.",

  "From the sudden surge of lowered Basque waists to geometric chest lines and subtle watercolor hues, today's bridal world offers plenty of exciting styling directions. Taking a closer look at real wedding fashion trends shows how brides are reimagining tradition on their own terms.",

  "## Why the Drop Waist Corset Took Over Bridal Fitting Rooms",

  "Walk into almost any bridal boutique right now and you will immediately notice that high empire waists and simple ribbon belts have stepped aside. The silhouette making the biggest splash on runway shows and real-life wedding ceremonies is the elongated waistline, which anchors the bodice low on the hips before flowing out into skirt volume.",

  "This silhouette draws inspiration from historic Basque bodices, where angled seams dip down into a subtle point below the belly button. Patternmakers have modernized this shape by swapping out stiff metal stays for lightweight, flexible interior boning that supports the bust while allowing brides to sit, hug family members and dance easily all evening.",

  "### How Basque Seaming and Drop Waist Gowns Elongate the Torso",

  "A drop waist wedding dress creates an instantly statuesque line by extending the torso length. Instead of cutting across the narrowest part of the waist, the bodice continues downward past the hip bones, smoothing the midsection and creating an uninterrupted line of fabric. When the skirt finally breaks outward, it creates a striking visual contrast that looks incredible in walking portraits.",

  "Bridal stylists often recommend this cut because it provides natural posture support without feeling like a costume. A drop waist wedding gown works beautifully for both tall brides who want to highlight their frame and petite brides who want to create the visual illusion of a longer, leaner torso.",

  "### Pairing Drop Waists with Long Sleeves and Heavy Satin",

  "When constructed from smooth, lustrous fabric, the elongated silhouette feels exceptionally regal. A satin drop waist wedding dress balances the structured fit of the torso with the liquid reflection of duchess satin or heavy crepe. The skirt picks up soft light from aisle candles, giving the bride a clean glow during indoor ceremonies.",

  "For autumn and winter celebrations, brides often look for a drop waist wedding dress with sleeves to add warmth and vintage charm. Fitted sheer sleeves, lace cuffs, or buttoned silk sleeves balance the lower torso seam, framing the upper body in a way that feels polished and elegant.",

  "### Why Contemporary Brides Pick A-Line Skirts for Easy Movement",

  "While dramatic ballgowns look magnificent in cathedral ceremonies, many women prefer a lower waist paired with a more manageable skirt. This is why a line wedding dresses remain such a popular choice among modern brides. The gentle outward slope of an A-line skirt softens the hip transition, keeping the silhouette light and effortless.",

  "Brides who choose this combination enjoy the waist-lengthening benefits of a drop bodice without having to maneuver dozens of heavy tulle petticoats through crowded dinner tables. It offers a relaxed, balanced look that transitions smoothly from a daytime garden ceremony to an energetic reception dance floor.",

  "## Moving Away from the Traditional Strapless Sweetheart Neckline",

  "For nearly two decades, almost every wedding gown on boutique racks featured a strapless sweetheart neckline. While that cut had a legendary run, brides today are actively moving away from strapless bodices that require constant upward tugging throughout the ceremony.",

  "Modern brides want neckline cuts that offer secure chest support, clean visual framing for the collarbones and a touch of crisp geometric tailoring. The focus has turned toward sharp square lines, horizontal bands and gentle rounded scoops that stay comfortably in place all day.",

  "### The Clean Simplicity of Square Necklines with Sleeves",

  "The wedding gown square neck cut has quickly established itself as a contemporary classic. With horizontal framing across the chest and vertical shoulder straps, a square neckline wedding dress flatters the collarbones while providing reliable support for women of all bust sizes.",

  "For brides wanting extra modesty or vintage European flair, a square neck wedding dress with sleeves offers the perfect balance. Pairing an angular neckline with full-length sleeves creates a crisp visual dialogue between the chest and arms. A square neck long sleeve wedding dress feels grounded and sophisticated, evoking royal portraits while maintaining a modern minimalist edge. Meanwhile, a square neck a line wedding dress combines that sharp upper framing with a soft, forgiving skirt that allows easy movement during cocktails. In every variation, a square neck bridal gown looks sharp, modern and remarkably timeless in wedding photographs.",

  "### Soft Scoop Necks and Straight Neckline Gowns",

  "If you prefer gentle curves over crisp right angles, the scoop neck wedding dress is a wonderful alternative that never goes out of style. The rounded scoop dips softly down the chest, naturally drawing the eye upward toward the bride's face and smile. A scoop neckline wedding dress pairs beautifully with delicate jewelry, drop earrings and soft bridal updos.",

  "Brides looking for understated luxury often choose a scoop neck wedding gown made from matte silk or heavy crepe. On the flip side, a straight neckline wedding dress runs directly across the chest in an unbending horizontal line. This clean, bandeau-style cut offers a bold minimalist look that suits contemporary city weddings, rooftop dinners and industrial gallery venues.",

  "## The Tactile Appeal of Heavy Satin and Pure Silk",

  "Beyond the cut of a dress, the fabric you choose sets the tone for your entire wedding day. Brides are increasingly stepping away from synthetic polyester blends that trap heat and scratch the skin, choosing instead natural fibers with rich weight, fluid drape and subtle sheen.",

  "Satin has maintained its status as the premier bridal textile for generations, but modern weaving techniques offer far more variety in weight, reflection and finish than ever before.",

  "### The Difference Between Heavy Duchess Satin and Charmeuse",

  "When exploring satin wedding dresses, brides quickly learn that not all satins behave the same way. Heavy duchess satin has body, structure and a soft pearl luster. It holds crisp pleats, sharp seams and dramatic train shapes with ease, making it the top choice for formal ceremonies and grand venues.",

  "Silk charmeuse, on the other hand, flows like liquid over the body. It drapes naturally on the bias, creating a relaxed, slinky look that moves with every step. When selecting satin wedding gowns, climate and season play a huge role. Heavy satins provide comfort in cooler weather, while lighter silk weaves keep brides cool during summer celebrations. Many modern brides embrace the effortless luxury of a satin dress bridal look inspired by 1990s red carpets. A notable example of minimal silk styling is the [ariana grande wedding dress](/ariana-grande-wedding-dress), which highlighted how pure silk charmeuse, an empire waist and a delicate bubble veil can create a classic bridal moment.",

  "### Building Internal Support to Keep Satin Wedding Gowns Smooth",

  "Because satin has a smooth, reflective surface, it highlights everything underneath. Experienced bridal ateliers know that proper interior construction is essential for making satin gowns look and feel exceptional.",

  "Rather than relying on bulky separate shapewear, quality bridal gowns feature built-in bustiers, boned waistbands and breathable silk linings that stay smooth against the skin. This interior tailoring keeps the gown sitting comfortably on the hips, so brides can walk down the aisle and sit through speeches without worrying about fabric shifting or clinging awkwardly.",

  "## Breaking with White for Blush, Misty Grey and Floral Embroidery",

  "Stark bleached white can look harsh under natural sunlight and it often washes out fair or olive skin tones in daytime photographs. As a result, colored bridal dresses have entered the bridal mainstream in a major way, allowing brides to choose tones that flatter their complexion and fit their venue aesthetic.",

  "From subtle champagne glows to moody slate greys and vibrant botanical appliques, color in bridal fashion offers a refreshing alternative to traditional monochrome palettes.",

  "### The Rise of Blush and Pink Bridal Gowns for Garden Nuptials",

  "A pink wedding dress offers a soft, romantic alternative that feels warm and personal. Modern designers avoid bubblegum tones, choosing instead dusty rose, pale petal and soft peach undertones layered beneath ivory tulle. A blush wedding gown flatters a wide variety of complexions, giving the bride a natural, glowing warmth that photographs beautifully in outdoor golden-hour light.",

  "For garden celebrations and estate weddings, a pink colour wedding gown harmonizes naturally with lush floral surroundings. Brides who choose bridal dresses pink find that the soft wash of color gives romantic wedding dresses an ethereal wedding dress quality that stands out gently without feeling unapproachable. When a pink dress bride walks down an aisle framed by garden greenery, the soft contrast creates a dreamy, memorable entrance.",

  "### Slate Grey Gowns and Three-Dimensional Botanical Petals",

  "For brides seeking a modern, slightly unconventional look, a grey wedding dress offers an intriguing twist on tradition. A gray wedding dress crafted from dove-grey, silver or mist-toned tulle brings a moody elegance that looks breathtaking in candlelit evening settings and historic brick venues.",

  "Meanwhile, brides who love texture are gravitating toward a floral bridal gown decorated with three-dimensional petals, trailing vine embroidery and delicate blossom appliques. Combining a wedding dress and flowers creates a tactile, whimsical look that feels connected to nature. These floral elements catch gentle breezes, adding depth and movement to the gown as the bride moves down the aisle.",

  "## Practical Styling for Two-Look Weddings and Reception Changes",

  "Today's wedding celebrations are rarely confined to a single room or mood. A wedding day often begins with a solemn ceremony, transitions to an outdoor cocktail hour and ends with a high-energy dance party that lasts until midnight. Brides want wardrobe versatility that keeps up with their schedule without the hassle of a full outfit swap.",

  "Smart convertible features allow brides to alter their look throughout the day, giving them grand ceremonial style for vows and complete freedom of movement for the reception.",

  "### Removable Overskirts, Detachable Trains and High Leg Slits",

  "A convertible wedding dress offers the ultimate solution for brides torn between a traditional full ballgown and a sleek, dance-ready silhouette. By choosing a wedding dress with detachable skirt, a bride can wear a voluminous skirt for her ceremony entrance, then unhook it before dinner to reveal a chic, form-fitting column gown underneath.",

  "In the same way, a detachable train wedding dress gives you sweeping drama for family portraits while allowing you to detach the heavy train before hitting the dance floor. Another huge trend is the wedding dress with slit, which adds modern flair while offering practical airflow and leg mobility. A subtle side opening lets you show off your bridal heels and walk easily without feeling restricted by tight skirt hems.",

  "### Layering Bridal Dresses with Jackets and Edge",

  "Outerwear has become an exciting part of the modern bridal wardrobe, especially for rooftop receptions and cool outdoor celebrations. A bridal dress with jacket offers both practical warmth and a chic styling opportunity. Tailored cropped blazers, soft knit boleros and sheer embroidered capes add personal character to ceremony photos.",

  "For city weddings, many brides are loving the contrast of styling a leather wedding dress detail or layering a fitted moto jacket directly over their formal gown. Putting a custom leather jacket over delicate silk or lace brings an effortless downtown vibe that looks fantastic in candid evening photography.",

  "## The Reality of Beach Ceremonies, Wind and Veil Proportions",

  "Getting married by the ocean sounds magical, but coastal environments bring real practical considerations like coastal breezes, sand and heat. Heavy skirts with multiple crinoline layers trap warmth and drag wet sand, making lightweight fabrics a necessity for seaside ceremonies.",

  "Understanding how wind and humidity interact with bridal fabrics helps destination brides stay comfortable, cool and confident all day long.",

  "### Choosing Lightweight Skirts That Breathe in Coastal Heat",

  "When shopping for destination wedding dresses, fabric breathability should always be your top priority. Choosing lightweight beach wedding dresses cut from silk chiffon, airy organza, or soft crepe ensures that ocean breezes can circulate freely around your body.",

  "The best beach gowns for wedding celebrations feature relaxed fits, flowy skirts and minimal train lengths that stay clear of the tide line. Simple beach wedding dresses with thin straps, unlined bodices and open backs keep you feeling refreshed under the warm sun. Opting for beach style wedding dresses makes walking along sandy shorelines and wooden boardwalks effortless, allowing beach bridal gowns to drift gently in the sea air without tangling around your feet.",

  "### Finding the Right Veil Length for Seaside Aisles",

  "Veil styling requires extra care in outdoor and beach venues. While a cathedral veil looks magnificent trailing down a windless stone church aisle, strong coastal winds can easily turn long tulle into a kite, pulling on your hairstyle and whipping fabric across your face during your vows.",

  "Reviewing different veil lengths helps you pick a piece that matches your venue conditions. Shorter veil options like fingertip or elbow lengths offer classic bridal elegance while staying manageable in brisk coastal breezes. If you have your heart set on a longer veil for portraits, look for detachable designs that can be removed quickly once ceremony photography wraps up. Choosing the right veil length ensures your smile, jewelry and neckline stay clearly visible throughout your ceremony.",

  "## What You Are Actually Paying for in High-End Bridal Fashion",

  "Bridal shopping can reveal staggering price differences. A dress from an off-the-rack boutique might cost twelve hundred dollars, while a runway gown from a luxury atelier easily reaches fifteen thousand dollars or more. Understanding the craftsmanship, materials and labor behind these garments helps brides decide where to allocate their wardrobe budget.",

  "While standard boutique dresses rely on mass manufacturing, high-end bridal pieces involve hundreds of hours of hands-on tailoring and premium material sourcing.",

  "### Atelier Patternmaking and Luxury Designer Construction",

  "Acclaimed luxury wedding dress designers such as Vera Wang, Elie Saab, Galia Lahav, Monique Lhuillier and Ines Di Santo are renowned for their technical pattern precision and custom textile development. Their design teams spend months building fit mockups to ensure that corset boning conforms naturally to the ribcage without pinching.",

  "When examining very expensive wedding dresses, the quality difference is clear in the small details. Hems are hand-rolled, lace borders are cut and positioned individually by eye and interior linings are cut from pure breathable silk instead of polyester synthetics. This artisan dedication ensures that the gown feels comfortable against the skin from morning dressing to late-night departures.",

  "### Handwork Details Inside the Most Expensive Bridal Gowns",

  "The most expensive bridal gown commissions often require hundreds of hours of hand embroidery. Skilled artisans sew individual freshwater pearls, crystals and metallic threads onto delicate tulle bases, creating dimensional textures that cannot be duplicated by machines.",

  "These atelier gowns are custom-fitted to the bride through multiple fitting stages, ensuring that every seam, waist curve and strap aligns with her exact body measurements. For brides who prioritize haute craftsmanship, investing in a custom piece offers a one-of-a-kind garment built specifically for their wedding day.",

  "## Frequently Asked Questions About Wedding Dress Shopping",

  "Shopping for a wedding dress brings up practical questions about sizing, alterations, neckline choices and fabrics. Here are clear, direct answers to common questions brides ask when exploring their options.",

  "### How does a drop waist wedding dress flatter shorter brides?",

  "A drop waist wedding dress elongates the upper body by placing the seam below the natural waist, creating a lean, balanced line that flatters brides of all heights.",

  "### What veil lengths are easiest to manage outdoors?",

  "Fingertip and elbow veil lengths work best in outdoor venues because they stay close to the body without catching on wind, sand or grass.",

  "### Is it appropriate to wear a pink or grey wedding dress to church?",

  "Yes, soft blush and slate grey gowns offer a tasteful, elegant alternative to traditional white that looks completely appropriate in formal religious settings.",

  "### Why do luxury designer wedding dresses cost so much?",

  "High designer prices reflect custom silk fabrics, built-in corsetry, multiple personalized fitting appointments and hundreds of hours of hand embroidery.",

  "### How do convertible wedding dresses stay secure while dancing?",

  "Convertible gowns use hidden interior hooks, sturdy snaps and reinforced waistbands that keep the detachable skirt secure during movement."
];

const faqs = [
  {
    question: "How does a drop waist wedding dress flatter shorter brides?",
    answer: "A drop waist wedding dress elongates the upper body by placing the seam below the natural waist, creating a lean, balanced line that flatters brides of all heights."
  },
  {
    question: "What veil lengths are easiest to manage outdoors?",
    answer: "Fingertip and elbow veil lengths work best in outdoor venues because they stay close to the body without catching on wind, sand or grass."
  },
  {
    question: "Is it appropriate to wear a pink or grey wedding dress to church?",
    answer: "Yes, soft blush and slate grey gowns offer a tasteful, elegant alternative to traditional white that looks completely appropriate in formal religious settings."
  },
  {
    question: "Why do luxury designer wedding dresses cost so much?",
    answer: "High designer prices reflect custom silk fabrics, built-in corsetry, multiple personalized fitting appointments and hundreds of hours of hand embroidery."
  },
  {
    question: "How do convertible wedding dresses stay secure while dancing?",
    answer: "Convertible gowns use hidden interior hooks, sturdy snaps and reinforced waistbands that keep the detachable skirt secure during movement."
  }
];

const articleObj = {
  id: "article-wedding-dress-trends-1792840000000",
  title: "What Modern Brides Are Actually Wearing Down the Aisle Today",
  subtitle: "Explore drop waist revivals, square necklines, liquid satin fabrics, convertible skirts, blush colorways and destination styling for contemporary brides.",
  slug: "wedding-dress",
  category: "fashion",
  categoryLabel: "Fashion",
  season: "AUTUMN / WINTER 2026",
  issueNumber: "ISSUE NO. 29",
  locationTag: "PARIS // BRIDAL EDITORIAL DESK",
  featured: true,
  author: {
    name: "Genevieve Delacroix",
    role: "Senior Bridal and Haute Couture Editor",
    location: "Paris and London",
    avatar: "/authors/renata-moreau-kroll.jpg",
    instagram: "@genevieve_bridal"
  },
  publishedAt: "OCTOBER 24, 2026",
  readTime: "10 MIN READ",
  coverImage: "/images/wedding-dress-hero.jpg",
  coverImageCaption: "An elegant bride in a sleek trumpet wedding dress and flowing veil celebrates with guests at a celebratory poolside reception.",
  coverImageAlt: "Bride wearing an elegant white wedding gown with a train and long veil at an outdoor reception",
  metaDescription: "Discover modern wedding dress trends, including drop waist silhouettes, square necklines, liquid satin gowns, blush colorways, detachable trains and beach styling.",
  tags: [
    "Wedding Dress",
    "Bridal Trends",
    "Drop Waist",
    "Square Neckline",
    "Bridal Fashion"
  ],
  mood: "Quiet Luxury",
  likes: 215,
  bookmarksCount: 98,
  content: {
    dropCapText,
    bodyParagraphs,
    secondaryImage: {
      url: "/images/wedding-dress-detail.jpg",
      caption: "Bridal atelier artistry: intricate lace embroidery, fabric-covered back buttons and a soft satin ribbon waist bow.",
      alt: "Close-up detail of lace bodice embroidery, buttons and satin ribbon bow on a wedding dress"
    },
    faqs
  }
};

// --- AUDIT CHECKS ---
console.log("=== STARTING AUDIT FOR NEW HUMAN BLOG WEDDING DRESS ARTICLE ===");

// 1. Check all text for keywords
const fullText = [dropCapText, ...bodyParagraphs].join(" ").toLowerCase();

let missingUserKeywords = [];
for (const kw of userKeywords) {
  if (!fullText.includes(kw.toLowerCase())) {
    missingUserKeywords.push(kw);
  }
}

if (missingUserKeywords.length > 0) {
  console.error("FAIL: Missing user keywords:", missingUserKeywords);
  process.exit(1);
} else {
  console.log(`PASS: All ${userKeywords.length} user keywords found in text!`);
}

// 2. Check main keyword
if (!fullText.includes(mainKeyword.toLowerCase())) {
  console.error("FAIL: Missing main keyword:", mainKeyword);
  process.exit(1);
} else {
  console.log(`PASS: Main keyword '${mainKeyword}' found!`);
}

// 3. Check Banned AI Words
const bannedAiWords = [
  'bespoke',
  'architecture',
  'architectural',
  'masterclass',
  'testament',
  'tapestry',
  'delve',
  'elevate',
  'beacon',
  'landscape',
  'pivotal',
  'cornerstone',
  'seamlessly',
  'nuanced',
  'furthermore',
  'moreover',
  'it is important to note',
  'at the center of that',
  'serves as a reminder',
  'strikingly',
  'frenzy',
  'symphony',
  'realm',
  'epitome',
  'embodiment'
];

let foundBannedWords = [];
for (const bw of bannedAiWords) {
  const regex = new RegExp(`\\b${bw}\\b`, 'i');
  if (regex.test(fullText)) {
    foundBannedWords.push(bw);
  }
}

if (foundBannedWords.length > 0) {
  console.error("FAIL: Found banned AI words:", foundBannedWords);
  process.exit(1);
} else {
  console.log("PASS: 0 banned AI words found!");
}

// 4. Check Oxford Commas (strict 0 ', and' or ', &')
const oxfordCommaRegex = /,\s+(and|&)\b/i;
const allLines = [articleObj.title, articleObj.subtitle, dropCapText, ...bodyParagraphs];
let oxfordMatches = [];
allLines.forEach((line, idx) => {
  if (oxfordCommaRegex.test(line)) {
    oxfordMatches.push({ idx, line });
  }
});

if (oxfordMatches.length > 0) {
  console.error("FAIL: Found Oxford commas:", oxfordMatches);
  process.exit(1);
} else {
  console.log("PASS: Strict 0 Oxford commas across all text!");
}

// 5. Check Colons in Title or Headings
let colonMatches = [];
allLines.forEach((line) => {
  if (line.startsWith('##') || line === articleObj.title) {
    if (line.includes(':')) {
      colonMatches.push(line);
    }
  }
});

if (colonMatches.length > 0) {
  console.error("FAIL: Found colons in title or headings:", colonMatches);
  process.exit(1);
} else {
  console.log("PASS: 0 colons in title or headings!");
}

// 6. Check 'Guide' in Title
if (/guide/i.test(articleObj.title)) {
  console.error("FAIL: Found 'Guide' in title:", articleObj.title);
  process.exit(1);
} else {
  console.log("PASS: 0 'Guide' in title!");
}

// 7. Check Bold Markers
let boldMatches = [];
bodyParagraphs.forEach((p, idx) => {
  if (p.includes('**')) {
    boldMatches.push({ idx, p });
  }
});

if (boldMatches.length > 0) {
  console.error("FAIL: Found bold markers:", boldMatches);
  process.exit(1);
} else {
  console.log("PASS: 0 bold markers in body paragraphs!");
}

// 8. Check Bullet Points
let bulletMatches = [];
bodyParagraphs.forEach((p, idx) => {
  if (/^\s*[-*]\s/m.test(p) || /^\s*\d+\.\s/m.test(p)) {
    bulletMatches.push({ idx, p });
  }
});

if (bulletMatches.length > 0) {
  console.error("FAIL: Found bullet points:", bulletMatches);
  process.exit(1);
} else {
  console.log("PASS: 0 bullet points!");
}

// 9. Check Heading Stacking (H2 followed directly by H3 without sentence)
let stackingErrors = [];
for (let i = 0; i < bodyParagraphs.length - 1; i++) {
  if (bodyParagraphs[i].startsWith('## ') && bodyParagraphs[i+1].startsWith('### ')) {
    stackingErrors.push(`H2 at index ${i} is immediately followed by H3 at ${i+1}`);
  }
}

if (stackingErrors.length > 0) {
  console.error("FAIL: Found heading stacking:", stackingErrors);
  process.exit(1);
} else {
  console.log("PASS: 0 heading stacking! Every H2 has introductory sentences.");
}

// 10. Check Word Count
const wordCount = fullText.split(/\s+/).filter(Boolean).length;
console.log(`Word Count: ${wordCount} words`);
if (wordCount < 1800) {
  console.error("FAIL: Word count below 1800:", wordCount);
  process.exit(1);
} else {
  console.log("PASS: Word count is over 1800 words!");
}

// 11. Check Internal Link
const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
const links = [];
let match;
while ((match = linkRegex.exec(fullText)) !== null) {
  links.push({ text: match[1], url: match[2] });
}
console.log("Found links:", links);
if (links.length !== 1 || links[0].url !== '/ariana-grande-wedding-dress') {
  console.error("FAIL: Expected exactly 1 internal link to /ariana-grande-wedding-dress");
  process.exit(1);
} else {
  console.log("PASS: Exactly 1 internal link to /ariana-grande-wedding-dress!");
}

// 12. Check Images on Disk
const heroPath = path.join(__dirname, '..', 'public', articleObj.coverImage);
const detailPath = path.join(__dirname, '..', 'public', articleObj.content.secondaryImage.url);

if (!fs.existsSync(heroPath) || !fs.existsSync(detailPath)) {
  console.error("FAIL: Image files missing on disk!", { heroPath, detailPath });
  process.exit(1);
} else {
  console.log("PASS: Both image files exist on disk!");
}

console.log("\nALL 12 AUDIT CHECKS PASSED PERFECTLY!");

module.exports = { articleObj };
