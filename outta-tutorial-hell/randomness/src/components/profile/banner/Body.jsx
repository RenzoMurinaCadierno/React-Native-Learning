import React from "react"
import { View, StyleSheet } from "react-native"
import colors from "@constants/colors"
import SwipeArrows from "./SwipeArrows"
import BodyContent from "./BodyContent"

export default function Body({ fontScale, flexValue, style }) {
  return (
    <View style={[_styles.container, { flex: flexValue }, style]}>
      <BodyContent title="Education" fontScale={fontScale} />
      <View style={_styles.footer}>
        <SwipeArrows size={fontScale} color={colors.ACCENT} />
      </View>
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%"
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: "2%",
    right: "1%"
  }
})
