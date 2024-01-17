import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import data from './data'
import InforItem from './InforItem'

const renderItem = ({ item, index }: {
  item: typeof data[number],
  index: number,
}) => {
  return <InforItem item={item} index={index} />
}

const News: React.FC<ScreenProps<'News'>> = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        style={{ backgroundColor: '#fff' }}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  )
}

export default News

