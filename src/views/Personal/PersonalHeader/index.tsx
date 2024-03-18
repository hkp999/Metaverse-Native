import React from 'react'
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IconFont from '@components/IconFont'

const styles = StyleSheet.create({
  mainView: {
    width: baseInfo.baseWidth - 20,
    marginLeft: 10,
    marginVertical: 20,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingTop: 10
  },
  itemView: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#de9036',
  },
  iconText: {
    fontSize: 10,
    color: '#de9036',
    borderRadius: 999,
    paddingVertical: 2,
    paddingHorizontal: 4
  },
  dataView: {
    height: 80,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#444',
    borderStyle: 'dashed'
  },
  childView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
const data = [
  {
    name: '动态',
    count: 64
  },
  {
    name: '粉丝',
    count: 25
  },
  {
    name: '关注',
    count: 1000
  },
  {
    name: '积分',
    count: 2
  },
]
const PersonalHeader = () => {

  const navigation = useNavigation<NavigatePage>()
  const handleShowSheel = () => {
    navigation.navigate('Infor')
  }

  return (
    <View style={[styles.mainView, globalStyles.baseShadow]}>
      {/* 基本信息 */}
      <View style={styles.itemView}>
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
            <Text>元龄：3个月</Text>
          </View>
          <View style={globalStyles.baseLayout}>
            <Text style={styles.contentText} numberOfLines={1}>很高心能认识你！希望以后能和你共同工作！！！</Text>
            <TouchableHighlight style={styles.iconView}  onPress={handleShowSheel} activeOpacity={0.2} underlayColor="#f5f5f5">
                <Text style={styles.iconText}><IconFont name="Edit" size={10}></IconFont> 完善资料</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      {/* 账户信息 */}
      <View style={styles.dataView}>
        {
          data.map((item, index) => {
            return (
              <View key={item.name} style={styles.childView}>
                <Text style={[globalStyles.baseTextColor, globalStyles.largeSize, globalStyles.baseBold]}>{item.count}</Text>
                <Text style={globalStyles.baseTextColor}>{item.name}</Text>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

export default PersonalHeader
