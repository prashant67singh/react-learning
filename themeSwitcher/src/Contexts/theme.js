import { createContext, useContext } from "react";

// ThemeContext creation (basically store creation). We can provide variable and functions
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;


// This is custom hook that will simplify 2 imports
export default function useTheme(){
    return useContext(ThemeContext);
}
