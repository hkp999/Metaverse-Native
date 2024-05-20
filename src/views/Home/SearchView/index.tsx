import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import MessageItem from '@components/MessageItem'
import BottomLoading from '@components/BottomLoading'
import { getArtical } from '@request/index'
import type { RecommendData } from '../Recommend'
import { debounce } from '@utils/index'

const renderItem = ({ item }: { item: RecommendData, index: number }) => {
  return <MessageItem data={item} />
}

const SearchView = ({ keyword }: {
  keyword: string
}) => {
  const [loading, setLoading] = useState(false)
  const [artData, setArtData] = useState<any[]>([])
  const [pageInfo, setPageInfo] = useState({ page: 1, pageSize: 5, count: 0, keyword: '' })


  useEffect(() => {
    if (!keyword) return
    getData(keyword)
  }, [keyword])

  useEffect(() => {
    if (!loading) return

    (async () => {
      const { data } = await getArtical(pageInfo)
      setArtData([...artData, ...data.data])
      setLoading(false)
    })()
  }, [loading])

  const getData = useCallback(debounce(async (keyword: string) => {

    setLoading(true);
    try {
      const { data } = await getArtical({ ...pageInfo, keyword });
      setPageInfo({...pageInfo,keyword})
      setArtData([...artData, ...data.data])
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, 500), [pageInfo])

  const getMoreMsg = () => {
    setPageInfo({ ...pageInfo, page: pageInfo.page + 1 })
    setLoading(true)
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <FlatList
        style={{ backgroundColor: '#fff', paddingVertical: 20 }}
        renderItem={renderItem}
        data={artData}
        keyExtractor={(item) => item.artical_title}
        ListFooterComponent={loading ? <BottomLoading title='正在前往元宇宙···' /> : <></>}
        onEndReached={getMoreMsg}
        onEndReachedThreshold={0.9}
      />
    </SafeAreaView>
  )
}

export default SearchView

