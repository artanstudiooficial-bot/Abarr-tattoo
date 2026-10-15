import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  MessageCircle,
  Maximize2,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Instagram,
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

/* ==========================================================================
   IMPORTAÇÃO DAS FOTOS REAIS (PASTA: src/assets/images/portfolio)
   ========================================================================== */
import heroImg from './assets/images/hero_tattoo_machine_1791466303298.jpg';

import tattoo01Lua from './assets/images/portfolio/lua perna.jpeg';
import tattoo02Resiliencia from './assets/images/portfolio/resiliencia pescoço.jpeg';
import tattoo03Fe from './assets/images/portfolio/minha tatto braço.jpeg';
import tattoo04Floral from './assets/images/portfolio/tatto braço flores 01.jpeg';
import tattoo05Pets from './assets/images/portfolio/antebraço cachorro.jpeg';
import tattoo06Cartoon from './assets/images/portfolio/desenho pato.jpeg';
import tattoo07Costas from './assets/images/portfolio/crossfit tatto.jpeg';
import tattoo08Lettering from './assets/images/portfolio/tatuagem cursiva perna.jpeg';
import tattoo09Coluna from './assets/images/portfolio/costas mae tatto.jpeg';
import tattoo10Lirios from './assets/images/portfolio/braço chinês.jpeg';

/* ==========================================================================
   CONFIGURAÇÕES & DADOS DO ESTÚDIO
   ========================================================================== */

const STUDIO_CONFIG = {
  name: 'ABARR.',
  fullName: 'Abarr Tattoo',
  tagline: 'ESTÚDIO DE TATUAGEM AUTORAL',
  whatsappUrl: 'https://wa.me/5548992461205',
  instagramUrl: 'https://www.instagram.com/abarr_tattoo',
  instagramHandle: '@abarr_tattoo',
  phoneFormatted: '+55 (48) 99246-1205',
  location: 'Florianópolis, Santa Catarina · Brasil',
  hours: 'Segunda a Sábado, 10h às 20h (Atendimento com Hora Marcada)',
};

const HERO_IMAGE_PRIMARY = heroImg;
const HERO_IMAGE_FALLBACK = 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1200&auto=format&fit=crop';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'fineline' | 'darkart' | 'blackwork' | 'lettering';
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  sessionTime: string;
  technique: string;
  healingText: string;
  bodyPlacement: string;
}

