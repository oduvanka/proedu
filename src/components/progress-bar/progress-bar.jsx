import { useEffect } from "react";
import styles from "./progress.module.css";
import { useProgressBar } from "./useProgressBar";

export const ProgressBar = ({ scrollAreaRef }) => {
  const { progress, handleScroll } = useProgressBar();

  useEffect(() => {
    scrollAreaRef.current.addEventListener("scroll", handleScroll);

    return () => {
      scrollAreaRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.progressBar} style={{ width: `${progress}%` }} />
  );
};
