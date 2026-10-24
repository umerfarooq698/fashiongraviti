const fs = require("fs");

const userKeywords = [
  "ariana grande wedding dress",
  "ariana grande wedding dress price",
  "vera wang ariana grande wedding dress",
  "ariana grande wedding",
  "is ariana grande married",
  "who is ariana grande dating",
  "are ariana grande and ethan slater still together",
  "is ariana grande dating anyone",
  "ariana grande divorce",
  "why did ariana grande get divorced",
  "ariana grande ponytail",
  "ariana ponytail",
  "ariana grande high pony"
];

const competitorKeywords = [
  "ariana grande wedding dress",
  "vera wang haute",
  "custom bridal gown",
  "silk charmeuse",
  "empire waist column gown",
  "sculpted sweetheart neckline",
  "plunging low back",
  "exposed bra strap closure",
  "audrey hepburn homage",
  "funny face 1957",
  "bubble veil",
  "shoulder length veil",
  "satin bow at the crown",
  "lorraine schwartz jewelry",
  "upside down pearl earring",
  "pearl and diamond earrings",
  "dalton gomez",
  "montecito intimate wedding",
  "wedding guest list",
  "met gala pact",
  "heavenly bodies 2018",
  "mimi cuttrell styling",
  "josh liu hair",
  "half-up high ponytail",
  "bridal ponytail",
  "ash k holm makeup",
  "winged eyeliner",
  "natural bridal makeup",
  "giuseppe zanotti platforms",
  "white satin platform pumps",
  "wedding dress cost estimate",
  "luxury bridal design",
  "minimalist bridal silhouette",
  "sweetener album aesthetic",
  "pearl engagement ring",
  "wicked filming schedule",
  "london production",
  "ethan slater",
  "amicable divorce settlement",
  "los angeles superior court",
  "irreconcilable differences",
  "celebrity marriage timeline",
  "pop culture wedding moments",
  "vogue exclusive photos",
  "instagram record likes",
  "candlelit living room ceremony",
  "botanical floral arrangements",
  "tudor style residence",
  "understated bridal glam",
  "clean girl bridal aesthetic",
  "classic hollywood elegance",
  "timeless bridal styling",
  "modern wedding gown trends",
  "soft romantic waves",
  "cat-eye liner",
  "silk column silhouette",
  "private celebrity nuptials"
];

const title = "Ariana Grande Wedding Dress Design Story Price and Style Evolution";

const dropCapText = "When Ariana Grande posted photos from her May 2021 wedding in Montecito, the images broke Instagram records in just a few hours. Millions of fans expected a giant puffy gown or an over-the-top pop star stage outfit. Instead, she walked down the aisle in a sleek, lily-white silk charmeuse dress that felt personal, quiet and timeless. The pictures earned instagram record likes almost instantly, turning her private day into one of the most talked-about pop culture wedding moments in recent years.";

