import { FC, ReactNode } from "react";
import styles from "./StackCard.module.scss";
import clsx from "clsx";

interface IStackProps {
  icon: ReactNode;
  title: string;
  icon_width?: string;
  icon_height?: string;
  variant?: "normal" | "big";
}

export const StackCard: FC<IStackProps> = ({
  variant = "normal",
  icon,
  title,
}) => {
  const _class = clsx(styles.stackcard, {
    [styles.normal]: variant === "normal",
    [styles.big]: variant === "big",
  });
  return (
    <div className={_class}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
