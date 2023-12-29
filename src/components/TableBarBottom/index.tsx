import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@views/Home'
import Settings from '@views/Settings';
import IconFont from '../IconFont'

const Tab = createBottomTabNavigator()

export default function TableBarBottom() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if(route.name === '首页') {
            return <IconFont name="Home" size={size} color={color} />
          }else if(route.name === '个人中心') {
            return <IconFont name="Settings" size={size} color={color} />
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen name='首页' component={Home}></Tab.Screen>
      <Tab.Screen name='个人中心' component={Settings}></Tab.Screen>
    </Tab.Navigator>
  )
}
