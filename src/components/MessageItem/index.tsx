import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, Pressable, TouchableOpacity, ViewStyle } from 'react-native'
import Animated,{FadeIn, SlideInLeft, SlideInRight} from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import ActiveButton from '@components/ActiveButton'
import IconFont from '@components/IconFont'
import recommendData from '@datas/data0.json'
import { calculateTimeDifference,parseJsonIfNecessary } from '@utils/index'

const styles = StyleSheet.create({
  container: {
    width: baseInfo.baseWidth - 50,
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

const imgs: { [key: string]: string } = {
  '新浪VR': 'https://ts1.cn.mm.bing.net/th?id=ODLS.39ca9133-5308-46c0-b03f-ca800391a321&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
  '元力社': 'https://yuanlishe.cn/static/img/logonew1.png'
}

const MessageItem = ({ data, style }: {
  data: typeof recommendData[number] & {gender?: number},
  style?: ViewStyle
}) => {
  const navigation = useNavigation<NavigatePage>()
  const [like, setLike] = useState(false)

  const goDetail = () => {

    navigation.navigate('Detail',{
      data:{
        ...data,
        artical_content: parseJsonIfNecessary(data.artical_content)
      }
    })
  }
  return (
    <Animated.View style={[styles.container, style]} entering={FadeIn}>
      {/* 作者信息 && 关注 */}
      <Animated.View style={[globalStyles.baseLayout, styles.content]} entering={SlideInLeft}>
        <View style={[styles.contentLeft, globalStyles.baseLayout, { justifyContent: 'flex-start' }]}>
          <Image
            style={styles.image}
            source={{
              uri: imgs[data.user_id] || 'https://yuanlishe.cn/static/img/logonew1.png'
            }}
          />
          <View style={styles.authorMsg}>
            <Text style={[globalStyles.largeSize, globalStyles.baseFont, globalStyles.baseBold]}>{data.user_id}&nbsp;<IconFont name={data.gender === 2 ? 'Woman' : 'Man'} size={10} /></Text>
            <Text style={[globalStyles.smallSize, { color: '#bbb' }]}>{calculateTimeDifference(data.artical_time)} / {data.artical_views_count}浏览</Text>
          </View>

        </View>
        <ActiveButton style={styles.button} textStyle={globalStyles.baseSize} activeText={{ color: '#ccc' }} />
      </Animated.View>
      {/* 文章简介 */}
      <TouchableOpacity onPress={goDetail}>
        <Animated.Text style={[styles.mainTitle, globalStyles.largeSize]} numberOfLines={4} entering={SlideInRight}>
          {data.artical_intro}
        </Animated.Text>
      </TouchableOpacity>
      {/* 文章的标题 */}
      <TouchableOpacity onPress={goDetail}>
        <Animated.View style={[styles.linkView, globalStyles.baseLayout]} entering={SlideInLeft}>
          <Image
            style={styles.linkImg}
            source={{
              uri: data.artical_imgUrl
            }}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={[globalStyles.largeSize, globalStyles.baseFont]} numberOfLines={1}>{data.artical_title}</Text>
            <Text style={globalStyles.smallSize} numberOfLines={2}>{data.artical_intro}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
      {/* 点赞 && 评论 */}
      <Animated.View style={[globalStyles.baseLayout, { width: '100%', marginTop: 10 }]} entering={SlideInRight}>
        <View style={[globalStyles.baseLayout, { justifyContent: 'flex-start' }]}>
          <IconFont name='Circle' size={16} color='rgb(21,129,255)' />
          <Text style={{ marginLeft: 2 }}>圈子：{data.artical_type}</Text>
        </View>
        <View style={[globalStyles.baseLayout]}>
          <Pressable onPress={() => {
            setLike(!like)
          }}>
            <View style={[globalStyles.baseLayout, { marginRight: 10 }]}>
              <IconFont name={like ? 'LikeActive' : 'Like'} size={16} />
              <Text style={{ marginLeft: 2 }}>{data.artical_like_count}</Text>
            </View>
          </Pressable>
          <View style={[globalStyles.baseLayout]}>
            <IconFont name='Comment' size={16} />
            <Text style={{ marginLeft: 2 }}>{data.artical_comment_count}</Text>
          </View>
        </View>
      </Animated.View>
    </Animated.View>

  )
}

export default MessageItem

