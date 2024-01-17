import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, ScrollView, FlatList, SafeAreaView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import MessageItem from '@components/MessageItem'
import { recommendData } from '@views/Home/Recommend/data'
import Animated from 'react-native-reanimated'
import BgTitle from './BgTitle'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  outView: {
    position: 'relative',
    top: -10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
    flex: 1
  },
  innerScrollView: {
    width,
    height: height - 150,
    backgroundColor: '#fff',
  }
})

const renderItem = ({ item, index }: { item: typeof recommendData[number], index: number }) => {
  return <MessageItem data={item} style={index === 0 ? { marginTop: 20 } : {}} />
}

const TopicDetails = ({ route }: any) => {
  const { imgUrl, title, count } = (route as TopicDetailsProp['route']).params
  const [isScroll, setIsScroll ] = useState(false)


  const outScrollOb = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = e.nativeEvent.contentOffset.y
    if(offsetY >= 100 && !isScroll) {
      setIsScroll(true)
    }else if (offsetY < 100 && isScroll) {
      setIsScroll(false)
    }
  }

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView scrollEnabled={!isScroll} onScroll={outScrollOb}>
        <BgTitle count={count} imgUrl={imgUrl} title={title} />
        <View style={styles.outView}>
          <FlatList
            data={recommendData}
            style={styles.innerScrollView}
            renderItem={renderItem}
            nestedScrollEnabled={true}
            scrollEnabled={isScroll}
            keyExtractor={(item) => String(item.id)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TopicDetails
