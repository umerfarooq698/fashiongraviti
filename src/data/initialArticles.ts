import type { FashionArticle, FashionCategory, LookbookItem } from '../types/fashion';

export const FASHION_CATEGORIES: FashionCategory[] = [
  {
    id: 'all',
    name: 'Home',
    tagline: 'BREAKING EDITORIAL AND RUNWAY FEED',
    description: 'The complete stream of fashion news, style guides, celebrity spotlights, and brand exclusives.',
    image: 'https://images.unsplash.com/photo-1603122630570-7fd434d470d0?auto=format&fit=crop&w=1200&q=85',
    accent: '#8f121d',
    count: 2,
  },
  {
    id: 'fashion-news',
    name: 'Fashion News',
    tagline: 'BREAKING INDUSTRY AND RUNWAY HEADLINES',
    description: 'Global fashion week bulletins, creative director announcements, and major industry movements.',
    image: 'https://images.unsplash.com/photo-1733322992706-1210ca79f4df?auto=format&fit=crop&w=1200&q=85',
    accent: '#c59d54',
    count: 0,
  },
  {
    id: 'fashion-trends',
    name: 'Fashion Trends',
    tagline: 'SEASONAL SILHOUETTES AND FORECASTS',
    description: 'The biggest runway-to-street trends, color palettes, and must-have wardrobe shifts.',
    image: 'https://images.unsplash.com/photo-1717944105945-669b3dd77bfd?auto=format&fit=crop&w=1200&q=85',
    accent: '#8f121d',
    count: 2,
  },
  {
    id: 'celebrity',
    name: 'Celebrity',
    tagline: 'RED CARPET, MET GALA AND ICONS',
    description: 'Celebrity street style, film festival red carpets, cover star profiles, and stylist breakdowns.',
    image: 'https://images.unsplash.com/photo-1742123316636-299eb108d83c?auto=format&fit=crop&w=1200&q=85',
    accent: '#c59d54',
    count: 0,
  },
  {
    id: 'designers-brands',
    name: 'Designers And Brands',
    tagline: 'HERITAGE ATELIERS AND ICONIC HOUSES',
    description: 'Behind-the-scenes monographs, brand histories, haute couture ateliers, and designer profiles.',
    image: 'https://images.unsplash.com/photo-1673201229733-69d19c5c4a87?auto=format&fit=crop&w=1200&q=85',
    accent: '#8f121d',
    count: 0,
  },
  {
    id: 'beauty',
    name: 'Beauty',
    tagline: 'BACKSTAGE GLAMOUR, SKIN AND SCENTS',
    description: 'Runway makeup secrets, signature fragrances, skincare science, and hair trends.',
    image: 'https://images.unsplash.com/photo-1604073788733-f01b27fe34cd?auto=format&fit=crop&w=1200&q=85',
    accent: '#c59d54',
    count: 0,
  },
  {
    id: 'how-to-style',
    name: 'How to Style',
    tagline: 'EXPERT WARDROBE AND STYLING GUIDES',
    description: 'Practical luxury styling formulas, capsule wardrobes, layering techniques, and fit advice.',
    image: 'https://images.unsplash.com/photo-1575225395866-965c8c77727f?auto=format&fit=crop&w=1200&q=85',
    accent: '#5d6b5c',
    count: 0,
  }
];