const bodyParagraphs = [
  "Her gown surprised fashion critics because it avoided heavy lace, stiff corsetry and giant trains. By choosing clean lines and a retro Hollywood silhouette, she created a timeless bridal styling moment that modern brides still copy today, sparking modern wedding gown trends centered on simple elegance.",
  "Looking back at that montecito intimate wedding reveals a lot about her personal taste and how her public image grew up. From the sweet pact that started the design to recent chapters in her life, the ariana grande wedding dress remains a fascinating look at celebrity fashion, private memories and classic styling.",
  "## From a Met Gala Promise to the Montecito Wedding",
  "Ariana Grande planned her wedding away from the public eye, keeping the focus on family, close friends and personal memories. The journey to that quiet day in California was shaped by a long-standing friendship with one of the most famous bridal designers in fashion.",
  "### The Secret Pact Made with Vera Wang in 2018",
  "The story of this dress actually started three years before the ceremony took place. Back in 2018, Vera Wang dressed the singer for the Met Gala Heavenly Bodies 2018 red carpet in a dramatic Sistine Chapel print ballgown. While standing together on the museum steps, the two made a sweet met gala pact that Wang would personally make her wedding dress whenever the big day arrived.",
  "When the singer called years later to say she was getting married, Wang delivered on that promise with a custom vera wang ariana grande wedding dress created through months of careful work in her New York studio. The collaboration showed how a close designer friendship can turn into a custom bridal gown that fits a star's personality perfectly.",
  "### An Intimate Ceremony Inside Her Living Room",
  "The ariana grande wedding happened on May 15, 2021, at her private home in Montecito, California. The couple picked her historic Tudor style residence so they could celebrate away from photographers, drones and news crews.",
  "The wedding guest list had fewer than twenty people, including only close family members and long-time friends. Florist Vicki Vlachakis hung botanical floral arrangements from the wooden ceiling beams, filling the living room with white flowers and hanging greenery.",
  "Hundreds of white pillar candles lined the wooden floors, creating a warm candlelit living room ceremony. Vogue exclusive photos later showed the private celebrity nuptials, revealing a simple and calm setting that felt completely different from her usual arena concerts.",
  "## The Story and Cut of Vera Wang's Silk Dress",
  "Instead of choosing a standard white ballgown with layers of tulle, the singer wanted something sleek, elegant and deeply rooted in vintage Hollywood history. The finished gown was built around clean lines, soft fabric and subtle details that surprised fashion watchers around the world.",
  "### Silk Charmeuse Fabric and the Sweetheart Neckline",
  "The custom bridal gown was cut from pure lily-white silk charmeuse, falling in an empire waist column gown that fit her petite frame naturally. The front featured a sculpted sweetheart neckline that highlighted her collarbones with a clean shape. Rather than adding heavy crystals or beadwork, Wang went with a minimalist bridal silhouette where the fluid silk column silhouette provided all the beauty.",
  "The back of the gown held the biggest design surprise. Wang cut a plunging low back that dipped down to the waist, held together across the shoulder blades by an exposed bra strap closure made of the same silk charmeuse. A small rear walking slit made moving easy, letting her walk comfortably through the house without the hem getting caught.",
  "### The Audrey Hepburn Movie Look and Short Bubble Veil",
  "Under Mimi Cuttrell styling direction, the singer chose to turn her bridal look into a stylish Audrey Hepburn homage. The team looked directly at Hepburn's famous bridal look in the classic movie Funny Face 1957, bringing 1950s cinema charm into a real 2020s wedding.",
  "Instead of dragging a long train across the floor, Wang designed a shoulder length veil made of hand-pleated bubble veil netting. Right at the top sat a dainty white satin bow at the crown, giving the classic Hollywood elegance a sweet, youthful touch.",
  "Underneath the dress, custom Giuseppe Zanotti platforms gave her six inches of height. The white satin platform pumps stayed completely hidden beneath the silk skirt while keeping her comfortable on her feet throughout the celebration.",
  "## What Ariana Grande's Custom Wedding Dress Cost",
  "Celebrity wedding dresses are rarely sold off the rack, making their actual price tag a popular topic of conversation among fashion fans and brides-to-be. A custom design from a major atelier involves unique materials, individual pattern drafting and dozens of hours of specialized hand sewing.",
  "### Store Prices Versus a One-of-a-Kind Designer Dress",
  "Custom celebrity gowns do not have price tags on a rack, but fashion editors and wedding planners often discuss the ariana grande wedding dress price when comparing handmade custom pieces to boutique dresses.",
  "Standard off-the-rack gowns from Vera Wang Haute boutiques usually start around seven thousand dollars and go up to twelve thousand dollars for runway styles. Custom one-of-a-kind celebrity work is an entirely different level of luxury bridal design. Custom pieces take months of pattern work, multiple fittings in New York, premium fabric orders and dozens of hours of hand sewing by senior dressmakers.",
  "Bridal industry insiders put the wedding dress cost estimate for this custom gown at roughly one hundred and fifty thousand dollars. Much like the rare jewelry pieces discussed in our article on the [kylie jenner fantasy bra](/kylie-jenner-fantasy-bra), custom celebrity fashion pricing reflects months of dedicated artisan labor rather than standard retail store markups.",
  "### The Upside Down Pearl Earrings and Grandmother's Ring",
  "The jewelry chosen for the wedding carried a sweet family story. Lorraine Schwartz jewelry created a custom set of pearl and diamond earrings for the ceremony. In a clever and personal touch, one earring sat right-side up while the other was worn as an upside down pearl earring.",
  "The uneven design matched her custom pearl engagement ring, which featured an oval diamond next to a small pearl her grandmother Marjorie gave her. Wearing one pearl inverted also connected with her Sweetener album aesthetic, reminding her to appreciate life through its upside-down moments. The pearl and diamond earrings gave her an understated bridal glam that felt deeply personal.",
  "## Changing Her Signature Ponytail and Makeup for Her Wedding Day",
  "For years, her sky-high ponytail and sharp winged eyeliner defined her public image on red carpets and world tours. For her walk down the aisle, her beauty team found a way to honor those famous trademarks while creating a softer, more intimate look for her living room ceremony.",
  "### A Soft Half-Up Hairstyle Created by Josh Liu",
  "Her high ponytail is one of the most famous hair signatures in pop culture. Before the ceremony, fans wondered if she would keep her regular ariana grande ponytail, wear the classic ariana grande high pony, or try something completely different for her wedding day.",
  "When styling her bridal hair, Josh Liu hair direction took charge of her look, creating a romantic spin on her usual style. Instead of the tight, slicked-back ponytail she wears during stadium concerts, Liu gave her a soft half-up high ponytail. He gathered the crown section into a gentle lift, pinning the short bubble veil right above the tie.",
  "The rest of her hair fell around her shoulders in soft romantic waves with flipped ends. This bridal ponytail kept the signature height of the ariana ponytail while looking soft and natural in the candlelit room.",
  "### Winged Eyeliner and Fresh Skin by Ash K Holm",
  "For the face, Ash K Holm makeup artistry focused on fresh, glowing skin that fit modern clean girl bridal aesthetic ideas. The look skipped heavy foundation, letting her real skin show through soft lighting.",
  "Holm drew a classic cat-eye liner that stretched softly toward the temples, keeping her familiar winged eyeliner in a gentle, romantic way. The natural bridal makeup looked smooth in daytime window light and glowing under hundreds of room candles.",
  "## Dalton Gomez Divorce, Ethan Slater and Life Today",
  "While her wedding day captured global attention, the years that followed brought major life shifts, demanding film roles and personal changes. Fans around the world continue to follow how her personal life unfolded after the ceremony.",
  "### Why Ariana Grande and Dalton Gomez Got Divorced",
  "Because her relationships are always in the news, readers often search is ariana grande married or ask why did ariana grande get divorced on the celebrity marriage timeline. The marriage lasted nearly two years before the two quietly separated in early 2023.",
  "The official ariana grande divorce was settled through Los Angeles Superior Court in March 2024, citing irreconcilable differences. People close to the couple shared that adjusting back to busy public life after lockdown was hard on them. Dalton Gomez, who works with private real estate buyers, was not used to heavy security teams and non-stop cameras following them everywhere.",
  "Her demanding filming schedule for Wicked during the london production also kept them apart for months at a time during long production days. The two reached an amicable divorce settlement without public fighting, keeping their split respectful.",
  "### Dating Ethan Slater and Focusing on Her Music",
  "Following the split, people often search who is ariana grande dating, is ariana grande dating anyone, or check are ariana grande and ethan slater still together. During her time in London filming Wicked, she started dating actor Ethan Slater, who played Boq in the movie.",
  "They dated quietly during production and through early movie promotions. Recent reports confirm that they have ended their romantic relationship on good terms, staying supportive friends as their film releases. Right now, her focus stays on her music, her r.e.m. beauty brand and her acting projects.",
  "## Frequently Asked Questions About Ariana Grande Wedding",
  "Here are direct answers to common questions about her wedding gown, jewelry and marriage timeline.",
  "### Who designed Ariana Grande's wedding dress?",
  "Her wedding dress was custom-made by Vera Wang Haute, following a promise they made to each other at the 2018 Met Gala.",
  "### How much did Ariana Grande's wedding dress cost?",
  "Fashion insiders estimate her custom Vera Wang gown cost around one hundred and fifty thousand dollars, reflecting months of custom atelier work.",
  "### What inspired Ariana Grande's wedding veil?",
  "Her bubble veil with a satin bow was inspired by Audrey Hepburn's wedding look in the 1957 film Funny Face.",
  "### Is Ariana Grande still married to Dalton Gomez?",
  "No, the couple separated in early 2023 and their divorce was finalized in March 2024.",
  "### How did Ariana Grande style her hair for her wedding?",
  "Hairstylist Josh Liu created a soft half-up ponytail with romantic waves, keeping her signature hair height in a gentle bridal style."
];

