import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PROCESS_STEPS, STUDIO_CONFIG } from '../data/studioData';

interface ProcessSectionProps {
  onOpenQuote: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="processo" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#E60000]" />
            <p className="text-xs font-syne font-bold uppercase tracking-[0.2em] text-[#E60000]">
              Metodologia de Estúdio
            </p>
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Do Conceito à Pele: O Processo Autoral.
          </h2>
          <p className="font-epilogue text-neutral-300 text-base sm:text-lg leading-relaxed">
            Nada de catálogo ou desenhos repetidos. Cada traço é planejado especificamente para sua curvatura muscular, garantindo um resultado marcante que envelhece com precisão.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-7 sm:p-8 bg-[#121212] border border-[#262626] relative flex flex-col justify-between space-y-8 group hover:border-[#E60000]/60 transition-colors"
            >
              <div className="space-y-4">
                <span className="font-syne text-3xl font-extrabold text-[#E60000] block">
                  {step.step}.
                </span>
                <h3 className="font-syne text-xl font-bold text-white group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="font-epilogue text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#262626]/80 flex items-center justify-between text-[11px] font-syne uppercase tracking-wider text-neutral-500">
                <span>Etapa {step.step}</span>
                <span className="text-[#E60000]">100% Personalizado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page banner CTA */}
        <div className="mt-14 p-8 bg-[#121212] border border-[#262626] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-syne text-xl font-bold text-white">
              Tem uma ideia ainda em rascunho ou apenas um conceito?
            </h4>
            <p className="font-epilogue text-sm text-neutral-400">
              Nossa equipe ajuda a estruturar a composição visual ideal para sua anatomia antes de fechar a data.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase font-syne font-bold tracking-wider text-white border border-white hover:border-[#E60000] hover:bg-[#E60000] transition-colors cursor-pointer text-center"
            >
              Simular Meu Projeto
            </button>
            <a
              href={STUDIO_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase font-syne font-bold tracking-wider bg-[#E60000] text-white hover:bg-[#CC0000] transition-colors text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
