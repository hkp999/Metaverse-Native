import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheet } from '@rneui/base';
import BottomContent from './BottomContent';
import PersonalHeader from './PersonalHeader'
import PersonalDomain from './PersonalDomain'
import PersonalFooter from './PersonalFooter'

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff'
  }
})



export default function Personal() {
  const [visible, setVisible] = useState(false)

  return (
    <SafeAreaProvider>
      <View style={styles.mainView}>
        <PersonalHeader setVisible={setVisible} />
        <PersonalDomain />
        <PersonalFooter />
      </View>
      <BottomSheet modalProps={{}} isVisible={visible}>
        <BottomContent setVisible={setVisible} />
      </BottomSheet>
    </SafeAreaProvider>

  )
}
