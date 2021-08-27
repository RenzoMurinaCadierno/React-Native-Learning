import React, { useCallback, useEffect, useState } from "react"
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert
} from "react-native"
import MapView, { Marker } from "react-native-maps"
import colors from "../constants/colors"

const region = {
  latitude: 37.78, // point
  longitude: -122.43,
  latitudeDelta: 0.0922, // radius
  longitudeDelta: 0.0421
}

export default function Map({ navigation }) {
  // comes from 'PlaceDetails' screen
  const initialLocation = navigation.getParam("initialLocation")
  const readonly = navigation.getParam("readonly")

  const [location, setLocation] = useState({
    ...region,
    latitude: initialLocation?.latitude, // will be defined if
    longitude: initialLocation?.longitude // coming from 'PlaceDetails'
  })

  // event has a bunch of props, including `nativeEvent` with coordinates
  // target and position
  const handleSelectLocation = (e) => {
    if (readonly) return // picking location is disabled on `readonly`

    setLocation((prevSt) => ({
      ...prevSt,
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude
    }))
  }

  const saveLocation = useCallback(() => {
    if (!location.latitude) {
      return Alert.alert(
        "Failed to save location",
        "Please select a location in map before attempting to save",
        [{ text: "Ok" }]
      )
    }

    navigation.navigate("NewPlace", {
      location: { latitude: location.latitude, longitude: location.longitude }
    })
  }, [location])

  useEffect(() => {
    navigation.setParams({ saveLocation })
  }, [saveLocation])

  return (
    <MapView
      region={!location.latitude ? region : location}
      style={_styles.container}
      onPress={handleSelectLocation}
    >
      {location.latitude && <Marker title="Target" coordinate={location} />}
    </MapView>
  )
}

Map.navigationOptions = ({ navigation }) => {
  const saveLocation = navigation.getParam("saveLocation")
  const readonly = navigation.getParam("readonly")

  // if coming from 'PlaceDetails' screen, no 'Save' option
  return readonly
    ? {}
    : {
        headerRight: () => (
          <TouchableOpacity
            onPress={saveLocation}
            style={_styles.headerRightContainer}
          >
            <Text style={_styles.headerRightText}>Save</Text>
          </TouchableOpacity>
        )
      }
}

const _styles = StyleSheet.create({
  container: { flex: 1 }, // required to be displayed
  headerRightContainer: { marginHorizontal: 20 },
  headerRightText: {
    fontSize: 16,
    color: Platform.OS === "android" ? "white" : colors.PRIMARY
  }
})
