import { FC } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface IProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: React.ElementType;
  to?: string;
  href?: string;
  target?: "_blank" | "self";
}
export const Button: FC<IProps> = ({
  children,
  onClick,
  className,
  as: Component = "button",
  to,
  ...rest
}) => {
  const _class = clsx(styles.button, className);
  return (
    <Component {...rest} className={_class} onClick={onClick} to={to}>
      {children}
    </Component>
  );
};
