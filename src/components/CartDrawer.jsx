import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const CartDrawer = () => {
  const { 
    cart, 
    isCartDrawerOpen, 
    setIsCartDrawerOpen, 
    removeFromCart, 
    updateQuantity, 
    cartSubtotal,
    navigateTo 
  } = useShop();

  if (!isCartDrawerOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(45, 35, 37, 0.65)',
        backdropFilter: 'blur(4px)',
        transition: 'opacity 0.3s ease'
      }}
      onClick={() => setIsCartDrawerOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-burgundy)',
          animation: 'slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '20px 24px',
            backgroundColor: 'var(--color-burgundy)',
            color: 'var(--color-silk)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--color-gold)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} color="var(--color-gold)" />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', letterSpacing: '0.04em' }}>
              Your Atelier Shopping Bag
            </h3>
          </div>
          <button
            onClick={() => setIsCartDrawerOpen(false)}
            aria-label="Close Shopping Bag"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-gold-light)',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Complimentary Packaging Note */}
        <div
          style={{
            backgroundColor: 'var(--color-silk)',
            padding: '10px 20px',
            fontSize: '0.74rem',
            color: 'var(--color-burgundy)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid var(--color-silk-border)'
          }}
        >
          <Sparkles size={14} color="var(--color-gold)" />
          <span>Complimentary Mydhili Keepsake Rigid Gift Chest with every bridal order.</span>
        </div>

        {/* Items List */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', margin: 'auto' }}>
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-silk)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  border: '1px solid var(--color-silk-border)'
                }}
              >
                <ShoppingBag size={28} color="var(--color-gold)" />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-burgundy)', marginBottom: '8px' }}>
                Your Bag is Empty
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-onyx-muted)', marginBottom: '20px' }}>
                Explore our master weaver handlooms and heirloom bridal couture creations.
              </p>
              <button
                onClick={() => {
                  setIsCartDrawerOpen(false);
                  navigateTo('shop');
                }}
                className="btn-luxury-primary"
              >
                Explore Collections
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}`}
                style={{
                  display: 'flex',
                  gap: '16px',
                  paddingBottom: '18px',
                  borderBottom: '1px solid var(--color-silk-border)'
                }}
              >
                {/* Product Thumbnail */}
                <img
                  src={item.images[0]}
                  alt={item.name}
                  style={{
                    width: '84px',
                    height: '110px',
                    objectFit: 'cover',
                    backgroundColor: 'var(--color-silk)'
                  }}
                />

                {/* Details */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.05rem',
                          color: 'var(--color-burgundy)',
                          lineHeight: 1.2
                        }}
                      >
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        aria-label="Remove item"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--color-onyx-muted)',
                          cursor: 'pointer',
                          padding: '2px'
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div style={{ fontSize: '0.74rem', color: 'var(--color-gold)', marginTop: '4px', fontWeight: 600 }}>
                      Size: {item.selectedSize}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                    {/* Quantity Selector */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid var(--color-silk-border)',
                        height: '32px'
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                        style={{
                          width: '28px',
                          height: '100%',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          color: 'var(--color-onyx)'
                        }}
                      >
                        -
                      </button>
                      <span style={{ padding: '0 8px', fontSize: '0.8rem', fontWeight: 600 }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                        style={{
                          width: '28px',
                          height: '100%',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          color: 'var(--color-onyx)'
                        }}
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-burgundy)' }}>
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div
            style={{
              padding: '20px 24px',
              borderTop: '1px solid var(--color-silk-border)',
              backgroundColor: 'var(--color-silk)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-onyx-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Estimated Subtotal
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-burgundy)' }}>
                ₹{cartSubtotal.toLocaleString('en-IN')}
              </span>
            </div>

            <div style={{ fontSize: '0.72rem', color: 'var(--color-onyx-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} color="var(--color-gold)" />
              <span>Complimentary insured shipping & custom garment bag included.</span>
            </div>

            <button
              onClick={() => {
                setIsCartDrawerOpen(false);
                navigateTo('checkout');
              }}
              className="btn-luxury-primary"
              style={{ width: '100%', padding: '16px' }}
            >
              Proceed to Concierge Checkout <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default CartDrawer;
