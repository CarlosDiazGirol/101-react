import styles from './Footer.module.css'

function Footer () {
  return (
    <footer className={styles.footer_page}>
      <p className={styles.text}>Hecho con <span>♥</span> por <strong>DATA</strong></p>
    </footer>
  )
}

export default Footer