import { useEffect, useRef } from "react"
import { Animated } from "react-native"

export default function useMultiLinearAnimatedValues({
  active,
  activeAnimations = [],
  inactiveAnimations,
  onActiveStart,
  onInactiveStart,
  onActiveFinish,
  onInactiveFinish,
  startingValue = 0
}) {
  const animVals = useRef(
    new Array(activeAnimations.length)
      .fill(null)
      .map(() => new Animated.Value(startingValue))
  ).current

  useEffect(() => {
    if (active) {
      Animated.parallel(
        activeAnimations.map((animationFn, i) => animationFn(animVals[i]))
      ).start(onActiveFinish)
      onActiveStart?.()
    } else if (
      Boolean(inactiveAnimations.length) &&
      activeAnimations.length === inactiveAnimations.length
    ) {
      Animated.parallel(
        inactiveAnimations.map((animationFn, i) => animationFn(animVals[i]))
      ).start(onInactiveFinish)
      onInactiveStart?.()
    }
  }, [active])

  return animVals
}
