import { ArrowRight, Link } from "lucide-react";
import styles from "./ContactCard.module.scss";
import { FC } from "react";
import { Button } from "@/components/ui/Button";

interface IContactCardProps {
  title: string;
  contact: string;
  link: string;
}

const onGoToClick = (link: string) => {
  window.open(link, "_blank");
};

export const ContactCard: FC<IContactCardProps> = ({
  title,
  contact,
  link,
}) => {
  return (
    <div className={styles.contactcard}>
      <span className={styles.title}>{title}</span>
      <div className={styles.contact}>
        <span className={styles.contact_text}>{contact}</span>
        <Button
          as="a"
          href={link}
          target="_blank"
          className={styles.goto_button}
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};
