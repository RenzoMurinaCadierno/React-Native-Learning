import React from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import useImageTransition from "@app-hooks/useImageTransition"
import animations from "@app-constants/animations"
import colors from "@app-constants/colors"
import Base from "./Base"

export default function ImageWithTransition({
  source,
  transitionStyleRuleName,
  transitionAnimation,
  style,
  containerStyle,
  containerProps,
  placeholderStyle,
  placeholderProps,
  ...rest
}) {
  const { loading, errorImgSrc, onLoad, onError, animatedValue } =
    useImageTransition()

  const sharedImageProps = {
    animated: true,
    style: [_styles.image, { [transitionStyleRuleName]: animatedValue }, style],
    ...rest
  }

  return (
    <View style={[_styles.container, containerStyle]} {...containerProps}>
      {loading && (
        <ActivityIndicator
          size="large"
          color={colors.main.PRIMARY}
          style={[_styles.placeholder, placeholderStyle]}
          {...placeholderProps}
        />
      )}
      {errorImgSrc ? (
        <Base source={errorImgSrc} {...sharedImageProps} />
      ) : (
        <Base {...{ source, onLoad, onError }} {...sharedImageProps} />
      )}
    </View>
  )
}

ImageWithTransition.defaultProps = {
  transitionStyleRuleName: "opacity",
  transitionAnimation: animations.images.opacity.IN,
  containerProps: {},
  placeholderProps: {}
}

const _styles = StyleSheet.create({
  container: { position: "relative" },
  image: { width: "100%", height: "100%", resizeMode: "contain" },
  placeholder: StyleSheet.absoluteFill
})
