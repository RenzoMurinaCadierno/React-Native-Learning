import React from "react"
import { Pressable } from "react-native"
import colors from "@app-constants/colors"

export default function AppPressable({ color, radius, children, ...rest }) {
  return (
    <Pressable android_ripple={{ color, radius }} {...rest}>
      {children}
    </Pressable>
  )
}

AppPressable.defaultProps = { color: colors.background.DARK }
