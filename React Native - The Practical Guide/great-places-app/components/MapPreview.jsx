import React from "react"
import { Image, View, StyleSheet } from "react-native"
import API_KEYS from "../env"

export default function MapPreview({ location, children, style }) {
  const imgPreviewUrl = !location.lat
    ? ""
    : `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${location.lat},${location.lng}&key=${API_KEYS.GOOGLE}
  `

  return (
    <View style={[_styles.container, style]}>
      {imgPreviewUrl ? (
        <Image source={{ uri: imgPreviewUrl }} style={_styles.image} />
      ) : (
        children
      )}
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  // network images (async) needs 100% width and height
  image: { width: "100%", height: "100%" }
})
