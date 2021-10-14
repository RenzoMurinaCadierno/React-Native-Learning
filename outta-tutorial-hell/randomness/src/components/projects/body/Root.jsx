import React from "react"
import { View, Text, StyleSheet } from "react-native"
// import { default as sharedStyles } from "@app-constants/styles"
import ProjectsList from "./ProjectsList"

export default function Body({ flexValue, style }) {
  return (
    <View style={[_styles.container, { flex: flexValue }, style]}>
      <ProjectsList />
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    // ...sharedStyles.borderElevation.RIGHT,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  }
})
