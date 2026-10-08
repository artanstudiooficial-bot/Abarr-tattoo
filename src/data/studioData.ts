export interface PortfolioItem {
  id: string;
  title: string;
  category: 'fineline' | 'darkart' | 'blackwork' | 'lettering' | 'coverup';
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  sessionTime: string;
  technique: string;
  healedMonths: number;
  featured?: boolean;
}

export interface BiosecurityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  age: number;
  profession: string;
  tattooTitle: string;
  style: string;
  quote: string;
  rating: number;
  healedStatus: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const STUDIO_CONFIG = {
  name: "ABARR.",
  fullName: "Abarr Tattoo",
  tagline: "ESTÚDIO DE TATUAGEM AUTORAL",
  heroHeadline: "Arte Exclusiva na Pele. Projetos Autorais e Únicos.",
  heroDescription:
    "Transforme sua ideia em uma tatuagem marcante com a Abarr Tattoo. Agende uma consulta e receba um orçamento gratuito, direto com nosso estúdio.",
  whatsappNumber: "5548992461205",
  whatsappUrl: "https://wa.me/5548992461205",
  instagramUrl: "https://www.instagram.com/abarr_tattoo",
  instagramHandle: "@abarr_tattoo",
  phoneFormatted: "+55 (48) 99246-1205",
  location: "Florianópolis, Santa Catarina",
  hours: "Segunda a Sábado, 10h às 20h (Atendimento Exclusivo com Hora Marcada)",
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "fineline-botanical",
    title: "Flora & Geometria Cósmica",
    category: "fineline",
    categoryLabel: "Fine Line & Microrealismo",
    image: "/src/assets/images/tattoo_fineline_micro_1791466316805.jpg",
    alt: "Tatuagem Fine Line botânica e geometria cósmica no antebraço",
    description:
      "Linhas ultra-finas de agulha 03RL com micro-sombreamento stippling. Projeto desenvolvido sob medida para a anatomia do antebraço.",
    sessionTime: "3h 40min",
    technique: "Agulha 03RL · Pigmento Carbon Black",
    healedMonths: 4,
    featured: true,
  },
  {
    id: "darkart-corvo",
    title: "Crânio de Corvo Barroco",
    category: "darkart",
    categoryLabel: "Dark Art & Neo-trad",
    image: "/src/assets/images/tattoo_darkart_neo_1791466331279.jpg",
    alt: "Tatuagem Dark Art de crânio com detalhes barrocos no ombro",
    description:
      "Composição autoral com alto contraste, negros densos e sutil toque de pigmento carmim nos detalhes ornamentais.",
    sessionTime: "5h 15min",
    technique: "Blackwork Denso · Sombreamento Opaque Grey",
    healedMonths: 6,
    featured: true,
  },
  {
    id: "blackwork-mandala",
    title: "Mandala & Padrão Geométrico Sagrado",
    category: "blackwork",
    categoryLabel: "Blackwork & Geometria",
    image: "/src/assets/images/tattoo_blackwork_geo_1791466340220.jpg",
    alt: "Tatuagem de mandala e geometria sagrada no peito e ombro",
    description:
      "Encaixe anatômico fluindo entre deltóide e peitoral. Precisão milimétrica em pontilhismo graduado e pretos sólidos.",
    sessionTime: "6h 30min",
    technique: "Dotwork 05RL & Preenchimento Magnum",
    healedMonths: 8,
    featured: true,
  },
  {
    id: "studio-craft",
    title: "Execução & Precisão em Agulha Única",
    category: "fineline",
    categoryLabel: "Precisão & Técnica",
    image: "/src/assets/images/hero_tattoo_machine_1791466303298.jpg",
    alt: "Mão com luva preta segurando máquina rotativa executando traço",
    description:
      "Controle de profundidade dérmica com estabilidade estrita, prevenindo expansão ou estouro de traço ao longo dos anos.",
    sessionTime: "Controle Cirúrgico",
    technique: "Motor Direct Drive · Tensão 6.8V",
    healedMonths: 2,
    featured: false,
  },
];

