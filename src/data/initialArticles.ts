import type { FashionArticle, FashionCategory, LookbookItem } from '../types/fashion';

export const FASHION_CATEGORIES: FashionCategory[] = [
  {
    id: 'all',
    name: 'Home',
    tagline: 'BREAKING EDITORIAL AND RUNWAY FEED',
    description: 'The complete stream of fashion news, style guides, celebrity spotlights and brand exclusives.',
    image: 'https://images.unsplash.com/photo-1603122630570-7fd434d470d0?auto=format&fit=crop&w=1200&q=85',
    accent: '#8f121d',
    count: 5,
  },
  {
    id: 'fashion-news',
    name: 'Fashion News',
    tagline: 'BREAKING INDUSTRY AND RUNWAY HEADLINES',
    description: 'Global fashion week bulletins, creative director announcements and major industry movements.',
    image: 'https://images.unsplash.com/photo-1733322992706-1210ca79f4df?auto=format&fit=crop&w=1200&q=85',
    accent: '#c59d54',
    count: 0,
  },
  {
    id: 'fashion-trends',
    name: 'Fashion Trends',
    tagline: 'SEASONAL SILHOUETTES AND FORECASTS',
    description: 'The biggest runway-to-street trends, color palettes and must-have wardrobe shifts.',
    image: 'https://images.unsplash.com/photo-1717944105945-669b3dd77bfd?auto=format&fit=crop&w=1200&q=85',
    accent: '#8f121d',
    count: 2,
  },
  {
    id: 'celebrity',
    name: 'Celebrity',
    tagline: 'RED CARPET, MET GALA AND ICONS',
    description: 'Celebrity street style, film festival red carpets, cover star profiles and stylist breakdowns.',
    image: 'https://images.unsplash.com/photo-1742123316636-299eb108d83c?auto=format&fit=crop&w=1200&q=85',
    accent: '#c59d54',
    count: 0,
  },
  {
    id: 'designers-brands',
    name: 'Designers And Brands',
    tagline: 'HERITAGE ATELIERS AND ICONIC HOUSES',
    description: 'Behind-the-scenes monographs, brand histories, haute couture ateliers and designer profiles.',
    image: 'https://images.unsplash.com/photo-1673201229733-69d19c5c4a87?auto=format&fit=crop&w=1200&q=85',
    accent: '#8f121d',
    count: 0,
  },
  {
    id: 'beauty',
    name: 'Beauty',
    tagline: 'BACKSTAGE GLAMOUR, SKIN AND SCENTS',
    description: 'Runway makeup secrets, signature fragrances, skincare science and hair trends.',
    image: 'https://images.unsplash.com/photo-1604073788733-f01b27fe34cd?auto=format&fit=crop&w=1200&q=85',
    accent: '#c59d54',
    count: 0,
  },
  {
    id: 'how-to-style',
    name: 'How to Style',
    tagline: 'EXPERT WARDROBE AND STYLING GUIDES',
    description: 'Practical luxury styling formulas, capsule wardrobes, layering techniques and fit advice.',
    image: 'https://images.unsplash.com/photo-1575225395866-965c8c77727f?auto=format&fit=crop&w=1200&q=85',
    accent: '#5d6b5c',
    count: 3,
  }
];

