import type { MouseEventHandler } from "react";

import SunIcon from "../../assets/svg/sun.svg?react";
import MoonIcon from "../../assets/svg/moon.svg?react";

import { useDarkModeContext } from "../../contexts/DarkModeContext";

import classes from "./HeaderDarkMode.module.css";

type Props = {
  ariaId: string;
  inert: boolean;
};

/**
 * Botão animado para alterar o estado do modo escuro
 * @param ariaId ID utilizado para linkar a presença do botão com o estado de
 * exibição atual do menu mobile em leitores de tela
 * @param inert Atributo HTML para tornar o botão inacessível caso o menu
 * mobile esteja fechado
 */
const HeaderDarkMode = ({ ariaId, inert }: Props) => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.currentTarget.blur();
    toggleDarkMode();
  };

  return (
    <button
      className={classes.darkModeBtn}
      onClick={handleClick}
      title={`Ativar modo ${darkMode ? "claro" : "escuro"}`}
      id={ariaId}
      inert={inert}
    >
      {darkMode ? (
        <MoonIcon aria-hidden="true" />
      ) : (
        <SunIcon aria-hidden="true" />
      )}
    </button>
  );
};

export default HeaderDarkMode;

