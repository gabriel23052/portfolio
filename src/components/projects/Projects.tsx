import Title from "../Title";
import Project from "./Project";

import { portfolioData } from "../../portfolioData";

import classes from "./Projects.module.css";

/**
 * Seção de projetos que exibe uma lista de cards com informações,
 * tecnologias, conceitos e links para cada projeto do portfólio
 */
const Projects = () => {
  return (
    <section className={classes.container} id="projects">
      <Title subtitle="Vamos ver meus">Projetos</Title>
      <ul>
        {portfolioData.projects.map((project, index) => (
          <Project
            project={project}
            key={project.title}
            emphasisColor={index % 2 === 0 ? "primary" : "secondary"}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;

