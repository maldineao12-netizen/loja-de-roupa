import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Truck, RefreshCw, CreditCard, Share2, Globe, MessageSquare, PhoneCall } from 'lucide-react';
import { ANGOLA_WHATSAPP, ANGOLA_WHATSAPP_DISPLAY } from '../data/products';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#0f172a] text-white pt-16 pb-12 border-t border-slate-800">

      {/* Brand Value Props Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pb-12 border-b border-slate-800/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="p-3 bg-slate-800/80 text-sky-400 rounded-2xl">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Entrega em Luanda</h4>
              <p className="text-xs text-slate-400 mt-0.5">Entrega expressa e segura ao domicílio</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="p-3 bg-slate-800/80 text-sky-400 rounded-2xl">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Garantia de Qualidade</h4>
              <p className="text-xs text-slate-400 mt-0.5">Trocas simples em caso de defeito</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="p-3 bg-slate-800/80 text-sky-400 rounded-2xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Pagamento por IBAN / TPA</h4>
              <p className="text-xs text-slate-400 mt-0.5">Transferência Multicaixa / Express</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="p-3 bg-slate-800/80 text-emerald-400 rounded-2xl">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">WhatsApp Direto</h4>
              <p className="text-xs text-emerald-400 font-semibold mt-0.5">{ANGOLA_WHATSAPP_DISPLAY}</p>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="font-heading text-3xl font-extrabold tracking-tight text-white block">
              Essência
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Moda urbana, limpa, natural e elegante. A marca de referência para o estilo de vida contemporâneo em Luanda, Angola.
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${ANGOLA_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-md transition"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Falar com Consultor no WhatsApp ({ANGOLA_WHATSAPP_DISPLAY})
              </a>
            </div>
          </div>

          {/* Column 1: Shop */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Loja</h5>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#shop" className="hover:text-white transition">Masculino</a></li>
              <li><a href="#shop" className="hover:text-white transition">Feminino</a></li>
              <li><a href="#shop" className="hover:text-white transition">Calçados & Tênis</a></li>
              <li><a href="#shop" className="hover:text-white transition">Acessórios</a></li>
              <li><a href="#shop" className="hover:text-white transition">Lançamentos</a></li>
            </ul>
          </div>

          {/* Column 2: Information */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Atendimento</h5>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><span className="text-white font-medium block">Contacto Directo:</span> {ANGOLA_WHATSAPP_DISPLAY}</li>
              <li><span className="text-white font-medium block">Localização:</span> Luanda, Angola</li>
              <li><span className="text-white font-medium block">Horário:</span> Seg - Sáb: 08h - 18h</li>
              <li><a href={`https://wa.me/${ANGOLA_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">Atendimento via WhatsApp</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Novidades</h5>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Subscreva para receber em primeira mão as novas coleções e promoções exclusivas para Angola.
            </p>
            {subscribed ? (
              <div className="bg-emerald-900/50 border border-emerald-500/50 text-emerald-300 p-3 rounded-xl text-xs font-semibold">
                ✓ SubsSubscrição efetuada com sucesso!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu e-mail ou contacto"
                    className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-sky-400 transition"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 bg-sky-500 hover:bg-sky-400 text-white px-3 rounded-lg flex items-center justify-center transition"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center md:flex md:justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Essência Moda Urbana Angola. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-slate-400 transition">Termos de Serviço</a>
            <a href="#" className="hover:text-slate-400 transition">Política de Privacidade</a>
            <a href="#" className="hover:text-slate-400 transition">Entregas em Luanda</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
