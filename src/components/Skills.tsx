import { portfolioData } from "../portfolioData";

import classes from "./Skills.module.css";

/**
 * Lista de skills, as skills vem diretamente de portfolioData
 */
const Skills = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.container} aria-label="Skills" id="skills">
        {portfolioData.skills.map(({ label, Icon }) => (
          <li className="t-skill" key={label}>
            <Icon aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

