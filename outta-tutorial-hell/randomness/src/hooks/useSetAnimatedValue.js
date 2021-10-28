import { useRef, useEffect } from "react"
import { Animated } from "react-native"

export default function useSetAnimatedValue(value) {
  const val = useRef(new Animated.Value(value)).current

  useEffect(() => {
    val.setValue(value)
  }, [value])

  return val
}