export const INITIAL_ARTICLES: FashionArticle[] = [
  {
    "id": "article-types-of-dresses-1791199697853",
    "title": "Types Of Dresses Every Woman Should Know In Luxury Fashion",
    "subtitle": "Explore iconic dress silhouettes from flattering wrap designs to timeless slip styles curated for sophisticated modern wardrobe building today",
    "slug": "types-of-dresses",
    "category": "how-to-style",
    "categoryLabel": "How to Style",
    "season": "AUTUMN / WINTER 2026",
    "issueNumber": "ISSUE NO. 19",
    "locationTag": "PARIS // EDITORIAL DESK",
    "featured": false,
    "author": {
      "name": "Julian Thorne-Dumont",
      "role": "Senior Sartorial and Tailoring Critic",
      "location": "Milan and London",
      "avatar": "/authors/julian-thorne-dumont.jpg",
      "instagram": "@julian_sartorial"
    },
    "publishedAt": "OCTOBER 5, 2026",
    "readTime": "8 MIN READ",
    "coverImage": "https://plus.unsplash.com/premium_photo-1674718918254-8f96b77c12d8?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
    "coverImageAlt": "Collection of luxury designer dresses arranged on an editorial showroom rack",
    "content": {
      "dropCapText": "Understanding different types of dresses is the cornerstone of building an intentional, enduring wardrobe.",
      "bodyParagraphs": [
        "Every classic dress silhouette communicates a distinct mood, proportion, and aesthetic identity.",
        "From tailored daytime workwear to evening galas, each design serves a deliberate sartorial purpose.",
        "Fashion Graviti breaks down the most essential dress styles that form the foundation of luxury style.",
        "## The Flattering Classics For Daily Wear",
        "### The A Line Silhouette",
        "The A line dress is fitted through the bodice and flares gently toward the hemline.",
        "This balanced triangular shape effortlessly suits virtually every body type with timeless charm.",
        "### The Tailored Shirt Dress",
        "Borrowing crisp collar details from menswear, the shirt dress balances professional polish with ease.",
        "Cinching the waist with a leather belt instantly transitions this silhouette from office to dinner.",
        "### The Iconic Wrap Dress",
        "Featuring a front closure wrapped across the torso, this design emphasizes natural curves effortlessly.",
        "Adjustable ties make the wrap dress one of the most comfortable and universally flattering choices.",
        "## Sleek Minimalist And Structured Silhouettes",
        "### The Bias Cut Slip Dress",
        "Popularized in the nineties, the bias cut slip dress drapes gracefully along body contours.",
        "Crafted from fine silk or satin, it transitions seamlessly from daytime layering to evening elegance.",
        "### The Architectural Sheath Dress",
        "The sheath dress is a form fitting straight cut garment that hits at or below the knee.",
        "Its clean lines and structured darting make it an essential staple for high stakes boardroom presence.",
        "### The Straight Cut Shift Dress",
        "The shift dress hangs loosely from the shoulders with minimal tailoring through the waistline.",
        "Its boxy silhouette provides breezy ease and retro mid century charm for effortless movement.",
        "## Dramatic Silhouettes For Evening And Occasions",
        "### The Flowing Maxi Dress",
        "Maxi dresses reach all the way down to ankle or floor length with dramatic flowing volume.",
        "Whether rendered in airy chiffon or structured pleated jersey, this silhouette delivers effortless poise.",
        "### The Form Hugging Bodycon",
        "The modern bodycon embraces the figure tightly with supportive stretch knit textiles.",
        "Pairing high necklines with sleek midi lengths gives this silhouette an elevated quiet luxury feel.",
        "### The Sculpted Ball Gown",
        "Featuring a fitted bodice and an expansive bell shaped skirt, the ball gown defines regal glamour.",
        "This formal silhouette is reserved for white tie events, state dinners, and grand black tie galas.",
        "## Key Style Takeaways",
        "* Choose A line and wrap dresses for universal comfort and instant proportional balance.",
        "* Select structured sheath dresses for authoritative business and corporate engagements.",
        "* Invest in high quality silk slip dresses for effortless day to night layering versatility.",
        "* Match hemline length carefully with shoe heel height to maintain optimal posture and flow.",
        "* Build a foundational collection of neutral dresses before adding seasonal printed designs."
      ],
      "pullQuote": {
        "text": "True personal style begins when you understand how each silhouette interacts with your posture and movement.",
        "attribution": "Julian Thorne-Dumont"
      },
      "secondaryImage": {
        "url": "https://images.unsplash.com/photo-1784850227103-9397b78db67f?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
        "caption": "Haute couture runway model presenting sculptural dress silhouette",
        "alt": "Haute couture dress silhouette on runway showcase"
      },
      "closingParagraphs": [
        "Curating a versatile dress repertoire allows you to navigate every social and professional invitation with calm assurance.",
        "By focusing on silhouette integrity and exquisite tailoring, your wardrobe becomes an enduring reflection of refined taste."
      ],
      "conclusion": "Mastering the fundamental types of dresses transforms the daily ritual of dressing into effortless artistry. Select shapes that celebrate your individuality and enjoy the timeless confidence they deliver.",
      "faqs": [
        {
          "question": "What are the most essential types of dresses to own?",
          "answer": "A well rounded capsule includes an A line dress, a tailored shirt dress, an architectural sheath, and a versatile silk slip dress."
        },
        {
          "question": "Which dress silhouette is most flattering for all body shapes?",
          "answer": "The wrap dress and A line silhouette are universally flattering because they naturally define the waist without clinging uncomfortably."
        },
        {
          "question": "What is the difference between a sheath and a shift dress?",
          "answer": "A sheath dress is form fitting with waist darts, whereas a shift dress falls straight from the shoulders with minimal waist shaping."
        },
        {
          "question": "How should I choose between a midi and a maxi dress?",
          "answer": "Midi dresses hit at mid calf and work seamlessly for both professional and casual settings, while floor grazing maxi dresses offer effortless drama."
        }
      ]
    },
    "tags": [
      "Dresses",
      "Haute Couture",
      "Luxury Style",
      "Fashion Trends",
      "Wardrobe Essentials"
    ],
    "mood": "Quiet Luxury",
    "likes": 187,
    "bookmarksCount": 109
  },
  {
    "id": "article-soft-summer-color-palette-1791199292794",
    "title": "How To Style The Soft Summer Color Palette In Daily Life",
    "subtitle": "Discover the sophisticated science behind low-contrast styling, muted cool tones, and expert wardrobe curation for the muted summer aesthetic.",
    "slug": "soft-summer-color-palette",
    "category": "fashion-trends",
    "categoryLabel": "Fashion Trends",
    "season": "AUTUMN / WINTER 2026",
    "issueNumber": "ISSUE NO. 18",
    "locationTag": "PARIS // EDITORIAL DESK",
    "featured": true,
    "author": {
      "name": "Aurelia Vance-Sterling",
      "role": "Editor-in-Chief and Haute Couture Critic",
      "location": "Paris and New York",
      "avatar": "/authors/aurelia-vance-sterling.jpg",
      "instagram": "@aurelia_vance"
    },
    "publishedAt": "OCTOBER 5, 2026",
    "readTime": "9 MIN READ",
    "coverImage": "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
    "coverImageAlt": "Muted layers of soft summer fabric swatches under natural studio daylight",
    "content": {
      "dropCapText": "Under daylight draping lamps, the nuanced beauty of the **soft summer color palette** reveals itself in muted, dusty tones. True chromatic harmony relies on precise undertones rather than superficial appearance. Sartorial professionals look past initial impressions to uncover the exact Munsell dimensions that suit this muted cool profile.",
      "bodyParagraphs": [
        "## Understanding Color Science Dimensions",
        "### The Munsell System Framework",
        "Professional color analysis utilizes the Munsell color system to categorize shades by hue, value, and chroma. The **soft summer color palette** sits firmly in a neutral-cool hue with a medium value range of 4 to 6. Its defining characteristic is low chroma, falling between 2 and 4, which creates a desaturated, powdery aesthetic.",
        "* **Hue**: Neutral-cool with a slight blue-based undertone.",
        "* **Value**: Medium depth, avoiding extremes of stark white or deep black.",
        "* **Chroma**: Low saturation, giving colors a dusty or smoky appearance.",
        "### Decoding Low Contrast Harmony",
        "Clients who harmonize with this palette typically display low overall contrast between their hair, skin, and eyes. Features blend together softly rather than standing out starkly against one another. Embracing this inherent subtlety prevents high-contrast prints and overly saturated garments from overpowering natural beauty.",
        "## Physical Diagnostics And Draping Truths",
        "### Why Wrist Vein Tests Fail",
        "Relying on the superficial wrist vein test often leads to misdiagnosis in seasonal color analysis. Veins appear blue, green, or purple depending on skin thickness and depth rather than true undertone. Professional analysis relies on controlled fabric draping under 5000K daylight lamps to observe real skin reactions.",
        "### Heathered Slate Iris Patterns",
        "Close examination of the eyes often reveals distinct patterns unique to this season. Many individuals possess heathered slate, soft grey-blue, or hazel eyes with diffuse, smoky overlays. These multicolored irises lack the sharp clarity found in spring or winter profiles.",
        "## Comparing Seasonal Palettes",
        "### Soft Summer Versus Soft Autumn",
        "While both palettes share a low chroma requirement, their underlying temperatures differ significantly. Soft autumn leans toward warm, golden undertones derived from yellow bases. Conversely, the **soft summer color palette** demands cool, blue-based undertones that harmonize with ash brown and cool beige hair.",
        "### Contrasting With True And Light Options",
        "It is common to confuse this muted season with the **true summer colour palette** or a **light summer color palette**. True summer demands cooler and slightly more saturated hues, while a **light summer color analysis** focuses on higher value and lightness. Soft summer remains distinct through its heavier reliance on muted, dusty qualities.",
        "### Exploring Light Summer Variations",
        "Clients exploring a **light summer color palette** or a **light summer palette** often find standard soft summer shades slightly too deep. The **light summer hair color** spectrum ranges from pale blonde to light ash blonde with delicate gold or cool highlights. Understanding these subtle boundaries ensures accurate wardrobe curation without seasonal overlap.",
        "## Wardrobe Curation And Makeup Artistry",
        "### Essential Soft Summer Clothing",
        "Building an intentional capsule wardrobe requires selecting garments that echo the muted qualities of the season. Fabrics should feature matte textures like raw silk, brushed cotton, and fine wool. Avoid shiny synthetics that bounce light unpredictably against muted skin.",
        "* **Dusty Rose**: A soft, muted pink with cool grey undertones.",
        "* **Pewter Grey**: A medium-value neutral replacing stark black.",
        "* **Sage Green**: A desaturated cool green mimicking natural foliage.",
        "* **Soft Navy**: A smoky dark blue that avoids harsh midnight shades.",
        "### Professional Makeup Formulas",
        "Cosmetic choices must respect the low chroma and cool temperature guidelines. Blush should lean toward muted rose or soft mauve rather than vibrant peach or bright coral. Lipsticks benefit from creamy, satin finishes in dusty plum, cool berry, or subdued rosewood.",
        "## Advanced Styling Methodologies",
        "### Monochromatic Dressing Techniques",
        "Monochromatic styling creates an elongated silhouette by layering varying shades of the same cool family. Combine a pewter grey trouser with a dusty blue silk blouse for effortless elegance. This technique honors the low-contrast nature of the wearer.",
        "### Incorporating Prints And Textures",
        "When selecting patterned garments, avoid geometric prints with harsh black outlines or neon color blocks. Opt for watercolor florals, soft plaids, and subtle abstract designs. Textured fabrics like linen and crepe add visual interest without requiring high-contrast color shifts."
      ],
      "pullQuote": {
        "text": "True elegance for the soft summer aesthetic lies in honoring muted cool tones, where subtlety becomes the ultimate statement of refinement.",
        "attribution": "Aurelia Vance-Sterling"
      },
      "secondaryImage": {
        "url": "https://images.unsplash.com/photo-1776969824728-d1023af75226?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
        "caption": "Textured muted swatches reflecting soft summer color harmony",
        "alt": "Textured fabric folds showcasing dusty cool soft summer tones"
      },
      "closingParagraphs": [
        "Navigating personal style within this seasonal framework allows for seamless, cohesive wardrobe planning. By eliminating overly bright garments and harsh black staples, you create space for sophisticated neutrals and dusty pastels. Every clothing choice works in synergy to enhance your natural features without visual competition.",
        "Investing time in professional color evaluation transforms how you shop and dress for decades. The confidence of wearing garments specifically tuned to your Munsell profile yields a polished, enduring aesthetic. Embrace the quiet luxury of desaturated color and let your authentic beauty lead."
      ],
      "conclusion": "Mastering this sophisticated seasonal palette elevates your everyday style through intentional color theory and textile selection. Aligning your wardrobe with muted cool tones ensures timeless elegance and effortless personal harmony.",
      "faqs": [
        {
          "question": "Can soft summers wear black?",
          "answer": "Pure black is generally too harsh and heavy for this muted palette. Instead, rely on charcoal grey, soft navy, or deep cocoa brown as sophisticated dark neutrals."
        },
        {
          "question": "How do I know if I have low contrast?",
          "answer": "Low contrast means your hair, skin, and eyes share a similar depth level. If you look in the mirror in a grayscale photo and your features blend together softly, you likely have low contrast."
        },
        {
          "question": "Are warm highlights suitable for soft summer hair?",
          "answer": "Soft summers can carry very subtle, neutral highlights, but overly warm golden or copper highlights disrupt the cool, smoky undertones required by the palette."
        },
        {
          "question": "What is the main difference between soft summer and soft autumn?",
          "answer": "The primary difference is temperature. Soft summer features cool, blue-based undertones, while soft autumn relies on warm, yellow-based undertones."
        }
      ]
    },
    "tags": [
      "Soft Summer",
      "Color Analysis",
      "Seasonal Palettes",
      "Wardrobe Styling",
      "Summer Colors"
    ],
    "mood": "Quiet Luxury",
    "likes": 384,
    "bookmarksCount": 95
  }
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'look-01',
    title: 'The Basalt Monolith Coat',
    designer: 'Maison Noir // Paris Atelier',
    season: 'AUTUMN / WINTER 2026',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    details: 'Heavy 900g double-woven wool with seamless raglan drape and horn hardware.',
    fabrication: '100% Biella Extra-fine Wool (Italy)',
    tags: ['Fashion News', 'Couture', 'Noir'],
  },
  {
    id: 'look-02',
    title: 'Oatmeal Whisper Overcoat',
    designer: 'Sartoria Veneto // Milan',
    season: 'CRUISE 2026',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    details: 'Unlined baby alpaca with hand-rolled blind hems and horn buttons.',
    fabrication: '90% Peruvian Baby Alpaca, 10% Cashmere',
    tags: ['Fashion Trends', 'How to Style', 'Quiet Luxury'],
  },
  {
    id: 'look-03',
    title: 'Tactical Modular Fishtail',
    designer: 'Kuroda Archive Studio // Tokyo',
    season: 'SPRING / SUMMER 2026',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
    details: 'Transformable 3-stage parka with magnetic quick-release pocket harness.',
    fabrication: 'Waterproof 3-Layer Japanese Ventile Cotton',
    tags: ['Designers And Brands', 'Streetwear'],
  },
  {
    id: 'look-04',
    title: 'Mycelium Evening Gown',
    designer: 'Bio-Weave Lab // London',
    season: 'AUTUMN / WINTER 2026',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=85',
    details: '100% Bio-grown mycelium skin naturally dyed with spirulina algae extract.',
    fabrication: 'Pure Cultivated Ganoderma Mycelium',
    tags: ['Fashion News', 'Beauty', 'Sustainable'],
  }
];

export const RUNWAY_TICKER_ITEMS = [
  'FASHION NEWS: PARIS HAUTE COUTURE WEEK UNVEILS 42 NEW SILHOUETTES AT GRAND PALAIS',
  'FASHION TRENDS: DOUBLE-FACED CASHMERE AND NEUTRAL TAILORING DOMINATE GLOBAL RUNWAYS',
  'CELEBRITY: VINTAGE ARCHIVAL COUTURE TAKES OVER THE RED CARPET IN VENICE AND NEW YORK',
  'DESIGNERS AND BRANDS: HISTORIC ATELIERS EMBRACE 3D ARCHITECTURAL HARDWARE',
  'BEAUTY: LUMINOUS GLASS SKIN AND SCULPTED BROWS SET THE NEW BACKSTAGE STANDARD',
  'HOW TO STYLE: MASTERING CAPSULE WARDROBES AND EFFORTLESS COAT LAYERING THIS SEASON'
];
