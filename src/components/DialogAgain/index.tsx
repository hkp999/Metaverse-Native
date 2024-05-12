import React, { useState } from 'react'
import { Image } from 'react-native';
import Authority from '@config/authority';

import {
  Dialog,
  Input,
} from '@rneui/themed';
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from 'react-redux';
import action from '@store/action';



const DialogAgain = ({ isVisible, setIsVisble, dialogTitle, updateUserInfo }: {
  isVisible: boolean,
  dialogTitle: {
    name: string,
    text: string | undefined,
  },
  setIsVisble: Function,
  updateUserInfo: Function
}) => {
  const [str, setStr] = useState('')
  const [url, setUrl] = useState('')

  const handleOk = () => {
    let obj:any = {}
    obj[dialogTitle.name] = str

    updateUserInfo(obj)

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

const mapDispatchToProps = {
  updateUserInfo: action.nowUser.updateUserInfo
};

export default connect(null, mapDispatchToProps)(DialogAgain)

