import React from "react"
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import API_KEYS from "../env"

export default function MapPreview({ location, children, onPress, style }) {
  const imgPreviewUrl = !location.latitude
    ? ""
    : `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${location.latitude},${location.longitude}&key=${API_KEYS.GOOGLE_MAPS}
  `

  return (
    <TouchableOpacity onPress={onPress} style={[_styles.container, style]}>
      {imgPreviewUrl ? (
        <Image source={{ uri: imgPreviewUrl }} style={_styles.image} />
      ) : (
        children
      )}
    </TouchableOpacity>
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
