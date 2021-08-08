import React from "react"
import { View, StyleSheet, Platform } from "react-native"
import BoldText from "./BoldText"
import colors from "../constants/colors"

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
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        backgroundColor: "white",
        borderBottomColor: "gray",
        borderBottomWidth: 1
      },
      android: { backgroundColor: colors.SECONDARY }
    })
  },
  title: { color: Platform.OS === "ios" ? colors.PRIMARY : "white" }
})
