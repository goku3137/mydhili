import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ChevronDown, MapPin, Phone, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export const SupportingPages = () => {
  const { activePage } = useShop();

  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: 'How long does a bespoke bridal lehenga or atelier saree order take?',
      a: 'Bespoke bridal lehengas and hand-embroidered blouses typically take 4 to 8 weeks to complete. Ready-to-ship Kanchipuram and Banarasi handlooms are dispatched within 48 to 72 hours via our insured courier partners.'
    },
    {
      q: 'Can international clients schedule virtual bridal appointments?',
      a: 'Yes. We host private high-definition video consultations for South Asian diaspora brides across the USA, UK, Canada, UAE, Singapore, and Australia, matching your preferred timezone.'
    },
    {
      q: 'What makes Mydhili Kanchipuram silks authentic?',
      a: 'Every Mydhili Kanchipuram silk saree is loomed using 100% pure mulberry silk and authentic silver zari electroplated with sovereign gold. We partner ethically with certified generational master weaver families.'
    },
    {
      q: 'What is included in the Mydhili Keepsake Chest packaging?',
      a: 'Every heirloom order is nestled inside our signature 1400 GSM rigid box lined in burgundy soft-touch paper with double-faced satin ribbon, hot-stamped gold foil logo, and a hand-poured antique wax seal medallion.'
    },
    {
      q: 'Can I send family heirloom sarees for blouse restyling?',
      a: 'Absolutely. Our Bespoke Atelier offers heirloom restyling services where we custom-craft architectural corseted blouses and bullion zardozi accessories to match your mother or grandmother’s treasured drape.'
    }
  ];

  return (
    <div className="supporting-pages animate-fade-in" style={{ padding: '60px 24px 90px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Contact Page */}
        {activePage === 'contact' ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="eyebrow">✦ Atelier Hospitality</span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--color-burgundy)', marginTop: '8px' }}>
                Contact Our Concierge
              </h1>
              <div className="gold-rule" style={{ maxWidth: '120px', margin: '14px auto' }} />
              <p style={{ color: 'var(--color-onyx-muted)', fontSize: '0.9rem' }}>
                We welcome discerning brides, stylists, and connoisseurs to connect with our atelier desk.
              </p>
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '36px'
              }}
            >
              {/* Contact Information */}
              <div style={{ backgroundColor: '#FFFFFF', padding: '36px', border: '1px solid var(--color-silk-border)' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-burgundy)', marginBottom: '20px' }}>
                  The Flagship Atelier
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <MapPin size={20} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Mydhili Haute Couture House</strong>
                      <p style={{ color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
                        Boat Club Avenue, R.A. Puram, Chennai, Tamil Nadu 600028, India
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Phone size={20} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Bridal Concierge Hotline</strong>
                      <p style={{ color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
                        +91 98400 12345 (Direct & WhatsApp)
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Mail size={20} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Private Client Inquiries</strong>
                      <p style={{ color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
                        atelier@mydhili.com
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Clock size={20} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Salon Hours</strong>
                      <p style={{ color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
                        Tuesday – Sunday: 10:30 AM – 7:30 PM (By Prior Appointment)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Concierge Form */}
              <div style={{ backgroundColor: '#FFFFFF', padding: '36px', border: '1px solid var(--color-silk-border)' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-burgundy)', marginBottom: '20px' }}>
                  Send an Inquiry
                </h3>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you. Our bridal concierge desk has received your message.');
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                >
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Full Name" 
                    style={{ padding: '12px', border: '1px solid var(--color-silk-border)', outline: 'none' }} 
                  />
                  <input 
                    type="email" 
                    required 
                    placeholder="Email Address" 
                    style={{ padding: '12px', border: '1px solid var(--color-silk-border)', outline: 'none' }} 
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone / WhatsApp" 
                    style={{ padding: '12px', border: '1px solid var(--color-silk-border)', outline: 'none' }} 
                  />
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="How may our atelier assist you?" 
                    style={{ padding: '12px', border: '1px solid var(--color-silk-border)', outline: 'none', resize: 'vertical' }} 
                  />
                  <button type="submit" className="btn-luxury-primary" style={{ padding: '14px' }}>
                    Transmit Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          /* FAQs & Policies View */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="eyebrow">✦ Client Assistance</span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--color-burgundy)', marginTop: '8px' }}>
                Frequently Asked Inquiries & Privileges
              </h1>
              <div className="gold-rule" style={{ maxWidth: '120px', margin: '14px auto' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-silk-border)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '22px 24px',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.2rem',
                      color: 'var(--color-burgundy)'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      color="var(--color-gold)"
                      style={{
                        transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.25s ease'
                      }}
                    />
                  </button>

                  {activeFaq === idx && (
                    <div 
                      style={{
                        padding: '0 24px 22px',
                        fontSize: '0.88rem',
                        color: 'var(--color-onyx-muted)',
                        lineHeight: 1.7,
                        borderTop: '1px dashed var(--color-silk-border)',
                        paddingTop: '16px'
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportingPages;
