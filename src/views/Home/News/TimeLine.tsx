import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Timeline, { Data } from 'react-native-timeline-flatlist'
import data from './data'

type ExpandData = {
  author: string
}

const styles = StyleSheet.create({
  content: {
    paddingRight: 20,
    transform: [{ translateY: -16 }]
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    lineHeight: 24,
  },
  description: {
    marginVertical: 10
  }
})

// 文章部分
function renderDetail(rowData: Data & ExpandData, sectionID: number, rowID: number) {
  return (
    <View style={[styles.content]}>
      <Text style={[globalStyles.baseBold, globalStyles.largeSize]}>{rowData.time}</Text>
      <Text style={[styles.title, globalStyles.baseFont]}>{rowData.title}</Text>
      <Text>by <Text style={[globalStyles.baseFont, globalStyles.baseBold]}>{rowData.author}</Text></Text>
      <Text style={[styles.description, globalStyles.largeSize]}>{rowData.description}</Text>
    </View>
  )
}

const TimeLine = () => {
  return (
    <Timeline
      data={data}
      renderDetail={renderDetail}
      lineWidth={1}
      lineColor='#f1f1f1'
      showTime={false}
      innerCircle='icon'
      listViewStyle={{
        paddingVertical: 20
      }}
      circleColor='#fff'
      renderFullLine={true}
      isUsingFlatlist={true}
    />
  )
}

export default TimeLine

