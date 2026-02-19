import classes from "./ProjectConceptBullets.module.css";

type Props = {
  concepts: string[];
  dotColor: "primary" | "secondary";
};

/**
 * Exibe os principais conceitos técnicos e práticas aprendidas
 * durante o desenvolvimento do projeto com indicador visual em cor tema
 * @param concepts Principais conceitos abordados
 * @param dotColor Cor tema do indicador visual dos conceitos (primária ou secundária)
 */
const ProjectConceptBullets = ({ concepts, dotColor }: Props) => {
  return (
    <div className={classes.container}>
      <h4 className="t-small tx-0">Principais conceitos abordados:</h4>
      <ul className="t-paragraph tx-2">
        {concepts.map((concept) => (
          <li
            key={concept}
            className={
              dotColor === "primary" ? classes.primary : classes.secondary
            }
          >
            {concept}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectConceptBullets;
