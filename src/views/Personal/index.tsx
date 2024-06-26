import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PersonalHeader from './PersonalHeader'
import PersonalDomain from './PersonalDomain'
import PersonalFooter from './PersonalFooter'

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff'
  },
})



export default function Personal() {

  return (
    <SafeAreaProvider>
      <View style={styles.mainView}>
        <PersonalHeader />
        <PersonalDomain />
        <PersonalFooter />
      </View>
    </SafeAreaProvider>

  )
}
