import React, { useEffect } from 'react';
import { Sparkles, ShieldCheck, Compass, Award, Feather, Mail, Building2, Scale, BookOpen } from 'lucide-react';
import { getAuthorSlug } from '../data/authors';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onNavigateCategory?: (categoryId: string) => void;
  onSelectAuthor?: (authorName: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateContact,
  onNavigateCategory,
  onSelectAuthor,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const editorialBoard = [
    {
      name: 'Aurelia Vance-Sterling',
      role: 'Editor-in-Chief and Haute Couture Critic',
      location: 'Paris, France',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Paris-based editor and couture historian examining Parisian atelier craftsmanship, runway structure, and the legacy of international fashion houses.',
    },
    {
      name: 'Julian Thorne-Dumont',
      role: 'Senior Sartorial and Tailoring Critic',
      location: 'Milan, Italy',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      bio: 'Milan and Savile Row correspondent focusing on bespoke tailoring, rare natural textiles, cashmere construction, and understated menswear silhouettes.',
    },
    {
      name: 'Renata Moreau-Kroll',
      role: 'Celebrity Style and Red Carpet Columnist',
      location: 'New York and Cannes',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'New York and Cannes red carpet analyst tracking celebrity styling partnerships, archival red carpet dressing, and modern gala aesthetics.',
    },
    {
      name: 'Soren Lindqvist-Kovac',
      role: 'Avant-Garde and Heritage Brand Scholar',
      location: 'Stockholm, Sweden',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      bio: 'Stockholm-trained design scholar analyzing modernist fashion architecture, Scandinavian minimalism, and sustainable luxury innovation.',
    },
  ];

  const editorialPillars = [
    {
      icon: <Feather className="w-6 h-6 text-gold" />,
      title: 'Independent Runway Critique',
      category: 'fashion-news',
      description: 'Firsthand reporting directly from international fashion week shows in Paris, Milan, London, and New York, uninfluenced by commercial bias.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: 'Haute Couture and Atelier Focus',
      category: 'designers-brands',
      description: 'Dedicated examination of artisanal metiers, textile provenance, and bespoke craftsmanship from the world’s leading luxury fashion houses.',
    },
    {
      icon: <Compass className="w-6 h-6 text-gold" />,
      title: 'Trend Intelligence and Forecasting',
      category: 'fashion-trends',
      description: 'Decoding seasonal shifts, silhouette evolutions, and color palettes transitioning from runway presentations to everyday wardrobes.',
    },
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      title: 'Celebrity and Red Carpet Culture',
      category: 'celebrity',
      description: 'Authoritative analysis of iconic red carpet moments, Met Gala couture, styling breakdowns, and archival vintage revivals.',
    },
  ];

  const journalisticStandards = [
    {
      icon: <Scale className="w-5 h-5 text-gold" />,
      title: 'Editorial Independence',
      description: 'We maintain a strict firewall between editorial critiques and commercial advertisements. Garments, collections, and designers featured on Fashion Graviti are chosen purely on artistic merit and cultural relevance.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold" />,
      title: 'Factual Accuracy and Provenance',
      description: 'Our writers and editors verify fabric compositions, collection season histories, designer credits, and runway dates prior to publication. Errors are corrected promptly with full transparency.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-gold" />,
      title: 'Original Commentary and Insight',
      description: 'Every article reflects genuine perspective, historical fashion context, and professional analysis from writers with deep domain experience in luxury fashion and textile arts.',
    },
    {
      icon: <Mail className="w-5 h-5 text-gold" />,
      title: 'Reader Feedback and Accountability',
      description: 'We welcome inquiries, feedback, and corrections directly from readers, designers, and industry professionals at info.fashiongraviti@gmail.com.',
    },
  ];

  const bureaus = [
    {
      city: 'PARIS',
      address: 'Place Vendôme, 75001 Paris, France',
      focus: 'Haute Couture and Heritage Luxury Houses',
    },
    {
      city: 'MILAN',
      address: 'Via Montenapoleone, 20121 Milano, Italy',
      focus: 'Menswear, Cashmere, and Tailoring Ateliers',
    },
    {
      city: 'NEW YORK',
      address: 'Madison Avenue, New York, NY 10022, USA',
      focus: 'Celebrity Styling and Red Carpet Culture',
    },
    {
      city: 'TOKYO',
      address: 'Shibuya-ku, Tokyo 150-0001, Japan',
      focus: 'Avant-Garde Design and Textile Engineering',
    },
  ];

  return (
    <div className="w-full bg-noir text-white animate-fadeIn">
      {/* Hero Header Section */}
      <section className="relative border-b-2 border-white/20 bg-noir-pure py-12 sm:py-16 md:py-24 px-3.5 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 bg-black border border-gold/40 text-gold text-[11px] sm:text-xs font-mono uppercase tracking-widest font-extrabold mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
            <span>ABOUT FASHION GRAVITI</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white leading-[1.12] sm:leading-[1.1] uppercase">
            The Independent Authority on Global Fashion and Runway Critique
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl font-editorial italic text-zinc-200 max-w-3xl mx-auto leading-relaxed">
            "We document the intersection of haute couture craftsmanship, contemporary street culture, and revolutionary runway design with uncompromising editorial integrity."
          </p>
        </div>
      </section>

      {/* Manifesto and Origin Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-gold uppercase tracking-widest font-bold block mb-2">
              OUR MISSION
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase tracking-tight">
              A Modern Standard for Fashion Journalism
            </h2>
          </div>

          <div className="md:col-span-8 space-y-5 text-base sm:text-lg font-sans text-zinc-200 leading-relaxed font-medium">
            <p className="drop-cap text-xl sm:text-2xl text-white font-semibold leading-relaxed">
              Founded in 2026, <strong>FASHION GRAVITI</strong> was established to bring critical rigor, textile analysis, and aesthetic reverence back to modern fashion publishing.
            </p>
            <p>
              In a digital environment saturated with superficial noise and fast-fashion consumerism, Fashion Graviti serves as an independent publication for discerning individuals who appreciate the artistry, history, and craft of tailoring. Our correspondents attend premier runway showcases from Paris to Tokyo, reporting directly on the collections, designers, and cultural movements shaping modern luxury.
            </p>
            <p>
              Every critique, review, and trend dispatch published on our platform adheres to strict journalistic principles, providing readers with accurate analysis, practical wardrobe guidance, and authentic sartorial critique.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Scope Pillars */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-gold uppercase tracking-widest font-bold block mb-2">
            EDITORIAL COVERAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black uppercase text-white">
            What We Document
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {editorialPillars.map((pillar, idx) => (
            <a
              key={idx}
              href={`/${pillar.category}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigateCategory?.(pillar.category);
              }}
              className="p-6 bg-noir-card border-2 border-white/15 hover:border-gold transition-all duration-300 flex flex-col justify-between cursor-pointer no-underline group block"
              title={`Explore ${pillar.title}`}
            >
              <div>
                <div className="p-3 bg-black border border-white/20 group-hover:border-gold w-fit mb-4 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold uppercase mb-2 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-zinc-300 font-medium leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <span className="mt-4 text-[11px] font-mono text-gold uppercase tracking-wider font-extrabold group-hover:underline inline-flex items-center gap-1">
                Explore Department →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Journalistic Integrity and E-E-A-T Standards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-gold uppercase tracking-widest font-bold block mb-2">
            TRUST AND TRANSPARENCY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black uppercase text-white">
            Our Journalistic Standards
          </h2>
          <p className="text-xs font-mono text-zinc-400 mt-2 uppercase tracking-wider">
            Built on editorial rigor, verified sourcing, and complete independence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {journalisticStandards.map((standard, idx) => (
            <div key={idx} className="p-6 bg-noir-card border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-black border border-white/20">
                  {standard.icon}
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-white uppercase">
                  {standard.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-sans text-zinc-300 font-medium leading-relaxed">
                {standard.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Masthead and Authors */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-gold uppercase tracking-widest font-bold block mb-2">
            MASTHEAD AND CRITICS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black uppercase text-white">
            The Editorial Board
          </h2>
          <p className="text-xs font-mono text-zinc-400 mt-2 uppercase tracking-wider">
            Fashion critics and historians stationed across major fashion capitals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {editorialBoard.map((member, idx) => (
            <a
              key={idx}
              href={`/author/${getAuthorSlug(member.name)}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectAuthor?.(member.name);
              }}
              className="bg-noir-card border border-white/20 p-5 flex flex-col items-center text-center group hover:border-gold transition-all no-underline cursor-pointer block"
              title={`View ${member.name}'s author profile`}
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-gold mb-4 group-hover:scale-105 transition-transform"
              />
              <h4 className="text-base font-serif font-black uppercase text-white group-hover:text-gold transition-colors">
                {member.name}
              </h4>
              <p className="text-xs font-mono text-gold uppercase font-bold mt-0.5">
                {member.role}
              </p>
              <p className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">
                {member.location}
              </p>
              <p className="text-xs text-zinc-300 font-sans mt-3 leading-relaxed">
                {member.bio}
              </p>
              <span className="mt-4 text-[11px] font-mono text-gold uppercase tracking-wider font-extrabold group-hover:underline inline-flex items-center gap-1">
                View Author Profile →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Global Bureaux and Contact Details */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-gold uppercase tracking-widest font-bold block mb-2">
            GLOBAL PRESENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black uppercase text-white">
            Editorial Bureaux and Desks
          </h2>
          <p className="text-xs font-mono text-zinc-400 mt-2 uppercase tracking-wider">
            Our teams operate across four key luxury fashion hubs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bureaus.map((bureau, idx) => (
            <div key={idx} className="p-6 bg-noir-card border border-white/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-gold font-mono text-xs font-black uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4 text-gold" />
                  <span>{bureau.city} BUREAU</span>
                </div>
                <p className="text-xs font-mono text-white mb-2">
                  {bureau.address}
                </p>
                <p className="text-xs font-sans text-zinc-400 leading-relaxed">
                  {bureau.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact and Direct Channel */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="p-8 sm:p-12 bg-noir-card border-2 border-white/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-gold font-bold mb-2">
              <Mail className="w-4 h-4 text-gold" />
              <span>DIRECT EDITORIAL CONTACT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase">
              Get in Touch with Our Newsroom
            </h3>
            <p className="text-sm font-sans text-zinc-300 mt-2 leading-relaxed font-medium">
              For story pitches, press credentials, corrections, and editorial feedback, email our central newsroom desk directly:
            </p>
            <a
              href="mailto:info.fashiongraviti@gmail.com"
              className="mt-3 inline-block font-mono text-base sm:text-lg text-gold hover:text-white font-bold transition-colors underline"
            >
              info.fashiongraviti@gmail.com
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
            <button
              onClick={onNavigateContact}
              className="px-6 py-3 bg-white text-black hover:bg-gold hover:text-black font-mono text-xs uppercase tracking-widest font-black transition-all text-center cursor-pointer shadow-lg"
            >
              Contact Newsroom
            </button>
            <button
              onClick={onNavigateHome}
              className="px-6 py-3 border-2 border-white/30 text-white hover:border-gold hover:text-gold font-mono text-xs uppercase tracking-widest font-black transition-all text-center cursor-pointer"
            >
              Front Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
