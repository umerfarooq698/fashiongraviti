import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const SITE_DOMAIN = 'https://fashiongraviti.com';

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderInlineMarkdownLinks(text = '') {
  const escaped = escapeHtml(text);
  return escaped.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, href) => {
    return `<a href="${href}">${label}</a>`;
  });
}

function getAuthorSlug(name = '') {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Parse initialArticles.ts safely by stripping TypeScript syntax
function loadArticlesAndCategories() {
  const filePath = path.join(ROOT_DIR, 'src/data/initialArticles.ts');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const jsCode = raw
    .replace(/^import\s+type\s+.*?;?\s*$/gm, '')
    .replace(/export\s+const\s+FASHION_CATEGORIES\s*:\s*FashionCategory\[\]\s*=/, 'const FASHION_CATEGORIES =')
    .replace(/export\s+const\s+INITIAL_ARTICLES\s*:\s*FashionArticle\[\]\s*=/, 'const INITIAL_ARTICLES =')
    .replace(/export\s+const\s+LOOKBOOK_ITEMS\s*:\s*LookbookItem\[\]\s*=/, 'const LOOKBOOK_ITEMS =')
    .replace(/export\s+const\s+RUNWAY_TICKER_ITEMS\s*=/, 'const RUNWAY_TICKER_ITEMS =')
    + '\nreturn { FASHION_CATEGORIES, INITIAL_ARTICLES, LOOKBOOK_ITEMS, RUNWAY_TICKER_ITEMS };';

  const fn = new Function(jsCode);
  return fn();
}

const AUTHORS = [
  {
    name: 'Aurelia Vance-Sterling',
    slug: 'aurelia-vance-sterling',
    role: 'Editor-in-Chief and Haute Couture Critic',
    location: 'Paris, France',
    avatar: '/authors/aurelia-vance-sterling.jpg',
    bio: 'Paris-based editor and couture historian examining Parisian atelier craftsmanship, runway structure and the legacy of international fashion houses. With over fifteen years of frontline coverage at Paris Haute Couture Week and Milan ready-to-wear presentations, Aurelia specializes in garment construction, fine jewelry anatomy, seasonal color harmony and archival fashion criticism.',
  },
  {
    name: 'Julian Thorne-Dumont',
    slug: 'julian-thorne-dumont',
    role: 'Senior Sartorial and Tailoring Critic',
    location: 'Milan, Italy',
    avatar: '/authors/julian-thorne-dumont.jpg',
    bio: 'Milan and Savile Row correspondent focusing on bespoke tailoring, rare natural textiles, cashmere construction and classic dress silhouettes. Julian analyzes structural patternmaking, canvas interlinings, fabric drape behavior and timeless wardrobe architecture for both formal and daily dressing.',
  },
  {
    name: 'Renata Moreau-Kroll',
    slug: 'renata-moreau-kroll',
    role: 'Celebrity Style and Red Carpet Columnist',
    location: 'New York and Cannes',
    avatar: '/authors/renata-moreau-kroll.jpg',
    bio: 'New York and Cannes red carpet analyst tracking celebrity styling partnerships, archival red carpet dressing and modern gala aesthetics. Renata documents the collaboration between Hollywood stylists, heritage couture houses and contemporary jewelry ateliers across major international film festivals and awards seasons.',
  },
  {
    name: 'Soren Lindqvist-Kovac',
    slug: 'soren-lindqvist-kovac',
    role: 'Avant-Garde and Heritage Brand Scholar',
    location: 'Stockholm, Sweden',
    avatar: '/authors/soren-lindqvist-kovac.jpg',
    bio: 'Stockholm-trained design scholar analyzing modernist fashion architecture, Scandinavian minimalism and sustainable luxury innovation. Soren researches experimental bio-textiles, zero-waste pattern engineering and the historical evolution of European and Japanese design houses.',
  },
];

const CATEGORY_SEO = {
  'fashion-news': {
    title: 'Fashion News | Fashion Graviti',
    description: 'Read the latest clothing news, runway shows and designer stories. Get fast updates on fashion week events, brand changes and new outfits.',
    editorialEssay: [
      'The Fashion News desk at Fashion Graviti delivers direct, independent reporting from the capitals of global style—Paris, Milan, London, New York and Tokyo. Our editors track creative director appointments, heritage fashion house announcements, textile supply chain shifts and major runway presentations as they unfold each season.',
      'Unlike commercial aggregators, our newsroom prioritizes primary analysis of garment construction, atelier craftsmanship and the cultural forces shaping luxury retail and independent design labels. Every bulletin is fact-checked for collection dates, fabric provenance and designer attribution.',
      'Readers rely on this department for comprehensive coverage of Haute Couture showcases, ready-to-wear debuts, exhibition retrospectives at leading costume institutes and emerging talent spotlights across international fashion weeks.',
    ],
  },
  'fashion-trends': {
    title: 'Fashion Trends | Fashion Graviti',
    description: 'See what clothing styles are popular right now. Find out which colors, prints and fabrics are showing up in stores and on the street today.',
    editorialEssay: [
      'The Fashion Trends desk examines how runway concepts transition into everyday wardrobes through rigorous color theory, textile weight analysis and silhouette forecasting. Rather than chasing fleeting micro-trends, our critics evaluate seasonal movements that offer lasting sartorial value.',
      'From Munsell-based seasonal color palettes such as the Soft Summer spectrum to architectural outerwear proportions and tactile knitwear weaves, we break down the visual mechanics behind why certain hues, cuts and textures resonate each season.',
      'Each trend report provides clear, practical guidance on identifying flattering undertones, pairing fabric finishes like matte crepe with brushed wool and adapting seasonal runway directions to real-world climates and occasions.',
    ],
  },
  'celebrity': {
    title: 'Celebrity Style | Fashion Graviti',
    description: 'Check out what your favorite stars wear on the red carpet and in daily life. See photos and details about celebrity outfits and accessories.',
    editorialEssay: [
      'The Celebrity Style desk documents red carpet couture, film festival premieres, Met Gala commissions and off-duty street style with an emphasis on tailoring and styling craftsmanship. Our columnists examine the creative partnerships between leading actors, musicians, personal stylists and historic fashion houses.',
      'Beyond surface photography, we analyze custom gown engineering, archival vintage pulls from museum-grade collections, fine jewelry placements and the sartorial storytelling behind major press tours and international awards ceremonies.',
      'Whether evaluating a custom column dress in Cannes or tailored wool coats on the streets of New York, our coverage highlights how celebrity wardrobe choices influence broader fashion trends and revive classic silhouettes.',
    ],
  },
  'designers-brands': {
    title: 'Designers and Brands | Fashion Graviti',
    description: 'Learn about the people and companies that make your clothes. Read stories on top fashion designers, new labels and popular clothing brands.',
    editorialEssay: [
      'The Designers and Brands desk serves as an encyclopedic archive dedicated to heritage couture houses, bespoke tailoring ateliers, specialist jewelry makers and boundary-pushing independent labels. We study the founding philosophies, signature patternmaking techniques and material standards that define great fashion houses.',
      'Our monographs explore how master tailors, goldsmiths and creative directors preserve traditional handcraft while introducing modern technical innovations—from Italian wool mills in Biella to Parisian feather and embroidery workshops.',
      'By understanding the history and construction standards of individual brands, readers can make informed investments in garments and accessories built for generational longevity.',
    ],
  },
  'beauty': {
    title: 'Beauty | Fashion Graviti',
    description: 'Find simple tips for skincare, makeup and hair care. Read about popular beauty products and easy ways to build your daily routine at home.',
    editorialEssay: [
      'The Beauty desk bridges backstage runway artistry with evidence-based daily skincare, hair styling and cosmetic color harmony. Our editors consult dermatological research, professional makeup artists and color analysts to demystify product formulations and application techniques.',
      'We focus on how skin undertone, natural lip and eye pigmentation and lighting conditions interact with foundation shades, lip colors and hair tones—ensuring your beauty routine works in seamless harmony with your clothing palette.',
      'From barrier-supportive skincare routines and biocompatible piercing aftercare to sculpted editorial hair and minimalist complexion finishes, every guide is written for clarity, safety and everyday practicality.',
    ],
  },
  'how-to-style': {
    title: 'How to Style | Fashion Graviti',
    description: 'Get easy advice on how to put together outfits with clothes you already own. Learn simple tricks to match colors and wear items for any day.',
    editorialEssay: [
      'The How to Style desk provides actionable, anatomically grounded wardrobe advice for building a functional, cohesive personal style. Our styling guides cover dress silhouettes, fine jewelry curation, fabric layering, proportion balancing and seasonal capsule planning.',
      'Whether selecting the right dress cut for a formal evening event, coordinating hidden helix cartilage jewelry with necklines and metal hardware, or combining muted cool tones for effortless daily outfits, our editors translate professional styling principles into clear steps.',
      'Every tutorial emphasizes versatility, comfort, material quality and proper fit so you can maximize the clothes and accessories you already own while shopping with confidence.',
    ],
  },
};

function renderHeaderNav(categories, articles) {
  const catLinks = categories
    .map((c) => {
      const href = c.id === 'all' ? '/' : `/${c.id}`;
      return `<li><a href="${href}">${escapeHtml(c.name)}</a></li>`;
    })
    .join('\n          ');

  const articleLinks = articles
    .map((a) => `<li><a href="/${a.slug}">${escapeHtml(a.title)}</a></li>`)
    .join('\n          ');

  return `
    <header>
      <nav aria-label="Main Navigation">
        <a href="/">Fashion Graviti — Luxury Fashion Magazine</a>
        <ul>
          ${catLinks}
        </ul>
      </nav>
      <nav aria-label="Featured Editorial Stories">
        <ul>
          ${articleLinks}
        </ul>
      </nav>
    </header>`;
}

function renderFooterNav(categories, articles) {
  const catLinks = categories
    .map((c) => {
      const href = c.id === 'all' ? '/' : `/${c.id}`;
      return `<li><a href="${href}">${escapeHtml(c.name)}</a></li>`;
    })
    .join('\n          ');

  const articleLinks = articles
    .map((a) => `<li><a href="/${a.slug}">${escapeHtml(a.title)}</a></li>`)
    .join('\n          ');

  const authorLinks = AUTHORS.map(
    (au) => `<li><a href="/author/${au.slug}">${escapeHtml(au.name)} — ${escapeHtml(au.role)}</a></li>`
  ).join('\n          ');

  return `
    <footer>
      <section>
        <h2>Departments</h2>
        <ul>
          ${catLinks}
        </ul>
      </section>
      <section>
        <h2>Latest Editorial Guides</h2>
        <ul>
          ${articleLinks}
        </ul>
      </section>
      <section>
        <h2>Editorial Masthead</h2>
        <ul>
          ${authorLinks}
        </ul>
      </section>
      <section>
        <h2>Company and Legal</h2>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms and Conditions</a></li>
        </ul>
      </section>
      <p>© 2026 Fashion Graviti Publishing Group. All rights reserved.</p>
    </footer>`;
}

function renderArticleBodyHtml(article, allArticles, categories) {
  const authorSlug = getAuthorSlug(article.author.name);
  const bodyItems = [];
  let listBuffer = [];

  const flushList = () => {
    if (listBuffer.length > 0) {
      bodyItems.push(`<ul>\n${listBuffer.map((li) => `  <li>${renderInlineMarkdownLinks(li)}</li>`).join('\n')}\n</ul>`);
      listBuffer = [];
    }
  };

  for (const para of article.content.bodyParagraphs || []) {
    const trimmed = para.trim();
    if (trimmed.startsWith('### ')) {
      flushList();
      bodyItems.push(`<h3>${escapeHtml(trimmed.slice(4))}</h3>`);
    } else if (trimmed.startsWith('## ')) {
      flushList();
      bodyItems.push(`<h2>${escapeHtml(trimmed.slice(3))}</h2>`);
    } else if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      listBuffer.push(trimmed.slice(2));
    } else {
      flushList();
      bodyItems.push(`<p>${renderInlineMarkdownLinks(trimmed)}</p>`);
    }
  }
  flushList();

  const secondaryImgHtml = article.content.secondaryImage
    ? `<figure>
        <img src="${escapeHtml(article.content.secondaryImage.url)}" alt="${escapeHtml(article.content.secondaryImage.alt || article.title)}" />
        ${article.content.secondaryImage.caption ? `<figcaption>${escapeHtml(article.content.secondaryImage.caption)}</figcaption>` : ''}
      </figure>`
    : '';

  const faqsHtml =
    article.content.faqs && article.content.faqs.length > 0
      ? `<section>
          <h2>Frequently Asked Questions</h2>
          ${article.content.faqs
            .map(
              (f) => `<div class="faq-item">
            <h3>${escapeHtml(f.question)}</h3>
            <p>${escapeHtml(f.answer)}</p>
          </div>`
            )
            .join('\n')}
        </section>`
      : '';

  const relatedHtml = allArticles
    .filter((a) => a.slug !== article.slug)
    .map(
      (a) => `<article>
        <h3><a href="/${a.slug}">${escapeHtml(a.title)}</a></h3>
        <p>${escapeHtml(a.subtitle)}</p>
        <p>By <a href="/author/${getAuthorSlug(a.author.name)}">${escapeHtml(a.author.name)}</a> in <a href="/${a.category}">${escapeHtml(a.categoryLabel)}</a></p>
      </article>`
    )
    .join('\n');

  return `
    ${renderHeaderNav(categories, allArticles)}
    <main>
      <nav aria-label="Breadcrumb">
        <a href="/">Home</a> &gt; <a href="/${article.category}">${escapeHtml(article.categoryLabel)}</a> &gt; <span>${escapeHtml(article.title)}</span>
      </nav>
      <article>
        <header>
          <p><a href="/${article.category}">${escapeHtml(article.categoryLabel)}</a> • ${escapeHtml(article.readTime)} • ${escapeHtml(article.publishedAt)}</p>
          <h1>${escapeHtml(article.title)}</h1>
          <p>${escapeHtml(article.subtitle)}</p>
          <p>By <a href="/author/${authorSlug}">${escapeHtml(article.author.name)}</a> (${escapeHtml(article.author.role)})</p>
        </header>
        <figure>
          <img src="${escapeHtml(article.coverImage)}" alt="${escapeHtml(article.coverImageAlt || article.title)}" />
          ${article.coverImageCaption ? `<figcaption>${escapeHtml(article.coverImageCaption)}</figcaption>` : ''}
        </figure>
        <p>${renderInlineMarkdownLinks(article.content.dropCapText)}</p>
        ${bodyItems.join('\n        ')}
        ${secondaryImgHtml}
        ${faqsHtml}
      </article>
      <section>
        <h2>Related Style Guides and Features</h2>
        ${relatedHtml}
      </section>
    </main>
    ${renderFooterNav(categories, allArticles)}`;
}

