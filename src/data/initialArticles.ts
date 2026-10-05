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
    "subtitle": "Discover how the soft summer color palette transforms your wardrobe with muted cool tones, dusty hues, and sophisticated everyday style today.",
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
      "dropCapText": "Understanding your personal coloring changes how you shop, dress, and feel in your everyday clothes.",
      "bodyParagraphs": [
        "Welcome to your complete personal styling guide for the soft summer color palette.",
        "When you wear shades that echo your natural biology, your complexion looks rested, radiant, and clear.",
        "## What Is the Soft Summer Color Palette?",
        "The soft summer color palette features cool undertones, medium depth, and a very dusty or muted chroma.",
        "Your natural coloring looks like a blend of cool ash tones with very little high contrast.",
        "Skin, eyes, and hair all share a gentle, smoky quality that looks incredible in misty, muted shades.",
        "## Comparing Summer Sub-Seasons",
        "Many people confuse the soft summer color palette with other cool seasons in seasonal color analysis.",
        "Let us break down how this palette compares to the true summer colour palette and the light summer palette.",
        "### Soft Summer Versus the True Summer Colour Palette",
        "The true summer colour palette is slightly cooler and clearer than the soft summer version.",
        "While true summers can wear slightly icier, more distinct blue-based tones, soft summers need lower contrast.",
        "Putting on a true summer ice blue might wash you out if your primary trait is extreme softness.",
        "### Soft Summer Versus the Light Summer Palette",
        "People often mix up the light summer color palette with soft summer because both are gentle.",
        "A proper light summer color analysis reveals that the light season leans much brighter and warmer overall.",
        "Light summer clothes feature sunlit clarity, whereas the soft summer palette looks grayed down and foggy.",
        "## How to Do a Home Color Analysis",
        "You can test your seasonal type right at home with simple fabric drapes and natural daylight.",
        "Stand in front of a mirror near an open window without wearing any makeup on your face.",
        "### The Fabric Draping Test",
        "Hold up a dusty rose fabric next to a bright neon pink fabric under your chin.",
        "Notice how the bright neon creates harsh shadows while the dusty rose brings out a smooth, even glow.",
        "Next, test a soft navy against a stark black fabric to see which one makes your eyes sparkle naturally.",
        "If muted, cool tones make your skin look rested, you belong in the soft summer category.",
        "## The Signature Soft Summer Colors",
        "Your wardrobe should rely on low-contrast, smoky neutrals rather than harsh black or bright white.",
        "Build your foundation with soft navy, slate grey, and cocoa brown.",
        "### Gorgeous Accent Shades",
        "Add visual interest with dusty rose, seafoam green, muted plum, and dusty teal.",
        "These colors mimic sea glass, foggy mornings, and weathered stones found in nature.",
        "## Colors to Strictly Avoid",
        "Stay away from stark black and pure bright white because they overwhelm your natural softness.",
        "Electric neons, fiery oranges, and warm mustard yellows clash badly with cool, muted skin undertones.",
        "Golden camel and tomato red will make your face look ruddy and tired.",
        "## Hair and Makeup Choices",
        "Your hair and makeup must harmonize with the gentle, dusty nature of your personal coloring.",
        "Let us explore how a light summer hair color compares to soft summer styling choices.",
        "### Hair Styling for Soft Summers",
        "While a light summer hair color often features bright, sun-kissed blonde highlights, soft summer hair is more neutral.",
        "Mushroom brown, cool taupe, and soft ash blonde look exceptionally chic and natural.",
        "Avoid golden blonde or jet black hair dyes that fight your natural cool undertone.",
        "### Makeup Secrets",
        "Choose cool-toned makeup products like mauve lipsticks, dusty rose blushes, and taupe eyeshadows.",
        "Skip heavy black eyeliner and choose a soft charcoal or slate grey pencil instead.",
        "## Real World Outfit Formulas",
        "Dressing for your palette is simple when you rely on foolproof outfit combinations.",
        "Here is how to style your wardrobe for different daily occasions.",
        "### Daytime Casual",
        "Pair a dusty teal knit sweater with medium slate grey denim jeans for an easy weekend look.",
        "Add taupe leather flats and a soft silver necklace to finish the outfit.",
        "### Corporate Office Wear",
        "Wear a soft navy blazer over a muted plum silk blouse and tailored grey trousers.",
        "This combination looks professional, sophisticated, and entirely harmonious.",
        "### Evening Occasions",
        "Slip into a floor-length dress in deep dusty rose or rich cocoa silk for dinner events.",
        "Keep your jewelry delicate and silver to match the cool harmony of your palette."
      ],
      "pullQuote": {
        "text": "The soft summer color palette is defined by smoky, muted cool tones that bring out a natural, effortless glow in your everyday style.",
        "attribution": "Aurelia Vance-Sterling"
      },
      "secondaryImage": {
        "url": "https://plus.unsplash.com/premium_photo-1758530085195-4e69700ea2ae?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
        "caption": "Fabric swatches and cool muted color palette for soft summer curation",
        "alt": "Muted fabric swatches and soft summer color palette"
      },
      "closingParagraphs": [
        "Embracing your personal color palette saves time, money, and closet frustration.",
        "By wearing colors that harmonize with your skin, hair, and eyes, you will look naturally polished every single day."
      ],
      "conclusion": "Mastering the soft summer color palette allows you to curate a cohesive, beautiful wardrobe filled with dusty blues, soft navies, and muted rose tones that celebrate your unique beauty.",
      "faqs": [
        {
          "question": "Can soft summers wear black?",
          "answer": "Stark black is usually too harsh for the soft summer palette, but you can substitute it with soft navy or dark slate grey."
        },
        {
          "question": "Is silver or gold better for soft summer?",
          "answer": "Soft silver, pewter, and white gold look much more harmonious on cool soft summers than bright yellow gold."
        },
        {
          "question": "How do I know if I am a soft summer or soft autumn?",
          "answer": "Soft summers have cool undertones and look best in blue-based dusty shades, while soft autumns have warm undertones and prefer golden-olive muted tones."
        },
        {
          "question": "Can I dye my hair if I am a soft summer?",
          "answer": "Yes, cooler ash tones like mushroom brown, soft taupe, and cool ash blonde complement your natural coloring best."
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
