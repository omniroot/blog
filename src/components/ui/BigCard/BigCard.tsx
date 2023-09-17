import { FC, PropsWithChildren } from "react";

import styles from "./BigCard.module.scss";

interface IProps {
  image: string;
}

const BigCard: FC<PropsWithChildren<IProps>> = ({ image, children }) => {
  return (
    <div
      className={styles.bigcard}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.card}>{children}</div>
    </div>
  );
};

export { BigCard };
