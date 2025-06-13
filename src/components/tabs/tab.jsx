import { useContext } from "react";
import { NavLink } from "react-router";
import styles from "./tabs.module.css";
import { THEMES, ThemeContext } from "../theme/theme-context";

export const Tab = ({ url, text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        [
          styles.tabDefault,
          theme === THEMES.light
            ? isActive
              ? styles.isActiveJuicy
              : styles.tabJuicy
            : isActive
            ? styles.isActiveBarbie
            : styles.tabBarbie,
        ].join(" ")
      }
    >
      {text}
    </NavLink>
  );
};
