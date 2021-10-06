import React, { useEffect, useRef, useState } from "react"
import { Animated } from "react-native"

export default function useAnimationLogic({
  active,
  activeAnimationType = "spring",
  inactiveAnimationType = "spring",
  activeAnimationConfig = _getSpringConfig(1),
  inActiveAnimationConfig = _getSpringConfig(0)
}) {
  const val = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (active) {
      Animated[activeAnimationType](val, activeAnimationConfig).start()
    } else {
      Animated[inactiveAnimationType](val, inActiveAnimationConfig).start()
    }
  }, [active])

  return val
}

function _getSpringConfig(toValue) {
  return {
    toValue,
    duration: 1000,
    speed: 20,
    bounciness: 20,
    useNativeDriver: true
  }
}
