import { ContactCard } from "@/components/ui/ContactCard/ContactCard";
import styles from "./ContactSection.module.scss";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <motion.section
      initial={{ y: -200 }}
      whileInView={{ y: 0 }}
      className={styles.contactsection}
    >
      <h2 className={styles.contact_header}>Contact</h2>
      <div className={styles.contacts}>
        <ContactCard
          title="Github"
          contact="omniroot"
          link="https://github.com/omniroot"
        />
        <ContactCard
          title="Telegram"
          contact="@omniroot"
          link="https://t.me/omniroot"
        />
        <ContactCard
          title="Gmail"
          contact="omnirootofc@gmail.com"
          link="mailto:omnirootofc@gmail.com"
        />
      </div>
      <p className={styles.goal}>
        私の人生の主な目標は、95% の人々のように生きることではありません
      </p>
    </motion.section>
  );
};
