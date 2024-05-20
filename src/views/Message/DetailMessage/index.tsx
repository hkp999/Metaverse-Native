import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import DetailMsg from './DetailMsg'
import BottomMsg from './BottomMsg'

const DetailMessage = () => {

  const route = useRoute()
  const navigation = useNavigation()
  const { item } = route.params

  useEffect(() => {

    navigation.setOptions({
      title: item.username
    })
  }, [])

  return (
    <>
      <ScrollView style={{ backgroundColor: '#f2f2f2' }}>
        <DetailMsg item={item} />
      </ScrollView>
      <BottomMsg sendToUsername={item.username} />
    </>
  )
}

export default DetailMessage
