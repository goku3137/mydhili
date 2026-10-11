import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { 
  Heart, 
  ShoppingBag, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Ruler, 
  Calendar, 
  CheckCircle2, 
  Share2,
  ChevronRight,
  Info
} from 'lucide-react';

export const ProductDetailPage = () => {
  const { products, selectedProductId, addToCart, isInWishlist, toggleWishlist, navigateTo } = useShop();

  const product = products.find((p) => p.id === selectedProductId) || products[0];
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.availableSizes[0] || 'Free Size');
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'craft' | 'care' | 'delivery'
  const [isAddedToast, setIsAddedToast] = useState(false);

  const isWishlisted = isInWishlist(product.id);

  // Related products from same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAdd = () => {
    addToCart(product, selectedSize, quantity);
    setIsAddedToast(true);
    setTimeout(() => setIsAddedToast(false), 3000);
  };

  return (
    <div className="product-detail-page animate-fade-in" style={{ paddingBottom: '90px' }}>
      {/* Breadcrumb Navigation */}
      <div 
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '20px 24px',
          fontSize: '0.74rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-onyx-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}
      >
        <button onClick={() => navigateTo('home')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit' }}>
          Home
        </button>
        <ChevronRight size={12} color="var(--color-gold)" />
        <button onClick={() => navigateTo('shop', product.category)} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit' }}>
          {product.category}
        </button>
        <ChevronRight size={12} color="var(--color-gold)" />
        <span style={{ color: 'var(--color-burgundy)', fontWeight: 600 }}>{product.name}</span>
      </div>

      {/* Main Product Showcase Section */}
      <div 
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '56px',
          alignItems: 'start'
        }}
      >
        {/* Left Column: Image Gallery with Interactive Deep Zoom */}
        <div>
          {/* Main Large Image View */}
          <div 
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '130%',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-silk-border)',
              cursor: isZoomed ? 'zoom-out' : 'zoom-in'
            }}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img 
              src={product.images[activeImageIdx]} 
              alt={product.name}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isZoomed ? 'scale(1.8)' : 'scale(1)',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />

            {/* Subtle Zoom Prompt */}
            <div 
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                backgroundColor: 'rgba(56, 7, 18, 0.85)',
                color: 'var(--color-gold)',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '6px 12px',
                backdropFilter: 'blur(4px)',
                pointerEvents: 'none'
              }}
            >
              {isZoomed ? 'Click to Reset Zoom' : '✦ Click to Inspect Handloom Weave'}
            </div>

            {/* Badge */}
            {product.badge && (
              <div 
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'var(--color-burgundy)',
                  color: 'var(--color-gold)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '6px 12px',
                  border: '1px solid var(--color-gold)'
                }}
              >
                {product.badge}
              </div>
            )}
          </div>

          {/* Thumbnail Strip */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveImageIdx(idx);
                  setIsZoomed(false);
                }}
                style={{
                  width: '84px',
                  height: '110px',
                  padding: 0,
                  border: activeImageIdx === idx ? '2px solid var(--color-gold)' : '1px solid var(--color-silk-border)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <img 
                  src={img} 
                  alt={`View ${idx + 1}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>

          {/* Luxury Keepsake Box Highlight */}
          <div 
            style={{
              marginTop: '32px',
              padding: '20px',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-silk-border)',
              display: 'flex',
              gap: '16px',
              alignItems: 'center'
            }}
          >
            <div 
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--color-burgundy)',
                color: 'var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Sparkles size={24} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-burgundy)' }}>
                Complimentary Mydhili Keepsake Chest
              </h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-onyx-muted)', marginTop: '2px' }}>
                Delivered in our signature 1400 GSM rigid box with double-faced burgundy satin ribbon, gold filigree border & antique wax medallion.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Specifications, Sizing & Actions */}
        <div>
          {/* Eyebrow and Title */}
          <div className="eyebrow" style={{ color: 'var(--color-gulabi)', marginBottom: '8px' }}>
            {product.category} • {product.color}
          </div>

          <h1 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 3.5vw, 2.9rem)',
              color: 'var(--color-burgundy)',
              lineHeight: 1.2,
              marginBottom: '12px'
            }}
          >
            {product.name}
          </h1>

          <p style={{ fontSize: '0.9rem', color: 'var(--color-onyx-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
            {product.subtitle}
          </p>

          {/* Pricing Block */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '16px',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--color-silk-border)'
            }}
          >
            <span style={{ fontSize: '1.9rem', fontWeight: 600, color: 'var(--color-burgundy)', fontFamily: 'var(--font-sans)' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span style={{ fontSize: '1.1rem', color: 'var(--color-onyx-muted)', textDecoration: 'line-through' }}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2e7d32', fontWeight: 600 }}>
              Inclusive of all taxes & insurance
            </span>
          </div>

          {/* Fabric & Delivery Highlights */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '14px',
              padding: '20px 0',
              borderBottom: '1px solid var(--color-silk-border)',
              fontSize: '0.82rem'
            }}
          >
            <div>
              <span style={{ color: 'var(--color-onyx-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Fabric Weave
              </span>
              <strong style={{ color: 'var(--color-burgundy)' }}>{product.fabric}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--color-onyx-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Estimated Delivery
              </span>
              <strong style={{ color: product.isMadeToOrder ? 'var(--color-gulabi)' : 'var(--color-burgundy)' }}>
                {product.deliveryTime}
              </strong>
            </div>
          </div>

          {/* Size Selection */}
          <div style={{ marginTop: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <label style={{ fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
                Select Measurement / Size
              </label>
              <button 
                onClick={() => navigateTo('faqs')}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.74rem',
                  color: 'var(--color-burgundy)',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Ruler size={13} /> View Atelier Sizing Guide
              </button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {product.availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: '12px 20px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    border: selectedSize === size ? '1px solid var(--color-burgundy)' : '1px solid var(--color-silk-border)',
                    backgroundColor: selectedSize === size ? 'var(--color-burgundy)' : '#FFFFFF',
                    color: selectedSize === size ? 'var(--color-silk)' : 'var(--color-onyx)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontWeight: selectedSize === size ? 600 : 400
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Primary Actions */}
          <div style={{ display: 'flex', gap: '14px', marginTop: '28px', flexWrap: 'wrap' }}>
            {/* Quantity */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid var(--color-silk-border)',
                backgroundColor: '#FFFFFF',
                height: '52px'
              }}
            >
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ width: '40px', height: '100%', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
              >
                -
              </button>
              <span style={{ padding: '0 14px', fontSize: '0.9rem', fontWeight: 600 }}>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{ width: '40px', height: '100%', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
              >
                +
              </button>
            </div>

            {/* Add to Bag CTA */}
            <button
              onClick={handleAdd}
              className="btn-luxury-primary"
              style={{ flex: 1, minWidth: '200px', height: '52px', padding: '0 24px' }}
            >
              <ShoppingBag size={18} /> Add To Shopping Bag
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label="Toggle Wishlist"
              style={{
                width: '52px',
                height: '52px',
                border: '1px solid var(--color-silk-border)',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Heart 
                size={20} 
                color={isWishlisted ? 'var(--color-burgundy)' : 'var(--color-onyx)'}
                fill={isWishlisted ? 'var(--color-burgundy)' : 'transparent'}
              />
            </button>
          </div>

          {/* Secondary Bridal Consultation CTA */}
          <div style={{ marginTop: '16px' }}>
            <button
              onClick={() => navigateTo('bespoke')}
              className="btn-luxury-ghost-gold"
              style={{ width: '100%', padding: '14px', borderColor: 'var(--color-gold)', color: 'var(--color-burgundy)' }}
            >
              <Calendar size={16} color="var(--color-gold)" /> Book A Video Bridal Consultation For This Ensemble
            </button>
          </div>

          {/* Informational Tabs (Details / Craftsmanship / Care / Delivery) */}
          <div style={{ marginTop: '36px', borderTop: '1px solid var(--color-silk-border)', paddingTop: '20px' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid var(--color-silk-border)', gap: '20px' }}>
              {[
                { id: 'details', label: 'Story & Details' },
                { id: 'craft', label: 'Artisanal Needlework' },
                { id: 'care', label: 'Care & Heirloom' },
                { id: 'delivery', label: 'Global Delivery' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    paddingBottom: '12px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.76rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    color: activeTab === tab.id ? 'var(--color-burgundy)' : 'var(--color-onyx-muted)',
                    fontWeight: activeTab === tab.id ? 600 : 400,
                    borderBottom: activeTab === tab.id ? '2px solid var(--color-gold)' : '2px solid transparent'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div style={{ padding: '20px 0', fontSize: '0.85rem', color: 'var(--color-onyx)', lineHeight: 1.7 }}>
              {activeTab === 'details' && (
                <div>
                  <p>{product.description}</p>
                  <ul style={{ marginTop: '12px', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li>Handcrafted by certified generational South Asian master artisans.</li>
                    <li>Accompanied by the official Mydhili Certificate of Authenticity.</li>
                    <li>Natural dyes with genuine beaten gold electroplated thread.</li>
                  </ul>
                </div>
              )}
              {activeTab === 'craft' && (
                <div>
                  <p><strong>Atelier Craftsmanship:</strong> {product.craftsmanship}</p>
                  <p style={{ marginTop: '10px' }}>
                    Each stitch follows centuries-old techniques preserved in our atelier, marrying classical draping with structural comfort.
                  </p>
                </div>
              )}
              {activeTab === 'care' && (
                <div>
                  <p><strong>Preservation Protocol:</strong> {product.careInstructions}</p>
                  <p style={{ marginTop: '10px' }}>
                    Store flat wrapped in pure mulmul cotton away from direct halogen lights. Avoid hanging heavy lehengas for extended durations to protect the waist seam structure.
                  </p>
                </div>
              )}
              {activeTab === 'delivery' && (
                <div>
                  <p>
                    <strong>White-Glove Shipping:</strong> Complimentary insured delivery across India via BlueDart Apex (2 - 5 business days).
                  </p>
                  <p style={{ marginTop: '8px' }}>
                    <strong>International Diaspora:</strong> Express DHL delivery to USA, UK, Canada, UAE, and Singapore with full customs declaration & door-to-door tracking.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Ensembles Section */}
      {relatedProducts.length > 0 && (
        <div style={{ maxWidth: '1440px', margin: '80px auto 0', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="eyebrow">✦ Complementary Styling</span>
            <h3 style={{ fontSize: '2.2rem', color: 'var(--color-burgundy)', marginTop: '6px' }}>
              You May Also Admire
            </h3>
            <div className="gold-rule" style={{ maxWidth: '100px', margin: '12px auto' }} />
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
