import React from "react"
import { Animated, View, StyleSheet } from "react-native"
import Base from "./Base"
import colors from "@app-constants/colors"

export default function IconWithCircle({
  type,
  size,
  name,
  color,
  enableAnimation,
  borderColor,
  backgroundColor,
  containerProps,
  containerStyle,
  ...rest
}) {
  const styles = _styles(size, type, borderColor, backgroundColor)
  const Wrapper = enableAnimation ? Animated.View : View

  return (
    <Wrapper style={[styles.container, containerStyle]} {...containerProps}>
      <Base
        size={size}
        name={name}
        animated={enableAnimation}
        color={_getColor(type, color, "main", "PRIMARY")}
        {...rest}
      />
    </Wrapper>
  )
}

IconWithCircle.defaultProps = { containerProps: {} }

const _styles = (size, type, borderColor, backgroundColor) =>
  StyleSheet.create({
    container: {
      position: "relative",
      width: size * 1.75,
      height: size * 1.75,
      borderRadius: size,
      borderWidth: size * 0.1,
      borderColor: _getColor(type, borderColor, "main", "PRIMARY"),
      backgroundColor: _getColor(type, backgroundColor, "accent", "PRIMARY"),
      alignItems: "center",
      justifyContent: "center"
    }
  })

function _getColor(type, colorProp, variantGroup, fallbackVariantType) {
  return (
    colors[variantGroup][type?.toUpperCase()] ??
    colorProp ??
    colors[variantGroup][fallbackVariantType]
  )
}
