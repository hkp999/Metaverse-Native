import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export type AllStyles = ViewStyle | TextStyle | ImageStyle;

export function makeStyle<T extends AllStyles>(...styles: T[]) {
  let f: T = {} as T;
  styles.forEach(s => {
    f = { ...f, ...s };
  })

  return f;
}