/* ==========================================================================
   MAPEAMENTO DAS 10 OBRAS DO PORTFÓLIO
   ========================================================================== */
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'fases-lua',
    title: 'Fases da Lua & Constância',
    category: 'fineline',
    categoryLabel: 'Fine Line & Caligrafia',
    image: tattoo01Lua,
    alt: 'Tatuagem das fases da lua com escrita na coxa',
    description: 'Composição minimalista com micropontilhismo nas texturas lunares e caligrafia fluida. Projeto focado no fluxo da perna.',
    sessionTime: '2h 15min',
    technique: 'Agulha 03RL · Sombreamento Stippling',
    healingText: 'Cicatrizada há 5 meses',
    bodyPlacement: 'Coxa / Perna',
  },
  {
    id: 'resiliencia-pescoco',
    title: 'Resiliência Lateral',
    category: 'lettering',
    categoryLabel: 'Lettering & Fine Line',
    image: tattoo02Resiliencia,
    alt: 'Tatuagem de palavra Resiliência escrita no pescoço',
    description: 'Lettering delicado em curva anatômica no pescoço. Traço contínuo com precisão para evitar expansão no local.',
    sessionTime: '1h 30min',
    technique: 'Agulha 01RL Única · Tinta Carbon Black',
    healingText: 'Cicatrizada há 3 meses',
    bodyPlacement: 'Pescoço / Lateral',
  },
  {
    id: 'fe-yeshua-braco',
    title: 'Fechamento Sacro & Yeshua',
    category: 'blackwork',
    categoryLabel: 'Preto & Cinza Realista',
    image: tattoo03Fe,
    alt: 'Tatuagem sacra com pomba da paz, mãos da criação, cruzes e Yeshua no antebraço',
    description: 'Projeto autoral religioso com alto contraste, fumaça fluida e transições de preto sólido a cinzas suaves.',
    sessionTime: '6h 00min',
    technique: 'Sombra Rastelada · Agulhas Magnum 15RM',
    healingText: 'Cicatrizada há 8 meses',
    bodyPlacement: 'Antebraço Completo',
  },
  {
    id: 'floral-ombro',
    title: 'Lírios em Vermelho & Preto',
    category: 'fineline',
    categoryLabel: 'Fine Line & Botanical Red',
    image: tattoo04Floral,
    alt: 'Tatuagem de lírios pretos com linhas vermelhas orgânicas no ombro e braço',
    description: 'Fluxo botânico que abraça o deltóide com linhas pretas finas e fios de pigmento vermelho contrastante.',
    sessionTime: '4h 10min',
    technique: 'Agulhas 03RL & 05RL · Pigmento Carmine Red',
    healingText: 'Cicatrizada há 4 meses',
    bodyPlacement: 'Ombro / Braço',
  },
  {
    id: 'pets-patinha',
    title: 'Homenagem Pet & Afeto',
    category: 'fineline',
    categoryLabel: 'Micro-realismo & Fine Line',
    image: tattoo05Pets,
    alt: 'Três ilustrações de cachorrinho e patinha no antebraço',
    description: 'Trilogia afetiva com silhueta de pata, dorso e carinha espreitando. Traços ultra-finos com toque sutil de cor.',
    sessionTime: '2h 40min',
    technique: 'Micro-traço 03RL · Pigmento Hipoalergênico',
    healingText: 'Cicatrizada há 6 meses',
    bodyPlacement: 'Antebraço Interno',
  },
  {
    id: 'cartoon-neo-trad',
    title: 'Lola Bunny & Tio Patinhas',
    category: 'darkart',
    categoryLabel: 'Neo Tradicional & Blackwork',
    image: tattoo06Cartoon,
    alt: 'Tatuagem de personagem de desenho animado Lola Bunny e Tio Patinhas na coxa',
    description: 'Peça marcante em preto e cinza com linhas externas pesadas (outerlines) e sombreamento aveludado.',
    sessionTime: '5h 30min',
    technique: 'Outline 09RL · Preenchimento Grey Wash',
    healingText: 'Cicatrizada há 2 meses',
    bodyPlacement: 'Coxa Lateral',
  },
  {
    id: 'costas-proposito',
    title: 'Propósito & Liberdade',
    category: 'fineline',
    categoryLabel: 'Fine Line & Ilustrativo',
    image: tattoo07Costas,
    alt: 'Tatuagem de mãe e filha com barra de musculação, montanhas e mar nas costas',
    description: 'Painel emotivo autoral integrando figura humana, natureza, esportes e lettering sutil centralizado nas costas.',
    sessionTime: '5h 00min',
    technique: 'Traço Misto 03RL & 07RL · Fine Line',
    healingText: 'Cicatrizada há 7 meses',
    bodyPlacement: 'Costas Superior',
  },
  {
    id: 'lettering-angels',
    title: 'Angels Watching Over Me',
    category: 'lettering',
    categoryLabel: 'Chicano Lettering & Caligrafia',
    image: tattoo08Lettering,
    alt: 'Tatuagem em caligrafia gigante cobrindo a perna inteira',
    description: 'Lettering autoral de grande porte com sombras projetadas, efeito 3D no contorno e fluidez com a musculatura da perna.',
    sessionTime: '7h 30min',
    technique: 'Custom Script · Sombra Suave Magnum',
    healingText: 'Recém-finalizada (Sessão Única)',
    bodyPlacement: 'Perna Completa / Canela',
  },
  {
    id: 'coluna-ornamental',
    title: 'Lótus & Unalome Ornamental',
    category: 'fineline',
    categoryLabel: 'Ornamental & Geometria',
    image: tattoo09Coluna,
    alt: 'Tatuagem ornamental geométrica ao longo de toda a coluna vertebral com flor de lótus',
    description: 'Simetria impecável acompanhando o eixo da coluna vertebral. Geometria sagrada, lótus e elementos místicos em Fine Line.',
    sessionTime: '3h 50min',
    technique: 'Precisão Simétrica · Agulha 03RL',
    healingText: 'Cicatrizada há 9 meses',
    bodyPlacement: 'Coluna Vertebral',
  },
  {
    id: 'lirios-simbolo-chines',
    title: 'Amor & Flores Orientais',
    category: 'fineline',
    categoryLabel: 'Fine Line & Caligrafia Oriental',
    image: tattoo10Lirios,
    alt: 'Tatuagem de lírio com caractere chinês de Amor em vermelho no ombro',
    description: 'Fusão de caligrafia oriental em tinta carmim sólida com ilustração botânica detalhada de lírios no deltóide.',
    sessionTime: '4h 00min',
    technique: 'Caligrafia Vermelha · Micro-pontilhismo',
    healingText: 'Cicatrizada há 3 meses',
    bodyPlacement: 'Ombro / Peitoral',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Briefing & Consulta Inicial',
    description: 'Conversamos pelo WhatsApp para entender sua ideia, referências estéticas, local anatômico e proporções desejadas.',
  },
  {
    step: '02',
    title: 'Criação Autoral & Validação',
    description: 'Criamos uma arte exclusiva desenhada para seu corpo. Você visualiza a prévia, ajusta detalhes e aprova antes da sessão.',
  },
  {
    step: '03',
    title: 'A Sessão no Estúdio',
    description: 'Ambiente privativo e climatizado, ergonomia de alto nível e todos os protocolos de assepsia aplicados rigorosamente.',
  },
  {
    step: '04',
    title: 'Guia Pós-Tatuagem & Suporte',
    description: 'Entregamos o protocolo completo de cicatrização com acompanhamento direto pelo WhatsApp até a regeneração total.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'Como funciona o orçamento gratuito com a Abarr Tattoo?',
    answer: 'É direto e sem burocracia. Pode preencher o simulador aqui no site ou mandar uma mensagem no WhatsApp com a ideia, tamanho aproximado em centímetros e local do corpo. Analisamos a complexidade e retornamos com valores e opções de agenda.',
  },
  {
    question: 'As artes são realmente exclusivas ou vocês copiam da internet?',
    answer: 'Nosso foco é arte autoral e exclusiva. Referências do Pinterest servem como ponto de partida conceitual, mas desenvolvemos uma peça única criada especificamente para a sua anatomia.',
  },
  {
    question: 'É a minha primeira tatuagem. Como me preparar para a sessão?',
    answer: 'Nossa equipe orienta cada detalhe: dormir bem na noite anterior, alimentar-se bem, hidratar a pele nos dias anteriores e fazer pausas confortáveis durante a sessão.',
  },
  {
    question: 'Vocês fazem cobertura de tatuagens antigas (cover-up) ou cicatrizes?',
    answer: 'Sim. Avaliamos a viabilidade anatômica e tonalidade para criar um projeto autoral que harmonize e cubra a arte anterior de forma estética e definitiva.',
  },
];

