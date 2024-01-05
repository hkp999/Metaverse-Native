import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import SwiperComponent from '@components/SwiperComponent'
import IconFont from '@components/IconFont'
import { recommendData } from './data'
import MessageItem from '@components/MessageItem'

const styles = StyleSheet.create({
  Swiper: {
    height: 150
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

const Recommend = () => {
  return (
    <SafeAreaView>
      <ScrollView>
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
        {
          recommendData.map(item => {
            return (
              <MessageItem key={item.linkTitle} data={item} />
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Recommend
