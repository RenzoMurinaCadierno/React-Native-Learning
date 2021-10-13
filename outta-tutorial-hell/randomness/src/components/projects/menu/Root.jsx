import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet } from "react-native"
import IconList from "./IconList"
import colors from "@app-constants/colors"
import { default as sharedStyles } from "@app-constants/styles"

export default function Root({ flexValue, fontScale, style, onIconPress }) {
  return (
    <LinearGradient
      colors={[colors.background.CONTRAST, colors.main.SECONDARY_ALPHA(0.2)]}
      style={[_styles.container, { flex: flexValue }, style]}
    >
      <IconList fontScale={fontScale} onIconPress={onIconPress} />
    </LinearGradient>
  )
}

const _styles = StyleSheet.create({
  container: {
    ...sharedStyles.borderElevation.RIGHT
    // flex: 1
  }
})