function renderHomeBodyHtml(articles, categories) {
  const cover = articles[0];
  const coverAuthorSlug = getAuthorSlug(cover.author.name);

  const articlesListHtml = articles
    .map((a) => {
      const aSlug = getAuthorSlug(a.author.name);
      return `<article>
        <p><a href="/${a.category}">${escapeHtml(a.categoryLabel)}</a> • ${escapeHtml(a.publishedAt)} • ${escapeHtml(a.readTime)}</p>
        <h2><a href="/${a.slug}">${escapeHtml(a.title)}</a></h2>
        <p>${escapeHtml(a.subtitle)}</p>
        <p>${renderInlineMarkdownLinks(a.content.dropCapText)}</p>
        <p>By <a href="/author/${aSlug}">${escapeHtml(a.author.name)}</a>, ${escapeHtml(a.author.role)}</p>
        <p><a href="/${a.slug}">Read Full Feature: ${escapeHtml(a.title)}</a></p>
      </article>`;
    })
    .join('\n');

  const desksHtml = categories
    .filter((c) => c.id !== 'all')
    .map(
      (c) => `<section>
        <h3><a href="/${c.id}">${escapeHtml(c.name)}</a></h3>
        <p>${escapeHtml(c.tagline)} — ${escapeHtml(c.description)}</p>
      </section>`
    )
    .join('\n');

  return `
    ${renderHeaderNav(categories, articles)}
    <main>
      <section>
        <p><a href="/${cover.category}">${escapeHtml(cover.categoryLabel)}</a> • ${escapeHtml(cover.readTime)}</p>
        <h1><a href="/${cover.slug}">${escapeHtml(cover.title)}</a></h1>
        <p>${escapeHtml(cover.subtitle)}</p>
        <p>${renderInlineMarkdownLinks(cover.content.dropCapText)}</p>
        <p>By <a href="/author/${coverAuthorSlug}">${escapeHtml(cover.author.name)}</a> • ${escapeHtml(cover.publishedAt)}</p>
        <p><a href="/${cover.slug}">Read Cover Story</a></p>
      </section>
      <section>
        <h2>Latest Fashion Features and Style Guides</h2>
        ${articlesListHtml}
      </section>
      <section>
        <h2>Magazine Desks and Editorial Categories</h2>
        ${desksHtml}
      </section>
      <section>
        <h2>About Fashion Graviti Publication</h2>
        <p>Fashion Graviti is an independent fashion magazine and sartorial archive reporting on runway collections, seasonal color analysis, dress silhouettes, fine jewelry anatomy and everyday wardrobe styling. Our critics and editors in Paris, Milan, New York and Stockholm publish practical guides and in-depth textile critiques designed for enduring personal style.</p>
        <p>Explore our <a href="/about">About Us</a> page to meet our editorial board, visit our <a href="/contact">Contact Desk</a> for reader inquiries and story pitches, or review our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms and Conditions</a>.</p>
      </section>
    </main>
    ${renderFooterNav(categories, articles)}`;
}

