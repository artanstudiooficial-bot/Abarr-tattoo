import React, { useState } from 'react';
import { Maximize2, X, MessageCircle, Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem, STUDIO_CONFIG } from '../data/studioData';

interface PortfolioBentoProps {
  onSelectStyleForQuote: (styleId: string) => void;
}

export const PortfolioBento: React.FC<PortfolioBentoProps> = ({ onSelectStyleForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todas as Obras' },
    { id: 'fineline', label: 'Fine Line & Micro' },
    { id: 'darkart', label: 'Dark Art & Neo' },
    { id: 'blackwork', label: 'Blackwork & Geometria' },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E60000]" />
              <p className="text-xs font-syne font-bold uppercase tracking-[0.2em] text-[#E60000]">
                Portfólio Selecionado
              </p>
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Identidade e Precisão.
            </h2>
            <p className="font-epilogue text-neutral-400 text-sm sm:text-base max-w-xl">
              Projetos exclusivos concebidos do zero para a anatomia de cada cliente. Sem reproduções da internet ou cópias genéricas.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121212] border border-[#262626]">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 sm:px-4 py-2 text-xs font-syne uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-black shadow-md'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Card 1: Fine Line Showcase (Col span 7) */}
          <div
            onClick={() => setSelectedItem(PORTFOLIO_ITEMS[0])}
            className="md:col-span-7 group relative bg-[#121212] border border-[#262626] hover:border-[#E60000]/60 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
              <img
                src={PORTFOLIO_ITEMS[0].image}
                alt={PORTFOLIO_ITEMS[0].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
              
              <div className="absolute top-4 right-4 p-2 bg-[#0A0A0A]/80 border border-[#262626] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#E60000]" />
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-3 relative -mt-12 sm:-mt-16 z-10">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-epilogue">
                <span className="text-[#E60000] font-syne font-bold uppercase tracking-wider">
                  {PORTFOLIO_ITEMS[0].categoryLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>Cicatrizada há {PORTFOLIO_ITEMS[0].healedMonths} meses</span>
                <span aria-hidden="true">·</span>
                <span>Sessão: {PORTFOLIO_ITEMS[0].sessionTime}</span>
              </div>
              <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white group-hover:text-[#E60000] transition-colors">
                {PORTFOLIO_ITEMS[0].title}
              </h3>
              <p className="font-epilogue text-neutral-300 text-sm leading-relaxed">
                {PORTFOLIO_ITEMS[0].description}
              </p>
              <div className="pt-2 flex items-center text-xs font-syne uppercase tracking-wider text-white group-hover:text-[#E60000] font-bold">
                <span>Ver detalhes da técnica</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Dark Art Corvo (Col span 5) */}
          <div
            onClick={() => setSelectedItem(PORTFOLIO_ITEMS[1])}
            className="md:col-span-5 group relative bg-[#121212] border border-[#262626] hover:border-[#E60000]/60 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/4] overflow-hidden">
              <img
                src={PORTFOLIO_ITEMS[1].image}
                alt={PORTFOLIO_ITEMS[1].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
              
              <div className="absolute top-4 right-4 p-2 bg-[#0A0A0A]/80 border border-[#262626] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#E60000]" />
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-3 relative -mt-12 z-10">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-epilogue">
                <span className="text-[#E60000] font-syne font-bold uppercase tracking-wider">
                  {PORTFOLIO_ITEMS[1].categoryLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>{PORTFOLIO_ITEMS[1].sessionTime}</span>
              </div>
              <h3 className="font-syne text-2xl font-bold text-white group-hover:text-[#E60000] transition-colors">
                {PORTFOLIO_ITEMS[1].title}
              </h3>
              <p className="font-epilogue text-neutral-300 text-sm leading-relaxed">
                {PORTFOLIO_ITEMS[1].description}
              </p>
              <div className="pt-2 flex items-center text-xs font-syne uppercase tracking-wider text-white group-hover:text-[#E60000] font-bold">
                <span>Ver detalhes da técnica</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 3: Blackwork Sacred Geometry (Col span 6) */}
          <div
            onClick={() => setSelectedItem(PORTFOLIO_ITEMS[2])}
            className="md:col-span-6 group relative bg-[#121212] border border-[#262626] hover:border-[#E60000]/60 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={PORTFOLIO_ITEMS[2].image}
                alt={PORTFOLIO_ITEMS[2].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
              
              <div className="absolute top-4 right-4 p-2 bg-[#0A0A0A]/80 border border-[#262626] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#E60000]" />
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-3 relative -mt-10 z-10">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-epilogue">
                <span className="text-[#E60000] font-syne font-bold uppercase tracking-wider">
                  {PORTFOLIO_ITEMS[2].categoryLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>Cicatrizada há {PORTFOLIO_ITEMS[2].healedMonths} meses</span>
              </div>
              <h3 className="font-syne text-2xl font-bold text-white group-hover:text-[#E60000] transition-colors">
                {PORTFOLIO_ITEMS[2].title}
              </h3>
              <p className="font-epilogue text-neutral-300 text-sm leading-relaxed">
                {PORTFOLIO_ITEMS[2].description}
              </p>
            </div>
          </div>

          {/* Card 4: Precision Craft / Studio Rigour (Col span 6) */}
          <div
            onClick={() => setSelectedItem(PORTFOLIO_ITEMS[3])}
            className="md:col-span-6 group relative bg-[#121212] border border-[#262626] hover:border-[#E60000]/60 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={PORTFOLIO_ITEMS[3].image}
                alt={PORTFOLIO_ITEMS[3].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
              
              <div className="absolute top-4 right-4 p-2 bg-[#0A0A0A]/80 border border-[#262626] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#E60000]" />
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-3 relative -mt-10 z-10">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-epilogue">
                <span className="text-[#E60000] font-syne font-bold uppercase tracking-wider">
                  {PORTFOLIO_ITEMS[3].categoryLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>Precisão Dérmica</span>
              </div>
              <h3 className="font-syne text-2xl font-bold text-white group-hover:text-[#E60000] transition-colors">
                {PORTFOLIO_ITEMS[3].title}
              </h3>
              <p className="font-epilogue text-neutral-300 text-sm leading-relaxed">
                {PORTFOLIO_ITEMS[3].description}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Portfolio Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-[#121212] border border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-syne text-lg font-bold text-white">
              Deseja um projeto autoral exclusivo desenvolvido para seu corpo?
            </h4>
            <p className="font-epilogue text-sm text-neutral-400">
              Traga sua referência ou conceito. Criaremos um esboço digital sem cópias pré-fabricadas.
            </p>
          </div>
          <button
            onClick={() => onSelectStyleForQuote('autoral')}
            className="px-6 py-3.5 text-xs uppercase font-syne font-bold tracking-wider text-white border border-white hover:border-[#E60000] hover:bg-[#E60000] transition-all whitespace-nowrap cursor-pointer"
          >
            Pedir Análise de Ideia
          </button>
        </div>

      </div>

      {/* Modal Inspection for Portfolio Piece */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#121212] border border-[#262626] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-[#0A0A0A]/90 text-white hover:text-[#E60000] border border-[#262626] cursor-pointer"
              aria-label="Fechar detalhes da tatuagem"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="md:w-1/2 bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full max-h-[50vh] md:max-h-[80vh] object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400 font-epilogue">
                  <span className="text-[#E60000] font-syne font-bold uppercase tracking-wider">
                    {selectedItem.categoryLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Cicatrizada há {selectedItem.healedMonths} meses</span>
                </div>

                <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white">
                  {selectedItem.title}
                </h3>

                <p className="font-epilogue text-neutral-300 text-sm leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Technical Specifications */}
                <div className="pt-4 border-t border-[#262626] space-y-3">
                  <h4 className="text-xs uppercase font-syne font-bold tracking-wider text-neutral-400">
                    Ficha Técnica do Procedimento
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs font-epilogue">
                    <div className="p-3 bg-[#0A0A0A] border border-[#262626]">
                      <span className="text-neutral-500 block">Tempo de Sessão</span>
                      <span className="font-syne font-semibold text-white">{selectedItem.sessionTime}</span>
                    </div>
                    <div className="p-3 bg-[#0A0A0A] border border-[#262626]">
                      <span className="text-neutral-500 block">Status Dérmico</span>
                      <span className="font-syne font-semibold text-white">100% Estável & Nítida</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#0A0A0A] border border-[#262626] text-xs">
                    <span className="text-neutral-500 block">Equipamentos & Pigmento</span>
                    <span className="font-epilogue text-neutral-300">{selectedItem.technique}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const style = selectedItem.category;
                    setSelectedItem(null);
                    onSelectStyleForQuote(style);
                  }}
                  className="flex-1 py-3 text-xs uppercase font-syne font-bold tracking-wider text-white border border-white hover:border-[#E60000] hover:bg-[#E60000] transition-colors text-center cursor-pointer"
                >
                  Orçar Nesse Estilo
                </button>
                <a
                  href={`${STUDIO_CONFIG.whatsappUrl}?text=${encodeURIComponent(`Olá! Vi o projeto "${selectedItem.title}" no site da Abarr Tattoo e gostaria de um orçamento autoral inspirado nessa técnica.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase font-syne font-bold tracking-wider bg-[#E60000] text-white hover:bg-[#CC0000] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
