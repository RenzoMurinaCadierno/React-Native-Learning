import React, { useEffect, useRef } from "react"
import { Animated } from "react-native"
import Enhanced from "@app-components/enhanced"

export default function TextWithTransition({
  value,
  style,
  direction,
  size,
  ...rest
}) {
  const val = useRef(new Animated.Value(value)).current

  useEffect(() => {
    val.setValue(value)
  }, [value])

  return (
    <Enhanced.Animated.BaseText
      style={[
        {
          opacity: _interpolate(val, [1, 0]),
          height: _interpolate(val, [size * 3, 0]),
          transform: [{ scaleY: _interpolate(val, [1, 0]) }]
        },
        style
      ]}
      size={size}
      {...rest}
    />
  )
}

TextWithTransition.defaultProps = { size: 18 }

function _interpolate(val, outputRange) {
  return val.interpolate({
    inputRange: [0, 1],
    outputRange,
    extrapolate: "clamp"
  })
}
