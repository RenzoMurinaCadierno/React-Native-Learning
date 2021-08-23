import React from "react"
import { Button, View, Text, Image, StyleSheet, Alert } from "react-native"
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions"
import colors from "../constants/colors"

export default function ImgPicker(props) {
  // Note: permissions are asked only once, even if the function is
  // re-triggered. You need to re-launch expo.
  const verifyPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.MEDIA_LIBRARY
    )

    if (result.status !== "granted") {
      Alert.alert("Failed access", "Camera permission is required", [
        { text: "OK" }
      ])
      return false
    }
    return true
  }
  const handleTakeImage = async () => {
    const hasPermission = await verifyPermission()

    if (!hasPermission) return

    ImagePicker.launchCameraAsync()
  }

  return (
    <View style={_styles.container}>
      <View style={_styles.preview}>
        <Text>No image yet</Text>
        <Image style={_styles.image} />
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
  container: { alignItems: "center" },
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
