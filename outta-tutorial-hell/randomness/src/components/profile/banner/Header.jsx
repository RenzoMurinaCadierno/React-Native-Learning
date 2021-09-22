import React from "react"
import { StyleSheet, View } from "react-native"
import UI from "@components/UI"
import colors from "@constants/colors"

export default function Content({
  title,
  subtitle,
  category,
  titleColor,
  flexValue,
  fontScale
}) {
  layout animation
  return (
    <View style={[_styles.container, { flex: flexValue }]}>
      <View style={[_styles.titleAndCategoryContainer]}>
        <UI.Text
          size={fontScale * 1.5}
          color={titleColor}
          style={_styles.title}
        >
          {title}
        </UI.Text>
        <UI.Text
          size={fontScale}
          color={colors.SECONDARY}
          style={_styles.category}
        >
          {category}
        </UI.Text>
      </View>
      <View style={[_styles.subtitleContainer]}>
        <UI.Text
          size={fontScale}
          color={colors.SECONDARY}
          style={_styles.subtitle}
        >
          {subtitle}
        </UI.Text>
      </View>
    </View>
  )
}

Content.defaultProps = { fontScale: 16 }

const _styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: "1.5%",
    paddingVertical: "0.5%"
  },
  titleAndCategoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: { fontFamily: "livvic-semi-bold" },
  category: { fontFamily: "livvic-regular-italic" },
  subtitle: {},
  subtitleContainer: {}
})
