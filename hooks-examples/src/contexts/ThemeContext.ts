import { createContext, useContext } from "react";

type Theme = "light" | "dark" | "system";
const ThemeContext = createContext<Theme>("system");
const useGetTheme = () => useContext(ThemeContext);

export { Theme, ThemeContext, useGetTheme };
