import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import ActiveButton from '@components/ActiveButton'
import { UserInfo } from '@store/reducer/user'

const styles = StyleSheet.create({
  contentView: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: baseInfo.baseWidth / 2.5,
    paddingVertical: 20,
    borderRadius: 4,
    marginRight: 10
  },
  img: {
    width: 48,
    height: 48,
    borderRadius: 999,
  },
  button: {
    width: 70,
    paddingVertical: 3,
  },
  buttonText: {
    fontSize: 14
  },
  iconView: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#fff',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999
  },
  icon: {
    width: 12,
    height: 12
  }
})

const UserList = (props: UserInfo) => {
  return (
    <View style={[styles.contentView, globalStyles.baseShadow, {backgroundColor: '#f5f5f5'}]}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: props.avator
          }}
        />
        <View style={styles.iconView}>
          <Image
            source={props.gender === '男' ? require('@assets/Home/man.png') : require('@assets/Home/woman.png')}
            style={styles.icon}
          />
        </View>
      </View>
      <Text style={[globalStyles.baseFont, { marginTop: 5 }]}>{props.username}</Text>
      <Text style={[globalStyles.smallSize, globalStyles.baseFont, { marginVertical: 15 }]}>{props.fan_count}粉丝·{props.follow_count}关注</Text>
      <ActiveButton
        style={styles.button}
        textStyle={styles.buttonText}
        activeStyle={{ backgroundColor: 'rgb(91, 150, 254)' }}
        userList={props}
      />
    </View>
  )
}

export default UserList
