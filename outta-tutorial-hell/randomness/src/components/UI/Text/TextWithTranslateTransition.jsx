import React from "react"
import { Animated } from "react-native"
import AppText from "./Base"
import Enhanced from "../../enhanced"
import { useLinearAnimatedValue, useViewPortContext } from "@app-hooks"
import { animations } from "@app-constants"
import { interpolate } from "@app-utils/functions"

export default function TextWithTranslateTransition({
  children,
  active,
  activeAnimation,
  inactiveAnimation,
  orientation,
  translateOutputRange,
  onPress,
  containerStyle,
  containerProps,
  ...rest
}) {
  const { vw, vh } = useViewPortContext()
  const animatedValue = useLinearAnimatedValue({
    active,
    activeAnimation,
    inactiveAnimation
  })
  const Wrapper = onPress ? Enhanced.Animated.Pressable : Animated.View

  return (
    <Wrapper
      style={[
        _createStyles(orientation, animatedValue, vw, vh, translateOutputRange),
        containerStyle
      ]}
      onPress={onPress}
      {...containerProps}
    >
      <AppText {...rest}>{children}</AppText>
    </Wrapper>
  )
}

TextWithTranslateTransition.defaultProps = {
  activeAnimation: animations.texts.translate.IN,
  inactiveAnimation: animations.texts.translate.OUT,
  orientation: "left",
  containerProps: {}
}

function _createStyles(
  orientation,
  animatedValue,
  vw,
  vh,
  translateOutputRange
) {
  const _orientation = orientation.toLowerCase()
  const translateKey =
    _orientation === "top" || _orientation === "bottom"
      ? "translateY"
      : "translateX"

  return {
    position: "absolute",
    opacity: animatedValue,
    transform: [
      {
        [translateKey]: interpolate(
          animatedValue,
          translateOutputRange ??
            _getDefaultTranslateOutputRanges(_orientation, vw, vh)
        )
      }
    ],
    ..._getOrientationStyles(_orientation)
  }
}

function _getDefaultTranslateOutputRanges(orientation, vw, vh) {
  switch (orientation) {
    case "top":
      return [-vh(100), 0]
    case "bottom":
      return [vh(100), 0]
    case "right":
      return [vh(100), 0]
    default:
    case "left":
      return [-vw(100), 0]
  }
}

function _getOrientationStyles(orientation) {
  return orientation === "top" || orientation === "bottom"
    ? { [orientation]: 0, left: 0, right: 0 }
    : { [orientation]: 0, top: 0, bottom: 0 }
}
