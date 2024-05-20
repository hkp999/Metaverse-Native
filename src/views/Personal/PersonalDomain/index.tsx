import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import IconFont from '@components/IconFont'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    name: '我的动态',
    imgUrl: 'PDynamic',
    desc: '详细、多样'
  },
  {
    name: '快速发布',
    imgUrl: 'PPublish',
    desc: '简洁、迅速'
  },
] as const

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: baseInfo.baseWidth - 20,
    marginLeft: 10
  },
  itemView: {
    height: 90,
    width: baseInfo.baseWidth / 2 - 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const PersonalDomain = () => {
  const navigation = useNavigation<NavigatePage>()

  const handleItem = (name: string) => {
    if (name === '快速发布') {
      navigation.navigate('Publish')
    } else if (name === '我的动态') {
      navigation.navigate('Dynamic')
    }
  }

  return (
    <View style={styles.mainView}>
      {
        data.map((item) => {
          return (
            <TouchableOpacity key={item.imgUrl} style={[globalStyles.baseShadow, styles.itemView]} activeOpacity={0.7} onPress={() => handleItem(item.name)}>
              <IconFont name={item.imgUrl} size={40} />
              <View style={{
                marginLeft: 5
              }}>
                <Text style={[globalStyles.smallSize, globalStyles.baseFont, { marginVertical: 2 }]}>{item.name}</Text>
                <Text style={[globalStyles.smallSize]}>{item.desc}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default PersonalDomain
