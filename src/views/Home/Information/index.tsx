import React from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import data from './data'

const styles = StyleSheet.create({
  contentView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  contentText: {
    fontSize: 20,
    color: '#000',
    height: 90,
    lineHeight: 28
  },
  footerView: {
    marginVertical: 10,
  }
})

const News: React.FC<ScreenProps<'News'>> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        {
          data.map(item => {
            return (
              <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Detail')}>
                <View style={styles.contentView}>
                  <Text style={[styles.contentText]} numberOfLines={3}>{item.title}</Text>
                  <View style={[styles.footerView, globalStyles.baseLayout]}>
                    <Text>
                      {item.comments}评论
                      <Text>   {item.pageView}浏览</Text>
                    </Text>
                    <Text>{item.releaseTime}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default News

