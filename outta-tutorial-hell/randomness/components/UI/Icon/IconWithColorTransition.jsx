import React, { useRef, useEffect } from "react"
import { Animated } from "react-native"
import colors from "../../../constants/colors"
import withCreateAnimatedComponent from "../../../hoc/withCreateAnimationComponent"
import Base from "./Base"

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
      Animated.timing(color, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(color, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start()
    }
  }, [active])

  return (
    <AnimatedIconBase
      {...rest}
      color={color.interpolate({
        inputRange: [0, 1],
        outputRange: [inactiveColor, activeColor]
      })}
    />
  )
}

IconWithColorTransition.defaultProps = {
  activeColor: colors.PRIMARY,
  inactiveColor: colors.SECONDARY
}
