import classes from "./HeroAnimation.module.css";

/**
 * Animação do Hero
 */
const HeroAnimation = () => {
  return (
    <div className={classes.container} aria-hidden="true">
      <div className={classes.animation}>
        <div className={classes.macControls}>
          <div data-color="green"></div>
          <div data-color="yellow"></div>
          <div data-color="red"></div>
        </div>
        <div className={classes.grid}>
          <div className={classes.command}>
            <span>build --ui --code</span>
          </div>
          <div className={classes.uiElements}>
            <div data-index="0"></div>
            <div data-index="1"></div>
            <div data-index="2"></div>
            <div data-index="3"></div>
          </div>
        </div>
      </div>
      <div className={classes.shadow}></div>
      <div className={classes.background}>
        <div className={classes.primaryCircle}></div>
        <div className={classes.secondaryCircle}></div>
      </div>
    </div>
  );
};

export default HeroAnimation;
