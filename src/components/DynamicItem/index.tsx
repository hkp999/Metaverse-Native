import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Image } from '@rneui/base'
import IconFont from '@components/IconFont'
import { UserInfo } from '@views/Publish'
import { calculateTimeDifference } from '@utils/index'

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
  },
  avator: {
    width: 40,
    height: 40,
    borderRadius: 4
  },
  img: {
    width: 100,
    height: 100,
    margin: 2
  },
  titleText: {
    fontSize: 18,
    marginBottom: 5
  }
})

const index = (props: UserInfo) => {
  const [like, setLike] = useState(false)

  return (
    <View style={styles.mainView}>
      <View style={{
        marginRight: 10
      }}>
        <Image style={styles.avator} source={{
          uri: props.avator
        }} />
      </View>

      <View style={{
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        width: '84%',
      }}>
        <Text style={styles.titleText}>{props.username}</Text>
        <Text style={[styles.titleText, { fontSize: 16, marginBottom: 10 }]}>{props.content}</Text>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',

        }}>
          {
            props.images.map((item, index) => <Image key={index} style={styles.img} resizeMode="contain" source={{
              uri: 'https://avatars.githubusercontent.com/u/107165304?v=4'
            }} />)
          }
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10
        }}>
          <Text>{calculateTimeDifference(props.create_time)}</Text>
          <Pressable onPress={() => {
            setLike(!like)
          }}>
            <IconFont name={like ? 'LikeActive' : 'Like'} size={16} />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default index
