import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import PromoGrid from './components/PromoGrid';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Jaqueta Bomber Essência Luanda - Azul Royal',
      price: 45000,
      category: 'MEN',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
    }
  ]);

  const [wishlistIds, setWishlistIds] = useState(['1', '3']);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          quantity: 1,
          image: product.image
        }
      ];
    });
    showToast(`"${product.name}" adicionado ao carrinho!`);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    showToast('Item removido do carrinho.');
  };

  const handleToggleWishlist = (productId) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removido dos favoritos.');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Adicionado aos favoritos!');
        return [...prev, productId];
      }
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-sky-500 selection:text-white relative">

      {/* Global Toast Feedback Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 border border-gray-700 animate-bounce text-xs sm:text-sm font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header component */}
      <Header
        cartItems={cartItems}
        wishlistItems={wishlistIds}
        onRemoveFromCart={handleRemoveFromCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        onShowToast={showToast}
      />

      {/* Main Content */}
      <main id="home">
        {/* Hero Banner Section */}
        <Hero />

        {/* New Arrivals Product Showcase */}
        <NewArrivals
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* Asymmetrical Promotional Grid */}
        <PromoGrid />
      </main>

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppButton />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
