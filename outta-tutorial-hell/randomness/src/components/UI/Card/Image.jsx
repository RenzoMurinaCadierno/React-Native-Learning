import React, { useContext, useEffect, useState } from "react"
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native"
import colors from "@app-constants/colors"
import CardContext from "./context"

const errorImgSrc = require("@app-assets/images/imgNotFound.jpg")

export default function CardImage({
  source,
  style,
  containerStyle,
  containerProps,
  ...rest
}) {
  const vw = useContext(CardContext)
  const styles = _styles(vw)
  const [imgSrc, setImgSrc] = useState(null)
  const [loading, setLoading] = useState(true)

  const onLoad = ({ uri }) => {
    setLoading(false)
    setImgSrc(uri)
  }

  const onError = () => {
    setLoading(false)
    setImgSrc(errorImgSrc)
  }
  add Animated.Image and switch between actual image or error one.
  Then add action buttons. Then work on carousel for images and 1/3 2/3 3/3
  return (
    <View style={[styles.container, containerStyle]} {...containerProps}>
      <Image
        source={source}
        onLoad={onLoad}
        onError={onError}
        // loadingIndicatorSource={}
        style={[styles.image, style]}
        {...rest}
      />
      <ActivityIndicator
        animating={true}
        size="large"
        color={colors.main.PRIMARY}
        style={styles.placeholder}
      />
    </View>
  )
}

const _styles = (vw) =>
  StyleSheet.create({
    container: {
      alignSelf: "stretch",
      aspectRatio: 1.5,
      position: "relative"
    },
    image: {
      // ...StyleSheet.absoluteFill,
      width: "100%",
      height: "100%",
      resizeMode: "contain",
      borderRadius: vw(1.5)
    },
    placeholder: {
      width: "100%",
      height: "100%",
      ...StyleSheet.absoluteFill,
      borderRadius: vw(1.5),
      resizeMode: "contain"
    }
  })
