import React from "react"
import { StyleSheet } from "react-native"
import UI from "@app-components/UI"
import { colors } from "@app-constants"

export default function ProjectsCardPointer({ style, ...rest }) {
  return (
    <UI.Pointer
      inactiveAnimation={null}
      color={colors.main.SECONDARY}
      size={30}
      style={[_styles.container, style]}
      {...rest}
    />
  )
}

const _styles = StyleSheet.create({
  container: { position: "absolute", opacity: 0.75, top: -7, left: -7 }
})
