import React from 'react';
import { MessageCircle, Instagram, MapPin, Phone, ArrowUpRight, Clock } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#262626] relative overflow-hidden">
      {/* Centralized Final Conversion Hero Box */}
      <div className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#262626] relative">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#E60000]/10 rounded-full blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#E60000]" />
            <span className="text-xs font-syne font-bold uppercase tracking-[0.25em] text-[#E60000]">
              Inicie Sua Transformação
            </span>
          </div>

          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Sua ideia merece uma arte exclusiva e irrepetível.
          </h2>

          <p className="font-epilogue text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Consulte disponibilidade de agenda, tire dúvidas técnicas e receba uma orientação autoral sob medida diretamente com nossos tatuadores.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={STUDIO_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase font-syne font-bold tracking-wider bg-[#E60000] hover:bg-[#CC0000] text-white transition-all shadow-xl shadow-[#E60000]/30 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Iniciar Orçamento pelo WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm uppercase font-syne font-bold tracking-wider text-white border-2 border-white hover:border-[#E60000] hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              Simular Orçamento no Site
            </button>
          </div>

          <p className="text-xs text-neutral-500 font-epilogue pt-2">
            Atendimento humanizado · Sem respostas automáticas genéricas · Horários exclusivos
          </p>
        </div>
      </div>

      {/* Main Footer Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Col 1: Brand & Identity (Col 5) */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-syne text-3xl font-extrabold tracking-widest text-[#E60000] block">
              {STUDIO_CONFIG.name}
            </span>
            <p className="text-xs font-syne font-semibold uppercase tracking-[0.2em] text-neutral-400">
              {STUDIO_CONFIG.tagline}
            </p>
            <p className="font-epilogue text-sm text-neutral-400 max-w-sm leading-relaxed">
              Estúdio de tatuagem focado em arte autoral, peças exclusivas e controle rigoroso de biossegurança de nível cirúrgico.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={STUDIO_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 bg-[#121212] border border-[#262626] text-neutral-300 hover:text-white hover:border-[#E60000] hover:bg-[#E60000]/10 transition-colors"
                aria-label="Instagram da Abarr Tattoo"
              >
                <Instagram className="w-4 h-4 text-[#E60000]" />
                <span className="text-xs font-epilogue">{STUDIO_CONFIG.instagramHandle}</span>
              </a>

              <a
                href={STUDIO_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 bg-[#121212] border border-[#262626] text-neutral-300 hover:text-white hover:border-[#E60000] hover:bg-[#E60000]/10 transition-colors"
                aria-label="WhatsApp da Abarr Tattoo"
              >
                <MessageCircle className="w-4 h-4 text-[#E60000]" />
                <span className="text-xs font-epilogue">WhatsApp Direto</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (Col 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-syne text-xs uppercase font-bold tracking-widest text-neutral-400">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-xs font-epilogue text-neutral-400">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfólio & Obras Autorais
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-white transition-colors">
                  Do Esboço à Cicatrização
                </a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-white transition-colors">
                  Simulador de Orçamento
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-white transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Studio Details & Contact (Col 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-syne text-xs uppercase font-bold tracking-widest text-neutral-400">
              Contato & Localização
            </h4>
            <div className="space-y-3 text-xs font-epilogue text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E60000] shrink-0 mt-0.5" />
                <span>Florianópolis, Santa Catarina · Brasil</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E60000] shrink-0 mt-0.5" />
                <a href={STUDIO_CONFIG.whatsappUrl} className="hover:text-white transition-colors">
                  {STUDIO_CONFIG.phoneFormatted}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#E60000] shrink-0 mt-0.5" />
                <span className="text-neutral-400">{STUDIO_CONFIG.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-14 pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-epilogue text-neutral-500">
          <p>© 2026 {STUDIO_CONFIG.fullName}. Todos os direitos reservados.</p>
          <p className="text-[11px] text-neutral-500">
            Identidade Dark Premium · Tatuagens Autorais Exclusivas · Florianópolis/SC
          </p>
        </div>
      </div>
    </footer>
  );
};
