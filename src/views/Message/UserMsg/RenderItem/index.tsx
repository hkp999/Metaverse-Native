import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

const styles = StyleSheet.create({
  itemView: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: 999
  },
  contenView: {
    flex: 1,
    height: 64,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  nickText: {
    lineHeight: 32,
    fontSize: 18,
    flex: 1,
    color: '#333332'
  },
  contentText: {
    lineHeight: 32,
    flex: 1
  },
  iconView: {
    paddingLeft: 10,
    borderRadius: 999,
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 10,
    backgroundColor: '#ff4d4f',
    color: '#fff',
    borderRadius: 999,
    paddingHorizontal: 4
  }
})
const RenderItem = ({data}: {
  data: any
}) => {
  return (
    <TouchableOpacity style={styles.itemView} activeOpacity={1}>
      {/* 头像 */}
      <View>
        <Image
          style={styles.img}
          source={{
            uri: data.item.url
          }}
        />
      </View>
      {/* 信息部分 */}
      <View style={styles.contenView}>
        <View style={globalStyles.baseLayout}>
          <Text style={styles.nickText} numberOfLines={1}>{data.item.username}</Text>
          <Text>{data.item.datatime}</Text>
        </View>
        <View style={globalStyles.baseLayout}>
          <Text style={styles.contentText} numberOfLines={1}>{data.item.text}</Text>
          <View style={styles.iconView}>
            <Text style={styles.iconText}>{data.item.msg_number}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RenderItem
