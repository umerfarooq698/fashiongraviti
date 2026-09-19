import React, { useEffect } from 'react';
import { Sparkles, ShieldCheck, Compass, Award, Feather } from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onNavigateCategory?: (categoryId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateContact,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const editorialBoard = [
    {
      name: 'Eleanora Vane',
      role: 'Chief Fashion Editor',
      location: 'Paris',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      bio: 'Former Vogue and L’Officiel contributor with 15 years presiding over Paris Haute Couture and Milan fashion weeks.',
    },
    {
      name: 'Julian Sterling',
      role: 'Head of Runway Critique',
      location: 'London',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bio: 'Specialist in tailoring architecture, silhouette evolutions, and contemporary British luxury tailoring.',
    },
    {
      name: 'Aurelia Vance',
      role: 'Haute Couture & Heritage Director',
      location: 'Milan',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      bio: 'Archival scholar documenting historical atelier techniques, Italian craftsmanship, and high jewelry provenance.',
    },
    {
      name: 'Marcus Thorne',
      role: 'Culture & Streetwear Editor',
      location: 'Tokyo',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      bio: 'Chronicling avant-garde Japanese aesthetics, biomaterial textile sciences, and cyber-luxe street silhouettes.',
    },
  ];

  const pillars = [
    {
      icon: <Feather className="w-6 h-6 text-gold" />,
      title: 'Independent Fashion Journalism',
      description: 'Uncompromising runway critique, analytical fashion week dispatches, and in-depth profiles untouched by commercial compromises.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: 'Haute Couture & Atelier Focus',
      description: 'Celebrating master craftsmanship, textile innovation, and heritage houses shaping the pinnacle of global luxury.',
    },
    {
      icon: <Compass className="w-6 h-6 text-gold" />,
      title: 'Trend Intelligence & Forecasting',
      description: 'Decoding seasonal shifts, silhouette revolutions, and aesthetic currents moving from runway showcases to everyday style.',
    },
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      title: 'Celebrity & Red Carpet Culture',
      description: 'Authoritative analysis of iconic red carpet moments, Met Gala couture, award season styling, and celebrity wardrobes.',
    },
  ];

  return (
    <div className="w-full bg-noir text-white animate-fadeIn">
      {/* Hero Section */}
      <section className="relative border-b-2 border-white/20 bg-noir-pure py-16 md:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black border border-gold/40 text-gold text-xs font-mono uppercase tracking-widest font-extrabold mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>ABOUT FASHION GRAVITI</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white leading-[1.1] uppercase">
            The Definitive Authority on High Fashion & Runway Culture
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-editorial italic text-zinc-200 max-w-3xl mx-auto leading-relaxed">
            "We document the intersection of haute couture craftsmanship, contemporary street culture, and revolutionary runway design with uncompromising editorial integrity."
          </p>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-16 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-gold uppercase tracking-widest font-bold block mb-2">
              OUR MANIFESTO
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase tracking-tight">
              A New Era of Sartorial Critique
            </h2>
          </div>

          <div className="md:col-span-8 space-y-5 text-base sm:text-lg font-sans text-zinc-200 leading-relaxed font-medium">
            <p className="drop-cap text-xl sm:text-2xl text-white font-semibold leading-relaxed">
              Founded in 2026, <strong>FASHION GRAVITI</strong> was established to restore depth, aesthetic reverence, and critical rigor to digital fashion journalism.
            </p>
            <p>
              In an era of fleeting micro-trends and surface-level soundbites, we stand as a dedicated digital sanctuary for true sartorial connoisseurs. From the historic Grand Palais ateliers in Paris to the avant-garde underground studios of Tokyo, our editorial correspondents deliver firsthand perspectives on the creators and collections shaping modern luxury.
            </p>
            <p>
              Every essay, monograph, and review published on Fashion Graviti undergoes meticulous curation by seasoned fashion critics, textile researchers, and visual directors committed to honoring the artistry of dress.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Pillars Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-gold uppercase tracking-widest font-bold block mb-2">
            EDITORIAL SCOPE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black uppercase text-white">
            What We Document
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 bg-noir-card border-2 border-white/15 hover:border-gold transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-black border border-white/20 w-fit mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-white uppercase mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-zinc-300 font-medium leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Board / Team Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-gold uppercase tracking-widest font-bold block mb-2">
            MASTHEAD & CRITICS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black uppercase text-white">
            The Editorial Board
          </h2>
          <p className="text-xs font-mono text-zinc-400 mt-2 uppercase tracking-wider">
            Correspondents stationed across Paris, London, Milan, and Tokyo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {editorialBoard.map((member, idx) => (
            <div
              key={idx}
              className="bg-noir-card border border-white/20 p-5 flex flex-col items-center text-center group hover:border-gold transition-all"
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
              <p className="text-xs text-zinc-300 font-sans mt-3 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Standards & Ethics Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="p-8 sm:p-12 bg-noir-card border-2 border-white/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-gold font-bold mb-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>EDITORIAL INTEGRITY GUARANTEE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase">
              Independent. Rigorous. Unfiltered.
            </h3>
            <p className="text-sm font-sans text-zinc-300 mt-2 leading-relaxed font-medium">
              We maintain strict separation between editorial critique and commercial partnerships. Our reviews reflect authentic sartorial evaluation by dedicated fashion scholars.
            </p>
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
              Explore Feed
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
