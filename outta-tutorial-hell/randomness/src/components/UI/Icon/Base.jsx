import React from "react"
import { Ionicons } from "@expo/vector-icons"
import colors from "@constants/colors"

export default function Base({ iconStyle, size, color, ...rest }) {
  return <Ionicons size={size} color={color} style={iconStyle} {...rest} />
}

Base.defaultProps = { color: colors.PRIMARY, size: 18 }
