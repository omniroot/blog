import { Header } from "@/components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Global.module.scss";
import { useEffect, useRef } from "react";
import { Footer } from "@/components/Footer/Footer";
import { YinYang } from "@/components/ui/YinYang/YinYang";

const onLinkClickhandler = () => {
  console.log("onLinkClickhandler");
  window.scroll({ top: -100 });
};
const height = window.innerHeight - 260;

export const Global = () => {
  const path = useLocation().pathname;

  useEffect(() => {
    onLinkClickhandler();
  }, [path]);

  useEffect(() => {
    addEventListener("scroll", () => {
      const yinyang = document.querySelector<SVGImageElement>(".yinyang");
      const herosection = document.querySelector<HTMLDivElement>("#hero");
      const heroY =
        (herosection && -herosection.getBoundingClientRect()?.y) || 0;
      // console.log(heroY);
      if (yinyang) {
        if (heroY < 500) {
          yinyang.style.translate = "80vw 60vh";
        }
        if (heroY > 500 && heroY < 1400) {
          yinyang.style.translate = "80vw 0vh";
        }
        if (heroY > 1400 && heroY < 2200) {
          yinyang.style.translate = "0vw 0vh";
        }
        if (heroY > 2200) {
          yinyang.style.translate = "0vw 60vh";
        }
      }
    });
  });

  return (
    <div className={styles.global}>
      <Header />
      <YinYang />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
