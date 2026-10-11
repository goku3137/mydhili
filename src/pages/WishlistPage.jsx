import React from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Heart, Sparkles, ShoppingBag } from 'lucide-react';

export const WishlistPage = () => {
  const { wishlist, products, navigateTo } = useShop();

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="wishlist-page animate-fade-in" style={{ padding: '60px 24px 90px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="eyebrow">✦ Saved Treasures</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--color-burgundy)', marginTop: '8px' }}>
            Your Curated Wishlist
          </h1>
          <div className="gold-rule" style={{ maxWidth: '120px', margin: '14px auto' }} />
          <p style={{ color: 'var(--color-onyx-muted)', fontSize: '0.88rem' }}>
            Ensembles saved for your bridal sketch session, muhurtham, or celebratory occasions.
          </p>
        </div>

        {wishlistedProducts.length === 0 ? (
          <div 
            style={{
              textAlign: 'center',
              padding: '80px 20px',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-silk-border)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            <Heart size={44} color="var(--color-gold)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-burgundy)', marginBottom: '8px' }}>
              No Ensembles in Your Wishlist
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-onyx-muted)', marginBottom: '24px' }}>
              Explore our master weaver collections and tap the heart icon on pieces you cherish.
            </p>
            <button onClick={() => navigateTo('shop')} className="btn-luxury-primary">
              Discover Collections
            </button>
          </div>
        ) : (
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '28px'
            }}
          >
            {wishlistedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
