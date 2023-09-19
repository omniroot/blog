import { FC } from "react";

import styles from "./Card.module.scss";
import { useNavigate } from "react-router-dom";

interface IProps {
  image: string;
  title: string;
  about?: string;
  tags?: string[];
  link: string;
}

const Card: FC<IProps> = ({ image, title: name, about, tags, link }) => {
  const navigate = useNavigate();
  const onCardClickHandler = () => {
    navigate(link);
  };

  return (
    <div className={styles.card} onClick={onCardClickHandler}>
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
