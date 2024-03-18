import React, { useState } from 'react'
import {
  Dialog,
  Input
} from '@rneui/themed';

const DialogAgain = ({ isVisible, setIsVisble, dialogTitle}: {
  isVisible: boolean,
  dialogTitle: string | undefined,
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
      <Input
        placeholder={dialogTitle}
        onChangeText={(value) => setStr(value)}
      />
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

