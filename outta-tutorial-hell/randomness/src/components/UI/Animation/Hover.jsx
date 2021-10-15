import React from "react"
import { Animated } from "react-native"
import { interpolate } from "@app-utils/functions"
import useLoopingAnimatedValue from "@app-hooks/useLoopingAnimatedValue"
import animations from "@app-constants/animations"

export default function Hover({
  active,
  activeSequence,
  inactiveAnimation,
  style,
  children,
  translateYOutputRange,
  rotateYOutputRange,
  scaleOutputRange,
  ...rest
}) {
  const val = useLoopingAnimatedValue({
    active,
    activeSequence,
    inactiveAnimation
  })

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [
            { translateY: interpolate(val, translateYOutputRange) },
            {
              rotateY: interpolate(val, rotateYOutputRange)
            },
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

Hover.defaultProps = {
  activeSequence: animations.effects.hover.ACTIVE_SEQUENCE,
  inactiveAnimation: animations.effects.hover.OUT,
  translateYOutputRange: [0, -10],
  rotateYOutputRange: ["0deg", "180deg"],
  scaleOutputRange: [1, 1.15]
}
