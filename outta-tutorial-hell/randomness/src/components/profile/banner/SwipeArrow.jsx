import React, { useRef, useEffect } from "react"
import { Animated } from "react-native"
import Enhanced from "@components/enhanced"

export default function SwipeArrow({ animationDelay, ...rest }) {
  const val = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.sequence([
      Animated.delay(animationDelay),
      Animated.loop(
        Animated.timing(val, getTimingConfig(2)),
        Animated.timing(val, getTimingConfig(0))
      )
    ]).start()
  }, [])

  return (
    <Enhanced.Animated.Ionicons
      {...rest}
      style={{
        opacity: val.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [0, 1, 0]
        }),
        transform: [
          {
            scale: val.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [0.5, 1, 0.5]
            })
          }
        ]
      }}
    />
  )
}

SwipeArrow.defaultProps = {
  name: "play",
  size: 12,
  color: "black",
  animationDelay: 0
}

function getTimingConfig(toValue) {
  return { toValue, delay: 200, duration: 2000, useNativeDriver: true }
}