function renderCategoryBodyHtml(cat, articles, categories) {
  const seoInfo = CATEGORY_SEO[cat.id];
  const catArticles = articles.filter((a) => a.category === cat.id);
  const displayArticles = catArticles.length > 0 ? catArticles : articles;

  const essaysHtml = (seoInfo?.editorialEssay || [cat.description])
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n        ');

  const cardsHtml = displayArticles
    .map(
      (a) => `<article>
        <h3><a href="/${a.slug}">${escapeHtml(a.title)}</a></h3>
        <p>${escapeHtml(a.subtitle)}</p>
        <p>${renderInlineMarkdownLinks(a.content.dropCapText)}</p>
        <p>By <a href="/author/${getAuthorSlug(a.author.name)}">${escapeHtml(a.author.name)}</a> • <a href="/${a.category}">${escapeHtml(a.categoryLabel)}</a></p>
      </article>`
    )
    .join('\n');

  return `
    ${renderHeaderNav(categories, articles)}
    <main>
      <nav aria-label="Breadcrumb">
        <a href="/">Home</a> &gt; <span>${escapeHtml(cat.name)}</span>
      </nav>
      <header>
        <p>${escapeHtml(cat.tagline)}</p>
        <h1>${escapeHtml(cat.name)} — Magazine Desk</h1>
        <p>${escapeHtml(cat.description)}</p>
      </header>
      <section>
        <h2>Department Overview and Editorial Scope</h2>
        ${essaysHtml}
      </section>
      <section>
        <h2>${catArticles.length > 0 ? `Published Stories in ${escapeHtml(cat.name)}` : `Featured Editorial Curations Across Fashion Graviti`}</h2>
        ${cardsHtml}
      </section>
    </main>
    ${renderFooterNav(categories, articles)}`;
}

