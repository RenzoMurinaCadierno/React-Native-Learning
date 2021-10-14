import React from "react"
import colors from "@app-constants/colors"
import Enhanced from "@app-components/enhanced"
import Color from "../Animation/Color"

export default function IconWithColorTransition({
  active,
  activeColor,
  inactiveColor,
  colorProps,
  ...rest
}) {
  return (
    <Color {...{ active, inactiveColor, activeColor, ...colorProps }}>
      {(animatedColor) => (
        <Enhanced.Animated.BaseIcon {...rest} color={animatedColor} />
      )}
    </Color>
  )
}

IconWithColorTransition.defaultProps = {
  activeColor: colors.main.PRIMARY,
  inactiveColor: colors.main.SECONDARY,
  colorProps: {}
}
