import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import Animated, { SlideInDown, SlideInUp } from 'react-native-reanimated'
import SwiperComponent from '@components/SwiperComponent'
import IconFont from '@components/IconFont'
import MessageItem from '@components/MessageItem'
import BottomLoading from '@components/BottomLoading'
import recommendData from '@datas/data0.json'
import { delayLoading } from '@utils/index'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  Swiper: {
    height: 150,
    marginTop: 20
  },
  HeaderTitle: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderFilter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  FilterTitle: {
    marginLeft: 5
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
})

const renderItem = ({ item }: { item: typeof recommendData[number], index: number }) => {
  return <MessageItem data={item} />
}

const HeaderComponent = () => {

  return (
    <>
      {/* 轮播图 */}
      <Animated.View style={styles.Swiper} entering={SlideInDown}>
        <SwiperComponent />
      </Animated.View>
      {/* 标题 */}
      <Animated.View style={styles.HeaderTitle} entering={SlideInUp}>
        <Text style={[styles.title, globalStyles.baseFont]}>最新动态</Text>
        <View style={styles.HeaderFilter}>
          <IconFont name='Filter' size={16} />
          <Text style={[styles.FilterTitle, globalStyles.baseFont]}>筛选</Text>
        </View>
      </Animated.View>
    </>
  )
}
const Recommend = () => {
  const [loading, setLoading] = useState(false)
  const [artData, setArtData] = useState<any[]>([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 0) {
      setArtData([...artData, ...recommendData.slice((count - 1) * 5, count * 5)])
      setLoading(false)
    }
  }, [count])

  const getMoreMsg = async () => {
    setLoading(true)
    await delayLoading(1000)
    setCount(count + 1)
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <FlatList
        style={{ backgroundColor: '#fff' }}
        renderItem={renderItem}
        data={artData}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={loading ? <BottomLoading title='正在前往元宇宙···' /> : <></>}
        onEndReached={getMoreMsg}
        onEndReachedThreshold={0.9}
      />
    </SafeAreaView>
  )
}

export default connect()(Recommend)

