import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SwiperComponent from '@components/SwiperComponent'
import IconFont from '@components/IconFont'
import MessageItem from '@components/MessageItem'

const styles = StyleSheet.create({
  Swiper: {
    height: 150
  },
  HeaderTitle: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20
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

const Recommend = () => {
  return (
    <>
    {/* 轮播图 */}
      <View style={styles.Swiper}>
        <SwiperComponent />
      </View>
      {/* 标题 */}
      <View style={styles.HeaderTitle}>
        <Text style={[styles.title, globalStyles.baseFont]}>最新动态</Text>
        <View style={styles.HeaderFilter}>
          <IconFont name='Filter' size={16} />
          <Text style={[styles.FilterTitle, globalStyles.baseFont]}>筛选</Text>
        </View>
      </View>
      {/* 主要内容 */}
      <MessageItem />
    </>
  )
}

export default Recommend

