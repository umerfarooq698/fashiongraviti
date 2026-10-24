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

const dropCapText = "Choosing a wedding dress marks one of the most personal style choices a bride ever makes. Today's bridal world moves far beyond rigid salon rules, offering modern cuts that balance classic formality with effortless movement. From sculpted waistlines to airy outdoor fabrics, brides can now explore silhouettes that reflect their genuine aesthetic instead of following dated traditions.";

const bodyParagraphs = [
  "Walking into a bridal boutique today feels entirely different than it did a decade ago. Heavy crinolines and stiff beadwork have stepped aside for cleaner tailoring, liquid fabrics and customizable layers that transition smoothly from vows to late-night dancing. Modern brides want comfort without sacrificing high-fashion drama.",

  "Whether planning a formal cathedral ceremony or an intimate seaside gathering, understanding how waistlines, necklines and fabric weights interact helps you find a look that feels completely natural. The modern bridal world celebrates individuality across every seam, silhouette and colorway.",

  "## The Resurgence of the Drop Waist Silhouette",

  "Elongated waists have made an unmistakable comeback across bridal runways and boutique appointments. Moving past high empire lines and standard natural waists, the drop waist silhouette extends the torso downward past the hips before releasing into dramatic volume.",

  "This tailored cut traces its lineage to historical Basque bodices, which use angled seams dipping down toward the pelvis to create an elongated midsection. Contemporary patternmakers pair this vintage shape with modern lightweight internal boning so brides can breathe, sit and dance without feeling restricted.",

  "### Satin Drop Waist Designs and Long Sleeve Variations",

  "A drop waist wedding dress delivers a striking look when rendered in heavy silk or liquid fabrics. A satin drop waist wedding dress combines a sleek, reflective bodice with a gathered skirt that catches salon lighting beautifully. The contrast between the close-fitting torso and the flared lower skirt gives brides a statuesque presence during their ceremony entrance.",

  "For cooler autumn and winter ceremonies, brides often choose a drop waist wedding dress with sleeves for extra coverage and timeless charm. Adding sheer organza, French lace or opaque silk sleeves balances the lower torso line, creating a balanced silhouette that feels both royal and modern. A drop waist wedding gown with long fitted cuffs brings a clean vintage mood that works effortlessly in grand banquet halls.",

  "### Why Lower Waistlines Complement Classic A-Line Skirts",

  "Brides who want the torso-lengthening magic of a low waist without the massive weight of a full ballgown frequently turn to a line wedding dresses. The gentle triangular skirt flare softens the hip transition, making the cut universally flattering for petite frames and taller brides alike.",

  "By anchoring the waist lower on the hips, the skirt falls with clean vertical lines that do not bunch or puff out unnecessarily. This gives brides the freedom to walk through historic doorways, climb grand ceremony steps and move easily throughout their entire wedding day.",

  "## Framing the Neckline from Clean Square Cuts to Gentle Scoops",

  "While strapless sweetheart necklines dominated past decades, today's brides show a strong preference for geometric chest cuts and rounded collars. These structured shapes frame the collarbones and shoulders cleanly while providing reliable bust support for dancing and moving around all day.",

  "Choosing the right neckline comes down to comfort, hair styling and ceremony setting. High geometric cuts provide a modern editorial frame, while curved scoops offer timeless simplicity that pairs effortlessly with heirloom jewelry or delicate pendants.",

  "### Square Neckline Bridal Gowns and Sleeve Combinations",

  "A wedding gown square neck cut has become a definitive favorite in modern bridal fashion. The straight horizontal chest line and perpendicular shoulder straps form a clean geometric frame that highlights facial features and collarbones without showing excessive cleavage. This makes a square neckline wedding dress a versatile choice for both strict church protocols and open-air receptions.",

  "Brides who love modest elegance frequently choose a square neck wedding dress with sleeves. Pairing a square bodice with sheer sleeves creates visual interest between the chest cut and arms. A square neck long sleeve wedding dress offers a crisp look reminiscent of Renaissance portraits, making it a popular choice for formal winter celebrations. Meanwhile, a square neck a line wedding dress combines geometric structure up top with a soft, flowing skirt that keeps movement relaxed. In every case, a square neck bridal gown provides lasting visual impact that never dates in photo albums.",

  "### The Soft Sweep of Scoop Neck Gowns and Straight Cuts",

  "For brides who prefer gentle curves over sharp angles, the scoop neck wedding dress offers a flattering, universally loved alternative. The rounded neckline dips softly across the chest, creating a graceful curve that elongates the neck naturally. A scoop neckline wedding dress pairs exceptionally well with delicate veil edges and understated diamond studs.",

  "Brides seeking timeless minimalism often fall in love with a scoop neck wedding gown cut from heavyweight crepe or matte silk. On the other hand, a straight neckline wedding dress offers a clean horizontal band that runs straight across the chest without dips or curves. This clean horizontal cut creates a sleek modern look that looks striking in outdoor garden ceremonies and gallery receptions.",

  "## Heavy Silks, Liquid Luster and Satin Wedding Gowns",

  "Fabric weight and weave establish the entire mood of a wedding gown. Light fabrics dance with the wind, while heavy silks glide with intentional posture and luxurious drape. Satin remains the undisputed queen of formal bridal textiles, offering a luminous sheen that catches daylight and evening candles with equal grace.",

  "Modern weavers produce satins with varying luster, from high-shine silk charmeuse to understated matte duchess weaves. Selecting the right satin weave ensures your gown complements your venue lighting and personal comfort.",

  "### Choosing Between Duchess Satin and Fluid Silk Weaves",

  "Brides shopping for satin wedding dresses discover two very different fabric categories. Heavy duchess satin holds its own shape, making it the perfect foundation for structured pleats, Basque waists and sweeping royal trains. In contrast, silk charmeuse flows like liquid across the body, offering a slinky bias-cut silhouette that feels soft and weightless.",

  "When selecting satin wedding gowns, consideration of indoor heating and outdoor climate is essential. Many brides love the effortless luxury of a satin dress bridal design inspired by 1990s minimalism. A memorable example of modern silk styling is the [ariana grande wedding dress](/ariana-grande-wedding-dress), which demonstrated how pure silk charmeuse, an empire waist and a simple bubble veil can redefine modern bridal glamour.",

  "### Undergarments and Support Inside Heavy Satin Gowns",

  "Because smooth satin highlights every seam and line underneath, interior garment construction requires thoughtful planning. Experienced ateliers build hidden internal bustiers and waist stays directly into the gown linings, eliminating the need for bulky separate undergarments.",

  "Seamless microfibre shapewear in skin-matching tones ensures a flawless finish without visible lines. With the right foundation inside, a bride can move through her ceremony and dinner knowing her gown will stay smooth, secure and comfortable from early morning preparations to the final farewell.",

  "## Moving Beyond Pure White with Blush, Grey and Floral Textures",

  "Stark bright white is no longer the mandatory default for wedding celebrations. Modern brides increasingly explore soft watercolor undertones and botanical textures that blend harmoniously with outdoor florals and sunset photography. These subtle color choices allow brides to show off their personality while retaining an authentic bridal presence.",

  "From whisper-soft rose champagne to moody slate, color in bridalwear has evolved into a sophisticated design statement. Soft pastel undertones often enhance diverse skin tones far better than bleached white silk.",

  "### Subtle Blush and Pink Colour Gowns for Romantic Ceremonies",

  "A pink wedding dress offers an enchanting choice for outdoor weddings, historic estates and romantic vineyard settings. Rather than bright neon shades, modern designers use pale blush, dusty rose and soft champagne linings beneath ivory tulle to create an ethereal wedding dress with gentle warmth. A blush wedding gown flatters fair, olive and deep skin tones with a soft radiance that looks glowing on camera.",

  "For garden celebrations, a pink colour wedding gown brings a gentle romantic mood that harmonizes with blooming peonies and garden roses. Brides who choose bridal dresses pink discover that the color gives romantic wedding dresses a dreamy quality that feels deeply personal. When a pink dress bride walks down an aisle lined with greenery, the subtle color creates an unforgettable visual harmony with the natural surroundings.",

  "### Slate Grey Undertones and Three-Dimensional Floral Appliques",

  "Brides seeking a modern, slightly dramatic alternative often fall in love with a grey wedding dress. Far from being gloomy, a gray wedding dress uses cool silver, mist and dove-grey tulle layers to give the gown an airy, antique charm that catches candlelight beautifully.",

  "For brides who want tactile depth, a floral bridal gown adorned with hand-stitched petals, laser-cut blossoms and leafy vines brings botanical beauty to life. Pairing a wedding dress and flowers creates a whimsical garden romance that turns the ceremony walk into a memorable fashion moment. The layered petal appliques float softly across the train, mimicking blossoms scattered along the aisle.",

  "## Modular Elements, High Slits and Edgy Outerwear Layers",

  "Modern celebrations rarely stay in one room all evening. A full-day itinerary might begin with a sacred morning ceremony, continue with afternoon garden cocktails and finish with a lively nightclub afterparty. Today's brides demand versatile wardrobe solutions that adapt to changing party moments without requiring a trip back to the hotel for a full outfit change.",

  "Convertible design elements give brides multiple distinct looks from a single gown. Removable skirts, clip-on sleeves and functional skirt openings allow seamless transitions between ceremony reverence and reception fun.",

  "### Detachable Skirts, Removable Trains and Side Slits",

  "A convertible wedding dress solves the classic dilemma of balancing ceremony grandeur with reception mobility. Brides can wear a magnificent ballgown skirt down the aisle, then detach it before dinner to reveal a sleek column dress ready for dancing. A wedding dress with detachable skirt saves time and money while giving guests the surprise of a quick wardrobe transformation.",

  "Similarly, a detachable train wedding dress provides sweeping drama for formal photography while letting the bride dance unburdened once the celebration begins. For brides who want modern flair and effortless movement, a wedding dress with slit has become an essential contemporary design. A discreet thigh-high slit allows the fabric to part gracefully during movement, showing off designer bridal shoes while keeping the bride cool and comfortable on warm summer nights.",

  "### Pairing Bridal Gowns with Tailored Leather Jackets",

  "For evening receptions and outdoor autumn getaways, modern brides love pairing formal gowns with striking outerwear. A bridal dress with jacket provides practical warmth while adding personal flair to bridal portraits. Tailored tweed jackets, cropped boleros and embroidered capes are popular for vintage-inspired themes.",

  "Meanwhile, fashion-forward city brides often style a leather wedding dress detail or layer an edgy moto jacket over soft tulle. Throwing a custom leather jacket painted with the couple's wedding date over a silk gown creates a chic contrast that looks incredible in sunset rooftop photos. This relaxed mix of formal silk and downtown leather captures the playful spirit of modern weddings.",

  "## Coastal Ceremonies, Lightweight Fabrics and Balancing Veil Lengths",

  "Seaside nuptials and warm-weather destination weddings require thoughtful wardrobe decisions. Ocean breezes, sandy aisles and coastal humidity can easily weigh down heavy structured gowns. Smart destination brides prioritize airy fabrics that breathe naturally and float gently in seaside winds.",

  "Understanding how coastal elements affect garment behavior ensures your ceremony walk remains comfortable, graceful and completely stress-free.",

  "### Breathable Gowns and Easy Skirts for Beach Destinations",

  "When shopping for destination wedding dresses, choosing the right material makes all the difference. Heavy satins and multiple crinoline layers trap heat, whereas lightweight beach wedding dresses crafted from silk chiffon, linen blends and soft crepe allow ocean air to circulate freely.",

  "The best beach gowns for wedding celebrations feature relaxed waistlines, fluid skirts and minimal train lengths that will not drag wet sand along the shoreline. Simple beach wedding dresses with delicate spaghetti straps and open backs keep brides cool under warm tropical sun. Opting for beach style wedding dresses ensures easy walking from wooden boardwalks down to the water's edge, letting beach bridal gowns float effortlessly with every coastal breeze.",

  "### Choosing the Right Veil Length for Seaside Breezes",

  "Navigating different veil lengths becomes especially crucial during outdoor and seaside ceremonies. While a cathedral veil looks breathtaking in a windless indoor church, strong beach gusts can easily whip long tulle around your face, bouquet and guests.",

  "For windy shores, a fingertip or elbow length veil provides classic elegance while staying manageable in gusty breezes. Brides who still dream of a cathedral-length train on the beach often opt for a detachable design, securing it during the ceremony vows and removing it before the outdoor photo session begins. Choosing the right veil length ensures your hair, jewelry and neckline remain visible and polished throughout your vows.",

  "## Understanding Atelier Craftsmanship and High-End Bridal Pricing",

  "The bridal market spans an enormous range of price points, from off-the-rack salon selections starting around one thousand dollars to five-figure custom commissions. Knowing what goes into pattern cutting, interior boning, lace sourcing and artisan handwork helps brides navigate their wedding dress budget with clarity.",

  "While standard bridal boutique dresses use factory production, luxury gowns represent hundreds of hours of manual labor by skilled tailors in European and American design studios.",

  "### What Sets Luxury Wedding Dress Designers Apart",

  "Top luxury wedding dress designers such as Vera Wang, Elie Saab, Galia Lahav, Monique Lhuillier and Ines Di Santo are celebrated for their meticulous pattern drafting and exclusive fabric mills. Their design teams spend months refining fit prototypes, ensuring that each corset panel supports the body naturally without pinching.",

  "When examining very expensive wedding dresses, the quality difference reveals itself in the subtle details. Seams are hand-rolled, lace appliques are individually cut and placed by eye and interior linings are crafted from pure silk rather than polyester synthetics. This level of craftsmanship ensures that the gown feels as luxurious against the skin as it looks from across the room.",

  "### The Detailed Handwork Behind the Most Expensive Bridal Gown Commissions",

  "The most expensive bridal gown creations often feature thousands of Swarovski crystals, hand-spun metallic threads and custom lace patterns commissioned specifically for a single client. In high-end Parisian and Milanese ateliers, master embroiderers work for hundreds of hours to attach dimensional glass beads and delicate pearls across the train.",

  "These museum-quality pieces represent true wearable fashion art. For brides investing in premier atelier gowns, the experience includes multiple private fittings, custom toile mockups and personalized pattern adjustments that create a garment fitted exclusively to their unique measurements.",

  "## Frequently Asked Questions About Choosing a Wedding Dress",

  "Selecting your wedding dress brings up practical questions about sizing, neckline alterations, seasonal fabrics and reception changes. Here are clear, straightforward answers to the most common questions brides ask when shopping for their wedding gown.",

  "### What makes a drop waist wedding dress flattering?",

  "A drop waist wedding dress elongates the torso by placing the waist seam below the natural waistline, creating a balanced and statuesque silhouette.",

  "### Which veil lengths work best for outdoor and beach weddings?",

  "Fingertip and elbow veil lengths work best outdoors because they stay secure in breezes without catching on sand, rocks or grass.",

  "### Can you wear a pink or grey wedding dress for a formal ceremony?",

  "Yes, soft blush and slate grey gowns offer an elegant, sophisticated alternative to traditional white that looks stunning in formal ceremony venues.",

  "### Why are designer bridal gowns so expensive compared to retail dresses?",

  "Designer gowns require dozens of hours of hand embroidery, custom silk fabrications, built-in interior corsetry and personalized atelier fittings.",

  "### How does a convertible wedding dress work during the reception?",

  "A convertible wedding dress features a detachable outer skirt or train that unclips easily, transforming a formal ballgown into a dancing-friendly dress."
];

