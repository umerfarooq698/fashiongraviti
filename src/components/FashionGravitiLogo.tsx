import React from 'react';

interface FashionGravitiLogoProps {
  variant?: 'masthead' | 'compact' | 'footer' | 'emblem';
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * VIP Luxury Emblem Mark for Fashion Graviti
 * Generated with Gemini AI: Interlocking 3D Haute Couture Monogram,
 * Celestial Gravitational Orbit Rings & Brushed Champagne Gold Needle
 */
export const FashionGravitiEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden flex-shrink-0 bg-black ring-1.5 ring-gold/50 shadow-[0_0_20px_rgba(197,157,84,0.35)] transition-all duration-300 hover:ring-gold hover:shadow-[0_0_25px_rgba(197,157,84,0.6)] ${className}`}
      aria-label="Fashion Graviti VIP Emblem"
    >
      <img
        src="/fashion-graviti-logo.jpg"
        alt="Fashion Graviti VIP Emblem"
        width={size}
        height={size}
        className="w-full h-full object-cover select-none pointer-events-none"
        loading="eager"
      />
    </div>
  );
};

export const FashionGravitiLogo: React.FC<FashionGravitiLogoProps> = ({
  variant = 'masthead',
  className = '',
  onClick,
}) => {
  // 1. MASTHEAD VARIANT (Hero presentation in Header)
  if (variant === 'masthead') {
    return (
      <div 
        onClick={onClick}
        className={`group flex flex-col items-center justify-center cursor-pointer select-none transition-transform duration-300 ${className}`}
      >
        {/* VIP AI Generated 3D Logo Showcase */}
        <div className="relative mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-500 ease-out">
          {/* Ambient Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-gold/30 via-crimson/20 to-gold/30 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-gold/60 shadow-[0_0_35px_rgba(197,157,84,0.45)] bg-black">
            <img
              src="/fashion-graviti-logo.jpg"
              alt="Fashion Graviti VIP Haute Couture Logo"
              className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="eager"
            />
          </div>
        </div>

        {/* Brand Logotype Typography */}
        <span className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-[-0.02em] uppercase text-white group-hover:text-gold transition-colors duration-200 drop-shadow-md leading-none">
          FASHION GRAVITI
        </span>

        {/* Subtitle Crest Tag */}
        <div className="mt-2 sm:mt-2.5 flex items-center space-x-3 text-[9px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-gold font-bold">
          <span className="w-6 sm:w-10 h-px bg-gradient-to-r from-transparent to-gold" />
          <span>HAUTE COUTURE ARCHIVE • EST. 2026</span>
          <span className="w-6 sm:w-10 h-px bg-gradient-to-l from-transparent to-gold" />
        </div>
      </div>
    );
  }

  // 2. COMPACT VARIANT (For Top Edition Bar, Mobile Drawers)
  if (variant === 'compact') {
    return (
      <div
        onClick={onClick}
        className={`flex items-center space-x-3 group cursor-pointer select-none ${className}`}
      >
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-1.5 ring-gold/50 shadow-[0_0_12px_rgba(197,157,84,0.35)] flex-shrink-0 bg-black group-hover:scale-105 transition-transform">
          <img
            src="/fashion-graviti-logo.jpg"
            alt="Fashion Graviti VIP Logo"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="font-serif font-black text-sm sm:text-base tracking-wider text-white group-hover:text-gold uppercase transition-colors">
            FASHION GRAVITI
          </span>
          <span className="text-[8px] font-mono tracking-widest text-gold uppercase mt-0.5 font-bold">
            HAUTE RUNWAY
          </span>
        </div>
      </div>
    );
  }

  // 3. FOOTER PUBLISHER CREST VARIANT (Last footer brand crest)
  if (variant === 'footer') {
    return (
      <div
        onClick={onClick}
        className={`flex flex-col items-start group cursor-pointer select-none ${className}`}
      >
        <div className="flex items-center space-x-4 mb-3.5">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden ring-2 ring-gold/60 shadow-[0_0_25px_rgba(197,157,84,0.35)] bg-black flex-shrink-0 group-hover:scale-105 group-hover:ring-gold transition-all duration-300">
            <img
              src="/fashion-graviti-logo.jpg"
              alt="Fashion Graviti VIP Haute Couture Logo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-serif font-black tracking-tight uppercase text-white group-hover:text-gold transition-colors block leading-tight">
              FASHION GRAVITI
            </span>
            <span className="text-[10px] font-mono tracking-[0.25em] text-gold uppercase font-bold block mt-0.5">
              PUBLISHING GROUP & ARCHIVE
            </span>
          </div>
        </div>
        <p className="text-xs font-mono text-zinc-400 leading-relaxed max-w-md uppercase">
          The international fashion authority documenting haute couture craftsmanship, celebrity styling, and contemporary runway design.
        </p>
      </div>
    );
  }

  // 4. EMBLEM ONLY
  return <FashionGravitiEmblem size={48} className={className} />;
};

export default FashionGravitiLogo;
