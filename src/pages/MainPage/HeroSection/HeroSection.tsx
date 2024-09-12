import styles from "./HeroSection.module.scss";
import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section id="hero" className={styles.herosection}>
      {/* <img src="/logo.svg" width={200} /> */}
      <h1 className={styles.name}>OmniRoot</h1>
      <h2 className={styles.profession}>Frontend web developer</h2>
      <h2 className={styles.about}>
        I'm a 19 year old boy who likes linux, anime, and open source!
      </h2>
      <div className={styles.arrow_up}>
        <ChevronUp />
      </div>
    </section>
  );
};
