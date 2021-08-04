import React from "react"
import { View, StyleSheet } from "react-native"
import BoldText from "./BoldText"

export default function Header(props) {
  return (
    <View style={styles.container}>
      <BoldText style={styles.title}>{props.title}</BoldText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center"
  },
  title: { color: "black" }
})
