import React from "react"
import { View, Text, StyleSheet } from "react-native"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"
import BodyBullet from "./BodyBullet"

export default function BodyContent({ title, fontScale }) {
  return (
    <View style={_styles.container}>
      <View style={_styles.title}>
        <UI.Text
          color={colors.PRIMARY}
          size={fontScale * 1.3}
          elevation={3.5}
          shadowColor={colors.ACCENT_PRIMARY}
          style={_styles.title}
        >
          {title}
        </UI.Text>
      </View>
      <BodyBullet fontScale={fontScale * 0.8} />
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexGrow: 1,
    alignSelf: "stretch",
    flex: 1,
    // alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "1%",
    paddingHorizontal: "3%"
  },
  title: {
    alignSelf: "flex-end"
  }
})
