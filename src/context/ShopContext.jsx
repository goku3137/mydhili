import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PRODUCTS_DATA } from '../data/products';

const ShopContext = createContext();

export const categoryToSlug = (cat) => {
  if (!cat || cat === 'All Collections') return 'all';
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

export const slugToCategory = (slug) => {
  if (!slug || slug === 'all' || slug === 'new-arrivals') return 'All Collections';
  const mapping = {
    'bridal-couture': 'Bridal Couture',
    'kanchipuram-silks': 'Kanchipuram Silks',
    'banarasi-brocades': 'Banarasi Brocades',
    'kerala-kasavu': 'Kerala Kasavu',
    'festive-silks': 'Festive Silks',
    'bespoke-blouses': 'Bespoke Blouses'
  };
  return mapping[slug] || 'All Collections';
};

export const ShopProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('mydhili_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('mydhili_wishlist');
      return saved ? JSON.parse(saved) : ['mb-001', 'mb-002'];
    } catch {
      return ['mb-001', 'mb-002'];
    }
  });

  // Derive active view from URL pathname
  const getActivePage = (pathname) => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/collections')) return 'shop';
    if (pathname.startsWith('/products')) return 'product';
    if (pathname.startsWith('/bridal')) return 'bridal';
    if (pathname.startsWith('/bespoke')) return 'bespoke';
    if (pathname.startsWith('/about')) return 'about';
    if (pathname.startsWith('/checkout')) return 'checkout';
    if (pathname.startsWith('/wishlist')) return 'wishlist';
    if (pathname.startsWith('/account')) return 'account';
    if (pathname.startsWith('/contact')) return 'contact';
    if (pathname.startsWith('/faqs')) return 'faqs';
    return 'home';
  };

  const activePage = getActivePage(location.pathname);
  const [selectedProductId, setSelectedProductId] = useState('mb-001');
  const [selectedCategory, setSelectedCategory] = useState('All Collections');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  // Demo user session
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('mydhili_user');
      return saved ? JSON.parse(saved) : {
        name: 'Maharani Client',
        email: 'couture.client@mydhili.com',
        phone: '+91 98400 12345',
        isLoggedIn: true,
        address: '14, Imperial Heritage Enclave, Boat Club Road, Chennai 600028',
        consultations: [
          {
            id: 'CONS-9481',
            date: '2026-11-04',
            time: '11:30 AM IST',
            type: 'Private Bridal Atelier Consultation',
            status: 'Confirmed by Senior Couturier'
          }
        ]
      };
    } catch {
      return null;
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('mydhili_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('mydhili_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Navigate to product detail with real URL
  const viewProduct = (productId) => {
    setSelectedProductId(productId);
    navigate(`/products/${productId}`);
  };

  // Navigate to page with real URL routing
  const navigateTo = (page, categoryFilter = null) => {
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
      navigate(`/collections/${categoryToSlug(categoryFilter)}`);
      return;
    }

    switch (page) {
      case 'home':
        navigate('/');
        break;
      case 'shop':
        navigate('/collections');
        break;
      case 'product':
        navigate(`/products/${selectedProductId}`);
        break;
      case 'bridal':
        navigate('/bridal');
        break;
      case 'bespoke':
        navigate('/bespoke');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'checkout':
        navigate('/checkout');
        break;
      case 'wishlist':
        navigate('/wishlist');
        break;
      case 'account':
        navigate('/account');
        break;
      case 'contact':
        navigate('/contact');
        break;
      case 'faqs':
        navigate('/faqs');
        break;
      default:
        navigate(`/${page}`);
    }
  };

  // Add to cart
  const addToCart = (product, selectedSize = 'Free Size', quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.selectedSize === selectedSize
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prev, { ...product, selectedSize, quantity }];
    });
    setIsCartDrawerOpen(true);
  };

  // Remove from cart
  const removeFromCart = (id, selectedSize) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.selectedSize === selectedSize)));
  };

  // Update cart item quantity
  const updateQuantity = (id, selectedSize, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id, selectedSize);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedSize === selectedSize
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  // Clear cart
  const clearCart = () => setCart([]);

  // Wishlist toggle
  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Cart total calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        products: PRODUCTS_DATA,
        cart,
        wishlist,
        activePage,
        selectedProductId,
        selectedCategory,
        searchQuery,
        isSearchOpen,
        isCartDrawerOpen,
        user,
        cartSubtotal,
        cartCount,
        viewProduct,
        navigateTo,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        setSelectedCategory,
        setSelectedProductId,
        setSearchQuery,
        setIsSearchOpen,
        setIsCartDrawerOpen,
        setUser
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
