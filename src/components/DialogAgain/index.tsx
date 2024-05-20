import React, { useEffect, useMemo, useState } from 'react'
import { Image, Pressable } from 'react-native';
import Toast from 'react-native-toast-message'
import {
  Dialog,
  Input,
  CheckBox,
} from '@rneui/themed';
import ImagePicker from 'react-native-image-crop-picker';

import { updateInfo } from '@request/index';



const DialogAgain = ({ isVisible, setIsVisble, dialogTitle }: {
  isVisible: boolean,
  dialogTitle: {
    name: string,
    text: string | undefined,
  },
  setIsVisble: Function,
}) => {
  const [str, setStr] = useState('')
  const [str1, setStr1] = useState('')
  const [str2, setStr2] = useState('')
  const [selectedIndex, setIndex] = useState(0);
  const [url, setUrl] = useState('')

  useEffect(() => {
    if (dialogTitle.name !== 'gender') return

    setIndex(dialogTitle.text === '男' ? 1 : 0)
  }, [dialogTitle.text])

  const handleOk = async () => {
    if (!str2 && !str1 && !str && !url && !String(selectedIndex) ) return Toast.show({ type: 'error', text1: '请完善信息' })
    if (dialogTitle.name === 'password' && !str2 && !str1 && !str) return Toast.show({ type: 'error', text1: '请完善信息' })
    if (dialogTitle.name === 'password' && str1 !== str2) return Toast.show({ type: 'error', text1: '两次密码不一致' })

    let obj: any = {}
    if (dialogTitle.name === 'avator') {
      obj[dialogTitle.name] = url
    } else if (dialogTitle.name === 'password') {
      obj[dialogTitle.name] = [str, str2]

    } else if (dialogTitle.name === 'gender') {
      obj[dialogTitle.name] = selectedIndex
    }
    else {
      obj[dialogTitle.name] = str
    }
    try {
      const { data } = await updateInfo(obj)
      if (data.code === 200) {
        Toast.show({
          type: 'success',
          text1: data.message
        })
      } else {
        Toast.show({
          type: 'error',
          text1: data.message
        })
      }
      setIsVisble(false)
    } catch (error) {
      console.log(error);
    }
    setStr('')
    setStr1('')
    setStr2('')
    setUrl('')
  }

  const handleImg = () => {
    ImagePicker.openPicker({
      multiple: false,
      cropping: true
    }).then(image => {
      const newImage = { uri: image.path };
      setUrl(newImage.uri);
      // 在这里可以添加保存图片到本地的逻辑
    }).catch(error => {
      console.log('Error choosing image:', error);
    });
  };

  const text = useMemo(() => dialogTitle.name === 'password' ? '请输入原密码' : dialogTitle.text, [dialogTitle.text])
  return (
    <Dialog
      isVisible={isVisible}
      onBackdropPress={() => setIsVisble(false)}
    >
      {dialogTitle.name === 'avatar'
        ? <Pressable onPress={handleImg}>
          <Image source={{ uri: url ? url : dialogTitle.text }} style={{ width: 30, height: 30 }} />
        </Pressable>
        :
        <>
          {
            dialogTitle.name !== 'gender' ?
              <Input
                placeholder={text}
                value={str}
                secureTextEntry={true}
                onChangeText={(value) => setStr(value)}
              />
              :
              <>
                <CheckBox
                  checked={selectedIndex === 0}
                  title="女"
                  onPress={() => setIndex(0)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
                <CheckBox
                  checked={selectedIndex === 1}
                  title="男"
                  onPress={() => setIndex(1)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </>
          }
          {
            dialogTitle.name === 'password' &&
            <>
              <Input
                placeholder='请输入新密码'
                secureTextEntry={true}
                onChangeText={(value) => setStr1(value)}
              />
              <Input
                placeholder='请确认新密码'
                secureTextEntry={true}
                onChangeText={(value) => setStr2(value)}
              />
            </>
          }
        </>
      }
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

