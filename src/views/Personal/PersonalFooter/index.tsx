import React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import ItemDomain from './ItemDomain'

const data = [
  {
    text: '我的收藏',
    imgName: 'Collect'
  },
  {
    text: '联系客服',
    imgName: 'Service'
  },
  {
    text: '关于我们',
    imgName: 'About'
  },
  {
    text: '我的设置',
    imgName: 'Set'
  },
  {
    text: '退出账号',
    imgName: 'Quit'
  },
] as const

const styles = StyleSheet.create({
  mainView: {
    width: baseInfo.baseWidth - 20,
    marginLeft: 10,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 4
  }
})
const PersonalFooter = () => {
  // TODO: 有关各功能作用区域
  const handleButton = () => {

  };

  return (
    <View style={[globalStyles.baseShadow, styles.mainView]}>
      {
        data.map(item => {
          return (
            <TouchableHighlight key={item.text}
              activeOpacity={0.2}
              underlayColor="#DDDDDD"
              onPress={handleButton}
            >
              <ItemDomain {...item} />
            </TouchableHighlight>
          )
        })
      }
    </View>
  )
}

export default PersonalFooter

