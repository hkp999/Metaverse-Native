import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export type AllStyles = ViewStyle | TextStyle | ImageStyle;

type Combine<T> = (T extends any ? (k: T) => void : number) extends (k: infer I) => void ? I : never;

export function makeStyle<K extends AllStyles,T extends (K | undefined)[]>(...styles: T): Combine<Exclude<T[number],undefined>> {
  let f = {} as Combine<Exclude<T[number],undefined>>;
  styles.forEach(s => {
    if (!f) return

    if (s) {
      f = { ...f, ...s };
    }
  })

  return f;
}
