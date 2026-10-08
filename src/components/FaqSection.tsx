import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, STUDIO_CONFIG } from '../data/studioData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#E60000]" />
            <p className="text-xs font-syne font-bold uppercase tracking-[0.2em] text-[#E60000]">
              Transparência & Cuidados
            </p>
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Perguntas Frequentes.
          </h2>
          <p className="font-epilogue text-neutral-400 text-sm sm:text-base">
            Tire suas dúvidas sobre o processo autoral, valores, cuidados e segurança sanitária antes da sua sessão.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#121212] border border-[#262626] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-syne text-base sm:text-lg font-bold text-white pr-4">
                    {item.question}
                  </span>
                  <div className={`p-1 text-neutral-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#E60000]' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm font-epilogue text-neutral-300 leading-relaxed border-t border-[#262626]/50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center p-6 bg-[#121212] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-syne font-bold text-white text-sm">
              Sua dúvida não está listada aqui?
            </p>
            <p className="text-xs text-neutral-400 font-epilogue">
              Nossa equipe responde em minutos no WhatsApp sem nenhum compromisso.
            </p>
          </div>
          <a
            href={STUDIO_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase font-syne font-bold tracking-wider bg-[#E60000] text-white hover:bg-[#CC0000] transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
