import React from "react"
import { StyleSheet } from "react-native"
import Base from "./Base"
import AppPressable from "../../UI/Pressable/Root"

export default function PressableOverlay({
  children,
  pressableProps,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  ...rest
}) {
  return (
    <AppPressable
      style={_styles.container}
      {...{ onPress, onPressIn, onPressOut, onLongPress }}
      {...pressableProps}
    >
      <Base {...rest}>{children}</Base>
    </AppPressable>
  )
}

PressableOverlay.defaultProps = { pressableProps: {} }

const _styles = StyleSheet.create({ container: { width: "100%" } })
