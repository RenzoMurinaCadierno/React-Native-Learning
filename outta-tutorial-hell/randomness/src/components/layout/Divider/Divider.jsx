import React from "react"
import { View, StyleSheet } from "react-native"
import sharedStyles from "@app-constants/styles"

export default function Divider({ style, ...rest }) {
  return <View style={[_styles.container, style]} {...rest} />
}

const _styles = StyleSheet.create({
  container: { ...sharedStyles.ELEVATION_SUBTLE, width: "100%" }
})
