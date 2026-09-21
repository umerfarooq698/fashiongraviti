import React from 'react';

interface FashionGravitiLogoProps {
  variant?: 'masthead' | 'compact' | 'footer' | 'emblem';
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * VIP Luxury Emblem Mark for Fashion Graviti
 * Concept: Celestial Gravitational Orbit intersecting with Haute Couture Needle & Diamond Monogram
 */
export const FashionGravitiEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${className}`}
      aria-label="Fashion Graviti VIP Emblem"
    >
      <defs>
        {/* Luxury Liquid Gold Gradient */}
        <linearGradient id="fgGoldPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D1" />
          <stop offset="25%" stopColor="#E2C17D" />
          <stop offset="60%" stopColor="#C59D54" />
          <stop offset="85%" stopColor="#8C6627" />
          <stop offset="100%" stopColor="#5E4315" />
        </linearGradient>

        {/* Shimmer Light Gold */}
        <linearGradient id="fgGoldShimmer" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9E7835" />
          <stop offset="40%" stopColor="#EAD096" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="65%" stopColor="#CFA75C" />
          <stop offset="100%" stopColor="#876020" />
        </linearGradient>

        {/* Haute Couture Crimson Spark Accent */}
        <linearGradient id="fgCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BA1B29" />
          <stop offset="100%" stopColor="#630C14" />
        </linearGradient>

        {/* Ambient Dark Luxury Shield */}
        <radialGradient id="fgBackglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C59D54" stopOpacity="0.2" />
          <stop offset="70%" stopColor="#09090B" stopOpacity="0.0" />
        </radialGradient>
      </defs>

      {/* Subtle Atmospheric Backglow */}
      <circle cx="60" cy="60" r="56" fill="url(#fgBackglow)" />

      {/* Outer Geometric Faceted Diamond Ring */}
      <polygon
        points="60,6 114,60 60,114 6,60"
        fill="none"
        stroke="url(#fgGoldPrimary)"
        strokeWidth="1"
        strokeOpacity="0.35"
        strokeDasharray="2 3"
      />

      {/* Celestial Gravitational Orbit Ring 1 (Tilted -28deg) */}
      <ellipse
        cx="60"
        cy="60"
        rx="50"
        ry="18"
        transform="rotate(-28 60 60)"
        fill="none"
        stroke="url(#fgGoldPrimary)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />

      {/* Celestial Gravitational Orbit Ring 2 (Tilted 35deg - Interlocking) */}
      <ellipse
        cx="60"
        cy="60"
        rx="47"
        ry="16"
        transform="rotate(35 60 60)"
        fill="none"
        stroke="url(#fgGoldShimmer)"
        strokeWidth="1.25"
        strokeOpacity="0.8"
      />

      {/* Orbit Satellite Sparks (Celestial Bodies in Gravitational Pull) */}
      <circle cx="18" cy="40" r="2.2" fill="url(#fgGoldShimmer)" />
      <circle cx="102" cy="80" r="2.2" fill="url(#fgGoldShimmer)" />
      <circle cx="94" cy="36" r="1.6" fill="#FFFFFF" />
      <circle cx="26" cy="84" r="1.6" fill="url(#fgCrimson)" />

      {/* Concentric Precision Inner Circle */}
      <circle
        cx="60"
        cy="60"
        r="32"
        fill="none"
        stroke="url(#fgGoldPrimary)"
        strokeWidth="0.8"
        strokeOpacity="0.5"
      />

      {/* Central Interlocking Monogram: F & G Haute Couture Silhouette */}
      <g id="monogram" transform="translate(60, 60)">
        {/* Stylized "G" sweeping arc (left & bottom to center crossbar) */}
        <path
          d="M 12 -18 
             C 4 -26, -14 -26, -22 -14 
             C -30 -2, -30 14, -20 22 
             C -10 30, 10 30, 20 18 
             C 24 14, 25 8, 25 2 
             L 0 2"
          fill="none"
          stroke="url(#fgGoldPrimary)"
          strokeWidth="3.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />

        {/* Stylized "F" (Architectural vertical stem + sharp haute couture wings) */}
        <path
          d="M -6 -23 L -6 23"
          stroke="url(#fgGoldShimmer)"
          strokeWidth="3.2"
          strokeLinecap="square"
        />
        {/* F Upper Bar */}
        <path
          d="M -6 -21 L 18 -21"
          stroke="url(#fgGoldShimmer)"
          strokeWidth="3"
          strokeLinecap="square"
        />
        {/* F Mid Bar */}
        <path
          d="M -6 -5 L 12 -5"
          stroke="url(#fgGoldPrimary)"
          strokeWidth="2.5"
          strokeLinecap="square"
        />

        {/* Center Diamond Starburst ✦ (The Haute Couture Guiding Star) */}
        <path
          d="M 0,-14 Q 0,0 -14,0 Q 0,0 0,14 Q 0,0 14,0 Q 0,0 0,-14 Z"
          fill="url(#fgGoldShimmer)"
          transform="translate(18, -12) scale(0.65)"
        />

        {/* Micro Diamond Center Core */}
        <polygon
          points="0,-3 3,0 0,3 -3,0"
          fill="#FFFFFF"
          transform="translate(18, -12)"
        />
      </g>

      {/* Cardinal Alignment Prongs (Haute Horlogerie / Diamond Mount points) */}
      <line x1="60" y1="12" x2="60" y2="18" stroke="url(#fgGoldPrimary)" strokeWidth="1.5" />
      <line x1="60" y1="102" x2="60" y2="108" stroke="url(#fgGoldPrimary)" strokeWidth="1.5" />
      <line x1="12" y1="60" x2="18" y2="60" stroke="url(#fgGoldPrimary)" strokeWidth="1.5" />
      <line x1="102" y1="60" x2="108" y2="60" stroke="url(#fgGoldPrimary)" strokeWidth="1.5" />
    </svg>
  );
};

export const FashionGravitiLogo: React.FC<FashionGravitiLogoProps> = ({
  variant = 'masthead',
  className = '',
  onClick,
}) => {
  // 1. MASTHEAD VARIANT (Hero presentation on Homepage and Header)
  if (variant === 'masthead') {
    return (
      <div 
        onClick={onClick}
        className={`group flex flex-col items-center justify-center cursor-pointer select-none transition-transform duration-300 ${className}`}
      >
        {/* Top Emblem with luxury hover pulse */}
        <div className="relative mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform duration-500 ease-out">
          <FashionGravitiEmblem size={68} className="sm:w-[78px] sm:h-[78px] drop-shadow-[0_0_15px_rgba(197,157,84,0.35)]" />
        </div>

        {/* Logotype Headline with Gradient & Razor Sharp Serif */}
        <span className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-[-0.02em] uppercase text-white group-hover:text-gold transition-colors duration-200 drop-shadow-md leading-none">
          FASHION GRAVITI
        </span>

        {/* Subtitle Monogram Label */}
        <div className="mt-2 sm:mt-2.5 flex items-center space-x-3 text-[9px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-gold font-bold">
          <span className="w-6 sm:w-10 h-px bg-gradient-to-r from-transparent to-gold" />
          <span>HAUTE COUTURE ARCHIVE • EST. 2026</span>
          <span className="w-6 sm:w-10 h-px bg-gradient-to-l from-transparent to-gold" />
        </div>
      </div>
    );
  }

  // 2. COMPACT VARIANT (For Top Edition Bar, Drawers, Reader)
  if (variant === 'compact') {
    return (
      <div
        onClick={onClick}
        className={`flex items-center space-x-2.5 group cursor-pointer select-none ${className}`}
      >
        <FashionGravitiEmblem size={30} className="group-hover:rotate-6 transition-transform" />
        <div className="flex flex-col text-left leading-none">
          <span className="font-serif font-black text-sm sm:text-base tracking-wider text-white group-hover:text-gold uppercase transition-colors">
            FASHION GRAVITI
          </span>
          <span className="text-[8px] font-mono tracking-widest text-gold uppercase mt-0.5">
            HAUTE RUNWAY
          </span>
        </div>
      </div>
    );
  }

  // 3. FOOTER PUBLISHER CREST VARIANT (Comprehensive Luxury Colophon)
  if (variant === 'footer') {
    return (
      <div
        onClick={onClick}
        className={`flex flex-col items-start group cursor-pointer select-none ${className}`}
      >
        <div className="flex items-center space-x-3.5 mb-3">
          <FashionGravitiEmblem size={52} className="group-hover:scale-105 transition-transform drop-shadow-[0_0_12px_rgba(197,157,84,0.3)]" />
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
