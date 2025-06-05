import styles from "./progress.module.css";
import { useProgressBar } from "./useProgressBar";

export const ProgressBar = ({ scrollAreaRef }) => {
  const { progress } = useProgressBar(scrollAreaRef);

  return (
    <div className={styles.progressBar} style={{ width: `${progress}%` }} />
  );
};
