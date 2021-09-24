import React from "react"
import { View, Text, StyleSheet } from "react-native"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"

export default function BodyBullet({
  fontScale,
  containerProps,
  containerStyle
}) {
  return (
    <View style={[_styles.container, containerStyle]} {...containerProps}>
      <UI.Icon.WithAura type="secondary" name="bookmark" size={fontScale} />
      <UI.Text></UI.Text>
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1
  }
})