function renderAboutBodyHtml(articles, categories) {
  const authorsHtml = AUTHORS.map(
    (au) => `<article>
      <h3><a href="/author/${au.slug}">${escapeHtml(au.name)}</a></h3>
      <p>${escapeHtml(au.role)} — ${escapeHtml(au.location)}</p>
      <p>${escapeHtml(au.bio)}</p>
    </article>`
  ).join('\n');

  return `
    ${renderHeaderNav(categories, articles)}
    <main>
      <nav aria-label="Breadcrumb"><a href="/">Home</a> &gt; <span>About Us</span></nav>
      <header>
        <h1>The Independent Authority on Global Fashion and Runway Critique</h1>
        <p>We document the intersection of haute couture craftsmanship, contemporary street culture and revolutionary runway design with uncompromising editorial integrity.</p>
      </header>
      <section>
        <h2>A Modern Standard for Fashion Journalism</h2>
        <p>Founded in 2026, Fashion Graviti was established to bring critical rigor, textile analysis and aesthetic reverence back to modern fashion publishing. In a digital environment saturated with superficial noise and fast-fashion consumerism, Fashion Graviti serves as an independent publication for discerning individuals who appreciate the artistry, history and craft of tailoring.</p>
        <p>Our correspondents attend premier runway showcases from Paris to Tokyo, reporting directly on the collections, designers and cultural movements shaping modern luxury. Every critique, review and trend dispatch published on our platform adheres to strict journalistic principles, providing readers with accurate analysis, practical wardrobe guidance and authentic sartorial critique.</p>
      </section>
      <section>
        <h2>What We Document</h2>
        <ul>
          <li><a href="/fashion-news">Independent Runway Critique</a>: Firsthand reporting directly from international fashion week shows in Paris, Milan, London and New York.</li>
          <li><a href="/designers-brands">Haute Couture and Atelier Focus</a>: Dedicated examination of artisanal metiers, textile provenance and bespoke craftsmanship.</li>
          <li><a href="/fashion-trends">Trend Intelligence and Forecasting</a>: Decoding seasonal shifts, silhouette evolutions and color palettes transitioning from runway presentations to everyday wardrobes.</li>
          <li><a href="/celebrity">Celebrity and Red Carpet Culture</a>: Authoritative analysis of iconic red carpet moments, Met Gala couture, styling breakdowns and archival vintage revivals.</li>
          <li><a href="/beauty">Backstage Beauty and Skincare</a>: Practical cosmetic color harmony, skin undertone analysis and healthy daily routines.</li>
          <li><a href="/how-to-style">Wardrobe Styling and Fit Guides</a>: Complete silhouette breakdowns, fine jewelry styling and capsule wardrobe building.</li>
        </ul>
      </section>
      <section>
        <h2>Our Journalistic Standards</h2>
        <p><strong>Editorial Independence:</strong> We maintain a strict firewall between editorial critiques and commercial advertisements. Garments, collections and designers featured on Fashion Graviti are chosen purely on artistic merit and cultural relevance.</p>
        <p><strong>Factual Accuracy and Provenance:</strong> Our writers and editors verify fabric compositions, collection season histories, designer credits and runway dates prior to publication. Errors are corrected promptly with full transparency.</p>
        <p><strong>Original Commentary and Insight:</strong> Every article reflects genuine perspective, historical fashion context and professional analysis from writers with deep domain experience in luxury fashion and textile arts.</p>
        <p><strong>Reader Feedback and Accountability:</strong> We welcome inquiries, feedback and corrections directly from readers, designers and industry professionals via our <a href="/contact">Contact Us</a> page or at info.fashiongraviti@gmail.com.</p>
      </section>
      <section>
        <h2>Senior Critics and Editors</h2>
        ${authorsHtml}
      </section>
    </main>
    ${renderFooterNav(categories, articles)}`;
}

