import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import { colors, styles as sharedStyles } from "@app-constants"

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
