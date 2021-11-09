import React from "react"
import { Animated, View, StyleSheet } from "react-native"
import Base from "./Base"
import { Color } from "@app-utils/functions"

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
  const Container = enableAnimation ? Animated.View : View

  return (
    <Container style={[styles.container, containerStyle]} {...containerProps}>
      <Base
        size={size}
        name={name}
        animated={enableAnimation}
        color={Color.getByTypeOrProp(type, color)}
        {...rest}
      />
    </Container>
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
      borderColor: Color.getByTypeOrProp(type, borderColor),
      backgroundColor: Color.getByTypeOrProp(type, backgroundColor, "accent"),
      alignItems: "center",
      justifyContent: "center"
    }
  })