const fullText = dropCapText + " " + bodyParagraphs.join(" ");

console.log("=== CHECKING AUDIT ===");
const words = fullText.split(/\s+/).filter(Boolean).length;
console.log("1. Total Words:", words);

// Oxford commas check
const oxford = fullText.match(/,\s+(and|&)\b/gi);
console.log("2. Oxford Commas Found:", oxford ? oxford.length : 0, oxford || []);

// Banned AI words check
const banned = [
  "architecture", "masterclass", "bespoke couture", "heirlooms", "strikingly", "frenzy", 
  "meticulously", "effortlessly", "transcends", "captivating", "whisper", "whispers", 
  "serves as a reminder", "at the center of that", "comprehensive", "furthermore", "delve", 
  "testament", "tapestry", "paramount", "beacon", "realm", "in conclusion", "decoding", 
  "unmatched", "pivotal", "cornerstone", "mastering", "elevate", "elevated", "navigating", 
  "revolutionize", "unveiling", "nuanced", "multifaceted", "seamlessly", "harnessing", 
  "dive deep", "demystifying", "testament to", "it is important to note", "it is worth noting", 
  "worth noting", "plethora", "crucial", "vital", "moreover", "landscape", "dance of", 
  "symphony", "undeniably", "undeniable", "boasts", "boasting", "embark", "embarking"
];
const foundBanned = banned.filter(b => fullText.toLowerCase().includes(b.toLowerCase()));
console.log("3. Banned AI Words Found:", foundBanned);

