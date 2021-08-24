import React, { useState } from "react"
import { Button, View, Text, Image, StyleSheet, Alert } from "react-native"
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions"
import colors from "../constants/colors"
import { getCameraPermissionsAsync } from "expo-camera"

export default function ImgPicker({ onImageTaken }) {
  const [PickedImageUri, setPickedImageUri] = useState(null)

  const handleTakeImage = async () => {
    const hasPermission = await verifyPermission()

    if (!hasPermission) return

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    })

    setPickedImageUri(image.uri)
    onImageTaken?.(image.uri)
  }

  return (
    <View style={_styles.container}>
      <View style={_styles.preview}>
        {PickedImageUri ? (
          <Image source={{ uri: PickedImageUri }} style={_styles.image} />
        ) : (
          <Text>No image yet</Text>
        )}
      </View>
      <Button
        title="Take pic"
        color={colors.PRIMARY}
        onPress={handleTakeImage}
      />
    </View>
  )
}

const _styles = StyleSheet.create({
  container: { alignItems: "center", marginBottom: 15 },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1
  },
  image: { width: "100%", height: "100%" }
})

// Note: permissions are asked only once, even if the function is
// re-triggered. You need to re-launch expo.
async function verifyPermission() {
  // const result = await Permissions.askAsync(
  //   Permissions.CAMERA,
  //   Permissions.MEDIA_LIBRARY
  // )
  const result = await ImagePicker.requestCameraPermissionsAsync()

  if (result.status !== "granted") {
    Alert.alert("Failed access", "Camera permission is required", [
      { text: "OK" }
    ])
    return false
  }
  return true
}
