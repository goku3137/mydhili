import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useShop, slugToCategory, categoryToSlug } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, FABRICS } from '../data/products';
import { Filter, ArrowUpDown, Sparkles } from 'lucide-react';

export const ShopPage = () => {
  const { products, selectedCategory, setSelectedCategory } = useShop();
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const [activeFabric, setActiveFabric] = useState('All Fabrics');
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-low' | 'price-high' | 'rating'
  const [onlyMadeToOrder, setOnlyMadeToOrder] = useState(false);
  const [priceRange, setPriceRange] = useState(200000); // Max filter

  // Synchronize category with URL parameter
  useEffect(() => {
    if (categorySlug) {
      const mapped = slugToCategory(categorySlug);
      if (mapped && mapped !== selectedCategory) {
        setSelectedCategory(mapped);
      }
    } else if (selectedCategory !== 'All Collections') {
      setSelectedCategory('All Collections');
    }
  }, [categorySlug]);

  const activeCategory = categorySlug ? slugToCategory(categorySlug) : selectedCategory;

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All Collections') {
      navigate('/collections');
    } else {
      navigate(`/collections/${categoryToSlug(cat)}`);
    }
  };

  // Filter & Sort pipeline
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory =
          activeCategory === 'All Collections' || p.category === activeCategory;
        const matchesFabric =
          activeFabric === 'All Fabrics' || p.fabric.toLowerCase().includes(activeFabric.toLowerCase().replace('all ', ''));
        const matchesOrderType = !onlyMadeToOrder || p.isMadeToOrder;
        const matchesPrice = p.price <= priceRange;

        return matchesCategory && matchesFabric && matchesOrderType && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // Default featured
      });
  }, [products, activeCategory, activeFabric, onlyMadeToOrder, priceRange, sortBy]);

  return (
    <div className="shop-page animate-fade-in" style={{ paddingBottom: '90px' }}>
      {/* Editorial Category Header */}
      <div
        className="shop-hero-banner"
        style={{
          backgroundColor: 'var(--color-burgundy)',
          color: 'var(--color-silk)',
          padding: '60px 24px',
          textAlign: 'center',
          borderBottom: '2px solid var(--color-gold)'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>
            ✦ Curated South Asian Couture
          </span>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.6rem)',
              color: 'var(--color-silk)',
              marginTop: '10px',
              marginBottom: '14px'
            }}
          >
            {activeCategory === 'All Collections' ? 'The Haute Couture Catalogue' : activeCategory}
          </h1>
          <div className="gold-rule" style={{ maxWidth: '120px', margin: '14px auto' }} />
          <p style={{ color: 'rgba(250, 247, 242, 0.85)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Every piece is an authentic expression of master weaver craftsmanship, pure silk foundations, and heirloom bullion embroidery.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 24px' }} className="shop-main-container">
        {/* Category Pills Bar */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '32px',
            borderBottom: '1px solid var(--color-silk-border)'
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              style={{
                padding: '10px 20px',
                whiteSpace: 'nowrap',
                fontSize: '0.76rem',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                border: activeCategory === cat ? '1px solid var(--color-burgundy)' : '1px solid var(--color-silk-border)',
                backgroundColor: activeCategory === cat ? 'var(--color-burgundy)' : '#FFFFFF',
                color: activeCategory === cat ? 'var(--color-silk)' : 'var(--color-onyx)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter Controls & Sort Bar */}
        <div
          className="shop-filter-bar"
          style={{
            backgroundColor: '#FFFFFF',
            padding: '18px 24px',
            border: '1px solid var(--color-silk-border)',
            marginBottom: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          {/* Left filters: Fabric & Made to Order */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Filter size={16} color="var(--color-gold)" />
              <label style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                Fabric:
              </label>
              <select
                value={activeFabric}
                onChange={(e) => setActiveFabric(e.target.value)}
                style={{
                  padding: '6px 12px',
                  border: '1px solid var(--color-silk-border)',
                  backgroundColor: 'var(--color-silk)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {FABRICS.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* Bespoke Only toggle */}
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              <input
                type="checkbox"
                checked={onlyMadeToOrder}
                onChange={(e) => setOnlyMadeToOrder(e.target.checked)}
                style={{ accentColor: 'var(--color-burgundy)', cursor: 'pointer' }}
              />
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Bespoke / Made to Order Only
              </span>
            </label>
          </div>

          {/* Right Sort & Results Count */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-onyx-muted)' }}>
              Showing <strong>{filteredProducts.length}</strong> of {products.length} Ensembles
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArrowUpDown size={15} color="var(--color-gold)" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '6px 12px',
                  border: '1px solid var(--color-silk-border)',
                  backgroundColor: 'var(--color-silk)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="featured">Sort: Curated Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated by Brides</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '80px 24px',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-silk-border)'
            }}
          >
            <Sparkles size={36} color="var(--color-gold)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-burgundy)', marginBottom: '8px' }}>
              No Ensembles Match Your Filter Criteria
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-onyx-muted)', marginBottom: '24px' }}>
              Try adjusting your fabric choice or price filters to view other couture creations.
            </p>
            <button
              onClick={() => {
                handleCategorySelect('All Collections');
                setActiveFabric('All Fabrics');
                setOnlyMadeToOrder(false);
              }}
              className="btn-luxury-primary"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="product-grid-4 shop-product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
