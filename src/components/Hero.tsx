import Introduction from "./Introduction";
import Animation from "./Animation";

import classes from "./Hero.module.css";

/**
 * Hero do portfólio, contém as informações mais importantes como
 * nome, stack, links para seções mais importantes, etc. Além de
 * uma animação decorativa
 */
const Hero = () => {
  return (
    <div className={classes.wrapper}>
      <main className={classes.container}>
        <Introduction />
        <Animation />
      </main>
    </div>
  );
};

export default Hero;

