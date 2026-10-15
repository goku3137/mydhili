import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Sparkles,
  PhoneCall,
  Scissors,
  X
} from 'lucide-react';

export const HomePage = () => {
  const { navigateTo, products, setSelectedCategory } = useShop();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('All');

  // Hero Announcement Card State & Auto-close Timer (5 seconds)
  const TOTAL_HERO_DURATION = 5000;
  const [showHeroCard, setShowHeroCard] = useState(true);
  const [isClosingHeroCard, setIsClosingHeroCard] = useState(false);
  const [isHeroCardPaused, setIsHeroCardPaused] = useState(false);
  const [heroTimeLeft, setHeroTimeLeft] = useState(TOTAL_HERO_DURATION);

  const handleCloseHeroCard = () => {
    setIsClosingHeroCard(true);
    setTimeout(() => {
      setShowHeroCard(false);
      setIsClosingHeroCard(false);
    }, 350);
  };

  const handleReopenHeroCard = () => {
    setHeroTimeLeft(TOTAL_HERO_DURATION);
    setIsClosingHeroCard(false);
    setShowHeroCard(true);
  };

  // Auto-close interval (pauses cleanly on hover)
  useEffect(() => {
    if (!showHeroCard || isClosingHeroCard || isHeroCardPaused) return;

    const interval = setInterval(() => {
      setHeroTimeLeft(prev => {
        if (prev <= 100) {
          clearInterval(interval);
          handleCloseHeroCard();
          return 0;
        }
        return prev - 100;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [showHeroCard, isClosingHeroCard, isHeroCardPaused]);

  // Filter products for the New Arrivals section dynamically based on selected pill
  const newArrivalsList = products.filter(p => {
    if (activeCategoryFilter === 'All') return true;
    return p.category === activeCategoryFilter;
  }).slice(0, 8);

  // Curated bestsellers
  const bestsellers = products.filter(
    p => p.badge === 'Bestseller' || p.badge === 'Master Weaver Series' || p.badge === 'Atelier Heirloom'
  ).slice(0, 4);

  // Curated pure sarees
  const sareeCollection = products.filter(
    p => p.category === 'Kanchipuram Silks' || p.category === 'Banarasi Brocades' || p.category === 'Kerala Kasavu'
  ).slice(0, 4);

  const categories = [
    'All',
    'Bridal Couture',
    'Kanchipuram Silks',
    'Banarasi Brocades',
    'Kerala Kasavu',
    'Festive Silks',
    'Bespoke Blouses'
  ];

  const categoryCards = [
    {
      title: 'Bridal Couture',
      subtitle: 'Imperial Zardozi Lehengas',
      category: 'Bridal Couture',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85'
    },
    {
      title: 'Kanchipuram Silks',
      subtitle: 'Pure 24K Gold Zari Handlooms',
      category: 'Kanchipuram Silks',
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=85'
    },
    {
      title: 'Banarasi Brocades',
      subtitle: 'Handspun Katan Kadwa Weaves',
      category: 'Banarasi Brocades',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=85'
    },
    {
      title: 'Kerala Kasavu',
      subtitle: 'Balaramapuram Pure Handlooms',
      category: 'Kerala Kasavu',
      image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=85'
    }
  ];

  const scrollToNewArrivals = () => {
    const el = document.getElementById('new-arrivals');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage animate-fade-in" style={{ backgroundColor: 'var(--color-silk)', minHeight: '100vh' }}>
      
      {/* 1. Sleek Compact Split Hero Banner (Inspired by Iha Designs Banner) */}
      <section 
        style={{
          position: 'relative',
          backgroundColor: 'var(--color-burgundy)',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
        }}
      >
        <div 
          className="hero-split-banner"
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            minHeight: '440px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            position: 'relative'
          }}
        >
          {/* Left Visual Drape */}
          <div 
            style={{
              position: 'relative',
              minHeight: '260px',
              backgroundImage: `url('https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85')`,
              backgroundPosition: 'center 20%',
              backgroundSize: 'cover'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(56, 7, 18, 0.4) 0%, rgba(56, 7, 18, 0.75) 100%)'
              }} 
            />
          </div>

          {/* Right Visual Drape */}
          <div 
            style={{
              position: 'relative',
              minHeight: '260px',
              backgroundImage: `url('https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85')`,
              backgroundPosition: 'center 25%',
              backgroundSize: 'cover'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(270deg, rgba(56, 7, 18, 0.4) 0%, rgba(56, 7, 18, 0.75) 100%)'
              }} 
            />
          </div>

          {/* Re-open Pill when Hero Announcement is Dismissed */}
          {!showHeroCard && (
            <button
              onClick={handleReopenHeroCard}
              className="hero-reopen-pill"
              title="Click to view atelier announcement"
              aria-label="Reopen welcome highlight"
            >
              <Sparkles size={13} />
              <span>✦ Atelier Spotlight</span>
            </button>
          )}

          {/* Center Floating Editorial Box */}
          {showHeroCard && (
            <div 
              onMouseEnter={() => setIsHeroCardPaused(true)}
              onMouseLeave={() => setIsHeroCardPaused(false)}
              className={`hero-editorial-box ${isClosingHeroCard ? 'closing' : ''}`}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: '680px',
                backgroundColor: 'rgba(56, 7, 18, 0.94)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(212, 175, 55, 0.45)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65), 0 0 30px rgba(212, 175, 55, 0.15)',
                padding: '36px 32px 34px',
                textAlign: 'center',
                color: 'var(--color-silk)',
                zIndex: 3,
                overflow: 'hidden'
              }}
            >
              {/* Exit / Close Icon Button */}
              <button 
                onClick={handleCloseHeroCard}
                className="hero-close-btn"
                title="Dismiss (or auto-closes in 5s)"
                aria-label="Close introduction card"
              >
                <X size={16} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
                <span 
                  className="eyebrow" 
                  style={{ 
                    color: 'var(--color-gold)', 
                    display: 'inline-block', 
                    fontSize: '0.72rem',
                    letterSpacing: '0.2em'
                  }}
                >
                  ✦ Authentic South Asian Couture Atelier
                </span>
                <span 
                  style={{
                    fontSize: '0.62rem',
                    color: 'rgba(212, 175, 55, 0.85)',
                    backgroundColor: 'rgba(212, 175, 55, 0.12)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    letterSpacing: '0.04em'
                  }}
                >
                  {isHeroCardPaused ? 'Paused' : `${Math.ceil(heroTimeLeft / 1000)}s`}
                </span>
              </div>

              <h1 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)',
                  lineHeight: 1.15,
                  color: 'var(--color-silk)',
                  marginBottom: '12px',
                  fontWeight: 400
                }}
              >
                Unlock the World of Bridal &amp; Heirloom Fashion
              </h1>

              <p 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  color: 'rgba(250, 247, 242, 0.88)',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                  maxWidth: '520px',
                  margin: '0 auto 24px'
                }}
              >
                Shop Latest Wedding Lehengas, Kanchipuram Silks, Banarasi Brocades, Kerala Kasavu &amp; Bespoke Blouses
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => {
                    scrollToNewArrivals();
                    handleCloseHeroCard();
                  }}
                  className="btn-luxury-gold"
                  style={{ padding: '12px 30px', fontSize: '0.76rem' }}
                >
                  Explore Now
                </button>

                <button 
                  onClick={() => navigateTo('shop')}
                  className="btn-luxury-ghost-gold"
                  style={{ padding: '12px 26px', fontSize: '0.76rem' }}
                >
                  View All Collections
                </button>
              </div>

              {/* Progress Countdown Bar */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: 'rgba(212, 175, 55, 0.18)'
                }}
                title={isHeroCardPaused ? "Paused while hovering" : `Auto-closes in ${Math.ceil(heroTimeLeft / 1000)}s`}
              >
                <div 
                  style={{
                    height: '100%',
                    width: `${(heroTimeLeft / TOTAL_HERO_DURATION) * 100}%`,
                    background: 'linear-gradient(90deg, var(--color-gold), #FFF8E7)',
                    boxShadow: '0 0 8px rgba(212, 175, 55, 0.7)',
                    transition: isHeroCardPaused ? 'none' : 'width 0.1s linear'
                  }} 
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <div className="homepage-main-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '36px 24px 80px' }}>
        
        {/* 2. Interactive Category Filter Bar (Instant 1-Click Access to Products) */}
        <div style={{ marginBottom: '32px' }}>
          <div className="category-pills-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`category-pill ${activeCategoryFilter === cat ? 'active' : ''}`}
              >
                {cat === 'All' ? '✨ All Products' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. SECTION: NEW ARRIVAL (Direct Product Grid) */}
        <section id="new-arrivals" style={{ marginBottom: '64px', scrollMarginTop: '100px' }}>
          <div className="section-header-row">
            <div>
              <h2 className="section-title">NEW ARRIVAL</h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
                Handcrafted wedding lehengas and master-woven silks freshly finished on atelier looms
              </p>
            </div>
            <button 
              onClick={() => navigateTo('shop')}
              className="section-view-all"
            >
              View all <ArrowRight size={14} />
            </button>
          </div>

          <div className="product-grid-4">
            {newArrivalsList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <button 
              onClick={() => navigateTo('shop')}
              className="btn-luxury-primary"
              style={{ minWidth: '220px' }}
            >
              View All New Arrivals
            </button>
          </div>
        </section>

        {/* 4. SECTION: EXPLORE OUR BEST CATEGORIES (Category Image Cards) */}
        <section style={{ marginBottom: '64px' }}>
          <div className="section-header-row">
            <div>
              <h2 className="section-title">Explore Our Best Categories</h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
                Browse by South Asian textile traditions and regional handloom clusters
              </p>
            </div>
            <button 
              onClick={() => navigateTo('shop')}
              className="section-view-all"
            >
              View all <ArrowRight size={14} />
            </button>
          </div>

          <div className="category-grid-4">
            {categoryCards.map((item, idx) => (
              <div 
                key={idx}
                className="category-card"
                onClick={() => {
                  navigateTo('shop', item.category);
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85';
                  }}
                />
                <div className="category-card-overlay">
                  <span 
                    style={{ 
                      fontSize: '0.68rem', 
                      letterSpacing: '0.14em', 
                      textTransform: 'uppercase', 
                      color: 'var(--color-gold-light)',
                      marginBottom: '4px',
                      fontFamily: 'var(--font-sans)'
                    }}
                  >
                    Collection
                  </span>
                  <h3 
                    style={{ 
                      fontFamily: 'var(--font-serif)', 
                      fontSize: '1.45rem', 
                      color: 'var(--color-silk)',
                      lineHeight: 1.2
                    }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    style={{ 
                      fontSize: '0.76rem', 
                      color: 'rgba(250, 247, 242, 0.8)', 
                      marginTop: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    {item.subtitle} <ArrowRight size={13} color="var(--color-gold)" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SECTION: PROVEN BESTSELLERS */}
        <section style={{ marginBottom: '64px' }}>
          <div className="section-header-row">
            <div>
              <h2 className="section-title">Proven Bestsellers</h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
                Our most cherished bridal ensembles and temple gold silks celebrated by brides globally
              </p>
            </div>
            <button 
              onClick={() => navigateTo('shop')}
              className="section-view-all"
            >
              View all <ArrowRight size={14} />
            </button>
          </div>

          <div className="product-grid-4">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <button 
              onClick={() => navigateTo('shop')}
              className="btn-luxury-outline"
              style={{ minWidth: '220px' }}
            >
              Explore All Bestsellers
            </button>
          </div>
        </section>

        {/* 6. SECTION: HERITAGE SAREES */}
        <section style={{ marginBottom: '64px' }}>
          <div className="section-header-row">
            <div>
              <h2 className="section-title">Heritage Saree Collection</h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
                Pure Kanchipuram silks, Banarasi brocades, and Kerala Kasavu handlooms with pure silver-gold zari
              </p>
            </div>
            <button 
              onClick={() => {
                navigateTo('shop', 'Kanchipuram Silks');
              }}
              className="section-view-all"
            >
              View all <ArrowRight size={14} />
            </button>
          </div>

          <div className="product-grid-4">
            {sareeCollection.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* 7. CLEAN BESPOKE ATELIER BANNER (Direct Call-to-Action) */}
        <section 
          style={{
            backgroundColor: 'var(--color-burgundy)',
            color: 'var(--color-silk)',
            padding: '50px 32px',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            marginBottom: '64px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Scissors size={14} color="var(--color-gold)" />
              <span className="eyebrow" style={{ color: 'var(--color-gold-light)', fontSize: '0.72rem' }}>
                Bespoke Atelier Services
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', color: 'var(--color-silk)', marginBottom: '8px' }}>
              Custom Bridal Fittings &amp; Hand-Embroidered Blouses
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(250, 247, 242, 0.85)', lineHeight: 1.6 }}>
              Looking for a custom Muhurtham drape, tailored bridal blouse, or heirloom saree restyling? Book a private appointment at our flagship atelier or schedule a virtual video session.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => navigateTo('bespoke')}
              className="btn-luxury-gold"
              style={{ padding: '14px 28px', whiteSpace: 'nowrap' }}
            >
              Book Private Consultation
            </button>
            <button 
              onClick={() => navigateTo('bridal')}
              className="btn-luxury-ghost-gold"
              style={{ padding: '14px 28px', whiteSpace: 'nowrap' }}
            >
              View Bridal Lookbook
            </button>
          </div>
        </section>

        {/* 8. COLLAPSIBLE FAQS SECTION (Exact match to Iha Designs Collapsible Content) */}
        <section style={{ marginBottom: '64px', backgroundColor: '#FFFFFF', border: '1px solid var(--color-silk-border)', padding: '40px 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="eyebrow">✦ Client Support &amp; Policies</span>
            <h2 className="section-title" style={{ marginTop: '6px' }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: '0.84rem', color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
              Clear guidance on order tracking, bridal appointments, and insured delivery
            </p>
          </div>

          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
            {[
              {
                q: 'How do I track my order?',
                a: 'Once your heirloom is dispatched from our Chennai atelier, an automated tracking number and airway bill link (BlueDart Apex or DHL Express) is sent via email and SMS. You can also view live status in your Sovereign Profile.'
              },
              {
                q: 'What is your standard shipping and delivery timeline?',
                a: 'Ready-to-ship handloom sarees and festive pieces are dispatched within 48 to 72 hours. Bespoke bridal lehengas with hand-done zardozi needlework require 4 to 8 weeks of atelier craftsmanship.'
              },
              {
                q: 'What if I receive a damaged product or need an exchange?',
                a: 'Every parcel is packed inside the tamper-evident Mydhili Keepsake Chest and fully insured during transit. In the rare event of transit damage, notify our concierge within 48 hours for immediate replacement or full resolution.'
              },
              {
                q: 'Can international clients schedule virtual video consultations?',
                a: 'Yes. We host private high-definition video consultations across the USA, UK, Canada, UAE, and Singapore to review fabric swatches, colorways, and precise bridal measurements in your timezone.'
              }
            ].map((faq, idx) => (
              <details 
                key={idx}
                style={{
                  borderBottom: '1px solid var(--color-silk-border)',
                  padding: '16px 0',
                  cursor: 'pointer'
                }}
              >
                <summary
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--color-burgundy)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    outline: 'none',
                    listStyle: 'none'
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: 'var(--color-gold)', fontSize: '1.2rem', fontWeight: 400 }}>+</span>
                </summary>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-onyx)', lineHeight: 1.7, marginTop: '10px', paddingRight: '20px' }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* 9. MINIMAL TRUST BAR (Zero Clutter, 4 Pillars) */}
        <section 
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-silk-border)',
            padding: '32px 24px'
          }}
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '24px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(212, 175, 55, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <ShieldCheck size={22} color="var(--color-burgundy)" />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-burgundy)' }}>
                  100% Pure Silk &amp; Zari
                </h4>
                <p style={{ fontSize: '0.74rem', color: 'var(--color-onyx-muted)', marginTop: '2px' }}>
                  Tested and certified genuine electroplated gold zari
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(212, 175, 55, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Truck size={22} color="var(--color-burgundy)" />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-burgundy)' }}>
                  Insured Delivery
                </h4>
                <p style={{ fontSize: '0.74rem', color: 'var(--color-onyx-muted)', marginTop: '2px' }}>
                  Complimentary worldwide transit above ₹50,000
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(212, 175, 55, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Clock size={22} color="var(--color-burgundy)" />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-burgundy)' }}>
                  380+ Hours Needlework
                </h4>
                <p style={{ fontSize: '0.74rem', color: 'var(--color-onyx-muted)', marginTop: '2px' }}>
                  Authentic bullion zardozi &amp; generational weaving
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(212, 175, 55, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <PhoneCall size={22} color="var(--color-burgundy)" />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-burgundy)' }}>
                  Bridal Concierge
                </h4>
                <p style={{ fontSize: '0.74rem', color: 'var(--color-onyx-muted)', marginTop: '2px' }}>
                  Direct styling assistance &amp; virtual diaspora appointments
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomePage;
