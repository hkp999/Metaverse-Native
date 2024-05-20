import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import MessageItem from '@components/MessageItem'
import BottomLoading from '@components/BottomLoading'
import recommendData from '@datas/data0.json'
import { connect } from 'react-redux'
import { delayLoading } from '@utils/index'
import NullData from '@components/NullData'

const Collect = ({ nowUser }: {
  nowUser: {
    collect: object[]
  }
}) => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const [artData, setArtData] = useState<any[]>([])
  const [count, setCount] = useState(1)

  useEffect(() => {
    navigation.setOptions({
      title: '我的收藏' // 设置页面的标题
    });
  }, [])

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
    <>
      {nowUser.collect.length > 0 ? (
        <FlatList
          style={{ flex: 1, backgroundColor: '#fff' }}
          renderItem={renderItem}
          data={nowUser.collect}
          ListHeaderComponent={<View style={{ height: 20 }}></View>}
          ListFooterComponent={loading ? <BottomLoading title='正在前往元宇宙···' /> : null}
          onEndReached={() => {
            if (!loading) {
              getMoreMsg();
            }
          }}
          onEndReachedThreshold={0.01}
        />
      ) :
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <NullData />
        </View>
      }</>
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
