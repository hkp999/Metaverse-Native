import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import NullData from '@components/NullData'
import IconFont from '@components/IconFont'
import UserList from './UserList'
import { connect } from 'react-redux'
import action from '@store/action'
import { UserInfo } from '@store/reducer/user'


const styles = StyleSheet.create({
  contentView: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    flex: 1
  },
  scroll: {
    flexDirection: 'row',
    height: 240,
    paddingLeft: 10,
    paddingVertical: 20
  }
})

function Concern({ users, nowUser }: {
  users: UserInfo[];
  nowUser: {
    username: string;
  }
}) {
  return (
    <View style={styles.contentView}>
      {/* 标题 */}
      <View style={[globalStyles.baseLayout, { paddingHorizontal: 20 }]}>
        <Text style={[globalStyles.baseBold, { fontSize: 18, color: '#333' }]}>推荐用户</Text>
        <Text style={{ color: '#000' }}>查看更多<IconFont name='ArrowRight' size={10} /></Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scroll}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {
          users.map(item => (item.username !== nowUser.username) && <UserList key={item.username} {...item} />)
        }
      </ScrollView>
      <NullData />
    </View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    users: state.user,
    nowUser: state.nowUser
  }
};

export default connect(mapStateToProps)(Concern)
