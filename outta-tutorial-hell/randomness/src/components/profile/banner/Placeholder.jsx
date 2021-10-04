import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { StyleSheet } from "react-native"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"

export default function Placeholder({ fontScale }) {
  return (
    <LinearGradient
      style={[_styles.container]}
      colors={[colors.main.PRIMARY_ALPHA(0.15), colors.background.PRIMARY]}
    >
      <UI.Text
        size={fontScale * 1.2}
        elevation={3}
        color={colors.main.SECONDARY}
        shadowColor={colors.main.PRIMARY}
        type="semi-bold"
      >
        Hey! Howdy?
      </UI.Text>
      <BodyText size={fontScale}>
        Welcome to my modest first attempt at a React Native app.
      </BodyText>
      <BodyText size={fontScale}>
        Nothing fancy, just a resume of my skills and links to some of my
        portfolio apps.
      </BodyText>
      <BodyText size={fontScale}>
        Tap the logo icons below for further details.
      </BodyText>
      <UI.Text
        size={fontScale * 0.8}
        color={colors.main.SECONDARY}
        type="regular-italic"
        style={_styles.footer}
      >
        By the way, thanks for giving this app a go!
      </UI.Text>
    </LinearGradient>
  )
}

const _styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: "1.5%",
    paddingVertical: "5%"
  },
  footer: { alignSelf: "flex-end" }
})

function BodyText({ children, size }) {
  return (
    <UI.Text
      size={size}
      color={colors.main.PRIMARY}
      elevation={3}
      shadowColor={colors.background.CONTRAST}
    >
      {children}
    </UI.Text>
  )
}
