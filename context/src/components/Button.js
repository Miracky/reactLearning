import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      Acvtive Theme: {theme}
      <br />
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </button>
    </div>
  );
}

export default Button;
