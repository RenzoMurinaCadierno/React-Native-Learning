import { useEffect, useRef } from "react"
import { Animated } from "react-native"

export default function useLinearAnimatedValue({
  active,
  activeAnimation,
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
