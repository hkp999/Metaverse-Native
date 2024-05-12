import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native'
import IconFont from '@components/IconFont'
import { connect } from 'react-redux'
import action from '@store/action'
import collectData from '@datas/data0.json'

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
const DetailDomain = ({nowUser:{collect}, data, addOwnCollect,deleteOwnCollect}:{
  nowUser: {
    collect: {artical_title: string}[]
  },
  data: typeof collectData[number],
  addOwnCollect: Function,
  deleteOwnCollect: Function
}) => {
  const [like, setLike] = useState(false)
  const [collection, setCollection] = useState(false)

  useEffect(() => {
    setCollection(collect.some(item => item.artical_title === data.artical_title))
  },[])

  const handleCollect = () => {
    if(collection) {
      deleteOwnCollect(data)
    }else {
    addOwnCollect(data)
    }
    setCollection(!collection)
  }

  return (
    <View style={styles.mainView}>
      <TextInput style={styles.textInput} placeholder='请输入评论' />
      <Pressable onPress={() => setLike(!like)}>
        <IconFont name='Message' size={24} />
      </Pressable>
      <Pressable onPress={handleCollect}>
        <IconFont name={collection ? 'CollectionMv' : 'Collection'} size={24} />
      </Pressable>
      <Pressable onPress={() => setLike(!like)}>
        <IconFont name={like ? 'LikeActive' : 'Like'} size={24} />
      </Pressable>
    </View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    nowUser: state.nowUser,
  }
};

const mapDispatchToProps = {
  addOwnCollect: action.nowUser.addOwnCollect,
  deleteOwnCollect: action.nowUser.deleteOwnCollect
};


export default connect(mapStateToProps, mapDispatchToProps)(DetailDomain)
