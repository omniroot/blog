import styles from "./HeroSection.module.scss";
import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      className={styles.herosection}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {/* <img src="/logo.svg" width={200} /> */}
      <h1 className={styles.name}>OmniRoot</h1>
      <motion.h2 className={styles.profession}>
        Frontend web developer
      </motion.h2>
      <h2 className={styles.about}>
        I'm a 19 year old boy who likes linux, anime, and open source!
      </h2>
      <div className={styles.arrow_up}>
        <ChevronUp />
      </div>
    </motion.section>
  );
};
