import React from "react"
import { StyleSheet } from "react-native"
import Layout from "@app-components/layout"
import Projects from "@app-components/projects"
import useViewPortContext from "@app-hooks/useViewPortContext"

export default function ProjectsScreen() {
  const { vw } = useViewPortContext()

  return (
    <Layout.Screen style={_styles.container}>
      <Projects.Menu flexValue={0.18} fontScale={vw(10)} />
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
