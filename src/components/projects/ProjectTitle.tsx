import { useDarkModeContext } from "../../contexts/DarkModeContext";
import styles from "./ProjectTitle.module.css";

type Props = {
  title: string;
  faviconUrl: { lightMode: string; darkMode: string };
};

/**
 * Exibe o título do projeto com seu ícone/favicon dinâmico
 * que muda de acordo com o tema da página
 * @param title Nome do projeto a ser exibido no heading
 * @param faviconUrl URLs do ícone do projeto para modo claro e escuro
 */
const ProjectTitle = ({ title, faviconUrl }: Props) => {
  const {darkMode} = useDarkModeContext();

  return (
    <div className={styles.title}>
      <img
        alt={`Ícone do ${title}`}
        src={darkMode ? faviconUrl.darkMode : faviconUrl.lightMode}
        aria-hidden="true"
      />
      <h3 className="t-project-title tx-2">{title}</h3>
    </div>
  );
};

export default ProjectTitle;
