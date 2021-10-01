import React from "react"
import { StyleSheet, View } from "react-native"
import { default as sharedStyles } from "@app-constants/styles"
import Content from "./Content"
import Placeholder from "./Placeholder"

export default function Container({
  containerStyle,
  contentStyle,
  placeholderStyle,
  containerProps,
  activeIconId,
  ...rest
}) {
  return (
    <View style={[_styles.container, containerStyle]} {...containerProps}>
      {Boolean(activeIconId) ? (
        <Content style={contentStyle} activeIconId={activeIconId} {...rest} />
      ) : (
        <Placeholder style={placeholderStyle} {...rest} />
      )}
    </View>
  )
}

Container.defaultProps = { containerProps: {} }

const _styles = StyleSheet.create({
  container: {
    ...sharedStyles.FLEX_CENTER,
    ...sharedStyles.ELEVATION_SUBTLE,
    width: "100%"
  }
})
