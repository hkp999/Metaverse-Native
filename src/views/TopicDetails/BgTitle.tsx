import React from 'react'
import { ImageBackground, View, Text, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  img: {
    position: 'relative',
    top: 0,
    width,
    height: 210,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  imgView: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  titleView: {
    width,
    padding: 20,
    paddingBottom: 30,
    flexDirection: 'row',
    position: 'relative',
    top: 0,
    justifyContent: 'space-between',
  },
})

const BgTitle = ({count, imgUrl, title}:{
  count?: number,
  imgUrl?: string,
  title?: string
}) => {
  return (
    <ImageBackground
      source={{
        uri: imgUrl
      }}
      style={styles.img}
    >
      <View style={styles.imgView}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.titleView}>
        <Text style={{ color: '#fff' }}>共有{count}篇文章</Text>
        <Text style={{ color: '#fff' }}>更新时间：2024-01-15 23:14</Text>
      </View>
    </ImageBackground>
  )
}

export default BgTitle

