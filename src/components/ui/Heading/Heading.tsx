import { FC, PropsWithChildren } from "react";
import styles from "./Heading.module.scss";

interface IProps {}

const Heading: FC<PropsWithChildren<IProps>> = ({ children }) => {
  return <h1 className={styles.heading}>{children}</h1>;
};

export { Heading };
