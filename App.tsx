import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import TableBarBottom from '@components/TableBarBottom';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View} from 'react-native'

import './src/styles/global';

function EmptyScreen() {
  return <View />;
}
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:  true }}>
        <Stack.Screen name="Home" component={TableBarBottom} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={EmptyScreen} />
        <Stack.Screen name="Settings" component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
