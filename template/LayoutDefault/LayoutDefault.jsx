import Footer from "../../src/components/Footer/Footer"
import Header from "../../src/components/Header/Header"
import styles from "./LayaoutDefault.module.css"

function LayoutDefault ({children}) {
  return (
  <div className={styles['layout-wrapper']}> 
    <Header />
      {children}
    <Footer />
  </div>
  )
}

export default LayoutDefault