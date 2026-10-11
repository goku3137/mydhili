import React from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import MydhiliLogo from '../components/MydhiliLogo';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Feather, 
  Clock, 
  Scissors, 
  Award,
  Calendar,
  CheckCircle2,
  Heart
} from 'lucide-react';

export const HomePage = () => {
  const { navigateTo, products } = useShop();

  // Selected showcase collections
  const bridalHighlights = products.filter(p => p.category === 'Bridal Couture').slice(0, 3);
  const bestsellers = products.filter(p => p.badge === 'Bestseller' || p.badge === 'Master Weaver Series' || p.badge === 'Bridal Favorite').slice(0, 4);

  return (
    <div className="homepage animate-fade-in">
      {/* 1. Full-Screen Editorial Hero */}
      <section 
        style={{
          position: 'relative',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'var(--color-burgundy)',
          overflow: 'hidden',
          color: 'var(--color-silk)'
        }}
      >
        {/* Background Editorial High-Res Image with Luxury Scrim */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2000&q=90')`,
            backgroundPosition: 'center 25%',
            backgroundSize: 'cover',
            filter: 'brightness(0.72) contrast(1.08)'
          }}
        />
        {/* Imperial Burgundy Gradient Scrim */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, rgba(56, 7, 18, 0.94) 0%, rgba(56, 7, 18, 0.75) 45%, rgba(56, 7, 18, 0.4) 100%)'
          }}
        />

        {/* Hero Editorial Content */}
        <div 
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '80px 24px',
            width: '100%'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                backgroundColor: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                marginBottom: '20px'
              }}
            >
              <Sparkles size={13} color="var(--color-gold)" />
              <span className="eyebrow" style={{ color: 'var(--color-gold-light)', fontSize: '0.7rem' }}>
                Master Rebranding Edition 2026
              </span>
            </div>

            <h1 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
                lineHeight: 1.1,
                color: 'var(--color-silk)',
                marginBottom: '22px',
                fontWeight: 400
              }}
            >
              Where Heritage <br />
              <span style={{ fontStyle: 'italic', color: 'var(--color-gold)', fontWeight: 300 }}>
                Becomes Heirloom.
              </span>
            </h1>

            <p 
              style={{
                fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)',
                color: 'rgba(250, 247, 242, 0.88)',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '560px'
              }}
            >
              Discover the art of South Asian couture. Honoring generational handlooms, bullion zardozi needlework, and modern bridal silhouettes tailored for discerning connoisseurs worldwide.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <button 
                onClick={() => navigateTo('shop')}
                className="btn-luxury-gold"
                style={{ fontSize: '0.82rem', padding: '16px 36px' }}
              >
                Explore The Collection <ArrowRight size={16} />
              </button>

              <button 
                onClick={() => navigateTo('bespoke')}
                className="btn-luxury-ghost-gold"
                style={{ fontSize: '0.82rem', padding: '16px 32px' }}
              >
                <Calendar size={16} /> Book Private Consultation
              </button>
            </div>

            {/* Micro Pillars */}
            <div 
              style={{
                display: 'flex',
                gap: '28px',
                marginTop: '48px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(212, 175, 55, 0.25)',
                color: 'rgba(250, 247, 242, 0.8)',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Feather size={14} color="var(--color-gold)" /> Pure Natural Fibers
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Scissors size={14} color="var(--color-gold)" /> Dedicated Atelier
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={14} color="var(--color-gold)" /> Ethical Weaver Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Core Brand Pillars Section (From Brand Guidelines Booklet Page 2) */}
      <section 
        style={{
          padding: '80px 24px',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--color-silk-border)'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
            <span className="eyebrow">✦ Brand Foundations</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-burgundy)', marginTop: '8px', marginBottom: '14px' }}>
              The Four Pillars of Mydhili Couture
            </h2>
            <div className="gold-rule" style={{ maxWidth: '140px', margin: '14px auto' }} />
            <p style={{ color: 'var(--color-onyx-muted)', fontSize: '0.9rem' }}>
              Rooted in the Sanskrit name for Goddess Sita, symbolizing graceful sovereignty, auspicious elegance, and unhurried artisanal craftsmanship.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              {
                title: 'Imperial Heritage',
                desc: 'Honoring traditional handlooms—Kanchipuram silks, Banarasi gold brocades, and Kerala Kasavu directly with master weavers.',
                action: () => navigateTo('shop', 'Kanchipuram Silks')
              },
              {
                title: 'Artisanal Haute Couture',
                desc: 'Precision needlework, bullion zardozi, beaten gota patti, and hand-embroidery crafted in our dedicated atelier.',
                action: () => navigateTo('bridal')
              },
              {
                title: 'Modern Silhouette',
                desc: 'Marrying timeless draping with modern corsetry, tailored cuts, and fluid comfort for the modern celebration.',
                action: () => navigateTo('shop', 'Festive Silks')
              },
              {
                title: 'Bespoke Bridal Salon',
                desc: 'Private client consultations, custom bridal sketch sessions, and personalized heirloom customizations.',
                action: () => navigateTo('bespoke')
              }
            ].map((pillar, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '36px 28px',
                  backgroundColor: 'var(--color-silk)',
                  border: '1px solid var(--color-silk-border)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
              >
                <div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-gold)', display: 'block', marginBottom: '12px' }}>
                    0{idx + 1}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-burgundy)', marginBottom: '12px' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-onyx-muted)', lineHeight: 1.6 }}>
                    {pillar.desc}
                  </p>
                </div>
                <button
                  onClick={pillar.action}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-burgundy)',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    textAlign: 'left',
                    paddingTop: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  Explore Pillar &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Bridal Couture Spotlight */}
      <section 
        style={{
          padding: '90px 24px',
          backgroundColor: 'var(--color-silk)'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '40px',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div>
              <span className="eyebrow">✦ Signature Ensembles</span>
              <h2 style={{ fontSize: '2.6rem', color: 'var(--color-burgundy)', marginTop: '6px' }}>
                The Bridal Collection
              </h2>
            </div>
            <button 
              onClick={() => navigateTo('bridal')}
              className="btn-luxury-outline"
            >
              View Bridal Lookbook &rarr;
            </button>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            {bridalHighlights.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Editorial Craftsmanship Split Banner */}
      <section 
        style={{
          backgroundColor: 'var(--color-burgundy)',
          color: 'var(--color-silk)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          alignItems: 'center'
        }}
      >
        {/* Left Editorial Narrative */}
        <div style={{ padding: '80px clamp(24px, 6vw, 80px)' }}>
          <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>
            ✦ Artisanal Splendor
          </span>
          <h2 
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              color: 'var(--color-silk)',
              lineHeight: 1.15,
              marginTop: '12px',
              marginBottom: '20px'
            }}
          >
            "We do not merely craft attire; we preserve ancestral weaves and celebratory memories."
          </h2>
          <div className="gold-rule" style={{ maxWidth: '100px', margin: '20px 0' }} />
          <p style={{ color: 'rgba(250, 247, 242, 0.8)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '28px' }}>
            Every creation emerges from an unyielding commitment to genuine natural fibers, ethical weaver support, and unhurried hand craftsmanship. In our dedicated atelier, karigars spend hundreds of hours couching authentic zardozi bullion wire and beating pure gota patti onto hand-dyed silks.
          </p>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => navigateTo('about')}
              className="btn-luxury-gold"
            >
              Discover Our Craft
            </button>
            <button 
              onClick={() => navigateTo('bespoke')}
              className="btn-luxury-ghost-gold"
            >
              Book An Atelier Visit
            </button>
          </div>
        </div>

        {/* Right Close-Up Craftsmanship Photograph */}
        <div 
          style={{
            position: 'relative',
            minHeight: '520px',
            backgroundImage: `url('https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          {/* Subtle gold badge floating on image */}
          <div 
            style={{
              position: 'absolute',
              bottom: '30px',
              right: '30px',
              backgroundColor: 'rgba(56, 7, 18, 0.9)',
              padding: '16px 20px',
              border: '1px solid var(--color-gold)',
              backdropFilter: 'blur(6px)'
            }}
          >
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-gold)' }}>
              Kurz Luxor 428 Semi-Matte Gold
            </div>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-silk)' }}>
              Tested Authentic Bullion Thread
            </div>
          </div>
        </div>
      </section>

      {/* 5. Master Weaver Handlooms & Bestsellers Grid */}
      <section style={{ padding: '90px 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <span className="eyebrow">✦ Discerning Connoisseurs</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-burgundy)', marginTop: '8px' }}>
              Curated Masterpieces
            </h2>
            <div className="gold-rule" style={{ maxWidth: '120px', margin: '14px auto' }} />
            <p style={{ color: 'var(--color-onyx-muted)', fontSize: '0.88rem' }}>
              Hand-selected Kanchipuram bridal drapes, Banarasi kadwa brocades, and iconic Kerala Kasavu handlooms.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button 
              onClick={() => navigateTo('shop')}
              className="btn-luxury-primary"
              style={{ padding: '16px 44px' }}
            >
              Browse Complete Catalogue ({products.length} Ensembles)
            </button>
          </div>
        </div>
      </section>

      {/* 6. High-Society Client Accolades / Testimonials */}
      <section 
        style={{
          padding: '80px 24px',
          backgroundColor: 'var(--color-silk)',
          borderTop: '1px solid var(--color-silk-border)'
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">✦ Sovereign Muses</span>
          <h2 style={{ fontSize: '2.3rem', color: 'var(--color-burgundy)', marginTop: '6px', marginBottom: '32px' }}>
            Words From Our Brides
          </h2>

          <div 
            style={{
              backgroundColor: '#FFFFFF',
              padding: '48px 36px',
              border: '1px solid var(--color-silk-border)',
              boxShadow: 'var(--shadow-subtle)',
              position: 'relative'
            }}
          >
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                color: 'var(--color-burgundy)',
                fontStyle: 'italic',
                lineHeight: 1.6,
                marginBottom: '20px'
              }}
            >
              "The bespoke bridal sketch session with Mydhili’s atelier was surreal. Wearing my Kanchipuram silk saree with the authentic bullion zardozi blouse made me feel connected to centuries of regal heritage. The craftsmanship drew tears from my grandmother."
            </p>
            <div style={{ fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
              ✦ Aishwarya & Gautham Ramanathan
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
              Chennai & London • Muhurtham Ceremony 2026
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
