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
    "title": "Architectural Anatomy Of Modern Dress Silhouettes",
    "subtitle": "An exhaustive sartorial study exploring structural geometry, luxury fabric physics, and high-fashion styling principles for every couture silhouette.",
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
    "coverImageAlt": "Elegant woman in a chic dress silhouette walking in an architectural setting",
    "content": {
      "dropCapText": "Garment engineering requires an intimate understanding of how textiles interact with gravity and skeletal structure. From voluminous ball gowns to the sleekest hemline cut, every silhouette tells a story of craftsmanship. Our atelier examines the physics of drape, bias cutting, and pattern drafting that define iconic dress categories.",
      "bodyParagraphs": [
        "## The Vertical Line And Structural Framing",
        "### Straight And Columnar Geometries",
        "Column silhouettes rely on unbroken vertical lines to elongate the wearer's physical frame. Tailors use precision darting and vertical seams to sculpt the fabric closely against the torso. This design approach minimizes excess material while maintaining ease of movement through subtle side splits.",
        "### Bias Cut Fluidity",
        "Cutting woven fabrics on a forty-five-degree grain transforms standard textiles into elastic, form-skimming sculptures. Silk charmeuse and crepe de chine become fluid instruments that hug the contours of the body without restrictive boning. The resulting drape accentuates natural movement while offering exceptional comfort during prolonged wear.",
        "## The Micro Hemline Revolution",
        "### Tailoring The Short Dress Dress",
        "Proportion manipulation reaches its zenith when analyzing the construction of a short dress dress within haute couture collections. perfects ateliers carefully calibrate the shoulder width and torso length to balance the abbreviated skirt proportion. Internal Petersham ribbon waistbands are often integrated to anchor the garment securely to the wearer's core.",
        "### Styling Mini Dresses For Women",
        "Designing mini dresses for women demands meticulous attention to hem weighting and undergarment integration. Heavy silk linings or structured tulle petticoats are frequently employed to prevent unwanted shifting during high-motion events. This engineering ensures the garment maintains its intended architectural crispness throughout the evening.",
        "### Warm Weather Considerations",
        "When temperatures rise, the seasonal demand for a summer mini dress introduces lightweight linen and open-weave cotton. Pattern makers reduce internal canvas layers to maximize breathability while retaining clean neckline finishes. The objective is to achieve effortless elegance without sacrificing structural integrity under intense sunlight.",
        "### Movement And Airflow",
        "Crafting a flowy mini dress involves utilizing lightweight chiffon or georgette to create dynamic kinetic energy. The absence of stiff interfacings allows the skirt panels to catch the wind and billow naturally. Designers balance this volume with fitted bodices to maintain a sharp contrast between structure and ease.",
        "### Warm Climate Tailoring",
        "A mini dress for women summer iteration requires specialized moisture-wicking linings paired with ventilated exterior textiles. Tailors utilize flat-felled seams and meticulous edge stitching to eliminate internal friction against sun-kissed skin. Selecting high-twist cotton yarns prevents premature wrinkling during extended outdoor excursions.",
        "### Sequence And Repetition",
        "Exploring dress mini dresses within contemporary collections reveals a strong focus on minimalist hardware and clean closures. Hidden zippers and precision hook-and-eye fastenings preserve the unbroken visual flow of the textile surface. This restraint allows striking prints or heavily textured novelty fabrics to command total visual attention.",
        "### Neutral Elegance",
        "The understated luxury of a cream mini dress relies entirely on immaculate pressing and flawless grain alignment. Because pale ivory and ecru tones expose every minor stitching imperfection, ateliers demand absolute perfection from their machine operators. Selecting heavyweight double-face wool or matte crepe ensures opacity and a luxurious hand-feel.",
        "### Evening Allure",
        "Creating a mini sexiest dress involves strategic cutouts, sheer illusion tulle panels, and daring plunging necklines. Pattern engineers balance these provocative elements with secure internal corsetry to guarantee total wearer confidence. The garment becomes a masterclass in tension between exposure and architectural containment.",
        "### Everyday Versatility",
        "The standard mini dress functions as a foundational canvas for experimental layering and seasonal accessory pairings. Designers utilize seasonless fabrics like structured wool gabardine or mid-weight denim to bridge the gap between casual and formal spheres. Expert topstitching reinforces high-stress areas like pocket entries and waist seams for lasting durability."
      ],
      "pullQuote": {
        "text": "True couture tailoring is the invisible architecture that transforms raw fabric into an extension of the human silhouette.",
        "attribution": "Julian Thorne-Dumont"
      },
      "secondaryImage": {
        "url": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
        "caption": "Lightweight summer dress showcasing relaxed, flowy movement and tailoring",
        "alt": "Model wearing a stylish cream dress on a sunny terrace"
      },
      "closingParagraphs": [
        "Understanding the mechanics behind various garment cuts empowers individuals to curate a wardrobe rooted in genuine craftsmanship. Recognizing the difference between bias drape and structured canvas construction shifts the shopping experience toward long-term investment pieces. Quality tailoring ensures that each silhouette retains its intended shape and emotional impact over decades of wear.",
        "Investing in timeless sartorial structures requires evaluating both the exterior fabric and the hidden internal engineering. Examining seam finishes, lining quality, and grain alignment reveals the true pedigree of any luxury garment. By prioritizing these structural fundamentals, style enthusiasts secure pieces that honor both tradition and personal expression."
      ],
      "conclusion": "Mastering the nuances of dress silhouettes transforms personal style into an intentional exercise in architectural appreciation. True elegance emerges when superior textile physics meets uncompromising garment construction.",
      "faqs": [
        {
          "question": "What defines a bias-cut dress silhouette?",
          "answer": "A bias-cut dress is patterned on the diagonal grain of the fabric, allowing the textile to stretch naturally and drape fluidly over body contours without stiff internal structuring."
        },
        {
          "question": "How do ateliers prevent micro hemlines from riding up?",
          "answer": "Tailors integrate internal Petersham waistbands, weighted hem linings, and precise dart placements to anchor short hemlines securely against the wearer's natural waist and hips."
        },
        {
          "question": "Which fabrics work best for warm-weather structured garments?",
          "answer": "High-twist cottons, lightweight linen blends, and open-weave wools provide optimal breathability while maintaining enough stiffness to hold architectural shapes in hot climates."
        },
        {
          "question": "Why is internal corsetry important in modern evening wear?",
          "answer": "Internal corsetry redistributes garment weight away from the shoulders and provides essential structural support for daring necklines, backless designs, and heavily embellished fabrics."
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
    "likes": 428,
    "bookmarksCount": 134
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
        "Curating outfits within this chromatic range involves balancing low-contrast values across different separates. Pairing dusty periwinkle with soft cocoa creates an understated elegance suited for professional environments. Maintaining this tonal equilibrium ensures the entire ensemble respects the biological harmony of the wearer.",
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
