export type TSocialKeys = "github" | "linkedin" | "whatsapp" | "email";

export type TSocial = {
  name: string;
  url: string;
  readableFormat: string;
  iconUrl: {
    lightMode: string;
    darkMode: string;
  };
};

export type TProject = {
  title: string;
  tags: string[];
  imagesUrl: string[];
  description: string;
  conceptBullets: string[];
  repositoryUrl: string;
  demoUrl?: string;
  faviconUrl: {
    lightMode: string;
    darkMode: string;
  };
};

export type TSkill = { label: string; iconUrl: string };

export type TCertificateList = {
  institution: string;
  modules: {
    name: string;
    hours: number;
  }[];
};

export type TPortfolioData = {
  socialLinks: Record<TSocialKeys, TSocial>;
  skills: TSkill[];
  projects: TProject[];
  certificates: TCertificateList[];
};

const portfolioData: TPortfolioData = {
  socialLinks: {
    github: {
      name: "GitHub",
      readableFormat: "gabriel23052",
      url: "https://github.com/gabriel23052",
      iconUrl: {
        lightMode: "/socialIcons/github.svg",
        darkMode: "/socialIcons/github-dark.svg",
      },
    },
    linkedin: {
      name: "LinkedIn",
      readableFormat: "linkedin.com/in/gabriel23052",
      url: "https://www.linkedin.com/in/gabriel23052/",
      iconUrl: {
        lightMode: "/socialIcons/linkedin.svg",
        darkMode: "/socialIcons/linkedin-dark.svg",
      },
    },
    whatsapp: {
      name: "WhatsApp",
      readableFormat: "(51) 99546-5290",
      url: "https://wa.me/5551995465290",
      iconUrl: {
        lightMode: "/socialIcons/whatsapp.svg",
        darkMode: "/socialIcons/whatsapp-dark.svg",
      },
    },
    email: {
      name: "Email",
      readableFormat: "gabrielggp2002@gmail.com",
      url: "mailto:gabrielggp2002@gmail.com",
      iconUrl: {
        lightMode: "/socialIcons/mail.svg",
        darkMode: "/socialIcons/mail-dark.svg",
      },
    },
  },
  skills: [
    { label: "HTML", iconUrl: "/skillsIcon/html.svg" },
    { label: "CSS", iconUrl: "/skillsIcon/css.svg" },
    { label: "JavaScript", iconUrl: "/skillsIcon/js.svg" },
    { label: "TypeScript", iconUrl: "/skillsIcon/ts.svg" },
    { label: "React", iconUrl: "/skillsIcon/react.svg" },
    { label: "Vite", iconUrl: "/skillsIcon/vite.svg" },
    { label: "Figma", iconUrl: "/skillsIcon/figma.svg" },
    { label: "Git", iconUrl: "/skillsIcon/git.svg" },
    { label: "GitHub", iconUrl: "/skillsIcon/github.svg" },
  ],
  projects: [
    {
      title: "Bateponto",
      faviconUrl: {
        lightMode: "/projectsFavicon/bateponto-light.svg",
        darkMode: "/projectsFavicon/bateponto-dark.svg",
      },
      imagesUrl: [
        "/projectImages/bateponto-standby.jpg",
        "/projectImages/bateponto-activity.jpg",
        "/projectImages/bateponto-edit.jpg",
      ],
      tags: ["HTML", "CSS", "Vite", "React", "TypeScript", "Vitest"],
      description:
        "Aplicação de relógio ponto voltada ao registro e acompanhamento de períodos de atividade. O sistema mantém um histórico local dos últimos 30 dias, permite editar registros e calcula automaticamente o tempo em atividade. Também possui regras para corrigir períodos que atravessam a meia-noite, separação entre interface e lógica de negócio, modais acessíveis, lazy loading no histórico e animações otimizadas para o relógio principal.",
      conceptBullets: [
        "Manipulação e operações com tempo",
        "Manipulação de estados com React Context",
        "Animações com CSS",
        "Persistência de informações no localStorage",
        "Testes unitários",
      ],
      repositoryUrl: "https://github.com/gabriel23052/bateponto",
      demoUrl: "https://bateponto-ten.vercel.app/",
    },
    {
      title: "Artetool",
      faviconUrl: {
        lightMode: "/projectsFavicon/artetool.svg",
        darkMode: "/projectsFavicon/artetool.svg",
      },
      imagesUrl: [
        "/projectImages/artetool-art.jpg",
        "/projectImages/artetool-loading.jpg",
      ],
      tags: ["HTML", "CSS", "Vite", "TypeScript"],
      description:
        "Ferramenta desenvolvida sob demanda para a cooperativa de crédito Cresol, utilizada internamente para automatizar a composição de artes temáticas personalizadas. A aplicação combina modelos gráficos pré-configurados com o nome do destinatário, gerando pré-visualização em tempo real e exportação da arte final. A solução funciona inteiramente no navegador, com fluxo simples para usuários não técnicos, estrutura flexível para novos modelos e geração controlada por debounce assíncrono.",
      conceptBullets: [
        "Debounce assíncrono com Promises",
        "Canvas API",
        "Pré-visualização em tempo real",
        "Exportação de imagens em JPEG",
      ],
      repositoryUrl: "https://github.com/gabriel23052/artetool",
      demoUrl: "https://artetool-kappa.vercel.app/",
    },
    {
      title: "Totem Digital BRF",
      faviconUrl: {
        lightMode: "/projectsFavicon/totem-brf-light.svg",
        darkMode: "/projectsFavicon/totem-brf-light.svg",
      },
      imagesUrl: [
        "/projectImages/brf-main.jpg",
        "/projectImages/brf-video.jpg",
      ],
      tags: ["HTML", "CSS", "Vite", "TypeScript"],
      description:
        "Interface desenvolvida para a BRF, utilizada em um totem interativo exposto na feira agroindustrial Expovizinhos 2023, em Dois Vizinhos - PR. A aplicação permite selecionar trechos específicos de um vídeo de processo industrial, posicionando e reproduzindo cada seção conforme a escolha do usuário. A solução foi pensada para uso em tela touchscreen, com fluxo simples, áreas de interação amplas, feedback de carregamento e cuidados para evitar comportamentos indesejados no modo totem.",
      conceptBullets: [
        "Manipulação de vídeos",
        "Interface para monitor touchscreen",
        "Prevenção de interações indesejadas",
        "Fluxo otimizado para uso em ambiente público",
      ],
      repositoryUrl: "https://github.com/gabriel23052/totem-digital-brf",
      demoUrl: "https://totem-digital-brf.vercel.app/",
    },
  ],
  certificates: [
    {
      institution: "Cedaspy",
      modules: [
        { name: "Treinamento Profissional em Informática", hours: 432 },
      ],
    },
    {
      institution: "Origamid",
      modules: [
        { name: "UI Design", hours: 34 },
        { name: "JavaScript", hours: 74 },
        { name: "TypeScript", hours: 22 },
        { name: "React", hours: 36 },
        { name: "React com Typescript", hours: 10 },
        { name: "CSS Flexbox", hours: 6 },
        { name: "CSS Grid Layout", hours: 10 },
        { name: "HTML e CSS", hours: 46 },
      ],
    },
    {
      institution: "Alura",
      modules: [
        { name: "Java", hours: 56 },
        { name: "Git e Github", hours: 8 },
        { name: "Pensamento Computacional", hours: 8 },
        { name: "Redes e Protocolos", hours: 20 },
        { name: "Arquitetura de Computadores", hours: 8 },
        { name: "Scrum", hours: 8 },
        { name: "Networking", hours: 8 },
        { name: "Inteligência Emocional", hours: 6 },
        { name: "Oratória", hours: 6 },
        { name: "Comunicação Assertiva", hours: 6 },
      ],
    },
    {
      institution: "Curso em Vídeo",
      modules: [
        { name: "HTML5 e CSS3", hours: 40 },
        { name: "MySQL", hours: 40 },
        { name: "PHP Básico", hours: 40 },
        { name: "PHP: Orientação a objetos", hours: 40 },
      ],
    },
  ],
} as const;

export { portfolioData };
