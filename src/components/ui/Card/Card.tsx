import { FC } from "react";

import styles from "./Card.module.scss";

interface IProps {
  image: string;
  title: string;
  about?: string;
  tags?: string[];
}

const Card: FC<IProps> = ({ image, title: name, about, tags }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardimage} src={image} alt="card picture " />
      <div className={styles.cardinfo}>
        <span className={styles.cardname}>{name}</span>
        <span className={styles.cardabout}>{about}</span>
      </div>
      <div className={styles.taglists}>
        {tags?.map((tag) => {
          return <div className={styles.tag}>{tag}</div>;
        })}
      </div>
    </div>
  );
};

export { Card };
