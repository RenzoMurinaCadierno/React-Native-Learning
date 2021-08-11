import React from "react"
import { View, FlatList, StyleSheet } from "react-native"
import MealItem from "./MealItem"

export default function MealList({ data, navigation }) {
  const renderItem = (data) => (
    <MealItem
      title={data.item.title}
      duration={data.item.duration}
      complexity={data.item.complexity}
      affordability={data.item.affordability}
      imageUrl={data.item.imageUrl}
      onPress={() =>
        navigation.navigate({
          routeName: "MealDetails",
          params: { mealId: data.item.id }
        })
      }
    />
  )

  return (
    <View style={_styles.container}>
      <FlatList
        {...{ data, renderItem }}
        // keyExtractor={(item, i) => item.id} // not necessary!
        style={{ width: "95%", marginTop: "2%" }}
      />
    </View>
  )
}

const _styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
})
