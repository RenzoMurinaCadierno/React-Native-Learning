import React from "react"
import { View, Text, StyleSheet } from "react-native"
import UI from "@app-components/UI"
import Layout from "@app-components/layout"
import colors from "@app-constants/colors"

export default function BodyBullet({
  type,
  gradientColors,
  text,
  sideText,
  iconName,
  iconType,
  fontScale,
  containerProps,
  containerStyle
}) {
  const textColor = getTextColor(type)

  return (
    <Layout.Overlay
      colors={getGradientColors(gradientColors, type)}
      style={[_styles.container, containerStyle]}
      {...containerProps}
    >
      <UI.Icon.WithAura type={iconType} name={iconName} size={fontScale} />
      <View style={_styles.textsContainer}>
        <UI.Text color={textColor} size={fontScale * 1.1} type="semi-bold">
          {text}
        </UI.Text>
        <UI.Text
          color={colors.background.CONTRAST}
          shadowColor={textColor}
          size={fontScale * 1.1}
          elevation={fontScale / 3.5}
          type="semi-bold-italic"
        >
          {sideText}
        </UI.Text>
      </View>
    </Layout.Overlay>
  )
}

const _styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "2.5%",
    paddingVertical: "1.25%"
  },
  textsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "3%",
    marginRight: "1%"
  }
})

function getGradientColors(gradientColors, type) {
  if (gradientColors) return gradientColors

  const _type = type?.toLowerCase()

  if (_type === "secondary") {
    return [colors.background.PRIMARY, `rgba(${colors.SECONDARY_RGB}, 0.5)`]
  } else if (_type === "primary") {
    return [colors.background.PRIMARY, `rgba(${colors.PRIMARY_RGB}, 0.5)`]
  }

  return undefined // fallbacks to default `colors` in `Overlay`
}

function getTextColor(type) {
  return type ? colors[type.toUpperCase()] : undefined
}
