import React, { useState,lazy } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Information from './Information'
import Recommend from './Recommend'
import Concern from './Concern'
import News from './News'
import SpecialTopic from './SpecialTopic'
const Tag = lazy(() => import('./Tag'))

const styles = StyleSheet.create({
  navStyle: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  activeNav: {
    color: '#000',
    transform: [{scale: 1.3}]
  },
  navNorStyle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10
  },
  navItem:{
    flex: 1,
  }
})

function NavList() {
  const [chooseKey, setChooseKey] = useState<number>(2)
  const navList = [
    {
      key: 1,
      title: '关注',
      component: Concern,
    },
    {
      key: 2,
      title: '推荐',
      component: Recommend,
    },
    {
      key: 3,
      title: '资讯',
      component: Information,
    },
    {
      key: 4,
      title: '快讯',
      component: News,
    },
    {
      key: 5,
      title: '专题',
      component: SpecialTopic,
    },
    {
      key: 6,
      title: '标签',
      component: Tag,
    }
  ]

  return (
    <>
    {/* nav选项卡 */}
      <View style={styles.navStyle}>
        {
          navList.map(item => {
            return (
              <TouchableOpacity key={item.key} onPress={() => setChooseKey(item.key)}>
              <View style={[styles.navNorStyle]}>
                <Text style={chooseKey === item.key ? styles.activeNav : undefined}>{item.title}</Text>
              </View>
              </TouchableOpacity>
            )
          })


        }
      </View>
      {/* nav对应的具体内容 */}
        {
          navList.map(item => {
            const Component = item.component
            return (
              <React.Fragment key={item.key}>
                {item.key === chooseKey && <View style={styles.navItem}>
                  <Component />
                </View>}
              </React.Fragment>
            )
          })
        }
    </>
  )
}

export default NavList
