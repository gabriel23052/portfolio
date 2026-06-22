import type { TProject } from "../../portfolioData";

import ProjectTitle from "./ProjectTitle";
import ProjectTags from "./ProjectTags";
import ProjectGallery from "./ProjectGallery";
import ProjectConceptBullets from "./ProjectConceptBullets";
import ProjectButtons from "./ProjectButtons";

import classes from "./Project.module.css";

type Props = {
  project: TProject;
  emphasisColor: "primary" | "secondary";
};

/**
 * Card individual de projeto que exibe título, tags, descrição,
 * conceitos-chave, botões de ação e decoração visual em tema primário ou secundário
 * @param project Objeto contendo todos os dados do projeto (título, descrição, tags, etc)
 * @param emphasisColor Cor tema para decoração visual
 */
const Project = ({ project, emphasisColor }: Props) => {
  return (
    <li className={classes.wrapper}>
      <div className={classes.decoration} aria-hidden="true"></div>
      <div className={`bg-1 ${classes.container}`}>
        <ProjectTitle title={project.title} faviconUrl={project.faviconUrl} />
        <ProjectTags tags={project.tags} />
        {project.imagesUrl && project.imagesUrl.length > 0 && (
          <ProjectGallery
            imagesUrl={project.imagesUrl}
            projectTitle={project.title}
          />
        )}
        <p className={`t-paragraph tx-1 ${classes.description}`}>
          {project.description}
        </p>
        <ProjectConceptBullets
          concepts={project.conceptBullets}
          dotColor={emphasisColor}
        />
        <ProjectButtons
          repositoryUrl={project.repositoryUrl}
          demoUrl={project.demoUrl}
          demoButtonBgColor={emphasisColor}
        />
      </div>
    </li>
  );
};

export default Project;

