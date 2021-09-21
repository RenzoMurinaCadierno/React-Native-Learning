import React from "react"
import { Text } from "react-native"
import colors from "../../../constants/colors"

export default function AppText({
  children,
  family,
  color,
  size,
  style,
  ...rest
}) {
  const fontFamily = "livvic-" + family

  return (
    <Text style={[{ fontFamily, color, fontSize: size }, style]} {...rest}>
      {children}
    </Text>
  )
}

AppText.defaultProps = { family: "regular", color: colors.PRIMARY, size: 16 }
