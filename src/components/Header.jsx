import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown, Trash2, ArrowRight, MessageCircle } from 'lucide-react';
import { ANGOLA_WHATSAPP, ANGOLA_WHATSAPP_DISPLAY } from '../data/products';

export default function Header({ cartItems, wishlistItems, onRemoveFromCart, isCartOpen, setIsCartOpen, onShowToast }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let message = `*NOVO PEDIDO DE COMPRA - ESSÊNCIA MODA URBANA*\n\n`;
    message += `Olá! Gostaria de encomendar os seguintes artigos:\n\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n   - Qtd: ${item.quantity}\n   - Preço: ${item.price.toLocaleString('pt-AO')} Kz\n\n`;
    });

    message += `*Total:* ${cartSubtotal.toLocaleString('pt-AO')} Kz\n`;
    message += `*Local de Entrega:* Luanda, Angola\n\n`;
    message += `Aguardando a confirmação da disponibilidade e dados de pagamento. Obrigado!`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${ANGOLA_WHATSAPP}?text=${encodedMsg}`, '_blank');
    if (onShowToast) {
      onShowToast('Pedido gerado! A redireccionar para o WhatsApp...');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm text-gray-900 py-4'
            : 'bg-transparent text-white py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Left / Navigation Menu (Desktop) */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
              <a
                href="#home"
                className="flex items-center gap-1 hover:opacity-75 transition-opacity"
              >
                Início <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </a>
              <a
                href="#shop"
                className="flex items-center gap-1 hover:opacity-75 transition-opacity"
              >
                Loja <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </a>
              <a
                href="#promos"
                className="flex items-center gap-1 hover:opacity-75 transition-opacity"
              >
                Promoções
              </a>
              <a
                href="#contact"
                className="hover:opacity-75 transition-opacity"
              >
                Contacto
              </a>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-1 focus:outline-none"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Center / Logo */}
            <div className="text-center">
              <a
                href="#"
                className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight hover:opacity-90 transition-opacity"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Essência
              </a>
            </div>

            {/* Right / Action Icons */}
            <div className="flex items-center space-x-4 sm:space-x-5">
              <a
                href={`https://wa.me/${ANGOLA_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1.5 text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 px-3 py-1.5 rounded-full border border-emerald-500/30 transition-all"
                title="Apoio via WhatsApp em Angola"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                <span>{ANGOLA_WHATSAPP_DISPLAY}</span>
              </a>

              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1.5 hover:opacity-75 transition-opacity relative"
                aria-label="Pesquisar"
              >
                <Search className="w-5 h-5 stroke-[1.8]" />
              </button>

              <button
                className="p-1.5 hover:opacity-75 transition-opacity relative"
                aria-label="Favoritos"
              >
                <Heart className="w-5 h-5 stroke-[1.8]" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-sky-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="p-1.5 hover:opacity-75 transition-opacity relative"
                aria-label="Carrinho de compras"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCartCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl relative">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Buscar na Essência Luanda</h3>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ex: Jaqueta Bomber, Tênis, Hoodie Oversized..."
                className="w-full pl-11 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:ring-2 focus:ring-blue-600 outline-none text-gray-800 text-base"
                autoFocus
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
              <span className="font-semibold text-gray-700">Populares em Angola:</span>
              <button onClick={() => setSearchQuery('Bomber')} className="bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-full transition">Bomber</button>
              <button onClick={() => setSearchQuery('Tênis')} className="bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-full transition">Tênis</button>
              <button onClick={() => setSearchQuery('Hoodie')} className="bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-full transition">Moletom</button>
              <button onClick={() => setSearchQuery('Boné')} className="bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-full transition">Boné</button>
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white text-gray-900 shadow-2xl flex flex-col">
              {/* Drawer Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-bold text-gray-900">Seu Carrinho ({totalCartCount})</h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 text-gray-400 hover:text-gray-600 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto stroke-1" />
                    <p className="text-gray-500 font-medium">Seu carrinho está vazio</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-2 text-sm font-semibold text-blue-600 hover:underline"
                    >
                      Ver produtos disponíveis
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-xl items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg bg-white border border-gray-100"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 truncate">{item.name}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs font-medium text-gray-600">Qtd: {item.quantity}</span>
                          <span className="text-sm font-bold text-gray-900">{(item.price * item.quantity).toLocaleString('pt-AO')} Kz</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        title="Remover"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-gray-50/50 space-y-3">
                  <div className="flex justify-between items-center text-base font-bold text-gray-900">
                    <span>Subtotal:</span>
                    <span>{cartSubtotal.toLocaleString('pt-AO')} Kz</span>
                  </div>
                  <p className="text-xs text-gray-500 text-center">Entregas rápidas e personalizadas em toda a província de Luanda</p>

                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    Encomendar pelo WhatsApp ({ANGOLA_WHATSAPP_DISPLAY})
                  </button>

                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2.5 rounded-xl transition text-xs flex items-center justify-center gap-1"
                  >
                    Continuar a Navegar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl flex flex-col p-6 z-10 text-gray-900">
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-xl tracking-tight">Essência</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-gray-500 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-5 text-lg font-semibold text-gray-800">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Início</a>
              <a href="#shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Loja</a>
              <a href="#promos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Promoções</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Contacto</a>
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-100">
              <a
                href={`https://wa.me/${ANGOLA_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                WhatsApp: {ANGOLA_WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
