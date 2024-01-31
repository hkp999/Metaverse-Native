import IconFont from '@components/IconFont'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import type { Icon } from '@assets/index'

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  mainText: {
    flex: 1,
    marginLeft: 10,
  }
})
const ItemDomain = ({ text, imgName }: {
  text: string,
  readonly imgName: keyof typeof Icon
}) => {
  return (
    <View style={styles.mainView}>
      <IconFont name={imgName} size={20} />
      <View style={styles.mainText}>
        <Text style={[globalStyles.baseTextColor, globalStyles.largeSize]}>{text}</Text>
      </View>
      <IconFont name="ArrowRight" size={14} color="#333" />
    </View>
  )
}

export default ItemDomain

