import { createContext, useState } from 'react'
import lightTheme from './light'
import darkTheme from './dark'
import { ThemeValue } from 'src/types/theme'

const themes = {
  light: lightTheme,
  dark: darkTheme
}


export const ThemeContext = createContext<ThemeValue>({
  theme: lightTheme,
  themeName: '',
  setTheme: () => void 0
})

export const TheContextProvider = ({ children }:{
  children: JSX.Element
}) => {
  const [theme, setTheme] = useState('light' as const)
  return (
    <ThemeContext.Provider value={{
      theme: themes[theme],
      themeName: theme,
      setTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