function renderContactBodyHtml(articles, categories) {
  return `
    ${renderHeaderNav(categories, articles)}
    <main>
      <nav aria-label="Breadcrumb"><a href="/">Home</a> &gt; <span>Contact Us</span></nav>
      <header>
        <h1>Contact Fashion Graviti</h1>
        <p>At Fashion Graviti, we value direct, thoughtful communication with our readers, independent writers and fashion industry professionals. Whether you have feedback on our color analysis reports, need clarification on a wardrobe guide, or want to pitch an original story, here is how you can reach our editorial team directly.</p>
      </header>
      <section>
        <h2>Editorial Inquiries and Story Pitches</h2>
        <p>Our editorial desk is always open to well-researched pitches, styling perspectives and trend critiques across <a href="/fashion-news">Fashion News</a>, <a href="/fashion-trends">Fashion Trends</a> and <a href="/how-to-style">How to Style</a>. If you are an independent fashion writer, stylist, or textile researcher with a story idea, we want to hear from you.</p>
        <p>When sending a pitch, please include a brief summary of your topic, why it matters to our readers and links to any previously published work. Please write "Editorial Pitch" in your email subject line so it routes straight to our writing team. We review all pitches carefully and aim to respond to relevant proposals within two to three business days.</p>
        <p>Email: <a href="mailto:info.fashiongraviti@gmail.com?subject=Editorial%20Pitch">info.fashiongraviti@gmail.com</a></p>
      </section>
      <section>
        <h2>Fact Checking and Corrections</h2>
        <p>Accuracy and transparency are foundational to everything we publish. If you spot a factual error in our seasonal color analysis data, an incorrect photo attribution, or an outdated styling recommendation in guides such as <a href="/hidden-helix-jewelry">Hidden Helix Jewelry</a>, <a href="/types-of-dresses">Types of Dresses</a>, or <a href="/soft-summer-color-palette">Soft Summer Color Palette</a>, please bring it to our attention immediately.</p>
        <p>Please put "Correction Request" in your email subject line along with the article title and URL. Include the specific detail that needs review so our editorial staff can cross-check references and make the necessary updates swiftly.</p>
      </section>
      <section>
        <h2>Press, Media and Brand Collaborations</h2>
        <p>We regularly review collections from clothing labels, textile mills and independent design ateliers whose values align with our focus on craftsmanship and enduring personal style in our <a href="/designers-brands">Designers and Brands</a> and <a href="/celebrity">Celebrity</a> departments.</p>
        <p>If you are a public relations representative or brand founder looking to share lookbooks, runway invitations, or interview opportunities with our critics, please email your media materials with the subject line "Press Inquiry" to info.fashiongraviti@gmail.com.</p>
      </section>
      <section>
        <h2>Reader Questions and Response Times</h2>
        <p>We welcome questions about styling dilemmas, wardrobe building and understanding seasonal palettes. Every message sent to our inbox is read and handled personally by our team without automated chatbots or generic canned replies. Our desk reviews reader correspondence Monday through Friday between 9:00 AM and 6:00 PM CET. Please allow 24 to 48 hours for a direct response. Learn more about our team on our <a href="/about">About Us</a> page.</p>
      </section>
    </main>
    ${renderFooterNav(categories, articles)}`;
}

