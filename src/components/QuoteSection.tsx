import React, { useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { BODY_PLACEMENTS, TATTOO_STYLES, STUDIO_CONFIG } from '../data/studioData';

interface QuoteSectionProps {
  initialStyle?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialStyle }) => {
  const [selectedPlacement, setSelectedPlacement] = useState<string>('Antebraço');
  const [selectedStyle, setSelectedStyle] = useState<string>(initialStyle || 'fineline');
  const [sizeRange, setSizeRange] = useState<string>('10 a 15 cm');
  const [ideaText, setIdeaText] = useState<string>('');
  const [preferredPeriod, setPreferredPeriod] = useState<string>('Tarde');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const sizeOptions = [
    { label: '5 a 8 cm (Pequena/Delicada)', value: '5 a 8 cm' },
    { label: '10 a 15 cm (Média)', value: '10 a 15 cm' },
    { label: '15 a 25 cm (Grande)', value: '15 a 25 cm' },
    { label: 'Fechamento de Área / Projeto Amplo', value: 'Fechamento / Projeto Amplo' },
  ];

  const currentStyleObj = TATTOO_STYLES.find((s) => s.id === selectedStyle) || TATTOO_STYLES[0];

  const generateWhatsAppMessage = () => {
    let msg = `Olá, Abarr Tattoo! Gostaria de solicitar um orçamento gratuito para um projeto autoral:\n\n`;
    msg += `📍 Local do Corpo: ${selectedPlacement}\n`;
    msg += `🎨 Estilo Desejado: ${currentStyleObj.label}\n`;
    msg += `📐 Tamanho Estimado: ${sizeRange}\n`;
    msg += `⏰ Preferência de Horário: ${preferredPeriod}\n`;
    if (ideaText.trim()) {
      msg += `💡 Ideia/Conceito: "${ideaText.trim()}"\n\n`;
    } else {
      msg += `💡 Ideia/Conceito: (Tenho uma ideia inicial e gostaria de conversar para desenvolver)\n\n`;
    }
    msg += `Vi o site e gostaria de saber as datas disponíveis e estimativa de valor para essa arte exclusiva. Obrigado!`;
    return encodeURIComponent(msg);
  };

  const whatsappHref = `${STUDIO_CONFIG.whatsappUrl}?text=${generateWhatsAppMessage()}`;

  return (
    <section id="orcamento" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626] relative overflow-hidden">
      
      {/* Intense Red Neon Ambient Glow behind the simulation */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[550px] sm:h-[700px] bg-[#E60000]/22 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-[#E60000]/30 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3 text-center mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#E60000] shadow-[0_0_12px_#E60000]" />
            <p className="text-xs font-syne font-extrabold uppercase tracking-[0.25em] text-[#E60000]">
              Simulação de Orçamento
            </p>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-white text-balance drop-shadow-md">
            Simule & Solicite seu Orçamento Gratuito.
          </h2>
          <p className="font-epilogue text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
            Personalize os parâmetros da sua tatuagem abaixo e envie diretamente para os tatuadores da Abarr Tattoo via WhatsApp com um clique.
          </p>
        </div>

        {/* Interactive Form Card with Red Neon Edge Aura */}
        <div className="max-w-4xl mx-auto bg-[#121212]/95 backdrop-blur-xl border border-[#262626] hover:border-[#E60000]/50 p-6 sm:p-10 lg:p-12 shadow-[0_0_50px_rgba(230,0,0,0.15)] transition-all duration-300">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(whatsappHref, '_blank');
            }}
            className="space-y-8"
          >
            {/* Step 1: Body Placement */}
            <div className="space-y-3">
              <label className="block text-xs font-syne font-extrabold uppercase tracking-widest text-neutral-300">
                1. Onde será a tatuagem no seu corpo?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {BODY_PLACEMENTS.map((placement) => {
                  const isSelected = selectedPlacement === placement;
                  return (
                    <button
                      key={placement}
                      type="button"
                      onClick={() => setSelectedPlacement(placement)}
                      className={`px-3 py-2.5 text-xs font-epilogue transition-all text-center border cursor-pointer ${
                        isSelected
                          ? 'border-[#E60000] bg-[#E60000]/20 text-white font-semibold shadow-[0_0_15px_rgba(230,0,0,0.3)]'
                          : 'border-[#262626] bg-[#0A0A0A] text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      {placement}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Style */}
            <div className="space-y-3">
              <label className="block text-xs font-syne font-extrabold uppercase tracking-widest text-neutral-300">
                2. Qual o estilo artístico principal?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {TATTOO_STYLES.map((style) => {
                  const isSelected = selectedStyle === style.id;
                  return (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-3.5 border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#E60000] bg-[#E60000]/20 shadow-[0_0_15px_rgba(230,0,0,0.25)]'
                          : 'border-[#262626] bg-[#0A0A0A] hover:border-neutral-700'
                      }`}
                    >
                      <span className={`text-xs font-syne font-bold ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                        {style.label}
                      </span>
                      <span className="text-[11px] font-epilogue text-neutral-500 mt-1">
                        {style.hint}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Size & Time Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Size */}
              <div className="space-y-3">
                <label className="block text-xs font-syne font-extrabold uppercase tracking-widest text-neutral-300">
                  3. Tamanho aproximado
                </label>
                <div className="space-y-2">
                  {sizeOptions.map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-3 p-3 border cursor-pointer transition-colors ${
                        sizeRange === opt.value
                          ? 'border-[#E60000] bg-[#E60000]/20 text-white'
                          : 'border-[#262626] bg-[#0A0A0A] text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="size"
                        value={opt.value}
                        checked={sizeRange === opt.value}
                        onChange={() => setSizeRange(opt.value)}
                        className="accent-[#E60000]"
                      />
                      <span className="text-xs font-epilogue">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Preferences & Idea */}
              <div className="space-y-3">
                <label className="block text-xs font-syne font-extrabold uppercase tracking-widest text-neutral-300">
                  4. Preferência de horário
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Manhã (10h-14h)', 'Tarde (14h-18h)', 'Sábado'].map((period) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => setPreferredPeriod(period)}
                      className={`p-3 text-xs font-epilogue text-center border cursor-pointer transition-colors ${
                        preferredPeriod === period
                          ? 'border-[#E60000] bg-[#E60000]/20 text-white font-semibold shadow-[0_0_12px_rgba(230,0,0,0.3)]'
                          : 'border-[#262626] bg-[#0A0A0A] text-neutral-400 hover:text-white'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>

                <div className="pt-3 space-y-2">
                  <label className="block text-xs font-syne font-extrabold uppercase tracking-widest text-neutral-300">
                    5. Descreva sua ideia ou conceito (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={ideaText}
                    onChange={(e) => setIdeaText(e.target.value)}
                    placeholder="Ex: Tatuagem botânica com traços finos no antebraço interno..."
                    className="w-full bg-[#0A0A0A] border border-[#262626] p-3 text-xs font-epilogue text-white placeholder-neutral-600 focus:outline-none focus:border-[#E60000] transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Message Preview Box */}
            <div className="p-4 sm:p-5 bg-[#0A0A0A] border border-[#262626] space-y-2">
              <div className="flex items-center justify-between text-xs text-neutral-400 font-epilogue">
                <div className="flex items-center gap-2 text-[#E60000] font-syne font-bold uppercase tracking-wider">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Prévia do Envio para o WhatsApp</span>
                </div>
                <span className="text-[11px] text-neutral-500">+55 48 99246-1205</span>
              </div>
              <p className="text-xs font-epilogue text-neutral-300 bg-neutral-950 p-3 border border-neutral-900 leading-relaxed font-mono whitespace-pre-line text-neutral-400">
                Local: <span className="text-white">{selectedPlacement}</span> · Estilo: <span className="text-white">{currentStyleObj.label}</span> · Tamanho: <span className="text-white">{sizeRange}</span> · Turno: <span className="text-white">{preferredPeriod}</span>
                {ideaText ? ` · Ideia: "${ideaText}"` : ''}
              </p>
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4.5 text-xs sm:text-sm uppercase font-syne font-extrabold tracking-wider bg-[#E60000] hover:bg-[#CC0000] text-white transition-all shadow-[0_0_30px_rgba(230,0,0,0.4)] text-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar Orçamento para o WhatsApp (+55 48 99246-1205)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `Local: ${selectedPlacement} | Estilo: ${currentStyleObj.label} | Tamanho: ${sizeRange} | Ideia: ${ideaText || 'Ideia a definir'}`
                  );
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 3000);
                }}
                className="px-6 py-4.5 text-xs uppercase font-syne font-bold tracking-wider text-white border border-white/60 hover:border-white transition-colors cursor-pointer text-center"
              >
                {isCopied ? 'Resumo Copiado!' : 'Copiar Resumo'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
