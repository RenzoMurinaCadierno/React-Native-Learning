import { useEffect, useRef, useState } from "react"
import { Animated } from "react-native"

export default function useLoopingAnimatedValue({
  active,
  activeSequence,
  inactiveAnimation,
  onStart,
  onInactiveAnimationFinish,
  onFinish,
  startingValue = 0
}) {
  const [isAnimationActive, setIsAnimationActive] = useState(false)
  const val = useRef(new Animated.Value(startingValue)).current

  useEffect(() => {
    if (active) {
      Animated.loop(Animated.sequence(activeSequence(val))).start()
      setIsAnimationActive(true)
      onStart?.()
    } else if (isAnimationActive) {
      if (inactiveAnimation) {
        inactiveAnimation(val).start((finished) => {
          setIsAnimationActive(false)
          onInactiveAnimationFinish?.(finished)
        })
      } else {
        setIsAnimationActive(false)
      }
      onFinish?.()
    }
  }, [active])

  return val
}
