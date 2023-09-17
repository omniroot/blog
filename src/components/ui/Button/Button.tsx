import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

interface IProps {
  width?: string;
  height?: string;
  fontSize?: string;
  onClick?: () => void;
}

const Button: FC<PropsWithChildren<IProps>> = ({
  children,
  width,
  height,
  fontSize = "18px",
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      style={{ width: width, height: height, fontSize: fontSize }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
