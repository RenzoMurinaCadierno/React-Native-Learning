import { useEffect, useRef } from "react"
import { Animated } from "react-native"
import animations from "@app-constants/animations"

export default function useLinearAnimatedValue({
  active,
  activeAnimation = animations.effects.default.IN,
  inactiveAnimation,
  startingValue = 0
}) {
  const val = useRef(new Animated.Value(startingValue)).current

  useEffect(() => {
    if (active) activeAnimation(val).start()
    else if (inactiveAnimation) inactiveAnimation(val).start()
  }, [active])

  return val
}
