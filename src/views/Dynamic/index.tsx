import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import DynamicItem from '@components/DynamicItem'
import { UserInfo } from '@views/Publish'

const Dynamic = ({ nowUser:{artical} }: {
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
    <ScrollView>
      {
        artical.map((item, index) => <DynamicItem key={index} {...item} />)
      }
    </ScrollView>
  )
}

const mapStateToProps = (state: any) => {
  return {
    nowUser: state.nowUser
  }
};


export default connect(mapStateToProps)(Dynamic)

