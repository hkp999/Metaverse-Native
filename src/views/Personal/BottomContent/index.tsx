import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, ListItem, Text } from '@rneui/base';

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  }
})
const BottomContent = ({ setVisible }: {
  setVisible: Function
}) => {
  return (
    <>
      {
        Array(10).fill(1).map(() => {
          return (
            <View style={styles.itemView}>
              <Text>名字</Text>
              <Text>遗忘那么长</Text>
            </View>
          )
        })
      }
      <Button radius={0}>确定</Button>
      <Button radius={0} color="error" onPress={() => setVisible(false)}>取消</Button>
    </>
  )
}

export default BottomContent
