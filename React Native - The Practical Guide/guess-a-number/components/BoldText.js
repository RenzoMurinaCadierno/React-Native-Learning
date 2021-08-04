import React from "react"
import { Text, StyleSheet } from "react-native"

export default function BoldText({ children, style, ...otherProps }) {
  return (
    <Text style={{ ...styles.container, ...style }} {...otherProps}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  container: { fontFamily: "open-sans-bold", fontSize: 20 }
})
