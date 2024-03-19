import React, { useState } from 'react'
import { Image } from 'react-native';
import {
  Dialog,
  Input,
} from '@rneui/themed';

const DialogAgain = ({ isVisible, setIsVisble, dialogTitle}: {
  isVisible: boolean,
  dialogTitle: {
    name: string,
    text: string | undefined,
  },
  setIsVisble: Function,
}) => {
  const [str, setStr] = useState('')

  const handleOk = () => {
    setIsVisble(false)
  }
  return (
    <Dialog
      isVisible={isVisible}
      onBackdropPress={() => setIsVisble(false)}
    >
      {dialogTitle.name === 'avator'
      ? <Image source={{uri: dialogTitle.text}} style={{width: 30,height: 30}} />
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

