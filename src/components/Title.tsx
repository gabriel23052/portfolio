import classes from "./Title.module.css";

type Props = {
  children: string;
  subtitle: string;
};

/**
 * Título de seção e subtítulo
 * @param children Título da seção
 * @param children Subtítulo
 */
const Title = ({ children, subtitle }: Props) => {
  return (
    <div className={classes.container}>
      <p className="t-pre-title inv-tx-2">{subtitle}</p>
      <h2 className="t-title inv-tx-2">{children}</h2>
    </div>
  );
};

export default Title;

