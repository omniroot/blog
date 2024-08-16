import { Header } from "@/components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Global.module.scss";

export const Global = () => {
  return (
    <div className={styles.global}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
