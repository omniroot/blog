import { YinYangIcon } from "@/components/ui/Icons";
import styles from "./YinYang.module.scss";
import { forwardRef } from "react";
import clsx from "clsx";

export const YinYang = () => {
  const _class = clsx(styles.yinyang, "yinyang");
  return <YinYangIcon className={_class} />;
};
