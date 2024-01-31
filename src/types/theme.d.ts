import type lightType from '@theme/light'

export interface ThemeValue {
  theme: typeof lightType,
  themeName: string,
  setTheme: Function
}
