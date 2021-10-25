import React from "react"
import { StyleSheet } from "react-native"
import UI from "@app-components/UI"

export default function Placeholder({ show, children, style, ...rest }) {
  return (
    <UI.Text.WithScaleTransition
      show={show}
      style={[_styles.container, style]}
      {...rest}
    >
      {children}
    </UI.Text.WithScaleTransition>
  )
}
go on with placeholder for when no icons are clicked. Then too many renders
on projects images, then contacts
Placeholder.defaultProps = { show: true }

const _styles = StyleSheet.create({ container: {} })
