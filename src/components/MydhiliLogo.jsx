import React from 'react';

/**
 * Official Mydhili Monogram & Wordmark SVG
 * Designed precisely according to brand identity guidelines:
 * - Architectural Serif Stem on left
 * - Cascading Drapes & Hair curving inwards mimicking silk pallu
 * - Five-petal Jasmine Blossom (Gajra) crown cluster
 * - Heirloom dangling Jhumka bell earring
 * - High-contrast serif wordmark with flared 'M' leg
 * - Wide-tracked sans-serif 'BOUTIQUE' flanked by hairline balance rules
 */
export const MydhiliLogo = ({ 
  variant = 'gold', // 'gold' | 'burgundy' | 'white' | 'dark'
  layout = 'full',  // 'full' (crest + wordmark) | 'crest' | 'wordmark'
  height = 54, 
  className = '' 
}) => {
  const colors = {
    gold: {
      primary: '#D4AF37',
      accent: '#E5C352',
      rule: 'rgba(212, 175, 55, 0.6)',
      text: '#D4AF37'
    },
    burgundy: {
      primary: '#380712',
      accent: '#5a0c1e',
      rule: 'rgba(56, 7, 18, 0.4)',
      text: '#380712'
    },
    white: {
      primary: '#FAF7F2',
      accent: '#FFFFFF',
      rule: 'rgba(250, 247, 242, 0.4)',
      text: '#FAF7F2'
    },
    dark: {
      primary: '#2D2325',
      accent: '#453639',
      rule: 'rgba(45, 35, 37, 0.3)',
      text: '#2D2325'
    }
  };

  const c = colors[variant] || colors.gold;

  if (layout === 'crest') {
    return (
      <svg 
        width={height * 1.1} 
        height={height} 
        viewBox="0 0 120 110" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Mydhili Sacred Monogram Crest"
      >
        <g id="sacred-monogram-crest">
          {/* Jasmine Blossom (Gajra) crown top */}
          <g id="jasmine-blossom" fill={c.primary}>
            <circle cx="68" cy="14" r="3.2" />
            <circle cx="63" cy="18" r="2.8" />
            <circle cx="73" cy="18" r="2.8" />
            <circle cx="60" cy="24" r="2.4" />
            <circle cx="76" cy="24" r="2.4" />
            <circle cx="68" cy="21" r="2" fill={c.accent} />
          </g>

          {/* Architectural Left Serif Stem */}
          <path 
            d="M 28 32 H 42 M 35 32 V 88 M 26 88 H 44" 
            stroke={c.primary} 
            strokeWidth="3.2" 
            strokeLinecap="round" 
          />
          {/* Decorative left serif finial */}
          <path d="M 27 34 C 33 34 35 30 35 24" stroke={c.primary} strokeWidth="2.2" strokeLinecap="round" />

          {/* Cascading Bridal Pallu Drapes forming the 'M' diagonal arches */}
          <path 
            d="M 35 34 C 44 48 54 68 62 82 C 70 62 80 44 88 34" 
            stroke={c.primary} 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            fill="none" 
          />

          {/* Second draped swoosh with lustrous sweep */}
          <path 
            d="M 36 46 C 47 58 57 76 62 88 C 68 76 77 56 87 46" 
            stroke={c.accent} 
            strokeWidth="1.6" 
            opacity="0.85"
            fill="none" 
          />

          {/* Right architectural arch with majestic flared leg */}
          <path 
            d="M 88 34 V 78 C 88 84 92 88 98 88" 
            stroke={c.primary} 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            fill="none"
          />

          {/* Heirloom Dangling Jhumka (Bell earring under central arch) */}
          <g id="heirloom-jhumka" stroke={c.primary} strokeWidth="1.4">
            {/* Hanging chain */}
            <line x1="62" y1="44" x2="62" y2="52" />
            {/* Jhumka dome cap */}
            <path d="M 57 55 C 57 52 67 52 67 55 Z" fill={c.primary} />
            {/* Bell bottom beads */}
            <circle cx="58" cy="58" r="0.9" fill={c.primary} />
            <circle cx="62" cy="59" r="1.1" fill={c.accent} />
            <circle cx="66" cy="58" r="0.9" fill={c.primary} />
          </g>
        </g>
      </svg>
    );
  }

  // Full Lockup: Crest + Wordmark + Clearances
  return (
    <div 
      className={`mydhili-brand-lockup ${className}`} 
      style={{ 
        display: 'inline-flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textDecoration: 'none',
        userSelect: 'none',
        gap: '2px'
      }}
    >
      {/* Monogram Crest */}
      <svg 
        width={height * 0.72} 
        height={height * 0.65} 
        viewBox="0 0 120 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        {/* Gajra */}
        <g fill={c.primary}>
          <circle cx="68" cy="12" r="3" />
          <circle cx="63" cy="16" r="2.6" />
          <circle cx="73" cy="16" r="2.6" />
          <circle cx="60" cy="22" r="2.2" />
          <circle cx="76" cy="22" r="2.2" />
        </g>
        {/* Left serif stem */}
        <line x1="28" y1="28" x2="42" y2="28" stroke={c.primary} strokeWidth="3" strokeLinecap="round" />
        <line x1="35" y1="28" x2="35" y2="82" stroke={c.primary} strokeWidth="3.2" strokeLinecap="round" />
        <line x1="27" y1="82" x2="43" y2="82" stroke={c.primary} strokeWidth="3" strokeLinecap="round" />
        {/* Center swooshes */}
        <path d="M 35 30 C 45 46 54 66 62 80 C 70 60 79 42 87 30" stroke={c.primary} strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 36 42 C 46 54 55 72 62 84 C 68 72 76 52 86 42" stroke={c.accent} strokeWidth="1.5" opacity="0.8" fill="none" />
        {/* Right stem with flared leg */}
        <path d="M 87 30 V 74 C 87 80 91 84 97 84" stroke={c.primary} strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Jhumka */}
        <line x1="62" y1="40" x2="62" y2="48" stroke={c.primary} strokeWidth="1.3" />
        <path d="M 57 51 C 57 48 67 48 67 51 Z" fill={c.primary} stroke={c.primary} strokeWidth="1" />
        <circle cx="58" cy="54" r="0.9" fill={c.primary} />
        <circle cx="62" cy="55" r="1.1" fill={c.accent} />
        <circle cx="66" cy="54" r="0.9" fill={c.primary} />
      </svg>

      {/* MYDHILI Wordmark */}
      <div 
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: `${Math.max(18, height * 0.44)}px`,
          fontWeight: 600,
          color: c.text,
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          lineHeight: 1.1,
          marginTop: '-2px',
          paddingLeft: '0.24em' /* Compensates for letterSpacing on centering */
        }}
      >
        Mydhili
      </div>

      {/* Flanked Hairline Rules & BOUTIQUE Sub-descriptor */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          width: '100%',
          justifyContent: 'center',
          marginTop: '1px'
        }}
      >
        <div style={{ height: '0.75px', width: '22px', backgroundColor: c.rule }} />
        <span 
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: `${Math.max(8, height * 0.16)}px`,
            fontWeight: 500,
            letterSpacing: '0.34em',
            color: c.text,
            textTransform: 'uppercase',
            opacity: 0.9,
            paddingLeft: '0.34em'
          }}
        >
          Boutique
        </span>
        <div style={{ height: '0.75px', width: '22px', backgroundColor: c.rule }} />
      </div>
    </div>
  );
};

export default MydhiliLogo;
