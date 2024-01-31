import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  img: {
    width: baseInfo.baseWidth / 2,
    height: baseInfo.baseWidth / 2
  }
})
const NullData = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('@assets/Other/nullData.png')}
        style={styles.img}
      />
      <Text>空空如也···</Text>
    </View>
  )
}

export default NullData

