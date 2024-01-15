import React from 'react'
import { View,Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Animated from 'react-native-reanimated'

export default function Settings() {
  const navigation = useNavigation<NavigatePage>()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Hello Settings
      </Text>
      <Animated.Image
        source={{
          uri: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.DWaBG7JE-BzSVHcscaK7pQHaEK?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        }}
        style={{ width: 100, height: 100 }}
        sharedTransitionTag="tag"
      />
      <Button title='go Detail' onPress={() => navigation.navigate('TopicDetails',{
        imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.DWaBG7JE-BzSVHcscaK7pQHaEK?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
      })}></Button>
    </View>
  )
}
