import { Button } from "@/components/ui/Button";
import styles from "./HeroSection.module.scss";
import { ArrowDown, ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className={styles.herosection}>
      <div className={styles.leftside}>
        <div className={styles.name}>Yakire</div>
        <div className={styles.about}>
          Frontend developer, linux user and anime lover
        </div>
        <div className={styles.moreinfo}>
          <Button className={styles.projects_button}>
            Projects <ChevronRight size={14} />
          </Button>
          <Button className={styles.scrolldown_button}>
            Scroll down <ArrowDown size={14} />
          </Button>
        </div>
      </div>
      <img src="/hero.png" alt="anime waifu" className={styles.heroimg} />
    </div>
  );
};
