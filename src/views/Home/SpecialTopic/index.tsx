import React from 'react'
import { View } from 'react-native'
import TopicItem from './TopicItem'
import data from './data'

const SpecialTopic = () => {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
    }}>
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20
      }}>
        {
          data.map(item => {
            return (
              <React.Fragment key={item.id}>
                <TopicItem {...item} />
              </React.Fragment>
            )
          })
        }
      </View>
    </View>

  )
}

export default SpecialTopic

