import { createContext } from "react";

const ThemeContext = createContext({
    theme: localStorage.getItem('theme') || "theme-auto",
    setTheme: () => {},
  });

export default ThemeContext;