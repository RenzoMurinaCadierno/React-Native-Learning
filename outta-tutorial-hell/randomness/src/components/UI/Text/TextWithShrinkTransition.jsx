import React, { useEffect, useRef } from "react"
import { Animated } from "react-native"
import Base from "./Base"

export default function TextWithShrinkTransition({
  value,
  style,
  direction,
  size,
  children,
  ...rest
}) {
  const val = useRef(new Animated.Value(value)).current

  useEffect(() => {
    val.setValue(value)
  }, [value])

  return (
    <Base
      animated
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
    >
      {children}
    </Base>
  )
}

TextWithShrinkTransition.defaultProps = { size: 18 }

function _interpolate(val, outputRange) {
  return val.interpolate({
    inputRange: [0, 1],
    outputRange,
    extrapolate: "clamp"
  })
}
