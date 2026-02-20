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
  description: string;
  conceptBullets: string[];
  repositoryUrl: string;
  demoUrl: string;
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
      url: "",
      iconUrl: {
        lightMode: "/socialIcons/github.svg",
        darkMode: "/socialIcons/github-dark.svg",
      },
    },
    linkedin: {
      name: "LinkedIn",
      readableFormat: "",
      url: "",
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
    { label: "Figma", iconUrl: "/skillsIcon/figma.svg" },
    { label: "Git", iconUrl: "/skillsIcon/git.svg" },
    { label: "GitHub", iconUrl: "/skillsIcon/github.svg" },
  ],
  projects: [
    {
      title: "Example1",
      faviconUrl: {
        lightMode: "/projectsFavicon/example.svg",
        darkMode: "/projectsFavicon/example.svg",
      },
      tags: ["HTML", "Javascript", "Typescript"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis ipsum, ornare sit amet quam eget, pharetra dictum velit. Curabitur maximus dolor iaculis, finibus quam vel, porttitor tortor. Fusce ac turpis a tellus finibus rhoncus nec ut odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis tellus eget velit pharetra dignissim. Vestibulum vitae sem sem. Nulla nec purus",
      conceptBullets: [
        "Lorem ipsum dolor",
        "consectetur adipiscing",
        "Nullam felis ipsum",
      ],
      repositoryUrl: "",
      demoUrl: "",
    },
    {
      title: "Example2",
      faviconUrl: {
        lightMode: "/projectsFavicon/example.svg",
        darkMode: "/projectsFavicon/example.svg",
      },
      tags: ["React", "CSS", "Figma"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis ipsum, ornare sit amet quam eget. Curabitur maximus dolor iaculis, finibus quam vel. Fusce ac turpis a tellus finibus rhoncus. Pellentesque lobortis tellus eget velit pharetra",
      conceptBullets: [
        "Nullam felis ipsum",
        "pharetra dictum velit",
        "maximus dolor",
        "Pellentesque lobortis",
      ],
      repositoryUrl: "",
      demoUrl: "",
    },
    {
      title: "Example3",
      faviconUrl: {
        lightMode: "/projectsFavicon/example.svg",
        darkMode: "/projectsFavicon/example.svg",
      },
      tags: ["Typescript", "Git", "Github"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis ipsum, ornare sit amet quam eget, pharetra dictum velit. Curabitur maximus dolor iaculis, finibus quam vel, porttitor tortor. Fusce ac turpis a tellus finibus rhoncus nec ut odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis tellus eget velit pharetra dignissim. Vestibulum vitae sem sem. Nulla nec purus leo ac elit volutpat",
      conceptBullets: ["consectetur adipiscing", "ornare sit amet"],
      repositoryUrl: "",
      demoUrl: "",
    },
    {
      title: "Example4",
      faviconUrl: {
        lightMode: "/projectsFavicon/example.svg",
        darkMode: "/projectsFavicon/example.svg",
      },
      tags: ["HTML", "CSS", "Javascript", "React", "Figma"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis ipsum, ornare sit amet quam eget, pharetra dictum velit. Fusce ac turpis a tellus finibus rhoncus nec ut odio. Pellentesque lobortis tellus eget velit pharetra dignissim",
      conceptBullets: [
        "Lorem ipsum dolor",
        "pharetra dictum",
        "Fusce ac turpis",
        "finibus rhoncus",
        "dignissim velit",
      ],
      repositoryUrl: "",
      demoUrl: "",
    },
    {
      title: "BatePonto",
      faviconUrl: {
        lightMode: "/projectsFavicon/example.svg",
        darkMode: "/projectsFavicon/example.svg",
      },
      tags: ["Typescript", "React", "CSS"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis ipsum, ornare sit amet quam eget, pharetra dictum velit. Curabitur maximus dolor iaculis, finibus quam vel, porttitor tortor. Fusce ac turpis a tellus finibus rhoncus nec ut odio",
      conceptBullets: ["ornare sit amet", "dictum velit", "maximus dolor"],
      repositoryUrl: "",
      demoUrl: "",
    },
    {
      title: "Example6",
      faviconUrl: {
        lightMode: "/projectsFavicon/example.svg",
        darkMode: "/projectsFavicon/example.svg",
      },
      tags: ["Javascript", "Git", "HTML", "CSS", "Typescript", "React"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis ipsum, ornare sit amet quam eget, pharetra dictum velit. Curabitur maximus dolor iaculis, finibus quam vel, porttitor tortor. Fusce ac turpis a tellus finibus rhoncus",
      conceptBullets: ["Lorem ipsum", "consectetur adipiscing"],
      repositoryUrl: "",
      demoUrl: "",
    },
  ],
  certificates: [
    {
      institution: "Udemy",
      modules: [
        { name: "React Fundamentals", hours: 32 },
        { name: "TypeScript for Frontend", hours: 28 },
        { name: "Advanced CSS Techniques", hours: 24 },
        { name: "JavaScript ES6+ Mastery", hours: 40 },
        { name: "Web Design Principles", hours: 16 },
        { name: "UI Design Systems", hours: 20 },
        { name: "Component Libraries with React", hours: 18 },
        { name: "State Management with Redux", hours: 22 },
        { name: "Responsive Design Patterns", hours: 14 },
        { name: "Web Accessibility (a11y)", hours: 12 },
        { name: "Performance Optimization Strategies", hours: 26 },
      ],
    },
    {
      institution: "Alura",
      modules: [
        { name: "Front-end Developer Formação", hours: 108 },
        { name: "React com TypeScript", hours: 60 },
        { name: "UX/UI Design Fundamentals", hours: 48 },
        { name: "Git e GitHub Essentials", hours: 32 },
      ],
    },
    {
      institution: "edX",
      modules: [{ name: "Front-end Engineering Professional", hours: 80 }],
    },
    {
      institution: "Coursera",
      modules: [
        { name: "UI/UX Design Thinking", hours: 36 },
        { name: "Web Development Specialization", hours: 96 },
      ],
    },
  ]
} as const;

export { portfolioData };
