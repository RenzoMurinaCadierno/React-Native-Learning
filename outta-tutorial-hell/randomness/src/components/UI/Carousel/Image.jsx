import React from "react"
import ImageWithTransition from "../Image/ImageWithTransition"

export default function Image({
  source,
  style,
  containerStyle,
  containerProps,
  ...rest
}) {
  // add Animated.Image and switch between actual image or error one.
  // Then add action buttons. Then work on carousel for images and 1/3 2/3 3/3
  return (
    <ImageWithTransition
      source={source}
      containerStyle={{
        aspectRatio: 1.5,
        alignSelf: "stretch",
        ...containerStyle
      }}
      style={{ borderRadius: 5, ...style }}
      {...rest}
    />
  )
}

Image.defaultProps = { containerStyle: {}, style: {} }
