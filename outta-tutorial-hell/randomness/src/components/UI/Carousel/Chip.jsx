import React from "react"
import { Animated } from "react-native"
import AppText from "../Text/Base"
import { useViewPortContext, useScaleTransition } from "@app-hooks"
import colors from "@app-constants/colors"

export default function Chip({
  length,
  index,
  anchor,
  containerStyle,
  containerProps,
  ...rest
}) {
  const { vw } = useViewPortContext()
  const _style = _getStyles(anchor, vw)
  const transitionStyle = useScaleTransition({
    active: true,
    inactiveScaleValue: 1.25
  })

  return (
    <Animated.View
      style={[_style, transitionStyle, containerStyle]}
      {...containerProps}
    >
      <AppText color={colors.background.CONTRAST} {...rest}>
        {index}/{length}
      </AppText>
    </Animated.View>
  )
}

Chip.defaultProps = { index: 0, length: 0 }

function _getStyles(anchor, vw) {
  return { ..._getDefaultStyles(vw), ..._getAnchorStyles(anchor, vw) }
}

function _getDefaultStyles(vw) {
  return {
    position: "absolute",
    backgroundColor: colors.background.DARK_ALPHA(0.5),
    borderRadius: vw(5),
    paddingHorizontal: vw(3),
    paddingVertical: vw(1)
  }
}

function _getAnchorStyles(anchor, vw) {
  switch (anchor) {
    case "top-left":
      return { top: vw(2), left: vw(2) }
    case "bottom-right":
      return { bottom: vw(2), right: vw(2) }
    case "bottom-left":
      return { bottom: vw(2), left: vw(2) }
    default:
      return { top: vw(2), right: vw(2) }
  }
}
