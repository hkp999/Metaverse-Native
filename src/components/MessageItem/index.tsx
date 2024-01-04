import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import ActiveButton from '@components/ActiveButton'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    width: width - 50,
    alignItems: 'center',
    marginHorizontal: 25,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
})

const MessageItem = () => {
  return (
    <View style={styles.container}>
      <View>
        <View></View>
        <ActiveButton />
      </View>
    </View>
  )
}

export default MessageItem

