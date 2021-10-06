import React, { useEffect } from "react"
import { StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Layout from "@app-components/layout"
import Projects from "@app-components/projects"
import useViewPort from "@app-hooks/useViewPort"
import * as projectsActions from "@app-store/actions/projects"

export default function ProjectsScreen(props) {
  const { vw } = useViewPort()
  const icons = useSelector((state) => state.projects.icons)
  const dispatch = useDispatch()
  add active icon select logic. Try reducer. If not possible, emulate profile
  useEffect(() => {
    dispatch(projectsActions.initializeDataInStore())
  }, [])

  return (
    <Layout.Screen style={_styles.container}>
      <Projects.Menu icons={icons} flexValue={0.18} fontScale={vw(10)} />
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
