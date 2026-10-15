import React from 'react';

/**
 * Official Mydhili Haute Couture Logo & Sacred Monogram Crest
 * Uses the authentic brand identity assets provided by Mydhili Atelier:
 * - Sacred Monogram Crest: Architectural 'M' with flowing bridal silk drape, gajra blossom & heirloom jhumka
 * - Logotype: Flared inscriptional Roman serif wordmark 'MYDHILI' with '— BOUTIQUE —' balance subdescriptor
 */
export const MydhiliLogo = ({ 
  variant = 'gold', // 'gold' (official brand metallic) | 'burgundy' | 'white'
  layout = 'full',  // 'full' (crest + wordmark) | 'crest' (monogram only) | 'wordmark'
  height = 54, 
  className = '',
  style = {},
  alt = 'Mydhili Boutique Haute Couture Atelier'
}) => {
  // Resolve image asset paths based on variant and layout
  const getAssetPath = () => {
    if (layout === 'crest') {
      if (variant === 'burgundy') return '/images/mydhili-crest-burgundy.png';
      if (variant === 'white') return '/images/mydhili-crest-white.png';
      return '/images/mydhili-crest-tight.png';
    }
    // Full layout
    if (variant === 'burgundy') return '/images/mydhili-logo-full-burgundy.png';
    if (variant === 'white') return '/images/mydhili-logo-full-white.png';
    return '/images/mydhili-logo-full-tight.png';
  };

  // Intrinsic aspect ratios computed from cropped assets:
  // Full logo lockup: 835 / 640 = 1.305
  // Monogram crest: 775 / 665 = 1.165
  const aspectRatio = layout === 'crest' ? (775 / 665) : (835 / 640);
  const calculatedWidth = Math.round(height * aspectRatio);

  if (layout === 'wordmark') {
    const textColor = variant === 'burgundy' 
      ? 'var(--color-burgundy)' 
      : (variant === 'white' ? 'var(--color-silk)' : 'var(--color-gold)');
    const ruleColor = variant === 'burgundy' 
      ? 'rgba(56, 7, 18, 0.45)' 
      : (variant === 'white' ? 'rgba(250, 247, 242, 0.45)' : 'rgba(212, 175, 55, 0.6)');

    return (
      <div 
        className={`mydhili-wordmark-lockup ${className}`}
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          userSelect: 'none',
          lineHeight: 1,
          ...style
        }}
      >
        <span 
          style={{
            fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif",
            fontSize: `${Math.round(height * 0.62)}px`,
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: textColor,
            paddingLeft: '0.22em' // visually centers tracked text
          }}
        >
          Mydhili
        </span>
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '4px',
            width: '100%'
          }}
        >
          <span style={{ display: 'block', height: '1px', width: '20px', backgroundColor: ruleColor }} />
          <span 
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: `${Math.max(8, Math.round(height * 0.22))}px`,
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: textColor,
              fontWeight: 500,
              paddingLeft: '0.38em'
            }}
          >
            Boutique
          </span>
          <span style={{ display: 'block', height: '1px', width: '20px', backgroundColor: ruleColor }} />
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`mydhili-brand-logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        lineHeight: 0,
        ...style
      }}
    >
      <img 
        src={getAssetPath()} 
        alt={alt}
        height={height}
        width={calculatedWidth}
        style={{
          height: `${height}px`,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
          imageRendering: '-webkit-optimize-contrast'
        }}
      />
    </div>
  );
};

export default MydhiliLogo;
