import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
// import { default as sharedStyles } from "@app-constants/styles"
import ProjectsList from "./ProjectsList"

export default function Body({ flexValue, style }) {
  const items = useSelector((state) => state.projects.items)

  return (
    <View style={[_styles.container, { flex: flexValue }, style]}>
      <ProjectsList items={items} />
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
