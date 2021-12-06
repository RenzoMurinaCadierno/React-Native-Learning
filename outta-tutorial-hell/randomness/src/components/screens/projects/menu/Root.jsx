import React, { useCallback } from "react"
import { StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { LinearGradient } from "expo-linear-gradient"
import CategoryTitle from "./CategoryTitle"
import IconList from "./IconList"
import store from "@app-store"
import { colors, styles as sharedStyles } from "@app-constants"

export default function Root({ flexValue, style }) {
  const dispatch = useDispatch()

  const changeActiveSection = useCallback(
    (id) => dispatch(store.actions.projects.changeActiveSection(id)),
    []
  )

  return (
    <LinearGradient
      colors={[colors.background.CONTRAST, colors.main.SECONDARY_ALPHA(0.2)]}
      style={[_styles.container, { flex: flexValue }, style]}
    >
      <CategoryTitle />
      <IconList onIconPress={changeActiveSection} />
    </LinearGradient>
  )
}

const _styles = StyleSheet.create({
  container: sharedStyles.borderElevation.RIGHT
})
