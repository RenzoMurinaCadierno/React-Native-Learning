import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import CardContext from "./context"
import colors from "@app-constants/colors"

export default function Container({ style, children, ...rest }) {
  const vw = useContext(CardContext)
  const styles = _styles(vw)

  return (
    <LinearGradient
      colors={[colors.background.CONTRAST, colors.accent.PRIMARY_ALPHA(0.25)]}
      style={[styles.container, style]}
      {...rest}
    >
      {children}
    </LinearGradient>
  )
}

const _styles = (vw) =>
  StyleSheet.create({
    container: {
      borderRadius: vw(1.5),
      backgroundColor: colors.background.CONTRAST,
      padding: vw(2),
      margin: vw(3),
      elevation: vw(1),
      alignSelf: "stretch"
    }
  })
