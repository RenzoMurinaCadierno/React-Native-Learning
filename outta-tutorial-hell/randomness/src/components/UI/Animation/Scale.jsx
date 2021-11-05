import React from "react"
import { Animated } from "react-native"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"
import { interpolate } from "@app-utils/functions"
import animations from "@app-constants/animations"

export default function Scale({
  active,
  activeAnimation,
  inactiveAnimation,
  Component,
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

  const animatedStyle = {
    transform: [{ scale: interpolate(val, scaleOutputRange) }],
    opacity: interpolate(val, opacityOutputRange)
  }

  if (!Boolean(Component)) return children(animatedStyle)

  return (
    <Component style={[style, animatedStyle]} {...rest}>
      {children}
    </Component>
  )
}

Scale.defaultProps = {
  activeAnimation: animations.effects.default.IN,
  inactiveAnimation: animations.effects.default.OUT,
  opacityOutputRange: [0.75, 1],
  scaleOutputRange: [0.9, 1.2],
  Component: Animated.View
}
