import React, { useState } from "react"
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet
} from "react-native"
import MapPreview from "./MapPreview"
import * as Location from "expo-location"
import colors from "../constants/colors"

export default function LocationPicker(props) {
  const [pickedLocation, setPickedLocation] = useState({ lat: 0, lng: 0 })
  const [isFetching, setIsFetching] = useState(false)

  const handleGetLocation = async () => {
    const hasPermission = await verifyPermission()

    if (!hasPermission) return

    try {
      setIsFetching(true)

      const res = await Location.getCurrentPositionAsync({ timeInterval: 5000 })

      setPickedLocation({ lat: res.coords.latitude, lng: res.coords.longitude })
    } catch (err) {
      Alert.alert(
        "Could not fetch location",
        "Try again or pick location from map",
        [{ text: "Ok" }]
      )
      console.log(err)
      throw err
    }

    setIsFetching(false)
  }

  return (
    <View style={_styles.container}>
      <MapPreview location={pickedLocation} style={_styles.preview}>
        {isFetching ? (
          <ActivityIndicator size="large" color={colors.PRIMARY} />
        ) : (
          <Text>No location</Text>
        )}
      </MapPreview>
      <Button
        title="Get location"
        color={colors.PRIMARY}
        onPress={handleGetLocation}
      />
    </View>
  )
}

const _styles = StyleSheet.create({
  container: { marginBottom: 15 },
  preview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1
  }
})

async function verifyPermission() {
  const result = await Location.requestForegroundPermissionsAsync()

  if (result.status !== "granted") {
    Alert.alert("Failed access", "Location permission is required", [
      { text: "OK" }
    ])
    return false
  }
  return true
}
