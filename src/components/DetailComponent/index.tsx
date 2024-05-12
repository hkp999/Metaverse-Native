import React from 'react'
import { ScrollView, Text, Image, StyleSheet } from 'react-native'
import type dataType from '@datas/data0.json'

const styles = StyleSheet.create({
  baseText: {
    fontSize: 18,
    color: '#333',
  },
  baseImg: {
    maxWidth: baseInfo.baseWidth - 100,
    height: 200,
    marginHorizontal: 50
  }
})

const DetailComponent = (props: typeof dataType[number] & {
  artical_content: {
    text: string;
    src: string;
  }[]
}) => {
  return (
    <ScrollView style={{
      paddingHorizontal: 20,
      paddingTop: 20
    }}>
      <Text style={{
        fontSize: 24,
        color: '#000'
      }}>{props.artical_title}</Text>
      <Text>来源：{props.user_id} · {props.artical_time}</Text>
      <Text style={{
        marginTop: 20,
        fontSize: 16
      }}><Text style={{ color: '#000' }}>简介：</Text>{props.artical_intro}</Text>
      {
        props.artical_content.map((item, index) => {
          return <React.Fragment key={index}>
            {
              item.src
                ? <Image
                  style={styles.baseImg}
                  source={{
                    uri: item.src
                  }}
                  resizeMode='contain'
                />
                : <Text style={styles.baseText}>{item.text}</Text>
            }
          </React.Fragment>
        })
      }
    </ScrollView>
  )
}

export default DetailComponent
