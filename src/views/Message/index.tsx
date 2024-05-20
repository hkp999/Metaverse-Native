import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Domain from './Domain'
import UserMsg from './UserMsg'

const styles = StyleSheet.create({
  messageView: {
    backgroundColor: '#fff'
  }
})
const Message = () => {
  return (
    <View style={styles.messageView}>
      <Domain />
      <UserMsg />
    </View>
  )
}

export default Message

