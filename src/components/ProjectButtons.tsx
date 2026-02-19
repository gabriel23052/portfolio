import LinkButton from "./LinkButton";
import DemoIcon from "../assets/svg/demo.svg?react";
import GithubIcon from "../assets/svg/github.svg?react";

import classes from "./ProjectButtons.module.css";

type Props = {
  repositoryUrl: string;
  demoUrl: string;
  demoButtonBgColor: "primary" | "secondary";
};

/**
 * Botões de ação para acessar o repositório no GitHub e a demo
 * do projeto
 * @param repositoryUrl URL do repositório no GitHub do projeto
 * @param demoUrl URL da demo do projeto
 * @param demoButtonBgColor Cor tema do botão de acesso à demo (primária ou secundária)
 */
const ProjectButtons = ({
  repositoryUrl,
  demoUrl,
  demoButtonBgColor,
}: Props) => {
  return (
    <div className={classes.container}>
      <a
        className={`t-button-label-1 bg-0 tx-1 ${classes.repoLink}`}
        href={repositoryUrl}
        target="_blank"
      >
        Repositório
        <GithubIcon width={16} height={16} />
      </a>
      <LinkButton
        bgColor={demoButtonBgColor}
        Icon={DemoIcon}
        href={demoUrl}
        target="_blank"
      >
        Acessar
      </LinkButton>
    </div>
  );
};

export default ProjectButtons;
