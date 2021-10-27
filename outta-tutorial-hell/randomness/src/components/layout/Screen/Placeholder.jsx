import React from "react"
import { View, StyleSheet } from "react-native"
import UI from "@app-components/UI"
import useViewPortContext from "@app-hooks/useViewPortContext"
import colors from "@app-constants/colors"
import sharedStyles from "@app-constants/styles"

function PlaceholderText({ children, isTitle, style, ...rest }) {
  const { vw } = useViewPortContext()

  return (
    <UI.Text.WithScaleTransition
      type={isTitle ? "semi-bold-italic" : "regular"}
      size={isTitle ? vw(5.5) : vw(4.5)}
      color={colors.main[isTitle ? "PRIMARY" : "SECONDARY"]}
      elevation={vw(1)}
      shadowColor={colors.accent[isTitle ? "PRIMARY" : "SECONDARY"]}
      style={[_styles.texts, style]}
      useScaleTransitionArgs={{ inactiveScaleValue: 1.1 }}
      {...rest}
    >
      {children}
    </UI.Text.WithScaleTransition>
  )
}

export default function Placeholder({
  show,
  title,
  subtitle,
  style,
  titleStyle,
  subtitleStyle,
  titleProps,
  subtitleProps,
  ...rest
}) {
  return (
    <View style={[_styles.container, style]} {...rest}>
      {title && (
        <PlaceholderText isTitle show={show} style={titleStyle} {...titleProps}>
          {title}
        </PlaceholderText>
      )}
      {subtitle && (
        <PlaceholderText show={show} style={subtitleStyle} {...subtitleProps}>
          {subtitle}
        </PlaceholderText>
      )}
    </View>
  )
}

Placeholder.defaultProps = { show: true }

const _styles = StyleSheet.create({
  container: sharedStyles.FLEX_CENTER,
  texts: { margin: "2%", textAlign: "center" }
})
