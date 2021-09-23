import React, { useEffect, useRef } from "react"
import { StyleSheet, Animated, Easing } from "react-native"
import colors from "@constants/colors"

export default function Aura({ style, radius, color, ...rest }) {
  const val = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(val, getTimingConfig(1.4, 2000)),
        Animated.timing(val, getTimingConfig(1, 0))
      ])
    ).start()
  }, [])

  return (
    <Animated.View
      style={[
        {
          ...StyleSheet.absoluteFill,
          // zIndex: 0,
          backgroundColor: color,
          borderRadius: radius,
          opacity: val.interpolate({
            inputRange: [1, 1.4],
            outputRange: [1, 0.1]
          }),
          transform: [{ scale: val }]
        },
        style
      ]}
      {...rest}
    />
  )
}

Aura.defaultProps = { color: colors.PRIMARY }

function getTimingConfig(toValue, duration) {
  return { toValue, duration, easing: Easing.linear, useNativeDriver: true }
}
