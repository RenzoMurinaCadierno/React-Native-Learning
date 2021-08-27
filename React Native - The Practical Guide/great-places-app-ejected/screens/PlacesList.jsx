import React, { useEffect } from "react"
import { StyleSheet, FlatList } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import CustomHeaderButtons from "../components/CustomHeaderButtons"
import PlaceItem from "../components/PlaceItem"
import * as placesActions from "../store/actions/places"

export default function PlacesList(props) {
  const places = useSelector((state) => state.places.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(placesActions.loadPlaces())
  }, [dispatch])

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem
          title={item.title}
          image={item.imageUri}
          address={item.address}
          onSelect={() =>
            props.navigation.navigate("PlaceDetails", {
              title: item.title,
              id: item.id,
              imageUri: item.imageUri
            })
          }
        />
      )}
    />
  )
}

PlacesList.navigationOptions = ({ navigation }) => ({
  headerTitle: "All places",
  headerRight: () => (
    <CustomHeaderButtons
      title="Add place"
      iconName="add"
      onPress={() => navigation.navigate("NewPlace")}
    />
  )
})

const _styles = StyleSheet.create({
  container: {}
})
