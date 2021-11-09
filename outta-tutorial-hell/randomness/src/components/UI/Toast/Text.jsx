import React from "react"
import { StyleSheet, View, Pressable } from "react-native"
import AppText from "../Text/Base"

export default function Text({
  children,
  onPressText,
  ContainerComponent,
  size,
  containerStyle,
  containerProps,
  ...rest
}) {
  const Container = ContainerComponent ?? onPressText ? Pressable : View

  return (
    <Container
      style={[_styles.container, containerStyle]}
      onPress={onPressText}
      {...containerProps}
    >
      <AppText
        size={size}
        type="semi-bold"
        elevation={size / 8}
        letterSpacing={size / 25}
        {...rest}
      >
        {children}
      </AppText>
    </Container>
  )
}

Text.defaultProps = { size: 18 }

const _styles = StyleSheet.create({ container: { flex: 0 } })
