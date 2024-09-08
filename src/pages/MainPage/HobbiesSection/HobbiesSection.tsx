import { Box } from "@/components/ui/Box/Box";
import styles from "./HobbiesSection.module.scss";

export const HobbiesSection = () => {
  return (
    <section className={styles.hobbiessection}>
      <div className={styles.first_row}>
        <Box className={`${styles.box} ${styles.box_frontend}`}>frontend</Box>
        <Box tooltip="Linux" className={`${styles.box} ${styles.box_linux}`}>
          <span className={styles.linux_title}>Arch Linux</span>
          <img src="/arch_linux_chan.png" />
        </Box>
        <Box className={`${styles.box} ${styles.box_android}`}>android</Box>
      </div>
      <div className={styles.second_row}>
        <Box tooltip="Anime" className={`${styles.box} ${styles.box_anime}`}>
          <span className={styles.anime_title}>~100 Anime titles</span>
          <img src="/anime_bento_box.png" />
        </Box>
        <Box className={`${styles.box} ${styles.box_music}`}>music</Box>
        <Box className={`${styles.box} ${styles.box_game_hacking}`}>
          game_hacking
        </Box>
      </div>
    </section>
  );
};
