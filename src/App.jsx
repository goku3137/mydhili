import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
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

const MainApp = () => {
  const { activePage } = useShop();

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product':
        return <ProductDetailPage />;
      case 'bridal':
        return <BridalPage />;
      case 'bespoke':
        return <BespokePage />;
      case 'about':
        return <AboutPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'account':
        return <AccountPage />;
      case 'contact':
      case 'faqs':
        return <SupportingPages />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="mydhili-app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        {renderCurrentPage()}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export function App() {
  return (
    <ShopProvider>
      <MainApp />
    </ShopProvider>
  );
}

export default App;
