import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import PromoGrid from './components/PromoGrid';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: '3',
      name: 'adidas X Pop Beckenbauer Track Jacket',
      price: 120.00,
      category: 'MEN',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop'
    }
  ]);

  const [wishlistIds, setWishlistIds] = useState(['1', '3']);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleToggleWishlist = (productId) => {
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-sky-500 selection:text-white">
      {/* Header component */}
      <Header
        cartItems={cartItems}
        wishlistItems={wishlistIds}
        onRemoveFromCart={handleRemoveFromCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

      {/* Main Content */}
      <main>
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

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
