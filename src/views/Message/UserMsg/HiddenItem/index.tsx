import React, { forwardRef } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
  },
  deleteView: {
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4d4f',
  },
  deleteText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff'
  }
})
const HiddenItem = forwardRef((props, ref) => {
  return (
    <TouchableOpacity style={styles.mainView}>
      <View style={styles.deleteView}>
        <Text style={styles.deleteText}>删除</Text>
      </View>
    </TouchableOpacity>
  )
})

export default HiddenItem

