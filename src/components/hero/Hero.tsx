import HeroIntroduction from "./HeroIntroduction";
import HeroAnimation from "./HeroAnimation";

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
        <HeroIntroduction />
        <HeroAnimation />
      </main>
    </div>
  );
};

export default Hero;
