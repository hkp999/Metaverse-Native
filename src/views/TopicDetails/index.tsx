import React from 'react'
import { View, StyleSheet, ImageBackground, Dimensions, Text, ScrollView } from 'react-native'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  img: {
    width,
    height: 200,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  imgView :{
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 30
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listView:{
    width,
    height: 550,
  },
  mainView:{
    position: "absolute",
    top: -20,
    width,
    height: 550,
    backgroundColor: '#000',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    zIndex: 10
  }
})
const TopicDetails = ({ route }: any) => {
  const { imgUrl, title, count } = (route as TopicDetailsProp['route']).params
  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: imgUrl
        }}
        style={styles.img}
      >
        <View style={styles.imgView}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.titleView}>
            <Text style={{ color: '#fff' }}>共有{count}篇文章</Text>
            <Text style={{ color: '#fff' }}>更新时间：2024-01-15 23:14</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.listView}>
        <View style={styles.mainView}></View>
      </View>
    </ScrollView>
  )
}

export default TopicDetails
