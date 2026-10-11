import React from 'react';
import { useShop } from '../context/ShopContext';
import MydhiliLogo from '../components/MydhiliLogo';
import { Sparkles, Award, Feather, ShieldCheck, Heart, MapPin } from 'lucide-react';

export const AboutPage = () => {
  const { navigateTo } = useShop();

  return (
    <div className="about-page animate-fade-in" style={{ paddingBottom: '90px' }}>
      {/* Editorial Storytelling Hero */}
      <section 
        style={{
          backgroundColor: 'var(--color-burgundy)',
          color: 'var(--color-silk)',
          padding: '90px 24px',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>
            ✦ Heritage & Lineage
          </span>
          <h1 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
              color: 'var(--color-silk)',
              marginTop: '12px',
              marginBottom: '20px',
              lineHeight: 1.15
            }}
          >
            Transitioning Boutique Tailoring into an Elite Haute Couture House
          </h1>
          <div className="gold-rule" style={{ maxWidth: '140px', margin: '20px auto' }} />
          <p 
            style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)',
              color: 'rgba(250, 247, 242, 0.88)',
              lineHeight: 1.8
            }}
          >
            Rooted in the Sanskrit name for Goddess Sita (daughter of Mithila), the name <em>Mydhili</em> symbolizes graceful sovereignty, auspicious elegance, pristine beauty, and unwavering inner resilience.
          </p>
        </div>
      </section>

      {/* Brand Archetype & Tone Story */}
      <section style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 24px' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          <div>
            <span className="eyebrow">✦ Brand Archetype</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-burgundy)', marginTop: '8px', marginBottom: '20px' }}>
              The Sovereign Muse: Regal, Alluring & Culturally Rooted
            </h2>
            <p style={{ color: 'var(--color-onyx-muted)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '16px' }}>
              Having established deep trust in handcrafted traditional garments, our 2026 rebranding positions Mydhili as a premier couture destination for discerning South Asian brides and connoisseurs worldwide.
            </p>
            <p style={{ color: 'var(--color-onyx-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>
              Our voice is poetic & aristocratic—celebrating understated luxury, warm Southern hospitality, and immaculate poise. We do not mass-produce; we preserve generational techniques through slow, intentional fashion.
            </p>

            <div style={{ marginTop: '32px', display: 'flex', gap: '20px' }}>
              <div style={{ padding: '16px 20px', backgroundColor: '#FFFFFF', border: '1px solid var(--color-silk-border)' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-gold)' }}>100%</div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pure Natural Fibers</div>
              </div>
              <div style={{ padding: '16px 20px', backgroundColor: '#FFFFFF', border: '1px solid var(--color-silk-border)' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-burgundy)' }}>400+</div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Karigar Atelier Hours</div>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1610030469668-93510cb67655?auto=format&fit=crop&w=1000&q=85" 
              alt="Craftsmanship in Banaras"
              style={{
                width: '100%',
                height: '460px',
                objectFit: 'cover',
                border: '1px solid var(--color-gold)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Anatomy of the Sacred Monogram Crest (Page 3 of Guidelines) */}
      <section 
        style={{
          backgroundColor: '#FFFFFF',
          padding: '80px 24px',
          borderTop: '1px solid var(--color-silk-border)',
          borderBottom: '1px solid var(--color-silk-border)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="eyebrow">✦ Visual Crest & Monogram</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-burgundy)', marginTop: '8px' }}>
              The Insignia Architecture & Anatomy
            </h2>
            <div className="gold-rule" style={{ maxWidth: '120px', margin: '14px auto' }} />
            <p style={{ color: 'var(--color-onyx-muted)', fontSize: '0.88rem' }}>
              Sacred geometry and cultural symbolism uniting the Mydhili monogram crest.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              {
                num: '1',
                title: 'Architectural Serif Stem',
                desc: 'The left stem anchors the letter with classical Roman permanence, structural dignity, and balanced weight.'
              },
              {
                num: '2',
                title: 'Cascading Drapes & Hair',
                desc: 'The sweeping interior curves mimic a bridal silk pallu in motion and lustrous cascading ceremonial hair.'
              },
              {
                num: '3',
                title: 'Jasmine Blossom (Gajra)',
                desc: 'The five-petal crown cluster represents auspicious celebration, divine blessings, and feminine grace.'
              },
              {
                num: '4',
                title: 'Heirloom Jhumka',
                desc: 'The delicate dangling bell earring honors centuries of Indian temple jewelry and bridal heritage.'
              }
            ].map((item) => (
              <div 
                key={item.num}
                style={{
                  padding: '30px 24px',
                  backgroundColor: 'var(--color-silk)',
                  border: '1px solid var(--color-silk-border)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-gold)', marginBottom: '8px' }}>
                  Part 0{item.num}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-burgundy)', marginBottom: '10px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-onyx-muted)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <MydhiliLogo variant="burgundy" layout="full" height={60} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
