// Shows usage of useContext hook
import { useGetTheme } from "../contexts/ThemeContext";

export default function CurrentTheme() {
  const theme = useGetTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
}
