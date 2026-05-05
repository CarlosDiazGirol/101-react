import styles from './Button.module.css'

function Button ({label, onClick, type, variant}) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick} type={type}>{label}</button>
  )
}

export default Button