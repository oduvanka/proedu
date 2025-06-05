import { useContext } from "react";
import classNames from "classnames";
import { THEMES, ThemeContext } from "../theme/theme-context";
import styles from "./progress.module.css";
import { useProgressBar } from "./useProgressBar";

export const ProgressBar = ({ scrollAreaRef }) => {
  const { theme } = useContext(ThemeContext);

  const { progress } = useProgressBar(scrollAreaRef);

  return (
    <div
      className={classNames(styles.progressBar, {
        [styles.progressBarJuicy]: theme === THEMES.light,
        [styles.progressBarBarbie]: theme !== THEMES.light,
      })}
      style={{ width: `${progress}%` }}
    />
  );
};
