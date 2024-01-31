import type { GlobalStyles } from './styles'
import type { ThemeValue } from './theme';
import type * as baseInfos from '../equitments/baseInfo'

declare global {


  declare var globalStyles: GlobalStyles;
  declare var ThemeValue: ThemeValue;
  declare var baseInfo: typeof baseInfos;
}

export { }
