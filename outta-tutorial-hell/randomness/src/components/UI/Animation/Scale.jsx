import React from "react"
import { Animated } from "react-native"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"
import { interpolate } from "@app-utils/functions"
import animations from "@app-constants/animations"

export default function Scale({
  active,
  activeAnimation,
  inactiveAnimation,
  style,
  children,
  opacityOutputRange,
  scaleOutputRange,
  ...rest
}) {
  const val = useLinearAnimatedValue({
    active,
    activeAnimation,
    inactiveAnimation
  })

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [{ scale: interpolate(val, scaleOutputRange) }],
          opacity: interpolate(val, opacityOutputRange)
        }
      ]}
      {...rest}
    >
      {children}
    </Animated.View>
  )
}

Scale.defaultProps = {
  activeAnimation: animations.effects.default.IN,
  inactiveAnimation: animations.effects.default.OUT,
  opacityOutputRange: [0.75, 1],
  scaleOutputRange: [0.9, 1.2]
}
