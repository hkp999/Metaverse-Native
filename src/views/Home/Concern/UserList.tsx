import ActiveButton from '@components/ActiveButton'
import React from 'react'
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native'
import { userList } from './data'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  contentView: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 2.5,
    paddingVertical: 10,
    borderRadius: 5,
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

const UserList = ({ imgUrl, user, gender, fan, attent }:typeof userList[number]) => {
  return (
    <View style={[styles.contentView]}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: imgUrl
          }}
        />
        <View style={styles.iconView}>
          <Image
            source={gender === 1 ? require('@assets/Home/男性.png') : require('@assets/Home/女性.png')}
            style={styles.icon}
          />
        </View>
      </View>
      <Text style={[globalStyles.baseFont, { marginTop: 5 }]}>{user}</Text>
      <Text style={[globalStyles.smallSize, globalStyles.baseFont, { marginVertical: 10 }]}>{fan}粉丝·{attent}关注</Text>
      <ActiveButton
        style={styles.button}
        textStyle={styles.buttonText}
        activeStyle={{ backgroundColor: 'rgb(91, 150, 254)' }}
      />
    </View>
  )
}

export default UserList
