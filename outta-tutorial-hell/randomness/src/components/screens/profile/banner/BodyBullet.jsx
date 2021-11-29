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
  onPress,
  containerProps,
  containerStyle
}) {
  const textColor = _getTextColor(type)

  return (
    <Layout.Overlay.Pressable
      colors={_getGradientColors(gradientColors, type)}
      style={[_styles.container, { height: fontScale * 4 }, containerStyle]}
      onPress={onPress}
      {...containerProps}
    >
      <UI.Icon.WithAura
        type={iconType}
        name={iconName}
        size={fontScale * 0.9}
      />
      {Boolean(sideText) && (
        <UI.Text
          type="semi-bold-italic"
          size={fontScale * 0.9}
          color={colors.background.CONTRAST}
          elevation={fontScale / 4.5}
          shadowColor={textColor}
          style={_styles.sideText}
        >
          {sideText}
        </UI.Text>
      )}
      <View style={_styles.textsContainer}>
        <UI.Text color={textColor} size={fontScale * 0.9} type="semi-bold">
          {text}
        </UI.Text>
        <UI.Text
          color={textColor}
          type="regular-italic"
          size={fontScale * 0.85}
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
    paddingLeft: "3%",
    paddingVertical: "2%",
    position: "relative"
  },
  sideText: {
    position: "absolute",
    bottom: "13%",
    right: "3%"
  },
  textsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "3%"
  }
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

function _getTextColor(type) {
  return type ? colors.main[type.toUpperCase()] : undefined
}
