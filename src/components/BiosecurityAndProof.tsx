import React from 'react';
import { ShieldCheck, Sparkles, Lock, CheckCircle2, Star, Award, HeartHandshake } from 'lucide-react';
import { BIOSECURITY_POINTS, TESTIMONIALS } from '../data/studioData';

export const BiosecurityAndProof: React.FC = () => {
  return (
    <section id="biosseguranca" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#E60000]" />
            <p className="text-xs font-syne font-bold uppercase tracking-[0.2em] text-[#E60000]">
              Padrão Hospitalar & Resultados Verificados
            </p>
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Confiança que Fica na Pele.
          </h2>
          <p className="font-epilogue text-neutral-300 text-base sm:text-lg leading-relaxed">
            Uma tatuagem exclusiva exige uma experiência que respeite sua integridade física. Nosso estúdio opera com protocolos de assepsia médica para garantir que sua única preocupação seja a beleza da sua arte.
          </p>
        </div>

        {/* Studio Space & Surgical Cleanliness Showcase */}
        <div className="mb-16 sm:mb-20 bg-[#121212] border border-[#262626] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Studio Environment Photo */}
            <div className="lg:col-span-7 relative">
              <img
                src="/src/assets/images/tattoo_studio_suite_1791466348679.jpg"
                alt="Bancada de tatuagem e sala cirúrgica higienizada da Abarr Tattoo com cadeira ergonômica e materiais esterilizados"
                referrerPolicy="no-referrer"
                className="w-full h-full min-h-[320px] object-cover filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 border border-[#262626] px-3 py-1.5 text-[11px] font-syne font-bold uppercase tracking-wider text-neutral-300">
                Suíte Cirúrgica Individual
              </div>
            </div>

            {/* Quick Stats & Guarantees */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-syne uppercase tracking-widest text-[#E60000] font-bold">
                  Compromisso Inegociável
                </span>
                <h3 className="font-syne text-2xl font-bold text-white">
                  Ambiente Asséptico de Grau Hospitalar
                </h3>
                <p className="font-epilogue text-sm text-neutral-300 leading-relaxed">
                  Todo procedimento na Abarr Tattoo ocorre em cabines individuais climatizadas com desinfecção de alto nível e descarte imediato de resíduos infectantes segundo a RDC 306/2004.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#262626] text-xs font-epilogue text-neutral-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E60000] shrink-0" />
                  <span>Embalagens de agulhas abertas exclusivamente na sua presença</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E60000] shrink-0" />
                  <span>Tintas registradas na Anvisa e pigmentos hipoalergênicos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E60000] shrink-0" />
                  <span>Campos e barreiras plásticas trocados a cada atendimento</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Biosecurity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 sm:mb-24">
          {BIOSECURITY_POINTS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 bg-[#121212] border border-[#262626] hover:border-[#E60000]/60 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 flex items-center justify-center bg-[#0A0A0A] border border-[#262626] text-[#E60000]">
                  {item.id === 'disposables' && <ShieldCheck className="w-5 h-5" />}
                  {item.id === 'autoclave' && <Sparkles className="w-5 h-5" />}
                  {item.id === 'anvisa' && <Award className="w-5 h-5" />}
                  {item.id === 'cross-contamination' && <Lock className="w-5 h-5" />}
                </div>

                <h4 className="font-syne text-lg font-bold text-white">
                  {item.title}
                </h4>

                <p className="text-xs font-syne font-semibold uppercase tracking-wider text-[#E60000]">
                  {item.subtitle}
                </p>

                <p className="font-epilogue text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof - Verified Client Testimonials */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-syne uppercase tracking-widest text-[#E60000] font-bold">
                Depoimentos Verificados
              </p>
              <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white">
                O que dizem quem já marcou a pele conosco
              </h3>
            </div>
            
            {/* Overall rating trust metric */}
            <div className="flex items-center gap-3 text-xs font-epilogue text-neutral-400">
              <div className="flex items-center text-[#E60000]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-syne font-bold text-white">5.0 / 5.0</span>
              <span aria-hidden="true">·</span>
              <span>100% de clientes satisfeitos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 sm:p-7 bg-[#121212] border border-[#262626] hover:border-neutral-700 transition-colors flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Stars and healed unboxed metadata */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-epilogue">
                    <div className="flex items-center text-[#E60000]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-neutral-400">{t.healedStatus}</span>
                  </div>

                  <p className="font-epilogue text-sm text-neutral-200 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs">
                  <div>
                    <h5 className="font-syne font-bold text-white">
                      {t.clientName}
                    </h5>
                    <p className="text-neutral-500 font-epilogue">
                      {t.age} anos · {t.profession}
                    </p>
                  </div>
                  <span className="text-[11px] font-syne font-semibold text-[#E60000] uppercase tracking-wider">
                    {t.style}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
