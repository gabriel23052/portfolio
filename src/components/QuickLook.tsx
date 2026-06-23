import { useDarkModeContext } from "../contexts/DarkModeContext";

import logoLightMode from "../assets/svg/logo-light.svg";
import logoDarkMode from "../assets/svg/logo-dark.svg";

import classes from "./QuickLook.module.css";

/**
 * Resumo rápido sobre o desenvolvedor
 */
const QuickLook = () => {
  const { darkMode } = useDarkModeContext();

  return (
    <div className={classes.container}>
      <img
        src={darkMode ? logoDarkMode : logoLightMode}
        alt="Logo Gabriel Pereira"
        width={128}
        height={128}
      />
      <p className="t-quickLook tx-2">
        Desenvolvo interfaces responsivas, acessíveis e bem estruturadas, com
        atenção à experiência do usuário e à manutenção do código. Busco criar
        soluções funcionais para quem utiliza o produto e sustentáveis para quem
        precisa evoluí-lo.
      </p>
    </div>
  );
};

export default QuickLook;

