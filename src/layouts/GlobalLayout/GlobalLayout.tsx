import { Outlet } from "react-router-dom";

import { Header } from "@/components/Header/Header";
import styles from "./GlobalLayout.module.scss";

const GlobalLayout = () => {
  return (
    <div className={styles.globallayout}>
      <Header />
      <main>
        {/* <SideBar /> */}
        <Outlet />
      </main>
    </div>
  );
};

export { GlobalLayout };
