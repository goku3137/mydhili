import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { User, Calendar, Clock, MapPin, ShieldCheck, ShoppingBag, Sparkles, LogOut } from 'lucide-react';

export const AccountPage = () => {
  const { user, navigateTo } = useShop();

  const [activeTab, setActiveTab] = useState('consultations'); // 'consultations' | 'orders' | 'profile'

  const demoOrders = [
    {
      id: 'MYD-819204',
      date: '18 September 2026',
      items: 'The Temple Gold Kanchipuram Silk Saree',
      amount: 68500,
      status: 'Delivered in Keepsake Box',
      tracking: 'BLUEDART-APEX-8910248'
    }
  ];

  return (
    <div className="account-page animate-fade-in" style={{ padding: '60px 24px 90px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Account Header */}
        <div 
          style={{
            backgroundColor: 'var(--color-burgundy)',
            color: 'var(--color-silk)',
            padding: '40px 32px',
            borderBottom: '2px solid var(--color-gold)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div 
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                border: '1px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <User size={30} color="var(--color-gold)" />
            </div>
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>
                ✦ Sovereign Client Profile
              </span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-silk)', marginTop: '4px' }}>
                {user.name}
              </h1>
              <p style={{ fontSize: '0.8rem', color: 'rgba(250, 247, 242, 0.75)' }}>
                {user.email} • {user.phone}
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span 
              style={{
                backgroundColor: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid var(--color-gold)',
                color: 'var(--color-gold)',
                padding: '6px 14px',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              Atelier Tier: Bespoke Sovereign
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div 
          className="account-tabs-bar"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-silk-border)',
            borderTop: 'none',
            display: 'flex',
            gap: '24px',
            padding: '0 24px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {[
            { id: 'consultations', label: 'Bridal Appointments (1)' },
            { id: 'orders', label: 'Past Orders (1)' },
            { id: 'profile', label: 'Client Measurements & Address' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'none',
                border: 'none',
                padding: '16px 0',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                cursor: 'pointer',
                flexShrink: 0,
                whiteSpace: 'nowrap',
                color: activeTab === tab.id ? 'var(--color-burgundy)' : 'var(--color-onyx-muted)',
                fontWeight: activeTab === tab.id ? 600 : 400,
                borderBottom: activeTab === tab.id ? '2px solid var(--color-gold)' : '2px solid transparent'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div style={{ marginTop: '32px' }}>
          {activeTab === 'consultations' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {user.consultations.map((c) => (
                <div 
                  key={c.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-silk-border)',
                    padding: '28px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Calendar size={16} color="var(--color-gold)" />
                      <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-burgundy)' }}>
                        {c.type}
                      </strong>
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--color-onyx)' }}>
                      Date: <strong>{c.date}</strong> at <strong>{c.time}</strong>
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
                      Reference ID: {c.id} • Senior Couturier Atelier Suite 02
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span 
                      style={{
                        padding: '6px 14px',
                        backgroundColor: 'var(--color-silk)',
                        border: '1px solid var(--color-gold)',
                        color: 'var(--color-burgundy)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        textTransform: 'uppercase'
                      }}
                    >
                      {c.status}
                    </span>
                    <button onClick={() => navigateTo('bespoke')} className="btn-luxury-outline" style={{ padding: '8px 16px', fontSize: '0.72rem' }}>
                      Reschedule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'orders' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {demoOrders.map((ord) => (
                <div 
                  key={ord.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-silk-border)',
                    padding: '28px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-gold)', letterSpacing: '0.1em', fontWeight: 600 }}>
                      Order Ref: {ord.id} • {ord.date}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-burgundy)', marginTop: '4px' }}>
                      {ord.items}
                    </h3>
                    <div style={{ fontSize: '0.76rem', color: 'var(--color-onyx-muted)', marginTop: '4px' }}>
                      Tracking: {ord.tracking}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-burgundy)' }}>
                      ₹{ord.amount.toLocaleString('en-IN')}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#2e7d32', fontWeight: 600, marginTop: '4px' }}>
                      {ord.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'profile' && (
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-silk-border)',
                padding: '32px'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-burgundy)', marginBottom: '16px' }}>
                Primary Delivery Residence
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-onyx)', lineHeight: 1.6, maxWidth: '480px' }}>
                {user.address}
              </p>
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--color-silk-border)' }}>
                <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>✦ Recorded Bridal Measurements</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '14px', marginTop: '12px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'var(--color-silk)', border: '1px solid var(--color-silk-border)' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-onyx-muted)' }}>Bust</div>
                    <div style={{ fontWeight: 600 }}>36.5 inches</div>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'var(--color-silk)', border: '1px solid var(--color-silk-border)' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-onyx-muted)' }}>Underbust</div>
                    <div style={{ fontWeight: 600 }}>30.0 inches</div>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'var(--color-silk)', border: '1px solid var(--color-silk-border)' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-onyx-muted)' }}>Waist to Floor</div>
                    <div style={{ fontWeight: 600 }}>42.5 inches</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
