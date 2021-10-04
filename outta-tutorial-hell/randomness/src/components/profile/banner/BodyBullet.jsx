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
  descriptionText,
  iconName,
  iconType,
  fontScale,
  containerProps,
  containerStyle
}) {
  const textColor = getTextColor(type)

  return (
    <Layout.Overlay.Pressable
      colors={getGradientColors(gradientColors, type)}
      style={[_styles.container, containerStyle]}
      onPress={() => console.log("link created")}
      {...containerProps}
    >
      <UI.Icon.WithAura
        type={iconType}
        name={iconName}
        size={fontScale * 0.9}
      />
      <View style={_styles.textsContainer}>
        <View style={_styles.titleAndSideTextContainer}>
          <UI.Text color={textColor} size={fontScale * 0.9} type="semi-bold">
            {text}
          </UI.Text>
          <UI.Text
            color={colors.background.CONTRAST}
            shadowColor={textColor}
            size={fontScale * 0.9}
            elevation={fontScale / 3.5}
            type="semi-bold-italic"
          >
            {sideText}
          </UI.Text>
        </View>
        <UI.Text
          color={textColor}
          type="regular-italic"
          size={fontScale * 0.85}
          style={_styles.description}
        >
          {descriptionText}
        </UI.Text>
      </View>
    </Layout.Overlay.Pressable>
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
    marginLeft: "3%",
    marginRight: "1%"
  },
  titleAndSideTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  description: {
    width: "70%",
    paddingHorizontal: "0.5%",
    borderWidth: 1
  }
})

function getGradientColors(gradientColors, type) {
  if (gradientColors) return gradientColors

  const _type = type?.toLowerCase()

  if (_type === "secondary") {
    return [colors.background.PRIMARY, colors.main.SECONDARY_ALPHA(0.5)]
  } else if (_type === "primary") {
    return [colors.background.PRIMARY, colors.main.PRIMARY_ALPHA(0.5)]
  }

  return undefined // fallbacks to default `colors` in `Overlay`
}

function getTextColor(type) {
  return type ? colors.main[type.toUpperCase()] : undefined
}
