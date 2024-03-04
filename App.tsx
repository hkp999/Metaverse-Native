import './src/styles/global';
import './src/equitments'
import React from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '@views/Detail';
import TopicDetails from '@views/TopicDetails';
import Collect from '@views/Personal/PersonalFooter/Collect';
import TableBarBottom from '@components/TableBarBottom';



function EmptyScreen() {
  return <View />;
}

let isLogin = true
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={TableBarBottom} options={{ headerShown: false }} />
        <Stack.Screen name="TopicDetails" component={TopicDetails} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="User" component={EmptyScreen} />
        <Stack.Screen name="Collect" component={Collect} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
