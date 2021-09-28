import React, { useRef, useEffect } from "react"
import { Animated, View } from "react-native"
import Enhanced from "@app-components/enhanced"

export default function SwipeArrows({ direction, ...rest }) {
  const vals = useRef({
    arrowOne: new Animated.Value(0),
    arrowTwo: new Animated.Value(0),
    arrowThree: new Animated.Value(0)
  }).current

  useEffect(() => {
    Animated.parallel([
      Animated.sequence([_getLoopAnim(vals.arrowOne)]),
      Animated.sequence([Animated.delay(200), _getLoopAnim(vals.arrowTwo)]),
      Animated.sequence([Animated.delay(400), _getLoopAnim(vals.arrowThree)])
    ]).start()
  }, [])

  return (
    <View style={_getContainerStyle(direction)}>
      {Object.values(vals).map((val, i) => (
        <Enhanced.Animated.Ionicons
          key={i}
          {...rest}
          style={{
            opacity: _interpolate(val, [0, 1, 0]),
            transform: [
              _getRotation(direction),
              { scale: _interpolate(val, [0.5, 1, 0.5]) }
            ]
          }}
        />
      ))}
    </View>
  )
}

SwipeArrows.defaultProps = {
  direction: "right", // up, down, left, right
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

function _getContainerStyle(direction) {
  switch (direction.toLowerCase()) {
    case "up":
    case "down":
      return {
        flexDirection: "column",
        justifyContent: "space-between"
      }
    default:
      return { flexDirection: "row", justifyContent: "space-between" }
  }
}

function _getRotation(direction) {
  switch (direction.toLowerCase()) {
    case "up":
      return { rotate: "-90deg" }
    case "down":
      return { rotate: "90deg" }
    case "left":
      return { rotate: "180deg" }
    case "right":
    default:
      return { rotate: "0deg" }
  }
}
