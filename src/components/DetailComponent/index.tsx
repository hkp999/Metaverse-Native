import React from 'react'
import { ScrollView, Text, Image, StyleSheet } from 'react-native'
import Data from '@views/Detail/data'

const styles = StyleSheet.create({
  baseText: {
    fontSize: 16,
    color: '#333',
    marginHorizontal: 10
  },
  baseImg: {
    maxWidth: baseInfo.baseWidth - 100,
    height: 200,
    marginHorizontal: 50
  }
})

const DetailComponent = ({ data }: {
  data: typeof Data
}) => {
  return (
    <ScrollView>
      {
        data.map((item, index) => {
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
