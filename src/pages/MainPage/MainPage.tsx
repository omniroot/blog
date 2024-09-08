import { ProjectsSection } from "@/pages/MainPage/ProjectsSection/ProjectsSection";
import styles from "./MainPage.module.scss";
import { HeroSection } from "@/pages/MainPage/HeroSection/HeroSection";
import { HobbiesSection } from "@/pages/MainPage/HobbiesSection/HobbiesSection";
export const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <HeroSection />
      <ProjectsSection />
      <HobbiesSection />
      <HeroSection />
    </div>
  );
};
