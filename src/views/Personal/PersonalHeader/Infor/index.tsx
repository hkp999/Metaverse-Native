import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Text, Avatar } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import DialogAgain from '@components/DialogAgain'
import { connect } from 'react-redux'
import { UserInfo } from '@store/reducer/user'
import action from '@store/action'


const styles = StyleSheet.create({
  listTite: {
    fontWeight: "600"
  }
})

const Infor = ({ userInfo }: {
  userInfo: UserInfo
}) => {
  const [isVisible, setIsVisble] = useState(false)
  const [dialogTitle, setDialogTitle] = useState<{ text: string | undefined, name: string }>({ text: '', name: '' })
  const navigation = useNavigation<NavigatePage>()

  useEffect(() => {
    navigation.setOptions({
      title: '个人信息'
    })
  }, [])

  const config = [
    {
      name: 'avator',
      title: '头像',
      url: userInfo.avator
    }, {
      name: 'username',
      title: '昵称',
      text: userInfo.username
    }, {
      name: 'gender',
      title: '性别',
      text: userInfo.gender
    }, {
      name: 'text',
      title: '个性签名',
      text: userInfo.text
    }, {
      name: 'email',
      title: '邮箱',
      text: userInfo.email
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
                  <Text numberOfLines={1} style={{ flex: 1, textAlign: 'right' }}>{item.text}</Text>
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
