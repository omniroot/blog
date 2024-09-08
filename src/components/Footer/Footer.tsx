import { HeartIcon } from "lucide-react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>
        made with <HeartIcon className={styles.heart} />
      </span>
    </footer>
  );
};
