import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import Animated, { SlideInDown, SlideInUp } from 'react-native-reanimated'
import SwiperComponent from '@components/SwiperComponent'
import IconFont from '@components/IconFont'
import MessageItem from '@components/MessageItem'
import BottomLoading from '@components/BottomLoading'
import { getArtical } from '@request/index'

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

export interface RecommendData {
  "artical_intro": string,
  "artical_type": string,
  "artical_title": string,
  "artical_content": string,
  "artical_time": string,
  "user_id": string,
  "artical_comment_count": number,
  "artical_like_count": number,
  "artical_views_count": number,
  "artical_imgUrl": string
}

const renderItem = ({ item }: { item: RecommendData, index: number }) => {
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
  const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 5, count: 0 })

  useEffect(() => {
    if (!loading) return

    (async () => {
      const { data } = await getArtical(pageInfo)
      setArtData([...artData, ...data.data])
      setLoading(false)
    })()
  }, [loading])

  const getMoreMsg = () => {
    setPageInfo({ ...pageInfo, page: pageInfo.page + 1 })
    setLoading(true)
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <FlatList
        style={{ backgroundColor: '#fff' }}
        renderItem={renderItem}
        data={artData}
        keyExtractor={(item) => item.artical_title}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={loading ? <BottomLoading title='正在前往元宇宙···' /> : <></>}
        onEndReached={getMoreMsg}
        onEndReachedThreshold={0.9}
      />
    </SafeAreaView>
  )
}

export default Recommend

