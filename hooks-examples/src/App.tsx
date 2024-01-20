import { useState } from "react";
import { Theme, ThemeContext } from "./contexts/ThemeContext";
import CurrentTheme from "./components/CurrentTheme";
import Stopwatch from "./components/Stopwatch";

export default function App() {
  //console.log("Hey App is rendered!");

  const [theme, setTheme] = useState<Theme>("light");

  return (
    <>
      <h1>Hello Hooks!</h1>
      {/*useContext example*/}
      <ThemeContext.Provider value={theme}>
        <CurrentTheme />
      </ThemeContext.Provider>
      <hr />
      {/*useState and useRef example*/}
      <Stopwatch />
    </>
  );
}
