import React from 'react'
import { Image } from 'react-native'
import { TabIcon } from '../../assets/TabBar'

export default function IconFont({ name, color, size }: {
  name?: string,
  color?: string,
  size?: number
}) {
  const imgUrl = TabIcon[name as keyof typeof TabIcon]

  return (
    <Image
      source={imgUrl}
      style={{ width: size, height: size }}
      tintColor={color}
    />
  )
}
