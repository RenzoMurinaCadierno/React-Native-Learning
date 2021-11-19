import React from "react"
import Enhanced from "@app-components/enhanced"

export default function ArrowBase({ direction, style, ...rest }) {
  return (
    <Enhanced.Animated.Ionicons
      {...rest}
      style={[{ transform: _getRotation(direction) }, style]}
    />
  )
}

ArrowBase.defaultProps = {
  direction: "right", // up, down, left, right
  name: "play",
  size: 12,
  color: "black"
}

function _getRotation(direction) {
  switch (direction?.toLowerCase()) {
    case "up":
      return [{ rotate: "-90deg" }]
    case "down":
      return [{ rotate: "90deg" }]
    case "left":
      return [{ rotate: "180deg" }]
    case "right":
    default:
      return [{ rotate: "0deg" }]
  }
}
