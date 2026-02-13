import GithubIcon from "./assets/svg/github.svg?react";
import LinkedinIcon from "./assets/svg/linkedin.svg?react";
import WhatsappIcon from "./assets/svg/whatsapp.svg?react";
import MailIcon from "./assets/svg/mail.svg?react";

const portfolioData = {
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
} as const;

export { portfolioData };
