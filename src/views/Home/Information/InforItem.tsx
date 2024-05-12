import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated'
import data from '@datas/data1.json'
import { calculateTimeDifference } from '@utils/index'

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

const InforItem = ({ item, index }: {
  item: typeof data[number],
  index: number,
}) => {
  const navigation = useNavigation<NavigatePage>()

  const goDetail = () => {
    navigation.navigate('Detail', {
      data: {
        ...item,
        artical_content: JSON.parse(item.artical_content)
      }
    })
  }

  return (
    <TouchableOpacity key={item.artical_title} onPress={goDetail}>
      <Animated.View style={styles.contentView} entering={index % 2 === 0 ? FadeInLeft : FadeInRight}>
        <Text style={[styles.contentText]} numberOfLines={3}>{item.artical_title}</Text>
        <View style={[styles.footerView, globalStyles.baseLayout]}>
          <Text>
            {item.artical_comment_count}评论
            <Text>   {item.artical_views_count}浏览</Text>
          </Text>
          <Text>{calculateTimeDifference(item.artical_time)}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  )
}

export default InforItem
