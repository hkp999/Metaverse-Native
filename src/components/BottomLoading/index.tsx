import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated'

const styles = StyleSheet.create({
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 40,
    backgroundColor: '#f4ded2'
  },
  text: {
    fontSize: 16,
    transform: [{ scale: 1 }],
  }
})



const BottomLoading = ({ title }: {
  title: string
}) => {
  const scale = useSharedValue(0)
  const array = Array(title.length).fill('').map(() => useSharedValue(0))

  useEffect(() => {
    scale.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true)
    array.forEach((item, index) => {
      item.value = withDelay(index * 100, withRepeat(withTiming(-20, { duration: 1000 }), -1, true))
    })
  }, [])
  const animateStyles = array.map(item => {
    return useAnimatedStyle(() => ({
      transform: [{
        translateY: item.value
      }, {
        scale: scale.value
      }]
    }))
  })

  return (
    <View style={styles.textView}>
      {
        title.split('').map((item, index) => {
          return <Animated.Text key={index} style={[styles.text, animateStyles[index]]}>{item}</Animated.Text>
        })
      }
    </View>
  )
}

export default BottomLoading
