import React from "react"
import { StyleSheet, View, Text } from "react-native"
import colors from "../constants/colors"

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.SECONDARY,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.SECONDARY,
    fontSize: 22
  }
})
