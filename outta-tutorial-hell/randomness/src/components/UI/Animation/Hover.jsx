import React from "react"
import { Animated } from "react-native"
import { interpolate } from "@app-utils/functions"
import useLoopingAnimatedValue from "@app-hooks/useLoopingAnimatedValue"
import animations from "@app-constants/animations"

export default function Hover({ active, style, children, ...rest }) {
  const val = useLoopingAnimatedValue({
    active,
    activeSequence: animations.icons.hover.ACTIVE_SEQUENCE,
    inactiveAnimation: animations.icons.hover.OUT
  })

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [
            { translateY: interpolate(val, [0, -10]) },
            {
              rotateY: interpolate(val, ["0deg", "180deg"])
            },
            { scale: interpolate(val, [1, 1.15]) }
          ]
        }
      ]}
      {...rest}
    >
      {children}
    </Animated.View>
  )
}
