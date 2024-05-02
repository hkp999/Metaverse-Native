import React, { useState } from 'react'
import { Image, PermissionsAndroid, Platform } from 'react-native';
import Authority from '@config/authority';

import {
  Dialog,
  Input,
} from '@rneui/themed';
import ImagePicker from 'react-native-image-crop-picker';



const DialogAgain = ({ isVisible, setIsVisble, dialogTitle }: {
  isVisible: boolean,
  dialogTitle: {
    name: string,
    text: string | undefined,
  },
  setIsVisble: Function,
}) => {
  const [str, setStr] = useState('')
  const [url, setUrl] = useState('')

  const successFunc = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(({path}) => {
      console.log(path);
      setUrl(path)
    });
  }

  const handleOk = () => {

    Authority.requestCameraPermission(successFunc,() => {})

    setIsVisble(false)
  }
  return (
    <Dialog
      isVisible={isVisible}
      onBackdropPress={() => setIsVisble(false)}
    >
      {dialogTitle.name === 'avator'
        ? <Image source={{ uri: url ? url : dialogTitle.text }} style={{ width: 30, height: 30 }} />
        :
        <Input
          placeholder={dialogTitle.text}
          onChangeText={(value) => setStr(value)}
        />}
      <Dialog.Actions>
        <Dialog.Button
          title="确认"
          onPress={handleOk}
        />
        <Dialog.Button title="取消" onPress={() => setIsVisble(false)} />
      </Dialog.Actions>
    </Dialog>
  )
}

export default DialogAgain

