import { useEffect, useRef } from "react"
import { Animated } from "react-native"
import { animations } from "@app-constants"

export default function useLinearAnimatedValue({
  active,
  activeAnimation = animations.effects.default.IN,
  inactiveAnimation = animations.effects.default.OUT,
  animateWhenActiveOnly,
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
    } else if (inactiveAnimation && !Boolean(animateWhenActiveOnly)) {
      inactiveAnimation(val, finishDelay).start(onInactiveFinish)
      onInactiveStart?.()
    }
  }, [active])

  return val
}
