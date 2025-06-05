import { useContext } from "react";
import styles from "./header.module.css";
import { Button } from "../../button/button";
import { THEMES, ThemeContext } from "../../theme/theme-context";
import { AuthContext, INIT_AUTH } from "../../auth/auth-context";
import { HelpText } from "../../helpText/help-text";

export const Header = () => {
  const { setTheme } = useContext(ThemeContext);
  const { auth, setAuth } = useContext(AuthContext);

  const handleToggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === THEMES.light ? THEMES.dark : THEMES.light
    );
  };

  const handleLogin = () => {
    setAuth({ id: 1, name: "Yo", isAuthorized: true });
  };
  const handleLogout = () => {
    setAuth(INIT_AUTH);
  };

  const { isAuthorized } = auth;

  return (
    <header className={styles.header}>
      <h1>PROEDU</h1>
      <HelpText>aggregator of food delivery from restraunts</HelpText>
      <div>
        <Button
          isSmall={true}
          onClick={handleToggleTheme}
          className={styles.buttonInHeader}
        >
          <small>Toggle theme</small>
        </Button>
        <Button
          isSmall={true}
          onClick={isAuthorized ? handleLogout : handleLogin}
          className={styles.buttonInHeader}
        >
          <small>{isAuthorized ? `Logout (${auth.name})` : "Login"}</small>
        </Button>
      </div>
    </header>
  );
};