export const BIOSECURITY_POINTS: BiosecurityItem[] = [
  {
    id: "disposables",
    title: "100% Materiais Descartáveis",
    subtitle: "Abertos e conferidos na sua frente",
    description:
      "Agulhas esterilizadas por óxido de etileno, biqueiras, batoques, lâminas e campos cirúrgicos são descartados imediatamente após a sessão.",
    iconName: "ShieldCheck",
  },
  {
    id: "autoclave",
    title: "Autoclave Hospitalar com Laudo",
    subtitle: "Esterilização classe B comprovada",
    description:
      "Monitoramento biológico semanal com esporos e laudos técnicos registrados, superando os padrões sanitários exigidos.",
    iconName: "Sparkles",
  },
  {
    id: "anvisa",
    title: "Pigmentos Registrados Anvisa",
    subtitle: "Fórmulas veganas e hipoalergênicas",
    description:
      "Utilizamos apenas tintas certificadas de pureza dermatológica com rastreabilidade de lote, garantindo cicatrização estável sem desbotamento prematuro.",
    iconName: "BadgeCheck",
  },
  {
    id: "cross-contamination",
    title: "Isolamento de Contaminação Cruzada",
    subtitle: "Barreiras plásticas em cada superfície",
    description:
      "Máquinas, cabos, fontes e bancadas são selados com filmes plásticos descartáveis trocados integralmente entre cada cliente.",
    iconName: "Lock",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    clientName: "Lucas Mendonça",
    age: 27,
    profession: "Designer de Produto",
    tattooTitle: "Projeto Fechamento de Braço Blackwork",
    style: "Blackwork & Geometria",
    quote:
      "O atendimento da Abarr está em outro nível. Não pegaram uma referência da internet: eles entenderam o conceito que eu queria e desenharam algo 100% anatômico no meu braço. A cicatrização foi perfeita, zero falhas no preto.",
    rating: 5,
    healedStatus: "Cicatrizada há 7 meses",
  },
  {
    id: "t2",
    clientName: "Mariana Alencar",
    age: 24,
    profession: "Arquiteta",
    tattooTitle: "Fine Line Botânico & Microrealismo",
    style: "Fine Line",
    quote:
      "Eu tinha receio de traço estourar com o tempo, porque tenho pele bem clara. O traço do estúdio continuou incrivelmente fino e nítido mesmo depois de meses de sol. O cuidado com a higiene e luvas me deu total tranquilidade.",
    rating: 5,
    healedStatus: "Cicatrizada há 5 meses",
  },
  {
    id: "t3",
    clientName: "Guilherme Siqueira",
    age: 31,
    profession: "Engenheiro de Software",
    tattooTitle: "Peça Autoral Dark Art no Peitoral",
    style: "Dark Art Autoral",
    quote:
      "Fiz meu primeiro orçamento pelo WhatsApp sem nenhuma burocracia. O estúdio é impecável, parece uma clínica cirúrgica com estética moderna. O resultado final superou qualquer expectativa.",
    rating: 5,
    healedStatus: "Cicatrizada há 3 meses",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Briefing & Consulta Inicial",
    description:
      "Conversamos pelo WhatsApp ou no estúdio para entender sua ideia, referências estéticas, local anatômico e proporções desejadas.",
  },
  {
    step: "02",
    title: "Criação Autoral & Validação",
    description:
      "Criamos uma arte exclusiva desenhada para seu corpo. Você visualiza a prévia, ajusta detalhes e aprova antes de qualquer agulhada.",
  },
  {
    step: "03",
    title: "A Sessão no Estúdio",
    description:
      "Ambiente privativo e climatizado com música agradável, ergonomia de alto nível e todos os protocolos de assepsia rigorosamente aplicados.",
  },
  {
    step: "04",
    title: "Guia Pós-Tatuagem & Acompanhamento",
    description:
      "Entregamos o protocolo completo de cicatrização (filme adesivo dérmico, pomadas indicadas) com suporte direto pelo WhatsApp até a cicatrização completa.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como funciona o orçamento gratuito com a Abarr Tattoo?",
    answer:
      "É direto e sem burocracia. Você pode preencher o simulador aqui no site ou mandar uma mensagem no WhatsApp (+55 48 99246-1205) com a ideia, tamanho aproximado em centímetros e local do corpo. Nós analisamos a complexidade e retornamos com valores e opções de agenda.",
  },
  {
    question: "As artes são realmente exclusivas ou vocês tatuam cópias da internet?",
    answer:
      "Nosso foco é arte autoral e exclusiva. Referências do Pinterest ou Instagram servem como ponto de partida conceitual, mas desenvolvemos uma peça única para você que respeita sua musculatura e anatomia.",
  },
  {
    question: "Quais são as garantias de biossegurança e higiene do estúdio?",
    answer:
      "Operamos com padrão cirúrgico: 100% de agulhas e descartáveis lacrados abertos exclusivamente na sua presença, autoclave hospitalar com testes biológicos periódicos e tintas certificadas pela Anvisa com laudo de rastreabilidade.",
  },
  {
    question: "É a minha primeira tatuagem. O que preciso saber sobre dor e preparação?",
    answer:
      "A sensação varia de acordo com o local, mas nossa equipe orienta cada detalhe: dormir bem na noite anterior, alimentação reforçada, hidratação da pele prévia e pausas programadas durante a sessão para seu conforto total.",
  },
  {
    question: "Vocês fazem cobertura de tatuagem antiga (cover-up) ou de cicatrizes?",
    answer:
      "Sim. Avaliamos a viabilidade anatômica e tonalidade da tatuagem antiga ou cicatriz em uma consulta prévia para criar um projeto autoral que neutralize a arte anterior de forma estética e definitiva.",
  },
];

export const BODY_PLACEMENTS = [
  "Antebraço",
  "Braço / Bíceps",
  "Ombro / Deltóide",
  "Peitoral",
  "Costela / Tronco",
  "Costas",
  "Coxa / Perna",
  "Panturrilha",
  "Punho / Mão",
  "Tornozelo / Pé",
];

export const TATTOO_STYLES = [
  { id: "fineline", label: "Fine Line & Microrealismo", hint: "Traços sutis e delicados" },
  { id: "darkart", label: "Dark Art & Neo-tradicional", hint: "Contrastes e estética marcante" },
  { id: "blackwork", label: "Blackwork & Geometria", hint: "Pretos sólidos e padronagens" },
  { id: "lettering", label: "Lettering & Caligrafia", hint: "Fontes e composições autorais" },
  { id: "coverup", label: "Cobertura (Cover-up)", hint: "Reforma ou cobertura de tattoo anterior" },
];
