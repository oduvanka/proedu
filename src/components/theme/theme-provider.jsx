import { useState } from "react";
import { THEMES, ThemeContext } from "./theme-context";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.light);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === THEMES.light ? THEMES.dark : THEMES.light
    );
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
