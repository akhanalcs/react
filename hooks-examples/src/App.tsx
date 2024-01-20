import { useState } from "react";
import { Theme, ThemeContext } from "./contexts/ThemeContext";
import MyComponent from "./MyComponent";

export default function App() {
  //console.log("Hey App is rendered!");

  const [theme, setTheme] = useState<Theme>("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <MyComponent />
      </ThemeContext.Provider>
    </>
  );
}
