import IconFont from '@components/IconFont'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// 配置
const options = [
  {
    title: '粉丝',
    bgColor: '#4C83FF',
    iconName: 'Fans'
  },
  {
    title: '关注',
    bgColor: '#E80505',
    iconName: 'Attent'
  },
  {
    title: '点赞',
    bgColor: '#9F44D3',
    iconName: 'Like'
  },
  {
    title: '通知',
    bgColor: '#28C76F',
    iconName: 'Notify'
  },
] as const

const styles = StyleSheet.create({
  domainView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
  },
  iconView: {
    borderRadius: 4,
    padding: 8
  },
  iconText: {
    textAlign: 'center',
    marginVertical: 4
  }
})
const Domain = () => {

  // TODO: 此处用于跳转详情页
  const goDetail = () => {}

  return (
    <View style={styles.domainView}>
      {
        options.map(item => {
          return (
            <TouchableOpacity onPress={goDetail} key={item.title}>
              <View style={[styles.iconView, { backgroundColor: item.bgColor }]}>
                <IconFont name={item.iconName} size={36} color="#fff" />
              </View>
              <Text style={styles.iconText}>{item.title}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default Domain
