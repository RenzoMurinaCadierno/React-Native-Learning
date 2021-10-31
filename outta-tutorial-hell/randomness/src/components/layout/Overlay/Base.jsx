import React from "react"
import { StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import Enhanced from "@app-components/enhanced"
import colors from "@app-constants/colors"

export default function Base({ animated, children, style, colors, ...rest }) {
  const Component = animated ? Enhanced.Animated.LinearGradient : LinearGradient

  return (
    <Component
      colors={colors}
      style={[_styles.container, style]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      locations={[0.4, 1]}
      {...rest}
    >
      {children}
    </Component>
  )
}

Base.defaultProps = {
  colors: [colors.background.SECONDARY, colors.background.CONTRAST]
}

const _styles = StyleSheet.create({
  container: {
    opacity: 0.9,
    width: "100%",
    paddingVertical: "1.25%"
  }
})
