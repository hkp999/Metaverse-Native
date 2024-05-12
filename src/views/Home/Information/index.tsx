import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { delayLoading } from '@utils/index'
import BottomLoading from '@components/BottomLoading'
import data from '@datas/data1.json'
import InforItem from './InforItem'

const renderItem = ({ item, index }: {
  item: typeof data[number],
  index: number,
}) => {
  return <InforItem item={item} index={index} />
}

const News: React.FC<ScreenProps<'News'>> = () => {
  const [loading, setLoading] = useState(false)
  const [artData, setArtData] = useState<any[]>([])
  const [count, setCount] = useState(1)


  useEffect(() => {
    if (count > 0) {
      setArtData([...artData, ...data.slice((count - 1) * 5, count * 5)])
      setLoading(false)
    }
  }, [count])

  const getMore = async () => {
    setLoading(true)
    await delayLoading(1000)
    setCount(count + 1)
  }

  return (
    <SafeAreaView>
      <FlatList
        data={artData}
        style={{ backgroundColor: '#fff' }}
        renderItem={renderItem}
        keyExtractor={(item) => item.artical_title}
        onEndReached={getMore}
        ListFooterComponent={loading ? <BottomLoading title='正在前往元宇宙···' /> : <></>}
      />
    </SafeAreaView>
  )
}

export default News

