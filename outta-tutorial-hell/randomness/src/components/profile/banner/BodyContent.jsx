import React from "react"
import { View, Text, StyleSheet } from "react-native"
import UI from "@components/UI"
import colors from "@constants/colors"
import BodyBullet from "./BodyBullet"

export default function BodyContent({ title, fontScale }) {
  return (
    <View style={_styles.container}>
      <View style={_styles.title}>
        <UI.Text
          color={colors.PRIMARY}
          size={fontScale * 1.3}
          style={_styles.title}
        >
          {title}
        </UI.Text>
        <BodyBullet fontScale={fontScale} />
      </View>
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexGrow: 1,
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "1%",
    paddingHorizontal: "3%"
  },
  title: {
    alignSelf: "flex-end",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textShadowColor: colors.ACCENT
  }
})
