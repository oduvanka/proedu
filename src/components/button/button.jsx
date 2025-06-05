import { useContext } from "react";
import classNames from "classnames";
import styles from "./button.module.css";
import { THEMES, ThemeContext } from "../theme/theme-context";

export const Button = ({ isSmall, children, ...props }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      {...props}
      className={classNames(styles.buttonDefault, props.className, {
        [styles.buttonLarge]: !isSmall,
        [styles.buttonSmall]: isSmall,
        [styles.buttonJuicy]: theme === THEMES.light,
        [styles.buttonBarbie]: theme !== THEMES.light,
      })}
    >
      {children}
    </button>
  );
};
