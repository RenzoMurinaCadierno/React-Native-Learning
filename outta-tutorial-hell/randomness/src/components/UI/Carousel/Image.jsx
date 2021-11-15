import React from "react"
import ImageWithTransition from "../Image/ImageWithTransition"
import colors from "@app-constants/colors"
import { StyleSheet } from "react-native"

export default function Image({
  source,
  style,
  containerStyle,
  containerProps,
  ...rest
}) {
  return (
    <ImageWithTransition
      source={source}
      containerStyle={[_styles.container, containerStyle]}
      style={[_styles.image, style]}
      {...rest}
    />
  )
}

Image.defaultProps = { containerStyle: {}, style: {} }

const _styles = StyleSheet.create({
  container: {
    aspectRatio: 1.5,
    backgroundColor: colors.background.SECONDARY_ALPHA(0.2),
    borderColor: colors.background.DARK_ALPHA(0.3),
    borderRadius: 5
  },
  image: { borderRadius: 5 }
})
