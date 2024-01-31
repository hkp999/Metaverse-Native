import React from 'react'
import { SafeAreaView } from 'react-native'
import TimeLine from './TimeLine'

export default function Information() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <TimeLine />
    </SafeAreaView>
  )
}
