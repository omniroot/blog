import { FC } from "react";
import styles from "./ProjectCard.module.scss";
import { motion } from "framer-motion";

interface IProps {
  title: string;
  about: string;
  link: string;
}

export const ProjectCard: FC<IProps> = ({ title, about, link }) => {
  const onCardClick = () => {
    window.open(link, "_blank");
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={styles.project_card}
      onClick={onCardClick}
    >
      <div className={styles.preview}>{title}</div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.about}>{about}</h3>
      </div>
    </motion.article>
  );
};
