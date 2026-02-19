import GithubIcon from "./assets/svg/github.svg?react";
import LinkedinIcon from "./assets/svg/linkedin.svg?react";
import WhatsappIcon from "./assets/svg/whatsapp.svg?react";
import MailIcon from "./assets/svg/mail.svg?react";

export type TSvgIcon = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

export type TSocialLinkKey = "github" | "linkedin" | "whatsapp" | "email";

export type TSocialLink = {
  name: string;
  url: string;
  Icon: TSvgIcon;
};

export type TProject = {
  title: string;
  faviconUrl: {
    lightMode: string;
    darkMode: string;
  };
  tags: string[];
  description: string;
  conceptBullets: string[];
  repositoryUrl: string;
  demoUrl: string;
};

export type TPortfolioData = {
  socialLinks: Record<TSocialLinkKey, TSocialLink>;
  skills: { label: string; iconUrl: string }[];
  projects: TProject[];
};

const portfolioData: TPortfolioData = {
  socialLinks: {
    github: {
      name: "GitHub",
      url: "",
      Icon: GithubIcon,
    },
    linkedin: {
      name: "LinkedIn",
      url: "",
      Icon: LinkedinIcon,
    },
    whatsapp: {
      name: "WhatsApp",
      url: "",
      Icon: WhatsappIcon,
    },
    email: {
      name: "Email",
      url: "",
      Icon: MailIcon,
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
} as const;

export { portfolioData };
