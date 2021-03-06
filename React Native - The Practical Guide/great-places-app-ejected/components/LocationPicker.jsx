import React, { useEffect, useState } from "react"
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

export default function LocationPicker({ navigation, onPickLocation }) {
  const [pickedLocation, setPickedLocation] = useState({
    latitude: 0,
    longitude: 0
  })
  const [isFetching, setIsFetching] = useState(false)

  // comes from 'Map' screen.
  // > defined when saving a marker, undefined when navigating back
  const selectedLocation = navigation.getParam("location")

  useEffect(() => {
    if (selectedLocation?.latitude) {
      setPickedLocation(selectedLocation)
      onPickLocation(selectedLocation)
    }
  }, [selectedLocation, onPickLocation])

  const handleGetLocation = async () => {
    const hasPermission = await verifyPermission()

    if (!hasPermission) return

    try {
      setIsFetching(true)

      const res = await Location.getCurrentPositionAsync({ timeInterval: 5000 })
      const coordinates = {
        latitude: res.coords.latitude,
        longitude: res.coords.longitude
      }

      setPickedLocation(coordinates)
      onPickLocation(coordinates)
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

  const handleAddMarker = () => navigation.navigate("Map")

  return (
    <View style={_styles.container}>
      <MapPreview
        location={pickedLocation}
        onPress={handleAddMarker}
        style={_styles.preview}
      >
        {isFetching ? (
          <ActivityIndicator size="large" color={colors.PRIMARY} />
        ) : (
          <Text>No location</Text>
        )}
      </MapPreview>
      <View style={_styles.buttonsContainer}>
        <Button
          title="Pick location"
          color={colors.PRIMARY}
          onPress={handleAddMarker}
        />
        <Button
          title="Get location"
          color={colors.PRIMARY}
          onPress={handleGetLocation}
        />
      </View>
    </View>
  )
}

const _styles = StyleSheet.create({
  container: { marginBottom: 15, alignItems: "flex-end" },
  preview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
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
