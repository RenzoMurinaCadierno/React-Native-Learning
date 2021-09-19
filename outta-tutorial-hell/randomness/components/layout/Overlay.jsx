import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { StyleSheet } from "react-native"
import colors from "../../constants/colors"

export default function Overlay({ children, style, colors, ...rest }) {
  return (
    <LinearGradient
      colors={colors}
      style={[_styles.container, style]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      locations={[0.4, 1]}
      {...rest}
    >
      {children}
    </LinearGradient>
  )
}

Overlay.defaultProps = {
  colors: [colors.background.SECONDARY, colors.background.CONTRAST]
}

const _styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    opacity: 0.5,
    elevation: 5,
    width: "100%",
    paddingVertical: 5
  }
})