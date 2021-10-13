import React from "react"
import { Animated } from "react-native"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"
import { interpolate } from "@app-utils/functions"
import animations from "@app-constants/animations"

export default function Spring({ active, style, children, ...rest }) {
  const val = useLinearAnimatedValue({
    active,
    activeAnimation: animations.effects.spring.IN,
    inactiveAnimation: animations.effects.spring.OUT
  })

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [
            { translateY: interpolate(val, [0, -5]) },
            { scale: interpolate(val, [1, 1.2]) }
          ]
        }
      ]}
      {...rest}
    >
      {children}
    </Animated.View>
  )
}
