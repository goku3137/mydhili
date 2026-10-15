import React from 'react';
import { Link } from 'react-router-dom';
import MydhiliLogo from './MydhiliLogo';
import { Sparkles, Mail, ShieldCheck, MapPin, Phone, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer 
      style={{
        backgroundColor: 'var(--color-burgundy)',
        color: 'var(--color-silk)',
        borderTop: '2px solid var(--color-gold)',
        paddingTop: '64px',
        paddingBottom: '32px',
        fontFamily: 'var(--font-sans)',
        position: 'relative'
      }}
    >
      <div 
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        {/* Top Newsletter & Atelier Concierge Banner */}
        <div 
          className="footer-newsletter-banner"
          style={{
            borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
            paddingBottom: '48px',
            marginBottom: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          <div>
            <span 
              style={{
                fontSize: '0.74rem',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Sparkles size={14} /> The Mydhili Salon Gazette
            </span>
            <h3 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: 'var(--color-silk)',
                marginTop: '8px',
                marginBottom: '10px'
              }}
            >
              Invitations to Private Showcases & Heirloom Unveilings
            </h3>
            <p style={{ color: 'rgba(250, 247, 242, 0.75)', fontSize: '0.86rem', maxWidth: '540px', lineHeight: 1.6 }}>
              Receive exclusive private salon previews of limited-edition Kanchipuram weaves, imperial zardozi bridal collections, and private trunk shows worldwide.
            </p>
          </div>

          <div>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Mydhili Haute Couture Gazette.');
              }}
              className="footer-newsletter-form"
              style={{
                display: 'flex',
                gap: '8px',
                maxWidth: '460px'
              }}
            >
              <input 
                type="email" 
                required 
                placeholder="Enter your private email address" 
                style={{
                  flex: 1,
                  padding: '14px 18px',
                  backgroundColor: 'rgba(250, 247, 242, 0.08)',
                  border: '1px solid var(--color-gold)',
                  color: 'var(--color-silk)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.84rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                className="btn-luxury-gold"
                style={{ whiteSpace: 'nowrap', padding: '14px 24px' }}
              >
                Request Access
              </button>
            </form>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', color: 'rgba(250, 247, 242, 0.6)', fontSize: '0.72rem' }}>
              <ShieldCheck size={14} color="var(--color-gold)" />
              <span>We honour utmost client discretion. No spam or third-party disclosures.</span>
            </div>
          </div>
        </div>

        {/* 4-Column Navigation Layout */}
        <div 
          className="footer-links-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Column 1: Brand Atelier */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '18px', textDecoration: 'none' }}>
              <MydhiliLogo variant="gold" layout="full" height={56} />
            </Link>
            <p style={{ color: 'rgba(250, 247, 242, 0.75)', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '20px' }}>
              Bespoke South Asian Bridal Atelier & Certified Master Weaver Silks. Crafting museum-grade heirlooms for discerning brides across Chennai, Hyderabad, London, New York, and Dubai.
            </p>
            <div style={{ display: 'flex', gap: '14px' }}>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ color: 'var(--color-gold)', opacity: 0.85, transition: 'opacity 0.2s' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* Pinterest */}
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest" style={{ color: 'var(--color-gold)', opacity: 0.85, transition: 'opacity 0.2s' }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.94-.1-2.38.02-3.41l.78-3.32s-.2-.39-.2-.97c0-.91.53-1.59 1.18-1.59.56 0 .83.42.83.92 0 .56-.36 1.4-.54 2.18-.15.65.33 1.18.97 1.18 1.16 0 2.06-1.23 2.06-3 0-1.57-1.13-2.67-2.74-2.67-1.87 0-2.96 1.4-2.96 2.85 0 .56.22 1.17.49 1.5.05.07.06.13.04.2l-.19.78c-.03.12-.1.15-.23.09-1-.46-1.62-1.92-1.62-3.09 0-2.52 1.83-4.83 5.28-4.83 2.77 0 4.93 1.98 4.93 4.62 0 2.76-1.74 4.97-4.15 4.97-.81 0-1.57-.42-1.84-.91l-.5 1.91c-.18.7-.68 1.57-1.01 2.11A12 12 0 1 0 12 0z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" style={{ color: 'var(--color-gold)', opacity: 0.85, transition: 'opacity 0.2s' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '16px', fontWeight: 600 }}>
              Curated Collections
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.82rem' }}>
              <li>
                <Link to="/bridal" style={{ textDecoration: 'none', color: 'rgba(250, 247, 242, 0.8)', transition: 'color 0.2s' }}>
                  Bridal Haute Couture
                </Link>
              </li>
              <li>
                <Link to="/collections/kanchipuram-silks" style={{ textDecoration: 'none', color: 'rgba(250, 247, 242, 0.8)', transition: 'color 0.2s' }}>
                  Kanchipuram Silk Sarees
                </Link>
              </li>
              <li>
                <Link to="/collections/banarasi-brocades" style={{ textDecoration: 'none', color: 'rgba(250, 247, 242, 0.8)', transition: 'color 0.2s' }}>
                  Banarasi Kadwa Brocades
                </Link>
              </li>
              <li>
                <Link to="/collections/kerala-kasavu" style={{ textDecoration: 'none', color: 'rgba(250, 247, 242, 0.8)', transition: 'color 0.2s' }}>
                  Authentic Kerala Kasavu
                </Link>
              </li>
              <li>
                <Link to="/collections/festive-silks" style={{ textDecoration: 'none', color: 'rgba(250, 247, 242, 0.8)', transition: 'color 0.2s' }}>
                  Festive Silk Ensembles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Atelier & Client Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '16px', fontWeight: 600 }}>
              Bespoke Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.82rem' }}>
              <li>
                <Link to="/bespoke" style={{ textDecoration: 'none', color: 'rgba(250, 247, 242, 0.8)', transition: 'color 0.2s' }}>
                  Private Bridal Sketch Salon
                </Link>
              </li>
              <li>
                <Link to="/bespoke" style={{ textDecoration: 'none', color: 'rgba(250, 247, 242, 0.8)', transition: 'color 0.2s' }}>
                  Heirloom Saree Restyling
                </Link>
              </li>
              <li>
                <Link to="/faqs" style={{ textDecoration: 'none', color: 'rgba(250, 247, 242, 0.8)', transition: 'color 0.2s' }}>
                  Worldwide Bridal Shipping
                </Link>
              </li>
              <li>
                <Link to="/faqs" style={{ textDecoration: 'none', color: 'rgba(250, 247, 242, 0.8)', transition: 'color 0.2s' }}>
                  Custom Measurement Guide
                </Link>
              </li>
              <li>
                <Link to="/account" style={{ textDecoration: 'none', color: 'rgba(250, 247, 242, 0.8)', transition: 'color 0.2s' }}>
                  Client Consultation Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Atelier Salon Location */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '16px', fontWeight: 600 }}>
              Flagship Atelier
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.82rem', color: 'rgba(250, 247, 242, 0.8)' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <MapPin size={16} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Mydhili Haute Couture House, Boat Club Avenue, R.A. Puram, Chennai, TN 600028</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={15} color="var(--color-gold)" />
                <span>+91 98400 12345 / Concierge Desk</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Clock size={15} color="var(--color-gold)" />
                <span>Tue – Sun: 10:30 AM – 7:30 PM (By Appointment)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Demo Notice & Copyright */}
        <div 
          style={{
            borderTop: '1px solid rgba(212, 175, 55, 0.2)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: 'rgba(250, 247, 242, 0.55)',
            gap: '12px'
          }}
        >
          <div>
            © 2026 Mydhili Boutique. Master Rebranding Edition. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ color: 'var(--color-gold-light)', fontWeight: 500 }}>
              ✦ Demo Presentation Mode
            </span>
            <Link to="/faqs" style={{ textDecoration: 'none', color: 'inherit' }}>
              Terms & Privileges
            </Link>
            <Link to="/faqs" style={{ textDecoration: 'none', color: 'inherit' }}>
              Authenticity Certificate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
