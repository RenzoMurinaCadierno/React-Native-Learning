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
  const val = useRef(new Animated.Value(_clamp(value))).current
  const sizeVal = useRef(new Animated.Value(size)).current

  useEffect(() => {
    const clampedValueProp = _clamp(value)
    val.setValue(clampedValueProp)
    sizeVal.setValue(Animated.multiply(clampedValueProp, size))
  }, [value])

  // console.log(size, typeof size, val, typeof _interpolate(val, [1, 0]))

  return (
    <Enhanced.Animated.BaseText
      // size={_interpolate(val, [1, 0]) * size}
      // size={size - _clamp(value) * size}
      // style={[{ opacity: _interpolate(val, [1, 0]) }, style]}
      style={[
        {
          opacity: _interpolate(val, [1, 0]),
          height: size * 3 - _clamp(value) * size * 3,
          transform: [{ scaleY: _interpolate(val, [1, 0]) }]
        },
        style
      ]}
      size={size}
      {...rest}
    />
  )
}
work on animations, they stutter
TextWithTransition.defaultProps = { size: 18 }

function _clamp(value) {
  if (value >= 1) return 1
  return value <= 0 ? 0 : value
}

function _clamp2(value) {
  if (value >= 0.8) return 1
  return value <= 0 ? 0 : value
}

function _interpolate(val, outputRange) {
  return val.interpolate({ inputRange: [0, 1], outputRange })
}
