import React from "react"
import { View, StyleSheet } from "react-native"

export default function Separator({ style, flexValue, children }) {
  return (
    <View style={[_styles.container, { flex: flexValue }, style]}>
      {children}
    </View>
  )
}

const _styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center", justifyContent: "center" }
})
