import { StackCard } from "@/components/ui/StackCard/StackCard";
import styles from "./StackSection.module.scss";
import {
  FramerMotionIcon,
  ReactIcon,
  ReactRouterIcon,
  TypeScriptIcon,
  ViteIcon,
} from "@/components/ui/Icons";

export const StackSection = () => {
  return (
    <section className={styles.stackssection}>
      <h2 className={styles.stack_header}>Stack</h2>
      <StackCard icon={<ReactIcon />} title="React" variant="big" />
      <div className={styles.stack_break} />
      <div className={styles.stacks}>
        <StackCard icon={<TypeScriptIcon />} title="TypeScript" />
        <StackCard icon={<ViteIcon />} title="Vite" />
        <StackCard icon={<FramerMotionIcon />} title="Framer Motion" />
        <StackCard icon={<ReactRouterIcon />} title="React Router" />
      </div>
    </section>
  );
};