const faqs = [
  {
    question: "What makes a drop waist wedding dress flattering?",
    answer: "A drop waist wedding dress elongates the torso by placing the waist seam below the natural waistline, creating a balanced and statuesque silhouette."
  },
  {
    question: "Which veil lengths work best for outdoor and beach weddings?",
    answer: "Fingertip and elbow veil lengths work best outdoors because they stay secure in breezes without catching on sand, rocks or grass."
  },
  {
    question: "Can you wear a pink or grey wedding dress for a formal ceremony?",
    answer: "Yes, soft blush and slate grey gowns offer an elegant, sophisticated alternative to traditional white that looks stunning in formal ceremony venues."
  },
  {
    question: "Why are designer bridal gowns so expensive compared to retail dresses?",
    answer: "Designer gowns require dozens of hours of hand embroidery, custom silk fabrications, built-in interior corsetry and personalized atelier fittings."
  },
  {
    question: "How does a convertible wedding dress work during the reception?",
    answer: "A convertible wedding dress features a detachable outer skirt or train that unclips easily, transforming a formal ballgown into a dancing-friendly dress."
  }
];

const articleObj = {
  id: "article-wedding-dress-trends-1792840000000",
  title: "Modern Wedding Dress Silhouettes Necklines Fabrics and Styling Trends",
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
console.log("=== STARTING AUDIT FOR WEDDING DRESS ARTICLE ===");

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
