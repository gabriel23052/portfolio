import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

type ContextValue = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<ContextValue | undefined>(undefined);

const DarkModeContextProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("darkMode");
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

/**
 * Retorna a API para interagir com o contexto de modo escuro que
 * encapsula o estado do modo escuro e altera a classe no body para
 * tornar o estado acessível via CSS
 * @returns API do \<DarkModeContext\>
 */
const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) throw new Error("DarkModeContext is undefined");
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeContextProvider, useDarkModeContext };
