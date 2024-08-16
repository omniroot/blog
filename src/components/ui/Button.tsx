import { FC } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface IProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export const Button: FC<IProps> = ({ children, onClick, className }) => {
  const _class = clsx(styles.button, className);
  return (
    <button className={_class} onClick={onClick}>
      {children}
    </button>
  );
};
