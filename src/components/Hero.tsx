import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative min-h-[88vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden border-b border-[#262626]">
      {/* Background ambient lighting - dark red glow */}
      <div
        className="absolute top-1/4 -left-36 w-[500px] h-[500px] bg-[#E60000]/12 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#E60000]/10 rounded-full blur-[180px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Chunky Headline (adjusted size, no lonely 'E') + Copy + Vertically Stacked CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7">
            
            {/* Main Headline - Chunky Syne font, slightly reduced on PC, 'e' attached to autorais */}
            <h1 className="font-syne text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.1rem] font-extrabold leading-[1.12] tracking-tight uppercase text-white text-balance drop-shadow-md">
              Arte Exclusiva na Pele. <br />
              <span className="text-white block mt-1 sm:mt-1.5">
                Projetos Autorais e&nbsp;Únicos.
              </span>
            </h1>

            {/* Descriptive Paragraph */}
            <p className="font-epilogue text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-xl font-normal">
              Transforme sua ideia em uma tatuagem marcante com a Abarr Tattoo. Agende uma consulta e receba um orçamento gratuito, direto com nosso estúdio.
            </p>

            {/* Vertically Stacked CTA Buttons (um embaixo do outro) */}
            <div className="flex flex-col items-stretch sm:items-start gap-3.5 pt-1 w-full max-w-md">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase font-syne font-extrabold tracking-widest text-white border-2 border-white hover:border-[#E60000] hover:bg-[#E60000] transition-all duration-200 cursor-pointer shadow-xl shadow-black/50"
              >
                <span>Fazer Orçamento Gratuito</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href={STUDIO_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase font-syne font-extrabold tracking-widest text-white border-2 border-white/80 hover:border-white bg-[#0A0A0A] hover:bg-white hover:text-black transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#E60000] group-hover:text-black transition-colors" />
                <span>Iniciar Orçamento pelo WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Harmonized Image with Red Accents, Clean & Focused */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Outer frame with red accent border on hover */}
              <div className="relative overflow-hidden border border-[#262626] bg-[#121212] group shadow-2xl">
                
                {/* Red edge hover highlight */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E60000] transition-colors duration-300 pointer-events-none z-20" />
                
                {/* Clean studio photograph, harmonized aspect ratio */}
                <img
                  src="/src/assets/images/hero_tattoo_machine_1791466303298.jpg"
                  alt="Close-up fotográfico da máquina de tatuagem de precisão empunhada com luva cirúrgica preta executando traço sob iluminação dramática"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[480px] sm:max-h-[520px] lg:max-h-[550px] aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3.8] object-cover filter contrast-[1.08] brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle dark vignette at edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Red geometric accent brackets */}
              <div
                className="absolute -bottom-3 -right-3 w-14 h-14 border-r-2 border-b-2 border-[#E60000] pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -top-3 -left-3 w-14 h-14 border-l-2 border-t-2 border-[#E60000]/80 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
