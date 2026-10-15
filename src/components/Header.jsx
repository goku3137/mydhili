import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import MydhiliLogo from './MydhiliLogo';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  ChevronRight,
  ChevronDown
} from 'lucide-react';

export const Header = () => {
  const { 
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
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { id: 'home', label: 'HOME', path: '/' },
    { 
      id: 'new-arrivals', 
      label: 'NEW ARRIVAL', 
      path: '/#new-arrivals',
      isAnchor: true
    },
    { id: 'shop', label: 'COLLECTIONS', path: '/collections' },
    { id: 'bridal', label: 'BRIDAL COUTURE', path: '/bridal' },
    { id: 'bespoke', label: 'BESPOKE ATELIER', path: '/bespoke' },
    { id: 'about', label: 'OUR STORY', path: '/about' },
    { id: 'contact', label: 'CONTACT', path: '/contact' }
  ];

  // Quick search results preview
  const searchResults = searchQuery.trim() 
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.fabric.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  const handleAnchorClick = (e, path) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('new-arrivals');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#new-arrivals');
      setTimeout(() => {
        const el = document.getElementById('new-arrivals');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <>
      {/* Top Announcement Bar (Inspired by Iha Designs) */}
      <div 
        className="header-announcement-bar"
        style={{
          backgroundColor: 'var(--color-burgundy)',
          color: 'var(--color-gold)',
          fontSize: '0.72rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          padding: '8px 24px',
          borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
          fontFamily: 'var(--font-sans)',
          zIndex: 101,
          position: 'relative'
        }}
      >
        <div 
          style={{ 
            maxWidth: '1440px', 
            margin: '0 auto', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            width: '100%' 
          }}
        >
          <div style={{ flex: 1, textAlign: 'center' }}>
            <span>WELCOME TO MYDHILI BOUTIQUE — SOUTH ASIAN HAUTE COUTURE ATELIER</span>
          </div>

          <div 
            className="top-bar-country"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              cursor: 'pointer',
              fontSize: '0.7rem',
              color: 'var(--color-gold-light)',
              userSelect: 'none'
            }}
          >
            <span>India | INR ₹</span>
            <ChevronDown size={13} />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--color-silk-border)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: 'var(--shadow-subtle)',
          transition: 'all 0.3s ease'
        }}
      >
        <div
          className="header-inner-row"
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          {/* Left Brand Identity & Mobile Menu Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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

            <Link 
              to="/"
              style={{ 
                cursor: 'pointer', 
                padding: '2px 0',
                transition: 'transform 0.25s ease',
                display: 'inline-block',
                textDecoration: 'none'
              }}
              title="Mydhili Boutique Home"
            >
              <MydhiliLogo variant="gold" layout="full" height={44} className="header-logo" />
            </Link>
          </div>

          {/* Center: Clean Desktop Navigation Menu */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
            {navLinks.map((link) => {
              if (link.isAnchor) {
                return (
                  <a
                    key={link.id}
                    href={link.path}
                    onClick={(e) => handleAnchorClick(e, link.path)}
                    style={{
                      textDecoration: 'none',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      fontWeight: '500',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--color-onyx)',
                      position: 'relative',
                      padding: '8px 0',
                      transition: 'color 0.2s ease',
                      display: 'inline-block'
                    }}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <NavLink
                  key={link.id}
                  to={link.path}
                  end={link.path === '/'}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: isActive ? '600' : '500',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--color-burgundy)' : 'var(--color-onyx)',
                    position: 'relative',
                    padding: '8px 0',
                    transition: 'color 0.2s ease',
                    display: 'inline-block'
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span 
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: 'var(--color-burgundy)'
                          }} 
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Icons: Search, User, Wishlist, Bag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Search */}
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
              <Search size={20} strokeWidth={1.75} />
            </button>

            {/* Account Profile */}
            <Link
              to="/account"
              aria-label="Client Account"
              style={{
                color: 'var(--color-burgundy)',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none'
              }}
            >
              <User size={20} strokeWidth={1.75} />
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              aria-label={`Wishlist with ${wishlist.length} items`}
              style={{
                color: 'var(--color-burgundy)',
                padding: '6px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none'
              }}
            >
              <Heart size={20} strokeWidth={1.75} />
              {wishlist.length > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '1px',
                    right: '1px',
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-burgundy)',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    borderRadius: '50%',
                    width: '16px',
                    height: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: 1
                  }}
                >
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Bag Drawer Toggle */}
            <button
              onClick={() => setIsCartDrawerOpen(true)}
              aria-label={`Shopping bag with ${cartCount} items`}
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
              <ShoppingBag size={20} strokeWidth={1.75} />
              {cartCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '1px',
                    right: '1px',
                    backgroundColor: 'var(--color-burgundy)',
                    color: 'var(--color-silk)',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    borderRadius: '50%',
                    width: '16px',
                    height: '16px',
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
                  placeholder="Search wedding lehengas, Kanchipuram silks, Banarasi brocades..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '10px 0',
                    border: 'none',
                    borderBottom: '1.5px solid var(--color-gold)',
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
          <>
            {/* Backdrop to close menu on click outside */}
            <div 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                zIndex: 95
              }}
            />
            <div 
              className="mobile-nav-drawer"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'var(--color-silk)',
                borderBottom: '2px solid var(--color-gold)',
                boxShadow: 'var(--shadow-burgundy)',
                padding: '20px 24px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                maxHeight: 'calc(100vh - 70px)',
                overflowY: 'auto',
                zIndex: 100,
                animation: 'fadeIn 0.25s ease'
              }}
            >
              {navLinks.map((link) => {
                if (link.isAnchor) {
                  return (
                    <a
                      key={link.id}
                      href={link.path}
                      onClick={(e) => handleAnchorClick(e, link.path)}
                      style={{
                        textDecoration: 'none',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.2rem',
                        letterSpacing: '0.04em',
                        color: 'var(--color-burgundy)',
                        padding: '10px 0',
                        borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronRight size={16} color="var(--color-gold)" />
                    </a>
                  );
                }

                return (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.2rem',
                      letterSpacing: '0.04em',
                      color: isActive ? 'var(--color-gold)' : 'var(--color-burgundy)',
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    })}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={16} color="var(--color-gold)" />
                  </NavLink>
                );
              })}
            </div>
          </>
        )}
      </header>

      {/* Responsive helper */}
      <style>{`
        @media (max-width: 960px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
          .top-bar-country {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .header-inner-row {
            padding: 10px 14px !important;
            gap: 10px !important;
          }
          .header-announcement-bar {
            padding: 6px 12px !important;
            font-size: 0.64rem !important;
            letter-spacing: 0.08em !important;
          }
        }
        @media (max-width: 480px) {
          .header-logo img {
            height: 38px !important;
            width: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
