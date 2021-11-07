import React from "react"
import * as VectorIcons from "@expo/vector-icons"
import Enhanced from "../../enhanced"
import colors from "@app-constants/colors"

export default function Base({ size, color, animated, vector, ...rest }) {
  const Component = Boolean(animated)
    ? Enhanced.Animated[vector]
    : VectorIcons[vector]

  return <Component size={size} color={color} {...rest} />
}

Base.defaultProps = { color: colors.main.PRIMARY, size: 18, vector: "Ionicons" }
