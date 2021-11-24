import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { StyleSheet } from "react-native"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"
import useBreakpoints from "@app-hooks/useBreakpoints"

export default function Placeholder({ fontScale }) {
  const isSmallDevice = useBreakpoints().get("sm")

  return (
    <LinearGradient
      style={[
        _styles.container,
        { paddingVertical: _dynamicStyles.paddingVertical(isSmallDevice) }
      ]}
      colors={[colors.main.PRIMARY_ALPHA(0.15), colors.background.PRIMARY]}
    >
      <UI.Text
        size={_dynamicStyles.titleText(fontScale * 0.9, isSmallDevice)}
        elevation={3}
        color={colors.main.SECONDARY}
        shadowColor={colors.main.PRIMARY}
        type="semi-bold"
      >
        Hey! Howdy?
      </UI.Text>
      <BodyText
        size={_dynamicStyles.bodyText(fontScale * 0.925, isSmallDevice)}
      >
        Welcome to my modest first attempt at a React Native app.
      </BodyText>
      <BodyText
        size={_dynamicStyles.bodyText(fontScale * 0.925, isSmallDevice)}
      >
        Nothing fancy, just a resume of my skills and links to some of my
        portfolio apps.
      </BodyText>
      <BodyText
        size={_dynamicStyles.bodyText(fontScale * 0.925, isSmallDevice)}
      >
        Tap the logo icons below for further details.
      </BodyText>
      <UI.Text
        size={_dynamicStyles.footerText(fontScale * 0.925, isSmallDevice)}
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
  titleText: (fontScale, isSmallDevice) =>
    isSmallDevice ? fontScale * 1.3 : fontScale * 1.2,
  bodyText: (fontScale, isSmallDevice) =>
    isSmallDevice ? fontScale * 1.075 : fontScale,
  footerText: (fontScale, isSmallDevice) =>
    isSmallDevice ? fontScale * 0.9 : fontScale * 0.8,
  paddingVertical: (isSmallDevice) => (isSmallDevice ? "2.5%" : "5%")
}

const _styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: "2%"
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
