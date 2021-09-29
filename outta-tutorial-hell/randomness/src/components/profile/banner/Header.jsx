import React from "react"
import { StyleSheet, View } from "react-native"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"
import { default as sharedStyles } from "@app-constants/styles"

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
          color={colors.main.SECONDARY}
          type="regular-italic"
          elevation={fontScale / 7}
          shadowColor={colors.main.PRIMARY}
        >
          {category}
        </UI.Text>
      </View>
      <UI.Text size={fontScale} color={colors.main.SECONDARY}>
        {subtitle}
      </UI.Text>
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: "1.5%",
    paddingVertical: "0.5%",
    add some kinda bgcolor here, test directionalarrows, add more sections
  },
  titleAndCategoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
})
