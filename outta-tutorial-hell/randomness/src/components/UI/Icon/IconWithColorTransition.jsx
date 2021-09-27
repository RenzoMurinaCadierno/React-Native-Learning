import React, { useRef, useEffect } from "react"
import { Animated } from "react-native"
import colors from "@app-constants/colors"
import Enhanced from "@app-components/enhanced"
import { interpolate, getTimingConfig } from "./utils"

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
    <Enhanced.Animated.BaseIcon
      {...rest}
      color={interpolate(color, [0, 1], [inactiveColor, activeColor])}
    />
  )
}

IconWithColorTransition.defaultProps = {
  activeColor: colors.PRIMARY,
  inactiveColor: colors.SECONDARY
}
