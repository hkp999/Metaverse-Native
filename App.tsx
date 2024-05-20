import './src/styles/global';
import './src/equitments'
import React from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LightTheme } from '@theme/light';
import TableBarBottom from '@components/TableBarBottom';
import Detail from '@views/Detail';
import TopicDetails from '@views/TopicDetails';
import Collect from '@views/Personal/PersonalFooter/Collect';
import Login from '@views/Login';
import Infor from '@views/Personal/PersonalHeader/Infor';
import Publish from '@views/Publish'
import Dynamic from '@views/Dynamic'
import DetailMessage from '@views/Message/DetailMessage'
import Toast from 'react-native-toast-message'

function EmptyScreen() {
  return <View />;
}

// 判断是否登录
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer theme={LightTheme}>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {
          <>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={TableBarBottom} options={{ headerShown: false }} />
            <Stack.Screen name="TopicDetails" component={TopicDetails} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="User" component={EmptyScreen} />
            <Stack.Screen name="Collect" component={Collect} />
            <Stack.Screen name="Infor" component={Infor} />
            <Stack.Screen name="Publish" component={Publish} />
            <Stack.Screen name="Dynamic" component={Dynamic} />
            <Stack.Screen name="DetailMsg" component={DetailMessage} />
          </>
        }
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  )
}
