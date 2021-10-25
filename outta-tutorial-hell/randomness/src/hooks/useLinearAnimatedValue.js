import { useEffect, useRef } from "react"
import { Animated } from "react-native"
import animations from "@app-constants/animations"

export default function useLinearAnimatedValue({
  active,
  activeAnimation = animations.effects.default.IN,
  inactiveAnimation,
  startingValue = 0,
  startDelay,
  finishDelay,
  onActiveStart,
  onInactiveStart,
  onActiveFinish,
  onInactiveFinish
}) {
  const val = useRef(new Animated.Value(startingValue)).current

  useEffect(() => {
    if (active) {
      activeAnimation(val, startDelay).start(onActiveFinish)
      onActiveStart?.()
    } else if (inactiveAnimation) {
      inactiveAnimation(val, finishDelay).start(onInactiveFinish)
      onInactiveStart?.()
    }
  }, [active])

  return val
}
