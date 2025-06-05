import { useContext } from "react";
import { Button } from "../button/button";
import { THEMES, ThemeContext } from "../theme/theme-context";
import { AuthContext, INIT_AUTH } from "../auth/auth-context";

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
    <header className="header">
      <h1>PROEDU</h1>
      <small>aggregator of food delivery from restraunts</small>
      <div>
        <Button
          isSmall={true}
          onClick={handleToggleTheme}
          className="buttonInHeader"
        >
          <small>Toggle theme</small>
        </Button>
        <Button
          isSmall={true}
          onClick={isAuthorized ? handleLogout : handleLogin}
          className="buttonInHeader"
        >
          <small>{isAuthorized ? `Logout (${auth.name})` : "Login"}</small>
        </Button>
      </div>
    </header>
  );
};
