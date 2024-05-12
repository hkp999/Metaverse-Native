import React from 'react'
import { Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Recommend from '@views/Home/Recommend'
import Information from '@views/Home/Information'
import News from '@views/Home/News'
import SpecialTopic from '@views/Home/SpecialTopic'
import BottomLoading from '@components/BottomLoading'


const TopTab = createMaterialTopTabNavigator()
export default function TableBarTop() {
  return (
    <TopTab.Navigator
      initialRouteName='推荐'
      screenOptions={({ route }) => ({
        tabBarAndroidRipple: {
          borderless: false,
          color: 'rgba(0,0,0,.15)',
        },
        lazy: true,
        lazyPlaceholder: () => <View style={{flex: 1,justifyContent:'center',alignItems: 'center'}}><BottomLoading title='正在前往元宇宙···' /></View>
      })}
    >
      <TopTab.Screen name='推荐' component={Recommend}></TopTab.Screen>
      <TopTab.Screen name='资讯' component={Information}></TopTab.Screen>
      <TopTab.Screen name='快讯' component={News}></TopTab.Screen>
      <TopTab.Screen name='专题' component={SpecialTopic}></TopTab.Screen>
    </TopTab.Navigator>
  )
}
