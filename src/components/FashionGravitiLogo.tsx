import React from 'react';

interface FashionGravitiLogoProps {
  variant?: 'masthead' | 'compact' | 'footer' | 'emblem';
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * VIP Luxury FG Monogram Emblem
 * Generated with Gemini AI: Interlocking FG Monogram with Celestial Gravitational Orbit
 * Light Champagne Gold Edition
 */
export const FashionGravitiEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-105 ${className}`}
      aria-label="Fashion Graviti VIP Emblem"
    >
      <img
        src="/fashion-graviti-emblem.png"
        alt="Fashion Graviti VIP FG Emblem"
        width={size}
        height={size}
        className="w-full h-full object-contain select-none pointer-events-none filter drop-shadow-[0_0_10px_rgba(245,232,200,0.5)]"
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
  // 1. MASTHEAD VARIANT (Hero presentation in Header - Light Champagne Gold)
  if (variant === 'masthead') {
    return (
      <div 
        onClick={onClick}
        className={`group flex flex-col items-center justify-center cursor-pointer select-none transition-transform duration-300 py-1 ${className}`}
      >
        {/* Seamless Luxury Masthead Logo in Light Champagne Gold */}
        <div className="relative flex items-center justify-center w-full max-w-[320px] xs:max-w-[400px] sm:max-w-[560px] md:max-w-[680px] lg:max-w-[760px] transition-transform duration-300 group-hover:scale-[1.02]">
          <img
            src="/fashion-graviti-horizontal.png"
            alt="FASHION GRAVITI"
            className="w-full h-auto object-contain max-h-[75px] xs:max-h-[90px] sm:max-h-[115px] md:max-h-[135px] filter drop-shadow-[0_2px_22px_rgba(245,232,200,0.4)]"
            loading="eager"
          />
        </div>
      </div>
    );
  }

  // 2. COMPACT VARIANT (For Top Edition Bar, Mobile Drawers)
  if (variant === 'compact') {
    return (
      <div
        onClick={onClick}
        className={`flex items-center space-x-2.5 sm:space-x-3 group cursor-pointer select-none ${className}`}
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
          <img
            src="/fashion-graviti-emblem.png"
            alt="Fashion Graviti FG Emblem"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(245,232,200,0.4)]"
            loading="eager"
          />
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="font-serif font-black text-sm sm:text-base tracking-wider text-white group-hover:text-gold uppercase transition-colors">
            FASHION GRAVITI
          </span>
          <span className="text-[8px] font-mono tracking-widest text-zinc-400 uppercase mt-0.5 font-bold">
            EDITORIAL
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
        <div className="flex items-center space-x-3.5 mb-3.5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <img
              src="/fashion-graviti-emblem.png"
              alt="Fashion Graviti FG Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(245,232,200,0.45)]"
              loading="lazy"
            />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-serif font-black tracking-tight uppercase text-white group-hover:text-gold transition-colors block leading-tight">
              FASHION GRAVITI
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase font-semibold block mt-0.5">
              GLOBAL PUBLISHING GROUP • EST. 2026
            </span>
          </div>
        </div>
        <p className="text-xs font-mono text-zinc-400 leading-relaxed max-w-md uppercase">
          The international fashion authority documenting craftsmanship, celebrity styling, and contemporary runway design.
        </p>
      </div>
    );
  }

  // 4. EMBLEM ONLY
  return <FashionGravitiEmblem size={48} className={className} />;
};

export default FashionGravitiLogo;
