import type { ComponentPropsWithoutRef, ComponentType, SVGProps } from "react";

import classes from "./LinkButton.module.css";

type Props = ComponentPropsWithoutRef<"a"> & {
  className?: string;
  bgColor: "red" | "blue";
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/**
 * Botão com link de maior destaque, deve ser utilizado para links
 * de maior importancia na hierarquia
 * @param children Texto que será exibido no botão
 * @param Icon Ícone em forma de componente SVG que será exibido no botão
 * @param bgColor Seletor para cor de fundo, deve ser "red" ou "blue"
 */
const LinkButton = ({
  children,
  Icon,
  bgColor,
  className,
  ...props
}: Props) => {
  return (
    <a
      className={`t-button-label-0 ${bgColor === "red" ? classes.red : classes.blue} ${classes.linkBtn} ${className || ""}`}
      {...props}
    >
      {children} <Icon aria-hidden="true" />
    </a>
  );
};

export default LinkButton;

