import React from "react"
import { Text, StyleSheet } from "react-native"

export default function DefaultText({ children }) {
  return <Text style={_styles.container}>{children}</Text>
}

const _styles = StyleSheet.create({ container: { fontFamily: "open-sans" } })
