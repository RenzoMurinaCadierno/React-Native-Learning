import React from "react"
import { StyleSheet, View } from "react-native"
import { default as sharedStyles } from "@constants/styles"
import Content from "./Content"

export default function Container({
  containerStyle,
  contentStyle,
  containerProps,
  ...rest
}) {
  return (
    <View style={[_styles.container, containerStyle]} {...containerProps}>
      <Content style={contentStyle} {...rest} />
    </View>
  )
}

Container.defaultProps = { containerProps: {}, contentProps: {} }

const _styles = StyleSheet.create({
  container: {
    ...sharedStyles.FLEX_CENTER,
    ...sharedStyles.ELEVATION_SUBTLE,
    width: "100%"
  }
})