function renderPrivacyBodyHtml(articles, categories) {
  return `
    ${renderHeaderNav(categories, articles)}
    <main>
      <nav aria-label="Breadcrumb"><a href="/">Home</a> &gt; <span>Privacy Policy</span></nav>
      <header>
        <h1>Privacy Policy</h1>
        <p>Transparency, reader trust and data minimization are core to our publishing philosophy. Below is a clear breakdown of how Fashion Graviti handles information across our website.</p>
      </header>
      <section>
        <h2>1. Information We Collect</h2>
        <p>Fashion Graviti collects only the minimum information necessary to operate and improve our editorial platform. When you visit our site, we automatically collect technical information including your IP address, browser type, operating system, pages visited, time spent on pages and referring URLs via standard server logs and analytics tools.</p>
        <p>We use first-party local storage and cookies to remember your preferences, such as bookmarked articles and display layout settings. If you contact us via email at info.fashiongraviti@gmail.com or through our <a href="/contact">Contact Us</a> page, we retain the correspondence including your email address and any content you choose to share. We do not collect payment information or sensitive personal data through our website.</p>
      </section>
      <section>
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to operate and maintain the Fashion Graviti editorial platform, analyze site performance, improve the quality of our editorial content across departments like <a href="/how-to-style">How to Style</a> and <a href="/fashion-trends">Fashion Trends</a>, understand how readers navigate our publication and respond to editorial inquiries. We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
      </section>
      <section>
        <h2>3. Cookies and Tracking Technologies</h2>
        <p>Fashion Graviti uses essential cookies and local storage to save your article bookmarks and reading preferences. We also use anonymized analytics to measure aggregate traffic patterns and understand which articles are most helpful to readers. You can control or disable cookies through your browser settings at any time.</p>
      </section>
      <section>
        <h2>4. Third-Party Services and Data Security</h2>
        <p>Our platform uses Google Fonts for typography, Unsplash and local editorial assets for photography and Vercel for secure global content delivery over HTTPS/TLS encryption. We retain analytics data for up to 14 months and editorial email correspondence only as long as necessary to address your inquiry.</p>
      </section>
      <section>
        <h2>5. Your Privacy Rights (GDPR and CCPA)</h2>
        <p>Depending on your jurisdiction, you have the right to request access to, correction of, or deletion of any personal data we hold about you, as well as the right to object to processing. To exercise these rights, please contact our editorial desk at info.fashiongraviti@gmail.com or review our <a href="/about">About Us</a> and <a href="/terms">Terms and Conditions</a> pages.</p>
      </section>
    </main>
    ${renderFooterNav(categories, articles)}`;
}

function renderTermsBodyHtml(articles, categories) {
  return `
    ${renderHeaderNav(categories, articles)}
    <main>
      <nav aria-label="Breadcrumb"><a href="/">Home</a> &gt; <span>Terms and Conditions</span></nav>
      <header>
        <h1>Terms and Conditions</h1>
        <p>Please read these terms carefully before using Fashion Graviti. These rules govern your access to our editorial articles, photography and digital archives.</p>
      </header>
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using fashiongraviti.com, you agree to be bound by these Terms and Conditions. Fashion Graviti reserves the right to modify these Terms at any time and continued use of the site constitutes acceptance of the revised Terms.</p>
      </section>
      <section>
        <h2>2. Intellectual Property and Copyright</h2>
        <p>All original editorial content published on Fashion Graviti—including articles such as <a href="/hidden-helix-jewelry">Hidden Helix Jewelry</a>, <a href="/types-of-dresses">Types of Dresses</a> and <a href="/soft-summer-color-palette">Soft Summer Color Palette</a>, headlines, subtitles, author biographies and layout design—is protected by copyright and is the exclusive intellectual property of Fashion Graviti Publishing Group.</p>
        <p>You may link to our articles from other websites and quote short excerpts under 50 words for editorial commentary provided that proper attribution to Fashion Graviti with a direct URL link is included. Systematic scraping or reproduction without written consent is prohibited.</p>
      </section>
      <section>
        <h2>3. Use of the Site and Disclaimers</h2>
        <p>You agree to use Fashion Graviti solely for lawful, personal and non-commercial informational purposes. All content across <a href="/fashion-news">Fashion News</a>, <a href="/beauty">Beauty</a> and <a href="/how-to-style">How to Style</a> is provided for general informational and styling purposes only and does not constitute professional medical, dermatological, legal, or financial advice.</p>
      </section>
      <section>
        <h2>4. External Links, Privacy and Governing Law</h2>
        <p>Articles on Fashion Graviti may contain references to external resources for informational context. Your use of Fashion Graviti is also governed by our <a href="/privacy">Privacy Policy</a>. For questions regarding these Terms, permissions, or syndication requests, please reach out via our <a href="/contact">Contact Us</a> page or visit <a href="/about">About Us</a>.</p>
      </section>
    </main>
    ${renderFooterNav(categories, articles)}`;
}

