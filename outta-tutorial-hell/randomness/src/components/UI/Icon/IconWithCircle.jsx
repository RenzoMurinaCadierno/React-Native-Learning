import React from "react"
import { View, StyleSheet } from "react-native"
import Base from "./Base"
import colors from "@app-constants/colors"

function IconWithCircle({
  type,
  size,
  name,
  color,
  borderColor,
  backgroundColor,
  containerProps,
  containerStyle,
  ...rest
}) {
  const styles = _styles(size, type, borderColor, backgroundColor)

  return (
    <View style={[styles.container, containerStyle]} {...containerProps}>
      <Base
        size={size}
        name={name}
        color={_getColor(type, color, "main", "PRIMARY")}
        {...rest}
      />
    </View>
  )
}

IconWithCircle.defaultProps = { type: "primary", containerProps: {} }

export default React.memo(IconWithCircle)

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
