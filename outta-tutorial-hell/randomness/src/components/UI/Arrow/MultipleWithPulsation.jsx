import React from "react"
import { View, Animated } from "react-native"
import Base from "./Base"
import useMultiLinearAnimatedValues from "@app-hooks/useMultiLinearAnimatedValues"
import animations from "@app-constants/animations"
import { interpolate012 } from "@app-utils/functions"

function MultipleWithPulsation({
  show,
  direction,
  activeAnimations,
  inactiveAnimations,
  containerStyle,
  containerProps,
  contentContainerStyle,
  contentContainerProps,
  ...rest
}) {
  const animatedValues = useMultiLinearAnimatedValues({
    active: show,
    activeAnimations,
    inactiveAnimations
  })

  return (
    <View
      style={[_getContainerStyle(direction), containerStyle]}
      {...containerProps}
    >
      {animatedValues.map((animValue, i) => (
        <Animated.View
          key={i}
          style={[
            {
              opacity: interpolate012(animValue, [0, 1, 0]),
              transform: [{ scale: interpolate012(animValue, [0.5, 1, 0.5]) }]
            },
            contentContainerStyle
          ]}
          {...contentContainerProps}
        >
          <Base key={i} direction={direction} {...rest} />
        </Animated.View>
      ))}
    </View>
  )
}

MultipleWithPulsation.defaultProps = {
  direction: "right",
  activeAnimations: animations.arrows.directional.ACTIVE_SEQUENCE,
  contentContainerProps: {},
  containerProps: {}
}

export default React.memo(MultipleWithPulsation)

function _getContainerStyle(direction) {
  switch (direction?.toLowerCase()) {
    case "up":
    case "down":
      return { flexDirection: "column", justifyContent: "space-between" }
    default:
      return { flexDirection: "row", justifyContent: "space-between" }
  }
}
