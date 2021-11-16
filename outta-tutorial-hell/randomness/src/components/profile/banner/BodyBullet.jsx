import React from "react"
import { View, StyleSheet } from "react-native"
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
      colors={_getGradientColors(gradientColors, type)}
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
          <UI.Text
            color={textColor}
            size={fontScale * 0.9}
            type="semi-bold"
            style={_styles.title}
          >
            {text}
          </UI.Text>
          {Boolean(sideText) && (
            <UI.Text
              color={colors.background.CONTRAST}
              shadowColor={textColor}
              size={fontScale * 0.9}
              elevation={fontScale / 4.5}
              style={_styles.sideText}
              type="semi-bold-italic"
            >
              {sideText}
            </UI.Text>
          )}
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
    paddingLeft: "2.5%",
    paddingRight: "1.5%",
    paddingVertical: "1.25%"
  },
  textsContainer: {
    flex: 1,
    marginLeft: "3%"
  },
  titleAndSideTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: { flex: 1, flexGrow: 1 },
  sideText: { flex: 0.5, textAlign: "right" },
  description: { paddingHorizontal: "0.5%" }
})

function _getGradientColors(gradientColors, type) {
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
