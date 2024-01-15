import React from 'react'
import { View, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from 'react-native'
import Animated, { FadeInRight } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import data from './data'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  contentView: {
    width: width / 2 - 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 15,
    overflow: 'hidden'
  },
  img: {
    width: width / 2 - 15,
    height: 100
  },
  content: {
    padding: 10
  },
  description: {
    marginBottom: 5
  }
})

const TopicItem = ({ description, title, imgUrl, count }: typeof data[number]) => {
  const navigation = useNavigation<NavigatePage>()
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('TopicDetails',{
      imgUrl: imgUrl
    })}>
      <Animated.View style={styles.contentView} entering={FadeInRight}>
        <Image
          source={{
            uri: imgUrl
          }}
          style={styles.img}
        />
        <View style={styles.content}>
          <Text style={[globalStyles.baseBold, globalStyles.largeSize, globalStyles.baseFont]} numberOfLines={1}>{title}</Text>
          <Text style={[globalStyles.smallSize, styles.description]} numberOfLines={3}>{description}</Text>
          <Text style={[globalStyles.smallSize]}>{count} 篇文章</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  )
}

export default TopicItem

