import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft,
  ShoppingBag,
  Truck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CheckoutPage = () => {
  const { cart, cartSubtotal, clearCart, navigateTo } = useShop();

  const [formData, setFormData] = useState({
    firstName: 'Radhika',
    lastName: 'Ramanathan',
    email: 'client@mydhili.com',
    phone: '+91 98400 12345',
    address: '14, Imperial Heritage Enclave, Boat Club Road',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600028',
    country: 'India',
    paymentMethod: 'razorpay',
    giftMessage: 'Kindly pack in the Mydhili Keepsake Chest with gold wax seal.'
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const mockOrderId = `MYD-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderComplete({
        orderId: mockOrderId,
        total: cartSubtotal,
        date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
      });
      clearCart();
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.5 },
          colors: ['#D4AF37', '#380712', '#FAF7F2']
        });
      } catch {
        // ignore
      }
    }, 1800);
  };

  if (orderComplete) {
    return (
      <div className="order-complete-screen animate-fade-in" style={{ padding: '80px 24px', maxWidth: '720px', margin: '0 auto' }}>
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-gold)',
            padding: '50px 36px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-gold)'
          }}
        >
          <div 
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-silk)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              border: '1px solid var(--color-gold)'
            }}
          >
            <CheckCircle2 size={36} color="var(--color-burgundy)" />
          </div>

          <span className="eyebrow">✦ Order Confirmed</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-burgundy)', marginTop: '8px', marginBottom: '14px' }}>
            Congratulations, Your Couture Order is Placed
          </h1>
          <div className="gold-rule" style={{ maxWidth: '100px', margin: '14px auto' }} />

          <p style={{ fontSize: '0.88rem', color: 'var(--color-onyx-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
            Thank you for placing your trust in Mydhili Boutique. Your order reference is <strong>{orderComplete.orderId}</strong>. Our White-Glove Concierge will prepare your handloom order in the Mydhili Keepsake Rigid Gift Chest with certificates of authenticity.
          </p>

          <div 
            style={{
              backgroundColor: 'var(--color-silk)',
              padding: '18px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '32px',
              border: '1px solid var(--color-silk-border)'
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-onyx-muted)' }}>Amount Billed</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', color: 'var(--color-burgundy)' }}>
                ₹{orderComplete.total.toLocaleString('en-IN')}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-onyx-muted)' }}>Status</div>
              <div style={{ fontSize: '0.82rem', color: '#2e7d32', fontWeight: 600 }}>Confirmed (Atelier Queue)</div>
            </div>
          </div>

          <button onClick={() => navigateTo('home')} className="btn-luxury-primary" style={{ padding: '16px 36px' }}>
            Return to Atelier Home
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div style={{ padding: '100px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-burgundy)', marginBottom: '12px' }}>
          Your Bag is Currently Empty
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--color-onyx-muted)', marginBottom: '24px' }}>
          Please select an ensemble from our collections before proceeding to checkout.
        </p>
        <button onClick={() => navigateTo('shop')} className="btn-luxury-primary">
          Explore Handloom Collections
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page animate-fade-in" style={{ padding: '60px 24px 90px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top Back & Demo Notice Banner */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <button 
            onClick={() => navigateTo('shop')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.78rem',
              color: 'var(--color-burgundy)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontWeight: 600
            }}
          >
            <ArrowLeft size={16} /> Return to Shopping
          </button>

          <div 
            style={{
              padding: '6px 14px',
              backgroundColor: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              fontSize: '0.72rem',
              color: 'var(--color-burgundy)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Sparkles size={13} color="var(--color-gold)" /> Demo Presentation Checkout (No Real Charge)
          </div>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '48px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Client Shipping & Simulated Payment */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {/* Shipping Details */}
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '30px',
                  border: '1px solid var(--color-silk-border)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                  <Truck size={18} color="var(--color-gold)" />
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-burgundy)' }}>
                    1. Concierge Delivery Address
                  </h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 600 }}>First Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-silk-border)', outline: 'none' }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 600 }}>Last Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-silk-border)', outline: 'none' }} 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 600 }}>Email</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-silk-border)', outline: 'none' }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 600 }}>Phone (WhatsApp)</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-silk-border)', outline: 'none' }} 
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 600 }}>Street Address</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-silk-border)', outline: 'none' }} 
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 600 }}>City</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-silk-border)', outline: 'none' }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 600 }}>State</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-silk-border)', outline: 'none' }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 600 }}>Postal Code</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--color-silk-border)', outline: 'none' }} 
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '30px',
                  border: '1px solid var(--color-silk-border)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                  <CreditCard size={18} color="var(--color-gold)" />
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-burgundy)' }}>
                    2. Payment Method
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <label 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 16px',
                      border: formData.paymentMethod === 'razorpay' ? '1px solid var(--color-gold)' : '1px solid var(--color-silk-border)',
                      backgroundColor: formData.paymentMethod === 'razorpay' ? 'var(--color-silk)' : '#FFFFFF',
                      cursor: 'pointer'
                    }}
                  >
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={formData.paymentMethod === 'razorpay'} 
                      onChange={() => setFormData({ ...formData, paymentMethod: 'razorpay' })}
                      style={{ accentColor: 'var(--color-burgundy)' }}
                    />
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Razorpay Secure / UPI / Cards (Domestic India)</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--color-onyx-muted)' }}>GPay, PhonePe, Netbanking, Credit & Debit Cards</div>
                    </div>
                  </label>

                  <label 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 16px',
                      border: formData.paymentMethod === 'international' ? '1px solid var(--color-gold)' : '1px solid var(--color-silk-border)',
                      backgroundColor: formData.paymentMethod === 'international' ? 'var(--color-silk)' : '#FFFFFF',
                      cursor: 'pointer'
                    }}
                  >
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={formData.paymentMethod === 'international'} 
                      onChange={() => setFormData({ ...formData, paymentMethod: 'international' })}
                      style={{ accentColor: 'var(--color-burgundy)' }}
                    />
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>International Luxury Card (USD / GBP / EUR / AED)</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--color-onyx-muted)' }}>Stripe / Global Currency Checkout</div>
                    </div>
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="btn-luxury-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '0.82rem' }}
                >
                  {isProcessing ? 'Processing Secure Demo Order...' : `Complete Order • ₹${cartSubtotal.toLocaleString('en-IN')}`}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-silk-border)',
              padding: '30px'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-burgundy)', marginBottom: '18px' }}>
              Order Summary ({cart.length} Ensembles)
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <img src={item.images[0]} alt={item.name} style={{ width: '56px', height: '72px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', color: 'var(--color-burgundy)' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-gold)', fontWeight: 600 }}>
                      Size: {item.selectedSize} × {item.quantity}
                    </div>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--color-silk-border)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-onyx-muted)' }}>Garment Subtotal</span>
                <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-onyx-muted)' }}>White-Glove Insured Delivery</span>
                <span style={{ color: '#2e7d32', fontWeight: 600 }}>COMPLIMENTARY</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-onyx-muted)' }}>Mydhili Keepsake Rigid Chest</span>
                <span style={{ color: '#2e7d32', fontWeight: 600 }}>INCLUDED</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed var(--color-silk-border)', paddingTop: '12px', fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-burgundy)' }}>
                <span>Total Due</span>
                <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div style={{ marginTop: '24px', padding: '14px', backgroundColor: 'var(--color-silk)', border: '1px solid var(--color-silk-border)', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.72rem', color: 'var(--color-onyx-muted)' }}>
              <ShieldCheck size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
              <span>Full Authenticity Guarantee with master weaver registration number on your invoice.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
