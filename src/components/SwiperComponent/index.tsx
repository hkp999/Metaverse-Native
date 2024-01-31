
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View,  Image } from 'react-native'
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 5,
    overflow: 'hidden'
  },
  img: {
    width: '100%',
    height: '100%'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

const data = [
  {
    label: 'img1',
    imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.2rQ25qnSMQHXGcHz3Rp2pAHaEo?w=290&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    label: 'img2',
    imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.YxVQHDbOivIkWIVgY4HllgHaEo?w=313&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    label: 'img3',
    imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.DyHRka_zDFYcbQwL3ez_FAHaEo?w=313&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
]

function Dot() {
  return (
    <View style={{
      backgroundColor: 'rgba(0,0,0,.8)',
      width: 6,
      height: 6,
      borderRadius: 9999,
      marginLeft: 3,
      marginRight: 3,
    }} />
  )
}

function ActiveDot() {
  return (
    <View style={{
      backgroundColor: 'rgba(255, 255, 255, .5)',
      width: 15,
      height: 6,
      borderRadius: 9999,
      marginLeft: 3,
      marginRight: 3,
    }} />
  )
}

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        removeClippedSubviews={false}
        horizontal={true}
        showsButtons={false}
        autoplay={true}
        loop={true}
        paginationStyle={{ bottom: 10 }}
        showsPagination={true}
        dot={<Dot />}
        activeDot={<ActiveDot />}
      >
        {
          data.map(item => {
            return (
              <View key={item.label} style={styles.slide}>
                <Image style={styles.img} source={{
                  uri: item.imgUrl
                }} />
              </View>
            )
          })
        }
      </Swiper>
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)
