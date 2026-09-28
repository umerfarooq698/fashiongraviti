export interface AuthorProfile {
  name: string;
  slug: string;
  role: string;
  avatar: string;
  bio: string;
  instagram?: string;
  twitter?: string;
}

export const AUTHORS_REGISTRY: Record<string, AuthorProfile> = {
  'aurelia-vance-sterling': {
    name: 'Aurelia Vance-Sterling',
    slug: 'aurelia-vance-sterling',
    role: 'Editor-in-Chief and Haute Couture Critic',
    avatar: '/authors/aurelia-vance-sterling.jpg',
    instagram: '@aurelia_vance',
    bio: 'Paris-based editor and couture historian examining Parisian atelier craftsmanship, runway structure, and the legacy of international fashion houses.',
  },
  'julian-thorne-dumont': {
    name: 'Julian Thorne-Dumont',
    slug: 'julian-thorne-dumont',
    role: 'Senior Sartorial and Tailoring Critic',
    avatar: '/authors/julian-thorne-dumont.jpg',
    instagram: '@julian_sartorial',
    bio: 'Milan and Savile Row correspondent focusing on bespoke tailoring, rare natural textiles, cashmere construction, and understated menswear silhouettes.',
  },
  'renata-moreau-kroll': {
    name: 'Renata Moreau-Kroll',
    slug: 'renata-moreau-kroll',
    role: 'Celebrity Style and Red Carpet Columnist',
    avatar: '/authors/renata-moreau-kroll.jpg',
    instagram: '@renata_moreau',
    bio: 'New York and Cannes red carpet analyst tracking celebrity styling partnerships, archival red carpet dressing, and modern gala aesthetics.',
  },
  'soren-lindqvist-kovac': {
    name: 'Soren Lindqvist-Kovac',
    slug: 'soren-lindqvist-kovac',
    role: 'Avant-Garde and Heritage Brand Scholar',
    avatar: '/authors/soren-lindqvist-kovac.jpg',
    instagram: '@soren_fashionarch',
    bio: 'Stockholm-trained design scholar analyzing modernist fashion architecture, Scandinavian minimalism, and sustainable luxury innovation.',
  },
};

// Aliases for historical backwards compatibility
const AUTHOR_ALIASES: Record<string, string> = {
  'eleanora-vane': 'aurelia-vance-sterling',
  'massimo-dellacorte': 'julian-thorne-dumont',
  'kenji-takahashi': 'renata-moreau-kroll',
  'felix-van-der-bilt': 'soren-lindqvist-kovac',
};

export function getAuthorSlug(nameOrSlug: string): string {
  const normalized = nameOrSlug
    .toLowerCase()
    .replace(/^author\//, '')
    .replace(/^author-/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return AUTHOR_ALIASES[normalized] || normalized;
}

export function getAuthorProfile(nameOrSlug: string): AuthorProfile {
  const slug = getAuthorSlug(nameOrSlug);
  if (AUTHORS_REGISTRY[slug]) {
    return AUTHORS_REGISTRY[slug];
  }
  return {
    name: nameOrSlug,
    slug: slug,
    role: 'Independent Fashion Critic',
    avatar: '/authors/aurelia-vance-sterling.jpg',
    bio: 'Contributing fashion journalist and sartorial commentator reporting on contemporary runway showcases and luxury aesthetics.',
  };
}
