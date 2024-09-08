import { Header } from "@/components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Global.module.scss";
import { useEffect } from "react";
import { Footer } from "@/components/Footer/Footer";

const onLinkClickhandler = () => {
  console.log("onLinkClickhandler");
  window.scroll({ top: -100 });
};

export const Global = () => {
  const path = useLocation().pathname;
  useEffect(() => {
    onLinkClickhandler();
  }, [path]);

  return (
    <div className={styles.global}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
