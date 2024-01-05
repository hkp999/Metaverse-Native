import React from 'react'
import { Image } from 'react-native'
import { Icon } from '../../assets'

export default function IconFont({ name, color, size }: {
  name: keyof typeof Icon,
  color?: string,
  size?: number
}) {
  const imgUrl = Icon[name]

  return (
    <Image
      source={imgUrl}
      style={{ width: size, height: size }}
      tintColor={color}
    />
  )
}
