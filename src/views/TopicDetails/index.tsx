import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  img: {
    width,
    height: 200
  }
})
const TopicDetails = ({ route }: any ) => {
  const { imgUrl } = (route as TopicDetailsProp['route']).params
  return (
    <View>
      <Image source={{
        uri: imgUrl
      }}
        style={styles.img}
      />
      <Animated.Text entering={FadeIn} exiting={FadeOut}>我是专题的详情页</Animated.Text>
    </View>
  )
}

export default TopicDetails
