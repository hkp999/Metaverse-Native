import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { getArtical } from '@request/index'
import BottomLoading from '@components/BottomLoading'
import InforItem from './InforItem'
import type { RecommendData } from '@views/Home/Recommend'

const renderItem = ({ item, index }: {
  item: RecommendData,
  index: number,
}) => {
  return <InforItem item={item} index={index} />
}

const News: React.FC<ScreenProps<'News'>> = () => {
  const [loading, setLoading] = useState(false)
  const [artData, setArtData] = useState<any[]>([])
  const [pageInfo, setPageInfo] = useState({ page: 1, pageSize: 5, count: 300 })

  useEffect(() => {
    (async () => {
      const { data } = await getArtical(pageInfo)
      setArtData([...artData, ...data.data])
      setLoading(false)
    })()
  },[])

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
    <SafeAreaView>
      <FlatList
        data={artData}
        style={{ backgroundColor: '#fff' }}
        renderItem={renderItem}
        keyExtractor={(item) => item.artical_title}
        onEndReached={getMoreMsg}
        onEndReachedThreshold={0.9}
        ListFooterComponent={loading ? <BottomLoading title='正在前往元宇宙···' /> : <></>}
      />
    </SafeAreaView>
  )
}

export default News

