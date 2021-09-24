import React from "react"
import { Text } from "react-native"
import colors from "../../../constants/colors"

export default function AppText({
  children,
  type, // 'light', 'italic', 'regular', 'semi-bold', 'bold'
  color,
  size,
  elevation,
  shadowColor,
  shadowRadius,
  style,
  ...rest
}) {
  const fontFamily = "livvic-" + type
  const shadow = getTextElevation(elevation, shadowColor, shadowRadius)

  return (
    <Text
      style={[{ fontFamily, color, fontSize: size, ...shadow }, style]}
      {...rest}
    >
      {children}
    </Text>
  )
}

AppText.defaultProps = { type: "regular", color: colors.PRIMARY, size: 16 }

function getTextElevation(elevation, shadowColor, shadowRadius) {
  return elevation
    ? {
        textShadowOffset: { width: elevation / 2, height: elevation / 2 },
        textShadowRadius: shadowRadius ?? 5,
        textShadowColor: shadowColor ?? colors.background.DARK
      }
    : {}
}
