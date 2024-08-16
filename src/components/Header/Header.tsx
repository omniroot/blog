import { NavLink } from "@/components/ui/NavLink/NavLink";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Posts", path: "/posts" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.leftside}>Yakire Blog</span>
      <nav className={styles.center}>
        <NavLink links={links} />
      </nav>
      <div className={styles.rightside}>
        {/* <Link
          target="_blank"
          to="https://github.com/gamenarkyt/"
          className={styles.github}
        >
          Github
        </Link> */}
      </div>
    </header>
  );
};
