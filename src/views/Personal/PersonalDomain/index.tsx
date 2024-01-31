import IconFont from '@components/IconFont'
import { baseWidth } from '@styles/base'
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const data = [
  {
    name: '我的动态',
    imgUrl: 'PDynamic',
    desc: '详细、多样'
  },
  {
    name: '我的主页',
    imgUrl: 'PHome',
    desc: '精美、定制'
  },
  {
    name: '快速发布',
    imgUrl: 'PPublish',
    desc: '简洁、迅速'
  },
  {
    name: '扩展圈子',
    imgUrl: 'PCircle',
    desc: '充实、学习'
  },
] as const

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: baseWidth - 20,
    marginLeft: 10
  },
  itemView: {
    height: 100,
    width: baseWidth / 4 - 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const PersonalDomain = () => {
  return (
    <View style={styles.mainView}>
      {
        data.map((item) => {
          return (
            <TouchableOpacity key={item.imgUrl} style={[globalStyles.baseShadow, styles.itemView]} activeOpacity={0.7}>
              <IconFont name={item.imgUrl} size={30} />
              <Text style={[globalStyles.smallSize, globalStyles.baseFont,{marginVertical: 2}]}>{item.name}</Text>
              <Text style={[globalStyles.smallSize]}>{item.desc}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default PersonalDomain
