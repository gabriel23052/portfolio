import classes from "./SocialLinks.module.css";

import { useDarkModeContext } from "../contexts/DarkModeContext";

import { portfolioData } from "../portfolioData";

/**
 * Links externos para redes sociais e afins, os links vem diretamente
 * do portfolioData
 */
const SocialLinks = () => {
  const { darkMode } = useDarkModeContext();

  return (
    <ul className={classes.container}>
      {Object.values(portfolioData.socialLinks).map((link) => {
        return (
          <li key={link.name}>
            <a
              className="inv-bg-0"
              href={link.url}
              title={link.name}
              target="_blank"
            >
              <img
                src={darkMode ? link.iconUrl.darkMode : link.iconUrl.lightMode}
                aria-hidden="true"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
