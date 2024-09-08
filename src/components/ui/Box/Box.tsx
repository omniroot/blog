import { FC, PropsWithChildren } from "react";
import styles from "./Box.module.scss";
import clsx from "clsx";

export interface IProps {
  className?: string;
  tooltip?: string;
}

export const Box: FC<PropsWithChildren<IProps>> = ({
  className,
  tooltip = "",
  children,
}) => {
  const _class = clsx(styles.box, className);
  return (
    <>
      <div className={_class}>
        <div className={styles.tooltip}>{tooltip}</div>
        {children}
      </div>
    </>
  );
};
