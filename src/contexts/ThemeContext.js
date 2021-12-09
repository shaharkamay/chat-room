import { createContext } from "react";

const ThemeContext = createContext({
    theme: localStorage.getItem('theme') || "theme-auto",
    setTheme: () => {},
  });

export default ThemeContext;

// export const ThemeProvider = ({ children }) => {
//   const { theme, setTheme } = useContext(ThemeContext);
//   useEffect(() => {
//     setTheme(localStorage.getItem("theme") || "theme-auto");
//   }, [])

//   return (
//     <ThemeContext.Provider
//       value={theme}
//     >
//       {children}
//     </ThemeContext.Provider>
//   )
// } 