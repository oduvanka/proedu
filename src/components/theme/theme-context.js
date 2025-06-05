import { createContext } from "react";

export const THEMES = {
  light: "light",
  dark: "dark",
};

export const ThemeContext = createContext(THEMES.light);
