/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {TheContextProvider} from '@theme/index'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => {
  const Root = () => (
    <TheContextProvider>
      <App />
    </TheContextProvider>
  )
  return Root
});
