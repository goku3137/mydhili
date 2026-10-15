import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { 
  Heart, 
  ShoppingBag, 
  Sparkles, 
  Ruler, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Truck,
  ShieldCheck,
  Calendar
} from 'lucide-react';

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const { products, selectedProductId, setSelectedProductId, addToCart, isInWishlist, toggleWishlist, navigateTo } = useShop();

  const activeId = productId || selectedProductId;
  const product = products.find((p) => p.id === activeId) || products[0];

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.availableSizes[0] || 'Free Size');
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (productId && productId !== selectedProductId) {
      setSelectedProductId(productId);
    }
    setActiveImageIdx(0);
    if (product.availableSizes && product.availableSizes.length > 0) {
      setSelectedSize(product.availableSizes[0]);
    }
  }, [productId, product.id]);
  const [openAccordions, setOpenAccordions] = useState({
    details: true,
    craft: false,
    care: false,
    shipping: false
  });

  const isWishlisted = isInWishlist(product.id);

  // Related products from same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const toggleAccordion = (section) => {
    setOpenAccordions(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, quantity);
    navigateTo('checkout');
  };

  return (
    <div className="product-detail-page animate-fade-in" style={{ paddingBottom: '90px', backgroundColor: 'var(--color-silk)' }}>
      {/* Breadcrumb Navigation (Exact Iha Designs style) */}
      <div 
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '16px 24px',
          fontSize: '0.74rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-onyx-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em'
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
        className="product-detail-grid"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 24px',
          alignItems: 'start'
        }}
      >
        {/* Left Column: Image Gallery with Interactive Inspection */}
        <div>
          {/* Main Large Image View */}
          <div 
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '125%',
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
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85';
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isZoomed ? 'scale(1.7)' : 'scale(1)',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />

            {/* Status Pill Badge */}
            {product.badge && (
              <div 
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  backgroundColor: 'var(--color-burgundy)',
                  color: 'var(--color-gold)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  border: '1px solid var(--color-gold)',
                  backdropFilter: 'blur(4px)'
                }}
              >
                {product.badge}
              </div>
            )}

            {/* Click to Zoom Prompt */}
            <div 
              style={{
                position: 'absolute',
                bottom: '14px',
                right: '14px',
                backgroundColor: 'rgba(56, 7, 18, 0.85)',
                color: 'var(--color-gold)',
                fontSize: '0.66rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '5px 10px',
                backdropFilter: 'blur(4px)',
                pointerEvents: 'none'
              }}
            >
              {isZoomed ? 'Click to Reset' : '✦ Click to Inspect Zari'}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div 
            style={{ 
              display: 'flex', 
              gap: '10px', 
              marginTop: '14px',
              overflowX: 'auto',
              paddingBottom: '6px',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveImageIdx(idx);
                  setIsZoomed(false);
                }}
                style={{
                  width: '78px',
                  height: '98px',
                  flexShrink: 0,
                  padding: 0,
                  border: activeImageIdx === idx ? '2px solid var(--color-burgundy)' : '1px solid var(--color-silk-border)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: '#FFFFFF',
                  transition: 'border 0.2s ease'
                }}
              >
                <img 
                  src={img} 
                  alt={`View ${idx + 1}`} 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=300&q=80';
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>

          {/* Signature Keepsake Packaging Box Banner */}
          <div 
            style={{
              marginTop: '24px',
              padding: '16px 20px',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-silk-border)',
              display: 'flex',
              gap: '14px',
              alignItems: 'center'
            }}
          >
            <div 
              style={{
                width: '42px',
                height: '42px',
                backgroundColor: 'var(--color-burgundy)',
                color: 'var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Sparkles size={20} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--color-burgundy)' }}>
                Complimentary Mydhili Keepsake Chest
              </h4>
              <p style={{ fontSize: '0.74rem', color: 'var(--color-onyx-muted)', marginTop: '2px' }}>
                Packaged in our signature 1400 GSM rigid heirloom box with burgundy satin ribbon, gold foil insignia &amp; wax seal.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Buy Box, Sizing, Pricing & Accordions */}
        <div 
          className="product-detail-buybox"
          style={{ 
            backgroundColor: '#FFFFFF', 
            padding: '32px 28px', 
            border: '1px solid var(--color-silk-border)' 
          }}
        >
          {/* Eyebrow & Brand */}
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gulabi)', fontWeight: 600, marginBottom: '6px' }}>
            Mydhili Bridal Studio • {product.category}
          </div>

          {/* Product Title */}
          <h1 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.9rem, 2.8vw, 2.5rem)',
              color: 'var(--color-burgundy)',
              lineHeight: 1.2,
              marginBottom: '10px'
            }}
          >
            {product.name}
          </h1>

          <p style={{ fontSize: '0.84rem', color: 'var(--color-onyx-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
            {product.subtitle}
          </p>

          {/* Pricing Block */}
          <div style={{ paddingBottom: '16px', borderBottom: '1px solid var(--color-silk-border)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--color-burgundy)', fontFamily: 'var(--font-sans)' }}>
                Rs. {product.price.toLocaleString('en-IN')}.00
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: '1.05rem', color: 'var(--color-onyx-muted)', textDecoration: 'line-through' }}>
                  Rs. {product.originalPrice.toLocaleString('en-IN')}.00
                </span>
              )}
            </div>
            <p style={{ fontSize: '0.74rem', color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
              Taxes included. Complimentary insured delivery on this order.
            </p>
          </div>

          {/* Size / Variant Selector (Buttons like Iha Designs) */}
          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.76rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                Size: <span style={{ color: 'var(--color-burgundy)' }}>{selectedSize}</span>
              </label>
              <button 
                onClick={() => navigateTo('faqs')}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.72rem',
                  color: 'var(--color-burgundy)',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Ruler size={13} /> Size Guide
              </button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {product.availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: '10px 18px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    border: selectedSize === size ? '1.5px solid var(--color-burgundy)' : '1px solid var(--color-silk-border)',
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

          {/* Quantity Selector */}
          <div style={{ marginTop: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.76rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>
              Quantity
            </label>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '1px solid var(--color-silk-border)',
                backgroundColor: '#FFFFFF',
                height: '46px'
              }}
            >
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ width: '40px', height: '100%', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--color-onyx)' }}
              >
                −
              </button>
              <span style={{ padding: '0 16px', fontSize: '0.9rem', fontWeight: 600 }}>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{ width: '40px', height: '100%', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--color-onyx)' }}
              >
                +
              </button>
            </div>
          </div>

          {/* Dual Action Buttons: Add to Cart & Buy It Now (Exact match to Iha Designs) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '24px' }}>
            <button
              onClick={handleAddToCart}
              className="btn-luxury-outline"
              style={{ height: '50px', width: '100%', fontSize: '0.78rem' }}
            >
              <ShoppingBag size={17} /> Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="btn-luxury-gold"
              style={{ height: '50px', width: '100%', fontSize: '0.8rem', fontWeight: 700 }}
            >
              Buy It Now
            </button>

            {/* Wishlist toggle link */}
            <div style={{ textAlign: 'center', marginTop: '6px' }}>
              <button
                onClick={() => toggleWishlist(product.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.76rem',
                  color: isWishlisted ? 'var(--color-burgundy)' : 'var(--color-onyx-muted)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Heart size={15} color={isWishlisted ? 'var(--color-burgundy)' : 'currentColor'} fill={isWishlisted ? 'var(--color-burgundy)' : 'none'} />
                {isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>

          {/* Secondary Virtual Bridal Consultation Link */}
          <div style={{ marginTop: '16px', borderTop: '1px solid var(--color-silk-border)', paddingTop: '16px' }}>
            <button
              onClick={() => navigateTo('bespoke')}
              style={{
                width: '100%',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px dashed var(--color-gold)',
                padding: '12px',
                color: 'var(--color-burgundy)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Calendar size={14} color="var(--color-gold)" /> Book A Virtual Bridal Consultation For This Piece
            </button>
          </div>

          {/* Collapsible Accordions (Exact Iha Designs structure) */}
          <div style={{ marginTop: '28px', borderTop: '1px solid var(--color-silk-border)' }}>
            
            {/* Accordion 1: Product Details */}
            <div style={{ borderBottom: '1px solid var(--color-silk-border)' }}>
              <button
                onClick={() => toggleAccordion('details')}
                style={{
                  width: '100%',
                  padding: '16px 0',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-burgundy)'
                }}
              >
                <span>Product Details &amp; Specifications</span>
                {openAccordions.details ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openAccordions.details && (
                <div style={{ paddingBottom: '16px', fontSize: '0.82rem', color: 'var(--color-onyx)', lineHeight: 1.7 }}>
                  <p>{product.description}</p>
                  <div style={{ marginTop: '12px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                    <div><strong>Fabric:</strong> {product.fabric}</div>
                    <div><strong>Color:</strong> {product.color}</div>
                    <div><strong>Turnaround:</strong> {product.deliveryTime}</div>
                    <div><strong>Fit:</strong> {product.availableSizes.join(', ')}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Artisanal Needlework */}
            <div style={{ borderBottom: '1px solid var(--color-silk-border)' }}>
              <button
                onClick={() => toggleAccordion('craft')}
                style={{
                  width: '100%',
                  padding: '16px 0',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-burgundy)'
                }}
              >
                <span>Craftsmanship &amp; Weaving Lineage</span>
                {openAccordions.craft ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openAccordions.craft && (
                <div style={{ paddingBottom: '16px', fontSize: '0.82rem', color: 'var(--color-onyx)', lineHeight: 1.7 }}>
                  <p><strong>Atelier Hours:</strong> {product.craftsmanship}</p>
                  <p style={{ marginTop: '8px' }}>
                    Every motif is woven on ancestral pit looms in Kanchipuram and Varanasi using authentic silver-gilt bullion wire electroplated in sovereign gold.
                  </p>
                </div>
              )}
            </div>

            {/* Accordion 3: Care Instructions */}
            <div style={{ borderBottom: '1px solid var(--color-silk-border)' }}>
              <button
                onClick={() => toggleAccordion('care')}
                style={{
                  width: '100%',
                  padding: '16px 0',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-burgundy)'
                }}
              >
                <span>Care Instructions &amp; Preservation</span>
                {openAccordions.care ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openAccordions.care && (
                <div style={{ paddingBottom: '16px', fontSize: '0.82rem', color: 'var(--color-onyx)', lineHeight: 1.7 }}>
                  <p>{product.careInstructions}</p>
                  <p style={{ marginTop: '6px' }}>
                    Always store wrapped in unbleached mulmul cotton within the Mydhili Keepsake Chest to shield the zari from moisture and oxidation.
                  </p>
                </div>
              )}
            </div>

            {/* Accordion 4: Shipping & Returns */}
            <div style={{ borderBottom: '1px solid var(--color-silk-border)' }}>
              <button
                onClick={() => toggleAccordion('shipping')}
                style={{
                  width: '100%',
                  padding: '16px 0',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-burgundy)'
                }}
              >
                <span>Shipping, Insurance &amp; Returns</span>
                {openAccordions.shipping ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openAccordions.shipping && (
                <div style={{ paddingBottom: '16px', fontSize: '0.82rem', color: 'var(--color-onyx)', lineHeight: 1.7 }}>
                  <p><strong>Domestic Shipping:</strong> Dispatched via insured BlueDart Apex with full tracking (2 - 5 business days).</p>
                  <p style={{ marginTop: '6px' }}><strong>International Diaspora:</strong> Express DHL delivery worldwide with complete export declaration.</p>
                  <p style={{ marginTop: '6px' }}><strong>Return Policy:</strong> Handcrafted bespoke heirlooms and unstitched silks are inspected by our master couturier before transit. Contact concierge for size adjustments.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* You May Also Like / Recommended Products (4-Column Grid) */}
      {relatedProducts.length > 0 && (
        <div style={{ maxWidth: '1440px', margin: '70px auto 0', padding: '0 24px' }}>
          <div className="section-header-row">
            <div>
              <h2 className="section-title">You May Also Like</h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
                Similar couture creations and handlooms from the {product.category} collection
              </p>
            </div>
            <button 
              onClick={() => navigateTo('shop', product.category)}
              className="section-view-all"
            >
              View collection <ChevronRight size={14} />
            </button>
          </div>

          <div className="product-grid-4">
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
