import classes from "./ExternalLinks.module.css";

import { portfolioData } from "../portfolioData";

/**
 * Links externos para redes sociais e afins, os links vem diretamente
 * do portfolioData
 */
const ExternalLinks = () => {
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
              <link.Icon aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ExternalLinks;

