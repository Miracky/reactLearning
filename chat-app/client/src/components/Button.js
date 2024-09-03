import { useTheme } from '../context/ThemeContext'

function Button() {
    const {theme, setTheme} = useTheme()
  return (
    <div>
      
    <button onClick={()=> setTheme(theme === "dark" ? "light" : "dark")} >
    {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>

    </div>
  )
}

export default Button;
