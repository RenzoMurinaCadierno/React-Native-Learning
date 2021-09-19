import React, { useEffect, useRef } from "react"
import { StyleSheet, Animated, Easing } from "react-native"

export default function Shadow({ width, height, style }) {
  const scale = useRef(new Animated.Value(0.5)).current
  const styles = _styles(width, height)

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true
        }),
        Animated.delay(200),
        Animated.timing(scale, {
          toValue: 0.6,
          duration: 1000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true
        }),
        Animated.delay(200)
      ])
    ).start()
  }, [])

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale }] }, style]}
    />
  )
}

const _styles = (width, height) =>
  StyleSheet.create({
    container: {
      width,
      height,
      borderRadius: width / 2,
      elevation: 4
    }
  })
