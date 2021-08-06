import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import colors from "../constants/colors"

export default function MainButton({
  children,
  onPress,
  styles = {},
  ...rest
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={{ ..._styles.container, ...styles.container }}
      onPress={onPress}
      {...rest}
    >
      <View style={{ ..._styles.view, ...styles.view }}>
        <Text style={{ ..._styles.text, ...styles.text }}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const _styles = StyleSheet.create({
  container: {},
  view: {
    backgroundColor: colors.PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  text: { color: "white", fontFamily: "open-sans", fontSize: 18 }
})
