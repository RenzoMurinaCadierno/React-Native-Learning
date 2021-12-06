import React from "react"
import { StyleSheet, Animated } from "react-native"
import { useLoopingAnimatedValue } from "@app-hooks"
import { colors, animations } from "@app-constants"
import { interpolate } from "@app-utils/functions"

export default function Aura({
  style,
  radius,
  color,
  active,
  activeSequence,
  startingValue,
  ...rest
}) {
  const val = useLoopingAnimatedValue({ active, activeSequence, startingValue })

  return (
    <Animated.View
      style={[
        {
          ...StyleSheet.absoluteFill,
          backgroundColor: color,
          borderRadius: radius,
          opacity: interpolate(val, [1, 0]),
          transform: [{ scale: interpolate(val, [0.4, 1.4]) }]
        },
        style
      ]}
      {...rest}
    />
  )
}

Aura.defaultProps = {
  color: colors.main.PRIMARY,
  active: true,
  activeSequence: animations.icons.aura.ACTIVE_SEQUENCE,
  startingValue: 0
}
