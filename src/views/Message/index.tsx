import React from 'react'
import { View, StyleSheet } from 'react-native'
import Domain from './Domain'

const styles = StyleSheet.create({
  messageView: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
const Message = () => {
  return (
    <View style={styles.messageView}>
      <Domain />
    </View>
  )
}

export default Message

