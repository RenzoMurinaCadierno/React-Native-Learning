import React from "react"
import { ScrollView, View, Text, Image, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import MapPreview from "../components/MapPreview"
import colors from "../constants/colors"

export default function PlaceDetails(props) {
  const id = props.navigation.getParam("id")
  const { imageUri, address, latitude, longitude } = useSelector((state) =>
    state.places.items.find((p) => p.id === id)
  )
  const location = { latitude, longitude }

  const showMap = () =>
    props.navigation.navigate("Map", {
      readonly: true,
      initialLocation: location
    })

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Image source={{ uri: imageUri }} style={_styles.image} />
      <View style={_styles.locationContainer}>
        <View style={_styles.addressContainer}>
          <Text style={_styles.addressText}>{address}</Text>
        </View>
        <MapPreview
          location={location}
          style={_styles.mapPreview}
          onPress={showMap}
        />
      </View>
    </ScrollView>
  )
}

PlaceDetails.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam("title")
})

const _styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
    backgroundColor: "#ccc"
  },
  locationContainer: {
    marginVertical: 20,
    width: "90%",
    maxWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10
  },
  addressContainer: {
    padding: 20
  },
  addressText: {
    color: colors.PRIMARY,
    textAlign: "center"
  },
  mapPreview: {
    width: "100%",
    maxWidth: 350,
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
})
