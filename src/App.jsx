import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BridalPage from './pages/BridalPage';
import BespokePage from './pages/BespokePage';
import AboutPage from './pages/AboutPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import AccountPage from './pages/AccountPage';
import SupportingPages from './pages/SupportingPages';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

const MainApp = () => {
  return (
    <div className="mydhili-app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<ShopPage />} />
          <Route path="/collections/:categorySlug" element={<ShopPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/bridal" element={<BridalPage />} />
          <Route path="/bespoke" element={<BespokePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/contact" element={<SupportingPages initialTab="contact" />} />
          <Route path="/faqs" element={<SupportingPages initialTab="faqs" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <ShopProvider>
        <ScrollToTop />
        <MainApp />
      </ShopProvider>
    </BrowserRouter>
  );
}

export default App;
