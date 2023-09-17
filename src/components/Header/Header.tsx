import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();

  const onClickLogoHandler = () => {
    navigate("/");
  };

  return (
    <div className={styles.header}>
      <span className={styles.logo} onClick={onClickLogoHandler}>
        YakireBlog
      </span>
      <nav></nav>
    </div>
  );
};

export { Header };
