import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Truck, RefreshCw, CreditCard, Share2, Globe, MessageSquare } from 'lucide-react';

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
    <footer className="bg-[#0f172a] text-white pt-16 pb-12 border-t border-slate-800">

      {/* Brand Value Props Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pb-12 border-b border-slate-800/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="p-3 bg-slate-800/80 text-sky-400 rounded-2xl">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Frete Grátis</h4>
              <p className="text-xs text-slate-400 mt-0.5">Em compras acima de R$ 300</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="p-3 bg-slate-800/80 text-sky-400 rounded-2xl">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Troca Simplificada</h4>
              <p className="text-xs text-slate-400 mt-0.5">Até 30 dias para trocas</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="p-3 bg-slate-800/80 text-sky-400 rounded-2xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Pagamento Seguro</h4>
              <p className="text-xs text-slate-400 mt-0.5">Criptografia de 256 bits</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="p-3 bg-slate-800/80 text-sky-400 rounded-2xl">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Até 6x Sem Juros</h4>
              <p className="text-xs text-slate-400 mt-0.5">Nos cartões de crédito</p>
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
              Moda urbana e autêntica. Design minimalista, tecidos nobres e cortes atemporais para quem busca elegância e atitude no dia a dia.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-500 hover:text-white transition flex items-center justify-center text-slate-300" title="Redes Sociais">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-500 hover:text-white transition flex items-center justify-center text-slate-300" title="Global Site">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-500 hover:text-white transition flex items-center justify-center text-slate-300" title="Atendimento">
                <MessageSquare className="w-4 h-4" />
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
            <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Institucional</h5>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition">Sobre a Essência</a></li>
              <li><a href="#" className="hover:text-white transition">Sustentabilidade</a></li>
              <li><a href="#" className="hover:text-white transition">Lojas Físicas</a></li>
              <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Newsletter</h5>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Assine para receber convites VIP para lançamentos e 10% OFF na primeira compra.
            </p>
            {subscribed ? (
              <div className="bg-emerald-900/50 border border-emerald-500/50 text-emerald-300 p-3 rounded-xl text-xs font-semibold">
                ✓ Inscrição confirmada com sucesso!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
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
          <p>© {new Date().getFullYear()} Essência Moda Urbana S.A. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-slate-400 transition">Termos de Serviço</a>
            <a href="#" className="hover:text-slate-400 transition">Política de Privacidade</a>
            <a href="#" className="hover:text-slate-400 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
