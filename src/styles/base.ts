import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { makeStyle } from './utils';

export const baseFont = makeStyle({
  color: '#000',
})

export const baseTextColor = makeStyle({
  color: '#333'
})

export const baseSize = makeStyle({
  fontSize: 14,
})

export const smallSize = makeStyle({
  fontSize: 12,
})

export const largeSize = makeStyle({
  fontSize: 16,
  lineHeight: 28
})

export const baseBold = makeStyle({
  fontWeight: '700',
})

export const baseLayout = makeStyle({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
})


export const baseShadow = makeStyle({
  backgroundColor: '#fff',
  borderRadius: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5,
})

export const baseErrorMsg = makeStyle({
  color: 'red',
})



