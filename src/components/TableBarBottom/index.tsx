import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@views/Home'
import Personal from '@views/Personal';
import Message from '@views/Message'
import Community from '@views/Community';
import IconFont from '../IconFont'

const Tab = createBottomTabNavigator()

export default function TableBarBottom() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === '首页') {
            return <IconFont name="Home" size={size} color={color} />
          } else if (route.name === '个人中心') {
            return <IconFont name="Settings" size={size} color={color} />
          } else if (route.name === '消息') {
            return <IconFont name="Message" size={size} color={color} />
          } else if (route.name === "社区") {
            return <IconFont name="Community" size={size} color={color} />
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name='首页' component={Home}></Tab.Screen>
      <Tab.Screen name='社区' component={Community}></Tab.Screen>
      <Tab.Screen name='消息' component={Message}></Tab.Screen>
      <Tab.Screen name='个人中心' component={Personal}></Tab.Screen>
    </Tab.Navigator>
  )
}
