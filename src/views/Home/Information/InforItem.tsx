import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated'
import data from './data'

const styles = StyleSheet.create({
  contentView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  contentText: {
    fontSize: 20,
    color: '#000',
    height: 90,
    lineHeight: 28
  },
  footerView: {
    marginVertical: 10,
  }
})

const InforItem = ({item, index}: {
  item: typeof data[number],
  index: number,
}) => {
  const navigation = useNavigation<NavigatePage>()
  return (
    <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Detail')}>
      <Animated.View style={styles.contentView} entering={index % 2 === 0 ? FadeInLeft : FadeInRight}>
        <Text style={[styles.contentText]} numberOfLines={3}>{item.title}</Text>
        <View style={[styles.footerView, globalStyles.baseLayout]}>
          <Text>
            {item.comments}评论
            <Text>   {item.pageView}浏览</Text>
          </Text>
          <Text>{item.releaseTime}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  )
}

export default InforItem
