import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Image } from '@rneui/base'
import IconFont from '@components/IconFont'
import { UserInfo } from '@views/Publish'
import { calculateTimeDifference } from '@utils/index'
import { connect } from 'react-redux'
import action from '@store/action'

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

const index = (props: UserInfo & {deleteDynamicCount: Function,deleteOwnArtical:Function, nowUser: UserInfo}) => {
  const [like, setLike] = useState(false)

  const handleDelete = () => {
    props.deleteDynamicCount()
    props.deleteOwnArtical({content: props.content})
  }
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
            props.images?.map((item: {}, index) => <Image key={index} style={styles.img} resizeMode="contain" source={item} />)
          }
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10
        }}>
          <Text>{calculateTimeDifference(props.create_time)}</Text>
          <View style={{
            flexDirection: 'row'
          }}>
            {
              props.username === props.nowUser.username && <Pressable style={{
                marginRight: 15
              }} onPress={handleDelete}>
                <IconFont name='Delete' size={16} />
              </Pressable>
            }
            <Pressable onPress={() => {
              setLike(!like)
            }}>
              <IconFont name={like ? 'LikeActive' : 'Like'} size={16} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    nowUser: state.nowUser,
  }
};


const mapDispatchToProps = {
  deleteDynamicCount: action.nowUser.deleteDynamicCount,
  deleteOwnArtical: action.nowUser.deleteOwnArtical,
};


export default connect(mapStateToProps,mapDispatchToProps)(index)
