import { Button } from "@/components/ui/Button";
import styles from "./ProjectsSection.module.scss";
import { ArrowDown, ChevronRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard/ProjectCard";

const projects = [
  { title: "Blog", about: "Source code of this site", link: "https://github.com/omniroot/blog" },
  { title: "Yui_UI-kit", about: "UI-kit which I use in all my projects", link: "https://github.com/omniroot/yui-uikit" },
];

export const ProjectsSection = () => {
  return (
    <section className={styles.projectssection}>
      {/* <div className={styles.name}>Projects</div> */}
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          about={project.about}
          link={project.link}
        />
      ))}
    </section>
  );
};
