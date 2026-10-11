import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Sparkles, Calendar, Clock, Heart, CheckCircle2, User, Phone, Mail, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export const BridalPage = () => {
  const { products, navigateTo } = useShop();

  const bridalProducts = products.filter(
    (p) => p.category === 'Bridal Couture' || p.badge === 'Bridal Favorite' || p.category === 'Kanchipuram Silks'
  );

  const [formData, setFormData] = useState({
    brideName: '',
    email: '',
    phone: '',
    weddingDate: '',
    city: '',
    serviceInterest: 'Bespoke Bridal Lehenga & Blouse',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#380712', '#D4AF37', '#FAF7F2']
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="bridal-page animate-fade-in" style={{ paddingBottom: '90px' }}>
      {/* 1. Cinematic Bridal Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'var(--color-burgundy)',
          color: 'var(--color-silk)',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=2000&q=90')`,
            backgroundPosition: 'center 30%',
            backgroundSize: 'cover',
            filter: 'brightness(0.65)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(56, 7, 18, 0.4) 0%, rgba(56, 7, 18, 0.9) 100%)'
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '80px 24px',
            textAlign: 'center'
          }}
        >
          <span className="eyebrow" style={{ color: 'var(--color-gold-light)', fontSize: '0.78rem' }}>
            ✦ The Sovereign Muse
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.6rem)',
              color: 'var(--color-silk)',
              lineHeight: 1.15,
              marginTop: '12px',
              marginBottom: '20px'
            }}
          >
            The South Asian Bridal Haute Couture
          </h1>
          <div className="gold-rule" style={{ maxWidth: '140px', margin: '20px auto' }} />
          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: 'rgba(250, 247, 242, 0.9)',
              maxWidth: '680px',
              margin: '0 auto 36px',
              lineHeight: 1.7
            }}
          >
            From the auspicious morning Muhurtham in pure beaten gold Kanchipuram silks to the twirling imperial velvet zardozi reception lehenga.
          </p>

          <a
            href="#appointment-form"
            className="btn-luxury-gold"
            style={{ padding: '16px 36px' }}
          >
            Book Private Bridal Salon Appointment &rarr;
          </a>
        </div>
      </section>

      {/* 2. Bridal Ensembles Gallery */}
      <section style={{ maxWidth: '1440px', margin: '80px auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="eyebrow">✦ Heirloom Trousseau</span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-burgundy)', marginTop: '8px' }}>
            Curated Bridal Ensembles
          </h2>
          <div className="gold-rule" style={{ maxWidth: '120px', margin: '14px auto' }} />
          <p style={{ color: 'var(--color-onyx-muted)', fontSize: '0.88rem' }}>
            Every bridal creation is meticulously cataloged with hours of hand craftsmanship and authentic gold purity specs.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}
        >
          {bridalProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 3. The Private Bridal Appointment Form */}
      <section
        id="appointment-form"
        style={{
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid var(--color-silk-border)',
          borderBottom: '1px solid var(--color-silk-border)',
          padding: '80px 24px'
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            border: '1px solid var(--color-gold)',
            padding: '48px clamp(20px, 5vw, 60px)',
            backgroundColor: 'var(--color-silk)',
            boxShadow: 'var(--shadow-gold)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="eyebrow">✦ Bespoke Salon</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-burgundy)', marginTop: '6px' }}>
              Reserve Your Bridal Consultation
            </h2>
            <div className="gold-rule" style={{ maxWidth: '100px', margin: '14px auto' }} />
            <p style={{ fontSize: '0.85rem', color: 'var(--color-onyx-muted)' }}>
              Consult directly with our Creative Director and master karigars in our Chennai atelier or via a 1-on-1 virtual haute couture session.
            </p>
          </div>

          {isSubmitted ? (
            <div
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-silk-border)'
              }}
            >
              <CheckCircle2 size={48} color="#2e7d32" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-burgundy)', marginBottom: '8px' }}>
                Your Consultation Request Has Been Received
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-onyx-muted)', maxWidth: '500px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                Our Head Concierge will contact you within 24 hours at <strong>{formData.phone || formData.email}</strong> to finalize your appointment schedule and mail your bridal welcome dossier.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-luxury-outline"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '6px' }}>
                    Bride's Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.brideName}
                    onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                    placeholder="e.g. Radhika Sundaram"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: '1px solid var(--color-silk-border)',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '6px' }}>
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98400 00000"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: '1px solid var(--color-silk-border)',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="bride@couture.com"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: '1px solid var(--color-silk-border)',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '6px' }}>
                    Anticipated Wedding / Ceremony Date
                  </label>
                  <input
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: '1px solid var(--color-silk-border)',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '6px' }}>
                  Consultation Focus
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid var(--color-silk-border)',
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="Bespoke Bridal Lehenga & Blouse">Bespoke Bridal Lehenga & Blouse</option>
                  <option value="Muhurtham Pure Kanchipuram Weaving">Muhurtham Pure Kanchipuram Weaving Consultation</option>
                  <option value="Banarasi Kadwa Heirloom Trousseau">Banarasi Kadwa Heirloom Trousseau</option>
                  <option value="Complete Multi-Ceremony Bridal Suite">Complete Multi-Ceremony Bridal Suite (Sangeet + Muhurtham + Reception)</option>
                  <option value="Virtual Video Consultation (International Bride)">Virtual Video Consultation (International Diaspora)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '6px' }}>
                  Custom Notes & Color Palette Preferences
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details regarding your preferred drape style, jewelry pairings, or specific heirloom family sarees you wish to incorporate."
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid var(--color-silk-border)',
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ textAlign: 'center', marginTop: '12px' }}>
                <button
                  type="submit"
                  className="btn-luxury-primary"
                  style={{ padding: '16px 48px', width: '100%' }}
                >
                  Confirm Bridal Salon Appointment Request
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default BridalPage;
