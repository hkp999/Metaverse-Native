import React, { useState, useRef } from 'react'
import { View, StyleSheet, ImageBackground, Dimensions, Text, ScrollView, SafeAreaView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import MessageItem from '@components/MessageItem'
import { recommendData } from '@views/Home/Recommend/data'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width,
    height: 200,
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
    justifyContent: 'space-between',
  },
  innerScrollView: {
    width,
    height: height - 120,
    paddingVertical: 40,
    transform: [{ translateY: -20 }],
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    zIndex: 10
  }
})
const TopicDetails = ({ route }: any) => {
  const { imgUrl, title, count } = (route as TopicDetailsProp['route']).params
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
        <ScrollView style={styles.innerScrollView} nestedScrollEnabled={true} scrollEnabled={false}>
          {
            recommendData.map(item => <MessageItem key={item.linkTitle} data={item} />)
          }
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TopicDetails
