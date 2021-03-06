import React from "react"
import Enhanced from "@app-components/enhanced"
import { useLinearAnimatedValue } from "@app-hooks"
import { animations } from "@app-constants"
import { interpolate } from "@app-utils/functions"

export default function AnimatedRoot({
  active,
  activeAnimation,
  inactiveAnimation,
  translateYOutputRange,
  index,
  children,
  ...rest
}) {
  const val = useLinearAnimatedValue({
    active,
    activeAnimation,
    inactiveAnimation,
    startDelay: index * 200
  })

  return (
    <Enhanced.Animated.Card
      style={{ translateY: interpolate(val, translateYOutputRange) }}
      {...rest}
    >
      {children}
    </Enhanced.Animated.Card>
  )
}

AnimatedRoot.defaultProps = {
  activeAnimation: animations.card.transition.IN,
  inactiveAnimation: animations.card.transition.OUT,
  translateYOutputRange: [750, 0]
}
