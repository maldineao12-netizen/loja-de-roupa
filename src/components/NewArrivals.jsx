import React, { useState } from 'react';
import { Heart, ShoppingBag, Star, Eye, Check, MessageCircle } from 'lucide-react';
import { PRODUCTS, ANGOLA_WHATSAPP, ANGOLA_WHATSAPP_DISPLAY } from '../data/products';

const CATEGORIES = ['TODOS', 'WOMEN', 'MEN', 'SHOES', 'BAGS', 'ACCESSORIES'];

export default function NewArrivals({ onAddToCart, onToggleWishlist, wishlistIds }) {
  const [activeCategory, setActiveCategory] = useState('WOMEN');
  const [addedItemNotice, setAddedItemNotice] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const filteredProducts = activeCategory === 'TODOS'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory || (activeCategory === 'WOMEN' && p.category === 'WOMEN') || (activeCategory === 'MEN' && (p.category === 'MEN' || p.subCategory === 'JACKETS')) || (activeCategory === 'SHOES' && p.category === 'SHOES') || (activeCategory === 'ACCESSORIES' && p.category === 'ACCESSORIES'));

  const displayProducts = (filteredProducts.length >= 8 ? filteredProducts : PRODUCTS).slice(0, 8);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedItemNotice(product.id);
    setTimeout(() => setAddedItemNotice(null), 1800);
  };

  const handleWishlist = (productId, e) => {
    e.stopPropagation();
    onToggleWishlist(productId);
  };

  const handleWhatsAppQuickBuy = (product) => {
    const text = encodeURIComponent(
      `Olá Essência! Gostaria de encomendar directamente via WhatsApp o seguinte artigo:\n\n*${product.name}*\nPreço: ${product.price.toLocaleString('pt-AO')} Kz\n\nPodem confirmar a disponibilidade em Luanda?`
    );
    window.open(`https://wa.me/${ANGOLA_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <section id="shop" className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
            Novos Lançamentos
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Entregas ao domicílio em Luanda • WhatsApp: <strong className="text-emerald-600">{ANGOLA_WHATSAPP_DISPLAY}</strong>
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center space-x-6 sm:space-x-10 mb-12 text-xs sm:text-sm font-semibold tracking-wider text-gray-400 overflow-x-auto pb-2 border-b border-transparent">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`uppercase transition-colors duration-200 pb-1 relative font-bold ${
                  isActive ? 'text-gray-900' : 'hover:text-gray-600'
                }`}
              >
                {cat}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Product Grid (8 items - 2 rows of 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {displayProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            const isJustAdded = addedItemNotice === product.id;

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-none transition-all duration-300"
              >
                {/* Product Image Box */}
                <div className="relative aspect-[4/5] bg-[#f5f5f5] overflow-hidden flex items-center justify-center p-6 group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out rounded-lg"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-sm">
                      {product.badge}
                    </span>
                  )}

                  {/* Quick Action Overlay Buttons */}
                  <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button
                      onClick={(e) => handleWishlist(product.id, e)}
                      className={`p-2 rounded-full shadow-md transition-colors ${
                        isWishlisted ? 'bg-red-50 text-red-500' : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                      title="Favoritar"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="p-2 bg-white text-gray-700 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                      title="Ver Detalhes"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add To Cart Hover Bar */}
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="absolute bottom-0 inset-x-0 bg-gray-900/90 backdrop-blur-sm text-white py-3 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-black"
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        Adicionado!
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        Adicionar ao Carrinho
                      </>
                    )}
                  </button>
                </div>

                {/* Product Meta Info below image */}
                <div className="pt-3 pb-2 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest block mb-0.5">
                      {product.subCategory || product.category}
                    </span>

                    <h3
                      onClick={() => setQuickViewProduct(product)}
                      className="text-xs sm:text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors line-clamp-2 cursor-pointer leading-tight mb-1.5"
                    >
                      {product.name}
                    </h3>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs sm:text-sm font-bold text-gray-900">
                        {product.price.toLocaleString('pt-AO')} Kz
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          {product.originalPrice.toLocaleString('pt-AO')} Kz
                        </span>
                      )}
                    </div>

                    {product.rating >= 4.8 && (
                      <div className="flex items-center space-x-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl flex flex-col md:flex-row gap-6">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg font-bold p-1"
            >
              ✕
            </button>
            <div className="w-full md:w-1/2 aspect-square bg-[#f5f5f5] rounded-xl p-4 flex items-center justify-center">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Coleção Essência Luanda
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                  {quickViewProduct.name}
                </h3>
                <div className="text-2xl font-extrabold text-gray-900 mb-4">
                  {quickViewProduct.price.toLocaleString('pt-AO')} Kz
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {quickViewProduct.description}
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={(e) => {
                    handleAddToCart(quickViewProduct, e);
                    setQuickViewProduct(null);
                  }}
                  className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg text-sm"
                >
                  <ShoppingBag className="w-4 h-4" /> Adicionar ao Carrinho
                </button>

                <button
                  onClick={() => handleWhatsAppQuickBuy(quickViewProduct)}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" /> Encomendar Directo via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
