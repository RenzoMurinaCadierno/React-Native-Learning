import React from "react"
import { View, Text, StyleSheet } from "react-native"
import colors from "@constants/colors"
import SwipeArrow from "./SwipeArrow"

export default function Body({ fontScale, flexValue, style }) {
  return (
    <View style={[_styles.container, { flex: flexValue }, style]}>
      <Text>Body</Text>
      <View style={_styles.footer}>
        {[100, 200, 300].map((delay) => (
          <SwipeArrow
            key={delay}
            animationDelay={delay}
            size={fontScale}
            color={colors.ACCENT}
          />
        ))}
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
