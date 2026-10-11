import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import MydhiliLogo from './MydhiliLogo';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  Sparkles, 
  Calendar, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const Header = () => {
  const { 
    activePage, 
    navigateTo, 
    cartCount, 
    wishlist, 
    isSearchOpen, 
    setIsSearchOpen, 
    setIsCartDrawerOpen,
    searchQuery,
    setSearchQuery,
    products,
    viewProduct
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Collections' },
    { id: 'bridal', label: 'Bridal Couture' },
    { id: 'bespoke', label: 'Bespoke Atelier' },
    { id: 'about', label: 'Our Craftsmanship' },
    { id: 'contact', label: 'Contact' }
  ];

  // Quick search results preview
  const searchResults = searchQuery.trim() 
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.fabric.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div 
        style={{
          backgroundColor: 'var(--color-burgundy)',
          color: 'var(--color-gold)',
          fontSize: '0.72rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          padding: '8px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
          fontFamily: 'var(--font-sans)',
          zIndex: 101,
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}>
          <Sparkles size={12} style={{ color: 'var(--color-gold)' }} />
          <span>Private Bridal Salon Appointments Open for 2026 Season • Worldwide Insured White-Glove Delivery</span>
          <button 
            onClick={() => navigateTo('bespoke')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-gold-light)',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              marginLeft: '6px'
            }}
          >
            Reserve Slot &rarr;
          </button>
        </div>
      </div>

      {/* Main Sticky Luxury Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(250, 247, 242, 0.96)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-silk-border)',
          transition: 'all 0.3s ease'
        }}
      >
        <div 
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-burgundy)',
                padding: '4px'
              }}
              className="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Left Nav Links */}
            <nav className="desktop-nav" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
              {navLinks.slice(0, 3).map((link) => (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: activePage === link.id ? '600' : '500',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: activePage === link.id ? 'var(--color-burgundy)' : 'var(--color-onyx)',
                    position: 'relative',
                    paddingBottom: '4px',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.label}
                  {activePage === link.id && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '16px',
                        height: '1.5px',
                        backgroundColor: 'var(--color-gold)'
                      }} 
                    />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Center Brand Identity (Master Sacred Monogram Crest & Wordmark) */}
          <div 
            onClick={() => navigateTo('home')}
            style={{ 
              cursor: 'pointer', 
              padding: '4px 12px',
              transition: 'transform 0.25s ease'
            }}
            title="Mydhili Boutique Home"
          >
            <MydhiliLogo variant="burgundy" layout="full" height={48} />
          </div>

          {/* Desktop Right Nav Links & Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <nav className="desktop-nav" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
              {navLinks.slice(3).map((link) => (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: activePage === link.id ? '600' : '500',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: activePage === link.id ? 'var(--color-burgundy)' : 'var(--color-onyx)',
                    position: 'relative',
                    paddingBottom: '4px',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.label}
                  {activePage === link.id && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '16px',
                        height: '1.5px',
                        backgroundColor: 'var(--color-gold)'
                      }} 
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Utility Icons: Search, Wishlist, Bag, Account */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginLeft: '8px' }}>
              {/* Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search Collections"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-burgundy)',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Search size={19} strokeWidth={1.8} />
              </button>

              {/* Wishlist */}
              <button
                onClick={() => navigateTo('wishlist')}
                aria-label={`Wishlist with ${wishlist.length} items`}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-burgundy)',
                  padding: '6px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Heart size={19} strokeWidth={1.8} />
                {wishlist.length > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '2px',
                      right: '1px',
                      backgroundColor: 'var(--color-gold)',
                      color: 'var(--color-burgundy)',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      borderRadius: '50%',
                      width: '15px',
                      height: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      lineHeight: 1
                    }}
                  >
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag Drawer Trigger */}
              <button
                onClick={() => setIsCartDrawerOpen(true)}
                aria-label={`Shopping Bag with ${cartCount} items`}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-burgundy)',
                  padding: '6px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <ShoppingBag size={19} strokeWidth={1.8} />
                {cartCount > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '2px',
                      right: '1px',
                      backgroundColor: 'var(--color-burgundy)',
                      color: 'var(--color-silk)',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      borderRadius: '50%',
                      width: '15px',
                      height: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      lineHeight: 1
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Account Link */}
              <button
                onClick={() => navigateTo('account')}
                aria-label="Client Account and Consultations"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-burgundy)',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <User size={19} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>

        {/* Global Search Bar Overlay */}
        {isSearchOpen && (
          <div 
            style={{
              borderTop: '1px solid var(--color-silk-border)',
              backgroundColor: '#FFFFFF',
              padding: '20px 24px',
              boxShadow: 'var(--shadow-subtle)',
              animation: 'fadeIn 0.25s ease'
            }}
          >
            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Search size={22} color="var(--color-gold)" />
                <input
                  type="text"
                  placeholder="Search Kanchipuram silks, bridal lehengas, Banarasi brocades..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '10px 0',
                    border: 'none',
                    borderBottom: '1px solid var(--color-gold)',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    color: 'var(--color-burgundy)',
                    outline: 'none',
                    backgroundColor: 'transparent'
                  }}
                />
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-onyx-muted)'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Quick Search Dropdown Results */}
              {searchResults.length > 0 && (
                <div 
                  style={{
                    marginTop: '16px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '16px'
                  }}
                >
                  {searchResults.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        viewProduct(item.id);
                        setIsSearchOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'center',
                        cursor: 'pointer',
                        padding: '8px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--color-silk)',
                        transition: 'background 0.2s'
                      }}
                    >
                      <img 
                        src={item.images[0]} 
                        alt={item.name} 
                        style={{ width: '48px', height: '60px', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', color: 'var(--color-burgundy)', lineHeight: 1.2 }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-gold)', marginTop: '4px', fontWeight: 600 }}>
                          ₹{item.price.toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            style={{
              position: 'fixed',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'var(--color-silk)',
              borderBottom: '2px solid var(--color-gold)',
              boxShadow: 'var(--shadow-burgundy)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              zIndex: 99
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  navigateTo(link.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  letterSpacing: '0.04em',
                  color: 'var(--color-burgundy)',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} color="var(--color-gold)" />
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Responsive CSS helper */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
