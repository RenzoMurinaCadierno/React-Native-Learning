import React from "react"
import { StyleSheet } from "react-native"
import Layout from "@app-components/layout"
import Projects from "@app-components/projects"
import Context from "@app-context"

export default function ProjectsScreen() {
  return (
    <Layout.Screen style={_styles.container}>
      <Context.Projects.Menu.Provider>
        <Projects.Menu flexValue={0.18} />
      </Context.Projects.Menu.Provider>
      <Context.Projects.Body.Provider>
        <Projects.Body flexValue={0.82} />
      </Context.Projects.Body.Provider>
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
