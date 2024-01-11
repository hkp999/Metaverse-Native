import IconFont from '@components/IconFont'
import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import UserList from './UserList'
import { userList } from './data'

const styles = StyleSheet.create({
  contentView: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    flex: 1
  },
  scroll: {
    flexDirection: 'row',
    height: 180,
    paddingLeft: 10
  }
})

function Concern() {
  return (
    <View style={styles.contentView}>
      {/* 标题 */}
      <View style={[globalStyles.baseLayout, { paddingHorizontal: 20 }]}>
        <Text style={[globalStyles.baseBold, { fontSize: 18, color: '#333' }]}>推荐用户</Text>
        <Text style={{ color: '#000' }}>查看更多<IconFont name='ArrowRight' size={10} /></Text>
      </View>
      <View style={{marginVertical: 20}}>
        <ScrollView
          style={styles.scroll}
          horizontal={true}
        >
          {
            userList.map(item => <UserList key={item.user} {...item} />)
          }
        </ScrollView>
      </View>

    </View>
  )
}

export default Concern
