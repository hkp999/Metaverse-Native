import React from 'react'
import { Image } from 'react-native'
import { Icon } from '../../assets'

export default function IconFont({ name, color, size }: {
  name?: string,
  color?: string,
  size?: number
}) {
  const imgUrl = Icon[name as keyof typeof Icon]

  return (
    <Image
      source={imgUrl}
      style={{ width: size, height: size }}
      tintColor={color}
    />
  )
}
