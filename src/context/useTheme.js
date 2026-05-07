import { useContext } from 'react'
import ThemeContext from './theme-context'

function useTheme () {
  const context = useContext(ThemeContext)

  return context
}

export default useTheme