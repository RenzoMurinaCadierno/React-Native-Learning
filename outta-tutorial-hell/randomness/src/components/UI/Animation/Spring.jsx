import React from "react"
import { Animated } from "react-native"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"
import { interpolate } from "@app-utils/functions"
import animations from "@app-constants/animations"

export default function Spring({
  active,
  activeAnimation,
  inactiveAnimation,
  style,
  children,
  translateYOutputRange,
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
          transform: [
            { translateY: interpolate(val, translateYOutputRange) },
            { scale: interpolate(val, scaleOutputRange) }
          ]
        }
      ]}
      {...rest}
    >
      {children}
    </Animated.View>
  )
}

Spring.defaultProps = {
  activeAnimation: animations.effects.spring.IN,
  inactiveAnimation: animations.effects.spring.OUT,
  translateYOutputRange: [0, -5],
  scaleOutputRange: [1, 1.2]
}
