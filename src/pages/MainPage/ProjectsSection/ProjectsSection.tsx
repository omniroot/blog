import { Button } from "@/components/ui/Button";
import styles from "./ProjectsSection.module.scss";
import { ArrowDown, ChevronRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Blog",
    about: "Source code of this site",
    link: "https://github.com/omniroot/blog",
  },
  {
    title: "Yui_UI-kit",
    about: "UI-kit which I use in all my projects",
    link: "https://github.com/omniroot/yui-uikit",
  },
];

export const ProjectsSection = () => {
  return (
    <motion.section
      initial={{ y: -100 }}
      whileInView={{ y: 0 }}
      id="projects"
      className={styles.projectssection}
    >
      <h2 className={styles.projects_header}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            about={project.about}
            link={project.link}
          />
        ))}
      </div>
    </motion.section>
  );
};
