import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import DynamicItem from '@components/DynamicItem'
import { UserInfo } from '@views/Publish'
import NullData from '@components/NullData'

const Dynamic = ({ nowUser: { artical } }: {
  nowUser: {
    artical: UserInfo[]
  }
}) => {
  const navigate = useNavigation()

  useEffect(() => {
    navigate.setOptions({
      title: '我的动态'
    })
  }, [])

  return (
    <>
      {
        artical.length ?
          <ScrollView>
            {
              artical.map((item, index) => <DynamicItem key={index} {...item} />)
            }
          </ScrollView>
          : <View style={{ flex: 1, justifyContent: 'center' }}>
            <NullData />
          </View>
      }
    </>

  )
}

const mapStateToProps = (state: any) => {
  return {
    nowUser: state.nowUser
  }
};


export default connect(mapStateToProps)(Dynamic)

