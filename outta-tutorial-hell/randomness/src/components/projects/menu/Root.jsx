import React, { useCallback } from "react"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import CategoryTitle from "./CategoryTitle"
import IconList from "./IconList"
import * as projectsActions from "@app-store/actions/projects"
import colors from "@app-constants/colors"
import sharedStyles from "@app-constants/styles"

export default function Root({ flexValue, fontScale, style }) {
  const dispatch = useDispatch()

  const changeActiveSection = useCallback(
    (id) => dispatch(projectsActions.changeActiveSection(id)),
    []
  )

  return (
    <LinearGradient
      colors={[colors.background.CONTRAST, colors.main.SECONDARY_ALPHA(0.2)]}
      style={[_styles.container, { flex: flexValue }, style]}
    >
      <CategoryTitle fontScale={fontScale} />
      <IconList fontScale={fontScale} onIconPress={changeActiveSection} />
    </LinearGradient>
  )
}

const _styles = StyleSheet.create({
  container: sharedStyles.borderElevation.RIGHT
})
