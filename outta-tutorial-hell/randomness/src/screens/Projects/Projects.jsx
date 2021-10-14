import React, { useEffect, useCallback } from "react"
import { StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import Layout from "@app-components/layout"
import Projects from "@app-components/projects"
import useViewPort from "@app-hooks/useViewPort"
import * as projectsActions from "@app-store/actions/projects"

export default function ProjectsScreen(props) {
  const { vw } = useViewPort()

  const dispatch = useDispatch()

  const changeActiveIcon = useCallback((id) => {
    dispatch(projectsActions.changeActiveIcon(id))
  }, [])

  useEffect(() => {
    dispatch(projectsActions.initializeDataInStore())
  }, [])

  return (
    <Layout.Screen style={_styles.container}>
      <Projects.Menu
        flexValue={0.18}
        fontScale={vw(10)}
        onIconPress={changeActiveIcon}
      />
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
