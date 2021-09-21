import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function Body({ fontScale, flexValue, style }) {
  return (
    <View style={[_styles.container, { flex: flexValue }, style]}>
      <Text>Body</Text>
      <View style={_styles.footer}>
        <Ionicons name="play" size={fontScale} />
        <Ionicons name="play" size={fontScale} />
        <Ionicons name="play" size={fontScale} />
      </View>
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%"
  },
  footer: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: "2%",
    borderWidth: 1
  }
})
