import { useContext } from "react";
import Link from "next/link";
import styles from "./tabs.module.css";
import { THEMES, ThemeContext } from "../theme/theme-context";
import classNames from "classnames";

export const TabLink = ({ url, text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      href={url}
      className={classNames(styles.tabDefault, {
        [styles.tabJuicy]: theme === THEMES.light,
        [styles.tabBarbie]: theme !== THEMES.light,
        //[styles.isActive]: isActive,
      })}
    >
      {text}
    </Link>
  );
};
