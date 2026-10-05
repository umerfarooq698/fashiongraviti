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
    "title": "The Allure Of The Soft Summer Color Palette",
    "subtitle": "Quiet luxury finds its true expression through muted tones and dusty hues that whisper elegance across every single modern wardrobe choice today",
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
    "readTime": "8 MIN READ",
    "coverImage": "https://plus.unsplash.com/premium_photo-1770436962630-07e8b86c5f61?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
    "coverImageAlt": "Soft pastel fabric layers stacked neatly representing the soft summer color palette",
    "content": {
      "dropCapText": "Quiet luxury finds its true expression through muted tones and dusty hues that whisper elegance across every single modern wardrobe choice today.",
      "bodyParagraphs": [
        "Fashion Graviti presents an exclusive look at the gentle spectrum defining contemporary luxury.",
        "Modern style relies heavily on quiet restraint rather than loud declarations of wealth.",
        "The visual language of cool toned beauty speaks through subtle shifts in saturation.",
        "Every garment chosen reflects an authentic commitment to understated refinement and timeless chic appeal.",
        "Designers across major fashion capitals now embrace these dusty aesthetics with remarkable devotion.",
        "## The Essence Of Muted Tones",
        "Subtle chromatic choices elevate everyday dressing into an art form of pure distinction.",
        "The soft summer color palette relies on low contrast pairings and hazy undertones.",
        "Silk blouses in dusty rose create an immediate sense of effortless grace and poise.",
        "Cashmere sweaters in powder blue offer tactile warmth wrapped in visual serenity.",
        "Wardrobe curation becomes a meditative practice focused on balance, texture, and natural beauty.",
        "### Finding Your Palette Identity",
        "Identifying your seasonal match requires careful observation of natural skin undertones.",
        "Cool pigments dominate this specific spectrum without ever feeling harsh or overwhelmingly stark.",
        "Silver jewelry complements these dusty shades far better than traditional warm yellow gold.",
        "Fabric choices should always prioritize matte textures like linen and brushed wool.",
        "Light absorption creates the signature hazy effect that defines this sophisticated visual identity.",
        "## Integrating Dusty Hues Daily",
        "Building a functional wardrobe around muted shades transforms your entire approach to dressing well.",
        "Core garments act as neutral foundations for more expressive seasonal pieces of clothing.",
        "Charcoal gray replaces harsh black for a softer approach to evening wear elegance.",
        "Pale lavender introduces a subtle touch of color without disrupting overall chromatic balance.",
        "Accessories should follow the same muted rule to maintain total stylistic coherence everywhere.",
        "## Key Style Takeaways",
        "* Choose cool toned pastels over bright primary colors for superior daily versatility.",
        "* Pair dusty rose with slate gray to create sophisticated tonal contrast easily.",
        "* Prioritize matte fabrics that absorb light rather than highly reflective satin surfaces.",
        "* Select silver hardware for accessories to harmonize with cool undertones naturally.",
        "* Build foundational outfits using mid tone neutrals as your primary base layer."
      ],
      "pullQuote": {
        "text": "True elegance never shouts for attention because its quiet power speaks volumes through every subtle hue.",
        "attribution": "Aurelia Vance-Sterling"
      },
      "secondaryImage": {
        "url": "https://plus.unsplash.com/premium_photo-1758530085195-4e69700ea2ae?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
        "caption": "Fabric swatches and cool muted color palette for soft summer curation",
        "alt": "Muted fabric swatches and soft summer color palette"
      },
      "closingParagraphs": [
        "Curating a timeless fashion presence requires patience, textile literacy, and an unwavering commitment to personal elegance.",
        "As the modern wardrobe evolves, true sophistication remains rooted in harmonious proportions and deliberate curation."
      ],
      "conclusion": "Embracing muted aesthetics allows your personal style to achieve lasting sophistication and grace. Let these dusty tones redefine your daily wardrobe with quiet confidence.",
      "faqs": [
        {
          "question": "What defines the soft summer color palette?",
          "answer": "This palette features cool undertones combined with low contrast and dusty or muted chromatic values."
        },
        {
          "question": "Can warm skin tones wear these shades?",
          "answer": "Neutral skin variations can often pull off these colors if paired with correct makeup applications."
        },
        {
          "question": "Which metals look best with these tones?",
          "answer": "Silver and white gold harmonize perfectly with the cool spectrum of dusty seasonal hues."
        },
        {
          "question": "How do I transition these clothes seasonally?",
          "answer": "Layer lightweight cashmere over silk pieces during colder months to maintain texture and warmth."
        }
      ]
    },
    "tags": [
      "Soft Summer",
      "Quiet Luxury",
      "Color Palette",
      "Fashion Trends",
      "Wardrobe Essentials"
    ],
    "mood": "Quiet Luxury",
    "likes": 334,
    "bookmarksCount": 62
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
