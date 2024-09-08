import { NavLink } from "@/components/ui/NavLink/NavLink";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/Button";

const links = [
  { name: "Home", path: "/" },
  { name: "Posts", path: "/posts" },
  { name: "About", path: "/about" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftside}>
        <Link to="/" className={styles.sitename}>
          Blog
        </Link>
      </div>
      <nav className={styles.center}>
        <NavLink links={links} />
      </nav>
      <div className={styles.rightside}>
        <Button
          target="_blank"
          href="https://github.com/omniroot/"
          as={"a"}
          className={styles.github}
        >
          <Github />
          Github
        </Button>
      </div>
    </header>
  );
};
