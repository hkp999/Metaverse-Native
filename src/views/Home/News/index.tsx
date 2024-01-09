import React from 'react'
import { View } from 'react-native'
import TimeLine from './TimeLine'

export default function Information() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      paddingVertical: 20
    }}>
        <TimeLine />
    </View>
  )
}
