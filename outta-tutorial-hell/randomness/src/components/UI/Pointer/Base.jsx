import React from "react"
import Enhanced from "@app-components/enhanced"
import { useLoopingAnimatedValue } from "@app-hooks"
import animations from "@app-constants/animations"
import { interpolate012 } from "@app-utils/functions"

export default function PointerBase({
  active,
  activeSequence,
  inactiveAnimation,
  direction,
  style,
  ...rest
}) {
  const loopAnimVal = useLoopingAnimatedValue({
    active,
    activeSequence,
    inactiveAnimation
  })

  return (
    <Enhanced.Animated.MaterialCommunityIcons
      name={`arrow-${direction.toLowerCase()}-bold-outline`}
      style={[
        { transform: [{ scale: interpolate012(loopAnimVal, [0, 0.8, 1.2]) }] },
        style
      ]}
      {...rest}
    />
  )
}

PointerBase.defaultProps = {
  direction: "bottom-right", // (bottom|top)-right, (bottom|top)-left, up, down, left, right
  name: "arrow-bottom-right-bold-outline",
  size: 28,
  color: "black",
  activeSequence: animations.arrows.pointer.ACTIVE_SEQUENCE,
  inactiveAnimation: animations.arrows.pointer.OUT
}
