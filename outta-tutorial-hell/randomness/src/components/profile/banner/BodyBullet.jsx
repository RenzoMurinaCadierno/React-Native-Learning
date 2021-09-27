import React from "react"
import { View, Text, StyleSheet } from "react-native"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"

export default function BodyBullet({
  text,
  sideText,
  iconName,
  iconType,
  fontScale,
  containerProps,
  containerStyle
}) {
  return (
    <View style={[_styles.container, containerStyle]} {...containerProps}>
      <UI.Icon.WithAura type={iconType} name={iconName} size={fontScale} />
      <View style={_styles.textsContainer}>
        <UI.Text>{text}</UI.Text>
        <UI.Text>{sideText}</UI.Text>
      </View>
    </View>
  )
}
go on here
const _styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1
  },
  textsContainer: { flex: 1 }
})
