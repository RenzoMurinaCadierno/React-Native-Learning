import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { StyleSheet } from "react-native"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"
import { Device } from "@app-utils/functions"

export default function Placeholder({ fontScale }) {
  return (
    <LinearGradient
      style={[_styles.container]}
      colors={[colors.main.PRIMARY_ALPHA(0.15), colors.background.PRIMARY]}
    >
      <UI.Text
        size={_dynamicStyles.titleText(fontScale)}
        elevation={3}
        color={colors.main.SECONDARY}
        shadowColor={colors.main.PRIMARY}
        type="semi-bold"
      >
        Hey! Howdy?
      </UI.Text>
      <BodyText size={_dynamicStyles.bodyText(fontScale)}>
        Welcome to my modest first attempt at a React Native app.
      </BodyText>
      <BodyText size={_dynamicStyles.bodyText(fontScale)}>
        Nothing fancy, just a resume of my skills and links to some of my
        portfolio apps.
      </BodyText>
      <BodyText size={_dynamicStyles.bodyText(fontScale)}>
        Tap the logo icons below for further details.
      </BodyText>
      <UI.Text
        size={_dynamicStyles.footerText(fontScale)}
        color={colors.main.SECONDARY}
        type="regular-italic"
        style={_styles.footer}
      >
        By the way, thanks for giving this app a go!
      </UI.Text>
    </LinearGradient>
  )
}

const _dynamicStyles = {
  titleText: (fontScale) =>
    Device.isSmall() ? fontScale * 1.3 : fontScale * 1.2,
  bodyText: (fontScale) => (Device.isSmall() ? fontScale * 1.075 : fontScale),
  footerText: (fontScale) =>
    Device.isSmall() ? fontScale * 0.9 : fontScale * 0.8,
  paddingVertical: () => (Device.isSmall() ? "2.5%" : "5%")
}

const _styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: "2%",
    paddingVertical: _dynamicStyles.paddingVertical()
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
