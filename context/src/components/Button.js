import {useTheme} from "../context/ThemeContext";

function Button() {
  const { theme, setTheme } = useTheme()
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
