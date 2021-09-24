import React from "react"
import { StyleSheet, View } from "react-native"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"

export default function Content({
  title,
  subtitle,
  category,
  titleColor,
  flexValue,
  fontScale
}) {
  return (
    <View style={[_styles.container, { flex: flexValue }]}>
      <View style={[_styles.titleAndCategoryContainer]}>
        <UI.Text size={fontScale * 1.5} color={titleColor} type="semi-bold">
          {title}
        </UI.Text>
        <UI.Text
          size={fontScale}
          color={colors.SECONDARY}
          type="regular-italic"
        >
          {category}
        </UI.Text>
      </View>
      <UI.Text size={fontScale} color={colors.SECONDARY}>
        {subtitle}
      </UI.Text>
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
  }
})
