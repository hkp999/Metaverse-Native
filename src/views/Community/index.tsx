import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Concern from '@views/Home/Concern'
import AllDynamic from '@views/Community/AllDynamic/index'
import BottomLoading from '@components/BottomLoading'

const TopTab = createMaterialTopTabNavigator()
const Community = () => {
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
      })}>
      <TopTab.Screen name='关注' component={Concern}></TopTab.Screen>
      <TopTab.Screen name='动态' component={AllDynamic}></TopTab.Screen>
    </TopTab.Navigator>
  )
}

export default Community

