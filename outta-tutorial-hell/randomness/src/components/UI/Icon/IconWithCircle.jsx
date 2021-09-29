import React from "react"
import { View, StyleSheet } from "react-native"
import Aura from "./Aura"
import Base from "./Base"
import colors from "@app-constants/colors"

export default function IconWithCircle({
  size,
  name,
  color,
  aura = true,
  borderColor,
  backgroundColor,
  containerProps,
  containerStyle,
  ...rest
}) {
  const styles = _styles(size, borderColor, backgroundColor)

  return (
    <View
      // android_ripple={{ radius: size * 0.9, borderless: true }}
      style={[styles.container, containerStyle]}
      {...containerProps}
    >
      {aura && <Aura radius={size * 0.9} />}
      <Base
        size={size}
        name={name}
        color={color}
        // style={StyleSheet.absoluteFill}
        {...rest}
      />
    </View>
  )
}

IconWithCircle.defaultProps = {
  color: colors.main.SECONDARY,
  borderColor: colors.main.SECONDARY,
  backgroundColor: "white"
  // containerProps: { onPress: () => {} }
}

const _styles = (size, borderColor, backgroundColor) =>
  StyleSheet.create({
    container: {
      width: size * 1.75,
      height: size * 1.75,
      borderRadius: size,
      borderWidth: size * 0.1,
      borderColor: borderColor,
      backgroundColor: backgroundColor ?? colors.main.SECONDARY_ALPHA(0.1),
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  })
