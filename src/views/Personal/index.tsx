import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PersonalHeader from './PersonalHeader'
import PersonalDomain from './PersonalDomain'

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
export default function Personal() {
  return (
    <View style={styles.mainView}>
      <PersonalHeader />
      <PersonalDomain />
    </View>
  )
}
