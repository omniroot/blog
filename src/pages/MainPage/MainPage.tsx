import { BigCard } from "../../components/ui/BigCard/BigCard";
import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import { Heading } from "../../components/ui/Heading/Heading";
import styles from "./MainPage.module.scss";

import data from "@/data/data.json";

const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      {/* Main News Card */}
      <div className={styles.mainnews}>
        <BigCard image="/src/assets/test.png">
          <span>ArchLinux Dots update to v2!</span>
          <Button
            onClick={() => window.open("https://github.com/gamenarkyt/.dots")}
          >
            Check
          </Button>
        </BigCard>
      </div>
      {/* Posts */}
      <Heading>Posts</Heading>
      <div className={styles.posts}>
        {data.map((post) => {
          return (
            <Card
              key={post.id}
              image={post.image}
              title={post.title}
              about={post.about}
              tags={post.tags}
            />
          );
        })}
      </div>
      <Heading>Roadmap</Heading>
      <span>soon...</span>
      <img
        className={styles.soon}
        src="/src/assets/tea.gif"
        alt="anime girl drink tea"
      />
    </div>
  );
};

export { MainPage };
