import React from "react"
import { Animated } from "react-native"
import AppText from "../Text/Base"
import { interpolate } from "@app-utils/functions"
import colors from "@app-constants/colors"

export default function MarqueeText({
  translateValue,
  translateOutputRange,
  children,
  containerStyle,
  containerProps,
  ...rest
}) {
  return (
    <Animated.View
      style={[
        {
          transform: [
            { translateX: interpolate(translateValue, translateOutputRange) }
          ]
        },
        containerStyle
      ]}
      {...containerProps}
    >
      <AppText type="semi-bold-italic" color={colors.main.SECONDARY} {...rest}>
        {children}
      </AppText>
    </Animated.View>
  )
}

MarqueeText.defaultProps = {
  translateOutputRange: [-500, 500],
  containerProps: {}
}