// Missing user keywords
const missingUser = userKeywords.filter(k => !fullText.toLowerCase().includes(k.toLowerCase()));
console.log("4. Missing User Keywords (" + missingUser.length + "):", missingUser);

// Internal links
const internalLinks = [...fullText.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
console.log("5. Internal Links Count:", internalLinks.length, internalLinks.map(l => `${l[1]} -> ${l[2]}`));

// Competitor LSI keywords
const foundComp = competitorKeywords.filter(k => fullText.toLowerCase().includes(k.toLowerCase()));
console.log(`6. Competitor LSI Keywords Found: ${foundComp.length} / ${competitorKeywords.length}`);

// Bullet points count
const bulletCount = bodyParagraphs.filter(p => p.startsWith("* ") || p.startsWith("- ")).length;
console.log("7. Bullet points count:", bulletCount);

// Bold check
console.log("8. Any ** bold markers present:", fullText.includes("**"));

// Colon in title
console.log("9. Title has colon (:):", title.includes(":"));
console.log("10. Title has 'Guide':", title.toLowerCase().includes("guide"));

// Headings with colon check
const headings = bodyParagraphs.filter(p => p.startsWith("#"));
console.log("11. Headings count:", headings.length);
console.log("12. Headings with colon:", headings.filter(h => h.includes(":")));

// Total colons in fullText
console.log("13. Total colons in fullText:", [...fullText.matchAll(/:/g)].length);
