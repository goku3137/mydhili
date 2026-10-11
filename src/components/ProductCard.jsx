import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, Eye, ShoppingBag, Sparkles } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const { viewProduct, addToCart, isInWishlist, toggleWishlist } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const isWishlisted = isInWishlist(product.id);

  // Fallback secondary image for hover transition
  const primaryImg = product.images[0];
  const secondaryImg = product.images[1] || product.images[0];

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: '#FFFFFF',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease',
        border: '1px solid var(--color-silk-border)'
      }}
    >
      {/* Product Image Frame */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '135%', // Elegant portrait ratio 4:5.4
          overflow: 'hidden',
          backgroundColor: '#f3eee6',
          cursor: 'pointer'
        }}
        onClick={() => viewProduct(product.id)}
      >
        {/* Primary Image */}
        <img 
          src={primaryImg} 
          alt={product.name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.6s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            opacity: isHovered && product.images[1] ? 0 : 1,
            transform: isHovered ? 'scale(1.04)' : 'scale(1)'
          }}
          loading="lazy"
        />

        {/* Hover Secondary Image */}
        {product.images[1] && (
          <img 
            src={secondaryImg} 
            alt={`${product.name} alternate view`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.6s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'scale(1.04)' : 'scale(1.08)'
            }}
            loading="lazy"
          />
        )}

        {/* Badge (Atelier Heirloom / Master Weaver / Made to Order) */}
        {product.badge && (
          <div 
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: 'rgba(56, 7, 18, 0.92)',
              color: 'var(--color-gold)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              backdropFilter: 'blur(4px)',
              zIndex: 2
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label="Add to Wishlist"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.2s, transform 0.2s',
            zIndex: 3
          }}
        >
          <Heart 
            size={17} 
            color={isWishlisted ? 'var(--color-burgundy)' : 'var(--color-onyx)'}
            fill={isWishlisted ? 'var(--color-burgundy)' : 'transparent'}
          />
        </button>

        {/* Quick Action Overlay (Slide up on hover) */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(56, 7, 18, 0.85)',
            backdropFilter: 'blur(4px)',
            padding: '12px',
            display: 'flex',
            gap: '8px',
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 3
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => viewProduct(product.id)}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              color: 'var(--color-silk)',
              border: '1px solid var(--color-gold)',
              padding: '8px 12px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <Eye size={14} color="var(--color-gold)" /> Quick View
          </button>
          <button
            onClick={() => addToCart(product, product.availableSizes[0] || 'Free Size')}
            style={{
              flex: 1,
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-burgundy)',
              border: '1px solid var(--color-gold)',
              padding: '8px 12px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <ShoppingBag size={14} /> Add to Bag
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div 
        style={{
          padding: '18px 16px 20px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
          borderTop: '1px solid var(--color-silk-border)'
        }}
      >
        <div>
          <div 
            style={{
              fontSize: '0.68rem',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-gulabi)',
              marginBottom: '6px',
              fontWeight: 600
            }}
          >
            {product.category}
          </div>

          <h3 
            onClick={() => viewProduct(product.id)}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.18rem',
              color: 'var(--color-burgundy)',
              cursor: 'pointer',
              lineHeight: 1.3,
              marginBottom: '6px'
            }}
          >
            {product.name}
          </h3>

          <p 
            style={{
              fontSize: '0.78rem',
              color: 'var(--color-onyx-muted)',
              lineHeight: 1.4,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              marginBottom: '12px'
            }}
          >
            {product.subtitle}
          </p>
        </div>

        {/* Pricing & Stock Meta */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            paddingTop: '10px',
            borderTop: '1px dashed var(--color-silk-border)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-burgundy)'
              }}
            >
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  color: 'var(--color-onyx-muted)',
                  textDecoration: 'line-through'
                }}
              >
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <span 
            style={{
              fontSize: '0.7rem',
              color: product.isMadeToOrder ? 'var(--color-gulabi)' : '#2e7d32',
              fontWeight: 500,
              letterSpacing: '0.04em'
            }}
          >
            {product.isMadeToOrder ? 'Bespoke Order' : 'In Stock'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
