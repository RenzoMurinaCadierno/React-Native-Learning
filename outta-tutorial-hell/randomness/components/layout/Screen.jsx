import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import { default as sharedStyles } from "../../constants/styles"
import colors from "../../constants/colors"

export default function Screen({ children, style }) {
  return (
    <LinearGradient
      colors={[colors.background.PRIMARY, colors.background.SECONDARY]}
      style={[sharedStyles.FLEX_CENTER, style]}
    >
      {children}
    </LinearGradient>
  )
}
