import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop, categoryToSlug } from '../context/ShopContext';
import { Heart, Eye, ShoppingBag, Sparkles } from 'lucide-react';

const FALLBACK_PRODUCT_IMAGE = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85';

export const ProductCard = ({ product }) => {
  const { viewProduct, addToCart, isInWishlist, toggleWishlist } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const isWishlisted = isInWishlist(product.id);

  // Safe image resolution with fallbacks
  const initialPrimary = (product.images && product.images[0]) || product.image || FALLBACK_PRODUCT_IMAGE;
  const initialSecondary = (product.images && (product.images[1] || product.images[0])) || product.image || FALLBACK_PRODUCT_IMAGE;

  const [primarySrc, setPrimarySrc] = useState(initialPrimary);
  const [secondarySrc, setSecondarySrc] = useState(initialSecondary);

  // Safe delivery & handloom badge logic (prevents "undefinedd Handloom")
  const getDeliveryBadge = () => {
    if (typeof product.leadTimeDays === 'number') {
      return product.leadTimeDays <= 3 ? 'Ready to Ship' : `${product.leadTimeDays}d Handloom`;
    }
    if (product.deliveryTime) {
      if (product.deliveryTime.toLowerCase().includes('ready')) return 'Ready to Ship';
      if (product.isMadeToOrder) return 'Bespoke Order';
      return product.deliveryTime;
    }
    return product.isMadeToOrder ? 'Bespoke Atelier' : 'Ready to Ship';
  };

  const isQuickShip = (typeof product.leadTimeDays === 'number' && product.leadTimeDays <= 3) || 
    (!product.isMadeToOrder && (!product.deliveryTime || product.deliveryTime.toLowerCase().includes('ready')));

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
          backgroundColor: '#f3eee6'
        }}
      >
        <Link 
          to={`/products/${product.id}`}
          style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
          aria-label={`View details of ${product.name}`}
        >
          {/* Primary Image - ALWAYS VISIBLE (opacity: 1), never hidden by default */}
          <img 
            src={primarySrc} 
            alt={product.name || 'Mydhili Luxury Creation'}
            onError={() => {
              if (product.images && product.images[1] && primarySrc !== product.images[1]) {
                setPrimarySrc(product.images[1]);
              } else {
                setPrimarySrc(FALLBACK_PRODUCT_IMAGE);
              }
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              opacity: 1, // Permanently 1: always shows primary view
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
            loading="lazy"
          />

          {/* Hover Secondary Image - Fades in smoothly on top */}
          {secondarySrc && secondarySrc !== primarySrc && (
            <img 
              src={secondarySrc} 
              alt={`${product.name} alternate view`}
              onError={() => {
                setSecondarySrc(FALLBACK_PRODUCT_IMAGE);
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 0.6s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'scale(1.05)' : 'scale(1.08)',
                pointerEvents: 'none'
              }}
              loading="lazy"
            />
          )}
        </Link>

        {/* Top Badges */}
        <div 
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            zIndex: 3,
            pointerEvents: 'none'
          }}
        >
          {product.isMadeToOrder && (
            <span 
              style={{
                backgroundColor: 'var(--color-burgundy)',
                color: 'var(--color-gold-light)',
                fontSize: '0.62rem',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '4px 8px',
                fontWeight: 600
              }}
            >
              Bespoke Atelier
            </span>
          )}
          {product.badge && (
            <span 
              style={{
                backgroundColor: 'rgba(250, 247, 242, 0.95)',
                color: 'var(--color-onyx)',
                border: '1px solid var(--color-gold)',
                fontSize: '0.62rem',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '3px 8px',
                fontWeight: 500
              }}
            >
              {product.badge}
            </span>
          )}
        </div>

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
          className="product-quick-action-overlay"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(56, 7, 18, 0.88)',
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
          <Link
            to={`/products/${product.id}`}
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
              gap: '6px',
              textDecoration: 'none'
            }}
          >
            <Eye size={14} color="var(--color-gold)" /> Quick View
          </Link>
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
        className="product-card-details"
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
          <Link 
            to={`/collections/${categoryToSlug(product.category)}`}
            style={{
              fontSize: '0.68rem',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-gulabi)',
              marginBottom: '6px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            {product.category}
          </Link>

          <h3 style={{ margin: 0, marginBottom: '6px', lineHeight: 1.3 }}>
            <Link
              to={`/products/${product.id}`}
              className="product-card-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.18rem',
                color: 'var(--color-burgundy)',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              {product.name}
            </Link>
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
          <div>
            <span 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--color-burgundy)'
              }}
            >
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span 
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--color-onyx-muted)',
                  textDecoration: 'line-through',
                  marginLeft: '8px'
                }}
              >
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <span 
            style={{
              fontSize: '0.7rem',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.08em',
              color: isQuickShip ? '#2A6E3B' : 'var(--color-onyx-muted)',
              fontWeight: 500
            }}
          >
            {getDeliveryBadge()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
