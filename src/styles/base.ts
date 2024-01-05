import { makeStyle } from './utils';

export const baseFont = makeStyle({
  color: '#000',
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



