import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ANGOLA_WHATSAPP, ANGOLA_WHATSAPP_DISPLAY } from '../data/products';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMsg = encodeURIComponent(
    'Olá Essência! Gostaria de saber mais sobre a coleção de moda urbana e tirar algumas dúvidas.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Floating Chat Box */}
      {isOpen && (
        <div className="pointer-events-auto mb-3 bg-white rounded-2xl shadow-2xl border border-emerald-100 p-4 w-72 sm:w-80 animate-fade-in text-gray-900">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
                E
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900 leading-tight">Atendimento Essência</h4>
                <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                  Luanda, Angola (Online)
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded-xl mb-4 leading-relaxed">
            👋 Olá! Seja bem-vindo à <span className="font-semibold text-gray-900">Essência Moda Urbana</span>. Ligue ou envie mensagem directa para o WhatsApp <strong>{ANGOLA_WHATSAPP_DISPLAY}</strong> para encomendas rápidas em Luanda!
          </p>

          <a
            href={`https://wa.me/${ANGOLA_WHATSAPP}?text=${defaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Iniciar Conversa WhatsApp
          </a>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
        aria-label="Atendimento via WhatsApp 921 225 720"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold tracking-wide">
          Atendimento WhatsApp
        </span>
      </button>
    </div>
  );
}
