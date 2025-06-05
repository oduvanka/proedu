import { useState } from "react";
import { THEMES, ThemeContext } from "./theme-context";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.light);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
