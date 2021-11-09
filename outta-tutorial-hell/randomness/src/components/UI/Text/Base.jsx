import React from "react"
import { Text, Animated } from "react-native"
import colors from "../../../constants/colors"

export default function Base({
  children,
  type, // 'light', 'italic', 'regular', 'semi-bold', 'semi-bold-italic', 'bold'
  color,
  size,
  elevation,
  letterSpacing,
  shadowColor,
  shadowRadius,
  animated,
  style,
  ...rest
}) {
  const fontFamily = "livvic-" + type
  const shadow = getTextElevation(elevation, shadowColor, shadowRadius)
  const Component = Boolean(animated) ? Animated.Text : Text

  return (
    <Component
      style={[
        { fontFamily, letterSpacing, color, fontSize: size, ...shadow },
        style
      ]}
      {...rest}
    >
      {children}
    </Component>
  )
}

Base.defaultProps = { type: "regular", color: colors.main.PRIMARY, size: 16 }

function getTextElevation(elevation, shadowColor, shadowRadius) {
  return elevation
    ? {
        textShadowOffset: { width: elevation / 2, height: elevation / 2 },
        textShadowRadius: shadowRadius ?? 5,
        textShadowColor: shadowColor ?? colors.background.DARK
      }
    : {}
}
