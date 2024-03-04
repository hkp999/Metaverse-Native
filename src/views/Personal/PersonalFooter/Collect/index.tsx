import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import MessageItem from '@components/MessageItem'
import BottomLoading from '@components/BottomLoading'
import { recommendData } from '@views/Home/Recommend/data'

const Collect = () => {
  const [loading, setLoading] = useState(false)
  const getMoreMsg = () => {
    setLoading(true)
  }
  return (
    <FlatList
      style={{ backgroundColor: '#fff' }}
      renderItem={renderItem}
      data={recommendData}
      ListHeaderComponent={<View style={{height: 20}}></View>}
      ListFooterComponent={loading ? <BottomLoading title='正在前往元宇宙···' /> : <></>}
      onEndReached={getMoreMsg}
      onEndReachedThreshold={0.1}
    />
  )
}

const renderItem = ({ item }: { item: typeof recommendData[number], index: number }) => {
  return <MessageItem data={item} />
}


export default Collect
