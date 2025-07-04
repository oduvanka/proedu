import { useContext } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { Button } from "../../button/button";
import { ThemeContext } from "../../theme/theme-context";
import { HelpText } from "../../helpText/help-text";
import { AuthButton } from "../../auth/auth-button";

export const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <h1>
        <Link href="/" className={styles.brand}>
          PROEDU
        </Link>
      </h1>
      <HelpText>aggregator of food delivery from restaurants</HelpText>
      <div>
        <Button isSmall onClick={toggleTheme} className={styles.buttonInHeader}>
          <small>Toggle theme</small>
        </Button>
        <AuthButton isSmall />
      </div>
    </header>
  );
};
