import React from "react"
import { View, StyleSheet } from "react-native"
import Aura from "./Aura"
import Base from "./Base"
import colors from "@app-constants/colors"

export default function IconWithAura({
  type, // 'primary', 'secondary'
  size,
  name,
  iconColor,
  aura,
  auraColor,
  borderColor,
  backgroundColor,
  containerStyle,
  iconContainerStyle,
  auraStyle,
  containerProps,
  iconContainerProps,
  iconProps,
  auraProps
}) {
  const color = colors[type?.toUpperCase()]
  const bgColor = colors[`ACCENT_${type?.toUpperCase()}`]
  const styles = _styles(size, color ?? borderColor, bgColor ?? backgroundColor)

  return (
    <View style={[styles.container, containerStyle]} {...containerProps}>
      {aura && (
        <Aura
          radius={size * 0.9}
          color={color ?? auraColor}
          style={auraStyle}
          {...auraProps}
        />
      )}
      <View
        style={[styles.iconContainer, iconContainerStyle]}
        {...iconContainerProps}
      >
        <Base
          size={size}
          name={name}
          color={color ?? iconColor}
          {...iconProps}
        />
      </View>
    </View>
  )
}

IconWithAura.defaultProps = {
  containerProps: {},
  auraProps: {},
  iconContainerProps: {},
  aura: true,
  iconColor: colors.PRIMARY,
  borderColor: colors.PRIMARY,
  auraColor: colors.PRIMARY,
  backgroundColor: colors.ACCENT_PRIMARY
}

const _styles = (size, borderColor, backgroundColor) =>
  StyleSheet.create({
    container: {
      width: size * 1.75,
      height: size * 1.75,
      position: "relative"
    },
    iconContainer: {
      ...StyleSheet.absoluteFill,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: size,
      borderWidth: size * 0.1,
      borderColor,
      backgroundColor
    }
  })
