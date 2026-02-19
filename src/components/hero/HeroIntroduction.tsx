import ExternalLinks from "../ExternalLinks";
import LinkButton from "../LinkButton";
import ProjectsIcon from "../../assets/svg/project.svg?react";

import { portfolioData } from "../../portfolioData";

import classes from "./HeroIntroduction.module.css";

/**
 * Informações importantes de introdução do portfólio
 */
const HeroIntroduction = () => {
  const getGreeting = () => {
    const nowHour = new Date().getHours();
    return nowHour < 6
      ? "Boa madrugada"
      : nowHour < 12
        ? "Bom dia"
        : nowHour < 18
          ? "Boa tarde"
          : "Boa noite";
  };

  return (
    <div className={classes.container}>
      <p className={`t-pre-title tx-1 ${classes.greeting}`}>
        {getGreeting()}, meu nome é
      </p>
      <h1 className="t-name tx-2">Gabriel G. Pereira</h1>
      <p className={`t-skills tx-1 ${classes.skills}`}>
        Frontend <span>&</span> UI/UX
      </p>
      <div className={classes.linksContainer}>
        <LinkButton
          Icon={portfolioData.socialLinks.github.Icon}
          href={portfolioData.socialLinks.github.url}
          bgColor="primary"
        >
          GitHub
        </LinkButton>
        <LinkButton Icon={ProjectsIcon} href="#projects" bgColor="secondary">
          Projetos
        </LinkButton>
      </div>
      <address className="tx-0 t-paragraph">Viamão - RS, Brasil</address>
      <ExternalLinks />
    </div>
  );
};

export default HeroIntroduction;
