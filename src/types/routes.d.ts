import { NativeStackNavigationProp } from '@react-navigation/native-stack'

declare global {

  declare type RootStackParamList = {
    Home: undefined,
    Detail: undefined,
    Settings: undefined
  }

  interface ScreenProps<T extends keyof RootStackParamList> {
    navigation:  NativeStackNavigationProp<RootStackParamList, T>
  }
}

export {}
