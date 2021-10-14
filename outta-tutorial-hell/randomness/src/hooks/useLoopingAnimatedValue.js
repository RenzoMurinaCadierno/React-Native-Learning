import { useEffect, useRef, useState } from "react"
import { Animated } from "react-native"

export default function useLoopingAnimatedValue({
  active,
  activeSequence,
  inactiveAnimation,
  startingValue = 0
}) {
  const [isAnimationActive, setIsAnimationActive] = useState(false)
  const val = useRef(new Animated.Value(startingValue)).current

  useEffect(() => {
    if (active) {
      Animated.loop(Animated.sequence(activeSequence(val))).start()
      setIsAnimationActive(true)
    } else if (isAnimationActive) {
      if (inactiveAnimation) {
        inactiveAnimation(val).start(() => setIsAnimationActive(false))
      } else {
        setIsAnimationActive(false)
      }
    }
  }, [active])

  return val
}
