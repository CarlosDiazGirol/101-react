import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import useTheme from '../../context/useTheme'

function Header () {
  const { isDark, toggleTheme } = useTheme()
  const dark = "🌙"
  const light = "☀️"

  return (
    <header className={styles.header_page}>
        <div className='logo'>
          <h2>LOGO</h2>
        </div>
        <div className={styles.containerHeader}>  
          <nav>
            <ul>
              <li><Link to="/">Pokemon</Link></li>
              <li><Link to="/rick">Rick</Link></li>
            </ul>
          </nav>
          <div className={styles.contentToggle}>
            <button className={`${styles.buttonisDark} ${isDark ? styles.dark : styles.light}`} type="button" onClick={toggleTheme}>{isDark ? dark : light}</button>
          </div>
        </div>
      </header>
  )

}

export default Header