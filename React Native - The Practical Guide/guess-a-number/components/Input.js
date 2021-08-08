import React from "react"
import { TextInput, StyleSheet } from "react-native"

export default function Input({ style, ...otherProps }) {
  return <TextInput {...otherProps} style={[styles.container, style]} />
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    borderRightColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10
  }
})
