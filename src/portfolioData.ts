import GithubIcon from "./assets/svg/github.svg?react";
import LinkedinIcon from "./assets/svg/linkedin.svg?react";
import WhatsappIcon from "./assets/svg/whatsapp.svg?react";
import MailIcon from "./assets/svg/mail.svg?react";

import HtmlIcon from "./assets/svg/html.svg?react";
import CssIcon from "./assets/svg/css.svg?react";
import JsIcon from "./assets/svg/js.svg?react";
import TsIcon from "./assets/svg/ts.svg?react";
import ReactIcon from "./assets/svg/react.svg?react";
import FigmaIcon from "./assets/svg/figma.svg?react";
import GitIcon from "./assets/svg/git.svg?react";

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
  skills: [
    { label: "HTML", Icon: HtmlIcon },
    { label: "CSS", Icon: CssIcon },
    { label: "JavaScript", Icon: JsIcon },
    { label: "TypeScript", Icon: TsIcon },
    { label: "React", Icon: ReactIcon },
    { label: "Figma", Icon: FigmaIcon },
    { label: "Git", Icon: GitIcon },
    { label: "GitHub", Icon: GithubIcon },
  ],
} as const;

export { portfolioData };
