import React from "react"
import { StyleSheet, Animated } from "react-native"
import { useLoopingAnimatedValue } from "@app-hooks"
import animations from "@app-constants/animations"

export default function Shadow({
  active,
  activeSequence,
  inactiveAnimation,
  width,
  height,
  style
}) {
  const scale = useLoopingAnimatedValue({
    active,
    activeSequence,
    inactiveAnimation,
    startingValue: 0.6
  })
  const styles = _styles(width, height)

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

Shadow.defaultProps = {
  activeSequence: animations.icons.shadow.ACTIVE_SEQUENCE,
  inactiveAnimation: animations.icons.shadow.OUT
}
