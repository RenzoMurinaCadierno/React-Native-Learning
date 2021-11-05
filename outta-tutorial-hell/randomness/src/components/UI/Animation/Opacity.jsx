import React from "react"
import { Animated } from "react-native"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"
import { interpolate } from "@app-utils/functions"
import animations from "@app-constants/animations"

export default function Opacity({
  active,
  activeAnimation,
  inactiveAnimation,
  style,
  Component,
  children,
  opacityOutputRange,
  ...rest
}) {
  const animOpacity = useLinearAnimatedValue({
    active,
    activeAnimation,
    inactiveAnimation
  })

  return (
    <Component
      style={[style, { opacity: interpolate(animOpacity, opacityOutputRange) }]}
      {...rest}
    >
      {children}
    </Component>
  )
}

Opacity.defaultProps = {
  activeAnimation: animations.effects.default.IN,
  inactiveAnimation: animations.effects.default.OUT,
  opacityOutputRange: [0, 1],
  Component: Animated.View
}