export const INITIAL_ARTICLES: FashionArticle[] = [
  {
    "id": "article-what-is-streetwear-1791980000000",
    "title": "What is Streetwear: Origins, Culture, Styling and Essential Guide",
    "subtitle": "From counterculture skate roots and Tokyo Ura-Harajuku to high fashion runways, explore the complete guide to streetwear history, silhouettes and styling.",
    "slug": "what-is-streetwear",
    "category": "fashion-trends",
    "categoryLabel": "Fashion Trends",
    "season": "AUTUMN / WINTER 2026",
    "issueNumber": "ISSUE NO. 23",
    "locationTag": "PARIS // EDITORIAL DESK",
    "featured": false,
    "author": {
      "name": "Julian Thorne-Dumont",
      "role": "Senior Sartorial and Tailoring Critic",
      "location": "Milan and London",
      "avatar": "/authors/julian-thorne-dumont.jpg",
      "instagram": "@julian_sartorial"
    },
    "publishedAt": "OCTOBER 15, 2026",
    "readTime": "11 MIN READ",
    "coverImage": "/images/what-is-streetwear-guide.jpg",
    "coverImageCaption": "Modern streetwear styling featuring high-waisted tan cargo jeans, a heavyweight hoodie, platform sneakers and utility accessories on a Parisian boulevard.",
    "coverImageAlt": "Chic woman wearing high-waisted tan cargo jeans and heavyweight hoodie in Paris",
    "metaDescription": "Explore what is streetwear fashion, subcultural origins, luxury drops and how to style cargo khaki trousers in our complete editorial guide.",
    "content": {
      "dropCapText": "Understanding what is streetwear begins by looking at how modern everyday style evolved from grassroots youth culture into the dominant force in global fashion. Rather than following rigid top-down runway rules, streetwear grew directly from skateboarders, musicians and creative urban communities who prioritized practical comfort, graphic t-shirts and personal expression.",
      "bodyParagraphs": [
        "## Decoding the Foundations: What is Streetwear and What Does It Mean?",
        "When readers explore what does streetwear mean or search for a clear streetwear def, they often find confusing descriptions. In plain terms, an accurate streetwear definition describes a global style built on casual luxury wardrobe pieces, functional comfort, subcultural identity and anti-establishment sartorial codes. If you want to define streetwear simply: it is a practical approach to dressing that turns everyday casual items into culturally significant wardrobe staples.",
        "At a practical level, what is streetwear clothing? It includes versatile, easy-to-wear pieces such as the classic heavyweight cotton hoodie, boxy-fit tees with relaxed drop-shoulder cuts, relaxed fit bottoms, modern oversized silhouettes and durable wide-leg denim. Yet the core streetwear meaning goes far beyond basic clothing. It represents an authentic counterculture movement where community connection and sneakerhead culture matter much more than traditional runway exclusivity.",
        "Today, whether you read a print magazine streetwear editorial, browse a digital streetwear mag, or track breaking streetwear news, the message is consistent. Everyday streetwear news today highlights how street dressing drives the democratization of luxury fashion, proving that modern streetwear culture is shaped by real people wearing real clothes on city streets.",
        "## The Four Historic Pillars: Tracing Streetwear Origins",
        "To understand streetwear origins, we can trace its development across four key eras and cultural movements:",
        "* **1. Southern California Skate and Surf Culture (1980s):** The movement started when surfboard builder Shawn Stussy began printing his signature logo onto surfboards and casual tees in Laguna Beach. This concrete skate aesthetic combined with durable workwear heritage, establishing durable graphic clothing as a functional uniform for action sports.",
        "* **2. New York Hip-Hop Fashion Movement (Late 1980s):** In Harlem, tailor Dapper Dan Harlem transformed urban style by reworking designer logos into custom, oversized track jackets and outerwear for hip-hop artists. This energy established the hip-hop fashion movement as an essential pillar of street style.",
        "* **3. Tokyo Ura-Harajuku Scene (1990s):** In the backstreets of Harajuku, innovators Hiroshi Fujiwara and NIGO BAPE developed underground boutique retail. They introduced limited-edition drops and distinct graphic camouflage, creating the foundation for artificial scarcity and today resale market hype.",
        "* **4. The Modern Luxury Fashion Crossover (2017 to Present):** The landmark Supreme Louis Vuitton 2017 partnership marked a turning point where high fashion fully embraced street culture. Today, ready-to-wear streetwear leads the contemporary runway narrative as haute couture meets streetwear and prestigious runway ateliers integrate street-inspired cuts into seasonal fashion weeks.",
        "## Anatomy of Utilitarian Bottoms: Tan Cargo Jeans and Khaki Trousers",
        "Utilitarian trousers are among the most practical streetwear wardrobe essentials for both men and women, forming the backbone of modern street and style coordination. Cargo pants originated with the British Battle Dress 1938 military surplus apparel, where tactical thigh pockets were added to carry equipment hands-free. Today, that functionality defines the modern utilitarian aesthetic and elevated casualwear.",
        "When building an everyday outfit, tan cargo jeans provide the perfect balance between durable denim structure and casual utility. Similarly, tailored cargo khaki trousers and relaxed khaki cargo jeans offer a versatile neutral base that pairs effortlessly with neutral tops and footwear. Quality pairs are made from sturdy ripstop cotton fabric or heavy cotton canvas construction, reinforced with durable double-knee stitching for long-lasting wear. With the ongoing Y2K fashion revival, low-rise baggy bottoms have also returned as a favorite in street casual fashion.",
        "## Street Women Style: Proportions and Street Style Fashion for Women",
        "Streetwear has evolved beyond its early skate roots into a dynamic space for feminine self-expression. Today, street women style, street women fashion and street style fashion for women lead the way in innovative everyday outfit building.",
        "Mastering how to style street style comes down to easy proportional styling rules that balance loose and fitted pieces. Here are four reliable streetwear styling formulas you can apply directly:",
        "* **The Tight-Top Oversized-Bottom Formula:** Combine high-waisted tan cargo jeans or wide-leg khaki cargo jeans with a fitted ribbed tank top or cropped tee. This tight-top oversized-bottom formula keeps your silhouette structured while allowing full freedom of movement.",
        "* **The Tailored Blazer Pairing:** Wear a structured, oversized blazer over a heavyweight hoodie and relaxed cargo khaki trousers. This tailored blazer pairing delivers effortless high-low fashion mixing that works for casual offices and weekend outings alike.",
        "* **The Fine Jewelry Accents:** Soften rugged cargo textures with intentional jewelry styling. Layering a classic [16 vs 18 inch necklace](/16-vs-18-inch-necklace) chain stack or adding minimalist cartilage pieces like [hidden helix jewelry](/hidden-helix-jewelry) provides an understated touch of polish.",
        "* **Feminine Silhouette Contrast:** Balance flowy, elegant silhouettes like silk midi [types of dresses](/types-of-dresses) by styling them with platform chunky sneakers and an oversized vintage utility jacket.",
        "## Streetwear Color Palettes and Material Architecture",
        "Modern streetwear styl emphasizes understated, versatile tones rather than bright, flashy neon logos. The most popular streetwear color palettes focus on calming earth tone neutrals and transitional seasonal layers that mix and match seamlessly. Essential core shades include sandstone and beige hues, rugged olive green cargo tones and washed vintage black denim.",
        "For individuals who curate their wardrobes using a cool, desaturated [soft summer color palette](/soft-summer-color-palette), these chalky, muted neutrals fit naturally into everyday styling without clashing with cool undertones.",
        "When evaluating fabric quality, authentic unisex utilitarian garments prioritize substantial natural fibers. High-grade collections combine gorpcore outdoor utility, weather-resistant outerwear and techwear Gore-Tex technical membranes to handle unpredictable weather. Complete your daily look with functional essentials: hands-free crossbody utility bags, comfortable bucket hats and beanies and dependable low-profile skate shoes.",
        "## Streetwear Garment Care: Preserving Shape and Print Longevity",
        "Quality streetwear pieces are built to last, but proper care keeps graphics crisp and fabrics structured over time. Follow these straightforward streetwear garment care practices:",
        "* **Cold Wash Hang Dry:** Always wash heavyweight hoodies and graphic tees inside out in cold water on a gentle cycle, then hang dry away from direct heat to prevent fabric shrinkage and graphic cracking.",
        "* **Steam Instead of Direct Ironing:** Avoid placing hot iron plates directly onto rubberized graphics or tactical nylon pockets; use an upright handheld steamer to relax wrinkles naturally.",
        "* **Spot Clean Heavy Canvas:** Preserve the natural wax or mineral finish on cargo trousers by spot cleaning with a damp microfiber cloth rather than submitting to harsh chemical dry cleaning.",
        "## The Future: Streetwear Authenticity vs Commercialization",
        "As the style continues to grow globally, the relationship between grassroots streetwear authenticity vs commercialization remains an important topic. While fast-fashion copies flood retail shelves, thoughtful shoppers look for independent labels and sustainable capsule collections that maintain honest community connections. Ultimately, what is streetwear fashion? It is a practical, comfortable way of dressing that puts personal individuality, real-world utility and cultural connection first."
      ],
      "secondaryImage": {
        "url": "/images/streetwear-cargo-styling.jpg",
        "caption": "Tactical tailoring in motion: relaxed khaki cargo jeans with deep flap pockets, paired with archival leather sneakers and a tailored drop-shoulder coat.",
        "alt": "Close-up of relaxed khaki cargo jeans with utility pockets and retro sneakers"
      },
      "faqs": [
        {
          "question": "What is the true definition of streetwear?",
          "answer": "Streetwear is a casual lifestyle aesthetic originating from California surf and skate culture, New York hip-hop and Tokyo youth movements, characterized by comfortable staples, graphic identity and limited-edition drops."
        },
        {
          "question": "How do you style tan cargo jeans in women streetwear?",
          "answer": "Balance the oversized volume of tan cargo jeans with a fitted ribbed top, platform sneakers, a structured cross-body bag and layered gold jewelry."
        },
        {
          "question": "What fabrics are best for quality streetwear hoodies?",
          "answer": "Premium streetwear hoodies utilize 400 to 500 GSM 100% loopback cotton French terry with ribbed side gussets and reinforced double-needle stitching."
        },
        {
          "question": "Why did luxury fashion houses embrace streetwear?",
          "answer": "Luxury fashion houses embraced streetwear because youth culture and sneakerhead communities redefined modern status symbols, shifting luxury away from stiff eveningwear toward comfortable, high-impact casualwear."
        }
      ]
    },
    "tags": [
      "Streetwear",
      "What Is Streetwear",
      "Streetwear Culture",
      "Cargo Jeans",
      "Fashion Trends"
    ],
    "mood": "Cyber-Street",
    "likes": 412,
    "bookmarksCount": 128
  },
  {
    "id": "article-16-vs-18-inch-necklace-1791917000000",
    "title": "16 vs 18 Inch Necklace: Sizing Guide, Placement and Styling",
    "subtitle": "Compare collarbone fit, neckline compatibility and layering rules to choose between a 16-inch and 18-inch necklace.",
    "slug": "16-vs-18-inch-necklace",
    "category": "how-to-style",
    "categoryLabel": "How to Style",
    "season": "AUTUMN / WINTER 2026",
    "issueNumber": "ISSUE NO. 22",
    "locationTag": "PARIS // EDITORIAL DESK",
    "featured": false,
    "author": {
      "name": "Aurelia Vance-Sterling",
      "role": "Editor-in-Chief and Haute Couture Critic",
      "location": "Paris and New York",
      "avatar": "/authors/aurelia-vance-sterling.jpg",
      "instagram": "@aurelia_vance"
    },
    "publishedAt": "OCTOBER 14, 2026",
    "readTime": "10 MIN READ",
    "coverImage": "/images/16-vs-18-inch-necklace-guide.jpg",
    "coverImageCaption": "Side-by-side comparison of a 16-inch fine gold chain resting on the collarbone and an 18-inch pendant chain on the upper chest.",
    "coverImageAlt": "Comparison of a 16 inch gold chain resting on the collarbone and an 18 inch necklace with pendant on a woman's neckline",
    "metaDescription": "Compare 16 vs 18 inch necklace lengths, collarbone placements, neckline pairings and pendant layering rules in our complete sizing guide.",
    "content": {
      "dropCapText": "Choosing between a 16-inch and an 18-inch necklace determines how jewelry frames your neckline, complements your collarbones and interacts with everyday clothing. While two inches may appear trivial on a jeweler's ruler, that subtle distance marks the anatomical boundary between a structured choker-adjacent accent and a versatile princess drape. Understanding how chain length coordinates with neck circumference, pendant weight and garment necklines ensures your jewelry investment sits with effortless precision.",
      "bodyParagraphs": [
        "## Anatomical Placement: Where 16-Inch and 18-Inch Chains Land",
        "The foundational choice in fine jewelry styling often narrows down to a 16 vs 18 inch necklace. Selecting between a 16 inch vs 18 inch necklace dictates whether your jewelry behaves as a tailored collar accent or an effortless everyday centerpiece. On a jewelers ruler, two inches represents a modest span, yet that exact distance separates an intentional collar necklace fit from a versatile princess length necklace. In a side-by-side 16in vs 18in necklace comparison (frequently evaluated as a 16 v 18 necklace decision), comparing a 16 vs 18 inch chain reveals distinct visual proportions across every neckline.",
        "So how long is a 16 inch necklace in practical terms? A 16 inch necklace length measures 40.6 centimeters. If you wonder how long is 16 in necklace drape on an average throat, a 16 necklace length wraps neatly around the base of the throat, resting right across the clavicle bone. This choker-style fit creates an intimate silhouette that flatters petite frames or anyone with a slender neck, behaving like a loose choker that accentuates facial bone structure. It secures the shortest layer position in any layered curation.",
        "In contrast, how long is an 18 inch necklace and what does an 18 inch necklace look like when worn? An 18 inch necklace length measures 45.7 centimeters. Specifically, where does an 18 inch necklace fall? An 18 inch necklace on woman of standard proportions drops into the subclavicular zone, resting gracefully on the upper chest placement just beneath the collarbones. Maintaining a relaxed U-shape, it represents the standard necklace chain length and the universal gift-giving necklace size that flatters every silhouette.",
        "## The Universal Sizing Standard: Normal and Average Necklace Dimensions",
        "When building an everyday signature jewelry collection, understanding standard chain lengths and necklace lengths ensures comfort and long-term wearability. In modern jewelry houses, 18 inches serves as the normal necklace length for women and the normal chain length for women. While the average necklace size for women historically ranges between 16 and 18 inches, the most common necklace length for women remains 18 inches because the average necklace length for a woman clears garments effortlessly without choking the throat.",
        "Stylists frequently answer questions like how long should a necklace be, what size necklace should i get, or what size chain should i get for daily life? For most wearers, 18 inches functions as the typical necklace length. When asking how long is a standard necklace, an 18-inch chain holds that title, whereas a 16-inch necklace chain length serves as the primary choice for unbuttoned collars and open-shoulder fashion.",
        "## Comprehensive Necklace Length Chart and Sizing Guide",
        "To determine the best necklace length for your wardrobe, explore our curated necklace length chart and necklace size guide. When reviewing necklace sizes for women, female necklace length categories establish clear visual focus across the décolletage area. Use this complete necklace length guide to evaluate each standard interval:",
        "* **14 Inches (Choker Length):** How long is a 14 inch necklace? Measuring 35.5 cm, it hugs high around the neck, providing a snug choker placement for formal and vintage attire.",
        "* **16 Inches (Collar Length):** Rests directly across the collarbones at the hollow of the throat. Ideal as a top-tier layering chain or standalone accent for scoop necks, sweetheart neckline cuts and strapless tops.",
        "* **18 Inches (Princess Length):** Sits cleanly below the clavicle. Universally celebrated as the best necklace length for women due to its day-to-night versatility.",
        "* **20 Inches (Matinee Necklace Length):** How long is a 20 inch necklace? Measuring 50.8 cm, a 20 inch chain on neck falls past the clavicle onto the upper bust, pairing seamlessly over casual crew neck t-shirts and ribbed knit sweaters.",
        "* **22 Inches (Matinee Mid):** How long is a 22 inch chain? It measures 55.9 cm and falls across the mid-chest, offering an elongated drape over fitted turtlenecks.",
        "* **24 Inches (Opera Necklace Length):** How long is a 24 inch chain? Measuring 61 cm, it extends toward the sternum bone, ideal for dramatic layering and evening gowns.",
        "## How to Choose the Right Necklace Length for Your Neckline and Frame",
        "Learning how to choose the right necklace length requires analyzing your throat circumference and garment silhouettes. Selecting the ideal chain length for womens necklace styling begins by wrapping a soft seamstress tape around the base of the neck. Necks measuring 12 to 13 inches experience a generous drop with a 16-inch piece, while wearers with a wider neck or fuller silhouettes measuring 15 inches or greater require an 18-inch or 20-inch base to avoid constriction.",
        "Garment necklines also establish optimal placement. When styling plunging silhouettes on elegant [types of dresses](/types-of-dresses), off-the-shoulder tops, or tailored button-down blouses, a 16-inch chain stays visible on bare skin without conflicting with moving lapels. Conversely, for crew necklines and structured outerwear, an 18-inch chain ensures the centerpiece charm rests flat over fabric without slipping under the collar hem.",
        "## Pendant Physics: Weight, Drop and the V-Vector Shift",
        "An unadorned chain retains a rounded, gentle curve across the body. However, adding a pendant shifts the center of gravity downward, pulling the links into a sharp downward V-vector. This shift adds significant vertical length, meaning a 16-inch chain carrying a heavy medallion necklace or locket necklace will visually hang where an unweighted 17-inch or 18-inch chain sits.",
        "Furthermore, the physical pendant bail drop adds extra length below the chain. When selecting charms, pair 16-inch chains with minimalist pendants, an initial disc pendant, or a bezel-set diamond that preserves the tailored collar contour. Reserve 18-inch chains for a solitaire diamond pendant, weighted coins and larger statement charms that require the flat expanse of the chest to sit upright.",
        "## The 2-Inch Layering Rule: Stacking 16\" and 18\" Chains Flawlessly",
        "Stacking a 16-inch and an 18-inch chain represents the classic formula of necklace curation. Because they share a clean two-inch delta, they create two distinct cascading tiers without crowding the throat. To achieve effective chain tangling prevention in a multi-strand stack, mix distinct chain link profiles rather than identical cable chain links. Anchor the 16-inch tier with a sleek flat herringbone chain, rope chain, or snake chain and pair it with a 18-inch paperclip chain holding a charm.",
        "Select precious metals that complement your natural undertones. Wearers aligned with a [soft summer color palette](/soft-summer-color-palette) shine in rhodium-plated white gold, hypoallergenic titanium, or a polished sterling silver chain. For warmer profiles, rich 14k solid gold and 18k yellow gold chains provide luminous warmth. Complete your styling by coordinating the layered chain with delicate cartilage accents, such as floating [hidden helix jewelry](/hidden-helix-jewelry).",
        "## How to Measure Necklace Chain Length Accurately at Home",
        "Knowing how to measure necklace chain length ensures seamless online purchasing. Employ the string sizing method: loop a flexible cord comfortably around the base of your throat, mark the meeting point and record the end-to-end measurement against a flat ruler. Add two inches for a collar fit, or four inches for a princess drape.",
        "Always verify whether the stated product dimensions represent true clasp-to-clasp length. A standard lobster clasp length or spring ring closure accounts for 0.5 to 0.75 inches of total reach. Look for versatile chains featuring a jump ring adjuster, a slider bead clasp, or a built-in chain extender loop, allowing you to alternate between 16 and 18 inches at will.",
        "## Men Sizing Conversion: Mens Chain Sizes and Proportions",
        "When shopping for mens chain sizes and mens necklace lengths, anatomical proportions differ substantially from women's measurements. The average necklace length for a man is 20 inches, as male throat circumferences typically measure 15 to 17 inches. A necklace length chart men guide illustrates that an 18-inch chain fits a man like a 16-inch fits a woman—resting snugly right at the collarbone. For those wondering how long is a 20 inch necklace on a man, it lands comfortably just below the clavicle, serving as the standard daily chain for male styling."
      ],
      "secondaryImage": {
        "url": "/images/16-vs-18-inch-necklace-layering.jpg",
        "caption": "Curated 2-inch necklace stack featuring a 16-inch flat gold herringbone chain and an 18-inch paperclip chain with a coin pendant.",
        "alt": "Macro styling of a 16-inch gold herringbone chain and an 18-inch coin pendant paperclip chain on a woman's neckline"
      },
      "faqs": [
        {
          "question": "What is the most popular necklace length for women?",
          "answer": "The 18-inch princess length is universally recognized as the most popular necklace length for women due to its flattering drape across casual and formal necklines."
        },
        {
          "question": "What is the difference between a 16 and 18 inch necklace?",
          "answer": "A 16-inch necklace rests directly on the collarbone, while an 18-inch necklace hangs one to two inches lower on the upper chest."
        },
        {
          "question": "Can you layer a 16 inch and 18 inch necklace together?",
          "answer": "Yes, their two-inch separation creates an ideal cascade that avoids tangling when you mix chain textures like herringbone and paperclip."
        },
        {
          "question": "Where does an 18 inch necklace fall on a woman?",
          "answer": "On an average woman, an 18-inch necklace falls just beneath the collarbone and sits flat against the upper sternum."
        }
      ]
    },
    "tags": [
      "Necklace Length",
      "Jewelry Sizing",
      "16 vs 18 Inch",
      "Necklace Layering",
      "How to Style"
    ],
    "mood": "Quiet Luxury",
    "likes": 384,
    "bookmarksCount": 112
  },
  {
    "id": "article-hidden-helix-jewelry-1791200000000",
    "title": "Hidden Helix Jewelry: Styling, Sizing and Piercing Aftercare",
    "subtitle": "An expert overview on styling, sizing and aftercare for the floating cartilage trend.",
    "slug": "hidden-helix-jewelry",
    "category": "how-to-style",
    "categoryLabel": "How to Style",
    "season": "AUTUMN / WINTER 2026",
    "issueNumber": "ISSUE NO. 21",
    "locationTag": "PARIS // EDITORIAL DESK",
    "featured": false,
    "author": {
      "name": "Aurelia Vance-Sterling",
      "role": "Editor-in-Chief and Haute Couture Critic",
      "location": "Paris and New York",
      "avatar": "/authors/aurelia-vance-sterling.jpg",
      "instagram": "@aurelia_vance"
    },
    "publishedAt": "OCTOBER 8, 2026",
    "readTime": "8 MIN READ",
    "coverImage": "/images/hidden-helix-jewelry-cover.jpg",
    "coverImageCaption": "Close-up of fine gold and diamond hidden helix jewelry placed beneath the upper cartilage fold.",
    "coverImageAlt": "Macro close-up of an ear with an elegant hidden helix cartilage piercing and floating gold diamond jewelry",
    "metaDescription": "Learn how to choose hidden helix jewelry, understand ear cartilage anatomy, compare gold with titanium and maintain healthy daily healing.",
    "content": {
      "dropCapText": "Hidden helix jewelry rests gracefully underneath the upper rim fold of the ear, creating the magical illusion of a floating charm. This refined placement tucks the decorative front beneath a protective canopy of skin and cartilage. As a result, the ornament appears suspended in midair rather than anchored directly to the edge of the ear. Fashion enthusiasts appreciate this sophisticated aesthetic for its subtle yet striking approach to modern fine jewelry styling.",
      "bodyParagraphs": [
        "## How the Floating Cartilage Placement Works",
        "Creating this suspended illusion relies entirely on your unique ear anatomy and the skilled hands of a professional piercer. Your upper ear rim must possess a sufficiently defined fold to successfully shelter the decorative top of the piece. When placed correctly, the hidden helix jewelry sits comfortably sheltered beneath this natural hood of cartilage while the charm peeks out from the shadow. This technique protects the gemstone or precious metal motif from everyday snags while offering an unexpected flash of luxury.",
        "The physical placement requires precise angling to ensure the back-plate rests flush against the flat expanse behind the ear. Professional piercers study the natural curve of your cartilage fold to determine the exact exit point for the post. If the fold is too shallow, the ornament will simply slide outward and lose its concealed quality. Therefore, a careful consultation with an experienced piercer remains a mandatory first step before purchasing any precious adornments.",
        "## Choosing the Right Metals for Comfort and Safety",
        "Selecting appropriate materials for your ear decorations protects your sensitive skin and ensures a smooth, irritation-free healing period. High-end fashion demands uncompromising quality, especially when placing new pieces inside delicate cartilage tissue.",
        "### Why Titanium Is Best for Fresh Piercings",
        "Initial piercings require hypoallergenic, nickel-free metals that encourage calm healing without adverse reactions. Professional piercers universally recommend implant-grade titanium conforming to ASTM F-136 standards for all fresh hidden helix jewelry titanium installations. This exceptional metal is lightweight, completely body-friendly and accepts a brilliant high polish that mimics white gold. Piercers typically use a 16 gauge or 18 gauge threadless push-pin labret stud to initiate the healing process securely.",
        "### Selecting Solid Gold for Healed Setups",
        "Once your tissue fully heals, you can transition safely into luxurious solid 14k or 18k hidden helix jewelry gold pieces. Premium gold hidden helix jewelry brings a warm, timeless glow to your upper ear styling without risking unsightly tarnish. Avoid inexpensive gold-plated or costume base metals entirely, as cheap alloys quickly flake away, turn your skin green and trigger painful bumps. Genuine solid gold pieces maintain their radiant luster indefinitely, making them a sound investment for your permanent collection.",
        "## Starter Studs versus Decorative Styles",
        "Styling your upper ear requires patience and a gradual approach to prevent unnecessary irritation during the initial months. Transitioning from simple starter pieces to ornate designs marks an exciting milestone in your personal styling routine.",
        "### Starting with Flat-Back Labret Studs",
        "Your initial piercing must heal around a simple, stable foundation rather than a heavy or ornate design. Piercers install an 8mm flat-back labret stud to accommodate normal tissue swelling during the first few weeks. The flat disc at the back prevents the post from catching on hair or clothing while you sleep and move. Never attempt to wear hoops or dangling chains during the primary healing window.",
        "### Upgrading to Dangling Chains and Charms",
        "After your tissue completely heals over six to twelve months, you can finally wear elaborate hidden helix piercing jewelry options. Cascading chains, diamond clusters and dangling gemstone charms add dramatic movement and texture to your ear stack. These decorative pieces catch the light beautifully when paired with sophisticated evening attire or casual daytime ensembles.",
        "## Coordinating Your Piercing with Daily Outfits",
        "Integrating your upper ear adornments into your daily wardrobe creates a harmonious and intentional personal style. When wearing elegant [types of dresses](/types-of-dresses), a subtle floating gemstone adds a whisper of luxury to bare shoulders and necklines. You can also match your metal tones to the hardware on your handbags and belts for a cohesive aesthetic.",
        "During cooler months, consider how your jewelry interacts with high collars, scarves and cozy winter knitwear. If your seasonal wardrobe leans toward a [soft summer color palette](/soft-summer-color-palette) featuring muted pastels and dusty blues, choose white gold or titanium settings. Conversely, warm yellow gold pieces gracefully complement rich autumn earth tones and lively seasonal prints.",
        "## Downsizing Schedule and Daily Cleaning",
        "Maintaining a healthy piercing requires strict adherence to proper downsizing appointments and daily hygiene routines. Your initial 8mm post must be shortened down to a 5mm or 6mm length between four to eight weeks once initial swelling subsides. This professional downsizing prevents the longer post from shifting, tilting, or catching on stray hairs.",
        "Effective daily maintenance involves very simple steps that protect your sensitive new piercing from irritation. Spray the area twice daily with a 0.9% sterile saline solution to gently cleanse away accumulated debris. Dry the surrounding skin carefully afterward by gently patting the area with a clean, disposable paper towel. Always sleep on a specialized donut pillow to keep all pressure off your healing ear throughout the night.",
        "* Visit your professional piercer for a downsizing appointment between week four and week eight.",
        "* Clean the piercing site twice daily using a pre-made sterile 0.9% saline spray.",
        "* Sleep on a travel pillow with a center cutout to avoid putting pressure on your fresh ear cartilage."
      ],
      "secondaryImage": {
        "url": "/images/hidden-helix-jewelry-styling.jpg",
        "caption": "Delicate gold and titanium pieces curated for upper ear cartilage piercings.",
        "alt": "Fine jewelry gold studs and cartilage piercing curation on an ear"
      },
      "faqs": [
        {
          "question": "Can everyone get a hidden helix piercing?",
          "answer": "No, you need a sufficiently folded upper cartilage rim to properly conceal and support this specific placement."
        },
        {
          "question": "How much does a hidden helix hurt?",
          "answer": "The procedure causes a brief, sharp pinch that quickly subsides into a dull, warm throbbing sensation."
        },
        {
          "question": "How long does a hidden helix take to heal?",
          "answer": "Cartilage tissue typically requires six to twelve months to achieve complete and stable internal healing."
        },
        {
          "question": "What jewelry is best for a fresh hidden helix?",
          "answer": "An implant-grade titanium flat-back labret stud is the safest and most reliable choice for a fresh piercing."
        }
      ]
    },
    "tags": [
      "Hidden Helix",
      "Ear Piercing",
      "Jewelry Styling",
      "Fine Jewelry",
      "Piercing Aftercare"
    ],
    "mood": "Quiet Luxury",
    "likes": 328,
    "bookmarksCount": 89
  },
  {
    "id": "article-types-of-dresses-1791199697853",
    "title": "A Complete Guide to Understanding the Various Types Of Dresses",
    "subtitle": "Discover the most flattering silhouettes, timeless designs and seasonal favorites to build a versatile wardrobe for every single occasion you attend.",
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
      "dropCapText": "Building a functional wardrobe requires an understanding of the diverse types of dresses available in modern fashion. From structured silhouettes to breezy casual styles, each design serves a distinct purpose and flatters specific body proportions. Knowing how to differentiate these cuts helps you select appropriate attire for formal events, casual outings and professional environments.",
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
        "Maxi dresses sweep down to the ankles, creating an effortless and elegant appearance. They are typically crafted from lightweight fabrics that sway gracefully with every step you take. These garments work exceptionally well for summer weddings, vacations and relaxed weekend brunches.",
        "### The Effortless Wrap Dress",
        "Wrap dresses feature a front closure formed by wrapping one side across the other and tying the fabric at the waist. This adjustable design allows for a customized fit that accommodates changing body shapes comfortably. The V-neckline created by the wrap adds a touch of classic elegance.",
        "## Modern Everyday Cuts",
        "### The Versatile Shirt Dress",
        "Shirt dresses borrow traditional elements from button-down collared shirts and extend them into a full garment. They often include a matching fabric belt to define the waist while maintaining a relaxed structure. You can wear these pieces with loafers for work or canvas sneakers for errands.",
        "### The Sleek Slip Dress",
        "Slip dresses draw inspiration from vintage undergarments, featuring delicate spaghetti straps and smooth satin fabrics. They drape fluidly over the body to create a minimalist yet striking aesthetic. When choosing muted shades, styling these dresses alongside the tones of the [soft summer color palette](/soft-summer-color-palette) delivers an understated, sophisticated evening look."
      ],
      "pullQuote": {
        "text": "Selecting the right dress silhouette comes down to understanding your personal comfort, body proportions and the specific demands of the event you are attending.",
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
    "subtitle": "An advanced textile and pigment analysis examining the cooling elegance, desaturated undertones and sophisticated textile choices of the soft summer color palette.",
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
        "Biological evaluation of muted individuals reveals a distinct lack of overt warmth in skin, eyes and hair. Instead of golden or bronze highlights, the natural pigmentation displays a soft, ash-based character. Recognizing this quiet subtlety separates the soft summer color palette from adjacent autumn categories.",
        "### The Soft Iris Ring Structure",
        "Eye patterns within this classification often exhibit diffused, smoky boundaries rather than high-contrast starbursts. Hazel, grey-blue and soft green irises frequently feature a muted charcoal limbic ring. These gentle ocular characteristics harmonize seamlessly with the desaturated nature of the true summer colour palette.",
        "## Distinguishing The Summer Continuum",
        "### Transition Boundaries With Soft Autumn",
        "Color theory dictates that cool and warm seasons remain separate, yet neighboring categories share a muted quality. The soft summer color palette bridges the gap by retaining cool blue undertones while adopting a lower level of saturation. This borderland status allows individuals to wear muted rose and sage effectively.",
        "### Distinguishing True And Light Summer Variants",
        "Comparing adjacent seasonal groups prevents common styling missteps during wardrobe curation. While the light summer color analysis prioritizes high-value, icy clarity, the soft summer variant demands lowered chroma above all else. Similarly, the light summer color palette leans toward brighter pastels, whereas the light summer palette remains distinct from dusty rose hues.",
        "## Fabric Selection And Surface Light Absorption",
        "### Brushed Wools Versus Glossy Synthetics",
        "Textile choice alters the visual temperature and perceived saturation of any garment in real-world lighting. Matte materials like brushed wool, raw silk and sueded cotton absorb directional light, enhancing muted tones. Conversely, shiny polyester finishes reflect harsh light, washing out delicate biological coloring.",
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
          "answer": "Opt for neutral-cool taupes, dusty mauves, muted berry lipsticks and soft rose blushes. Avoid heavy bronzers with orange undertones and harsh black eyeliner."
        },
        {
          "question": "Are metallics allowed in this seasonal category?",
          "answer": "Brushed pewter, soft rose gold and antiqued silver complement the muted aesthetic much better than highly reflective, polished yellow gold. For ear styling, delicate cartilage pieces like [hidden helix jewelry](/hidden-helix-jewelry) in cool titanium or white gold bring subtle refinement to your outfit."
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
