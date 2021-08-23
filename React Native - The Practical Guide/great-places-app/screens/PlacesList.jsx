import React from "react"
import { StyleSheet, FlatList } from "react-native"
import { useSelector } from "react-redux"
import CustomHeaderButtons from "../components/CustomHeaderButtons"
import PlaceItem from "../components/PlaceItem"

export default function PlacesList(props) {
  const places = useSelector((state) => state.places.items)

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem
          title={item.title}
          image={null}
          address={null}
          onSelect={() =>
            props.navigation.navigate("PlaceDetails", {
              title: item.title,
              id: item.id
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
