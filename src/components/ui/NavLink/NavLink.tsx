import { FC } from "react";
import styles from "./NavLink.module.scss";
import { Link, useLocation } from "react-router-dom";

const getClass = (currentLink: string, link: string) =>
  `${styles.link} ${currentLink === link ? styles.active : ""}`;

interface ILink {
  name: string;
  path: string;
}

interface IProps {
  links?: ILink[];
}

export const NavLink: FC<IProps> = ({ links = [] }) => {
  const currentLink = useLocation().pathname;
  console.log(currentLink);

  return (
    <ul className={styles.navlist}>
      {links.map((link) => (
        <li>
          <Link to={link.path} className={getClass(currentLink, link.path)}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
