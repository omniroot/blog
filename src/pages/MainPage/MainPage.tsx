import styles from "./MainPage.module.scss";
import { HeroSection } from "@/pages/MainPage/HeroSection/HeroSection";
export const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <HeroSection />
      {/* <HeroSection /> */}
      {/* <HeroSection /> */}
    </div>
  );
};