function renderAuthorBodyHtml(author, articles, categories) {
  const authorArticles = articles.filter(
    (a) => getAuthorSlug(a.author.name) === author.slug
  );
  const displayArticles = authorArticles.length > 0 ? authorArticles : articles;

  const listHtml = displayArticles
    .map(
      (a) => `<article>
        <h3><a href="/${a.slug}">${escapeHtml(a.title)}</a></h3>
        <p>${escapeHtml(a.subtitle)}</p>
        <p>${renderInlineMarkdownLinks(a.content.dropCapText)}</p>
        <p>Published in <a href="/${a.category}">${escapeHtml(a.categoryLabel)}</a> • ${escapeHtml(a.publishedAt)}</p>
      </article>`
    )
    .join('\n');

  return `
    ${renderHeaderNav(categories, articles)}
    <main>
      <nav aria-label="Breadcrumb"><a href="/">Home</a> &gt; <a href="/about">Authors</a> &gt; <span>${escapeHtml(author.name)}</span></nav>
      <header>
        <img src="${escapeHtml(author.avatar)}" alt="${escapeHtml(author.name)}" />
        <p>${escapeHtml(author.role)} • ${escapeHtml(author.location)}</p>
        <h1>${escapeHtml(author.name)}</h1>
        <p>${escapeHtml(author.bio)}</p>
      </header>
      <section>
        <h2>Editorial Methodology and Background</h2>
        <p>As ${escapeHtml(author.role)} at Fashion Graviti, ${escapeHtml(author.name)} contributes in-depth reporting, textile evaluations and practical wardrobe analysis. Every feature undergoes strict editorial verification for material accuracy, historical context and wearable styling application across international seasons.</p>
        <p>Readers can explore ${escapeHtml(author.name)}'s latest dispatches below or browse all editorial desks including <a href="/how-to-style">How to Style</a>, <a href="/fashion-trends">Fashion Trends</a>, <a href="/fashion-news">Fashion News</a>, <a href="/celebrity">Celebrity</a>, <a href="/designers-brands">Designers and Brands</a> and <a href="/beauty">Beauty</a>.</p>
      </section>
      <section>
        <h2>${authorArticles.length > 0 ? `Articles by ${escapeHtml(author.name)}` : 'Featured Editorial Archive'}</h2>
        ${listHtml}
      </section>
    </main>
    ${renderFooterNav(categories, articles)}`;
}

function buildHtmlDocument(templateHtml, { title, description, canonicalPath, ogType = 'website', image, schemaGraph, bodyHtml }) {
  const canonicalUrl = canonicalPath === '/' ? `${SITE_DOMAIN}/` : `${SITE_DOMAIN}${canonicalPath}`;
  const rawImg = image || 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85';
  const fullImg = rawImg.startsWith('/') ? `${SITE_DOMAIN}${rawImg}` : rawImg;

  let html = templateHtml;

  // Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);

  // Replace meta name="title"
  html = html.replace(
    /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="title" content="${escapeHtml(title)}" />`
  );

  // Replace meta name="description"
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );

  // Replace canonical link
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${escapeHtml(ogType)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${escapeHtml(fullImg)}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="twitter:url" content="${escapeHtml(canonicalUrl)}" />`
  );
  html = html.replace(
    /<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="twitter:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="twitter:description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta\s+property="twitter:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="twitter:image" content="${escapeHtml(fullImg)}" />`
  );

  // Add dynamic JSON-LD schema if provided
  if (schemaGraph && schemaGraph.length > 0) {
    const schemaJson = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schemaGraph,
    });
    html = html.replace(
      '</head>',
      `  <script id="dynamic-seo-schema" type="application/ld+json">${schemaJson}</script>\n  </head>`
    );
  }

  // Leave <div id="root"></div> completely empty for seamless, flash-free React mounting.
  // Place the static pre-rendered archive right after <div id="root"></div> for search engine crawlers and bots.
  const archiveHtml = `<div id="root"></div>\n    <div id="static-editorial-archive" class="static-editorial-archive">\n${bodyHtml}\n    </div>`;
  html = html.replace('<div id="root"></div>', archiveHtml);

  return html;
}

function writeRouteHtml(routePath, htmlContent) {
  if (routePath === '/') {
    fs.writeFileSync(path.join(DIST_DIR, 'index.html'), htmlContent, 'utf-8');
    return;
  }
  const cleanRoute = routePath.replace(/^\/+|\/+$/g, '');
  const targetDir = path.join(DIST_DIR, cleanRoute);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf-8');
}

