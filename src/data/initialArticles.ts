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
    "title": "The Ultimate Guide To Luxury Silhouettes",
    "subtitle": "Elevate your personal wardrobe through exceptional tailoring while appreciating iconic shapes that define modern haute couture today.",
    "slug": "types-of-dresses",
    "category": "fashion-trends",
    "categoryLabel": "Fashion Trends",
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
    "coverImage": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
    "coverImageAlt": "The Ultimate Guide To Luxury Silhouettes editorial showcase in Parisian haute couture style",
    "content": {
      "dropCapText": "The modern wardrobe thrives on architectural silhouettes and exquisite fabrications.",
      "bodyParagraphs": [
        "Fashion is an eternal dialogue between structure and fluidity.",
        "Every season brings new interpretations of classic garment categories.",
        "True elegance requires understanding which shapes elevate personal proportions.",
        "The world of couture offers endless possibilities for self expression and grace.",
        "## The Evolution Of Eveningwear",
        "Evening attire remains the crown jewel of any luxury collection.",
        "Floor grazing gowns command attention across grand ballrooms globally.",
        "Silk velvet and heavy satin drape magnificently over classic silhouettes.",
        "Every stitch reflects centuries of French and Italian atelier heritage.",
        "### Slip Dresses For Modern Minimalists",
        "The minimalist movement champions the effortless beauty of bias cut silk.",
        "These garments trace the body with quiet confidence and sensual grace.",
        "Layering delicate straps creates understated glamour for sunset cocktails.",
        "Simplicity often achieves the most powerful aesthetic impact.",
        "### Structured Corset Gowns",
        "Corsetry returns to prominence with renewed architectural precision and artistry.",
        "Sculpted bodices construct dramatic hourglass proportions that celebrate form.",
        "Rich brocades and embroidered tulle elevate these pieces into museum worthy artifacts.",
        "Confidence becomes the ultimate accessory when wearing such sculptural masterpieces.",
        "## Daytime Elegance And Tailored Shirtwaists",
        "Daywear demands versatility without sacrificing any measure of sophistication.",
        "The classic shirtwaist dress bridges professional polish and weekend ease.",
        "Crisp poplin and fine linen create breathable barriers against warm climates.",
        "Belted waists add subtle definition to otherwise relaxed silhouettes.",
        "### Wrap Dresses For Universal Appeal",
        "The wrap silhouette flatters diverse body types with remarkable consistency.",
        "Adjustable ties permit custom fits that accommodate fluctuating daily comfort needs.",
        "Solid jewel tones transform the basic wrap into quiet wearable art.",
        "## Key Style Takeaways",
        "* Invest in timeless silhouettes rather than fleeting seasonal novelties.",
        "* Prioritize premium natural fibers like silk and wool and cashmere.",
        "* Tailor off the rack purchases for bespoke levels of fit.",
        "* Balance voluminous skirts with fitted bodices for proportional harmony.",
        "* Select versatile neutral shades as foundational wardrobe anchors."
      ],
      "pullQuote": {
        "text": "True personal style is the translation of inner confidence into outer architecture.",
        "attribution": "Julian Thorne-Dumont"
      },
      "secondaryImage": {
        "url": "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
        "caption": "Editorial curation for types of dresses",
        "alt": "High fashion editorial aesthetic for types of dresses"
      },
      "closingParagraphs": [
        "Curating a timeless fashion presence requires patience, textile literacy, and an unwavering commitment to personal elegance.",
        "As the modern wardrobe evolves, true sophistication remains rooted in harmonious proportions and deliberate curation."
      ],
      "conclusion": "Mastering various dress silhouettes transforms your approach to daily dressing completely. Embrace quality craftsmanship and intentional design choices to build an enduring wardrobe legacy.",
      "faqs": [
        {
          "question": "What defines luxury dress craftsmanship?",
          "answer": "Superior fabric selection combined with meticulous hand finished interior seams."
        },
        {
          "question": "How do I choose the right neckline?",
          "answer": "Match the neckline to your collarbone structure and desired level of formality."
        },
        {
          "question": "Are bias cut garments difficult to maintain?",
          "answer": "They require professional dry cleaning and careful hanging to prevent stretching."
        },
        {
          "question": "What is the most versatile dress style?",
          "answer": "The sheath dress adapts effortlessly from boardroom meetings to evening events."
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
    "coverImage": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
    "coverImageAlt": "The Allure Of The Soft Summer Color Palette editorial showcase in Parisian haute couture style",
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
        "url": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
        "caption": "Editorial curation for soft summer color palette",
        "alt": "High fashion editorial aesthetic for soft summer color palette"
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
