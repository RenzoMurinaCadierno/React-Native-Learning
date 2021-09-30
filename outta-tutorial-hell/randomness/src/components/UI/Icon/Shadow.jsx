import React, { useEffect, useRef } from "react"
import { StyleSheet, Animated } from "react-native"
import { getTimingConfig } from "./utils"

export default function Shadow({
  syncWithHoverAnimation,
  width,
  height,
  style
}) {
  const scale = useRef(new Animated.Value(0.6)).current
  const styles = _styles(width, height)

  useEffect(() => {
    if (syncWithHoverAnimation) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scale, getTimingConfig(1, 1000, "out")),
          Animated.timing(scale, getTimingConfig(0.6, 1000, "in"))
        ])
      ).start()
    } else {
      Animated.timing(scale, getTimingConfig(0.6, 500, "out")).start()
    }
  }, [syncWithHoverAnimation])

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale }] }, style]}
    />
  )
}

const _styles = (width, height) =>
  StyleSheet.create({
    container: { width, height, borderRadius: width / 2, elevation: 4 }
  })
