import { useContext } from "react";
import { NavLink } from "react-router";
import styles from "./tabs.module.css";
import { THEMES, ThemeContext } from "../theme/theme-context";
import classNames from "classnames";

export const TabLink = ({ url, text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        classNames(styles.tabDefault, {
          [styles.tabJuicy]: theme === THEMES.light,
          [styles.tabBarbie]: theme !== THEMES.light,
          [styles.isActive]: isActive,
        })
      }
    >
      {text}
    </NavLink>
  );
};
