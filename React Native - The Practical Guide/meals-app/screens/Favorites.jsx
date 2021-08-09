import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function Favorites(props) {
  return (
    <View style={_styles.container}>
      <Text>Favorites</Text>
    </View>
  )
}

const _styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
})
