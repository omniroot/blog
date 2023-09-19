import { FC, PropsWithChildren } from "react";
import styles from "./Heading.module.scss";

interface IProps {
  text: string;
}

const Heading: FC<PropsWithChildren<IProps>> = ({ children, text }) => {
  return (
    <h1 className={styles.heading}>
      <span className={styles.text}>{text}</span>
      <div className={styles.rightside}>{children}</div>
    </h1>
  );
};

export { Heading };
