import React from "react"
import { View, StyleSheet } from "react-native"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"
import sharedStyles from "@app-constants/styles"

export default function Placeholder({
  show,
  title,
  subtitle,
  size,
  style,
  titleStyle,
  subtitleStyle,
  titleProps,
  subtitleProps,
  children,
  ...rest
}) {
  return (
    <View style={[_styles.container, style]} {...rest}>
      {title && (
        <PlaceholderText
          isTitle
          show={show}
          style={titleStyle}
          size={size}
          {...titleProps}
        >
          {title}
        </PlaceholderText>
      )}
      {subtitle &&
        subtitle.split("\\n").map((paragraph, i) => (
          <PlaceholderText
            key={i}
            show={show}
            style={subtitleStyle}
            size={size}
            {...subtitleProps}
          >
            {paragraph}
          </PlaceholderText>
        ))}
      {children}
    </View>
  )
}
add <Scale /> transition for children
Placeholder.defaultProps = { show: true }

function PlaceholderText({ children, isTitle, size, style, ...rest }) {
  return (
    <UI.Text.WithScaleTransition
      type={isTitle ? "semi-bold-italic" : "regular"}
      size={isTitle ? size * 1.225 : size}
      color={colors.main[isTitle ? "PRIMARY" : "SECONDARY"]}
      elevation={3.25}
      shadowColor={colors.accent[isTitle ? "PRIMARY" : "SECONDARY"]}
      style={[_styles.texts, style]}
      useScaleTransitionArgs={{ inactiveScaleValue: 1.1 }}
      {...rest}
    >
      {children}
    </UI.Text.WithScaleTransition>
  )
}

PlaceholderText.defaultProps = { size: 14.5 }

const _styles = StyleSheet.create({
  container: sharedStyles.FLEX_CENTER,
  texts: { margin: "2%", textAlign: "center" }
})
