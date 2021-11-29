import React, { useContext } from "react"
import { View, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
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
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  }
})
