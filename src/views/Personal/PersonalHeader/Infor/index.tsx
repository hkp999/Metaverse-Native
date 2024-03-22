import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input, ListItem, Text, Avatar } from '@rneui/base';
import Icon from "react-native-vector-icons/AntDesign"
import DialogAgain from '@components/DialogAgain';


const config = [
  {
    name: 'avator',
    title: '头像',
    url: "https://avatars.githubusercontent.com/u/107165304?v=4"
  }, {
    name: 'nick',
    title: '昵称',
    text: '糖果、Fover'
  },{
    name: 'gender',
    title: '性别',
    text: '男'
  }, {
    name: 'email',
    title: '邮箱',
    text: '747001945@qq.com'
  }
]
const styles = StyleSheet.create({
  listTite: {
    fontWeight: "600"
  }
})

const Infor = () => {
  const [isVisible,setIsVisble] = useState(false)
  const [dialogTitle,setDialogTitle] = useState<{text: string | undefined, name: string}>({text: '',name: ''})
  const onClick = (text: string | undefined, name: string) => {
    setDialogTitle({
      text,
      name
    })
    setIsVisble(true)
  }
  return (
    <>
      {
        config.map((item) => {
          return (
            <ListItem key={item.title} onPress={() => onClick(item.url || item.text, item.name)} bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={styles.listTite}>{item.title}</ListItem.Title>
              </ListItem.Content>
              {
                item.url ?
                <Avatar rounded source={{ uri: "https://avatars.githubusercontent.com/u/107165304?v=4" }} />
                :
                <Text>{item.text}</Text>
              }
              <ListItem.Chevron size={30} />
            </ListItem>
          )
        })
      }
      <DialogAgain isVisible={isVisible} setIsVisble={setIsVisble} dialogTitle={dialogTitle}/>
    </>
  )
}

export default Infor

