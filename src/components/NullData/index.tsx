import React from 'react'
import { Image, View, StyleSheet, Dimensions, Text } from 'react-native'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  img: {
    width: width / 2,
    height: width / 2
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

