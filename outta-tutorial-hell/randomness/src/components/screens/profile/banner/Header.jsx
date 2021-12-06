import React from "react"
import { StyleSheet, View } from "react-native"
import UI from "@app-components/UI"
import Layout from "@app-components/layout"
import { colors } from "@app-constants"
import { Color } from "@app-utils/functions"

export default function Content({
  title,
  subtitle,
  category,
  titleColor,
  flexValue,
  fontScale,
  shrinkHeader
}) {
  return (
    <Layout.Overlay
      colors={[colors.background.PRIMARY, Color.castRgbToRgba(titleColor, 0.4)]}
      style={[_styles.container, { flex: flexValue }]}
    >
      <View style={_styles.titleAndCategoryContainer}>
        <UI.Text
          size={fontScale * 1.5}
          color={titleColor}
          type="semi-bold"
          elevation={fontScale * 0.1}
          shadowRadius={fontScale * 0.1}
          shadowColor={colors.background.DARK}
        >
          {title}
        </UI.Text>
        <UI.Text
          size={fontScale}
          color={colors.main.SECONDARY}
          type="regular-italic"
          elevation={fontScale * 0.1}
          shadowRadius={fontScale * 0.1}
          shadowColor={colors.main.PRIMARY}
        >
          {category}
        </UI.Text>
      </View>
      <UI.Text.WithShrinkTransition
        active={shrinkHeader}
        size={fontScale * 0.95}
        type="regular-italic"
        color={colors.main.SECONDARY}
        style={_styles.subtitle}
      >
        {subtitle}
      </UI.Text.WithShrinkTransition>
    </Layout.Overlay>
  )
}

Content.defaultProps = { titleColor: "rgb(255,255,255)" }

const _styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: "1%"
  },
  titleAndCategoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "1.5%"
  },
  subtitle: {
    paddingHorizontal: "1.5%"
  }
})
