import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Image, Text, Pressable, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ActiveButton from '@components/ActiveButton'
import IconFont from '@components/IconFont'
import { recommendData } from '@views/Home/NavList/Recommend/data'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    width: width - 50,
    alignItems: 'center',
    marginHorizontal: 25,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 10,
    marginBottom: 15
  },
  content: {

  },
  contentLeft: {
    flex: 1,
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 9999,
  },
  authorMsg: {
    marginLeft: 10
  },
  button: {
    width: 70,
    paddingVertical: 3,
    borderRadius: 9999,
  },
  mainTitle: {
    marginTop: 10,
  },
  linkView: {
    width: '100%',
    backgroundColor: '#eee',
    marginVertical: 10,
    padding: 10,
    borderRadius: 4
  },
  linkImg: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
})


const MessageItem = ({ data }: {
  data: typeof recommendData[number]
}) => {
  const navigation = useNavigation()
  const [like, setLike] = useState(false)
  return (
    <View style={styles.container}>
      {/* 作者信息 && 关注 */}
      <View style={[globalStyles.baseLayout, styles.content]}>
        <View style={[styles.contentLeft, globalStyles.baseLayout, { justifyContent: 'flex-start' }]}>
          <Image
            style={styles.image}
            source={{
              uri: data.avatar
            }}
          />
          <View style={styles.authorMsg}>
            <Text style={[globalStyles.largeSize, globalStyles.baseFont, globalStyles.baseBold]}>{data.author}&nbsp;<IconFont name={data.gender === 2 ? 'Woman' : 'Man'} size={10} /></Text>
            <Text style={[globalStyles.smallSize, { color: '#bbb' }]}>{data.releaseTime}·{data.pageView}浏览</Text>
          </View>

        </View>
        <ActiveButton style={styles.button} textStyle={globalStyles.baseSize} activeText={{ color: '#ccc' }} />
      </View>
      {/* 文章简介 */}
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text style={[styles.mainTitle, globalStyles.largeSize]} numberOfLines={4}>
          {data.content}
        </Text>
      </TouchableOpacity>
      {/* 文章的标题 */}
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <View style={[styles.linkView, globalStyles.baseLayout]}>
          <Image
            style={styles.linkImg}
            source={{
              uri: data.linkImg
            }}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={[globalStyles.largeSize, globalStyles.baseFont]} numberOfLines={1}>{data.linkTitle}</Text>
            <Text style={globalStyles.smallSize} numberOfLines={2}>{data.linkContent}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* 点赞 && 评论 */}
      <View style={[globalStyles.baseLayout, { width: '100%', marginTop: 10 }]}>
        <View style={[globalStyles.baseLayout, { justifyContent: 'flex-start' }]}>
          <IconFont name='Circle' size={16} color='rgb(21,129,255)' />
          <Text style={{ marginLeft: 2 }}>圈子：{data.category}</Text>
        </View>
        <View style={[globalStyles.baseLayout]}>
          <Pressable onPress={() => {
            setLike(!like)
          }}>
            <View style={[globalStyles.baseLayout, { marginRight: 10 }]}>
              <IconFont name={like ? 'LikeActive' : 'Like'} size={16} />
              <Text style={{ marginLeft: 2 }}>{data.likes}</Text>
            </View>
          </Pressable>
          <View style={[globalStyles.baseLayout]}>
            <IconFont name='Comment' size={16} />
            <Text style={{ marginLeft: 2 }}>{data.comments}</Text>
          </View>
        </View>
      </View>
    </View>

  )
}

export default MessageItem

