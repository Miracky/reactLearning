import { useTheme } from '../context/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css'



function Button() {
    const {theme, setTheme} = useTheme()
  return (
    <div >
      
      <button className={`${styles.button} ${styles[theme]}`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
      </button>

    </div>
  )
}

export default Button;
