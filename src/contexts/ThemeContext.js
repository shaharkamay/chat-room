import React, { createContext, useContext, useEffect } from "react";

export const ThemeContext = createContext({
  theme: "theme-auto",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "theme-auto");
  }, [setTheme])

  return (
    <ThemeContext.Provider
      value={theme}
    >
      {children}
    </ThemeContext.Provider>
  )
} 