import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import DynamicItem from '@components/DynamicItem'
import { UserInfo } from '@views/Publish'

const AllDynamic = ({ publish }: {
  publish: UserInfo[]
}) => {

  return (
    <ScrollView>
      {
        publish.map((item, index) => <DynamicItem key={index} {...item} />)
      }
    </ScrollView>
  )
}

const mapStateToProps = (state: any) => {
  return {
    publish: state.publish
  }
};


export default connect(mapStateToProps)(AllDynamic)

