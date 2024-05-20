import action from '@store/action'
import { UserInfo } from '@store/reducer/user'
import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40,
    borderRadius: 4
  },
  mainView: {
    flexDirection: 'row',
    padding: 20
  },
  text: {
    backgroundColor: '#89d961',
    color: '#000',
    maxWidth: global.baseInfo.baseWidth * 0.7,
    letterSpacing: 1,
    fontSize: 16,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    lineHeight: 24,
    borderRadius: 2
  }
})

const DetailMsg = ({ item, nowUser, userMsg }: {
  item: UserInfo,
  nowUser: UserInfo
  userMsg: {
    gearon: {
      username: string,
      message: string,
      time: string,
    }[]
  }
}) => {

  return (
    <>
      {
        userMsg[item.username]?.map((obj: { message: string; username: string; }) => {
          return <>
            <View style={[styles.mainView, (obj.username === nowUser.username) && { justifyContent: 'flex-end' }]}>
              {(obj.username === nowUser.username) && <Text style={styles.text}>{obj.message}</Text>}
              <Image source={{
                uri: obj.username === nowUser.username ? nowUser.avator : item.avator
              }} style={styles.img} />
              {!(obj.username === nowUser.username) && <Text style={[styles.text, { backgroundColor: '#fff' }]}>{obj.message}</Text>}
            </View>
          </>
        })
      }
    </>

  )
}

const mapStateToProps = (state: any) => {
  return {
    nowUser: state.nowUser,
    userMsg: state.userMsg
  }
};

export default connect(mapStateToProps)(DetailMsg)
