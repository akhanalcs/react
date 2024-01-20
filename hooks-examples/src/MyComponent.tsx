import { useGetTheme } from "./contexts/ThemeContext";

export default function MyComponent() {
  const theme = useGetTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
}
