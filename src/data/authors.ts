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
  'eleanora-vane': {
    name: 'Eleanora Vane',
    slug: 'eleanora-vane',
    role: 'Chief Fashion Editor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    instagram: '@eleanoravane_edit',
    bio: 'Senior fashion critic and editor with 15 years presiding over Paris Haute Couture and Milan fashion weeks, specializing in architectural tailoring, runway dispatches, and atelier crafts.',
  },
  'massimo-dellacorte': {
    name: 'Massimo Dellacorte',
    slug: 'massimo-dellacorte',
    role: 'Senior Style Editor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    instagram: '@massimo_tessile',
    bio: 'Milan-based menswear scholar and tailoring critic documenting quiet luxury, rare cashmere fibers, and seasonal wardrobe proportions.',
  },
  'kenji-takahashi': {
    name: 'Kenji Takahashi',
    slug: 'kenji-takahashi',
    role: 'Celebrity and Culture Editor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    instagram: '@kenji_archive_tokyo',
    bio: 'Archival fashion curator and culture correspondent reporting on celebrity red carpet iconography and avant-garde street style across Tokyo and New York.',
  },
  'felix-van-der-bilt': {
    name: 'Felix Van Der Bilt',
    slug: 'felix-van-der-bilt',
    role: 'Brand Historian and Critic',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    instagram: '@felix_form_lab',
    bio: 'Antwerp-trained design critic exploring the structural history, atelier craftsmanship, and timeless legacies of iconic luxury fashion houses.',
  },
};

export function getAuthorSlug(nameOrSlug: string): string {
  return nameOrSlug
    .toLowerCase()
    .replace(/^author\//, '')
    .replace(/^author-/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
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
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Contributing fashion journalist and sartorial commentator reporting on contemporary runway showcases and luxury aesthetics.',
  };
}
