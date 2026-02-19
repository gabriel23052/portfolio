import { useEffect, useId, useState } from "react";

import HeaderDarkMode from "./HeaderDarkMode";

import classes from "./Header.module.css";

const MOBILE_MENU_MAX_WIDTH = 700;

const NAVIGATION_LINKS = [
  { label: "Skills", url: "#skills" },
  { label: "Projetos", url: "#projects" },
  { label: "Certificados", url: "#certificates" },
  { label: "Contato", url: "#contact" },
];

/**
 * Header com a navegação e o interruptor do modo escuro, fica oculto
 * no mobile, apenas sendo exibido a partir de interação direta
 */
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(
    window.innerWidth > MOBILE_MENU_MAX_WIDTH,
  );

  const navigationAriaId = useId();
  const darkModeAriaId = useId();

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_MENU_MAX_WIDTH}px)`,
    );
    const mediaQueryHandler = (e: MediaQueryListEvent) => {
      if (!e.matches) setMobileOpen(true);
    };
    const popstateHandler = () => {
      if (window.innerWidth > MOBILE_MENU_MAX_WIDTH) return;
      setMobileOpen(false);
    };
    mediaQuery.addEventListener("change", mediaQueryHandler);
    window.addEventListener("popstate", popstateHandler);
    return () => {
      mediaQuery.removeEventListener("change", mediaQueryHandler);
      window.removeEventListener("popstate", popstateHandler);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen && window.history.state !== null) {
      window.history.back();
      return;
    }
    if (mobileOpen && window.innerWidth <= MOBILE_MENU_MAX_WIDTH) {
      window.history.pushState(
        {
          mobileOpen: true,
        },
        "",
      );
    }
  }, [mobileOpen]);

  return (
    <div className={classes.wrapper} data-open={mobileOpen}>
      <header className={classes.container}>
        <button
          className={classes.mobileBtn}
          onClick={() => {
            setMobileOpen((prev) => !prev);
          }}
          aria-controls={`${navigationAriaId} ${darkModeAriaId}`}
          title="Menu de navegação"
        ></button>
        <nav
          className={classes.navigation}
          id={navigationAriaId}
          inert={!mobileOpen}
        >
          <ul>
            {NAVIGATION_LINKS.map(({ label, url }) => (
              <li key={label}>
                <a className="inv-tx-2 t-paragraph" href={url}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <HeaderDarkMode ariaId={darkModeAriaId} inert={!mobileOpen} />
      </header>
    </div>
  );
};

export default Header;

