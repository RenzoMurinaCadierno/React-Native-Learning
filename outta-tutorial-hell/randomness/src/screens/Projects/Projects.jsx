import React from "react"
import { StyleSheet } from "react-native"
import Layout from "@app-components/layout"
import Projects from "@app-components/projects"

export default function ProjectsScreen({ route }) {
  console.log(route.params)
  target activeIcon (not section), dispatch on mount if bullet press 
  return (
    <Layout.Screen style={_styles.container}>
      <Projects.Menu flexValue={0.18} />
      <Projects.Body flexValue={0.82} />
    </Layout.Screen>
  )
}
const _styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "row"
  }
})
