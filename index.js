/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { TheContextProvider } from '@theme/index'
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import store from '@store/index';

AppRegistry.registerComponent(appName, () => {
  const Root = () => (
    <Provider store={store}>
      <TheContextProvider>
        <App />
      </TheContextProvider>
    </Provider>
  )
  return Root
});
