import React, { useRef, useEffect } from "react"
import { Animated } from "react-native"
import colors from "@constants/colors"
import withCreateAnimatedComponent from "@hoc/withCreateAnimationComponent"
import Base from "./Base"
import { getTimingConfig, interpolate } from "./utils"

const AnimatedIconBase = withCreateAnimatedComponent(Base)

export default function IconWithColorTransition({
  active,
  activeColor,
  inactiveColor,
  ...rest
}) {
  const color = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (active) {
      Animated.timing(
        color,
        getTimingConfig(1, 1000, "inOut", 0, false)
      ).start()
    } else {
      Animated.timing(color, getTimingConfig(0, 500, "inOut", 0, false)).start()
    }
  }, [active])

  return (
    <AnimatedIconBase
      {...rest}
      color={interpolate(color, [0, 1], [inactiveColor, activeColor])}
    />
  )
}

IconWithColorTransition.defaultProps = {
  activeColor: colors.PRIMARY,
  inactiveColor: colors.SECONDARY
}
