import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { makeStyle } from '@styles/utils';
import { UserInfo } from '@store/reducer/user';
import { connect } from 'react-redux';
import action from '@store/action';
import { formatCurrentDateTime } from '@utils/index';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff'
  },
  wrapperCustom: {
    borderRadius: 2,
    padding: 6,
    width: 100
  },
  activeStyles: {
    backgroundColor: '#f5f5f5',
  },
  defaultStyles: {
    backgroundColor: 'rgb(91, 150, 254)'
  }
});

const ActiveButton = (
  {
    style,
    textStyle,
    defaultTitle = '关注',
    activeTitle = '已关注',
    defaultStyle,
    activeStyle,
    defaultText,
    activeText,
    userList,
    nowUser,
    addFollow,
    follow,
    deleteFollow,
    addMessage,
    deleteMessage,
    addFollowCount,
    deleteFollowCount
  }
    : {
      style?: ViewStyle,
      textStyle?: TextStyle,
      defaultTitle?: string,
      activeTitle?: string,
      defaultStyle?: ViewStyle,
      activeStyle?: ViewStyle,
      defaultText?: TextStyle,
      activeText?: TextStyle,
      userList: UserInfo,
      nowUser: UserInfo,
      addFollow: Function,
      follow: UserInfo[],
      deleteFollow: Function,
      addMessage: Function,
      deleteMessage: Function,
      addFollowCount: Function,
      deleteFollowCount: Function
    }
) => {
  const [isChoose, setIsChoose] = useState(false);

  useEffect(() => {
    let sure = follow.some(item => item?.username === userList?.username)
    setIsChoose(sure)
  }, [])

  const handleFollow = () => {
    if (isChoose) {
      deleteFollow(userList.username)
      deleteMessage(userList.username)
      deleteFollowCount()
    } else {
      addFollow(userList)
      addFollowCount()
      addMessage( userList.username,{
        username: userList.username,
        message: "We are friends now, let's start chatting",
        time: formatCurrentDateTime(),
      })
    }
    setIsChoose(!isChoose)
  }

  return (
    <Pressable
      onPress={handleFollow}
      style={[
        styles.wrapperCustom,
        style,
        isChoose ? makeStyle(styles.activeStyles, activeStyle) : makeStyle(styles.defaultStyles, defaultStyle),
      ]}>
      <Text style={[
        styles.text,
        textStyle,
        isChoose ? activeText : defaultText,
      ]}>
        {isChoose ? activeTitle : defaultTitle}
      </Text>
    </Pressable>
  );
}

const mapStateToProps = (state: any) => {
  return {
    nowUser: state.nowUser,
    follow: state.follow
  }
};

const mapDispatchToProps = {
  addFollow: action.follow.addFllow,
  deleteFollow: action.follow.deleteFollow,
  addMessage: action.userMsg.addMessage,
  deleteMessage: action.userMsg.deleteMessage,
  addFollowCount: action.nowUser.addFollowCount,
  deleteFollowCount: action.nowUser.deleteFollowCount
};


export default connect(mapStateToProps, mapDispatchToProps)(ActiveButton)
