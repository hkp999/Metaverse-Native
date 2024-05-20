import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Text, Avatar } from '@rneui/base'
import { useNavigation, useRoute } from '@react-navigation/native'
import DialogAgain from '@components/DialogAgain'
import { connect } from 'react-redux'
import type { UserInfo } from '../index'
import { userInfo } from '@request/index'


const styles = StyleSheet.create({
  listTite: {
    fontWeight: "600"
  }
})

const Infor = () => {
  const navigation = useNavigation<NavigatePage>()
  const route = useRoute()
  const [info, setInfo] = useState<UserInfo>(route.params as UserInfo)
  const [isVisible, setIsVisble] = useState(false)
  const [dialogTitle, setDialogTitle] = useState<{ text: string | undefined, name: string }>({ text: '', name: '' })

  useEffect(() => {
    navigation.setOptions({
      title: '个人信息'
    })
  }, [])

  useEffect(() => {
    (async () => {
      const { data } = await userInfo()
      if (data.code === 200) {
        setInfo(data.data)
      }
    })()
  }, [isVisible])

  const config = [
    {
      name: 'avatar',
      title: '头像',
      url: info.avatar
    }, {
      name: 'username',
      title: '昵称',
      text: info.username
    }, {
      name: 'gender',
      title: '性别',
      text: info.gender ? '男' : '女'
    }, {
      name: 'description',
      title: '个性签名',
      text: info.description
    }, {
      name: 'email',
      title: '邮箱',
      text: info.email
    }, {
      name: 'password',
      title: '密码',
    }
  ]

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
                  <Avatar rounded source={{ uri: item.url }} />
                  :
                  <Text numberOfLines={1} style={{ flex: 1, textAlign: 'right' }}>{item.name !== 'password' && item.text}</Text>
              }
              <ListItem.Chevron size={30} />
            </ListItem>
          )
        })
      }
      <DialogAgain isVisible={isVisible} setIsVisble={setIsVisble} dialogTitle={dialogTitle} />
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    userInfo: state.nowUser
  }
};

export default connect(mapStateToProps)(Infor)
