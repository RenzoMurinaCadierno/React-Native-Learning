import React from "react"
import { View, ActivityIndicator, StatusBar } from "react-native"
import AppText from "../Text/Base"
import { colors } from "@app-constants"
import { capitalize } from "@app-utils/functions"

export default function Root({
  type, // 'primary', 'secondary'
  anchor, // 'top', 'right', 'left', 'bottom', 'top-left', 'bottom-right', ...
  size,
  children,
  indicatorStyle,
  indicatorProps,
  containerStyle,
  containerProps,
  ...rest
}) {
  const _colors = _getColorsByType(type)

  return (
    <View style={[_getAnchorStyle(anchor), containerStyle]} {...containerProps}>
      <ActivityIndicator
        size="small"
        color={_colors.indicator}
        style={[{ marginRight: 7 }, indicatorStyle]}
        {...indicatorProps}
      />
      <AppText
        type="regular-italic"
        letterSpacing={size / 10}
        size={size}
        color={_colors.text}
        {...rest}
      >
        {children}
      </AppText>
    </View>
  )
}

Root.defaultProps = { anchor: "top-left", type: "primary", size: 18 }

function _getColorsByType(type) {
  const _type = type?.toUpperCase() || colors.types.main.PRIMARY
  const _oppositeType = colors.getOppositeType(_type)

  return { indicator: colors.main[_type], text: colors.main[_oppositeType] }
}

function _getAnchorStyle(anchor) {
  const _anchor = anchor?.toLowerCase().split("-")

  return _anchor.reduce(
    (acc, positionKey) => ({
      ...acc,
      [positionKey]: 0,
      ["margin" + capitalize(positionKey)]:
        positionKey === "top" ? StatusBar.currentHeight + 15 : 15
    }),
    { position: "absolute", flexDirection: "row" }
  )
}
