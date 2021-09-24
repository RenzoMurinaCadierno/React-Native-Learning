import React, { useRef, useEffect } from "react"
import { Animated } from "react-native"
import Enhanced from "@app-components/enhanced"

export default function SwipeArrows(props) {
  const vals = useRef({
    arrowOne: new Animated.Value(0),
    arrowTwo: new Animated.Value(0),
    arrowThree: new Animated.Value(0)
  }).current

  const animations = useRef(
    Animated.parallel([
      Animated.sequence([_getLoopAnim(vals.arrowOne)]),
      Animated.sequence([Animated.delay(200), _getLoopAnim(vals.arrowTwo)]),
      Animated.sequence([Animated.delay(400), _getLoopAnim(vals.arrowThree)])
    ])
  ).current

  useEffect(animations.start, [])

  return Object.values(vals).map((val, i) => (
    <Enhanced.Animated.Ionicons
      key={i}
      {...props}
      style={{
        opacity: _interpolate(val, [0, 1, 0]),
        transform: [{ scale: _interpolate(val, [0.5, 1, 0.5]) }]
      }}
    />
  ))
}

SwipeArrows.defaultProps = {
  name: "play",
  size: 12,
  color: "black",
  animationDelay: 0
}

function _getTimingConfig(toValue) {
  return { toValue, delay: 200, duration: 2000, useNativeDriver: true }
}

function _getLoopAnim(value) {
  return Animated.loop(
    Animated.timing(value, _getTimingConfig(2)),
    Animated.timing(value, _getTimingConfig(0))
  )
}

function _interpolate(value, outputRange) {
  return value.interpolate({ inputRange: [0, 1, 2], outputRange })
}
