import { useContext } from "react";
import { Button } from "../button/button";
import { THEMES, ThemeContext } from "../theme/theme-context";

export const Header = () => {
  const { setTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === THEMES.light ? THEMES.dark : THEMES.light
    );
  };

  return (
    <header className="header">
      <h1>PROEDU</h1>
      <small>aggregator of food delivery from restraunts</small>
      <Button isSmall={true} onClick={handleToggleTheme}>
        <small>toggle theme</small>
      </Button>
    </header>
  );
};
