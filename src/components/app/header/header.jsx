import { useContext } from "react";
import styles from "./header.module.css";
import { Button } from "../../button/button";
import { ThemeContext } from "../../theme/theme-context";
import { AuthContext, INIT_AUTH } from "../../auth/auth-context";
import { HelpText } from "../../helpText/help-text";

export const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { auth, toogleAuth } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <h1>PROEDU</h1>
      <HelpText>aggregator of food delivery from restraunts</HelpText>
      <div>
        <Button isSmall onClick={toggleTheme} className={styles.buttonInHeader}>
          <small>Toggle theme</small>
        </Button>
        <Button isSmall onClick={toogleAuth} className={styles.buttonInHeader}>
          <small>{auth.isAuthorized ? `Logout (${auth.name})` : "Login"}</small>
        </Button>
      </div>
    </header>
  );
};
