import { useContext } from "react";
import Link from "next/link";
import styles from "./tabs.module.css";
import { THEMES, ThemeContext } from "../theme/theme-context";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export const TabLink = ({ url, text }) => {
  const { theme } = useContext(ThemeContext);

  const pathname = usePathname();

  return (
    <Link
      href={url}
      className={classNames(styles.tabDefault, {
        [styles.tabJuicy]: theme === THEMES.light,
        [styles.tabBarbie]: theme !== THEMES.light,
        [styles.isActive]: pathname.includes(url),
      })}
    >
      {text}
    </Link>
  );
};
