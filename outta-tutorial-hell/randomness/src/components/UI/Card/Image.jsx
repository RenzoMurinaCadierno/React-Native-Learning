import React, { useContext } from "react"
import CardContext from "./context"
import ImageWithTransition from "../Image/ImageWithTransition"

export default function CardImage({
  source,
  style,
  containerStyle,
  containerProps,
  ...rest
}) {
  const vw = useContext(CardContext)

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
      style={{ borderRadius: vw(1.5), ...style }}
      {...rest}
    />
  )
}

CardImage.defaultProps = { containerStyle: {}, style: {} }