function main() {
  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Run vite build first.');
  }
  const templateHtml = fs.readFileSync(templatePath, 'utf-8');
  const { FASHION_CATEGORIES, INITIAL_ARTICLES } = loadArticlesAndCategories();

  let generatedCount = 0;

  // 1. Homepage (/)
  const homeHtml = buildHtmlDocument(templateHtml, {
    title: 'Fashion Graviti | Runway News and Seasonal Style Trends',
    description:
      'Read runway reports, seasonal color palettes and daily wardrobe advice written by independent fashion critics at Fashion Graviti magazine.',
    canonicalPath: '/',
    ogType: 'website',
    bodyHtml: renderHomeBodyHtml(INITIAL_ARTICLES, FASHION_CATEGORIES),
  });
  writeRouteHtml('/', homeHtml);
  generatedCount++;

  // 2. All Articles
  for (const article of INITIAL_ARTICLES) {
    const authorSlug = getAuthorSlug(article.author.name);
    const canonicalUrl = `${SITE_DOMAIN}/${article.slug}`;
    const rawImg = article.coverImage || '';
    const fullImg = rawImg.startsWith('/') ? `${SITE_DOMAIN}${rawImg}` : rawImg;
    const description = article.metaDescription || article.subtitle;
    const schemaGraph = [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_DOMAIN}/` },
          { '@type': 'ListItem', position: 2, name: article.categoryLabel, item: `${SITE_DOMAIN}/${article.category}` },
          { '@type': 'ListItem', position: 3, name: article.title, item: canonicalUrl },
        ],
      },
      {
        '@type': 'NewsArticle',
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        headline: article.title,
        description,
        image: [fullImg],
        datePublished: '2026-10-08T00:00:00+00:00',
        dateModified: '2026-10-08T00:00:00+00:00',
        author: {
          '@type': 'Person',
          name: article.author.name,
          url: `${SITE_DOMAIN}/author/${authorSlug}`,
        },
        publisher: {
          '@type': 'NewsMediaOrganization',
          name: 'Fashion Graviti',
          url: SITE_DOMAIN,
        },
      },
    ];

    if (article.content.faqs && article.content.faqs.length > 0) {
      schemaGraph.push({
        '@type': 'FAQPage',
        mainEntity: article.content.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      });
    }

    const articleHtml = buildHtmlDocument(templateHtml, {
      title: `${article.title} — FASHION GRAVITI`,
      description,
      canonicalPath: `/${article.slug}`,
      ogType: 'article',
      image: article.coverImage,
      schemaGraph,
      bodyHtml: renderArticleBodyHtml(article, INITIAL_ARTICLES, FASHION_CATEGORIES),
    });
    writeRouteHtml(`/${article.slug}`, articleHtml);
    generatedCount++;
  }

  // 3. All Categories
  for (const cat of FASHION_CATEGORIES) {
    if (cat.id === 'all') continue;
    const seo = CATEGORY_SEO[cat.id] || {
      title: `${cat.name} | Fashion Graviti`,
      description: cat.description,
    };
    const catHtml = buildHtmlDocument(templateHtml, {
      title: seo.title,
      description: seo.description,
      canonicalPath: `/${cat.id}`,
      ogType: 'website',
      image: cat.image,
      bodyHtml: renderCategoryBodyHtml(cat, INITIAL_ARTICLES, FASHION_CATEGORIES),
    });
    writeRouteHtml(`/${cat.id}`, catHtml);
    generatedCount++;
  }

  // 4. Static Pages (/about, /contact, /privacy, /terms)
  const staticPages = [
    {
      path: '/about',
      title: 'About Our Editorial Team | Fashion Graviti',
      description:
        'Learn about Fashion Graviti, an independent publication reporting on runway collections, textile craftsmanship and fashion history.',
      bodyHtml: renderAboutBodyHtml(INITIAL_ARTICLES, FASHION_CATEGORIES),
    },
    {
      path: '/contact',
      title: 'Contact Our Editorial Desk | Fashion Graviti',
      description:
        'Reach out to Fashion Graviti editors for article pitches, corrections, press releases, or general reader questions via email today.',
      bodyHtml: renderContactBodyHtml(INITIAL_ARTICLES, FASHION_CATEGORIES),
    },
    {
      path: '/privacy',
      title: 'Privacy Policy | Fashion Graviti Legal',
      description:
        'Read our official privacy statement explaining how Fashion Graviti collects, handles and protects personal reader information.',
      bodyHtml: renderPrivacyBodyHtml(INITIAL_ARTICLES, FASHION_CATEGORIES),
    },
    {
      path: '/terms',
      title: 'Terms and Conditions | Fashion Graviti Legal',
      description:
        'Review the website terms of service, article copyright rules and publication usage policies governing the Fashion Graviti site.',
      bodyHtml: renderTermsBodyHtml(INITIAL_ARTICLES, FASHION_CATEGORIES),
    },
  ];

  for (const sp of staticPages) {
    const spHtml = buildHtmlDocument(templateHtml, {
      title: sp.title,
      description: sp.description,
      canonicalPath: sp.path,
      ogType: 'website',
      bodyHtml: sp.bodyHtml,
    });
    writeRouteHtml(sp.path, spHtml);
    generatedCount++;
  }

  // 5. Author Profile Pages
  for (const author of AUTHORS) {
    const authorPath = `/author/${author.slug}`;
    const authorHtml = buildHtmlDocument(templateHtml, {
      title: `${author.name} — Author Profile | FASHION GRAVITI`,
      description: `Editorial profile and archive of fashion reviews and articles by ${author.name}, ${author.role} at Fashion Graviti.`,
      canonicalPath: authorPath,
      ogType: 'profile',
      image: author.avatar,
      bodyHtml: renderAuthorBodyHtml(author, INITIAL_ARTICLES, FASHION_CATEGORIES),
    });
    writeRouteHtml(authorPath, authorHtml);
    generatedCount++;
  }

  // 6. Generate clean sitemap.xml in both public/ and dist/
  const sitemapUrls = [
    { loc: `${SITE_DOMAIN}/`, lastmod: '2026-10-13', changefreq: 'daily', priority: '1.0' },
    ...INITIAL_ARTICLES.map((a) => ({
      loc: `${SITE_DOMAIN}/${a.slug}`,
      lastmod: '2026-10-13',
      changefreq: 'weekly',
      priority: '0.9',
    })),
    ...FASHION_CATEGORIES.filter((c) => c.id !== 'all').map((c) => ({
      loc: `${SITE_DOMAIN}/${c.id}`,
      lastmod: '2026-10-13',
      changefreq: 'daily',
      priority: '0.8',
    })),
    { loc: `${SITE_DOMAIN}/about`, lastmod: '2026-10-13', changefreq: 'monthly', priority: '0.6' },
    { loc: `${SITE_DOMAIN}/contact`, lastmod: '2026-10-13', changefreq: 'monthly', priority: '0.6' },
    { loc: `${SITE_DOMAIN}/privacy`, lastmod: '2026-10-13', changefreq: 'monthly', priority: '0.4' },
    { loc: `${SITE_DOMAIN}/terms`, lastmod: '2026-10-13', changefreq: 'monthly', priority: '0.4' },
    ...AUTHORS.map((au) => ({
      loc: `${SITE_DOMAIN}/author/${au.slug}`,
      lastmod: '2026-10-13',
      changefreq: 'monthly',
      priority: '0.6',
    })),
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(ROOT_DIR, 'public/sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');

  console.log(`✓ Pre-rendered ${generatedCount} static HTML routes and updated sitemap.xml (${sitemapUrls.length} canonical URLs).`);
}

main();
