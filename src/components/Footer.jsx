import React from 'react';
import { useShop } from '../context/ShopContext';
import MydhiliLogo from './MydhiliLogo';
import { Sparkles, Mail, ShieldCheck, MapPin, Phone, Clock } from 'lucide-react';

export const Footer = () => {
  const { navigateTo } = useShop();

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
          style={{
            borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
            paddingBottom: '48px',
            marginBottom: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          <div>
            <div className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>
              ✦ The Sovereign Gazette
            </div>
            <h3 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: 'var(--color-silk)',
                marginTop: '8px',
                lineHeight: 1.2
              }}
            >
              Inviting You Into Our Atelier
            </h3>
            <p style={{ color: 'rgba(250, 247, 242, 0.75)', fontSize: '0.85rem', marginTop: '6px', maxWidth: '440px' }}>
              Receive exclusive invitations to private bridal sketch previews, limited festive handloom drops, and high-jewelry heirloom pairings.
            </p>
          </div>

          <div>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Mydhili Atelier previews.');
              }}
              style={{ display: 'flex', gap: '8px', maxWidth: '460px' }}
            >
              <input 
                type="email"
                placeholder="Enter your email address"
                required
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  color: 'var(--color-silk)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  outline: 'none'
                }}
              />
              <button 
                type="submit"
                className="btn-luxury-gold"
                style={{ padding: '12px 20px', whiteSpace: 'nowrap' }}
              >
                Subscribe
              </button>
            </form>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '10px', fontSize: '0.72rem', color: 'rgba(250, 247, 242, 0.55)' }}>
              <ShieldCheck size={14} color="var(--color-gold)" />
              <span>We honor your privacy. Unsubscribe anytime with one click.</span>
            </div>
          </div>
        </div>

        {/* Multi-Column Main Footer Links */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Column 1: Brand & Atelier Presence */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <MydhiliLogo variant="gold" layout="full" height={44} />
            </div>
            <p style={{ fontSize: '0.82rem', color: 'rgba(250, 247, 242, 0.7)', lineHeight: 1.6, marginBottom: '16px' }}>
              Transitioning from boutique tailoring to an elite South Asian haute couture house. Preserving ancestral weaves, bullion zardozi, and celebratory memories.
            </p>
            <div style={{ display: 'flex', gap: '14px', color: 'var(--color-gold)' }}>
              <a href="#instagram" aria-label="Instagram" style={{ color: 'var(--color-gold)', transition: 'opacity 0.2s', display: 'flex', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#facebook" aria-label="Facebook" style={{ color: 'var(--color-gold)', transition: 'opacity 0.2s', display: 'flex', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <button onClick={() => navigateTo('bridal')} style={{ background: 'none', border: 'none', color: 'rgba(250, 247, 242, 0.8)', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>
                  Bridal Haute Couture
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', 'Kanchipuram Silks')} style={{ background: 'none', border: 'none', color: 'rgba(250, 247, 242, 0.8)', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>
                  Kanchipuram Silk Sarees
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', 'Banarasi Brocades')} style={{ background: 'none', border: 'none', color: 'rgba(250, 247, 242, 0.8)', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>
                  Banarasi Kadwa Brocades
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', 'Kerala Kasavu')} style={{ background: 'none', border: 'none', color: 'rgba(250, 247, 242, 0.8)', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>
                  Authentic Kerala Kasavu
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', 'Festive Silks')} style={{ background: 'none', border: 'none', color: 'rgba(250, 247, 242, 0.8)', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>
                  Festive Silk Ensembles
                </button>
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
                <button onClick={() => navigateTo('bespoke')} style={{ background: 'none', border: 'none', color: 'rgba(250, 247, 242, 0.8)', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>
                  Private Bridal Sketch Salon
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('bespoke')} style={{ background: 'none', border: 'none', color: 'rgba(250, 247, 242, 0.8)', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>
                  Heirloom Saree Restyling
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('faqs')} style={{ background: 'none', border: 'none', color: 'rgba(250, 247, 242, 0.8)', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>
                  Worldwide Bridal Shipping
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('faqs')} style={{ background: 'none', border: 'none', color: 'rgba(250, 247, 242, 0.8)', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>
                  Custom Measurement Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('account')} style={{ background: 'none', border: 'none', color: 'rgba(250, 247, 242, 0.8)', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>
                  Client Consultation Status
                </button>
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
            <button onClick={() => navigateTo('faqs')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit' }}>
              Terms & Privileges
            </button>
            <button onClick={() => navigateTo('faqs')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit' }}>
              Authenticity Certificate
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