const BODY_PLACEMENTS = [
  'Antebraço',
  'Braço / Ombro',
  'Costas / Coluna',
  'Peitoral / Tronco',
  'Pescoço / Lateral',
  'Coxa / Perna',
  'Canela / Tornozelo',
  'Mão / Punho',
];

const TATTOO_STYLES = [
  { id: 'fineline', label: 'Fine Line & Microrealismo', hint: 'Traços finos, delicados e botânicos' },
  { id: 'darkart', label: 'Dark Art & Neo-tradicional', hint: 'Contrastes fortes e traços marcantes' },
  { id: 'blackwork', label: 'Blackwork & Preto e Cinza', hint: 'Sombra aveludada e pretos densos' },
  { id: 'lettering', label: 'Lettering & Caligrafia', hint: 'Fontes autorais e escrita fluida' },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedModalItem, setSelectedModalItem] = useState<PortfolioItem | null>(null);
  
  const [selectedPlacement, setSelectedPlacement] = useState<string>('Antebraço');
  const [selectedStyle, setSelectedStyle] = useState<string>('fineline');
  const [sizeRange, setSizeRange] = useState<string>('10 a 15 cm');
  const [ideaText, setIdeaText] = useState<string>('');
  const [preferredPeriod, setPreferredPeriod] = useState<string>('Tarde (14h-18h)');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuote = (styleId?: string) => {
    if (styleId) {
      setSelectedStyle(styleId);
    }
    const el = document.getElementById('orcamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'all', label: 'Todas as Obras (10)' },
    { id: 'fineline', label: 'Fine Line & Micro' },
    { id: 'lettering', label: 'Lettering & Escrita' },
    { id: 'blackwork', label: 'Preto & Cinza' },
    { id: 'darkart', label: 'Neo Trad & Dark' },
  ];

  const filteredPortfolio =
    activeCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const updateScrollState = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollState();
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [activeCategory]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(updateScrollState, 350);
    }
  };

  const currentStyleObj =
    TATTOO_STYLES.find((s) => s.id === selectedStyle) || TATTOO_STYLES[0];

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
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#E60000] selection:text-white font-epilogue antialiased overflow-x-hidden">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Epilogue:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Syne:wght@500;600;700;800&display=swap');
        .font-syne { font-family: 'Syne', sans-serif !important; }
        .font-epilogue { font-family: 'Epilogue', sans-serif !important; }
        .font-cta { font-family: 'Bricolage Grotesque', sans-serif !important; }

        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#262626] py-3.5 sm:py-4 shadow-2xl'
            : 'bg-[#0A0A0A]/70 backdrop-blur-sm border-b border-white/5 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center group focus:outline-none" aria-label="Abarr Tattoo">
              <span className="font-syne text-2xl sm:text-3xl font-extrabold tracking-widest text-[#E60000] drop-shadow-[0_2px_10px_rgba(230,0,0,0.35)]">
                {STUDIO_CONFIG.name}
              </span>
            </a>

            <div className="hidden sm:block">
              <button
                onClick={() => scrollToQuote()}
                className="font-cta px-6 py-3 text-xs uppercase tracking-wider font-extrabold text-white border-2 border-white hover:border-[#E60000] hover:bg-[#E60000] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#E60000]/30"
              >
                Orçamento Gratuito
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative min-h-[88vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden border-b border-[#262626]">
          <div className="absolute top-1/4 -left-36 w-[500px] h-[500px] bg-[#E60000]/12 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#E60000]/10 rounded-full blur-[180px] pointer-events-none" aria-hidden="true" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7">
                <h1 className="font-syne text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.1rem] font-extrabold leading-[1.12] tracking-tight uppercase text-white text-balance drop-shadow-md">
                  Arte Exclusiva na Pele. <br />
                  <span className="text-white block mt-1 sm:mt-1.5">
                    Projetos Autorais e&nbsp;Únicos.
                  </span>
                </h1>

                <p className="font-epilogue text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-xl font-normal">
                  Transforme sua ideia em uma tatuagem marcante com a Abarr Tattoo. Agende uma consulta e receba um orçamento gratuito, direto com nosso estúdio.
                </p>

                <div className="flex flex-col items-stretch sm:items-start gap-3.5 pt-1 w-full max-w-md">
                  <button
                    onClick={() => scrollToQuote()}
                    className="font-cta group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base uppercase font-bold tracking-wider text-white border-2 border-white hover:border-[#E60000] hover:bg-[#E60000] transition-all duration-300 cursor-pointer shadow-xl hover:shadow-[#E60000]/40"
                  >
                    <span>Fazer Orçamento Gratuito</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                  <a
                    href={STUDIO_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-cta group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm uppercase font-bold tracking-wider text-white border-2 border-white/80 hover:border-white bg-[#0A0A0A] hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 text-[#E60000] group-hover:text-black transition-colors" />
                    <span>Iniciar Orçamento pelo WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 relative mt-4 lg:mt-0">
                <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
                  <div className="relative overflow-hidden border border-[#262626] bg-[#121212] group shadow-2xl">
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E60000] transition-colors duration-300 pointer-events-none z-20" />
                    
                    <img
                      src={HERO_IMAGE_PRIMARY}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = HERO_IMAGE_FALLBACK;
                      }}
                      alt="Close-up de estúdio: máquina de tatuagem de precisão"
                      className="w-full h-auto max-h-[480px] sm:max-h-[520px] lg:max-h-[550px] aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3.8] object-cover filter contrast-[1.08] brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="absolute -bottom-3 -right-3 w-14 h-14 border-r-2 border-b-2 border-[#E60000] pointer-events-none" aria-hidden="true" />
                  <div className="absolute -top-3 -left-3 w-14 h-14 border-l-2 border-t-2 border-[#E60000]/80 pointer-events-none" aria-hidden="true" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PORTFÓLIO VITRINE / CARROSSEL */}
        <section id="portfolio" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#E60000]" />
                  <p className="text-xs font-syne font-bold uppercase tracking-[0.2em] text-[#E60000]">
                    Vitrine de Obras Autorais
                  </p>
                </div>
                <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
                  Identidade, Precisão & Arte.
                </h2>
                <p className="font-epilogue text-neutral-400 text-sm sm:text-base max-w-xl">
                  Explore nossos trabalhos mais recentes. Deslize para navegar pelas obras exclusivas criadas para a anatomia de cada cliente.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#121212] border border-[#262626]">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3.5 py-2 text-xs font-syne uppercase tracking-wider font-bold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#E60000] text-white shadow-lg shadow-[#E60000]/30'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative group/carousel">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={!canScrollLeft}
                className={`hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-[#0A0A0A]/90 border border-[#262626] text-white items-center justify-center transition-all duration-300 hover:border-[#E60000] hover:bg-[#E60000] shadow-2xl ${
                  !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'
                }`}
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => scrollCarousel('right')}
                disabled={!canScrollRight}
                className={`hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-[#0A0A0A]/90 border border-[#262626] text-white items-center justify-center transition-all duration-300 hover:border-[#E60000] hover:bg-[#E60000] shadow-2xl ${
                  !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'
                }`}
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div
                ref={carouselRef}
                onScroll={updateScrollState}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar py-4 scroll-smooth"
              >
                {filteredPortfolio.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedModalItem(item)}
                    className="snap-start shrink-0 w-[85vw] sm:w-[360px] lg:w-[400px] bg-[#121212] border border-[#262626] hover:border-[#E60000]/70 transition-all duration-300 group overflow-hidden cursor-pointer flex flex-col justify-between shadow-xl"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#0A0A0A]">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute top-4 right-4 p-2 bg-[#0A0A0A]/85 border border-[#262626] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4 text-[#E60000]" />
                      </div>

                      <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#0A0A0A]/85 border border-[#262626] text-[10px] font-syne font-extrabold uppercase tracking-widest text-[#E60000]">
                        {item.bodyPlacement}
                      </div>
                    </div>

                    <div className="p-6 space-y-3 relative z-10 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-neutral-400 font-epilogue">
                          <span className="text-[#E60000] font-syne font-bold uppercase tracking-wider">
                            {item.categoryLabel}
                          </span>
                          <span>·</span>
                          <span>{item.healingText}</span>
                        </div>

                        <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#E60000] transition-colors">
                          {item.title}
                        </h3>

                        <p className="font-epilogue text-neutral-300 text-xs leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-xs text-neutral-400 font-epilogue">
                        <span>Sessão: {item.sessionTime}</span>
                        <span className="font-syne font-bold text-[#E60000] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Ver Obra <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-center md:hidden text-xs text-neutral-500 font-epilogue flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E60000]" />
              <span>Arraste para os lados para explorar todas as obras</span>
            </div>

          </div>

          {selectedModalItem && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
              onClick={() => setSelectedModalItem(null)}
            >
              <div
                className="relative w-full max-w-4xl bg-[#121212] border border-[#262626] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedModalItem(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-[#0A0A0A]/90 text-white hover:text-[#E60000] border border-[#262626] cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="md:w-1/2 bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedModalItem.image}
                    alt={selectedModalItem.alt}
                    className="w-full h-full max-h-[50vh] md:max-h-[80vh] object-cover"
                  />
                </div>

                <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-epilogue">
                      <span className="text-[#E60000] font-syne font-bold uppercase tracking-wider">
                        {selectedModalItem.categoryLabel}
                      </span>
                      <span>·</span>
                      <span>{selectedModalItem.healingText}</span>
                    </div>

                    <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white">
                      {selectedModalItem.title}
                    </h3>

                    <p className="font-epilogue text-neutral-300 text-sm leading-relaxed">
                      {selectedModalItem.description}
                    </p>

                    <div className="pt-4 border-t border-[#262626] space-y-2 text-xs">
                      <div className="p-3 bg-[#0A0A0A] border border-[#262626]">
                        <span className="text-neutral-500 block">Anatomia / Local</span>
                        <span className="font-syne font-semibold text-white">{selectedModalItem.bodyPlacement}</span>
                      </div>
                      <div className="p-3 bg-[#0A0A0A] border border-[#262626]">
                        <span className="text-neutral-500 block">Tempo Estimado de Execução</span>
                        <span className="font-syne font-semibold text-white">{selectedModalItem.sessionTime}</span>
                      </div>
                      <div className="p-3 bg-[#0A0A0A] border border-[#262626]">
                        <span className="text-neutral-500 block">Equipamento & Pigmentos</span>
                        <span className="font-epilogue text-neutral-300">{selectedModalItem.technique}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#262626] flex gap-3">
                    <button
                      onClick={() => {
                        const style = selectedModalItem.category;
                        setSelectedModalItem(null);
                        scrollToQuote(style);
                      }}
                      className="font-cta flex-1 py-3.5 text-xs uppercase font-extrabold tracking-wider text-white border border-white hover:border-[#E60000] hover:bg-[#E60000] transition-colors text-center cursor-pointer"
                    >
                      Orçar Esse Estilo
                    </button>
                    <a
                      href={`${STUDIO_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                        `Olá! Gostei do projeto autoral "${selectedModalItem.title}" no site da Abarr Tattoo e quero um orçamento nesse estilo.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-cta inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs uppercase font-extrabold tracking-wider bg-[#E60000] text-white hover:bg-[#CC0000] transition-colors"
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

        {/* PROCESSO */}
        <section id="processo" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 space-y-4">
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
                Cada traço é planejado especificamente para sua curvatura muscular, garantindo um resultado marcante que envelhece com precisão.
              </p>
            </div>

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
                    <h3 className="font-syne text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="font-epilogue text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#262626]/80 flex items-center justify-between text-[11px] font-syne uppercase tracking-wider text-neutral-500">
                    <span>Etapa {step.step}</span>
                    <span className="text-[#E60000]">Exclusivo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ORÇAMENTO */}
        <section id="orcamento" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[550px] sm:h-[700px] bg-[#E60000]/22 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none" aria-hidden="true" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                Personalize os parâmetros da sua tatuagem abaixo e envie diretamente para os tatuadores da Abarr Tattoo via WhatsApp.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-[#121212]/95 backdrop-blur-xl border border-[#262626] hover:border-[#E60000]/50 p-6 sm:p-10 lg:p-12 shadow-[0_0_50px_rgba(230,0,0,0.15)] transition-all duration-300">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(whatsappHref, '_blank');
                }}
                className="space-y-8"
              >
                <div className="space-y-3">
                  <label className="block text-xs font-syne font-extrabold uppercase tracking-widest text-neutral-300">
                    1. Onde será a tatuagem no seu corpo?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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

                <div className="space-y-3">
                  <label className="block text-xs font-syne font-extrabold uppercase tracking-widest text-neutral-300">
                    2. Qual o estilo artístico principal?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-xs font-syne font-extrabold uppercase tracking-widest text-neutral-300">
                      3. Tamanho aproximado
                    </label>
                    <div className="space-y-2">
                      {[
                        { label: '5 a 8 cm (Pequena/Delicada)', value: '5 a 8 cm' },
                        { label: '10 a 15 cm (Média)', value: '10 a 15 cm' },
                        { label: '15 a 25 cm (Grande)', value: '15 a 25 cm' },
                        { label: 'Fechamento de Área / Projeto Amplo', value: 'Fechamento / Projeto Amplo' },
                      ].map((opt) => (
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
                        placeholder="Ex: Tatuagem de lírio com traço fino e detalhe em caligrafia oriental..."
                        className="w-full bg-[#0A0A0A] border border-[#262626] p-3 text-xs font-epilogue text-white placeholder-neutral-600 focus:outline-none focus:border-[#E60000] transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-[#0A0A0A] border border-[#262626] space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-epilogue">
                    <div className="flex items-center gap-2 text-[#E60000] font-syne font-bold uppercase tracking-wider">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Prévia do Envio para o WhatsApp</span>
                    </div>
                    <span className="text-[11px] text-neutral-500">{STUDIO_CONFIG.phoneFormatted}</span>
                  </div>
                  <p className="text-xs font-epilogue text-neutral-300 bg-neutral-950 p-3 border border-neutral-900 leading-relaxed font-mono whitespace-pre-line text-neutral-400">
                    Local: <span className="text-white">{selectedPlacement}</span> · Estilo: <span className="text-white">{currentStyleObj.label}</span> · Tamanho: <span className="text-white">{sizeRange}</span> · Turno: <span className="text-white">{preferredPeriod}</span>
                    {ideaText ? ` · Ideia: "${ideaText}"` : ''}
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-cta flex-1 inline-flex items-center justify-center gap-3 px-8 py-4.5 text-sm uppercase font-extrabold tracking-wider bg-[#E60000] hover:bg-[#CC0000] text-white transition-all shadow-[0_0_30px_rgba(230,0,0,0.4)] text-center cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Enviar Orçamento para o WhatsApp</span>
                    <ArrowRight className="w-5 h-5" />
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
                    className="font-cta px-6 py-4.5 text-xs uppercase font-extrabold tracking-wider text-white border border-white/60 hover:border-white transition-colors cursor-pointer text-center"
                  >
                    {isCopied ? 'Resumo Copiado!' : 'Copiar Resumo'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="py-24 sm:py-32 bg-[#0A0A0A] border-b border-[#262626] relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Tire suas dúvidas sobre o processo autoral, valores e cuidados antes da sua sessão.
              </p>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="bg-[#121212] border border-[#262626] transition-colors">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
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
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] border-t border-[#262626] relative overflow-hidden">
        <div className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#262626] relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#E60000]/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

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
                className="font-cta w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm uppercase font-extrabold tracking-wider bg-[#E60000] hover:bg-[#CC0000] text-white transition-all shadow-xl shadow-[#E60000]/30 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Iniciar Orçamento pelo WhatsApp</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <button
                onClick={() => scrollToQuote()}
                className="font-cta w-full sm:w-auto px-8 py-4 text-sm uppercase font-extrabold tracking-wider text-white border-2 border-white hover:border-[#E60000] hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                Simular Orçamento no Site
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
            <div className="md:col-span-5 space-y-4">
              <span className="font-syne text-3xl font-extrabold tracking-widest text-[#E60000] block">
                {STUDIO_CONFIG.name}
              </span>
              <p className="text-xs font-syne font-semibold uppercase tracking-[0.2em] text-neutral-400">
                {STUDIO_CONFIG.tagline}
              </p>
              <p className="font-epilogue text-sm text-neutral-400 max-w-sm leading-relaxed">
                Estúdio de tatuagem focado em arte autoral, peças exclusivas e atendimento individualizado.
              </p>

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

            <div className="md:col-span-3 space-y-4">
              <h4 className="font-syne text-xs uppercase font-bold tracking-widest text-neutral-400">
                Navegação
              </h4>
              <ul className="space-y-2.5 text-xs font-epilogue text-neutral-400">
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio & Obras</a></li>
                <li><a href="#processo" className="hover:text-white transition-colors">Do Esboço à Cicatrização</a></li>
                <li><a href="#orcamento" className="hover:text-white transition-colors">Simulador de Orçamento</a></li>
                <li><a href="#duvidas" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-4">
              <h4 className="font-syne text-xs uppercase font-bold tracking-widest text-neutral-400">
                Localização & Atendimento
              </h4>
              <div className="space-y-3 text-xs font-epilogue text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E60000] shrink-0 mt-0.5" />
                  <span>{STUDIO_CONFIG.location}</span>
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

          <div className="mt-14 pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-epilogue text-neutral-500">
            <p>© 2026 {STUDIO_CONFIG.fullName}. Todos os direitos reservados.</p>
            <p className="text-[11px] text-neutral-500">
              Dark Premium · Tatuagens Autorais Exclusivas · Florianópolis/SC
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
