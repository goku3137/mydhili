import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Scissors, 
  Palette, 
  Sparkles, 
  Ruler, 
  Clock, 
  CheckCircle2, 
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const BespokePage = () => {
  const { navigateTo } = useShop();

  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: 'In-Atelier Private Sketch Session (Chennai)',
    preferredDate: '',
    timeSlot: 'Morning (11:00 AM - 1:00 PM)',
    garmentType: 'Bespoke Maggam & Zardozi Bridal Blouse',
    notes: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        colors: ['#D4AF37', '#380712', '#FAF7F2']
      });
    } catch {
      // ignore
    }
  };

  const steps = [
    {
      num: '01',
      title: 'Private Sketch & Ideation',
      desc: '1-on-1 private dialogue exploring your bridal moodboard, temple silhouettes, jewelry heirlooms, and desired drape weight.'
    },
    {
      num: '02',
      title: 'Fabric Curation & Natural Dyes',
      desc: 'Selection from authentic handspun Katan silks, mulberry threads, and unbleached Kerala Kasavu loomed specifically for your garment.'
    },
    {
      num: '03',
      title: 'Bullion Needlework & Zardozi',
      desc: 'Master karigars in our dedicated atelier spend up to 400 hours hand-couching gold wire, beating gota patti, and securing heirloom jhumka motifs.'
    },
    {
      num: '04',
      title: 'Precision Fitting & Keepsake Packaging',
      desc: 'Final contouring and structural boning inspection, followed by preservation packing inside the 1400 GSM Mydhili Keepsake Chest.'
    }
  ];

  return (
    <div className="bespoke-page animate-fade-in" style={{ paddingBottom: '90px' }}>
      {/* Editorial Header */}
      <div 
        style={{
          backgroundColor: 'var(--color-burgundy)',
          color: 'var(--color-silk)',
          padding: '80px 24px',
          textAlign: 'center',
          borderBottom: '2px solid var(--color-gold)'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>
            ✦ Bespoke Atelier
          </span>
          <h1 
            style={{
              fontSize: 'clamp(2.6rem, 4.5vw, 4rem)',
              color: 'var(--color-silk)',
              marginTop: '12px',
              marginBottom: '16px'
            }}
          >
            The Art of Bespoke Couture
          </h1>
          <div className="gold-rule" style={{ maxWidth: '140px', margin: '16px auto' }} />
          <p style={{ color: 'rgba(250, 247, 242, 0.88)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Transitioning centuries of royal handloom tailoring into an elite couture sanctuary. Every stitch is personalized to your measurements and ancestral memories.
          </p>
        </div>
      </div>

      {/* The 4-Step Bespoke Atelier Journey */}
      <section style={{ maxWidth: '1440px', margin: '80px auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="eyebrow">✦ Atelier Protocol</span>
          <h2 style={{ fontSize: '2.4rem', color: 'var(--color-burgundy)', marginTop: '8px' }}>
            The Four Stages of Creation
          </h2>
          <div className="gold-rule" style={{ maxWidth: '100px', margin: '14px auto' }} />
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {steps.map((step, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                padding: '40px 28px',
                border: '1px solid var(--color-silk-border)',
                borderTop: '3px solid var(--color-gold)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <span 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    color: 'var(--color-gold)',
                    display: 'block',
                    marginBottom: '14px'
                  }}
                >
                  {step.num}
                </span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-burgundy)', marginBottom: '12px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-onyx-muted)', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Atelier Consultation Booking Form */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
        <div 
          style={{
            backgroundColor: 'var(--color-silk)',
            border: '1px solid var(--color-gold)',
            padding: '50px clamp(20px, 5vw, 60px)',
            boxShadow: 'var(--shadow-gold)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="eyebrow">✦ Private Appointments</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-burgundy)', marginTop: '6px' }}>
              Schedule Your Atelier Consultation
            </h2>
            <div className="gold-rule" style={{ maxWidth: '100px', margin: '14px auto' }} />
            <p style={{ fontSize: '0.85rem', color: 'var(--color-onyx-muted)' }}>
              Choose between an in-person session at our Flagship Chennai Atelier or a dedicated video concierge appointment for international brides.
            </p>
          </div>

          {isSuccess ? (
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                padding: '40px 24px',
                border: '1px solid var(--color-silk-border)',
                textAlign: 'center'
              }}
            >
              <CheckCircle2 size={48} color="#2e7d32" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-burgundy)', marginBottom: '8px' }}>
                Your Atelier Slot Has Been Scheduled
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-onyx-muted)', maxWidth: '520px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                Confirmation has been sent to <strong>{bookingForm.email}</strong>. Our senior couturier will review your preferences and welcome you on your selected appointment date.
              </p>
              <button onClick={() => setIsSuccess(false)} className="btn-luxury-outline">
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    placeholder="e.g. Priyadarshini Iyer"
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
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    placeholder="client@mydhili.com"
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
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="+91 98400 12345"
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
                    Preferred Consultation Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingForm.preferredDate}
                    onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
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
                    Consultation Format
                  </label>
                  <select
                    value={bookingForm.consultationType}
                    onChange={(e) => setBookingForm({ ...bookingForm, consultationType: e.target.value })}
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
                    <option value="In-Atelier Private Sketch Session (Chennai)">In-Atelier Private Sketch Session (Chennai)</option>
                    <option value="Virtual High-Def Video Consultation (Global Diaspora)">Virtual High-Def Video Consultation (Global Diaspora)</option>
                    <option value="Heirloom Saree Restyling & Zardozi Blouse Pairing">Heirloom Saree Restyling & Zardozi Blouse Pairing</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '6px' }}>
                    Preferred Time of Day
                  </label>
                  <select
                    value={bookingForm.timeSlot}
                    onChange={(e) => setBookingForm({ ...bookingForm, timeSlot: e.target.value })}
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
                    <option value="Morning (11:00 AM - 1:00 PM)">Morning (11:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:30 PM - 4:30 PM)">Afternoon (2:30 PM - 4:30 PM)</option>
                    <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '6px' }}>
                  Design Notes & Desired Embellishments
                </label>
                <textarea
                  rows={3}
                  value={bookingForm.notes}
                  onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                  placeholder="Share details about your desired silhouette, bullion zardozi density, corsetry boning, or occasion timeline."
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

              <div style={{ marginTop: '10px' }}>
                <button
                  type="submit"
                  className="btn-luxury-primary"
                  style={{ width: '100%', padding: '16px' }}
                >
                  Confirm Atelier Booking Request
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default BespokePage;
