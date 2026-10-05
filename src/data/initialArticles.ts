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
    "title": "Your Guide To Styling The Soft Summer Color Palette",
    "subtitle": "Discover how the soft summer color palette transforms your personal style with muted tones, cool undertones, and harmonious wardrobe choices",
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
      "dropCapText": "Unlocking the secrets of seasonal color analysis begins with understanding how natural undertones harmonize with specific shades.",
      "bodyParagraphs": [
        "## Understanding Seasonal Color Analysis Foundations",
        "Seasonal color analysis divides human appearances into four primary seasons based on undertone, value, and chroma. Cool undertones with low contrast and a muted overall appearance typically land within the summer category. Within this broader group, individual variations emerge to create distinct sub-categories. Recognizing your specific placement prevents you from wearing shades that wash out your complexion.",
        "People often confuse the soft summer category with other summer variants like the true summer colour palette or the light summer color palette. While true summer leans heavily into pure coolness and medium depth, soft summer shares a border with soft autumn. This means your best colors possess a gentle, muted quality with a slightly dusty or smoky finish. Pure stark white and neon shades will overwhelm your natural features completely.",
        "## Exploring The Soft Summer Spectrum",
        "The soft summer palette is defined by a cool temperature and a muted chroma, meaning colors contain a hint of grey. This desaturated quality mimics the hazy, peaceful atmosphere of a late summer afternoon. Shades appear dusty, soft, and understated rather than bright or saturated. Embracing these muted tones allows your natural eye color and skin tone to take center stage.",
        "When comparing palettes, many beauty enthusiasts look toward a light summer color analysis to determine their ideal intensity. The light summer palette features slightly brighter, airier shades with a higher value. In contrast, soft summer sits deeper and more subdued, accommodating individuals with slightly darker hair and eye combinations. Knowing this distinction stops you from wearing colors that feel too pastel or lightweight.",
        "## Building Your Core Wardrobe Neutrals",
        "A successful wardrobe starts with versatile neutrals that serve as the foundation for daily outfits. Soft summers shine in cool greys, soft charcoal, and muted navy blue rather than harsh jet black. Cocoa browns with cool undertones and soft taupe also work wonderfully as alternative bottom pieces. These foundational shades mix effortlessly with accent colors to create balanced, cohesive ensembles.",
        "White shirts form a staple in many closets, but bright optical white looks jarring against a soft summer complexion. Instead, substitute stark white with soft cream, oyster, or pearl grey for your blouses and tees. Denim washes should lean toward dusty, medium indigos without heavy yellow fading or extreme distressing. These thoughtful neutral choices instantly harmonize with your face and body.",
        "## Injecting Accent Colors And Statement Pieces",
        "Once your neutrals are secured, you can introduce delightful accent colors to bring personality into your daily outfits. Dusty rose, mauve, and soft raspberry add a romantic touch without overwhelming your gentle contrast. Cool mint greens, sage, and seafoam provide refreshing earthy options for tops and dresses. Periwinkle and slate blue complement blue or green eyes remarkably well.",
        "Avoid warm, golden yellows and fiery oranges, as these hues clash aggressively with your cool, muted skin undertones. Instead, opt for soft lemon or muted antique gold if you desire a sunny hue in your collection. Plum and burgundy serve as excellent rich tones for autumn and winter layering pieces. Every color you select should maintain that signature dusty or smoky characteristic.",
        "## Hair Color And Makeup Selections",
        "Choosing the right hair dye requires respecting your natural level of contrast and cool undertone requirements. A common question involves finding the ideal light summer hair color for those transitioning from box dyes. Ash blonde, soft mushroom brown, and cool sandy highlights mimic the natural multidimensional tones of this season. Avoid golden blonde, copper, or warm chestnut dyes that introduce unwanted brassiness.",
        "Makeup application should follow the same muted, cool philosophy to maintain an effortless everyday look. Replace harsh black eyeliner with soft charcoal, smoky plum, or deep slate grey for subtle definition. Lipsticks in dusty rose, mauve, and berry stains enhance your natural lip color gracefully. Blush should mimic a natural cool flush rather than a bright orange or coral warmth.",
        "## Fabric Textures And Real World Outfit Formulas",
        "Texture plays a massive role in how colors present themselves on your body and reflect ambient light. Matte fabrics like washed silk, soft linen, fine cotton, and brushed wool absorb light evenly. This matte finish complements the muted nature of the soft summer color palette perfectly. Avoid extremely shiny satins or stiff polyester that add artificial brightness to your look.",
        "Creating reliable outfit formulas simplifies your morning routine while keeping your appearance polished. Pair a dusty mauve knit sweater with soft charcoal trousers and pewter accessories for a sophisticated office look. For casual weekends, try a slate blue cotton tee with medium wash dusty denim and white canvas sneakers. Layering a cool taupe trench coat over these combinations ties the entire aesthetic together."
      ],
      "pullQuote": {
        "text": "The secret to styling a soft summer wardrobe lies in embracing dusty, cool tones that mirror the gentle haze of a late August afternoon.",
        "attribution": "Aurelia Vance-Sterling"
      },
      "secondaryImage": {
        "url": "https://plus.unsplash.com/premium_photo-1758530085195-4e69700ea2ae?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
        "caption": "Fabric swatches and cool muted color palette for soft summer curation",
        "alt": "Muted fabric swatches and soft summer color palette"
      },
      "closingParagraphs": [
        "Transitioning your wardrobe to align with your seasonal palette is a gradual and rewarding journey. Take time to audit your current closet, donating or repurposing items that drain your natural vitality. Investing in versatile foundational pieces ensures you always have something appropriate to wear for any occasion.",
        "Remember that personal style should always remain fun and expressive rather than bound by rigid rules. Use these color guidelines as a helpful compass to guide your shopping habits and beauty choices. When you wear colors that truly harmonize with your complexion, your confidence naturally radiates outward."
      ],
      "conclusion": "Mastering the soft summer color palette empowers you to curate a cohesive, flattering wardrobe that highlights your natural beauty. By choosing dusty, cool, and muted tones over harsh brights, you create an effortless harmony that turns heads for all the right reasons.",
      "faqs": [
        {
          "question": "Can soft summers wear black?",
          "answer": "Jet black is generally too harsh for soft summers and can cast shadows on the face. Instead, use soft charcoal, deep navy, or cool dark brown as your dark neutral alternatives."
        },
        {
          "question": "How do I know if I am a soft summer or soft autumn?",
          "answer": "Soft summers have cool undertones and look best in silver jewelry with grey-based makeup. Soft autumns possess warm undertones and lean toward golden hues, bronze jewelry, and terracotta shades."
        },
        {
          "question": "Are jewel tones suitable for soft summer?",
          "answer": "Standard bright jewel tones are typically too saturated for this muted season. You can wear toned-down versions like dusty teal, muted plum, and raspberry instead of electric blues and bright purples."
        },
        {
          "question": "Does hair color change my seasonal palette?",
          "answer": "Your seasonal palette is fundamentally determined by your skin undertone, eye color, and natural hair color combined. Drastically dyeing your hair a contrasting warm or bright color can create friction, but staying within your natural tonal range preserves harmony."
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
