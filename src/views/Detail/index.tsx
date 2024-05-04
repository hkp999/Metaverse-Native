import React, { useEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import DetailComponent from '@components/DetailComponent'
import type dataType from '@datas/data0.json'

const Detail = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { data }:{data: typeof dataType[number]} = route.params

  useEffect(() => {
    navigation.setOptions({
      title: data.artical_title // 设置页面的标题
    });
  }, [])

  return (
    <DetailComponent {...data} />
  )
}

export default Detail

