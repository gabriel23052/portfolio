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
  const [darkMode, setDarkMode] = useState(() => {
    const preference = (() => {
      const localStoragePreference = localStorage.getItem("darkMode");
      if (localStoragePreference === null) {
        const browserConfigPreference = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        localStorage.setItem("darkMode", String(browserConfigPreference));
        return browserConfigPreference;
      }
      return localStorage.getItem("darkMode") === "true";
    })();
    document.body.dataset.darkmode = String(preference);
    return preference;
  });

  const toggleDarkMode = () => {
    if (!document.startViewTransition) {
      document.body.dataset.darkmode = String(!darkMode);
      localStorage.setItem("darkMode", String(!darkMode));
      setDarkMode((prev) => !prev);
      return;
    }
    document.startViewTransition(() => {
      document.body.dataset.darkmode = String(!darkMode);
      localStorage.setItem("darkMode", String(!darkMode));
      setDarkMode((prev) => !prev);
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

/**
 * Retorna a API para interagir com o contexto de modo escuro que
 * encapsula o estado do modo escuro e altera o atributo data-darkmode
 * no body para tornar o estado acessível via CSS
 * @returns API do \<DarkModeContext\>
 */
const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) throw new Error("DarkModeContext is undefined");
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeContextProvider, useDarkModeContext };
