import React from "react"
import { View, ActivityIndicator, StatusBar } from "react-native"
import AppText from "../Text/Base"
import colors, { types as colorTypes, reverseType } from "@app-constants/colors"
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
  const colors = _getColorsByType(type)

  return (
    <View style={[_getAnchorStyle(anchor), containerStyle]} {...containerProps}>
      <ActivityIndicator
        size="small"
        color={colors.indicator}
        style={[{ marginRight: 7 }, indicatorStyle]}
        {...indicatorProps}
      />
      <AppText
        type="regular-italic"
        letterSpacing={size / 10}
        size={size}
        color={colors.text}
        {...rest}
      >
        {children}
      </AppText>
    </View>
  )
}

Root.defaultProps = { anchor: "top-left", type: "primary", size: 18 }

function _getColorsByType(type) {
  const _type = type?.toUpperCase() || colorTypes.main.PRIMARY
  const _reverseType = reverseType(_type)

  return { indicator: colors.main[_type], text: colors.main[_reverseType] }
}

function _getAnchorStyle(anchor) {
  const _anchor = anchor?.toLowerCase().split("-")
  let finalStyles = _anchor.reduce(
    (acc, positionKey) => ({
      ...acc,
      [positionKey]: 0,
      ["margin" + capitalize(positionKey)]: 15
    }),
    { position: "absolute", flexDirection: "row" }
  )

  finalStyles.marginTop = finalStyles.marginTop
    ? StatusBar.currentHeight + finalStyles.marginTop
    : StatusBar.currentHeight + 15

  return finalStyles
}
