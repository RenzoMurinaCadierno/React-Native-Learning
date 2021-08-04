import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function TextItem({ children, onDeleteText }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDeleteText}>
      <View style={styles.container}>
        <Text>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderColor: "crimson",
    borderWidth: 1
  }
})
