import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import MessageItem from '@components/MessageItem'
import BottomLoading from '@components/BottomLoading'
import { recommendData } from '@views/Home/Recommend/data'
import { connect } from 'react-redux'

const Collect = ({nowUser}:{
  nowUser: {
    collect: object[]
  }
}) => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    navigation.setOptions({
      title: '我的收藏' // 设置页面的标题
    });
  },[])

  const getMoreMsg = () => {
    setLoading(true)
  }

  return (
    <FlatList
      style={{ backgroundColor: '#fff' }}
      renderItem={renderItem}
      data={nowUser.collect}
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

const mapStateToProps = (state: any) => {
  return {
    nowUser: state.nowUser,
  }
};

export default connect(mapStateToProps)(Collect)
