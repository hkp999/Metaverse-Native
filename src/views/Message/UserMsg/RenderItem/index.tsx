import { useNavigation } from '@react-navigation/native'
import action from '@store/action'
import { UserInfo } from '@store/reducer/user'
import React, { useEffect, useMemo, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { calculateTimeDifference } from '@utils/index'

const styles = StyleSheet.create({
  itemView: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: 999
  },
  contenView: {
    flex: 1,
    height: 64,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  nickText: {
    lineHeight: 32,
    fontSize: 18,
    flex: 1,
    color: '#333332'
  },
  contentText: {
    lineHeight: 32,
    flex: 1
  },
  iconView: {
    paddingLeft: 10,
    borderRadius: 999,
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 10,
    backgroundColor: '#ff4d4f',
    color: '#fff',
    borderRadius: 999,
    paddingHorizontal: 4
  }
})
const RenderItem = ({ data, userMsg }: {
  data: {
    item: UserInfo
  },
  userMsg: {
    username: string,
    message: string,
    time: string,
  }[]
}) => {
  const navigation = useNavigation<NavigatePage>()
  const [msg, setMsg] = useState([])
  const handleMessage = () => {
    navigation.navigate('DetailMsg', data)
  }

  useEffect(() => {
    setMsg(userMsg[data.item.username])
    console.log(data.item.username);

  }, [])

  return (
    <TouchableOpacity onPress={handleMessage} style={styles.itemView} activeOpacity={1}>
      {/* 头像 */}
      <View>
        <Image
          style={styles.img}
          source={{
            uri: data.item.avator
          }}
        />
      </View>
      {/* 信息部分 */}
      <View style={styles.contenView}>
        <View style={globalStyles.baseLayout}>
          <Text style={styles.nickText} numberOfLines={1}>{data.item.username}</Text>
          <Text>{calculateTimeDifference(msg[msg?.length - 1]?.time)}</Text>
        </View>
        <View style={globalStyles.baseLayout}>
          <Text style={styles.contentText} numberOfLines={1}>{msg[msg?.length - 1]?.message}</Text>
          <View style={styles.iconView}>
            <Text style={styles.iconText}>{msg?.length}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const mapStateToProps = (state: any) => {
  return {
    users: state.user,
    userMsg: state.userMsg
  }
};

const mapDispatchToProps = {
  register: action.user.regisUser,
  userLogin: action.nowUser.userLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderItem)
