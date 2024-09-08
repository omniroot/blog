import { Button } from "@/components/ui/Button";
import styles from "./HeroSection.module.scss";
import { ArrowDown, ArrowUp, ChevronUp, ChevronUpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const handleScrollToProjects = () => {
    try {
      window.scrollTo({ top: window.innerHeight + -80 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="hero" className={styles.herosection}>
      {/* <img src="/logo.svg" width={200} /> */}
      <h1 className={styles.name}>OmniRoot</h1>
      <p className={styles.profession}>Frontend web developer</p>
      <p className={styles.about}>
        I'm a 19 year old boy who likes linux, anime, and open source!
      </p>
      <div className={styles.arrow_up}>
        <ChevronUp />
      </div>
    </section>
  );
};
