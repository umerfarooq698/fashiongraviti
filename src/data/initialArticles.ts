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
    "title": "A Complete Guide to Understanding the Various Types Of Dresses",
    "subtitle": "Discover the most flattering silhouettes, timeless designs, and seasonal favorites to build a versatile wardrobe for every single occasion you attend.",
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
    "readTime": "9 MIN READ",
    "coverImage": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
    "coverImageAlt": "Elegant woman in a chic dress silhouette walking in an outdoor setting",
    "content": {
      "dropCapText": "Building a functional wardrobe requires an understanding of the diverse types of dresses available in modern fashion. From structured silhouettes to breezy casual styles, each design serves a distinct purpose and flatters specific body proportions. Knowing how to differentiate these cuts helps you select appropriate attire for formal events, casual outings, and professional environments.",
      "bodyParagraphs": [
        "## Exploring Classic Silhouettes",
        "### The Timeless A-Line Dress",
        "The A-line silhouette features a fitted bodice that gradually flares out toward the hemline. This design creates a balanced triangle shape that suits almost every body type. You can wear this style to casual daytime gatherings or dress it up for evening parties.",
        "### The Fitted Sheath Dress",
        "Sheath dresses are tailored to hug the curves of the body closely without being overly tight. They typically feature a straight cut that ends right at the knee or slightly above. This professional style remains a staple for office environments and formal corporate events.",
        "## Embracing Casual and Short Styles",
        "### The Appeal of Short Dresses",
        "A short dress dress offers incredible versatility and freedom of movement during warm weather. Many shoppers look specifically for mini dresses for women when refreshing their seasonal wardrobes. These garments transition easily from daytime shopping trips to casual evening dinners.",
        "### Warm Weather Favorites",
        "When temperatures rise, a summer mini dress becomes an essential item in your closet. Choosing a flowy mini dress ensures maximum breathability and comfort on hot days. Every woman needs a reliable mini dress for women summer option for outdoor festivals and beach trips.",
        "### Styling Mini Dresses",
        "Fashion enthusiasts often collect various dress mini dresses to mix and match with different accessories. A neutral cream mini dress pairs wonderfully with denim jackets and leather sandals. For evening events, a mini sexiest dress combines bold necklines with shorter hemlines to make a statement.",
        "* Pair your favorite mini dress with chunky sneakers for a casual daytime aesthetic.",
        "* Add strappy heels and delicate jewelry to transform the look for a night out.",
        "* Layer a lightweight cardigan over the top when evening temperatures begin to drop.",
        "## Long and Flowy Options",
        "### The Graceful Maxi Dress",
        "Maxi dresses sweep down to the ankles, creating an effortless and elegant appearance. They are typically crafted from lightweight fabrics that sway gracefully with every step you take. These garments work exceptionally well for summer weddings, vacations, and relaxed weekend brunches.",
        "### The Effortless Wrap Dress",
        "Wrap dresses feature a front closure formed by wrapping one side across the other and tying the fabric at the waist. This adjustable design allows for a customized fit that accommodates changing body shapes comfortably. The V-neckline created by the wrap adds a touch of classic elegance.",
        "## Modern Everyday Cuts",
        "### The Versatile Shirt Dress",
        "Shirt dresses borrow traditional elements from button-down collared shirts and extend them into a full garment. They often include a matching fabric belt to define the waist while maintaining a relaxed structure. You can wear these pieces with loafers for work or canvas sneakers for errands.",
        "### The Sleek Slip Dress",
        "Slip dresses draw inspiration from vintage undergarments, featuring delicate spaghetti straps and smooth satin fabrics. They drape fluidly over the body to create a minimalist yet striking aesthetic. When choosing muted shades, styling these dresses alongside the tones of the [soft summer color palette](/soft-summer-color-palette) delivers an understated, sophisticated evening look."
      ],
      "pullQuote": {
        "text": "Selecting the right dress silhouette comes down to understanding your personal comfort, body proportions, and the specific demands of the event you are attending.",
        "attribution": "Julian Thorne-Dumont"
      },
      "secondaryImage": {
        "url": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
        "caption": "Lightweight summer dress showcasing relaxed, flowy movement and styling",
        "alt": "Model wearing a stylish cream dress on a sunny terrace"
      },
      "closingParagraphs": [
        "Expanding your clothing collection with diverse silhouettes ensures you are always prepared for changing seasons and social invitations. Taking time to care for delicate fabrics properly will preserve the lifespan and appearance of your favorite garments. Simple adjustments like proper laundering and correct storage prevent premature wear and fading.",
        "Experimenting with different cuts allows you to discover which shapes boost your confidence the most. Fashion should always be an enjoyable form of self-expression rather than a rigid set of rules. Embrace the variety available in modern retail and curate a closet that truly represents your lifestyle."
      ],
      "conclusion": "Mastering the wide variety of dress styles ensures you always look put together and feel comfortable. Invest in quality pieces that mix and match easily to simplify your daily routine.",
      "faqs": [
        {
          "question": "What body type looks best in an A-line dress?",
          "answer": "A-line dresses universally flatter almost every body shape because they define the waist while skimming over the hips and thighs."
        },
        {
          "question": "How can I style a mini dress for cooler weather?",
          "answer": "You can layer your mini dress over opaque tights and add ankle boots along with a tailored wool coat for warmth."
        },
        {
          "question": "Are slip dresses appropriate for formal events?",
          "answer": "Yes, satin slip dresses paired with elegant heels and sophisticated jewelry make stunning attire for evening receptions and formal parties."
        },
        {
          "question": "What shoes pair best with a maxi dress?",
          "answer": "Flat sandals work wonderfully for casual daytime wear, while block heels or wedges elevate the maxi dress for formal occasions."
        }
      ]
    },
    "tags": [
      "Types Of Dresses",
      "Dress Silhouettes",
      "Mini Dress",
      "Summer Fashion",
      "Wardrobe Styling"
    ],
    "mood": "Quiet Luxury",
    "likes": 452,
    "bookmarksCount": 147
  },
  {
    "id": "article-soft-summer-color-palette-1791199292794",
    "title": "Decoding The Nuances Of Muted Summer Hues",
    "subtitle": "An advanced textile and pigment analysis examining the cooling elegance, desaturated undertones, and sophisticated textile choices of the soft summer color palette.",
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
      "dropCapText": "Entering the world of seasonal color analysis requires a discerning eye for subtle pigment variations and temperature shifts. The soft summer color palette bridges cool undertones with muted saturation, creating a harmonious blend for specific biological profiles. Professional stylists utilize these muted tones to enhance natural skin clarity without overwhelming delicate features.",
      "bodyParagraphs": [
        "## Draping Methodology And Lighting Realities",
        "### 5000K North Daylight Testing",
        "Accurate seasonal evaluation demands controlled illumination to prevent artificial color distortion. Specialists rely exclusively on true north-facing window light calibrated precisely to five thousand Kelvin. This specific spectrum removes warm yellow interference, revealing how fabrics interact with naked human skin.",
        "### Neutral Grey Backdrop Influence",
        "Background reflectance plays a massive role in how observers perceive facial undertones during a consultation. Using a neutral middle-grey cape and matching wall surface prevents optical illusion side effects. Without this calibration, overly warm or cool surroundings compromise the integrity of the soft summer color palette assessment.",
        "## Identifying The Subdued Pigment Profile",
        "### Surface Ashiness Versus Golden Undertones",
        "Biological evaluation of muted individuals reveals a distinct lack of overt warmth in skin, eyes, and hair. Instead of golden or bronze highlights, the natural pigmentation displays a soft, ash-based character. Recognizing this quiet subtlety separates the soft summer color palette from adjacent autumn categories.",
        "### The Soft Iris Ring Structure",
        "Eye patterns within this classification often exhibit diffused, smoky boundaries rather than high-contrast starbursts. Hazel, grey-blue, and soft green irises frequently feature a muted charcoal limbic ring. These gentle ocular characteristics harmonize seamlessly with the desaturated nature of the true summer colour palette.",
        "## Distinguishing The Summer Continuum",
        "### Transition Boundaries With Soft Autumn",
        "Color theory dictates that cool and warm seasons remain separate, yet neighboring categories share a muted quality. The soft summer color palette bridges the gap by retaining cool blue undertones while adopting a lower level of saturation. This borderland status allows individuals to wear muted rose and sage effectively.",
        "### Distinguishing True And Light Summer Variants",
        "Comparing adjacent seasonal groups prevents common styling missteps during wardrobe curation. While the light summer color analysis prioritizes high-value, icy clarity, the soft summer variant demands lowered chroma above all else. Similarly, the light summer color palette leans toward brighter pastels, whereas the light summer palette remains distinct from dusty rose hues.",
        "## Fabric Selection And Surface Light Absorption",
        "### Brushed Wools Versus Glossy Synthetics",
        "Textile choice alters the visual temperature and perceived saturation of any garment in real-world lighting. Matte materials like brushed wool, raw silk, and sueded cotton absorb directional light, enhancing muted tones. Conversely, shiny polyester finishes reflect harsh light, washing out delicate biological coloring.",
        "### Daily Dressing Combinations",
        "Curating outfits within this chromatic range involves balancing low-contrast values across different separates. Selecting foundational silhouettes like A-line or wrap cuts from classic [types of dresses](/types-of-dresses) in dusty periwinkle or soft cocoa creates an understated elegance suited for professional environments. Maintaining this tonal equilibrium ensures the entire ensemble respects the biological harmony of the wearer.",
        "## Hair Pigmentation And Salon Formulations",
        "### Eliminating Unwanted Brassiness",
        "Maintaining harmonious locks requires neutralizing accidental warmth introduced by sun exposure or chemical processing. Professional colorists utilize violet and blue correctors to preserve the natural ash-brown or soft taupe baseline. Protecting this cool dimension ensures the light summer hair color or softer variant remains completely balanced.",
        "### Lowlight Techniques For Ash Tones",
        "Flat, single-process hair color often drains vitality from individuals who require dimensional depth. Stylists incorporate delicate, low-contrast lowlights using cool beige and smoky mushroom formulations. This strategic placement adds movement without disrupting the gentle overall aesthetic required by the seasonal system."
      ],
      "pullQuote": {
        "text": "True refinement in seasonal styling lies not in commanding attention through loud hues, but in achieving complete biological harmony with quiet, desaturated tones.",
        "attribution": "Aurelia Vance-Sterling"
      },
      "secondaryImage": {
        "url": "https://images.unsplash.com/photo-1776969824728-d1023af75226?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
        "caption": "Textured muted swatches reflecting soft summer color harmony",
        "alt": "Textured fabric folds showcasing dusty cool soft summer tones"
      },
      "closingParagraphs": [
        "Mastering the intricacies of seasonal color theory transforms both personal shopping habits and professional styling outcomes. By honoring the inherent need for low chroma and cool undertones, individuals achieve a naturally radiant appearance.",
        "Investing time in precise pigment evaluation prevents costly wardrobe mistakes and streamlines daily dressing routines with absolute confidence."
      ],
      "conclusion": "Embracing the soft summer color palette allows individuals to curate a sophisticated, timeless wardrobe grounded in muted elegance and natural harmony.",
      "faqs": [
        {
          "question": "Can soft summers wear black and stark white?",
          "answer": "Pure black and bright white tend to overwhelm muted features, casting shadows and washing out the face. Charcoal grey and soft off-white serve as much more flattering alternatives."
        },
        {
          "question": "How do I know if I am a soft summer or soft autumn?",
          "answer": "Professional drapes help determine whether cool-toned dusty pinks or warm-toned terracotta shades brighten your complexion. Soft summers look vibrant in blue-based rose, whereas soft autumns require golden warmth."
        },
        {
          "question": "What makeup colors work best for this palette?",
          "answer": "Opt for neutral-cool taupes, dusty mauves, muted berry lipsticks, and soft rose blushes. Avoid heavy bronzers with orange undertones and harsh black eyeliner."
        },
        {
          "question": "Are metallics allowed in this seasonal category?",
          "answer": "Brushed pewter, soft rose gold, and antiqued silver complement the muted aesthetic much better than highly reflective, polished yellow gold."
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
    "likes": 412,
    "bookmarksCount": 118
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
