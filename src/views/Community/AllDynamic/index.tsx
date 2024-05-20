import React from 'react'
import { ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import DynamicItem from '@components/DynamicItem'
import { UserInfo } from '@views/Publish'
import NullData from '@components/NullData'

const AllDynamic = ({ publish }: {
  publish: UserInfo[]
}) => {

  return (
    <>
      {
        publish.length ?
          <ScrollView>
            {
              publish.map((item, index) => <DynamicItem key={index} {...item} />)
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
    publish: state.publish
  }
};


export default connect(mapStateToProps)(AllDynamic)

