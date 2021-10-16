import React from "react"
import { Image, Animated } from "react-native"

export default function ImageBase({ animated, ...rest }) {
  const Component = animated ? Animated.Image : Image

  return <Component {...rest} />
}
