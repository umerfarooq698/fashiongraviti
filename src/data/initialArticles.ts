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
    "subtitle": "Discover how the soft summer color palette enhances your natural beauty with muted tones and gentle undertones for everyday elegance today.",
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
      "dropCapText": "Finding the right clothing colors can completely transform how radiant and rested your skin appears in everyday life.",
      "bodyParagraphs": [
        "## Understanding the Soft Summer Color Palette",
        "When you look in the mirror and notice that your skin, hair, and eyes share a muted, low-contrast quality, you might belong to the soft summer seasonal category. This specific color family sits between summer and autumn, meaning it pulls the cool undertones of traditional summer alongside a touch of earthy softness. People with this coloring often look washed out in stark black, pure white, or neon brights, which overpower their delicate natural features. Instead, the ideal wardrobe relies on dusty, smoky, and gentle hues that mirror the hazy beauty of a late summer afternoon.",
        "Many clients confuse this profile with a true summer colour palette, but the key distinction lies in chroma rather than temperature alone. While a true summer leans heavily into crisp, cool clarity, the soft summer palette welcomes a hint of warmth while remaining firmly cool overall. This makes it a wonderfully versatile category to dress for once you learn to identify the right level of saturation in your garments. Your goal is to match the inherent softness of your complexion so that your clothes frame your face rather than competing with it for attention.",
        "## Differentiating Between Summer Subcategories",
        "It is very common to mistake your season, especially when comparing a light summer color analysis with other summer subtypes. A light summer color palette focuses heavily on high lightness and delicate, airy pastel shades that look frosted and bright. By contrast, the soft summer palette is defined primarily by its muted quality, meaning the colors contain a gray undertone that mutes their intensity. If you have ever wondered why ice blues look slightly too stark on you while dusty slate blue looks harmonious, you are likely noticing the difference between light and soft summer characteristics.",
        "Another point of confusion often arises around natural light summer hair color versus soft summer hair. Soft summer hair typically ranges from medium ash brown to dark blonde, consistently displaying a cool, smoky, or mousy cast without heavy golden highlights. When you inspect your hair in natural daylight, you will notice an absence of rich warmth or brassy tones, which explains why golden and copper dyes look discordant on your skin. Embracing this ash-toned foundation is the first step toward building a cohesive wardrobe that truly flatters your physical traits.",
        "## Core Colors and Neutral Foundations",
        "Building a functional wardrobe starts with selecting reliable neutrals that form the backbone of your daily outfits. For a soft summer, avoid pitch black and stark optic white, as these create too much visual contrast and drain color from your face. Instead, use soft charcoal gray, cocoa brown, navy blue, and soft taupe as your primary building blocks for trousers, coats, and blazers. These muted neutrals provide a sophisticated backdrop that pairs effortlessly with the richer accent colors in your seasonal collection.",
        "Once your neutral base is secure, you can introduce signature accent shades that bring your complexion to life. Think of dusty rose, sage green, mauve, raspberry, and soft periwinkle as your go-to choices for blouses, knitwear, and accessories. These shades echo the natural harmony of your features, making your eyes appear brighter and your skin tone look remarkably even. You can mix and match these tones freely because they share the same muted, cool undertone family, ensuring your outfits always look put together.",
        "## Practical Wardrobe Styling and Fabrics",
        "Choosing the right colors is only half the battle when curating a closet that works for your unique lifestyle. Texture and fabric finish play a massive role in how soft summer colors are perceived on your body throughout the day. Highly reflective fabrics like shiny satin or stiff polyester can make muted colors look harsh, whereas matte textures like brushed cotton, linen, wool, and soft silk enhance the smoky depth of your palette. Selecting the right garments ensures that your clothes feel as comfortable and authentic as they look visually.",
        "Accessories also provide a fantastic opportunity to test out seasonal shades without committing to a full outfit overhaul. Opt for brushed silver, soft pewter, or rose gold jewelry rather than bright, polished yellow gold, which can clash with your cool undertones. Leather goods in taupe, mushroom, or muted navy offer a much softer contrast against your outfits than traditional black accessories. Small adjustments like these create a harmonious overall aesthetic that feels effortless and naturally refined."
      ],
      "pullQuote": {
        "text": "Your goal is to match the inherent softness of your complexion so that your clothes frame your face rather than competing with it.",
        "attribution": "Aurelia Vance-Sterling"
      },
      "secondaryImage": {
        "url": "https://plus.unsplash.com/premium_photo-1758530085195-4e69700ea2ae?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
        "caption": "Fabric swatches and cool muted color palette for soft summer curation",
        "alt": "Muted fabric swatches and soft summer color palette"
      },
      "closingParagraphs": [
        "Transitioning your existing wardrobe to align with your seasonal palette requires patience and thoughtful editing. Start by sorting through your current garments and setting aside pieces that actively wash you out or feel too bright against your skin. You do not need to replace everything at once, but being mindful of color harmony during future shopping trips will save you money and prevent fashion regrets.",
        "Embracing your natural palette is ultimately about celebrating what makes your personal coloring unique and beautiful. When you wear shades that harmonize with your eyes, hair, and skin, getting dressed in the morning becomes a joyful and intuitive experience. Trust your eye, experiment with muted tones, and enjoy the confidence that comes from wearing clothes that truly belong to you."
      ],
      "conclusion": "Mastering the soft summer color palette allows you to build a cohesive, flattering wardrobe based on muted tones and cool-neutral harmony.",
      "faqs": [
        {
          "question": "Can soft summers wear black?",
          "answer": "Pitch black is generally too harsh and high-contrast for a soft summer. Instead, substitute black with soft charcoal gray, deep navy, or smoky cocoa brown for a much more flattering effect."
        },
        {
          "question": "What jewelry metals look best on soft summers?",
          "answer": "Brushed silver, pewter, and soft rose gold look exceptionally harmonious on soft summers because they complement cool undertones without being overly shiny or bright."
        },
        {
          "question": "How do I know if I am a soft summer or soft autumn?",
          "answer": "Soft summers lean cool and have a smoky, ash-toned quality, while soft autumns lean warm and have subtle golden or earthy undertones beneath their muted appearance."
        },
        {
          "question": "What makeup colors work for a soft summer?",
          "answer": "Opt for dusty rose lipsticks, mauve blushes, and soft taupe or gray-brown eyeshadows to keep your makeup look natural, understated, and well-balanced."
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
