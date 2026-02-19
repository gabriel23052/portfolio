import classes from "./ProjectTags.module.css";

type Props = {
  tags: string[];
};

/**
 * Lista de tecnologias e ferramentas utilizadas no projeto
 * exibidas como tags
 * @param tags Tecnologias/ferramentas do projeto
 */
const ProjectTags = ({ tags }: Props) => {
  return (
    <ul
      className={`t-tag tx-1 ${classes.tags}`}
      aria-label="Tecnologias utilizadas"
    >
      {tags.map((tag) => (
        <li className="bg-0" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default ProjectTags;
