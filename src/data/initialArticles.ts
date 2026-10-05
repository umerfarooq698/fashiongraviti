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
    "title": "Anatomy Of Haute Couture Dresses And Silhouettes",
    "subtitle": "Discover the engineering behind timeless silhouettes, tailoring mechanics, and architectural dress forms for the discerning wardrobe collector.",
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
      "dropCapText": "Understanding the architecture of personal style begins with understanding how fabric interacts with the human form. Every meticulously constructed seam, dart, and bias cut dictates how a garment moves through space. From structured evening gowns to the playful proportions of a short dress dress, tailoring defines modern luxury.",
      "bodyParagraphs": [
        "## Waist Defined Architectural Silhouettes",
        "### The Engineering Of A-Line Geometry",
        "The A-line silhouette expands gradually from the bodice down to the hem, creating a balanced triangular footprint. Tailors utilize strategic vertical seams and princess darts to hug the torso before flaring gracefully at the hip. This design flatters nearly every body proportion by drawing the eye along clean, uninterrupted diagonal lines.",
        "### Wrap Construction And Kinetic Drape",
        "A wrap design relies on overlapping fabric panels secured at the natural waist with an adjustable tie closure. This construction allows for a customized fit that accommodates daily fluctuations in body shape with effortless elegance. The resulting diagonal crossover lines create a natural V-neckline that lengthens the neck and torso simultaneously.",
        "## Straight And Architectural Linear Cuts",
        "### Precision Tailoring Of The Sheath",
        "The sheath dress hugs the contours of the body closely, utilizing vertical side-front and side-back darts to achieve its streamlined shape. Often constructed from medium-weight crepe or structured wool blends, it requires exact measurements to prevent bunching around the torso. A slit at the back hem ensures the wearer can maintain a natural stride despite the fitted skirt.",
        "### Fluidity In Bias Cut Slip Dresses",
        "Cutting woven fabric on the forty-five-degree bias allows silk charmeuse to drape fluidly around the body like liquid metal. This specialized cutting technique harnesses the natural stretch of the threads to eliminate the need for stiff structural underpinnings. The garment clings softly to curves while maintaining a weightless feel against the skin.",
        "## The Hemline Spectrum And Short Silhouettes",
        "### Playful Proportions In Mini Dresses For Women",
        "Shorter hemlines demand meticulous attention to leg line proportions and structural integrity at the hip. When designing a summer mini dress, lightweight cotton poplin or linen fabrics provide breathability during warmer months. The hem typically sits well above the knee, creating an elongated silhouette for the legs.",
        "### Effortless Movement In A Flowy Mini Dress",
        "A flowy mini dress incorporates gathered tiers or circular cuts that introduce kinetic energy with every step. These silhouettes often feature delicate shoulder straps and relaxed bodices that prioritize comfort without sacrificing style. Choosing airy chiffon or washed silk ensures the garment billows softly in warm breezes.",
        "### Warm Weather Appeal Of A Mini Dress For Women Summer",
        "Constructing a functional mini dress for women summer requires breathable textiles like organic linen or lightweight cambric cotton. These natural fibers allow maximum airflow while maintaining a crisp exterior finish throughout humid afternoons. Internal cotton linings prevent transparency issues while keeping the overall garment featherlight.",
        "### Modular Styling With Dress Mini Dresses",
        "Modern wardrobes frequently rely on versatile dress mini dresses that transition effortlessly from casual daytime excursions to evening gatherings. Layering a structured blazer over the shoulders instantly enhances the casual aesthetic into a sophisticated outfit. Tailors achieve this versatility by using matte crepe fabrics that resist creasing during long days.",
        "### Sophisticated Neutrality In A Cream Mini Dress",
        "A cream mini dress offers a refined alternative to stark white, bringing warmth and understated luxury to warm-weather collections. The soft ivory hue complements a wide range of skin tones while providing a blank canvas for statement accessories. Pairing this garment with metallic leather sandals completes a polished seasonal ensemble.",
        "### The Allure Of A Mini Sexiest Dress",
        "Creating a mini sexiest dress involves balancing daring hemlines with strategic neckline coverage or structured long sleeves. Corseted internal bodices provide lift and waist definition, ensuring the garment stays securely in place. Designers often incorporate open backs or subtle thigh slits to enhance visual intrigue.",
        "### Everyday Versatility Of The Classic Mini Dress",
        "A well-tailored mini dress serves as a foundational piece for transitional capsule wardrobes across multiple seasons. By pairing the garment with opaque tights and tailored wool coats, wearers extend its utility into cooler autumn months. The key lies in selecting mid-weight wool crepes that bridge the gap between summer cottons and winter heavyweights.",
        "## Formal And Dramatic Length Silhouettes",
        "### Majestic Proportions Of The Floor Length Gown",
        "Formal evening gowns require internal corsetry and crinoline layers to support heavy fabrics like duchess satin or velvet. Tailors anchor the entire structure at the waistline, distributing heavy skirts evenly across the hips for comfortable wear. Sweep or chapel trains add dramatic movement as the wearer walks down grand corridors.",
        "### Sculptural Elegance In Column Gowns",
        "The column silhouette drops straight from the shoulders to the floor, creating an unbroken vertical line that commands attention. Because this cut conceals little, internal shaping garments and precise princess seams are essential for a flawless finish. High necklines combined with back slits offer a masterclass in minimalist evening dressing."
      ],
      "pullQuote": {
        "text": "True luxury in dressmaking lies in the invisible architecture beneath the fabric, where every dart serves a purpose and every seam honors the human form.",
        "attribution": "Julian Thorne-Dumont"
      },
      "secondaryImage": {
        "url": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&crop=top&w=1600&h=900&q=85",
        "caption": "Lightweight summer dress showcasing relaxed, flowy movement and tailoring",
        "alt": "Model wearing a stylish cream dress on a sunny terrace"
      },
      "closingParagraphs": [
        "Building a comprehensive wardrobe involves balancing architectural structure with fluid movement across various hemlines. Recognizing the difference between a bias-cut silk slip and a structured wool sheath allows you to select pieces that flatter your unique proportions. Investing in quality construction ensures these garments retain their shape and elegance for decades.",
        "As seasonal trends evolve, foundational tailoring principles remain the hallmark of exceptional sartorial craftsmanship. Whether you prefer the dramatic drape of a formal evening gown or the spirited proportions of a daytime mini dress, attention to detail dictates true style. Curate your collection with an emphasis on fabric integrity, precise seams, and thoughtful silhouettes."
      ],
      "conclusion": "Mastering the vast spectrum of dress silhouettes empowers you to curate a versatile, impeccably tailored wardrobe for any occasion. Prioritize quality construction and fabric mechanics to ensure timeless elegance in your personal style.",
      "faqs": [
        {
          "question": "What is the difference between an A-line and a sheath dress?",
          "answer": "An A-line dress flares gently outward from the waist to the hem in a triangular shape, while a sheath dress fits closely to the body contours from the bust down to the hem with a straight profile."
        },
        {
          "question": "How do bias-cut dresses differ from standard woven dresses?",
          "answer": "Bias-cut dresses are cut at a forty-five-degree angle across the grain of the fabric, allowing the material to stretch naturally and drape fluidly around body curves without stiff structural linings."
        },
        {
          "question": "What fabrics work best for a warm weather mini dress?",
          "answer": "Lightweight breathable textiles such as linen, cotton poplin, cambric, and silk chiffon are ideal for warm weather because they promote airflow while maintaining a crisp, polished appearance."
        },
        {
          "question": "How can I style a short dress for formal evening events?",
          "answer": "You can elevate a short dress for formal occasions by pairing it with structured outerwear like a tailored tuxedo blazer, statement architectural jewelry, and metallic evening heels."
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
