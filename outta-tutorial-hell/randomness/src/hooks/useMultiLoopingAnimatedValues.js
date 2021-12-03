import { useEffect, useRef } from "react"
import { Animated } from "react-native"

export default function useMultiLinearAnimatedValues({
  active,
  activeSequences = [],
  inactiveAnimations,
  onActiveStart,
  onInactiveStart,
  onInactiveFinish,
  delayBetweenAnimations = 0,
  startingValue = 0
}) {
  const animVals = useRef(
    new Array(activeSequences.length)
      .fill(null)
      .map(() => new Animated.Value(startingValue))
  ).current

  useEffect(() => {
    if (active) {
      Animated.stagger(
        delayBetweenAnimations,
        activeSequences.map((animationSequenceFn, i) =>
          Animated.loop(Animated.sequence(animationSequenceFn(animVals[i])))
        )
      ).start()
      onActiveStart?.()
    } else if (
      Boolean(inactiveAnimations?.length) &&
      activeSequences.length === inactiveAnimations.length
    ) {
      Animated.parallel(
        inactiveAnimations.map((animationFn, i) => animationFn(animVals[i]))
      ).start(onInactiveFinish)
      onInactiveStart?.()
    }
  }, [active])

  return animVals
}
