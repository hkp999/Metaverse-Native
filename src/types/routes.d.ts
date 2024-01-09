import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { NavigationProp } from '@react-navigation/native'

declare global {

  declare type RootStackParamList = {
    Home: undefined,
    Detail: undefined,
    Settings: undefined,
    News: undefined,
    Recommend: undefined,
    Information: undefined,
    Concern: undefined,
    SpecialTopic: undefined,
    Tag: undefined
  }

  type NavigatePage = NavigationProp<RootStackParamList>
  interface ScreenProps<T extends keyof RootStackParamList> {
    navigation:  NativeStackNavigationProp<RootStackParamList, T>,
  }
}

export {}
