import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SwiperComponent from '@components/SwiperComponent'

const styles = StyleSheet.create({
  Swiper: {
    height: 150
  }
})
const Recommend = () => {
  return (
    <>
      <View style={styles.Swiper}>
        <SwiperComponent />
      </View>
    </>
  )
}

export default Recommend

