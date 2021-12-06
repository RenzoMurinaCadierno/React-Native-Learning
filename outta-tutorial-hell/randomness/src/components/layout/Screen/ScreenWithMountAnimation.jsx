import React from "react"
import Enhanced from "@app-components/enhanced"
import { colors, styles as sharedStyles } from "@app-constants"
import { useScaleTransition } from "@app-hooks"

export default function ScreenWithMountAnimation({ children, style }) {
  const animatedScaleStyle = useScaleTransition({
    active: true,
    inactiveScaleValue: 1.05
  })

  return (
    <Enhanced.Animated.LinearGradient
      colors={[colors.background.PRIMARY, colors.background.SECONDARY]}
      style={[sharedStyles.FLEX_CENTER, animatedScaleStyle, style]}
    >
      {children}
    </Enhanced.Animated.LinearGradient>
  )
}
