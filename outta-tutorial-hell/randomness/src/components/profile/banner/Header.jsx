import React from "react"
import { StyleSheet, View } from "react-native"
import UI from "@components/UI"
import colors from "@constants/colors"

export default function Content({
  title,
  subtitle,
  category,
  flexValue,
  fontScale
}) {
  return (
    <View style={[_styles.container, { flex: flexValue }]}>
      <View style={[_styles.titleAndCategoryContainer]}>
        <UI.Text size={fontScale * 1.5} color={colors.SECONDARY}>
          React
        </UI.Text>
        <UI.Text size={fontScale} color={colors.SECONDARY}>
          Main Technologyyyy
        </UI.Text>
      </View>
      <View style={[_styles.subtitleContainer]}>
        <UI.Text size={fontScale} color={colors.SECONDARY}>
          Cool web tech
        </UI.Text>
      </View>
    </View>
  )
}

Content.defaultProps = { fontScale: 16 }

const _styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    paddingHorizontal: "1.5%",
    paddingVertical: "0.5%"
    // flexDirection: 'row',
    // flex: 1
  },
  titleAndCategoryContainer: {
    // flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subtitleContainer: {
    // flex: 0.5
  }
})
