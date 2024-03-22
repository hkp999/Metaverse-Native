import {Platform, PermissionsAndroid} from 'react-native'

export  const requestCameraPermission = async (successFunc: Function, FailFunc = () => {}) => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // 成功的回调
        successFunc()
      } else {
        // 失败的回调
        FailFunc()
      }
    } catch (err) {
      console.warn(err);
    }
  }
};
