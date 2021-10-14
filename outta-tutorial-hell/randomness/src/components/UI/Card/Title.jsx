import React, { useContext } from "react"
import { StyleSheet, View } from "react-native"
import AppText from "../Text/Base"
import { CardContext } from "./Root"
import colors from "@app-constants/colors"

export default function Title({
  fontScale,
  type,
  color,
  children,
  style,
  containerProps,
  containerStyle,
  ...rest
}) {
  const vw = useContext(CardContext)

  return (
    <View style={[_styles.container, containerStyle]} {...containerProps}>
      <AppText
        type={type}
        size={fontScale ?? vw(5)}
        elevation={fontScale ? fontScale / 8 : vw(0.6)}
        shadowColor={colors.background.DARK_ALPHA(0.5)}
        style={[_styles.text, style]}
        {...rest}
      >
        {children}
      </AppText>
    </View>
  )
}

Title.defaultProps = {
  containerProps: {},
  containerStyle: {},
  type: "semi-bold-italic"
}

const _styles = StyleSheet.create({
  container: { alignItems: "flex-end" },
  text: { letterSpacing: 0.75, textTransform: "uppercase" }
})
