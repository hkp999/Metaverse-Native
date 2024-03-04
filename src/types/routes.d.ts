import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigationProp } from '@react-navigation/native'

declare global {

  declare type RootStackParamList = {
    Home: undefined,
    Detail: undefined,
    Personal: undefined,
    Message: undefined,
    Community: undefined,
    News: undefined,
    Recommend: undefined,
    Information: undefined,
    Concern: undefined,
    SpecialTopic: undefined,
    Tag: undefined,
    TopicDetails: {
      imgUrl?: string,
      title?: string,
      count?: number
    },
    Collect: undefined
  }

  type TopicDetailsProp = NativeStackScreenProps<RootStackParamList, 'TopicDetails'>

  type NavigatePage = NavigationProp<RootStackParamList>
  interface ScreenProps<T extends keyof RootStackParamList> {
    navigation:  NativeStackNavigationProp<RootStackParamList, T>,
  }

}

export {}
