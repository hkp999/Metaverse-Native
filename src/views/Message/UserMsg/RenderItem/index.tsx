import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

const styles = StyleSheet.create({
  itemView: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    lineHeight: 32
  }
})
const RenderItem = ({ data }: {
  data: any
}) => {
  return (
    <TouchableOpacity style={styles.itemView} activeOpacity={1}>
      {/* 头像 */}
      <View>
        <Image
          style={styles.img}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/810438?s=80&v=4'
          }}
        />
      </View>
      {/* 信息部分 */}
      <View style={styles.contenView}>
        <View style={globalStyles.baseLayout}>
          <Text style={styles.nickText} numberOfLines={1}>gaearon</Text>
          <Text>2022/09/30</Text>
        </View>
        <View style={globalStyles.baseLayout}>
          <Text style={styles.contentText} numberOfLines={1}>很高心能认识你！希望以后能和你共同工作！！！</Text>
          <Text>36</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RenderItem
