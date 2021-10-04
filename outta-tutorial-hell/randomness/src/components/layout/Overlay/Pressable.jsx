import React from "react"
import { StyleSheet, Pressable } from "react-native"
import Base from "./Base"
import colors from "@app-constants/colors"

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
    <Pressable
      style={{ width: "100%" }}
      {...{ onPress, onPressIn, onPressOut, onLongPress }}
      {...pressableProps}
    >
      <Base {...rest}>{children}</Base>
    </Pressable>
  )
}

PressableOverlay.defaultProps = {
  pressableProps: { android_ripple: { color: colors.background.DARK } }
}

const _styles = StyleSheet.create({})
