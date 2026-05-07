import { useState } from 'react'
import ThemeContext from './theme-context'

export function ThemeProvider({children}) {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }
  const values = {isDark, toggleTheme }

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}