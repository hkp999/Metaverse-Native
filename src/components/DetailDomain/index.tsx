import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TextInput, Pressable, Alert } from 'react-native'
import { BottomSheet, ListItem, Avatar } from '@rneui/themed';
import IconFont from '@components/IconFont'
import { connect } from 'react-redux'
import action from '@store/action'
import collectData from '@datas/data0.json'
import { UserInfo } from '@store/reducer/user';

const list = [
  {
    username: 'gearon',
    title: '感觉元宇宙前景不会太差',
    avator: 'https://avatars.githubusercontent.com/u/810438?s=80&v=4',
  },
  {
    username: '干果儿',
    title: '比较期待元宇宙未来发展的顶峰时刻',
    avator: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.wmVu0jrNl8LoZ9aBxRrTCgAAAA&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
  },
  {
    username: 'iqseternal',
    title: '比较期待元宇宙未来发展的顶峰时刻',
    avator: 'https://avatars.githubusercontent.com/u/81791264?s=48&v=4',
  },
];

const styles = StyleSheet.create({
  mainView: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: '5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  textInput: {
    height: 40,
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 9999,
  }
})
const DetailDomain = ({ nowUser, nowUser: { collect, likes }, data, addOwnCollect, deleteOwnCollect, deleteOwnLike, addOwnLike }: {
  nowUser: {
    collect: { artical_title: string }[]
    likes: { artical_title: string }[]
  } & UserInfo,
  data: typeof collectData[number],
  addOwnCollect: Function,
  deleteOwnCollect: Function,
  addOwnLike: Function,
  deleteOwnLike: Function
}) => {
  const [like, setLike] = useState(false)
  const [collection, setCollection] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('')
  const [init, setInit] = useState(list)


  useEffect(() => {
    setCollection(collect.some(item => item.artical_title === data.artical_title))
    setLike(likes.some(item => item.artical_title === data.artical_title))
  }, [])

  const handleCollect = () => {
    if (collection) {
      console.log(data.artical_title);

      deleteOwnCollect(data)
    } else {
      addOwnCollect(data)
    }
    setCollection(!collection)
  }

  const handleLike = () => {
    if (like) {
      deleteOwnLike({ artical_title: data.artical_title })
    } else {
      addOwnLike({ artical_title: data.artical_title })
    }
    setLike(!like)
  }

  const handleMessage = () => {
    init.unshift({
      username: nowUser.username,
      title: value,
      avator: nowUser.avator,
    },)
    setInit([...init])
    setValue('')
    Alert.alert('提示', '发布成功')
  }

  return (
    <>
      <View style={styles.mainView}>
        <TextInput value={value} onChangeText={e => setValue(e)} onSubmitEditing={handleMessage} style={styles.textInput} placeholder='请输入评论' />
        <Pressable onPress={() => setIsVisible(true)}>
          <IconFont name='Message' size={24} />
        </Pressable>
        <Pressable onPress={handleCollect}>
          <IconFont name={collection ? 'CollectionMv' : 'Collection'} size={24} />
        </Pressable>
        <Pressable onPress={handleLike}>
          <IconFont name={like ? 'LikeActive' : 'Like'} size={24} />
        </Pressable>
      </View>
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {init.map((l, i) => (
          <ListItem
            key={i}
          >
            <Avatar
              rounded
              source={{ uri: l.avator }}
            />
            <ListItem.Content>
              <ListItem.Title>{l.username}</ListItem.Title>
              <ListItem.Subtitle>{l.title}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
        <ListItem
          key='a'
          onPress={() => setIsVisible(!isVisible)}
          containerStyle={{
            backgroundColor: 'red',
          }}
        >
          <ListItem.Content style={{
            alignItems: 'center'
          }}>
            <ListItem.Title style={{ color: '#fff' }}>退出</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </BottomSheet>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    nowUser: state.nowUser,
  }
};

const mapDispatchToProps = {
  addOwnCollect: action.nowUser.addOwnCollect,
  deleteOwnCollect: action.nowUser.deleteOwnCollect,
  addOwnLike: action.nowUser.addOwnlike,
  deleteOwnLike: action.nowUser.deleteOwnLike
};


export default connect(mapStateToProps, mapDispatchToProps)(DetailDomain)
