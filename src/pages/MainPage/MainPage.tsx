import { ProjectsSection } from "@/pages/MainPage/ProjectsSection/ProjectsSection";
import styles from "./MainPage.module.scss";
import { HeroSection } from "@/pages/MainPage/HeroSection/HeroSection";
import { StackSection } from "@/pages/MainPage/StackSection/StackSection";
import { ContactSection } from "@/pages/MainPage/ContactSection/ContactSection";
export const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <HeroSection />
      <ProjectsSection />
      <StackSection />
      <ContactSection />
    </div>
  );
};
