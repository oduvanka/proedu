import styles from "./progress.module.css";

export const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progress}>
      <div className={styles.bar} style={{ width: `${progress}%` }}></div>
    </div>
  );
};
