import React from "react"
import { View, StyleSheet } from "react-native"

export default function Card({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white", // always white bgColor.
    borderRadius: 10,
    // these shadow styles only work on iphone
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 }, // right, top
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // and these ones only on android
    elevation: 5
  }
})
